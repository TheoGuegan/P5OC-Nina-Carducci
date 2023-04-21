// Enregistrement des fichiers statiques dans le cache

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static-cache').then(function(cache) {
      return cache.addAll([
        './assets/*'
      ]);
    })
  );
});