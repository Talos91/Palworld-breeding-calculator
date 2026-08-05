// Palworld Companion service worker — offline support for the PWA.
const VERSION = "v1";
const CORE = "palcompanion-core-" + VERSION;
const RUNTIME = "palcompanion-runtime-" + VERSION;
const CORE_ASSETS = ["./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CORE).then(c => c.addAll(CORE_ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== CORE && k !== RUNTIME).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  // Navigations / the HTML doc: network-first so updates appear, fall back to cache offline.
  if(req.mode === "navigate" || req.destination === "document"){
    e.respondWith(
      fetch(req).then(res => { const copy = res.clone(); caches.open(CORE).then(c => c.put("./index.html", copy)); return res; })
                .catch(() => caches.match("./index.html").then(r => r || caches.match("./")))
    );
    return;
  }
  // Everything else (images, icons): cache-first, then fill the runtime cache.
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone(); caches.open(RUNTIME).then(c => c.put(req, copy)); return res;
    }).catch(() => hit))
  );
});
