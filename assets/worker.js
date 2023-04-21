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
        './assets/images/instagram-min.webp',
        './assets/images/camera.webp',
        './assets/images/gallery/concerts/aaron-paul.webp',
        './assets/images/gallery/concerts/austin-neill.webp',
        './assets/images/gallery/entreprise/ali-morshedlou.webp',
        './assets/images/gallery/entreprise/jason-goodman.webp',
        './assets/images/gallery/entreprise/mateus-campos.webp',
        './assets/images/gallery/mariage/hannah-busing.webp',
        './assets/images/gallery/mariage/jakob-owens.webp',
        './assets/images/gallery/portraits/ade-tunji.webp',
        './assets/images/gallery/portraits/nino-van-prattenburg.webp',
        
      ]);
    })
  );
});