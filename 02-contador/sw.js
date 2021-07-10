const CACHE_NAME = "v1_cache_contado_app_vue"
const urlsToCache = [
    "./",
    "./img/png/001-anatomy.ico",
    "./img/png/001-anatomy.png",
    "./img/png/output-onlinepngtools_128-128.png",
    "./img/png/output-onlinepngtools_16-16.png",
    "./img/png/output-onlinepngtools_256.png",
    "./img/png/output-onlinepngtools_32-32.png",
    "./img/png/output-onlinepngtools_64-64.png",
    "https://unpkg.com/vue@next",
    "./js/main.js",
    "./js/mountApp.js",
    "./css/style.css",
    "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
];

self.addEventListener(
    "install",
    e => {
        e.waitUntil(
            caches.open(CACHE_NAME).then(
                cache => cache.addAll(urlsToCache).then(
                    () => self.skipWaiting()
                ).catch(
                    error => console.log("Error en la instalación del cache ", error)
                )
            )
        )
    }
);

self.addEventListener(
    "activate",
    e => {
        const cacheWhiteList = [CACHE_NAME]
        e.waitUntil(
            caches.keys().then(
                cacheNames => {
                    return Promise.all(
                        cacheNames.map(
                            cacheName => {
                                if (cacheWhiteList.indexOf(cacheName) === -1) {
                                    return caches.delete(cacheName);
                                }
                            }
                        )
                    )
                }
            ).then(
                () => self.clients.claim()
            )
        )
    }
)

self.addEventListener(
    "fetch",
    e => {
        e.respondWith(
            caches.match(e.request).then(
                res => {
                    if (res) {
                        return res;
                    }
                    return fetch(e.request)
                }
            )
        )
    }
)