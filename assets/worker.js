// Enregistrement des fichiers statiques dans le cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static-cache').then(function(cache) {
      return cache.addAll([
        './assets/bootstrap/bootstrap.css',
        './assets/style.css',
        './assets/maugallery.js',
        './assets/scripts.js',
        './assets/images/slider/ryoji-iwata.webp',
        './assets/images/slider/nicholas-green.webp',
        './assets/images/slider/edward-cisneros.webp',
        './assets/images/nina-photopres.webp',
        './assets/images/instagram-min.webp'
      ]);
    })
  );
});