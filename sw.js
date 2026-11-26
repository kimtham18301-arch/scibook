// Network-first Service Worker: luôn lấy bản mới nhất khi có mạng, tự động dùng bản lưu sẵn khi rớt Wi-Fi/4G
var CACHE_NAME = 'scibook-v20261128b';
var CORE_ASSETS = [
  './',
  './index.html',
  './css/style.css?v=20261128b',
  './js/data/lop6.js?v=20261128b',
  './js/data/lop7.js?v=20261128b',
  './js/data/lop8.js?v=20261128b',
  './js/data/lop9.js?v=20261128b',
  './js/data/types.js?v=20261128b',
  './js/data/exams.js?v=20261128b',
  './js/mathfmt.js?v=20261128b',
  './js/qbank.js?v=20261128b',
  './js/print.js?v=20261128b',
  './js/app.js?v=20261128b'
];

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(CORE_ASSETS).catch(function(){});
    })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE_NAME; }).map(function(k){ return caches.delete(k); })
      );
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(function(res){
      if (res && res.status === 200 && res.type === 'basic') {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(e.request, copy); });
      }
      return res;
    }).catch(function(){
      return caches.match(e.request).then(function(cached){
        return cached || caches.match('./index.html');
      });
    })
  );
});
