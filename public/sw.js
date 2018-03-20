const CACHE_NAME = "dmsp-cache-v0";
const urlsToCache = [
  // "/style.css",
  // "/style.css",
  // "/assets/icon-128x128.png",
  // "/assets/icon-144x144.png",
  // "/assets/icon-152x152.png",
  // "/assets/icon-192x192.png",
  // "/assets/icon-384x384.png",
  // "/assets/icon-512x512.png",
  // "/assets/icon-72x72.png",
  // "/assets/icon-96x96.png"
];

self.addEventListener("install", event => {
  // Open a cache for our app
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(urlsToCache);
  }));
});


self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(response => {
    // Response is cache hit, else fetch the request and add it to cache
    if (response) return response;

    // Clone it first, because streams can only be consumed once
    let fetchReq = event.request.clone();

    return fetch(fetchReq).then(response => {
      // Don't cache invalid responses
      if (!response || response.status !== 200 || response.type !== "basic")
        return response;

      // Cache the response using the request stream
      // let resToCache = response.clone();
      // caches.open(CACHE_NAME).then(cache => {
      //   cache.put(event.request, resToCache);
      // });

      return response;
    });
  }));
});
