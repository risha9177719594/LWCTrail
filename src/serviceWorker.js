const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/resources/css/style.css",
  "/resources/js/app.js",
  "/resources/images/coffee1.jpg",
  "/resources/images/coffee2.jpg",
  "/resources/images/coffee3.jpg",
  "/resources/images/coffee4.jpg",
  "/resources/images/coffee5.jpg",
  "/resources/images/coffee6.jpg",
  "/resources/images/coffee7.jpg",
  "/resources/images/coffee8.jpg",
  "/resources/images/coffee9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})