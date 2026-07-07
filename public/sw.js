const CACHE_NAME = 'yuki-portfolio-v1';
const scopePath = new URL(self.registration.scope).pathname;
const withScope = (path) => `${scopePath}${path.replace(/^\/+/, '')}`;
const STATIC_CACHE = [
  withScope(''),
  withScope('index.html'),
  withScope('img/favicon.png'),
  withScope('img/profile.png'),
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
  'https://fonts.googleapis.com/css?family=Material+Icons+Outlined'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(withScope('index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseToCache));

          return response;
        });
      })
  );
});
