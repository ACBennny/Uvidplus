/*************************************************************
 * Enabling native app behaviour Uvid+
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/

    const CACHE_NAME = 'uvidplus-cache-v1';
    const ASSETS_TO_CACHE = 
    [
        '/',
        '/index.html',
        '/manifest.webmanifest',
        '/error/error-all-style.css',
        '/landing.css',
        '/main.css',
        '/join/setup.css',
        '/join/join-style.css',
        '/init.js',
        '/main.js',
        '/app.js',
        '/nav.js',
        '/status_upd.js',
        '/landing.js',
        '/fonts/BRLNSR.woff2',
        '/fonts/BRLNSB.woff2',
        '/logo/logo.ico',
        '/images/uvid-logo.png',
        '/app-images/android/android-launchericon-192-192.png',
        '/app-images/android/android-launchericon-512-512.png',
        '/app-images/ios/512.png',
        '/app-images/ios/180.png',
    ];

    self.addEventListener('install', event => 
    {
        event.waitUntil(
            caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
        );
    });

    self.addEventListener('activate', event => 
    {
        event.waitUntil(
            caches.keys().then(keys =>
                Promise.all(
                    keys
                        .filter(key => key !== CACHE_NAME)
                        .map(key => caches.delete(key))
                )
            )
        );
    });

    self.addEventListener('fetch', event => 
    {
        const request = event.request;

        // Only handle GET
        if(request.method !== 'GET') return;

        const url = new URL(request.url);

        // Avoid handling video requests
        if(url.pathname.endsWith('.mp4')
            || url.pathname.endsWith('.webm')
            || url.pathname.endsWith('.m3u8')
        )
        {
            return;
        }

        // Handles Navigation requests
        if(request.mode === 'navigate')
        {
            event.respondWith(
                caches.match('/index.html').then(cached => 
                {
                    if (cached) return cached;
                    return fetch(request);
                })
            );
            return;
        }

        // Handles other requests
        event.respondWith(
            caches.match(request).then(cached => 
            {
                if (cached) return cached;
                return fetch(request);
            })
        );
    });
