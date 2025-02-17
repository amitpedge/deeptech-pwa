// Simple service worker for testing
const CACHE_NAME = 'deeptech-cache-v1';

// List of assets to cache immediately
const INITIAL_CACHE = [
  '/',
  '/manifest.json',
  '/build/index.css',
  '/build/root.css',
  '/build/root.js',
  '/build/index.js'
];

// INSTALLATION
self.addEventListener('install', event => {
    console.log('Service Worker: Installing....');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching initial assets...');
                return cache.addAll(INITIAL_CACHE)
                    .catch(error => {
                        console.log('Some assets failed to cache:', error);
                        // Continue even if some assets fail to cache
                        return Promise.resolve();
                    });
            })
    );
    
    self.skipWaiting();
});

// ACTIVATION
self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');
    
    event.waitUntil(
        Promise.all([
            // Clean up old caches
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            // Take control immediately
            clients.claim()
        ])
    );
});

// FETCH HANDLING
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    // Return cached response
                    return cachedResponse;
                }

                // No cache match, try network
                return fetch(event.request)
                    .then(response => {
                        // Don't cache if not a success response
                        if (!response || response.status !== 200) {
                            return response;
                        }

                        // Cache successful responses
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache)
                                    .catch(err => {
                                        console.log('Caching failed:', err);
                                    });
                            });

                        return response;
                    })
                    .catch(error => {
                        console.log('Fetch failed:', error);
                        // Could return a custom offline page here
                        return new Response('Offline content');
                    });
            })
    );
});

// Debug helper
self.addEventListener('message', event => {
    if (event.data === 'CHECK_CACHE') {
        caches.open(CACHE_NAME)
            .then(cache => cache.keys())
            .then(requests => {
                console.log('=== Cache Contents ===');
                requests.forEach(request => {
                    console.log(request.url);
                });
                console.log('====================');
            });
    }
}); 