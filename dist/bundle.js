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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_Geometria_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/Geometria.eot */ "./src/fonts/Geometria.eot");
/* harmony import */ var _fonts_Geometria_eot_iefix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/Geometria.eot?iefix */ "./src/fonts/Geometria.eot?iefix");
/* harmony import */ var _fonts_Geometria_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/Geometria.woff */ "./src/fonts/Geometria.woff");
/* harmony import */ var _fonts_Geometria_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/Geometria.ttf */ "./src/fonts/Geometria.ttf");
/* harmony import */ var _fonts_Geometria_Bold_eot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/Geometria-Bold.eot */ "./src/fonts/Geometria-Bold.eot");
/* harmony import */ var _fonts_Geometria_Bold_eot_iefix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/Geometria-Bold.eot?iefix */ "./src/fonts/Geometria-Bold.eot?iefix");
/* harmony import */ var _fonts_Geometria_Bold_woff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fonts/Geometria-Bold.woff */ "./src/fonts/Geometria-Bold.woff");
/* harmony import */ var _fonts_Geometria_Bold_ttf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fonts/Geometria-Bold.ttf */ "./src/fonts/Geometria-Bold.ttf");
// Imports










var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Geometria_eot__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Geometria_eot_iefix__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Geometria_woff__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Geometria_ttf__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Geometria_Bold_eot__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Geometria_Bold_eot_iefix__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Geometria_Bold_woff__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Geometria_Bold_ttf__WEBPACK_IMPORTED_MODULE_9__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{\r\n    font-family: 'Geometria';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('eot'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype');\r\n}\r\n\r\n@font-face{\r\n    font-family: 'Geometria_B';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('eot'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('woff'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('truetype');\r\n    font-weight: bold;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/styles/fonts.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,4CAAkC;IAClC;;8DAEgD;AACpD;;AAEA;IACI,0BAA0B;IAC1B,4CAAuC;IACvC;;8DAEqD;IACrD,iBAAiB;AACrB","sourcesContent":["@font-face{\r\n    font-family: 'Geometria';\r\n    src: url(\"../fonts/Geometria.eot\");\r\n    src: url('../fonts/Geometria.eot?iefix') format('eot'),\r\n    url('../fonts/Geometria.woff') format('woff'),\r\n    url('../fonts/Geometria.ttf') format('truetype');\r\n}\r\n\r\n@font-face{\r\n    font-family: 'Geometria_B';\r\n    src: url(\"../fonts/Geometria-Bold.eot\");\r\n    src: url('../fonts/Geometria-Bold.eot?iefix') format('eot'),\r\n    url('../fonts/Geometria-Bold.woff') format('woff'),\r\n    url('../fonts/Geometria-Bold.ttf') format('truetype');\r\n    font-weight: bold;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\r\n    --main-text-color: #F2F2F2;\r\n    --main-text-size: 36px;\r\n    --blue: linear-gradient(155.23deg, #28518E 0%, #3A77D1 100%);\r\n}\r\n\r\n\r\nbody {\r\n  font-family: \"Geometria\", \"sans-serif\";\r\n}\r\n\r\n.wrap{\r\n    display: flex;\r\n    max-width: 554px;\r\n    height: 800px;\r\n    justify-content: center;\r\n    margin: 50px auto;\r\n}\r\n\r\n.calculator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    padding: 50px;\r\n    color: var(--main-text-color);\r\n    background: var(--blue);\r\n    box-shadow: 0px 82px 158px rgba(0, 0, 0, 0.35), 0px 24.7206px 47.6324px rgba(0, 0, 0, 0.228056), 0px 10.2677px 19.7841px rgba(0, 0, 0, 0.175), 0px 3.71362px 7.1555px rgba(0, 0, 0, 0.121944);\r\n    border-radius: 18px;\r\n    font-family: 'Geometria';\r\n    font-weight: normal;\r\n}\r\n\r\n.calculator .field_input-value{\r\n    height: 46px;\r\n    margin: 37px 0 37px 0;\r\n    padding-bottom: 20px;\r\n    border: none;\r\n    color: var(--main-text-size);\r\n    background-color: transparent;\r\n    box-shadow: 0px 2px 0px 0px rgba(255,255,255,0.35);\r\n    font-family: \"Geometria_B\";\r\n    font-size: 56px;\r\n    text-align: end;\r\n}\r\n.calculator .field_input-value:focus{\r\n    outline:none ;\r\n}\r\n\r\n.calculator .result_example{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: flex-end;\r\n    max-width: 70vw;\r\n    height: 117px;\r\n    font-size: 24px;\r\n}\r\n\r\n.calculator .interface_calculator{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, minmax(100px, 1fr));\r\n    grid-template-rows: repeat(4, minmax(100px, 1fr));\r\n    justify-items: center;\r\n}\r\n\r\n.button {\r\n    width: 80px;\r\n    height: 80px;\r\n    font-size: var(--main-text-size);\r\n    text-align: center;\r\n    cursor: pointer;\r\n    line-height: 80px;\r\n    transition: 0.2s;\r\n}\r\n.button:hover{\r\n    background-color: rgba(255,255,255,0.35);\r\n    border-radius: 40px;\r\n}\r\n\r\n.button[data-value=\"=\"] {\r\n    color: #2B589A;\r\n    background: var(--main-text-color);\r\n    border-radius: 40px;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://src/styles/style.css"],"names":[],"mappings":"AAGA;IACI,0BAA0B;IAC1B,sBAAsB;IACtB,4DAA4D;AAChE;;;AAGA;EACE,sCAAsC;AACxC;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;IACvB,6LAA6L;IAC7L,mBAAmB;IACnB,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;IACZ,4BAA4B;IAC5B,6BAA6B;IAC7B,kDAAkD;IAClD,0BAA0B;IAC1B,eAAe;IACf,eAAe;AACnB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;IACf,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,oDAAoD;IACpD,iDAAiD;IACjD,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;IAChC,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,wCAAwC;IACxC,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kCAAkC;IAClC,mBAAmB;AACvB","sourcesContent":["@import \"fonts.css\";\r\n\r\n\r\n:root {\r\n    --main-text-color: #F2F2F2;\r\n    --main-text-size: 36px;\r\n    --blue: linear-gradient(155.23deg, #28518E 0%, #3A77D1 100%);\r\n}\r\n\r\n\r\nbody {\r\n  font-family: \"Geometria\", \"sans-serif\";\r\n}\r\n\r\n.wrap{\r\n    display: flex;\r\n    max-width: 554px;\r\n    height: 800px;\r\n    justify-content: center;\r\n    margin: 50px auto;\r\n}\r\n\r\n.calculator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    padding: 50px;\r\n    color: var(--main-text-color);\r\n    background: var(--blue);\r\n    box-shadow: 0px 82px 158px rgba(0, 0, 0, 0.35), 0px 24.7206px 47.6324px rgba(0, 0, 0, 0.228056), 0px 10.2677px 19.7841px rgba(0, 0, 0, 0.175), 0px 3.71362px 7.1555px rgba(0, 0, 0, 0.121944);\r\n    border-radius: 18px;\r\n    font-family: 'Geometria';\r\n    font-weight: normal;\r\n}\r\n\r\n.calculator .field_input-value{\r\n    height: 46px;\r\n    margin: 37px 0 37px 0;\r\n    padding-bottom: 20px;\r\n    border: none;\r\n    color: var(--main-text-size);\r\n    background-color: transparent;\r\n    box-shadow: 0px 2px 0px 0px rgba(255,255,255,0.35);\r\n    font-family: \"Geometria_B\";\r\n    font-size: 56px;\r\n    text-align: end;\r\n}\r\n.calculator .field_input-value:focus{\r\n    outline:none ;\r\n}\r\n\r\n.calculator .result_example{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: flex-end;\r\n    max-width: 70vw;\r\n    height: 117px;\r\n    font-size: 24px;\r\n}\r\n\r\n.calculator .interface_calculator{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, minmax(100px, 1fr));\r\n    grid-template-rows: repeat(4, minmax(100px, 1fr));\r\n    justify-items: center;\r\n}\r\n\r\n.button {\r\n    width: 80px;\r\n    height: 80px;\r\n    font-size: var(--main-text-size);\r\n    text-align: center;\r\n    cursor: pointer;\r\n    line-height: 80px;\r\n    transition: 0.2s;\r\n}\r\n.button:hover{\r\n    background-color: rgba(255,255,255,0.35);\r\n    border-radius: 40px;\r\n}\r\n\r\n.button[data-value=\"=\"] {\r\n    color: #2B589A;\r\n    background: var(--main-text-color);\r\n    border-radius: 40px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Calculator.ts":
/*!***************************!*\
  !*** ./src/Calculator.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calculator; });
/* harmony import */ var _static_calcOperators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/calcOperators */ "./src/static/calcOperators.ts");

class Calculator {
  constructor() {
    ;
    this.operationsStack = [], this.outputStr = [], this.calculatedResult = 0;
  }

  mathOperation(operator, vault) {
    let resultOperation = 0;

    switch (operator) {
      case 'x':
        resultOperation = +(vault[vault.length - 1] * vault[vault.length - 2]).toFixed(3);
        vault.pop();
        vault.pop();
        return resultOperation;

      case '/':
        resultOperation = +(vault[vault.length - 1] / vault[vault.length - 2]).toFixed(3);
        vault.pop();
        vault.pop();
        return resultOperation;

      case '%':
        resultOperation = +(vault[vault.length - 1] * vault[vault.length - 2] / 100).toFixed(3);
        vault.pop();
        return resultOperation;

      case '√':
        resultOperation = Math.sqrt(vault[vault.length - 1]);
        vault.pop();
        return resultOperation;

      case '+':
        resultOperation = +(vault[vault.length - 1] + vault[vault.length - 2]).toFixed(3);
        vault.pop();
        vault.pop();
        return resultOperation;

      case '-':
        resultOperation = +(vault[vault.length - 2] - vault[vault.length - 1]).toFixed(3);
        vault.pop();
        vault.pop();
        return resultOperation;
    }
  }

  calculateResultValue() {
    const vaultForOperands = [];
    this.calculatedResult = 0;
    this.outputStr.forEach(el => {
      const elNumber = +el;

      if (!isNaN(elNumber)) {
        vaultForOperands.push(elNumber);
      } else {
        this.calculatedResult = this.mathOperation(el, vaultForOperands);
        vaultForOperands.push(this.calculatedResult);
      }
    });
    return this.calculatedResult;
  }

  conversionFromInfix(inputExample) {
    this.outputStr = []; // =========== add whitespace and replace ','===========

    inputExample = inputExample.replace(/(\,)/g, '.');
    inputExample = inputExample.replace(/(\()/g, '( ');
    inputExample = inputExample.replace(/(\))/g, ' )');
    const splitInputExample = inputExample.split(' '); // ========== delete all whitespace

    const splitAndClearInputExample = splitInputExample.filter(el => {
      if (el !== '' && el !== ' ') {
        return el;
      }
    });
    splitAndClearInputExample.forEach(element => {
      const elNumber = +element; // ========== element number or '(' ============

      if (!isNaN(elNumber) || element === '(') {
        element === '(' ? this.operationsStack.push(element) : this.outputStr.push(element);
        return 0;
      } // ========== /,*,+,-,% ============


      if (_static_calcOperators__WEBPACK_IMPORTED_MODULE_0__["operatorsAndPriority"].hasOwnProperty(element)) {
        const operationsStackLastElement = this.operationsStack.length - 1;

        if (_static_calcOperators__WEBPACK_IMPORTED_MODULE_0__["operatorsAndPriority"][this.operationsStack[operationsStackLastElement]] >= _static_calcOperators__WEBPACK_IMPORTED_MODULE_0__["operatorsAndPriority"][element]) {
          const operatorFromStack = this.operationsStack.pop();
          this.operationsStack.push(element);
          this.outputStr.push(operatorFromStack);
          return 0;
        } else {
          this.operationsStack.push(element);
          return 0;
        }
      } // ========= ) =========


      if (element === ')') {
        let flagStopPoint = true;

        while (flagStopPoint) {
          // while not find '(' or empty stack
          // !!!!!!!!!!!!!!!!!!!!!!!!!!1Проверка на пустоту массива, если пусть - то ошибка
          const OperationStacklength = this.operationsStack.length;

          if (this.operationsStack[OperationStacklength - 1] === '(') {
            flagStopPoint = false;
            this.operationsStack.pop();
          } else {
            this.outputStr.push(this.operationsStack.pop());
          }
        }

        return 0;
      }
    });

    for (const index = 0; index < this.operationsStack.length;) {
      this.outputStr.push(this.operationsStack.pop());
    }

    this.operationsStack = [];
  }

}

/***/ }),

