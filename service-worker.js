/* 更新時は CACHE_VERSION を上げると、古いキャッシュが自動削除されます。 */
const CACHE_VERSION = "ato-ikura-v1.0.5";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./core.js",
  "./app.js",
  "./manifest.json?v=3",
  "./icons/icon.svg?v=3",
  "./icons/icon-192.png?v=3",
  "./icons/icon-512.png?v=3",
  "./icons/apple-touch-icon.png?v=3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
  );
});
