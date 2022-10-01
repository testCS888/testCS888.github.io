'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "45cdc72ab567569ffd64be2c3e20a18b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/back2.png": "ebfb4a62319b59bccfcf36b8806dd2a3",
"assets/images/back3.png": "d2312ab6d916eb56e57955873f75387a",
"assets/images/bgg.png": "d431c8f879108cce9be63944cf58166e",
"assets/images/bgg2.png": "9645794956c6b3be904d3c6a5d892e7a",
"assets/images/bgg3.png": "58ca2e169255f6d1846ec15d7fc9113b",
"assets/images/bgg_img.png": "67c9976fedc50708319368356d8cd561",
"assets/images/car.gif": "d4c27bbc7a2658778a88c0a17bc52027",
"assets/images/car1.gif": "063f3bbde1aac09b21cd2dc5f1a4bc75",
"assets/images/car2.gif": "a978e279c8c82c42083fda3e45dc4e39",
"assets/images/carshow.png": "478b3bc9265c77d21208a52bef08c371",
"assets/images/down.png": "4f54ea89e7f8127e44f1ba582a429825",
"assets/images/down2.png": "3c3fc0bd0eb91a9726dc64e516975203",
"assets/images/fz_lv1.png": "8ebc6511fcf7dc896fd00223af0800eb",
"assets/images/fz_lv2.png": "c10934aa53a9fd3f9539ec942093dd88",
"assets/images/fz_lv3.png": "596bf4d782ccd1dff423dcbd2dcbed18",
"assets/images/fz_lv4.png": "cce6fe880cfda508d67cc0abcd6a7418",
"assets/images/fz_lv5.png": "ce0bff60de14c958f552fd9318b4e667",
"assets/images/fz_lv6.png": "15a16e81fbc97f12c21aad9573fdfef8",
"assets/images/fz_lv7.png": "e421cd907abacb05660689b45a1ee53b",
"assets/images/fz_lv8.png": "a547f91ea9f1091379435059a92b6e62",
"assets/images/fz_lv_show1.png": "68a9a077247c63ce8d4e8d524d8a6961",
"assets/images/fz_lv_show2.png": "54f5150b79a05b7aca3d03f1dd703316",
"assets/images/fz_lv_show3.png": "d7243e6b39e48d8c0ea3fe372747dd23",
"assets/images/fz_lv_show4.png": "f64e4cbdf3abfb632e27f4ee110953bb",
"assets/images/fz_lv_show5.png": "681e374db5bf506e2413d9c929fea91e",
"assets/images/fz_lv_show6.png": "d102bdd6443d7eed8cb6a8f1a7b08ea7",
"assets/images/fz_lv_show7.png": "10d7913d651f61455d2671997572cb15",
"assets/images/fz_lv_show8.png": "2d6e92e6cc25bf531fb4c61d55e681ec",
"assets/images/gogo.gif": "df356734b0318ff489cd202d672cb1c3",
"assets/images/goto3.png": "f9a7fdb09bfe9a35124e47f40ea73cd4",
"assets/images/lv_img.png": "a883b7b396bc8c2752a4f3b664288bc6",
"assets/images/my_shop.png": "de6283d23a1973d8d146f2d9068d8f84",
"assets/images/qian_img.png": "24424b045367f3a7d4510548d9cd29c1",
"assets/images/qian_img2.png": "67542ee6b88519d62543c4054200c3bb",
"assets/images/set_img.png": "5a23bb1ecd0dfe26fcb36949fa9fa705",
"assets/images/share_img.png": "ba55019760dee8c6ca0028d4a857a50d",
"assets/images/shop_all_map2.png": "c881c56c21789d770edf3548b3c86691",
"assets/images/txline.png": "39ecb738d29b010d3e0c4b2558d5e853",
"assets/images/up_lv.png": "2dac1f3a497cd432395ae97b1151128d",
"assets/images/xing_img.png": "f79ad708e993516c1ef75fe024998b61",
"assets/NOTICES": "a5e8d5889de6568f4165e58bc71b4bd2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "a8796498eec43c2de64cc6515b4de1ef",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/loading.gif": "950265cdf65d152bf3c7d8bb87b2a117",
"icons/logo.png": "6f283c04a641e912c013e4f7af67979a",
"index.html": "2402558e617b8554d0235e3a2b589993",
"/": "2402558e617b8554d0235e3a2b589993",
"logo.png": "6f283c04a641e912c013e4f7af67979a",
"main.dart.js": "9d410ad9d76f5ecb5146ce116063ec9e",
"manifest.json": "dddf31a43c502bc2f0cd396990d78abb",
"version.json": "2df2fecd4c6b17d5f3aa900da53738d0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
