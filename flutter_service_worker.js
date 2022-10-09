'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "00a65ce45ce8798c93a2f1d41a6c8bc7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/back2.png": "ebfb4a62319b59bccfcf36b8806dd2a3",
"assets/images/back3.png": "d2312ab6d916eb56e57955873f75387a",
"assets/images/bgg2.png": "9645794956c6b3be904d3c6a5d892e7a",
"assets/images/bgg3.png": "58ca2e169255f6d1846ec15d7fc9113b",
"assets/images/car2_left_b.png": "02794225236c45b27ee157f8d43da350",
"assets/images/car2_left_t.png": "dfc67219082e821fb5e20df5ee62503b",
"assets/images/car3_left_b.png": "3cf70cbcfce64fbbae125575959c022f",
"assets/images/car3_left_t.png": "2cf54a5fa121834b0ae5c08005de5f4d",
"assets/images/car4_left_b.png": "3813f4cce9050f3795c19bc1882c9bdc",
"assets/images/car4_left_t.png": "5c0f9cf2111b7e5c43007fd65d500a39",
"assets/images/carshow.png": "478b3bc9265c77d21208a52bef08c371",
"assets/images/car_left_b.png": "7578001f63f8ad7bdd178df5744a55f2",
"assets/images/car_left_t.png": "f195efdb3fc1335172d0c28e8a8bb041",
"assets/images/car_right_b.png": "167a84a66df5da5a0a84e373abbd62cc",
"assets/images/chaoshi.png": "c3b61203e1d76be3cce05c5e966224c0",
"assets/images/chezhan.png": "ee600c47377eff289c642c748628ee63",
"assets/images/chuan1.png": "bbce897a99a0224e70b8de1feafb8d10",
"assets/images/chuan2.png": "c3e61d82c5dc35032038c7bc421e315d",
"assets/images/chuan3.png": "86a1024383693ab8090a8e275e660de0",
"assets/images/chuan4.png": "6c9ee73e8370c6a696d7932ad6e81bf9",
"assets/images/chuan5.png": "112fde97258340a55ef7a7976c272a1c",
"assets/images/chuan6.png": "ab32780480ca5780b3c77e1c3bf9ec7f",
"assets/images/chuan7.png": "c99662036c0173474d2da7c778f1594f",
"assets/images/chuan8.png": "12d71ff601d2dbd8e1cf4543962a0ec6",
"assets/images/daolu1.png": "5d32a76974407201c8b1653f06955cea",
"assets/images/daolu2.png": "3ff44a53ef9fe304724ba1f15c054683",
"assets/images/daoluwan1.png": "b7d2856aa6f6c866196a581fb2ae1b5e",
"assets/images/dasha1.png": "eb12b888c6e2914af5f34290a8e43e4e",
"assets/images/dasha2.png": "9c53389cecce12df2ca1793eb1ca0e80",
"assets/images/dasha3.png": "48e8d48611bf706fd7a672879188d256",
"assets/images/dasha4.png": "90c8ab8cda11d2565ab1a80e3c5f38d3",
"assets/images/dasha5.png": "e14df0f53aac57901bbaa7f021aef47e",
"assets/images/dishike1.png": "21fcb3d2190b0e87af926c1d34e04372",
"assets/images/dishike2.png": "824b9930444215bb03d08fa58d16c4da",
"assets/images/dishike3.png": "c322cc17d8225bdb8e02d40baded3825",
"assets/images/dishike4.png": "609735a57b49acde8b247129f4b6d15d",
"assets/images/dishike5.png": "b41d42fb7921fad781d9e8a5d0005067",
"assets/images/down.png": "4f54ea89e7f8127e44f1ba582a429825",
"assets/images/down2.png": "3c3fc0bd0eb91a9726dc64e516975203",
"assets/images/duchang1.png": "7047f5510487ae3aab95d3ae3bb7df10",
"assets/images/duchang2.png": "3cb4021ccea48f3bb1635bc4509ef855",
"assets/images/duchang3.png": "112f6a4fb5d4b80443101729ea67130f",
"assets/images/duchang4.png": "3cb4021ccea48f3bb1635bc4509ef855",
"assets/images/feiji1.png": "f1f18ee90a5f36acdb87f0120d15e2df",
"assets/images/feiji2.png": "7dfe2e57c71f397cbb5e13d597f7f04c",
"assets/images/feiji3.png": "2c80f52f5752ca90d6d2e66d2dad5b65",
"assets/images/feiji_yy.png": "a50c44a791402efd036b5b311986cf26",
"assets/images/fo.png": "b3874efab232a545e0fc7edc60a39085",
"assets/images/fz_lv1.png": "68d2eeecdd3af5794042385c96a1a392",
"assets/images/fz_lv2.png": "b23572cead304463ce8e00b32ffa0c73",
"assets/images/fz_lv3.png": "96aa5fee55116f0754e27f7ff43b4803",
"assets/images/fz_lv4.png": "429d22edb422df849a5dfdbe2533b93d",
"assets/images/fz_lv5.png": "b0a2968e8ee5808c32a097f2fede6770",
"assets/images/fz_lv6.png": "49e0e94e149cece4bcdab65512147692",
"assets/images/fz_lv7.png": "fce38bd2df5171619221d3696638b7d1",
"assets/images/fz_lv8.png": "1487764ad872d7675741704fffe10197",
"assets/images/gaoerfu.png": "28d92e4ba8b2f5af6de0c0cd9674b5fb",
"assets/images/gaoerfu2.png": "68bcc1d257a274bef600d7237ff9cd5a",
"assets/images/gejuyuan.png": "d8eee8939397b9306f92d1f0076f0772",
"assets/images/gogo.gif": "df356734b0318ff489cd202d672cb1c3",
"assets/images/goto3.png": "f9a7fdb09bfe9a35124e47f40ea73cd4",
"assets/images/haibian_chuangwu.png": "ba511a3feee59a289ba3be15636bbe43",
"assets/images/haibian_dengta.png": "5f60cac21794cb1a2846ca48b55bc42f",
"assets/images/haibian_jiudian.png": "73969f7a22fbb6c1aeb0e2a921956bd5",
"assets/images/haibian_jiudian2.png": "27f59f4addf80142627457e69aeb2f12",
"assets/images/haibian_matou.png": "ff336da15fd988c1a65f517bbed109a1",
"assets/images/haibian_ren1.png": "8095832e2599fc4c3a8ac4dc77b52866",
"assets/images/haibian_wan1.png": "daf94a1ed755671f193bd8dfee68aae5",
"assets/images/haibian_wan2.png": "06cc61c535e101eac23c91d8a69a1ca4",
"assets/images/haibian_wan3.png": "abd5b796f29cbb696c942745ef69830a",
"assets/images/haibian_wan4.png": "0ecc3d3a9418d405650b5b97c7b03451",
"assets/images/haidaochuan1.png": "0f7b1d2d53ede19bb4803f77b2217f38",
"assets/images/haidaochuan2.png": "0f7b1d2d53ede19bb4803f77b2217f38",
"assets/images/haidaochuan3.png": "8cb6edcf5cee88afaf5108bc4b447f1c",
"assets/images/haidaochuan4.png": "935f7883cb8ca5a9b824db4f9760f0c7",
"assets/images/haidaochuan5.png": "4e32a653f8e77defe2ffbbd0cfd740b0",
"assets/images/huaban1.png": "ce2dfc16d88f28aa8fc77ed86d5bba17",
"assets/images/huaban2.png": "3566c9e859870ae1f5263499e5fb579e",
"assets/images/huaban3.png": "7f2f112a41a8ea5449bfdda56b679622",
"assets/images/huaban4.png": "409830f5e3052d391baa7c5353a8112d",
"assets/images/huaban5.png": "ae2278ab89ca95353cc61c6bcf557c1a",
"assets/images/huaban6.png": "61f9c7b4c97e7854b065604ef0b71e89",
"assets/images/huaban7.png": "737504a04775db05d0d8fa696a6c4318",
"assets/images/huoche.png": "d72882867dcc56c2a0944c94fe3dd596",
"assets/images/huochebian.png": "e7447dcbf3bd9db86583c0edea8c6ef4",
"assets/images/huochegui.png": "b1369612c27ff89477576f70b9bf11b6",
"assets/images/jianshezhong.png": "03b6d83cb40d02232dc4e6dfdff4e4f4",
"assets/images/jianshezhong2.png": "cc00c5eedb9292e1b4bf394f9ad27d96",
"assets/images/jingchaju.png": "8d9947967ad3a12be7cac1bf89d2750f",
"assets/images/jingjichang.png": "97d7fe4f17b1f4d5a5e3d71053498ad8",
"assets/images/kadingche1.png": "f2f44eca4a0f8551c7dce0cbca07d10d",
"assets/images/kadingche2.png": "b5d521844602b6790af889aa7a50ed31",
"assets/images/kadingche3.png": "ec572a30476316ea933aaddb9f76ebf4",
"assets/images/kadingche4.png": "addf1fe5dd74795f0043c92a48bdeee3",
"assets/images/keng.png": "db31dc41fcba99418d4fc2b376aebf19",
"assets/images/kuangshan1.png": "f8fdd30b0959bbefd05ca3023d2f0eca",
"assets/images/kuangshan2.png": "a4f5f7184f290eab3c69ce42e0dad34c",
"assets/images/kuangshan3.png": "6136923c35003edba0db72d28d85be39",
"assets/images/kuangshan4.png": "2610783489937e1977b40a9b3133a8fb",
"assets/images/kuangshan5.png": "aa780020f43ad2d1fb96e5bc06d8816d",
"assets/images/kuangshan6.png": "f2c100adbfe95adf7d0db5e43c7fb8a5",
"assets/images/lunchuan.png": "88f7570b805bf3d1b2f2c4a64593208a",
"assets/images/lv_img.png": "a883b7b396bc8c2752a4f3b664288bc6",
"assets/images/motian1.png": "b37beae284c566f3bbf6a841c65543b7",
"assets/images/motian2.png": "712fdef2e6abdc1817b35338ae04859e",
"assets/images/motian3.png": "aec62c6e734c50c519e212bce10270f9",
"assets/images/motian4.png": "21c3ef6116bd74748b6f8474a7475a28",
"assets/images/my_shop.png": "de6283d23a1973d8d146f2d9068d8f84",
"assets/images/nvshengxiang.png": "9c78506c72a718bad12bace736f147dd",
"assets/images/penquan1.png": "7fc25c3462d5a6bca62881b738ed8234",
"assets/images/penquan2.png": "e2415cc8359b893fdb9a16d32972f13d",
"assets/images/penquan3.png": "8957341c50612eb30b6608b08f11dbf2",
"assets/images/penquan4.png": "e2415cc8359b893fdb9a16d32972f13d",
"assets/images/pochuan1.png": "07b5bea78629e0b3bf2b7b9e5a983b20",
"assets/images/pochuan2.png": "97b3759020913d9d9817882ee341e990",
"assets/images/qian_img.png": "24424b045367f3a7d4510548d9cd29c1",
"assets/images/qian_img2.png": "67542ee6b88519d62543c4054200c3bb",
"assets/images/renzou.gif": "076d497b4c609708381e99f30caaef5c",
"assets/images/reqiqiu_dianpu.png": "3d029f4d89c95b70992f2e51f4201af3",
"assets/images/reqiqiu_show.png": "ad9ea55e2d8eac1e289bbaf77001e024",
"assets/images/set_img.png": "5a23bb1ecd0dfe26fcb36949fa9fa705",
"assets/images/share_img.png": "ba55019760dee8c6ca0028d4a857a50d",
"assets/images/shenlin.png": "772d54314884ba7523ffcb2109f9dd29",
"assets/images/shenlin2.png": "9fe8dfa7d61717a56053b8ab18f7dd27",
"assets/images/shop_all_map2.png": "aed18641c2c879e159941fe07f8a071f",
"assets/images/SimCity.mp3": "bda6d1ad4906be1e4b9d771b45fa516a",
"assets/images/tieta.png": "bb5dc68e94cb23346181c2e27c054466",
"assets/images/txline.png": "39ecb738d29b010d3e0c4b2558d5e853",
"assets/images/up_lv.png": "2dac1f3a497cd432395ae97b1151128d",
"assets/images/xing_img.png": "f79ad708e993516c1ef75fe024998b61",
"assets/images/xinhaota1.png": "0f0dc73ab87545824d4b60ec2f6aa031",
"assets/images/xinhaota2.png": "6e526ba64e3e2eb59946b1bc1441406b",
"assets/images/xinhaota3.png": "e632bb07e49820123b8219e58a1baee4",
"assets/images/xinhaota4.png": "ccad27a1cad354e24af66a899cb60c9d",
"assets/images/xinhaota5.png": "c7ca444af6ec536c87bb65d08b25f14c",
"assets/images/yanhua1.png": "dcc8f50bb04b5ce55e1896c67251ef83",
"assets/images/yanhua2.png": "4d6d726c95a6665d7b799374d51f35a6",
"assets/images/yanhua3.png": "17a06dc6ae4eea22162ddb0240364b21",
"assets/images/yanhua4.png": "8ae49d88ec021b571f4afe0ffc773320",
"assets/images/yanhua5.png": "b9bfffd49a6e2d00d88bfb927bb5d239",
"assets/images/yanhua6.png": "d3784114e502942b7ec8f03762ce9cf0",
"assets/images/yinhuashu.png": "46d26bbc8c2d551a57fefeab2bdf5011",
"assets/images/yiyuan.png": "dde13d340fc01f9300a94fff6cd4b42a",
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
"icons/logo.jpg": "0c95019134d8fd2304e70cdb3bc3c94d",
"icons/logo.png": "6f283c04a641e912c013e4f7af67979a",
"index.html": "128e88db2ef5e9698ec7e26eb19b3c70",
"/": "128e88db2ef5e9698ec7e26eb19b3c70",
"logo.png": "6f283c04a641e912c013e4f7af67979a",
"main.dart.js": "4d6ba8e210d739bb51421929cc879d01",
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
