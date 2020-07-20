/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "909c52101f3e27529d0ab8a294f58de9"
  },
  {
    "url": "assets/css/0.styles.55362abd.css",
    "revision": "d4c84e9d1b145af5f36433aa2d0b5f88"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f18c2d2f.js",
    "revision": "3f4ec125d10b4e1431c48bf41f828fed"
  },
  {
    "url": "assets/js/11.ef27daef.js",
    "revision": "1259b3b0a0c482cf95fad91e9cea8a5d"
  },
  {
    "url": "assets/js/12.2de281d5.js",
    "revision": "f0735203271b453bdd1dede643f5c89d"
  },
  {
    "url": "assets/js/13.23d2b6f8.js",
    "revision": "b747afd8cf344cc3cc457ac641fd82ee"
  },
  {
    "url": "assets/js/14.d06fc4db.js",
    "revision": "b99f6b93faaed9520731ecb890c0d554"
  },
  {
    "url": "assets/js/15.36228e6e.js",
    "revision": "50cf6a448355a682c62863b615d3c03d"
  },
  {
    "url": "assets/js/16.8fd9d0f2.js",
    "revision": "dd378ff7e136bd0894ebf603807d559e"
  },
  {
    "url": "assets/js/2.1a04d75f.js",
    "revision": "20f42e2aeb90a09ab505c5102db1c40e"
  },
  {
    "url": "assets/js/3.f9c1bfad.js",
    "revision": "3c80008c6a35856015b338f483824f20"
  },
  {
    "url": "assets/js/4.13a16a50.js",
    "revision": "393f723d9211b07ed7af4cef98d7052d"
  },
  {
    "url": "assets/js/5.3b01958f.js",
    "revision": "d7e16bcfa21d1723af38b0ebcbe165af"
  },
  {
    "url": "assets/js/6.77b11580.js",
    "revision": "ce00bafd74aaa698a87008334a672e24"
  },
  {
    "url": "assets/js/7.49300d03.js",
    "revision": "37c75f9081367674a82d58a835b15b60"
  },
  {
    "url": "assets/js/8.3433a835.js",
    "revision": "c77b461b426050286971d62d227517b8"
  },
  {
    "url": "assets/js/9.18368a31.js",
    "revision": "0981451b47c61e9831a07d1923939cf5"
  },
  {
    "url": "assets/js/app.bc4abc56.js",
    "revision": "6d59b5924c5ee58f27b52267ec3536a7"
  },
  {
    "url": "blog/index.html",
    "revision": "a0eb30f477d31d0a425d46e32591d2f9"
  },
  {
    "url": "home.jpg",
    "revision": "bbe84815591b1c61da3d1a4cb9ae3849"
  },
  {
    "url": "index.html",
    "revision": "532de2d7bd0cf5804ca61e370f65d159"
  },
  {
    "url": "nav.jpg",
    "revision": "23b20e681ead09f60c22f41f2a0c189c"
  },
  {
    "url": "nav01.jpg",
    "revision": "d1004b469aa8d0cb8c97629227b4c347"
  },
  {
    "url": "node/index.html",
    "revision": "69024fb3597366ebf397f45eac89699f"
  },
  {
    "url": "node/path.html",
    "revision": "18e95d80debc5023bc87371bac281401"
  },
  {
    "url": "node/stream.html",
    "revision": "8bca744d4d27fe0e8f83a2cd52c02942"
  },
  {
    "url": "setting01.png",
    "revision": "07ce53949e3980b11ca1bc1531a4e253"
  },
  {
    "url": "setting02.jpg",
    "revision": "5861730a8a40bb230fc3fcffe6ab6e92"
  },
  {
    "url": "sidebar.jpg",
    "revision": "8d5b94e17da4f53a64443b5ca6f05353"
  },
  {
    "url": "web/css/1.html",
    "revision": "fa9077dcf7961dffed55c9020aec4f2c"
  },
  {
    "url": "web/css/index.html",
    "revision": "76d67d30ea25ebd83ff10dfbd517b1f4"
  },
  {
    "url": "web/html/index.html",
    "revision": "a80d76b4be0360f387df2e3901cf6eed"
  },
  {
    "url": "web/index.html",
    "revision": "5bdbe83f4902938f2be034146369943b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
