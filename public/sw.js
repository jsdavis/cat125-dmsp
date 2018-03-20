const CACHE_NAME = "dmsp-cache-v0";
const urlsToCache = [
  "/assets/background.jpg",
  "/assets/box.png"
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
      /* Following code caches everything. Only use in prod when done

      // Don't cache invalid responses
      if (!response || response.status !== 200 || response.type !== "basic")
        return response;

      Cache the response using the request stream
      let resToCache = response.clone();
      caches.open(CACHE_NAME).then(cache => {
        cache.put(event.request, resToCache);
      });
      */

      return response;
    });
  }));
});
