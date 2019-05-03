/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*-----Getting JSON and display-----*/\nvar requestURL = 'http://www.splashbase.co/api/v1/images/search?query=tree';\nvar content = document.querySelector(\".gallery\");\nvar request = new XMLHttpRequest();\nrequest.open('GET', requestURL);\nrequest.responseType = 'json';\nrequest.send();\n\nrequest.onload = function () {\n  var images = request.response;\n  showImages(images);\n  var all = document.getElementsByClassName(\"image\");\n\n  for (var i = 10; i < all.length; i++) {\n    all[i].style.display = \"none\";\n  }\n\n  for (var j = 0; j < all.length; j += 9) {\n    var random = Math.floor(Math.random() * 2);\n\n    if (document.documentElement.clientWidth <= 768) {\n      all[j + random].style.height = \"90vw\";\n    } else all[j + random].style.width = \"calc(40% + 20px)\";\n  }\n};\n\nfunction showImages(jsonObj) {\n  var image = jsonObj['images'];\n\n  for (var i = 0; i < image.length; i++) {\n    var img = document.createElement('img');\n    var gallery = document.createElement(\"IMG\");\n    var category = textContent = image[i].site;\n    gallery.setAttribute(\"src\", img.textContent = image[i].url);\n    document.body.appendChild(gallery);\n    content.appendChild(gallery);\n    category.textContent = 'Category: ' + image[i].site;\n\n    if (category === 'unsplash') {\n      gallery.setAttribute(\"class\", \"image\");\n      gallery.setAttribute(\"id\", \"unsplash\");\n    } else if (category === 'littlevisuals') {\n      gallery.setAttribute(\"class\", \"image\");\n      gallery.setAttribute(\"id\", \"littlevisuals\");\n    } else if (category === 'travelcoffeebook') {\n      gallery.setAttribute(\"class\", \"image\");\n      gallery.setAttribute(\"id\", \"travelcoffeebook\");\n    } else if (category === 'jaymantri') {\n      gallery.setAttribute(\"class\", \"image\");\n      gallery.setAttribute(\"id\", \"jaymantri\");\n    }\n  }\n}\n/*----------------------*/\n\n/*---Preloading images---*/\n\n\nvar more = document.querySelector(\".more\");\nwindow.addEventListener(\"load\", function () {\n  setInterval(loading, 1500);\n  more.style.display = \"flex\";\n});\n\nfunction loading() {\n  var loader = document.getElementById(\"loader\");\n  loader.style.height = \"0\";\n  loader.style.width = \"0\";\n  loader.style.visibility = \"hidden\";\n}\n/*-----------------------*/\n\n/*-------Filtering------*/\n\n\nfunction filter(category) {\n  var i, all;\n  all = document.getElementsByClassName(\"image\");\n  var more = document.getElementsByClassName(\"more\");\n  more[0].style.display = \"flex\";\n\n  if (category === \"all\") {\n    for (var _i = 10; _i < all.length; _i++) {\n      all[_i].style.display = \"none\";\n    }\n\n    for (var _i2 = 0; _i2 < 10; _i2++) {\n      all[_i2].style.display = \"flex\";\n    }\n  } else {\n    more[0].style.display = \"none\";\n\n    for (i = 0; i < all.length; i++) {\n      if (all[i].id === category) {\n        all[i].style.display = \"flex\";\n      } else all[i].style.display = \"none\";\n    }\n  }\n\n  var buttons = document.getElementsByClassName(\"btn-click\");\n  var current = document.getElementsByClassName(\"active\");\n  current[0].classList.remove(\"active\");\n  buttons[category].classList.add(\"active\");\n}\n/*----------------------*/\n\n/*---Show more button---*/\n\n\nfunction showMore() {\n  var all = document.getElementsByClassName(\"image\");\n\n  for (var i = 0; i < all.length; i++) {\n    all[i].style.display = \"flex\";\n  }\n\n  var more = document.getElementsByClassName(\"more\");\n  more[0].style.display = \"none\";\n}\n/*----------------------*/\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/index.scss */\"./src/scss/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/scss/index.scss?");

/***/ })

/******/ });