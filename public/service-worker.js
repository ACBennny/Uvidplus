/*************************************************************
 * Uvid+ Service Worker
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/

// Build - 2026-08-05

    const CACHE_NAME = 'uvidplus';

    async function networkFirst(request, cacheKey = request)
    {
        const cache = await caches.open(CACHE_NAME);

        try
        {
            const response = await fetch(request);

            if (response.ok)
            {
                await cache.put(cacheKey, response.clone());
            }

            return response;
        }
        catch
        {
            return cache.match(cacheKey);
        }
    }

    async function cacheFirst(request)
    {
        const cache = await caches.open(CACHE_NAME);

        const cached = await cache.match(request);

        if (cached) return cached;

        const response = await fetch(request);

        if (response.ok)
        {
            cache.put(request, response.clone());
        }

        return response;
    }


    // Install
    self.addEventListener("install", (event) => 
    {
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

    // Message
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
                networkFirst(request, "/index.html")
            );
            return;
        }

        // Handle CSS / JS
        if(request.destination === "script" || request.destination === "style") 
        {
            event.respondWith(
                networkFirst(request)
            );
            return;
        }

        // Handle Images / Fonts 
        if(request.destination === "image" || request.destination === "font") 
        {
            event.respondWith(
                cacheFirst(request)
            );
            return;
        }
    });