/***/ "./src/Handlers.ts":
/*!*************************!*\
  !*** ./src/Handlers.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Handlers; });
/* harmony import */ var _static_calcOperators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/calcOperators */ "./src/static/calcOperators.ts");
/* harmony import */ var _static_forbiddenKeyboardCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/forbiddenKeyboardCode */ "./src/static/forbiddenKeyboardCode.ts");
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculator */ "./src/Calculator.ts");



const calculator = new _Calculator__WEBPACK_IMPORTED_MODULE_2__["default"]();
class Handlers {
  constructor() {
    ;
    this.userExample = '', this.userInputValue = '', this.resultField = document.querySelector('.result_example'), this.inputField = document.querySelector('.field_input-value ');
  }

  updateExampleFieldAndData(targetData) {
    if (targetData !== '') {
      if (targetData === '=') {
        this.userExample += `${this.userInputValue}`;
        this.resultField.innerText = `${this.userExample}`;
        this.userInputValue = '';
        this.inputField.value = '';
        return 0;
      } else {
        this.userExample += `${this.userInputValue} ${_static_calcOperators__WEBPACK_IMPORTED_MODULE_0__["operators"][targetData]} `;
        this.resultField.innerText = `${this.userExample}`;
        this.userInputValue = '';
        this.inputField.value = '';
        return 0;
      }
    }

    this.userExample = '';
    this.userInputValue = '';
    this.resultField.innerText = '';
    this.inputField.value = '';
  } // displayCalculatedValue(example: string) {
  //   return new Promise((resolve, reject) => {
  //     calculator.conversionFromInfix(example)
  //     resolve(true)
  //   })
  // }


