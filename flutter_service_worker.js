'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c2a08cda2a1e690bfed5ce9fc4d9e5b1",
"index.html": "5c6fe53cd47d3f8aa2aa63066c2976f5",
"/": "5c6fe53cd47d3f8aa2aa63066c2976f5",
"main.dart.js": "d5fa3cd85da3ae945a5c2bda45a5fbc0",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c421511f2c33bfb0568444a65bab34ab",
".git/REBASE_HEAD": "c5f8405dc99eb28e77a39b20a2a44b6f",
".git/ORIG_HEAD": "71d3dd12613919ee3daefbf5aa35cae4",
".git/config": "bea12514d542ffc70ac0e52182e4e2c9",
".git/objects/3e/21fe00147c747d2bc522373266d641edef6608": "a1fe327e5a20084e0313a09f3bda801c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/1ec004707d283bc328373dbc87cbbec0356c11": "d59e797e387375aadcb3340c4279bead",
".git/objects/3c/d266d72fc3b6bee14b8111ae58b6d48c9a5999": "26613efd355dec5283f227d79525b667",
".git/objects/0b/634e436df575a6e9967376b080fbb1940612ca": "f5169a052c96b5671d3b9132d8bd52cf",
".git/objects/94/9aa419ec253966bda2266b4025bd3d4733fe00": "ffba6bc34260761f37d173adb89505f5",
".git/objects/0e/0ee03ff60c0ce87ae41d1f5b6f8122c43a0796": "02e47111fd14dadde936f258476f2ddf",
".git/objects/9d/abd93a708dbf87aa2ac4626e8af2fe4c1f84db": "9a2f6f35d5c55a541c4237825519f77c",
".git/objects/ad/069816d3343d5b9f524e3088fea4c99c94cc81": "78da4df52f2baeb04e78646f359181b7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/24bfbd7a27825ffa26dbb22c97024ddf17c9b9": "706da47d62e4ba649b5f1f69321a3a84",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/b1fe44630ef63b1d62de77f750670379614306": "156b1fc4d77abb2a7256e378ae8b641e",
".git/objects/ee/ec13cf617247026205973175ed35e3d25444c4": "75b06d14513028117b71d7113b419826",
".git/objects/fc/4514a2d58f6d8cbcac3b3599e974dd225c0ff4": "6c77e616fff8b0368978bd8087d469b3",
".git/objects/fd/9046d61a74df48a816eee82310baad76f22444": "34798a7a1a67acc3568dcf5296975563",
".git/objects/f2/40c683366c3b852129fb98ed35018beec06498": "fa292454b6c7f0382daa4c0355e27867",
".git/objects/fe/3269009fd0d18b226219309575d5c7424573db": "a2d816043eb97c1a17df1e810edc9ef3",
".git/objects/c1/39d048f2b8a337e111369c6e04b44f8106205b": "289b2fa4a4222768215f0559fdf49132",
".git/objects/18/bb982fb1b7bb0b507b090fb3fad59f14ca6ebb": "69f8318184ad385dcf0efa2a4d463be3",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/89/45a466b6d64716c4c0a24a288a377f7f170d1f": "07cc27b20211cba0fc8c76f2551c17b2",
".git/objects/73/035cba60aefeaf776f73d5b1ee07cc97dd6fda": "0c5b1bdbe3479b11fde2779df75ef043",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/74/f80986fcd1e09222fa4ab6020266e879cfdaef": "c8f22c5f711ec585993ee02828903e4e",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8f/687b20cc89a13af7a417eed2670b8cb50aa511": "d1896d5ba6635ac93e3157cb5f63105c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/9c6afac48c1778de54775bfb62bf37c7eccb70": "93cc43763a842fc9f26192158a351e30",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/fb41a5aab8e7469b704137a961ad6326505fd5": "5e7f05625879c656a9e66bcb9ea0b215",
".git/objects/98/b608ffc6564304c694c455d4b7035c52e26e19": "e91fe45b0c53b2d747f4844db81688c7",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/2241d335b0f85700c582f8f5047285833128dd": "f7dcc786cc0531ee67a701c4f99ebe2a",
".git/objects/5e/f9478de486b6c9e4172c24efeb8b87327cac99": "6c086694294995e6e493d7858f1556f1",
".git/objects/6d/80df9160d94401d78937f4e31d25352fc76864": "19216fcbfc9c3271bcaff0ffbee0c352",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/377f4ed84489c4999ee1e0bbfad159588d16e4": "73b3aaa16d99b6f859fc82e9da18c8b7",
".git/objects/0f/9eedb515fdedb242933158a0278265c11db608": "350b02f2703fd1fa5e48fd108d4ffd98",
".git/objects/d3/8c6cc3c7a711241255fadef2aa143028039f1f": "2faf925c724c246d8aec3a1e13c2545d",
".git/objects/b8/2f61f9f9b0263df56194597a06b462db0f2902": "87f0b489394351d1dcf079aff1f0eff1",
".git/objects/a9/cb67eae0b019f68795e478bd43c34d3f9470d2": "afb9b4a6d7d6ad7092b2621d92e1c891",
".git/objects/d2/dd38bb21a5eba8bdda3a179de10119e44e756b": "3b9a07f129d78171ab1e3fd0ffdada33",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/5ca58d085a331101861d5c0d64599b0ca49794": "3b85888121096c7797e32327b207e3d1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e2ad75c53b81464f87cd0adb192d60dbf1ca5f": "effe18b24bdc41dd84d418d2e481b213",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/48bfcffd34c906875c3bc1778da004c2ac89ed": "50cd34796ac80d1b1e2b174c894f2228",
".git/objects/ea/1e31e94d8e07175808dfec582ee68acfc429bb": "a2c825427bceeac63bbb036a2e61e8e2",
".git/objects/ea/6c908f8a210524adbcc0c2eea6c26e6594ad60": "e8972713d538e1b452a592fe81636412",
".git/objects/cd/c28dc5e562168f21e014ff0acfb6c442b000a7": "10c2434a7a74c0cd08e70a70ff6f7007",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f0/4e81275ed41e7ae21d56e423022022cc459825": "cc4b328fa2559ea692f4859b04f31bc7",
".git/objects/f7/7200d8b722ae13e553d236c1326c5c59e00d0b": "b7296296cff747228e2cbb3fc28f9ffe",
".git/objects/f7/1a4be7ac0b30d8130b5830134a7a60ef8d60d2": "88d46b55aacba4d9e235924d75415b1e",
".git/objects/c2/d0409e1592c2a05418dcb037612c8738fb7fa5": "bb6e31fd80e4f4cc7d348adfe5fe7ef8",
".git/objects/f1/5dd7e2e40d56dba37b8567d52f51caa3d11568": "f36f4745a0235c4a5e97f5aeb303b85c",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/2957b7e152c994d11b25c89a4c11824a564eab": "ccf0e9743aa4ef2a303258ffe29633b9",
".git/objects/70/0250ce8b20644a9bb8287fc71515a9163b8316": "663639a66201ca4d9ca6c003b37f802f",
".git/objects/49/0d138439747fd49049dfe67682dd5d4981a5bd": "09fa382e9aa888419cd308c85fa24e6a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/22/2666c97ce2db6a6f464fc2ebcb531bd29b9d5d": "1fbf42fd38b22eef95d7b0efb31d0fa6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "e6c509490be63c07b61037d582599081",
".git/logs/refs/heads/master": "e6c509490be63c07b61037d582599081",
".git/logs/refs/remotes/origin/web_app": "47194314983abfddd427c1a085756387",
".git/logs/refs/remotes/origin/master": "4fb03fcbb418ef046de28316fe059e34",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "71d3dd12613919ee3daefbf5aa35cae4",
".git/refs/remotes/origin/web_app": "04e0f7c339575792cb198ad2bbed8ee0",
".git/refs/remotes/origin/master": "71d3dd12613919ee3daefbf5aa35cae4",
".git/index": "0feeba5f22ca595b86278f5a46f1dd02",
".git/COMMIT_EDITMSG": "b5a3bfe6c41cb991353c601b02cc114b",
".git/FETCH_HEAD": "0faebe0400e2e2395fa39b8af0b38d71",
".git/rebase-merge/git-rebase-todo.backup": "d26849212cd32d5b794d4fc211492b9c",
".git/rebase-merge/head-name": "7af7f62c1ff93562f49dd5a2f00c248f",
".git/rebase-merge/orig-head": "c5f8405dc99eb28e77a39b20a2a44b6f",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "fbcf90e57006eb7af656294912638776",
".git/rebase-merge/onto": "04e0f7c339575792cb198ad2bbed8ee0",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/patch": "1b695c0f4e92931eec9caa31738716f9",
".git/rebase-merge/done": "f244e533b0e53bea0056368067f4994d",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "c5f8405dc99eb28e77a39b20a2a44b6f",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/author-script": "a0c5105c73dc77beef28ef37e27dc225",
"assets/AssetManifest.json": "c1e290404bd41c27b5407c3359cac6df",
"assets/NOTICES": "2e5a9b437504f2032211412dfc95aaa5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "83f89f04ae7cf2fd4ab86e1677ef4695",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/video.MOV": "8b49064e7c9f7fe82d056cab504c92ae",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
