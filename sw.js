const CACHE_NAME = 'otsigngen-shell-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './sw.js', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  // เก็บเฉพาะไฟล์หน้า PWA; ข้อมูล GAS ต้องเรียกแบบออนไลน์เสมอ เพื่อไม่ให้ข้อมูลค้าง
  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
      return res;
    }).catch(() => caches.match('./index.html'))));
  }
});