  displayCalculatedValue(example) {
    calculator.conversionFromInfix(example);
    this.userExample = '';
    this.userInputValue = '' + calculator.calculateResultValue();
    this.updateInputField();
  }

  updateInputField() {
    this.inputField.value = `${this.userInputValue}`;
  }

  getInputExample(el) {
    const targetData = el.data;

    if (targetData === null) {
      this.userInputValue = this.userInputValue.slice(0, this.userInputValue.length - 1);
      return 0;
    }

    if (/\d|\(|\)/.test(targetData)) {
      this.userInputValue += targetData;
    } else if (_static_calcOperators__WEBPACK_IMPORTED_MODULE_0__["operators"].hasOwnProperty(targetData)) {
      this.updateExampleFieldAndData(targetData);
    } else if (targetData === '.' || targetData === ',') {
      this.userInputValue += targetData === '.' ? ',' : targetData;
      this.updateInputField();
    } else {
      this.updateInputField();
    }
  }

  getInputButton(e) {
    const eventTarget = e.target;
    const targetValueAttribute = eventTarget.getAttribute('data-value');

    if (/\d/.test(targetValueAttribute)) {
      this.userInputValue += targetValueAttribute;
      this.updateInputField();
      return 0;
    }

    if (targetValueAttribute === ',') {
      this.userInputValue += targetValueAttribute;
      this.updateInputField();
      return 0;
    }

    switch (targetValueAttribute) {
      case 'C':
        this.updateExampleFieldAndData('');
        break;

      case '=':
        this.updateExampleFieldAndData('=');
        this.displayCalculatedValue(this.userExample);
        break;

      default:
        this.updateExampleFieldAndData(targetValueAttribute);
        break;
    }
  }

  addButtonListener() {
    const buttonsInterface = document.querySelectorAll('.button');
    buttonsInterface.forEach(btn => {
      btn.addEventListener('click', e => this.getInputButton(e));
    });
  }

  addInputListener() {
    this.inputField.addEventListener('input', e => this.getInputExample(e));
    this.inputField.addEventListener('keydown', e => {
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        this.updateExampleFieldAndData('=');
        this.displayCalculatedValue(this.userExample);
        return 0;
      }

      if (e.code === 'Delete') {
        this.updateExampleFieldAndData('');
        return 0;
      }

      if (e.code in _static_forbiddenKeyboardCode__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        e.preventDefault();
      }
    });
  }

}

/***/ }),

/***/ "./src/fonts/Geometria-Bold.eot":
/*!**************************************!*\
  !*** ./src/fonts/Geometria-Bold.eot ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/c466818e46f98d288a5fc0987b2d587d.eot");

/***/ }),

/***/ "./src/fonts/Geometria-Bold.eot?iefix":
/*!********************************************!*\
  !*** ./src/fonts/Geometria-Bold.eot?iefix ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/c466818e46f98d288a5fc0987b2d587d.eot");

/***/ }),

/***/ "./src/fonts/Geometria-Bold.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Geometria-Bold.ttf ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/1873fe842023d533821bd627d609bc30.ttf");

/***/ }),

/***/ "./src/fonts/Geometria-Bold.woff":
/*!***************************************!*\
  !*** ./src/fonts/Geometria-Bold.woff ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/3a9ed34be5c5b3d8fc3c26157b2574b2.woff");

/***/ }),

/***/ "./src/fonts/Geometria.eot":
/*!*********************************!*\
  !*** ./src/fonts/Geometria.eot ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/b8d50fadaa8049cafceba7cb4d98981f.eot");

/***/ }),

/***/ "./src/fonts/Geometria.eot?iefix":
/*!***************************************!*\
  !*** ./src/fonts/Geometria.eot?iefix ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/b8d50fadaa8049cafceba7cb4d98981f.eot");

/***/ }),

/***/ "./src/fonts/Geometria.ttf":
/*!*********************************!*\
  !*** ./src/fonts/Geometria.ttf ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/8f177d24d33171dfc518dae7735fdc38.ttf");

/***/ }),

/***/ "./src/fonts/Geometria.woff":
/*!**********************************!*\
  !*** ./src/fonts/Geometria.woff ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/b7f74b260291c82461d1347e3f120b1d.woff");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Handlers_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handlers.ts */ "./src/Handlers.ts");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_1__);



document.addEventListener('DOMContentLoaded', function () {
   const handlers = new _Handlers_ts__WEBPACK_IMPORTED_MODULE_0__["default"]()
   handlers.addInputListener()
   handlers.addButtonListener()
})


/***/ }),

/***/ "./src/static/calcOperators.ts":
/*!*************************************!*\
  !*** ./src/static/calcOperators.ts ***!
  \*************************************/
/*! exports provided: operators, operatorsAndPriority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operators", function() { return operators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorsAndPriority", function() { return operatorsAndPriority; });
const operators = {
  '*': 'x',
  'x': 'x',
  'х': 'x',
  '%': '%',
  '/': '/',
  '-': '-',
  '+': '+',
  '√': '√'
};
const operatorsAndPriority = {
  'x': 14,
  '%': 14,
  '/': 14,
  '-': 13,
  '+': 13,
  '√': 15
};


/***/ }),

