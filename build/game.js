
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

  var PACKAGE_PATH;
  if (typeof window === 'object') {
    PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
  } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'game.data';
    var REMOTE_PACKAGE_BASE = 'game.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
    Module['locateFile'](REMOTE_PACKAGE_BASE) :
    ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);

    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;

    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onerror = function(event) {
        throw new Error("NetworkError for: " + packageName);
      }
      xhr.onload = function(event) {
        if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
          var packageData = xhr.response;
          callback(packageData);
        } else {
          throw new Error(xhr.statusText + " : " + xhr.responseURL);
        }
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };

    function runWithFS() {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);
      Module['FS_createPath']('/', '', true, true);

      function DataRequest(start, end, crunched, audio) {
        this.start = start;
        this.end = end;
        this.crunched = crunched;
        this.audio = audio;
      }
      DataRequest.prototype = {
        requests: {},
        open: function(mode, name) {
          this.name = name;
          this.requests[name] = this;
          Module['addRunDependency']('fp ' + this.name);
        },
        send: function() {},
        onload: function() {
          var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

        },
        finish: function(byteArray) {
          var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      }
    };

    var files = metadata.files;
    for (i = 0; i < files.length; ++i) {
      new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
    }


    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var IDB_RO = "readonly";
    var IDB_RW = "readwrite";
    var DB_NAME = "EM_PRELOAD_CACHE";
    var DB_VERSION = 1;
    var METADATA_STORE_NAME = 'METADATA';
    var PACKAGE_STORE_NAME = 'PACKAGES';
    function openDatabase(callback, errback) {
      try {
        var openRequest = indexedDB.open(DB_NAME, DB_VERSION);
      } catch (e) {
        return errback(e);
      }
      openRequest.onupgradeneeded = function(event) {
        var db = event.target.result;

        if(db.objectStoreNames.contains(PACKAGE_STORE_NAME)) {
          db.deleteObjectStore(PACKAGE_STORE_NAME);
        }
        var packages = db.createObjectStore(PACKAGE_STORE_NAME);

        if(db.objectStoreNames.contains(METADATA_STORE_NAME)) {
          db.deleteObjectStore(METADATA_STORE_NAME);
        }
        var metadata = db.createObjectStore(METADATA_STORE_NAME);
      };
      openRequest.onsuccess = function(event) {
        var db = event.target.result;
        callback(db);
      };
      openRequest.onerror = function(error) {
        errback(error);
      };
    };

    /* Check if there's a cached package, and if so whether it's the latest available */
    function checkCachedPackage(db, packageName, callback, errback) {
      var transaction = db.transaction([METADATA_STORE_NAME], IDB_RO);
      var metadata = transaction.objectStore(METADATA_STORE_NAME);

      var getRequest = metadata.get("metadata/" + packageName);
      getRequest.onsuccess = function(event) {
        var result = event.target.result;
        if (!result) {
          return callback(false);
        } else {
          return callback(PACKAGE_UUID === result.uuid);
        }
      };
      getRequest.onerror = function(error) {
        errback(error);
      };
    };

    function fetchCachedPackage(db, packageName, callback, errback) {
      var transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO);
      var packages = transaction.objectStore(PACKAGE_STORE_NAME);

      var getRequest = packages.get("package/" + packageName);
      getRequest.onsuccess = function(event) {
        var result = event.target.result;
        callback(result);
      };
      getRequest.onerror = function(error) {
        errback(error);
      };
    };

    function cacheRemotePackage(db, packageName, packageData, packageMeta, callback, errback) {
      var transaction_packages = db.transaction([PACKAGE_STORE_NAME], IDB_RW);
      var packages = transaction_packages.objectStore(PACKAGE_STORE_NAME);

      var putPackageRequest = packages.put(packageData, "package/" + packageName);
      putPackageRequest.onsuccess = function(event) {
        var transaction_metadata = db.transaction([METADATA_STORE_NAME], IDB_RW);
        var metadata = transaction_metadata.objectStore(METADATA_STORE_NAME);
        var putMetadataRequest = metadata.put(packageMeta, "metadata/" + packageName);
        putMetadataRequest.onsuccess = function(event) {
          callback(packageData);
        };
        putMetadataRequest.onerror = function(error) {
          errback(error);
        };
      };
      putPackageRequest.onerror = function(error) {
        errback(error);
      };
    };

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;

        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);

        var files = metadata.files;
        for (i = 0; i < files.length; ++i) {
          DataRequest.prototype.requests[files[i].filename].onload();
        }
        Module['removeRunDependency']('datafile_game.data');

      };
      Module['addRunDependency']('datafile_game.data');

      if (!Module.preloadResults) Module.preloadResults = {};

      function preloadFallback(error) {
        console.error(error);
        console.error('falling back to default preload behavior');
        fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, processPackageData, handleError);
      };

      openDatabase(
        function(db) {
          checkCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME,
            function(useCached) {
              Module.preloadResults[PACKAGE_NAME] = {fromCache: useCached};
              if (useCached) {
                console.info('loading ' + PACKAGE_NAME + ' from cache');
                fetchCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, processPackageData, preloadFallback);
              } else {
                console.info('loading ' + PACKAGE_NAME + ' from remote');
                fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE,
                  function(packageData) {
                    cacheRemotePackage(db, PACKAGE_PATH + PACKAGE_NAME, packageData, {uuid:PACKAGE_UUID}, processPackageData,
                      function(error) {
                        console.error(error);
                        processPackageData(packageData);
                      });
                  }
                  , preloadFallback);
              }
            }
            , preloadFallback);
        }
        , preloadFallback);

      if (Module['setStatus']) Module['setStatus']('Downloading...');

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }

  }
  loadPackage({"package_uuid":"fbfd5013-e7b0-4a99-863c-c3a3dde40a0e","remote_package_size":3091464,"files":[{"filename":"","crunched":0,"start":0,"end":23,"audio":false},{"filename":"","crunched":0,"start":23,"end":362,"audio":false},{"filename":"","crunched":0,"start":362,"end":383,"audio":false},{"filename":"","crunched":0,"start":383,"end":424,"audio":false},{"filename":"","crunched":0,"start":424,"end":691,"audio":false},{"filename":"","crunched":0,"start":691,"end":764,"audio":false},{"filename":"","crunched":0,"start":764,"end":1242,"audio":false},{"filename":"","crunched":0,"start":1242,"end":2138,"audio":false},{"filename":"","crunched":0,"start":2138,"end":6864,"audio":false},{"filename":"","crunched":0,"start":6864,"end":7053,"audio":false},{"filename":"","crunched":0,"start":7053,"end":7477,"audio":false},{"filename":"","crunched":0,"start":7477,"end":9126,"audio":false},{"filename":"","crunched":0,"start":9126,"end":9542,"audio":false},{"filename":"","crunched":0,"start":9542,"end":10916,"audio":false},{"filename":"","crunched":0,"start":10916,"end":15814,"audio":false},{"filename":"","crunched":0,"start":15814,"end":16358,"audio":false},{"filename":"","crunched":0,"start":16358,"end":17850,"audio":false},{"filename":"","crunched":0,"start":17850,"end":20633,"audio":false},{"filename":"","crunched":0,"start":20633,"end":22941,"audio":false},{"filename":"","crunched":0,"start":22941,"end":26591,"audio":false},{"filename":"","crunched":0,"start":26591,"end":48543,"audio":false},{"filename":"","crunched":0,"start":48543,"end":48783,"audio":false},{"filename":"","crunched":0,"start":48783,"end":50922,"audio":false},{"filename":"","crunched":0,"start":50922,"end":52907,"audio":false},{"filename":"","crunched":0,"start":52907,"end":53045,"audio":false},{"filename":"","crunched":0,"start":53045,"end":54254,"audio":false},{"filename":"","crunched":0,"start":54254,"end":54412,"audio":false},{"filename":"","crunched":0,"start":54412,"end":54570,"audio":false},{"filename":"","crunched":0,"start":54570,"end":54739,"audio":false},{"filename":"","crunched":0,"start":54739,"end":56637,"audio":false},{"filename":"","crunched":0,"start":56637,"end":58472,"audio":false},{"filename":"","crunched":0,"start":58472,"end":58527,"audio":false},{"filename":"","crunched":0,"start":58527,"end":58723,"audio":false},{"filename":"","crunched":0,"start":58723,"end":58866,"audio":false},{"filename":"","crunched":0,"start":58866,"end":60823,"audio":false},{"filename":"","crunched":0,"start":60823,"end":61015,"audio":false},{"filename":"","crunched":0,"start":61015,"end":61198,"audio":false},{"filename":"","crunched":0,"start":61198,"end":61404,"audio":false},{"filename":"","crunched":0,"start":61404,"end":62998,"audio":false},{"filename":"","crunched":0,"start":62998,"end":63173,"audio":false},{"filename":"","crunched":0,"start":63173,"end":63316,"audio":false},{"filename":"","crunched":0,"start":63316,"end":65166,"audio":false},{"filename":"","crunched":0,"start":65166,"end":76676,"audio":false},{"filename":"","crunched":0,"start":76676,"end":76945,"audio":false},{"filename":"","crunched":0,"start":76945,"end":77030,"audio":false},{"filename":"","crunched":0,"start":77030,"end":77206,"audio":false},{"filename":"","crunched":0,"start":77206,"end":77383,"audio":false},{"filename":"","crunched":0,"start":77383,"end":77526,"audio":false},{"filename":"","crunched":0,"start":77526,"end":79477,"audio":false},{"filename":"","crunched":0,"start":79477,"end":79620,"audio":false},{"filename":"","crunched":0,"start":79620,"end":80495,"audio":false},{"filename":"","crunched":0,"start":80495,"end":81691,"audio":false},{"filename":"","crunched":0,"start":81691,"end":81997,"audio":false},{"filename":"","crunched":0,"start":81997,"end":82176,"audio":false},{"filename":"","crunched":0,"start":82176,"end":82415,"audio":false},{"filename":"","crunched":0,"start":82415,"end":82598,"audio":false},{"filename":"","crunched":0,"start":82598,"end":82774,"audio":false},{"filename":"","crunched":0,"start":82774,"end":82917,"audio":false},{"filename":"","crunched":0,"start":82917,"end":83041,"audio":false},{"filename":"","crunched":0,"start":83041,"end":83904,"audio":false},{"filename":"","crunched":0,"start":83904,"end":84047,"audio":false},{"filename":"","crunched":0,"start":84047,"end":84268,"audio":false},{"filename":"","crunched":0,"start":84268,"end":84411,"audio":false},{"filename":"","crunched":0,"start":84411,"end":84612,"audio":false},{"filename":"","crunched":0,"start":84612,"end":84755,"audio":false},{"filename":"","crunched":0,"start":84755,"end":86209,"audio":false},{"filename":"","crunched":0,"start":86209,"end":509144,"audio":false},{"filename":"","crunched":0,"start":509144,"end":509231,"audio":false},{"filename":"","crunched":0,"start":509231,"end":509522,"audio":false},{"filename":"","crunched":0,"start":509522,"end":509638,"audio":false},{"filename":"","crunched":0,"start":509638,"end":509820,"audio":false},{"filename":"","crunched":0,"start":509820,"end":509907,"audio":false},{"filename":"","crunched":0,"start":509907,"end":510107,"audio":false},{"filename":"","crunched":0,"start":510107,"end":512020,"audio":false},{"filename":"","crunched":0,"start":512020,"end":512137,"audio":false},{"filename":"","crunched":0,"start":512137,"end":512416,"audio":false},{"filename":"","crunched":0,"start":512416,"end":512503,"audio":false},{"filename":"","crunched":0,"start":512503,"end":514164,"audio":false},{"filename":"","crunched":0,"start":514164,"end":514783,"audio":false},{"filename":"","crunched":0,"start":514783,"end":841109,"audio":false},{"filename":"","crunched":0,"start":841109,"end":848173,"audio":false},{"filename":"","crunched":0,"start":848173,"end":1179280,"audio":false},{"filename":"","crunched":0,"start":1179280,"end":1180188,"audio":false},{"filename":"","crunched":0,"start":1180188,"end":1180229,"audio":false},{"filename":"","crunched":0,"start":1180229,"end":1180259,"audio":false},{"filename":"","crunched":0,"start":1180259,"end":1180300,"audio":false},{"filename":"","crunched":0,"start":1180300,"end":1180341,"audio":false},{"filename":"","crunched":0,"start":1180341,"end":1180382,"audio":false},{"filename":"","crunched":0,"start":1180382,"end":1829710,"audio":false},{"filename":"","crunched":0,"start":1829710,"end":1830790,"audio":false},{"filename":"","crunched":0,"start":1830790,"end":1832946,"audio":false},{"filename":"","crunched":0,"start":1832946,"end":1834650,"audio":false},{"filename":"","crunched":0,"start":1834650,"end":1835504,"audio":false},{"filename":"","crunched":0,"start":1835504,"end":1835945,"audio":false},{"filename":"","crunched":0,"start":1835945,"end":1836278,"audio":false},{"filename":"","crunched":0,"start":1836278,"end":1836785,"audio":false},{"filename":"","crunched":0,"start":1836785,"end":1837075,"audio":false},{"filename":"","crunched":0,"start":1837075,"end":1837469,"audio":false},{"filename":"","crunched":0,"start":1837469,"end":1838002,"audio":false},{"filename":"","crunched":0,"start":1838002,"end":1838694,"audio":false},{"filename":"","crunched":0,"start":1838694,"end":1839358,"audio":false},{"filename":"","crunched":0,"start":1839358,"end":1840080,"audio":false},{"filename":"","crunched":0,"start":1840080,"end":1840813,"audio":false},{"filename":"","crunched":0,"start":1840813,"end":1841497,"audio":false},{"filename":"","crunched":0,"start":1841497,"end":1842213,"audio":false},{"filename":"","crunched":0,"start":1842213,"end":1842420,"audio":false},{"filename":"","crunched":0,"start":1842420,"end":1842625,"audio":false},{"filename":"","crunched":0,"start":1842625,"end":1842831,"audio":false},{"filename":"","crunched":0,"start":1842831,"end":1843037,"audio":false},{"filename":"","crunched":0,"start":1843037,"end":1843242,"audio":false},{"filename":"","crunched":0,"start":1843242,"end":1843447,"audio":false},{"filename":"","crunched":0,"start":1843447,"end":1845247,"audio":false},{"filename":"","crunched":0,"start":1845247,"end":1847364,"audio":false},{"filename":"","crunched":0,"start":1847364,"end":1849563,"audio":false},{"filename":"","crunched":0,"start":1849563,"end":1851260,"audio":false},{"filename":"","crunched":0,"start":1851260,"end":1852929,"audio":false},{"filename":"","crunched":0,"start":1852929,"end":1854736,"audio":false},{"filename":"","crunched":0,"start":1854736,"end":1856739,"audio":false},{"filename":"","crunched":0,"start":1856739,"end":1858327,"audio":false},{"filename":"","crunched":0,"start":1858327,"end":1858863,"audio":false},{"filename":"","crunched":0,"start":1858863,"end":1859220,"audio":false},{"filename":"","crunched":0,"start":1859220,"end":1860880,"audio":false},{"filename":"","crunched":0,"start":1860880,"end":1862381,"audio":false},{"filename":"","crunched":0,"start":1862381,"end":1863840,"audio":false},{"filename":"","crunched":0,"start":1863840,"end":1865259,"audio":false},{"filename":"","crunched":0,"start":1865259,"end":1866936,"audio":false},{"filename":"","crunched":0,"start":1866936,"end":1868871,"audio":false},{"filename":"","crunched":0,"start":1868871,"end":1870714,"audio":false},{"filename":"","crunched":0,"start":1870714,"end":1872622,"audio":false},{"filename":"","crunched":0,"start":1872622,"end":1874510,"audio":false},{"filename":"","crunched":0,"start":1874510,"end":1876383,"audio":false},{"filename":"","crunched":0,"start":1876383,"end":1878236,"audio":false},{"filename":"","crunched":0,"start":1878236,"end":1880086,"audio":false},{"filename":"","crunched":0,"start":1880086,"end":1882081,"audio":false},{"filename":"","crunched":0,"start":1882081,"end":1884108,"audio":false},{"filename":"","crunched":0,"start":1884108,"end":1886219,"audio":false},{"filename":"","crunched":0,"start":1886219,"end":1888287,"audio":false},{"filename":"","crunched":0,"start":1888287,"end":1890342,"audio":false},{"filename":"","crunched":0,"start":1890342,"end":1892174,"audio":false},{"filename":"","crunched":0,"start":1892174,"end":1894070,"audio":false},{"filename":"","crunched":0,"start":1894070,"end":1895916,"audio":false},{"filename":"","crunched":0,"start":1895916,"end":1897739,"audio":false},{"filename":"","crunched":0,"start":1897739,"end":1898980,"audio":false},{"filename":"","crunched":0,"start":1898980,"end":1900467,"audio":false},{"filename":"","crunched":0,"start":1900467,"end":1901885,"audio":false},{"filename":"","crunched":0,"start":1901885,"end":1902376,"audio":false},{"filename":"","crunched":0,"start":1902376,"end":1902832,"audio":false},{"filename":"","crunched":0,"start":1902832,"end":1903333,"audio":false},{"filename":"","crunched":0,"start":1903333,"end":1903844,"audio":false},{"filename":"","crunched":0,"start":1903844,"end":1904334,"audio":false},{"filename":"","crunched":0,"start":1904334,"end":1904802,"audio":false},{"filename":"","crunched":0,"start":1904802,"end":1905249,"audio":false},{"filename":"","crunched":0,"start":1905249,"end":1905683,"audio":false},{"filename":"","crunched":0,"start":1905683,"end":1906122,"audio":false},{"filename":"","crunched":0,"start":1906122,"end":1906560,"audio":false},{"filename":"","crunched":0,"start":1906560,"end":1907030,"audio":false},{"filename":"","crunched":0,"start":1907030,"end":1907490,"audio":false},{"filename":"","crunched":0,"start":1907490,"end":1907947,"audio":false},{"filename":"","crunched":0,"start":1907947,"end":1908134,"audio":false},{"filename":"","crunched":0,"start":1908134,"end":1908327,"audio":false},{"filename":"","crunched":0,"start":1908327,"end":1908516,"audio":false},{"filename":"","crunched":0,"start":1908516,"end":1908705,"audio":false},{"filename":"","crunched":0,"start":1908705,"end":1912353,"audio":false},{"filename":"","crunched":0,"start":1912353,"end":1913013,"audio":false},{"filename":"","crunched":0,"start":1913013,"end":1913829,"audio":false},{"filename":"","crunched":0,"start":1913829,"end":1914686,"audio":false},{"filename":"","crunched":0,"start":1914686,"end":1915239,"audio":false},{"filename":"","crunched":0,"start":1915239,"end":1915887,"audio":false},{"filename":"","crunched":0,"start":1915887,"end":1916575,"audio":false},{"filename":"","crunched":0,"start":1916575,"end":1919676,"audio":false},{"filename":"","crunched":0,"start":1919676,"end":1923899,"audio":false},{"filename":"","crunched":0,"start":1923899,"end":1928098,"audio":false},{"filename":"","crunched":0,"start":1928098,"end":1932344,"audio":false},{"filename":"","crunched":0,"start":1932344,"end":1936391,"audio":false},{"filename":"","crunched":0,"start":1936391,"end":1940882,"audio":false},{"filename":"","crunched":0,"start":1940882,"end":1945323,"audio":false},{"filename":"","crunched":0,"start":1945323,"end":1949798,"audio":false},{"filename":"","crunched":0,"start":1949798,"end":1954242,"audio":false},{"filename":"","crunched":0,"start":1954242,"end":1958724,"audio":false},{"filename":"","crunched":0,"start":1958724,"end":1961847,"audio":false},{"filename":"","crunched":0,"start":1961847,"end":1965507,"audio":false},{"filename":"","crunched":0,"start":1965507,"end":1968933,"audio":false},{"filename":"","crunched":0,"start":1968933,"end":1972425,"audio":false},{"filename":"","crunched":0,"start":1972425,"end":1975898,"audio":false},{"filename":"","crunched":0,"start":1975898,"end":1979346,"audio":false},{"filename":"","crunched":0,"start":1979346,"end":1982845,"audio":false},{"filename":"","crunched":0,"start":1982845,"end":1986358,"audio":false},{"filename":"","crunched":0,"start":1986358,"end":1989864,"audio":false},{"filename":"","crunched":0,"start":1989864,"end":1993381,"audio":false},{"filename":"","crunched":0,"start":1993381,"end":1997060,"audio":false},{"filename":"","crunched":0,"start":1997060,"end":2001244,"audio":false},{"filename":"","crunched":0,"start":2001244,"end":2005387,"audio":false},{"filename":"","crunched":0,"start":2005387,"end":2007323,"audio":false},{"filename":"","crunched":0,"start":2007323,"end":2008732,"audio":false},{"filename":"","crunched":0,"start":2008732,"end":2010699,"audio":false},{"filename":"","crunched":0,"start":2010699,"end":2011928,"audio":false},{"filename":"","crunched":0,"start":2011928,"end":2013201,"audio":false},{"filename":"","crunched":0,"start":2013201,"end":2015210,"audio":false},{"filename":"","crunched":0,"start":2015210,"end":2016747,"audio":false},{"filename":"","crunched":0,"start":2016747,"end":2018475,"audio":false},{"filename":"","crunched":0,"start":2018475,"end":2020554,"audio":false},{"filename":"","crunched":0,"start":2020554,"end":2022039,"audio":false},{"filename":"","crunched":0,"start":2022039,"end":2023226,"audio":false},{"filename":"","crunched":0,"start":2023226,"end":2024693,"audio":false},{"filename":"","crunched":0,"start":2024693,"end":2028247,"audio":false},{"filename":"","crunched":0,"start":2028247,"end":2031854,"audio":false},{"filename":"","crunched":0,"start":2031854,"end":2032977,"audio":false},{"filename":"","crunched":0,"start":2032977,"end":2034086,"audio":false},{"filename":"","crunched":0,"start":2034086,"end":2035510,"audio":false},{"filename":"","crunched":0,"start":2035510,"end":2036507,"audio":false},{"filename":"","crunched":0,"start":2036507,"end":2037927,"audio":false},{"filename":"","crunched":0,"start":2037927,"end":2039227,"audio":false},{"filename":"","crunched":0,"start":2039227,"end":2040476,"audio":false},{"filename":"","crunched":0,"start":2040476,"end":2042014,"audio":false},{"filename":"","crunched":0,"start":2042014,"end":2043010,"audio":false},{"filename":"","crunched":0,"start":2043010,"end":2044910,"audio":false},{"filename":"","crunched":0,"start":2044910,"end":2046453,"audio":false},{"filename":"","crunched":0,"start":2046453,"end":2047658,"audio":false},{"filename":"","crunched":0,"start":2047658,"end":2048673,"audio":false},{"filename":"","crunched":0,"start":2048673,"end":2049867,"audio":false},{"filename":"","crunched":0,"start":2049867,"end":2053436,"audio":false},{"filename":"","crunched":0,"start":2053436,"end":2056961,"audio":false},{"filename":"","crunched":0,"start":2056961,"end":2058655,"audio":false},{"filename":"","crunched":0,"start":2058655,"end":2060328,"audio":false},{"filename":"","crunched":0,"start":2060328,"end":2062306,"audio":false},{"filename":"","crunched":0,"start":2062306,"end":2063705,"audio":false},{"filename":"","crunched":0,"start":2063705,"end":2065590,"audio":false},{"filename":"","crunched":0,"start":2065590,"end":2067092,"audio":false},{"filename":"","crunched":0,"start":2067092,"end":2068654,"audio":false},{"filename":"","crunched":0,"start":2068654,"end":2070424,"audio":false},{"filename":"","crunched":0,"start":2070424,"end":2072167,"audio":false},{"filename":"","crunched":0,"start":2072167,"end":2073609,"audio":false},{"filename":"","crunched":0,"start":2073609,"end":2075401,"audio":false},{"filename":"","crunched":0,"start":2075401,"end":2076892,"audio":false},{"filename":"","crunched":0,"start":2076892,"end":2078073,"audio":false},{"filename":"","crunched":0,"start":2078073,"end":2079506,"audio":false},{"filename":"","crunched":0,"start":2079506,"end":2083097,"audio":false},{"filename":"","crunched":0,"start":2083097,"end":2086613,"audio":false},{"filename":"","crunched":0,"start":2086613,"end":2088253,"audio":false},{"filename":"","crunched":0,"start":2088253,"end":2089913,"audio":false},{"filename":"","crunched":0,"start":2089913,"end":2091898,"audio":false},{"filename":"","crunched":0,"start":2091898,"end":2094498,"audio":false},{"filename":"","crunched":0,"start":2094498,"end":2096826,"audio":false},{"filename":"","crunched":0,"start":2096826,"end":2098418,"audio":false},{"filename":"","crunched":0,"start":2098418,"end":2099950,"audio":false},{"filename":"","crunched":0,"start":2099950,"end":2102061,"audio":false},{"filename":"","crunched":0,"start":2102061,"end":2103571,"audio":false},{"filename":"","crunched":0,"start":2103571,"end":2105264,"audio":false},{"filename":"","crunched":0,"start":2105264,"end":2107251,"audio":false},{"filename":"","crunched":0,"start":2107251,"end":2108432,"audio":false},{"filename":"","crunched":0,"start":2108432,"end":2109634,"audio":false},{"filename":"","crunched":0,"start":2109634,"end":2111011,"audio":false},{"filename":"","crunched":0,"start":2111011,"end":2114602,"audio":false},{"filename":"","crunched":0,"start":2114602,"end":2118192,"audio":false},{"filename":"","crunched":0,"start":2118192,"end":2120096,"audio":false},{"filename":"","crunched":0,"start":2120096,"end":2121986,"audio":false},{"filename":"","crunched":0,"start":2121986,"end":2124218,"audio":false},{"filename":"","crunched":0,"start":2124218,"end":2127191,"audio":false},{"filename":"","crunched":0,"start":2127191,"end":2129730,"audio":false},{"filename":"","crunched":0,"start":2129730,"end":2131452,"audio":false},{"filename":"","crunched":0,"start":2131452,"end":2132860,"audio":false},{"filename":"","crunched":0,"start":2132860,"end":2135243,"audio":false},{"filename":"","crunched":0,"start":2135243,"end":2138309,"audio":false},{"filename":"","crunched":0,"start":2138309,"end":2141008,"audio":false},{"filename":"","crunched":0,"start":2141008,"end":2142576,"audio":false},{"filename":"","crunched":0,"start":2142576,"end":2143788,"audio":false},{"filename":"","crunched":0,"start":2143788,"end":2144977,"audio":false},{"filename":"","crunched":0,"start":2144977,"end":2146344,"audio":false},{"filename":"","crunched":0,"start":2146344,"end":2149978,"audio":false},{"filename":"","crunched":0,"start":2149978,"end":2153602,"audio":false},{"filename":"","crunched":0,"start":2153602,"end":2155498,"audio":false},{"filename":"","crunched":0,"start":2155498,"end":2157466,"audio":false},{"filename":"","crunched":0,"start":2157466,"end":2160634,"audio":false},{"filename":"","crunched":0,"start":2160634,"end":2163900,"audio":false},{"filename":"","crunched":0,"start":2163900,"end":2166493,"audio":false},{"filename":"","crunched":0,"start":2166493,"end":2169176,"audio":false},{"filename":"","crunched":0,"start":2169176,"end":2172666,"audio":false},{"filename":"","crunched":0,"start":2172666,"end":2176264,"audio":false},{"filename":"","crunched":0,"start":2176264,"end":2177754,"audio":false},{"filename":"","crunched":0,"start":2177754,"end":2180052,"audio":false},{"filename":"","crunched":0,"start":2180052,"end":2182182,"audio":false},{"filename":"","crunched":0,"start":2182182,"end":2184331,"audio":false},{"filename":"","crunched":0,"start":2184331,"end":2186175,"audio":false},{"filename":"","crunched":0,"start":2186175,"end":2187974,"audio":false},{"filename":"","crunched":0,"start":2187974,"end":2191584,"audio":false},{"filename":"","crunched":0,"start":2191584,"end":2195225,"audio":false},{"filename":"","crunched":0,"start":2195225,"end":2197383,"audio":false},{"filename":"","crunched":0,"start":2197383,"end":2199510,"audio":false},{"filename":"","crunched":0,"start":2199510,"end":2605524,"audio":false},{"filename":"","crunched":0,"start":2605524,"end":2605645,"audio":false},{"filename":"","crunched":0,"start":2605645,"end":2605925,"audio":false},{"filename":"","crunched":0,"start":2605925,"end":2606281,"audio":false},{"filename":"","crunched":0,"start":2606281,"end":2611022,"audio":false},{"filename":"","crunched":0,"start":2611022,"end":3091464,"audio":false}]});

})();
