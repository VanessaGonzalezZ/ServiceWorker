const cachePWA = "cache-site-v1";

const assets = [
    "/",
    "/index.html",
    "/manifest.json",
    "/css/style.css",
    "/css/style6.css",
    "/css/style7.css",
    "/js/app.js",
    "/images/bg.jpg",
    "/images/bubble.png",
    "/images/feeds.jpg",
    "/images/link1.png",
    "/images/link2.png",
    "/images/link3.png",
    "/images/link4.png",
    "/images/link5.png",
    "/images/ltfeature.jpg",
    "/images/portada.jpg",
    "/images/rtboxbg.jpg",
    "/images/rtboxbg1.jpg",
    "/images/rtfeature.jpg",
    "/images/topbg.jpg",
    "/images/icons/android-launchericon-48-48.png",
    "/images/icons/android-launchericon-72-72.png",
    "/images/icons/android-launchericon-96-96.png",
    "/images/icons/android-launchericon-144-144.png",
    "/images/icons/android-launchericon-192-192.png",
    "/images/icons/android-launchericon-512-512.png",
    
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cachePWA).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    )
});