/***/ "./src/static/forbiddenKeyboardCode.ts":
/*!*********************************************!*\
  !*** ./src/static/forbiddenKeyboardCode.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var codes;

(function (codes) {
  codes[codes["ArrowUp"] = 0] = "ArrowUp";
  codes[codes["ArrowDown"] = 1] = "ArrowDown";
  codes[codes["ArrowLeft"] = 2] = "ArrowLeft";
  codes[codes["ArrowRight"] = 3] = "ArrowRight";
  codes[codes["Space"] = 4] = "Space";
})(codes || (codes = {}));

/* harmony default export */ __webpack_exports__["default"] = (codes);

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9mb250cy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL0dlb21ldHJpYS1Cb2xkLmVvdCIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvR2VvbWV0cmlhLUJvbGQuZW90P2U0M2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL0dlb21ldHJpYS1Cb2xkLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvR2VvbWV0cmlhLUJvbGQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvR2VvbWV0cmlhLmVvdCIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvR2VvbWV0cmlhLmVvdD8wMDJhIiwid2VicGFjazovLy8uL3NyYy9mb250cy9HZW9tZXRyaWEudHRmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9HZW9tZXRyaWEud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jYWxjT3BlcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9yYmlkZGVuS2V5Ym9hcmRDb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiXSwibmFtZXMiOlsiQ2FsY3VsYXRvciIsImNvbnN0cnVjdG9yIiwib3BlcmF0aW9uc1N0YWNrIiwib3V0cHV0U3RyIiwiY2FsY3VsYXRlZFJlc3VsdCIsIm1hdGhPcGVyYXRpb24iLCJvcGVyYXRvciIsInZhdWx0IiwicmVzdWx0T3BlcmF0aW9uIiwibGVuZ3RoIiwidG9GaXhlZCIsInBvcCIsIk1hdGgiLCJzcXJ0IiwiY2FsY3VsYXRlUmVzdWx0VmFsdWUiLCJ2YXVsdEZvck9wZXJhbmRzIiwiZm9yRWFjaCIsImVsIiwiZWxOdW1iZXIiLCJpc05hTiIsInB1c2giLCJjb252ZXJzaW9uRnJvbUluZml4IiwiaW5wdXRFeGFtcGxlIiwicmVwbGFjZSIsInNwbGl0SW5wdXRFeGFtcGxlIiwic3BsaXQiLCJzcGxpdEFuZENsZWFySW5wdXRFeGFtcGxlIiwiZmlsdGVyIiwiZWxlbWVudCIsIm9wZXJhdG9yc0FuZFByaW9yaXR5IiwiaGFzT3duUHJvcGVydHkiLCJvcGVyYXRpb25zU3RhY2tMYXN0RWxlbWVudCIsIm9wZXJhdG9yRnJvbVN0YWNrIiwiZmxhZ1N0b3BQb2ludCIsIk9wZXJhdGlvblN0YWNrbGVuZ3RoIiwiaW5kZXgiLCJjYWxjdWxhdG9yIiwiSGFuZGxlcnMiLCJ1c2VyRXhhbXBsZSIsInVzZXJJbnB1dFZhbHVlIiwicmVzdWx0RmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dEZpZWxkIiwidXBkYXRlRXhhbXBsZUZpZWxkQW5kRGF0YSIsInRhcmdldERhdGEiLCJpbm5lclRleHQiLCJ2YWx1ZSIsIm9wZXJhdG9ycyIsImRpc3BsYXlDYWxjdWxhdGVkVmFsdWUiLCJleGFtcGxlIiwidXBkYXRlSW5wdXRGaWVsZCIsImdldElucHV0RXhhbXBsZSIsImRhdGEiLCJzbGljZSIsInRlc3QiLCJnZXRJbnB1dEJ1dHRvbiIsImUiLCJldmVudFRhcmdldCIsInRhcmdldCIsInRhcmdldFZhbHVlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiYWRkQnV0dG9uTGlzdGVuZXIiLCJidXR0b25zSW50ZXJmYWNlIiwicXVlcnlTZWxlY3RvckFsbCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJbnB1dExpc3RlbmVyIiwiY29kZSIsImNvZGVzIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUNPO0FBQ2hDO0FBQ007QUFDTDtBQUNEO0FBQ0s7QUFDTTtBQUNMO0FBQ0Q7QUFDeEUsOEJBQThCLG1GQUEyQjtBQUN6RCx5Q0FBeUMsc0ZBQStCLENBQUMsNERBQTZCO0FBQ3RHLHlDQUF5QyxzRkFBK0IsQ0FBQyxrRUFBNkI7QUFDdEcseUNBQXlDLHNGQUErQixDQUFDLDZEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsNERBQTZCO0FBQ3RHLHlDQUF5Qyxz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LENBQUFBLEs7R0FBQUEsSyxLQUFBQSxLOztBQVFVQSxvRUFBZixFOzs7Ozs7Ozs7OztBQ1JBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsNEhBQXlEOztBQUUzRjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ZvbnRzL0dlb21ldHJpYS5lb3RcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vZm9udHMvR2VvbWV0cmlhLmVvdD9pZWZpeFwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuLi9mb250cy9HZW9tZXRyaWEud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuLi9mb250cy9HZW9tZXRyaWEudHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gZnJvbSBcIi4uL2ZvbnRzL0dlb21ldHJpYS1Cb2xkLmVvdFwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fIGZyb20gXCIuLi9mb250cy9HZW9tZXRyaWEtQm9sZC5lb3Q/aWVmaXhcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyBmcm9tIFwiLi4vZm9udHMvR2VvbWV0cmlhLUJvbGQud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fIGZyb20gXCIuLi9mb250cy9HZW9tZXRyaWEtQm9sZC50dGZcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHZW9tZXRyaWEnO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ2VvdCcpLFxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHZW9tZXRyaWFfQic7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGZvcm1hdCgnZW90JyksXFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZm9udHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFrQztJQUNsQzs7OERBRWdEO0FBQ3BEOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDRDQUF1QztJQUN2Qzs7OERBRXFEO0lBQ3JELGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNle1xcclxcbiAgICBmb250LWZhbWlseTogJ0dlb21ldHJpYSc7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9HZW9tZXRyaWEuZW90XFxcIik7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9HZW9tZXRyaWEuZW90P2llZml4JykgZm9ybWF0KCdlb3QnKSxcXHJcXG4gICAgdXJsKCcuLi9mb250cy9HZW9tZXRyaWEud29mZicpIGZvcm1hdCgnd29mZicpLFxcclxcbiAgICB1cmwoJy4uL2ZvbnRzL0dlb21ldHJpYS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2V7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhX0InO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvR2VvbWV0cmlhLUJvbGQuZW90XFxcIik7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9HZW9tZXRyaWEtQm9sZC5lb3Q/aWVmaXgnKSBmb3JtYXQoJ2VvdCcpLFxcclxcbiAgICB1cmwoJy4uL2ZvbnRzL0dlb21ldHJpYS1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXHJcXG4gICAgdXJsKCcuLi9mb250cy9HZW9tZXRyaWEtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvbnRzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogI0YyRjJGMjtcXHJcXG4gICAgLS1tYWluLXRleHQtc2l6ZTogMzZweDtcXHJcXG4gICAgLS1ibHVlOiBsaW5lYXItZ3JhZGllbnQoMTU1LjIzZGVnLCAjMjg1MThFIDAlLCAjM0E3N0QxIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2VvbWV0cmlhXFxcIiwgXFxcInNhbnMtc2VyaWZcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTRweDtcXHJcXG4gICAgaGVpZ2h0OiA4MDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsY3VsYXRvciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA4MnB4IDE1OHB4IHJnYmEoMCwgMCwgMCwgMC4zNSksIDBweCAyNC43MjA2cHggNDcuNjMyNHB4IHJnYmEoMCwgMCwgMCwgMC4yMjgwNTYpLCAwcHggMTAuMjY3N3B4IDE5Ljc4NDFweCByZ2JhKDAsIDAsIDAsIDAuMTc1KSwgMHB4IDMuNzEzNjJweCA3LjE1NTVweCByZ2JhKDAsIDAsIDAsIDAuMTIxOTQ0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHZW9tZXRyaWEnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsY3VsYXRvciAuZmllbGRfaW5wdXQtdmFsdWV7XFxyXFxuICAgIGhlaWdodDogNDZweDtcXHJcXG4gICAgbWFyZ2luOiAzN3B4IDAgMzdweCAwO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LXNpemUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4zNSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiR2VvbWV0cmlhX0JcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDU2cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG59XFxyXFxuLmNhbGN1bGF0b3IgLmZpZWxkX2lucHV0LXZhbHVlOmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOm5vbmUgO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsY3VsYXRvciAucmVzdWx0X2V4YW1wbGV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDExN3B4O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5jYWxjdWxhdG9yIC5pbnRlcmZhY2VfY2FsY3VsYXRvcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1tYWluLXRleHQtc2l6ZSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogODBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuLmJ1dHRvbjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjM1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbltkYXRhLXZhbHVlPVxcXCI9XFxcIl0ge1xcclxcbiAgICBjb2xvcjogIzJCNTg5QTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qiw0REFBNEQ7QUFDaEU7OztBQUdBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDZMQUE2TDtJQUM3TCxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGtEQUFrRDtJQUNsRCwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0RBQW9EO0lBQ3BELGlEQUFpRDtJQUNqRCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdDQUF3QztJQUN4QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJmb250cy5jc3NcXFwiO1xcclxcblxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1tYWluLXRleHQtY29sb3I6ICNGMkYyRjI7XFxyXFxuICAgIC0tbWFpbi10ZXh0LXNpemU6IDM2cHg7XFxyXFxuICAgIC0tYmx1ZTogbGluZWFyLWdyYWRpZW50KDE1NS4yM2RlZywgIzI4NTE4RSAwJSwgIzNBNzdEMSAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkdlb21ldHJpYVxcXCIsIFxcXCJzYW5zLXNlcmlmXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1heC13aWR0aDogNTU0cHg7XFxyXFxuICAgIGhlaWdodDogODAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGN1bGF0b3Ige1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggODJweCAxNThweCByZ2JhKDAsIDAsIDAsIDAuMzUpLCAwcHggMjQuNzIwNnB4IDQ3LjYzMjRweCByZ2JhKDAsIDAsIDAsIDAuMjI4MDU2KSwgMHB4IDEwLjI2NzdweCAxOS43ODQxcHggcmdiYSgwLCAwLCAwLCAwLjE3NSksIDBweCAzLjcxMzYycHggNy4xNTU1cHggcmdiYSgwLCAwLCAwLCAwLjEyMTk0NCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGN1bGF0b3IgLmZpZWxkX2lucHV0LXZhbHVle1xcclxcbiAgICBoZWlnaHQ6IDQ2cHg7XFxyXFxuICAgIG1hcmdpbjogMzdweCAwIDM3cHggMDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1zaXplKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMHB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDAuMzUpO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkdlb21ldHJpYV9CXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIC5maWVsZF9pbnB1dC12YWx1ZTpmb2N1c3tcXHJcXG4gICAgb3V0bGluZTpub25lIDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGN1bGF0b3IgLnJlc3VsdF9leGFtcGxle1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIG1heC13aWR0aDogNzB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMTdweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsY3VsYXRvciAuaW50ZXJmYWNlX2NhbGN1bGF0b3J7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWFpbi10ZXh0LXNpemUpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcbi5idXR0b246aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25bZGF0YS12YWx1ZT1cXFwiPVxcXCJdIHtcXHJcXG4gICAgY29sb3I6ICMyQjU4OUE7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBvcGVyYXRvcnNBbmRQcmlvcml0eSB9IGZyb20gJy4vc3RhdGljL2NhbGNPcGVyYXRvcnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIHtcclxuICAgb3BlcmF0aW9uc1N0YWNrOiBzdHJpbmdbXVxyXG4gICBvdXRwdXRTdHI6IHN0cmluZ1tdXHJcbiAgIGNhbGN1bGF0ZWRSZXN1bHQ6IG51bWJlclxyXG5cclxuICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIDsodGhpcy5vcGVyYXRpb25zU3RhY2sgPSBbXSksXHJcbiAgICAgICAgICh0aGlzLm91dHB1dFN0ciA9IFtdKSxcclxuICAgICAgICAgKHRoaXMuY2FsY3VsYXRlZFJlc3VsdCA9IDApXHJcbiAgIH1cclxuXHJcbiAgIG1hdGhPcGVyYXRpb24ob3BlcmF0b3I6IHN0cmluZywgdmF1bHQ6IG51bWJlcltdKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgbGV0IHJlc3VsdE9wZXJhdGlvbiA9IDBcclxuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xyXG4gICAgICAgICBjYXNlICd4JzpcclxuICAgICAgICAgICAgcmVzdWx0T3BlcmF0aW9uID0gKyhcclxuICAgICAgICAgICAgICAgdmF1bHRbdmF1bHQubGVuZ3RoIC0gMV0gKiB2YXVsdFt2YXVsdC5sZW5ndGggLSAyXVxyXG4gICAgICAgICAgICApLnRvRml4ZWQoMylcclxuICAgICAgICAgICAgdmF1bHQucG9wKClcclxuICAgICAgICAgICAgdmF1bHQucG9wKClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE9wZXJhdGlvblxyXG4gICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICAgICAgcmVzdWx0T3BlcmF0aW9uID0gKyhcclxuICAgICAgICAgICAgICAgdmF1bHRbdmF1bHQubGVuZ3RoIC0gMV0gLyB2YXVsdFt2YXVsdC5sZW5ndGggLSAyXVxyXG4gICAgICAgICAgICApLnRvRml4ZWQoMylcclxuICAgICAgICAgICAgdmF1bHQucG9wKClcclxuICAgICAgICAgICAgdmF1bHQucG9wKClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE9wZXJhdGlvblxyXG4gICAgICAgICBjYXNlICclJzpcclxuICAgICAgICAgICAgcmVzdWx0T3BlcmF0aW9uID0gKyhcclxuICAgICAgICAgICAgICAgKHZhdWx0W3ZhdWx0Lmxlbmd0aCAtIDFdICogdmF1bHRbdmF1bHQubGVuZ3RoIC0gMl0pIC9cclxuICAgICAgICAgICAgICAgMTAwXHJcbiAgICAgICAgICAgICkudG9GaXhlZCgzKVxyXG4gICAgICAgICAgICB2YXVsdC5wb3AoKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0T3BlcmF0aW9uXHJcbiAgICAgICAgIGNhc2UgJ+KImic6XHJcbiAgICAgICAgICAgIHJlc3VsdE9wZXJhdGlvbiA9IE1hdGguc3FydCh2YXVsdFt2YXVsdC5sZW5ndGggLSAxXSlcclxuICAgICAgICAgICAgdmF1bHQucG9wKClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE9wZXJhdGlvblxyXG4gICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgcmVzdWx0T3BlcmF0aW9uID0gKyhcclxuICAgICAgICAgICAgICAgdmF1bHRbdmF1bHQubGVuZ3RoIC0gMV0gKyB2YXVsdFt2YXVsdC5sZW5ndGggLSAyXVxyXG4gICAgICAgICAgICApLnRvRml4ZWQoMylcclxuICAgICAgICAgICAgdmF1bHQucG9wKClcclxuICAgICAgICAgICAgdmF1bHQucG9wKClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE9wZXJhdGlvblxyXG4gICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmVzdWx0T3BlcmF0aW9uID0gKyhcclxuICAgICAgICAgICAgICAgdmF1bHRbdmF1bHQubGVuZ3RoIC0gMl0gLSB2YXVsdFt2YXVsdC5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICApLnRvRml4ZWQoMylcclxuICAgICAgICAgICAgdmF1bHQucG9wKClcclxuICAgICAgICAgICAgdmF1bHQucG9wKClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE9wZXJhdGlvblxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGNhbGN1bGF0ZVJlc3VsdFZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgIGNvbnN0IHZhdWx0Rm9yT3BlcmFuZHM6IG51bWJlcltdID0gW11cclxuICAgICAgdGhpcy5jYWxjdWxhdGVkUmVzdWx0ID0gMFxyXG5cclxuICAgICAgdGhpcy5vdXRwdXRTdHIuZm9yRWFjaCgoZWw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICBjb25zdCBlbE51bWJlcjogbnVtYmVyID0gK2VsXHJcblxyXG4gICAgICAgICBpZiAoIWlzTmFOKGVsTnVtYmVyKSkge1xyXG4gICAgICAgICAgICB2YXVsdEZvck9wZXJhbmRzLnB1c2goZWxOdW1iZXIpXHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlZFJlc3VsdCA9IHRoaXMubWF0aE9wZXJhdGlvbihcclxuICAgICAgICAgICAgICAgZWwsXHJcbiAgICAgICAgICAgICAgIHZhdWx0Rm9yT3BlcmFuZHNcclxuICAgICAgICAgICAgKSBhcyBudW1iZXJcclxuICAgICAgICAgICAgdmF1bHRGb3JPcGVyYW5kcy5wdXNoKHRoaXMuY2FsY3VsYXRlZFJlc3VsdClcclxuICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVkUmVzdWx0XHJcbiAgIH1cclxuXHJcbiAgIGNvbnZlcnNpb25Gcm9tSW5maXgoaW5wdXRFeGFtcGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgdGhpcy5vdXRwdXRTdHIgPSBbXVxyXG4gICAgICAvLyA9PT09PT09PT09PSBhZGQgd2hpdGVzcGFjZSBhbmQgcmVwbGFjZSAnLCc9PT09PT09PT09PVxyXG4gICAgICBpbnB1dEV4YW1wbGUgPSBpbnB1dEV4YW1wbGUucmVwbGFjZSgvKFxcLCkvZywgJy4nKVxyXG4gICAgICBpbnB1dEV4YW1wbGUgPSBpbnB1dEV4YW1wbGUucmVwbGFjZSgvKFxcKCkvZywgJyggJylcclxuICAgICAgaW5wdXRFeGFtcGxlID0gaW5wdXRFeGFtcGxlLnJlcGxhY2UoLyhcXCkpL2csICcgKScpXHJcblxyXG4gICAgICBjb25zdCBzcGxpdElucHV0RXhhbXBsZTogc3RyaW5nW10gPSBpbnB1dEV4YW1wbGUuc3BsaXQoJyAnKVxyXG4gICAgICAvLyA9PT09PT09PT09IGRlbGV0ZSBhbGwgd2hpdGVzcGFjZVxyXG4gICAgICBjb25zdCBzcGxpdEFuZENsZWFySW5wdXRFeGFtcGxlOiBzdHJpbmdbXSA9IHNwbGl0SW5wdXRFeGFtcGxlLmZpbHRlcihcclxuICAgICAgICAgKGVsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsICE9PSAnJyAmJiBlbCAhPT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgIHJldHVybiBlbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgKVxyXG5cclxuICAgICAgc3BsaXRBbmRDbGVhcklucHV0RXhhbXBsZS5mb3JFYWNoKChlbGVtZW50OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgY29uc3QgZWxOdW1iZXI6IG51bWJlciA9ICtlbGVtZW50XHJcbiAgICAgICAgIC8vID09PT09PT09PT0gZWxlbWVudCBudW1iZXIgb3IgJygnID09PT09PT09PT09PVxyXG4gICAgICAgICBpZiAoIWlzTmFOKGVsTnVtYmVyKSB8fCBlbGVtZW50ID09PSAnKCcpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9PT0gJygnXHJcbiAgICAgICAgICAgICAgID8gdGhpcy5vcGVyYXRpb25zU3RhY2sucHVzaChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICA6IHRoaXMub3V0cHV0U3RyLnB1c2goZWxlbWVudClcclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgfVxyXG4gICAgICAgICAvLyA9PT09PT09PT09IC8sKiwrLC0sJSA9PT09PT09PT09PT1cclxuICAgICAgICAgaWYgKG9wZXJhdG9yc0FuZFByaW9yaXR5Lmhhc093blByb3BlcnR5KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdGlvbnNTdGFja0xhc3RFbGVtZW50OiBudW1iZXIgPVxyXG4gICAgICAgICAgICAgICB0aGlzLm9wZXJhdGlvbnNTdGFjay5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgb3BlcmF0b3JzQW5kUHJpb3JpdHlbXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uc1N0YWNrW29wZXJhdGlvbnNTdGFja0xhc3RFbGVtZW50XVxyXG4gICAgICAgICAgICAgICBdID49IG9wZXJhdG9yc0FuZFByaW9yaXR5W2VsZW1lbnRdXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICBjb25zdCBvcGVyYXRvckZyb21TdGFjazogc3RyaW5nID0gdGhpcy5vcGVyYXRpb25zU3RhY2sucG9wKCkgYXMgc3RyaW5nXHJcbiAgICAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uc1N0YWNrLnB1c2goZWxlbWVudClcclxuICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRTdHIucHVzaChvcGVyYXRvckZyb21TdGFjaylcclxuICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25zU3RhY2sucHVzaChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLy8gPT09PT09PT09ICkgPT09PT09PT09XHJcbiAgICAgICAgIGlmIChlbGVtZW50ID09PSAnKScpIHtcclxuICAgICAgICAgICAgbGV0IGZsYWdTdG9wUG9pbnQ6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICAgICAgICAgIHdoaWxlIChmbGFnU3RvcFBvaW50KSB7XHJcbiAgICAgICAgICAgICAgIC8vIHdoaWxlIG5vdCBmaW5kICcoJyBvciBlbXB0eSBzdGFja1xyXG4gICAgICAgICAgICAgICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhITHQn9GA0L7QstC10YDQutCwINC90LAg0L/Rg9GB0YLQvtGC0YMg0LzQsNGB0YHQuNCy0LAsINC10YHQu9C4INC/0YPRgdGC0YwgLSDRgtC+INC+0YjQuNCx0LrQsFxyXG4gICAgICAgICAgICAgICBjb25zdCBPcGVyYXRpb25TdGFja2xlbmd0aDogbnVtYmVyID0gdGhpcy5vcGVyYXRpb25zU3RhY2subGVuZ3RoXHJcbiAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZXJhdGlvbnNTdGFja1tPcGVyYXRpb25TdGFja2xlbmd0aCAtIDFdID09PSAnKCcpIHtcclxuICAgICAgICAgICAgICAgICAgZmxhZ1N0b3BQb2ludCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uc1N0YWNrLnBvcCgpXHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0U3RyLnB1c2godGhpcy5vcGVyYXRpb25zU3RhY2sucG9wKCkgYXMgc3RyaW5nKVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgZm9yIChjb25zdCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5vcGVyYXRpb25zU3RhY2subGVuZ3RoOyApIHtcclxuICAgICAgICAgdGhpcy5vdXRwdXRTdHIucHVzaCh0aGlzLm9wZXJhdGlvbnNTdGFjay5wb3AoKSBhcyBzdHJpbmcpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vcGVyYXRpb25zU3RhY2sgPSBbXVxyXG4gICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgb3BlcmF0b3JzIH0gZnJvbSAnLi9zdGF0aWMvY2FsY09wZXJhdG9ycydcclxuaW1wb3J0IGNvZGVzIGZyb20gJy4vc3RhdGljL2ZvcmJpZGRlbktleWJvYXJkQ29kZSdcclxuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9DYWxjdWxhdG9yJ1xyXG5cclxuY29uc3QgY2FsY3VsYXRvciA9IG5ldyBDYWxjdWxhdG9yKClcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlcnMge1xyXG4gIHVzZXJFeGFtcGxlOiBzdHJpbmdcclxuICB1c2VySW5wdXRWYWx1ZTogc3RyaW5nXHJcbiAgcmVzdWx0RmllbGQ6IEhUTUxFbGVtZW50XHJcbiAgaW5wdXRGaWVsZDogSFRNTElucHV0RWxlbWVudFxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIDsodGhpcy51c2VyRXhhbXBsZSA9ICcnKSxcclxuICAgICAgKHRoaXMudXNlcklucHV0VmFsdWUgPSAnJyksXHJcbiAgICAgICh0aGlzLnJlc3VsdEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAnLnJlc3VsdF9leGFtcGxlJ1xyXG4gICAgICApIGFzIEhUTUxFbGVtZW50KSxcclxuICAgICAgKHRoaXMuaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJy5maWVsZF9pbnB1dC12YWx1ZSAnXHJcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudClcclxuICB9XHJcblxyXG4gIHVwZGF0ZUV4YW1wbGVGaWVsZEFuZERhdGEodGFyZ2V0RGF0YTogc3RyaW5nKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0YXJnZXREYXRhICE9PSAnJykge1xyXG4gICAgICBpZiAodGFyZ2V0RGF0YSA9PT0gJz0nKSB7XHJcbiAgICAgICAgdGhpcy51c2VyRXhhbXBsZSArPSBgJHt0aGlzLnVzZXJJbnB1dFZhbHVlfWBcclxuICAgICAgICB0aGlzLnJlc3VsdEZpZWxkLmlubmVyVGV4dCA9IGAke3RoaXMudXNlckV4YW1wbGV9YFxyXG4gICAgICAgIHRoaXMudXNlcklucHV0VmFsdWUgPSAnJ1xyXG4gICAgICAgIHRoaXMuaW5wdXRGaWVsZC52YWx1ZSA9ICcnXHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnVzZXJFeGFtcGxlICs9IGAke3RoaXMudXNlcklucHV0VmFsdWV9ICR7b3BlcmF0b3JzW3RhcmdldERhdGFdfSBgXHJcbiAgICAgICAgdGhpcy5yZXN1bHRGaWVsZC5pbm5lclRleHQgPSBgJHt0aGlzLnVzZXJFeGFtcGxlfWBcclxuICAgICAgICB0aGlzLnVzZXJJbnB1dFZhbHVlID0gJydcclxuICAgICAgICB0aGlzLmlucHV0RmllbGQudmFsdWUgPSAnJ1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudXNlckV4YW1wbGUgPSAnJ1xyXG4gICAgdGhpcy51c2VySW5wdXRWYWx1ZSA9ICcnXHJcbiAgICB0aGlzLnJlc3VsdEZpZWxkLmlubmVyVGV4dCA9ICcnXHJcbiAgICB0aGlzLmlucHV0RmllbGQudmFsdWUgPSAnJ1xyXG4gIH1cclxuXHJcbiAgLy8gZGlzcGxheUNhbGN1bGF0ZWRWYWx1ZShleGFtcGxlOiBzdHJpbmcpIHtcclxuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgLy8gICAgIGNhbGN1bGF0b3IuY29udmVyc2lvbkZyb21JbmZpeChleGFtcGxlKVxyXG4gIC8vICAgICByZXNvbHZlKHRydWUpXHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuICBkaXNwbGF5Q2FsY3VsYXRlZFZhbHVlKGV4YW1wbGU6IHN0cmluZykge1xyXG4gICAgICBjYWxjdWxhdG9yLmNvbnZlcnNpb25Gcm9tSW5maXgoZXhhbXBsZSlcclxuICAgICAgdGhpcy51c2VyRXhhbXBsZSA9ICcnXHJcbiAgICAgIHRoaXMudXNlcklucHV0VmFsdWUgPSAnJyArIGNhbGN1bGF0b3IuY2FsY3VsYXRlUmVzdWx0VmFsdWUoKVxyXG4gICAgICB0aGlzLnVwZGF0ZUlucHV0RmllbGQoKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXRGaWVsZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRGaWVsZC52YWx1ZSA9IGAke3RoaXMudXNlcklucHV0VmFsdWV9YFxyXG4gIH1cclxuXHJcbiAgZ2V0SW5wdXRFeGFtcGxlKGVsOiBJbnB1dEV2ZW50KTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIGNvbnN0IHRhcmdldERhdGE6IHN0cmluZyB8IG51bGwgPSBlbC5kYXRhXHJcblxyXG4gICAgaWYgKHRhcmdldERhdGEgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy51c2VySW5wdXRWYWx1ZSA9IHRoaXMudXNlcklucHV0VmFsdWUuc2xpY2UoXHJcbiAgICAgICAgMCxcclxuICAgICAgICB0aGlzLnVzZXJJbnB1dFZhbHVlLmxlbmd0aCAtIDFcclxuICAgICAgKVxyXG4gICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG4gICAgaWYgKC9cXGR8XFwofFxcKS8udGVzdCh0YXJnZXREYXRhKSkge1xyXG4gICAgICB0aGlzLnVzZXJJbnB1dFZhbHVlICs9IHRhcmdldERhdGFcclxuICAgIH0gZWxzZSBpZiAob3BlcmF0b3JzLmhhc093blByb3BlcnR5KHRhcmdldERhdGEpKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRXhhbXBsZUZpZWxkQW5kRGF0YSh0YXJnZXREYXRhKVxyXG4gICAgfSBlbHNlIGlmICh0YXJnZXREYXRhID09PSAnLicgfHwgdGFyZ2V0RGF0YSA9PT0gJywnKSB7XHJcbiAgICAgIHRoaXMudXNlcklucHV0VmFsdWUgKz0gdGFyZ2V0RGF0YSA9PT0gJy4nID8gJywnIDogdGFyZ2V0RGF0YVxyXG4gICAgICB0aGlzLnVwZGF0ZUlucHV0RmllbGQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cGRhdGVJbnB1dEZpZWxkKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldElucHV0QnV0dG9uKGU6IE1vdXNlRXZlbnQpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudFxyXG4gICAgY29uc3QgdGFyZ2V0VmFsdWVBdHRyaWJ1dGUgPSBldmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXHJcbiAgICAgICdkYXRhLXZhbHVlJ1xyXG4gICAgKSBhcyBzdHJpbmdcclxuXHJcbiAgICBpZiAoL1xcZC8udGVzdCh0YXJnZXRWYWx1ZUF0dHJpYnV0ZSkpIHtcclxuICAgICAgdGhpcy51c2VySW5wdXRWYWx1ZSArPSB0YXJnZXRWYWx1ZUF0dHJpYnV0ZVxyXG4gICAgICB0aGlzLnVwZGF0ZUlucHV0RmllbGQoKVxyXG4gICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG4gICAgaWYgKHRhcmdldFZhbHVlQXR0cmlidXRlID09PSAnLCcpIHtcclxuICAgICAgdGhpcy51c2VySW5wdXRWYWx1ZSArPSB0YXJnZXRWYWx1ZUF0dHJpYnV0ZVxyXG4gICAgICB0aGlzLnVwZGF0ZUlucHV0RmllbGQoKVxyXG4gICAgICByZXR1cm4gMFxyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0YXJnZXRWYWx1ZUF0dHJpYnV0ZSkge1xyXG4gICAgICBjYXNlICdDJzpcclxuICAgICAgICB0aGlzLnVwZGF0ZUV4YW1wbGVGaWVsZEFuZERhdGEoJycpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnPSc6XHJcbiAgICAgICAgdGhpcy51cGRhdGVFeGFtcGxlRmllbGRBbmREYXRhKCc9JylcclxuICAgICAgICB0aGlzLmRpc3BsYXlDYWxjdWxhdGVkVmFsdWUodGhpcy51c2VyRXhhbXBsZSlcclxuXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLnVwZGF0ZUV4YW1wbGVGaWVsZEFuZERhdGEodGFyZ2V0VmFsdWVBdHRyaWJ1dGUpXHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEJ1dHRvbkxpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgYnV0dG9uc0ludGVyZmFjZTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnLmJ1dHRvbidcclxuICAgIClcclxuICAgIGJ1dHRvbnNJbnRlcmZhY2UuZm9yRWFjaCgoYnRuOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB0aGlzLmdldElucHV0QnV0dG9uKGUpKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFkZElucHV0TGlzdGVuZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZTogYW55KSA9PlxyXG4gICAgICB0aGlzLmdldElucHV0RXhhbXBsZShlKVxyXG4gICAgKVxyXG4gICAgdGhpcy5pbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdFbnRlcicgfHwgZS5jb2RlID09PSAnTnVtcGFkRW50ZXInKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFeGFtcGxlRmllbGRBbmREYXRhKCc9JylcclxuICAgICAgICB0aGlzLmRpc3BsYXlDYWxjdWxhdGVkVmFsdWUodGhpcy51c2VyRXhhbXBsZSlcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgICB9XHJcbiAgICAgIGlmKGUuY29kZSA9PT0gJ0RlbGV0ZScpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlRXhhbXBsZUZpZWxkQW5kRGF0YSgnJylcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLmNvZGUgaW4gY29kZXMpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9jNDY2ODE4ZTQ2Zjk4ZDI4OGE1ZmMwOTg3YjJkNTg3ZC5lb3RcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvYzQ2NjgxOGU0NmY5OGQyODhhNWZjMDk4N2IyZDU4N2QuZW90XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzLzE4NzNmZTg0MjAyM2Q1MzM4MjFiZDYyN2Q2MDliYzMwLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy8zYTllZDM0YmU1YzViM2Q4ZmMzYzI2MTU3YjI1NzRiMi53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2I4ZDUwZmFkYWE4MDQ5Y2FmY2ViYTdjYjRkOTg5ODFmLmVvdFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9iOGQ1MGZhZGFhODA0OWNhZmNlYmE3Y2I0ZDk4OTgxZi5lb3RcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvOGYxNzdkMjRkMzMxNzFkZmM1MThkYWU3NzM1ZmRjMzgudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2I3Zjc0YjI2MDI5MWM4MjQ2MWQxMzQ3ZTNmMTIwYjFkLndvZmZcIjsiLCJpbXBvcnQgSGFuZGxlcnMgZnJvbSAnLi9IYW5kbGVycy50cydcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICBjb25zdCBoYW5kbGVycyA9IG5ldyBIYW5kbGVycygpXHJcbiAgIGhhbmRsZXJzLmFkZElucHV0TGlzdGVuZXIoKVxyXG4gICBoYW5kbGVycy5hZGRCdXR0b25MaXN0ZW5lcigpXHJcbn0pXHJcbiIsImludGVyZmFjZSBPcGVyYXRpb24ge1xyXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG59XHJcbmludGVyZmFjZSBPcGVyYXRpb25Qcmlvcml0eSB7XHJcbiAgW2tleTogc3RyaW5nXTogbnVtYmVyXHJcbn1cclxuY29uc3Qgb3BlcmF0b3JzOiBPcGVyYXRpb24gPSB7XHJcbiAgJyonOiAneCcsXHJcbiAgJ3gnOiAneCcsXHJcbiAgJ9GFJzogJ3gnLFxyXG4gICclJzogJyUnLFxyXG4gICcvJzogJy8nLFxyXG4gICctJzogJy0nLFxyXG4gICcrJzogJysnLFxyXG4gICfiiJonOiAn4oiaJ1xyXG59XHJcblxyXG5jb25zdCBvcGVyYXRvcnNBbmRQcmlvcml0eTogT3BlcmF0aW9uUHJpb3JpdHkgPSB7XHJcbiAgJ3gnOjE0LFxyXG4gICclJzoxNCxcclxuICAnLyc6MTQsXHJcbiAgJy0nOjEzLFxyXG4gICcrJzoxMyxcclxuICAn4oiaJzoxNSxcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQge29wZXJhdG9ycywgb3BlcmF0b3JzQW5kUHJpb3JpdHl9XHJcbiIsImVudW0gY29kZXMgIHtcclxuJ0Fycm93VXAnLFxyXG4nQXJyb3dEb3duJyxcclxuJ0Fycm93TGVmdCcsXHJcbidBcnJvd1JpZ2h0JyxcclxuJ1NwYWNlJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29kZXMiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9