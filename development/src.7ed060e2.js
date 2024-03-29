// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/girwa/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/girwa/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/girwa/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../src/scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/girwa/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/images/Dil-Bechara-Title-Song.jpg":[function(require,module,exports) {
module.exports = "/Dil-Bechara-Title-Song.f1336dba.jpg";
},{}],"../src/images/Shankara-Re-Shankara-Tanhaji.jpg":[function(require,module,exports) {
module.exports = "/Shankara-Re-Shankara-Tanhaji.a47a0068.jpg";
},{}],"../src/images/Teri-Gali-Cover-Guru-Randhawa.jpg":[function(require,module,exports) {
module.exports = "/Teri-Gali-Cover-Guru-Randhawa.bbdaa02c.jpg";
},{}],"../src/images/*.jpg":[function(require,module,exports) {
module.exports = {
  "Dil-Bechara-Title-Song": require("./Dil-Bechara-Title-Song.jpg"),
  "Shankara-Re-Shankara-Tanhaji": require("./Shankara-Re-Shankara-Tanhaji.jpg"),
  "Teri-Gali-Cover-Guru-Randhawa": require("./Teri-Gali-Cover-Guru-Randhawa.jpg")
};
},{"./Dil-Bechara-Title-Song.jpg":"../src/images/Dil-Bechara-Title-Song.jpg","./Shankara-Re-Shankara-Tanhaji.jpg":"../src/images/Shankara-Re-Shankara-Tanhaji.jpg","./Teri-Gali-Cover-Guru-Randhawa.jpg":"../src/images/Teri-Gali-Cover-Guru-Randhawa.jpg"}],"../src/music/Dil-Bechara-Title-Song.mp3":[function(require,module,exports) {
module.exports = "/Dil-Bechara-Title-Song.f8df2e1e.mp3";
},{}],"../src/music/Shankara-Re-Shankara-Tanhaji.mp3":[function(require,module,exports) {
module.exports = "/Shankara-Re-Shankara-Tanhaji.69fac39c.mp3";
},{}],"../src/music/Teri-Gali-Cover-Guru-Randhawa.mp3":[function(require,module,exports) {
module.exports = "/Teri-Gali-Cover-Guru-Randhawa.9d8191f3.mp3";
},{}],"../src/music/*.mp3":[function(require,module,exports) {
module.exports = {
  "Dil-Bechara-Title-Song": require("./Dil-Bechara-Title-Song.mp3"),
  "Shankara-Re-Shankara-Tanhaji": require("./Shankara-Re-Shankara-Tanhaji.mp3"),
  "Teri-Gali-Cover-Guru-Randhawa": require("./Teri-Gali-Cover-Guru-Randhawa.mp3")
};
},{"./Dil-Bechara-Title-Song.mp3":"../src/music/Dil-Bechara-Title-Song.mp3","./Shankara-Re-Shankara-Tanhaji.mp3":"../src/music/Shankara-Re-Shankara-Tanhaji.mp3","./Teri-Gali-Cover-Guru-Randhawa.mp3":"../src/music/Teri-Gali-Cover-Guru-Randhawa.mp3"}],"../src/index.js":[function(require,module,exports) {
"use strict";

require("./scss/main.scss");

var _ = _interopRequireDefault(require("./images/*.jpg"));

var _2 = _interopRequireDefault(require("./music/*.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var musicContainer = document.getElementById("music-container");
var playBtn = document.getElementById("play");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var audio = document.getElementById("audio");
var progress = document.getElementById("progress");
var progressContainer = document.getElementById("progress-container");
var title = document.getElementById("title");
var cover = document.getElementById("cover"); // Song titles

var songs = ["Dil-Bechara-Title-Song", "Shankara-Re-Shankara-Tanhaji", "Teri-Gali-Cover-Guru-Randhawa"]; // Keep track of song

var songIndex = 2; // Initially load song details into DOM

loadSong(songs[songIndex]); // Update song details

function loadSong(song) {
  title.innerHTML = song;
  audio.src = _2.default["".concat(song)];
  cover.src = _.default["".concat(song)];
} // Play song


function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
} // Play song


function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
} // Previous song


function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
} // Next song


function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
} // Update progress bar


function updateProgress(e) {
  var _e$srcElement = e.srcElement,
      duration = _e$srcElement.duration,
      currentTime = _e$srcElement.currentTime; //   console.log(duration, currentTime);

  var progressPercent = currentTime / duration * 100; //   console.log(progressPercent);

  progress.style.width = "".concat(progressPercent, "%");
} // Set progress bar


function setProgress(e) {
  var width = this.clientWidth; //   console.log(width); // Shows total width of progressbar

  var clickX = e.offsetX; //   console.log(clickX); // check the width where we clicked

  var duration = audio.duration;
  audio.currentTime = clickX / width * duration;
} // Event listener


playBtn.addEventListener("click", function () {
  var isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}); // Change song

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong); // Time/song update

audio.addEventListener("timeupdate", updateProgress); // Click on progress bar

progressContainer.addEventListener("click", setProgress); // Song end

audio.addEventListener("ended", nextSong);
},{"./scss/main.scss":"../src/scss/main.scss","./images/*.jpg":"../src/images/*.jpg","./music/*.mp3":"../src/music/*.mp3"}],"C:/Users/girwa/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53960" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/girwa/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/index.js"], null)
//# sourceMappingURL=/src.7ed060e2.js.map