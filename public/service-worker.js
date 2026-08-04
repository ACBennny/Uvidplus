/*************************************************************
 * Enabling native app behaviour Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/

    const CACHE_NAME = 'uvidplus-cache';



    // Install
    self.addEventListener("install", (event) => 
    {
        self.skipWaiting();
        event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.add("/index.html")));
    });


    // Activate
    self.addEventListener("activate", event => 
    {
        event.waitUntil(

            Promise.all([

                // Remove old caches
                caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))),

                self.clients.claim()

            ])
        );
    });

    
    self.addEventListener("message", event => 
    {
        if(event.data?.type === "SKIP_WAITING") 
        {
            self.skipWaiting();
        }
    });


    // Fetch
    self.addEventListener("fetch", event => 
    {

        const request = event.request;

        if(request.method !== "GET") return;

        const url = new URL(request.url);

        // Ignore requests to other domains
        if (url.origin !== self.location.origin) return;

        // Ignore videos
        if(request.destination === "video") return;
        
        // Handle navigation
        if(request.mode === "navigate") 
        {
            event.respondWith(
                fetch(request)
                    .then(async response => 
                    {
                        if(response.ok) 
                        {
                            const cache = await caches.open(CACHE_NAME);
                            await cache.put("/index.html", response.clone());

                        }

                        return response;

                    })
                    .catch(async () => {return caches.match("/index.html");})
            );
            return;
        }

        // Handle CSS / JS
        if(request.destination === "script" || request.destination === "style") 
        {
            event.respondWith(
                caches.match(request)
                    .then(cached => 
                    {
                        const networkFetch =
                            fetch(request)
                                .then(async response => 
                                {
                                    if(response.ok) 
                                    {
                                        const cache = await caches.open(CACHE_NAME);
                                        cache.put(request, response.clone());
                                    }
                                    return response;
                                })
                                .catch(() => cached);

                        event.waitUntil(networkFetch);

                        return cached || networkFetch;
                    })
            );
            return;
        }

        // Handle Images / Fonts 
        if(request.destination === "image" || request.destination === "font") 
        {
            event.respondWith(
                caches.match(request)
                    .then(async cached => 
                    {
                        if(cached) return cached;

                        const response = await fetch(request);

                        if(response.ok) 
                        {
                            const cache = await caches.open(CACHE_NAME);
                            await cache.put(request, response.clone());
                        }

                        return response;
                    })
            );
            return;
        }

        // Handle everything else
        event.respondWith(
            fetch(request)
                .then(async response => 
                {
                    if(response.ok) 
                    {
                        const cache = await caches.open(CACHE_NAME);
                        await cache.put(request, response.clone());
                    }

                    return response;
                })
                .catch(() => caches.match(request))
        );

    });
    // const ASSETS_TO_CACHE = 
    // [
    //     '/',
    //     '/index.html',
    //     '/manifest.webmanifest',
    //     '/error/error-all-style.css',
    //     '/landing.css',
    //     '/main.css',
    //     '/join/setup.css',
    //     '/join/join-style.css',
    //     '/init.js',
    //     '/main.js',
    //     '/app.js',
    //     '/nav.js',
    //     '/status_upd.js',
    //     '/landing.js',
    //     '/fonts/BRLNSR.woff2',
    //     '/fonts/BRLNSB.woff2',
    //     '/logo/logo.ico',
    //     '/images/uvid-logo.png',
    //     '/app-images/android/android-launchericon-192-192.png',
    //     '/app-images/android/android-launchericon-512-512.png',
    //     '/app-images/ios/512.png',
    //     '/app-images/ios/180.png',
    // ];

    // self.addEventListener('install', event => 
    // {
    //     self.skipWaiting();
    //     event.waitUntil(
    //         caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
    //     );
    // });

    // self.addEventListener('activate', event => 
    // {
    //     event.waitUntil(
    //         Promise.all([
    //             caches.keys().then(keys =>
    //                 Promise.all(
    //                     keys
    //                         .filter(key => key !== CACHE_NAME)
    //                         .map(key => caches.delete(key))
    //                 )
    //             )
    //         ])
    //     );
    //     self.clients.claim()
    // });

    // self.addEventListener('fetch', event => 
    // {
    //     const request = event.request;

    //     // Only handle GET
    //     if(request.method !== 'GET') return;

    //     const url = new URL(request.url);

    //     // Avoid handling video requests
    //     if(url.pathname.endsWith('.mp4')
    //         || url.pathname.endsWith('.webm')
    //         || url.pathname.endsWith('.m3u8')
    //     )
    //     {
    //         return;
    //     }

    //     // Handles Navigation requests
    //     if(request.mode === 'navigate')
    //     {
    //         event.respondWith(
    //             fetch(request)
    //                 .then(response => 
    //                 {
    //                     const copy = response.clone();
    //                     casches.open(CACHE_NAME).then(cache => cache.put("/index.html", copy));
    //                     return response;
    //                 })
    //                 .catch(() => caches.match('/index.html'))
    //         );
    //         return;
    //     }

    //     // Handles styles & scripts
    //     if(request.destination === "style" || request.destination === "script")
    //     {
    //         event.respondWith(
    //             caches.match(request)
    //             .then(cached => 
    //             {
    //                 const ntwkFecth = 
    //                 fetch(req)
    //                     .then(rsp => 
    //                     {
    //                         caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
    //                     });

    //                 return cached || ntwkFecth;
    //             })
    //         );
    //         return;
    //     }

    //     // Handle fonts & images
    //     if(request.destination === "font" || request.destination === "image")
    //     {
    //         event.respondWith(
    //             caches.match(request)
    //             .then(cached => 
    //             {
    //                 if (cached) return cached;

    //                 return fetch(req)
    //                     .then(rsp => 
    //                     {
    //                         caches.open(CACHE_NAME).then(cache => cache.put(req, response.clone()));
    //                         return rsp;
    //                     });
    //             })
    //         );
    //         return;
    //     }

    //     // Handle everything else
    //     event.respondWith(
    //         caches.match(request).then(cached => 
    //         {
    //             if (cached) return cached;
    //             return fetch(request);
    //         })
    //     );
    // });
