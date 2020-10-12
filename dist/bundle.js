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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\r\n    --main-text-color: #F2F2F2;\r\n    --main-text-size: 36px;\r\n    --main-text-M-size: 30px;\r\n    --main-text-S-size: 28px;\r\n    --blue: linear-gradient(155.23deg, #28518E 0%, #3A77D1 100%);\r\n}\r\n\r\n\r\nbody {\r\n  font-family: \"Geometria\", \"sans-serif\";\r\n}\r\n\r\n.wrap{\r\n    display: flex;\r\n    max-width: 554px;\r\n    height: 800px;\r\n    justify-content: center;\r\n    margin: 50px auto;\r\n}\r\n\r\n.calculator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    padding: 50px;\r\n    color: var(--main-text-color);\r\n    background: var(--blue);\r\n    box-shadow: 0px 82px 158px rgba(0, 0, 0, 0.35), 0px 24.7206px 47.6324px rgba(0, 0, 0, 0.228056), 0px 10.2677px 19.7841px rgba(0, 0, 0, 0.175), 0px 3.71362px 7.1555px rgba(0, 0, 0, 0.121944);\r\n    border-radius: 18px;\r\n    font-family: 'Geometria';\r\n    font-weight: normal;\r\n}\r\n\r\n.calculator .field_input-value{\r\n    height: 46px;\r\n    margin: 37px 0 37px 0;\r\n    padding-bottom: 20px;\r\n    border: none;\r\n    color: var(--main-text-size);\r\n    background-color: transparent;\r\n    box-shadow: 0px 2px 0px 0px rgba(255,255,255,0.35);\r\n    font-family: \"Geometria_B\";\r\n    font-size: 56px;\r\n    text-align: end;\r\n}\r\n.calculator .field_input-value:focus{\r\n    outline:none ;\r\n}\r\n\r\n.calculator .result_example{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: flex-end;\r\n    max-width: 70vw;\r\n    height: 117px;\r\n    font-size: 24px;\r\n}\r\n\r\n.calculator .interface_calculator{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, minmax(100px, 1fr));\r\n    grid-template-rows: repeat(4, minmax(100px, 1fr));\r\n    justify-items: center;\r\n}\r\n\r\n.button {\r\n    width: 80px;\r\n    height: 80px;\r\n    font-size: var(--main-text-size);\r\n    font-family: \"Geometria\";\r\n    text-align: center;\r\n    cursor: pointer;\r\n    line-height: 80px;\r\n    transition: 0.2s;\r\n    color: var(--main-text-color);\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n.button:hover{\r\n    background-color: rgba(255,255,255,0.35);\r\n    border-radius: 40px;\r\n}\r\n\r\n.button[data-value=\"=\"] {\r\n    color: #2B589A;\r\n    background: var(--main-text-color);\r\n    border-radius: 40px;\r\n}\r\n\r\n@media (max-width: 650px) { \r\n\r\n    .wrap{\r\n        height: 80vh ;\r\n        max-width: 100vw;\r\n        margin: 0;\r\n    }\r\n\r\n    .calculator{\r\n        padding: 0;\r\n    }\r\n\r\n    .calculator .field_input-value {\r\n        margin: 37px 30px;\r\n    }\r\n    .calculator .result_example {\r\n        max-width: 90vw;\r\n    }\r\n\r\n    .calculator .interface_calculator{\r\n        grid-template-columns: repeat(4, minmax(50px, 1fr));\r\n        grid-template-rows: repeat(4, minmax(80px, 1fr));\r\n    }\r\n\r\n    .button{\r\n        font-size: var(--main-text-M-size);\r\n    }\r\n}\r\n\r\n@media (max-width: 450px) { \r\n    .wrap{\r\n        height: 90vh ;\r\n    }\r\n\r\n    .calculator .interface_calculator{\r\n        grid-template-columns: repeat(4, minmax(50px, 1fr));\r\n        grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));\r\n    }\r\n\r\n    .button{\r\n        width: 50px;\r\n        font-size: var(--main-text-S-size);\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://src/styles/style.css"],"names":[],"mappings":"AAGA;IACI,0BAA0B;IAC1B,sBAAsB;IACtB,wBAAwB;IACxB,wBAAwB;IACxB,4DAA4D;AAChE;;;AAGA;EACE,sCAAsC;AACxC;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;IACvB,6LAA6L;IAC7L,mBAAmB;IACnB,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;IACZ,4BAA4B;IAC5B,6BAA6B;IAC7B,kDAAkD;IAClD,0BAA0B;IAC1B,eAAe;IACf,eAAe;AACnB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;IACf,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,oDAAoD;IACpD,iDAAiD;IACjD,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;IAChC,wBAAwB;IACxB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;IACZ,6BAA6B;AACjC;AACA;IACI,wCAAwC;IACxC,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;;IAEI;QACI,aAAa;QACb,gBAAgB;QAChB,SAAS;IACb;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;;IAEA;QACI,mDAAmD;QACnD,gDAAgD;IACpD;;IAEA;QACI,kCAAkC;IACtC;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,mDAAmD;QACnD,yDAAyD;IAC7D;;IAEA;QACI,WAAW;QACX,kCAAkC;IACtC;AACJ","sourcesContent":["@import \"fonts.css\";\r\n\r\n\r\n:root {\r\n    --main-text-color: #F2F2F2;\r\n    --main-text-size: 36px;\r\n    --main-text-M-size: 30px;\r\n    --main-text-S-size: 28px;\r\n    --blue: linear-gradient(155.23deg, #28518E 0%, #3A77D1 100%);\r\n}\r\n\r\n\r\nbody {\r\n  font-family: \"Geometria\", \"sans-serif\";\r\n}\r\n\r\n.wrap{\r\n    display: flex;\r\n    max-width: 554px;\r\n    height: 800px;\r\n    justify-content: center;\r\n    margin: 50px auto;\r\n}\r\n\r\n.calculator {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    padding: 50px;\r\n    color: var(--main-text-color);\r\n    background: var(--blue);\r\n    box-shadow: 0px 82px 158px rgba(0, 0, 0, 0.35), 0px 24.7206px 47.6324px rgba(0, 0, 0, 0.228056), 0px 10.2677px 19.7841px rgba(0, 0, 0, 0.175), 0px 3.71362px 7.1555px rgba(0, 0, 0, 0.121944);\r\n    border-radius: 18px;\r\n    font-family: 'Geometria';\r\n    font-weight: normal;\r\n}\r\n\r\n.calculator .field_input-value{\r\n    height: 46px;\r\n    margin: 37px 0 37px 0;\r\n    padding-bottom: 20px;\r\n    border: none;\r\n    color: var(--main-text-size);\r\n    background-color: transparent;\r\n    box-shadow: 0px 2px 0px 0px rgba(255,255,255,0.35);\r\n    font-family: \"Geometria_B\";\r\n    font-size: 56px;\r\n    text-align: end;\r\n}\r\n.calculator .field_input-value:focus{\r\n    outline:none ;\r\n}\r\n\r\n.calculator .result_example{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: flex-end;\r\n    max-width: 70vw;\r\n    height: 117px;\r\n    font-size: 24px;\r\n}\r\n\r\n.calculator .interface_calculator{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, minmax(100px, 1fr));\r\n    grid-template-rows: repeat(4, minmax(100px, 1fr));\r\n    justify-items: center;\r\n}\r\n\r\n.button {\r\n    width: 80px;\r\n    height: 80px;\r\n    font-size: var(--main-text-size);\r\n    font-family: \"Geometria\";\r\n    text-align: center;\r\n    cursor: pointer;\r\n    line-height: 80px;\r\n    transition: 0.2s;\r\n    color: var(--main-text-color);\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n.button:hover{\r\n    background-color: rgba(255,255,255,0.35);\r\n    border-radius: 40px;\r\n}\r\n\r\n.button[data-value=\"=\"] {\r\n    color: #2B589A;\r\n    background: var(--main-text-color);\r\n    border-radius: 40px;\r\n}\r\n\r\n@media (max-width: 650px) { \r\n\r\n    .wrap{\r\n        height: 80vh ;\r\n        max-width: 100vw;\r\n        margin: 0;\r\n    }\r\n\r\n    .calculator{\r\n        padding: 0;\r\n    }\r\n\r\n    .calculator .field_input-value {\r\n        margin: 37px 30px;\r\n    }\r\n    .calculator .result_example {\r\n        max-width: 90vw;\r\n    }\r\n\r\n    .calculator .interface_calculator{\r\n        grid-template-columns: repeat(4, minmax(50px, 1fr));\r\n        grid-template-rows: repeat(4, minmax(80px, 1fr));\r\n    }\r\n\r\n    .button{\r\n        font-size: var(--main-text-M-size);\r\n    }\r\n}\r\n\r\n@media (max-width: 450px) { \r\n    .wrap{\r\n        height: 90vh ;\r\n    }\r\n\r\n    .calculator .interface_calculator{\r\n        grid-template-columns: repeat(4, minmax(50px, 1fr));\r\n        grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));\r\n    }\r\n\r\n    .button{\r\n        width: 50px;\r\n        font-size: var(--main-text-S-size);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
class Calculator {
  constructor() {
    this.calculatedResult = 0;
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
        resultOperation = +(vault[vault.length - 2] / vault[vault.length - 1]).toFixed(3);
        vault.pop();
        vault.pop();
        return resultOperation;

      case '%':
        resultOperation = +(vault[vault.length - 1] * vault[vault.length - 2] / 100).toFixed(3);
        vault.pop();
        return resultOperation;

      case '√':
        resultOperation = +Math.sqrt(vault[vault.length - 1]).toFixed(3);
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

  calculateResultValue(postfixExample) {
    const vaultForOperands = [];
    this.calculatedResult = 0;
    postfixExample.forEach(el => {
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
/* harmony import */ var _Modifyre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modifyre */ "./src/Modifyre.ts");




const calculator = new _Calculator__WEBPACK_IMPORTED_MODULE_2__["default"]();
const modifyre = new _Modifyre__WEBPACK_IMPORTED_MODULE_3__["default"]();
class Handlers {
  constructor() {
    ;
    this.userExample = '', this.userInputValue = '', this.newOperator = true, this.resultField = document.querySelector('.result_example'), this.inputField = document.querySelector('.field_input-value ');
  }

  clearData(size) {
    if (size) {
      this.userExample = '';
      this.userInputValue = '';
      this.resultField.innerText = '';
      this.inputField.value = '';
    } else {
      this.userInputValue = '';
      this.inputField.value = '';
    }
  }

  updateExampleFieldAndData(targetData) {
    if (targetData !== '') {
      if (targetData === '=') {
        this.userExample += `${this.userInputValue}`;
        this.resultField.innerText = `${this.userExample}`;
        this.clearData(false);
        return 0;
      } else if (this.newOperator === true) {
        this.userExample += `${this.userInputValue} ${_static_calcOperators__WEBPACK_IMPORTED_MODULE_0__["operators"][targetData]} `;
        this.resultField.innerText = `${this.userExample}`;
        this.clearData(false);
        this.newOperator = false;
        return 0;
      } else {
        this.userExample = this.userExample.slice(0, -3) + ` ${_static_calcOperators__WEBPACK_IMPORTED_MODULE_0__["operators"][targetData]} `;
        this.resultField.innerText = `${this.userExample}`;
        this.clearData(false);
        return 0;
      }
    }

    this.clearData(true);
  }

  displayCalculatedValue(example) {
    modifyre.conversionFromInfix(example);
    this.userExample = '';
    this.userInputValue = '' + calculator.calculateResultValue(modifyre.getPostfixExample());
    this.userInputValue = this.userInputValue.replace('.', ',');
    this.updateInputField();
    return 0;
  }

  updateInputField() {
    this.inputField.value = `${this.userInputValue}`;
  } //From keyboard


  getInputSymbol(el) {
    const targetData = el.data; // null - "backspace" on keyboard

    if (targetData === null) {
      this.userInputValue = this.userInputValue.slice(0, this.userInputValue.length - 1);
      return 0;
    }

    if (/\d|\(|\)/.test(targetData)) {
      this.userInputValue += targetData;
      this.newOperator = true;
    } else if (_static_calcOperators__WEBPACK_IMPORTED_MODULE_0__["operators"].hasOwnProperty(targetData)) {
      this.updateExampleFieldAndData(targetData);
    } else if (targetData === '.' || targetData === ',') {
      this.userInputValue += targetData === '.' ? ',' : targetData;
      this.updateInputField();
    } else {
      this.updateInputField();
    }
  } //From interface


  getPressedButton(e) {
    const eventTarget = e.target;
    const targetValueAttribute = eventTarget.getAttribute('data-value');

    if (/\d/.test(targetValueAttribute)) {
      this.userInputValue += targetValueAttribute;
      this.newOperator = true;
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
      btn.addEventListener('click', e => this.getPressedButton(e));
    });
  }

  addInputListener() {
    this.inputField.addEventListener('input', ev => this.getInputSymbol(ev));
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

/***/ "./src/Modifyre.ts":
/*!*************************!*\
  !*** ./src/Modifyre.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modifyre; });
/* harmony import */ var _static_calcOperators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/calcOperators */ "./src/static/calcOperators.ts");

class Modifyre {
  constructor() {
    ;
    this.operationsStack = [], this.outputStr = [];
  }

  getPostfixExample() {
    return this.outputStr;
  }

  closingBracketOperator() {
    let flagStopPoint = true;

    while (flagStopPoint) {
      // while not find '(' or empty stack
      const OperationStacklength = this.operationsStack.length;

      if (this.operationsStack[OperationStacklength - 1] === '(') {
        flagStopPoint = false;
        this.operationsStack.pop();
      } else {
        // for prevention infinite cycle
        if (OperationStacklength > 0) {
          this.outputStr.push(this.operationsStack.pop());
        } else {
          flagStopPoint = false;
        }
      }
    }
  }

  defaultMathOperators(mathOperator) {
    const operationsStackLastElement = this.operationsStack.length - 1; //check operator priority in operationsStack

    if (_static_calcOperators__WEBPACK_IMPORTED_MODULE_0__["operatorsAndPriority"][this.operationsStack[operationsStackLastElement]] >= _static_calcOperators__WEBPACK_IMPORTED_MODULE_0__["operatorsAndPriority"][mathOperator]) {
      const operatorFromStack = this.operationsStack.pop();
      this.operationsStack.push(mathOperator);
      this.outputStr.push(operatorFromStack);
    } else {
      this.operationsStack.push(mathOperator);
    }
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
    splitAndClearInputExample.forEach((element, index) => {
      const elNumber = +element; // ========== negative number ============

      if (index === 0 && element === '-' || this.operationsStack[this.operationsStack.length - 1] === '(' && element === '-') {
        this.operationsStack.push(element);
        this.outputStr.push('0');
        return 0;
      } // ========== element number or '(' ============


      if (!isNaN(elNumber) || element === '(') {
        element === '(' ? this.operationsStack.push(element) : this.outputStr.push(element);
        return 0;
      }

      if (element === ')') {
        this.closingBracketOperator();
        return 0;
      } // ========== /,*,+,-,% ============


      if (_static_calcOperators__WEBPACK_IMPORTED_MODULE_0__["operatorsAndPriority"].hasOwnProperty(element)) {
        this.defaultMathOperators(element);
      }
    }); //clear from wrong '(', ')'

    this.operationsStack = this.operationsStack.filter(el => {
      if (el !== '(' && el !== ')') {
        return el;
      }
    }); //push the remaining operation in outputStr

    for (const index = 0; index < this.operationsStack.length;) {
      this.outputStr.push(this.operationsStack.pop());
    }

    this.operationsStack = [];
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
  x: 'x',
  х: 'x',
  '%': '%',
  '/': '/',
  '-': '-',
  '+': '+',
  '√': '√'
};
const operatorsAndPriority = {
  x: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9mb250cy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZGlmeXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9mb250cy9HZW9tZXRyaWEtQm9sZC5lb3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL0dlb21ldHJpYS1Cb2xkLmVvdD9lNDNiIiwid2VicGFjazovLy8uL3NyYy9mb250cy9HZW9tZXRyaWEtQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL0dlb21ldHJpYS1Cb2xkLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL0dlb21ldHJpYS5lb3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL0dlb21ldHJpYS5lb3Q/MDAyYSIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvR2VvbWV0cmlhLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvR2VvbWV0cmlhLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY2FsY09wZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZvcmJpZGRlbktleWJvYXJkQ29kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Il0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJjb25zdHJ1Y3RvciIsImNhbGN1bGF0ZWRSZXN1bHQiLCJtYXRoT3BlcmF0aW9uIiwib3BlcmF0b3IiLCJ2YXVsdCIsInJlc3VsdE9wZXJhdGlvbiIsImxlbmd0aCIsInRvRml4ZWQiLCJwb3AiLCJNYXRoIiwic3FydCIsImNhbGN1bGF0ZVJlc3VsdFZhbHVlIiwicG9zdGZpeEV4YW1wbGUiLCJ2YXVsdEZvck9wZXJhbmRzIiwiZm9yRWFjaCIsImVsIiwiZWxOdW1iZXIiLCJpc05hTiIsInB1c2giLCJjYWxjdWxhdG9yIiwibW9kaWZ5cmUiLCJNb2RpZnlyZSIsIkhhbmRsZXJzIiwidXNlckV4YW1wbGUiLCJ1c2VySW5wdXRWYWx1ZSIsIm5ld09wZXJhdG9yIiwicmVzdWx0RmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dEZpZWxkIiwiY2xlYXJEYXRhIiwic2l6ZSIsImlubmVyVGV4dCIsInZhbHVlIiwidXBkYXRlRXhhbXBsZUZpZWxkQW5kRGF0YSIsInRhcmdldERhdGEiLCJvcGVyYXRvcnMiLCJzbGljZSIsImRpc3BsYXlDYWxjdWxhdGVkVmFsdWUiLCJleGFtcGxlIiwiY29udmVyc2lvbkZyb21JbmZpeCIsImdldFBvc3RmaXhFeGFtcGxlIiwicmVwbGFjZSIsInVwZGF0ZUlucHV0RmllbGQiLCJnZXRJbnB1dFN5bWJvbCIsImRhdGEiLCJ0ZXN0IiwiaGFzT3duUHJvcGVydHkiLCJnZXRQcmVzc2VkQnV0dG9uIiwiZSIsImV2ZW50VGFyZ2V0IiwidGFyZ2V0IiwidGFyZ2V0VmFsdWVBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJhZGRCdXR0b25MaXN0ZW5lciIsImJ1dHRvbnNJbnRlcmZhY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZElucHV0TGlzdGVuZXIiLCJldiIsImNvZGUiLCJjb2RlcyIsInByZXZlbnREZWZhdWx0Iiwib3BlcmF0aW9uc1N0YWNrIiwib3V0cHV0U3RyIiwiY2xvc2luZ0JyYWNrZXRPcGVyYXRvciIsImZsYWdTdG9wUG9pbnQiLCJPcGVyYXRpb25TdGFja2xlbmd0aCIsImRlZmF1bHRNYXRoT3BlcmF0b3JzIiwibWF0aE9wZXJhdG9yIiwib3BlcmF0aW9uc1N0YWNrTGFzdEVsZW1lbnQiLCJvcGVyYXRvcnNBbmRQcmlvcml0eSIsIm9wZXJhdG9yRnJvbVN0YWNrIiwiaW5wdXRFeGFtcGxlIiwic3BsaXRJbnB1dEV4YW1wbGUiLCJzcGxpdCIsInNwbGl0QW5kQ2xlYXJJbnB1dEV4YW1wbGUiLCJmaWx0ZXIiLCJlbGVtZW50IiwiaW5kZXgiLCJ4Iiwi0YUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUNPO0FB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QStDLEU7Ozs7Ozs7Ozs7OztBQ0FyRjtBQUFlLG9GQUF1QiwrQ0FBK0MsRTs7Ozs7Ozs7Ozs7O0FDQXJGO0FBQWUsb0ZBQXVCLGdEQUFnRCxFOzs7Ozs7Ozs7Ozs7QUNBdEY7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDVDs7QUFFM0I7QUFDQSx3QkFBd0Isb0RBQVE7QUFDaEM7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNERDtBQUFBO0FBQUE7QUFBQSxNQUFNNUIsU0FBb0IsR0FBRztBQUMxQixPQUFLLEdBRHFCO0FBRTFCNkMsR0FBQyxFQUFFLEdBRnVCO0FBRzFCQyxHQUFDLEVBQUUsR0FIdUI7QUFJMUIsT0FBSyxHQUpxQjtBQUsxQixPQUFLLEdBTHFCO0FBTTFCLE9BQUssR0FOcUI7QUFPMUIsT0FBSyxHQVBxQjtBQVExQixPQUFLO0FBUnFCLENBQTdCO0FBV0EsTUFBTVYsb0JBQXVDLEdBQUc7QUFDN0NTLEdBQUMsRUFBRSxFQUQwQztBQUU3QyxPQUFLLEVBRndDO0FBRzdDLE9BQUssRUFId0M7QUFJN0MsT0FBSyxFQUp3QztBQUs3QyxPQUFLLEVBTHdDO0FBTTdDLE9BQUs7QUFOd0MsQ0FBaEQ7Ozs7Ozs7Ozs7Ozs7O0lDakJLbkIsSzs7V0FBQUEsSztBQUFBQSxPLENBQUFBLEs7QUFBQUEsTyxDQUFBQSxLO0FBQUFBLE8sQ0FBQUEsSztBQUFBQSxPLENBQUFBLEs7QUFBQUEsTyxDQUFBQSxLO0dBQUFBLEssS0FBQUEsSzs7QUFRVUEsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNSQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDRIQUF5RDs7QUFFM0Y7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9mb250cy9HZW9tZXRyaWEuZW90XCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL2ZvbnRzL0dlb21ldHJpYS5lb3Q/aWVmaXhcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi4vZm9udHMvR2VvbWV0cmlhLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi4vZm9udHMvR2VvbWV0cmlhLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fIGZyb20gXCIuLi9mb250cy9HZW9tZXRyaWEtQm9sZC5lb3RcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyBmcm9tIFwiLi4vZm9udHMvR2VvbWV0cmlhLUJvbGQuZW90P2llZml4XCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gZnJvbSBcIi4uL2ZvbnRzL0dlb21ldHJpYS1Cb2xkLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyBmcm9tIFwiLi4vZm9udHMvR2VvbWV0cmlhLUJvbGQudHRmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2V7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCdlb3QnKSxcXHJcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXHJcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2V7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhX0InO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ2VvdCcpLFxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2ZvbnRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBa0M7SUFDbEM7OzhEQUVnRDtBQUNwRDs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw0Q0FBdUM7SUFDdkM7OzhEQUVxRDtJQUNyRCxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHZW9tZXRyaWEnO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvR2VvbWV0cmlhLmVvdFxcXCIpO1xcclxcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvR2VvbWV0cmlhLmVvdD9pZWZpeCcpIGZvcm1hdCgnZW90JyksXFxyXFxuICAgIHVybCgnLi4vZm9udHMvR2VvbWV0cmlhLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXHJcXG4gICAgdXJsKCcuLi9mb250cy9HZW9tZXRyaWEudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNle1xcclxcbiAgICBmb250LWZhbWlseTogJ0dlb21ldHJpYV9CJztcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0dlb21ldHJpYS1Cb2xkLmVvdFxcXCIpO1xcclxcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvR2VvbWV0cmlhLUJvbGQuZW90P2llZml4JykgZm9ybWF0KCdlb3QnKSxcXHJcXG4gICAgdXJsKCcuLi9mb250cy9HZW9tZXRyaWEtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxyXFxuICAgIHVybCgnLi4vZm9udHMvR2VvbWV0cmlhLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb250cy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1tYWluLXRleHQtY29sb3I6ICNGMkYyRjI7XFxyXFxuICAgIC0tbWFpbi10ZXh0LXNpemU6IDM2cHg7XFxyXFxuICAgIC0tbWFpbi10ZXh0LU0tc2l6ZTogMzBweDtcXHJcXG4gICAgLS1tYWluLXRleHQtUy1zaXplOiAyOHB4O1xcclxcbiAgICAtLWJsdWU6IGxpbmVhci1ncmFkaWVudCgxNTUuMjNkZWcsICMyODUxOEUgMCUsICMzQTc3RDEgMTAwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJHZW9tZXRyaWFcXFwiLCBcXFwic2Fucy1zZXJpZlxcXCI7XFxyXFxufVxcclxcblxcclxcbi53cmFwe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXgtd2lkdGg6IDU1NHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jYWxjdWxhdG9yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDgycHggMTU4cHggcmdiYSgwLCAwLCAwLCAwLjM1KSwgMHB4IDI0LjcyMDZweCA0Ny42MzI0cHggcmdiYSgwLCAwLCAwLCAwLjIyODA1NiksIDBweCAxMC4yNjc3cHggMTkuNzg0MXB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpLCAwcHggMy43MTM2MnB4IDcuMTU1NXB4IHJnYmEoMCwgMCwgMCwgMC4xMjE5NDQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0dlb21ldHJpYSc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5jYWxjdWxhdG9yIC5maWVsZF9pbnB1dC12YWx1ZXtcXHJcXG4gICAgaGVpZ2h0OiA0NnB4O1xcclxcbiAgICBtYXJnaW46IDM3cHggMCAzN3B4IDA7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtc2l6ZSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjM1KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHZW9tZXRyaWFfQlxcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcclxcbn1cXHJcXG4uY2FsY3VsYXRvciAuZmllbGRfaW5wdXQtdmFsdWU6Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6bm9uZSA7XFxyXFxufVxcclxcblxcclxcbi5jYWxjdWxhdG9yIC5yZXN1bHRfZXhhbXBsZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBtYXgtd2lkdGg6IDcwdnc7XFxyXFxuICAgIGhlaWdodDogMTE3cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGN1bGF0b3IgLmludGVyZmFjZV9jYWxjdWxhdG9ye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLW1haW4tdGV4dC1zaXplKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHZW9tZXRyaWFcXFwiO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uYnV0dG9uOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMzUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uW2RhdGEtdmFsdWU9XFxcIj1cXFwiXSB7XFxyXFxuICAgIGNvbG9yOiAjMkI1ODlBO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHsgXFxyXFxuXFxyXFxuICAgIC53cmFwe1xcclxcbiAgICAgICAgaGVpZ2h0OiA4MHZoIDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhbGN1bGF0b3J7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYWxjdWxhdG9yIC5maWVsZF9pbnB1dC12YWx1ZSB7XFxyXFxuICAgICAgICBtYXJnaW46IDM3cHggMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2FsY3VsYXRvciAucmVzdWx0X2V4YW1wbGUge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYWxjdWxhdG9yIC5pbnRlcmZhY2VfY2FsY3VsYXRvcntcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCg1MHB4LCAxZnIpKTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbm1heCg4MHB4LCAxZnIpKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnV0dG9ue1xcclxcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYWluLXRleHQtTS1zaXplKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHsgXFxyXFxuICAgIC53cmFwe1xcclxcbiAgICAgICAgaGVpZ2h0OiA5MHZoIDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FsY3VsYXRvciAuaW50ZXJmYWNlX2NhbGN1bGF0b3J7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoNTBweCwgMWZyKSk7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbntcXHJcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYWluLXRleHQtUy1zaXplKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsNERBQTREO0FBQ2hFOzs7QUFHQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qiw2TEFBNkw7SUFDN0wsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixrREFBa0Q7SUFDbEQsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9EQUFvRDtJQUNwRCxpREFBaUQ7SUFDakQscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxtREFBbUQ7UUFDbkQsZ0RBQWdEO0lBQ3BEOztJQUVBO1FBQ0ksa0NBQWtDO0lBQ3RDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxtREFBbUQ7UUFDbkQseURBQXlEO0lBQzdEOztJQUVBO1FBQ0ksV0FBVztRQUNYLGtDQUFrQztJQUN0QztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcImZvbnRzLmNzc1xcXCI7XFxyXFxuXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLW1haW4tdGV4dC1jb2xvcjogI0YyRjJGMjtcXHJcXG4gICAgLS1tYWluLXRleHQtc2l6ZTogMzZweDtcXHJcXG4gICAgLS1tYWluLXRleHQtTS1zaXplOiAzMHB4O1xcclxcbiAgICAtLW1haW4tdGV4dC1TLXNpemU6IDI4cHg7XFxyXFxuICAgIC0tYmx1ZTogbGluZWFyLWdyYWRpZW50KDE1NS4yM2RlZywgIzI4NTE4RSAwJSwgIzNBNzdEMSAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkdlb21ldHJpYVxcXCIsIFxcXCJzYW5zLXNlcmlmXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1heC13aWR0aDogNTU0cHg7XFxyXFxuICAgIGhlaWdodDogODAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGN1bGF0b3Ige1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggODJweCAxNThweCByZ2JhKDAsIDAsIDAsIDAuMzUpLCAwcHggMjQuNzIwNnB4IDQ3LjYzMjRweCByZ2JhKDAsIDAsIDAsIDAuMjI4MDU2KSwgMHB4IDEwLjI2NzdweCAxOS43ODQxcHggcmdiYSgwLCAwLCAwLCAwLjE3NSksIDBweCAzLjcxMzYycHggNy4xNTU1cHggcmdiYSgwLCAwLCAwLCAwLjEyMTk0NCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGN1bGF0b3IgLmZpZWxkX2lucHV0LXZhbHVle1xcclxcbiAgICBoZWlnaHQ6IDQ2cHg7XFxyXFxuICAgIG1hcmdpbjogMzdweCAwIDM3cHggMDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1zaXplKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMHB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDAuMzUpO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkdlb21ldHJpYV9CXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxufVxcclxcbi5jYWxjdWxhdG9yIC5maWVsZF9pbnB1dC12YWx1ZTpmb2N1c3tcXHJcXG4gICAgb3V0bGluZTpub25lIDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGN1bGF0b3IgLnJlc3VsdF9leGFtcGxle1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIG1heC13aWR0aDogNzB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMTdweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsY3VsYXRvciAuaW50ZXJmYWNlX2NhbGN1bGF0b3J7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWFpbi10ZXh0LXNpemUpO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkdlb21ldHJpYVxcXCI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogODBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5idXR0b246aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25bZGF0YS12YWx1ZT1cXFwiPVxcXCJdIHtcXHJcXG4gICAgY29sb3I6ICMyQjU4OUE7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkgeyBcXHJcXG5cXHJcXG4gICAgLndyYXB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDgwdmggO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FsY3VsYXRvcntcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhbGN1bGF0b3IgLmZpZWxkX2lucHV0LXZhbHVlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMzdweCAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5jYWxjdWxhdG9yIC5yZXN1bHRfZXhhbXBsZSB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhbGN1bGF0b3IgLmludGVyZmFjZV9jYWxjdWxhdG9ye1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDUwcHgsIDFmcikpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgbWlubWF4KDgwcHgsIDFmcikpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idXR0b257XFxyXFxuICAgICAgICBmb250LXNpemU6IHZhcigtLW1haW4tdGV4dC1NLXNpemUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkgeyBcXHJcXG4gICAgLndyYXB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDkwdmggO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYWxjdWxhdG9yIC5pbnRlcmZhY2VfY2FsY3VsYXRvcntcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCg1MHB4LCAxZnIpKTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnV0dG9ue1xcclxcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IHZhcigtLW1haW4tdGV4dC1TLXNpemUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIHtcclxuICAgY2FsY3VsYXRlZFJlc3VsdDogbnVtYmVyXHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVkUmVzdWx0ID0gMFxyXG4gICB9XHJcblxyXG4gICBtYXRoT3BlcmF0aW9uKG9wZXJhdG9yOiBzdHJpbmcsIHZhdWx0OiBudW1iZXJbXSk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgIGxldCByZXN1bHRPcGVyYXRpb24gPSAwXHJcbiAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcclxuICAgICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgICAgIHJlc3VsdE9wZXJhdGlvbiA9ICsoXHJcbiAgICAgICAgICAgICAgIHZhdWx0W3ZhdWx0Lmxlbmd0aCAtIDFdICogdmF1bHRbdmF1bHQubGVuZ3RoIC0gMl1cclxuICAgICAgICAgICAgKS50b0ZpeGVkKDMpXHJcbiAgICAgICAgICAgIHZhdWx0LnBvcCgpXHJcbiAgICAgICAgICAgIHZhdWx0LnBvcCgpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRPcGVyYXRpb25cclxuICAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgIHJlc3VsdE9wZXJhdGlvbiA9ICsoXHJcbiAgICAgICAgICAgICAgIHZhdWx0W3ZhdWx0Lmxlbmd0aCAtIDJdIC8gdmF1bHRbdmF1bHQubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgKS50b0ZpeGVkKDMpXHJcbiAgICAgICAgICAgIHZhdWx0LnBvcCgpXHJcbiAgICAgICAgICAgIHZhdWx0LnBvcCgpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRPcGVyYXRpb25cclxuICAgICAgICAgY2FzZSAnJSc6XHJcbiAgICAgICAgICAgIHJlc3VsdE9wZXJhdGlvbiA9ICsoXHJcbiAgICAgICAgICAgICAgICh2YXVsdFt2YXVsdC5sZW5ndGggLSAxXSAqIHZhdWx0W3ZhdWx0Lmxlbmd0aCAtIDJdKSAvXHJcbiAgICAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgICApLnRvRml4ZWQoMylcclxuICAgICAgICAgICAgdmF1bHQucG9wKClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE9wZXJhdGlvblxyXG4gICAgICAgICBjYXNlICfiiJonOlxyXG4gICAgICAgICAgICByZXN1bHRPcGVyYXRpb24gPSArTWF0aC5zcXJ0KHZhdWx0W3ZhdWx0Lmxlbmd0aCAtIDFdKS50b0ZpeGVkKDMpXHJcbiAgICAgICAgICAgIHZhdWx0LnBvcCgpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRPcGVyYXRpb25cclxuICAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIHJlc3VsdE9wZXJhdGlvbiA9ICsoXHJcbiAgICAgICAgICAgICAgIHZhdWx0W3ZhdWx0Lmxlbmd0aCAtIDFdICsgdmF1bHRbdmF1bHQubGVuZ3RoIC0gMl1cclxuICAgICAgICAgICAgKS50b0ZpeGVkKDMpXHJcbiAgICAgICAgICAgIHZhdWx0LnBvcCgpXHJcbiAgICAgICAgICAgIHZhdWx0LnBvcCgpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRPcGVyYXRpb25cclxuICAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgICAgIHJlc3VsdE9wZXJhdGlvbiA9ICsoXHJcbiAgICAgICAgICAgICAgIHZhdWx0W3ZhdWx0Lmxlbmd0aCAtIDJdIC0gdmF1bHRbdmF1bHQubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgKS50b0ZpeGVkKDMpXHJcbiAgICAgICAgICAgIHZhdWx0LnBvcCgpXHJcbiAgICAgICAgICAgIHZhdWx0LnBvcCgpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRPcGVyYXRpb25cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBjYWxjdWxhdGVSZXN1bHRWYWx1ZShwb3N0Zml4RXhhbXBsZTogc3RyaW5nW10pOiBudW1iZXIge1xyXG4gICAgICBjb25zdCB2YXVsdEZvck9wZXJhbmRzOiBudW1iZXJbXSA9IFtdXHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlZFJlc3VsdCA9IDBcclxuICAgICAgcG9zdGZpeEV4YW1wbGUuZm9yRWFjaCgoZWw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICBjb25zdCBlbE51bWJlcjogbnVtYmVyID0gK2VsXHJcblxyXG4gICAgICAgICBpZiAoIWlzTmFOKGVsTnVtYmVyKSkge1xyXG4gICAgICAgICAgICB2YXVsdEZvck9wZXJhbmRzLnB1c2goZWxOdW1iZXIpXHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlZFJlc3VsdCA9IHRoaXMubWF0aE9wZXJhdGlvbihcclxuICAgICAgICAgICAgICAgZWwsXHJcbiAgICAgICAgICAgICAgIHZhdWx0Rm9yT3BlcmFuZHNcclxuICAgICAgICAgICAgKSBhcyBudW1iZXJcclxuICAgICAgICAgICAgdmF1bHRGb3JPcGVyYW5kcy5wdXNoKHRoaXMuY2FsY3VsYXRlZFJlc3VsdClcclxuICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVkUmVzdWx0XHJcbiAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBvcGVyYXRvcnMgfSBmcm9tICcuL3N0YXRpYy9jYWxjT3BlcmF0b3JzJ1xyXG5pbXBvcnQgY29kZXMgZnJvbSAnLi9zdGF0aWMvZm9yYmlkZGVuS2V5Ym9hcmRDb2RlJ1xyXG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuL0NhbGN1bGF0b3InXHJcbmltcG9ydCBNb2RpZnlyZSBmcm9tICcuL01vZGlmeXJlJ1xyXG5cclxuY29uc3QgY2FsY3VsYXRvciA9IG5ldyBDYWxjdWxhdG9yKClcclxuY29uc3QgbW9kaWZ5cmUgPSBuZXcgTW9kaWZ5cmUoKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGVycyB7XHJcbiAgIHVzZXJFeGFtcGxlOiBzdHJpbmdcclxuICAgdXNlcklucHV0VmFsdWU6IHN0cmluZ1xyXG4gICByZXN1bHRGaWVsZDogSFRNTEVsZW1lbnRcclxuICAgaW5wdXRGaWVsZDogSFRNTElucHV0RWxlbWVudFxyXG4gICBuZXdPcGVyYXRvcjogYm9vbGVhblxyXG5cclxuICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIDsodGhpcy51c2VyRXhhbXBsZSA9ICcnKSxcclxuICAgICAgICAgKHRoaXMudXNlcklucHV0VmFsdWUgPSAnJyksXHJcbiAgICAgICAgICh0aGlzLm5ld09wZXJhdG9yID0gdHJ1ZSksXHJcbiAgICAgICAgICh0aGlzLnJlc3VsdEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgJy5yZXN1bHRfZXhhbXBsZSdcclxuICAgICAgICAgKSBhcyBIVE1MRWxlbWVudCksXHJcbiAgICAgICAgICh0aGlzLmlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAnLmZpZWxkX2lucHV0LXZhbHVlICdcclxuICAgICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50KVxyXG4gICB9XHJcblxyXG4gICBjbGVhckRhdGEoc2l6ZTogYm9vbGVhbil7XHJcbiAgICAgIGlmKHNpemUpe1xyXG4gICAgICAgICB0aGlzLnVzZXJFeGFtcGxlID0gJydcclxuICAgICAgICAgdGhpcy51c2VySW5wdXRWYWx1ZSA9ICcnXHJcbiAgICAgICAgIHRoaXMucmVzdWx0RmllbGQuaW5uZXJUZXh0ID0gJydcclxuICAgICAgICAgdGhpcy5pbnB1dEZpZWxkLnZhbHVlID0gJydcclxuICAgICAgfSBlbHNle1xyXG4gICAgICAgICB0aGlzLnVzZXJJbnB1dFZhbHVlID0gJydcclxuICAgICAgICAgdGhpcy5pbnB1dEZpZWxkLnZhbHVlID0gJydcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICB1cGRhdGVFeGFtcGxlRmllbGRBbmREYXRhKHRhcmdldERhdGE6IHN0cmluZyk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgIGlmICh0YXJnZXREYXRhICE9PSAnJykge1xyXG4gICAgICAgICBpZiAodGFyZ2V0RGF0YSA9PT0gJz0nKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckV4YW1wbGUgKz0gYCR7dGhpcy51c2VySW5wdXRWYWx1ZX1gXHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0RmllbGQuaW5uZXJUZXh0ID0gYCR7dGhpcy51c2VyRXhhbXBsZX1gXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJEYXRhKGZhbHNlKVxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV3T3BlcmF0b3IgPT09IHRydWUpeyAgICBcclxuICAgICAgICAgICAgdGhpcy51c2VyRXhhbXBsZSArPSBgJHt0aGlzLnVzZXJJbnB1dFZhbHVlfSAke29wZXJhdG9yc1t0YXJnZXREYXRhXX0gYFxyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdEZpZWxkLmlubmVyVGV4dCA9IGAke3RoaXMudXNlckV4YW1wbGV9YFxyXG4gICAgICAgICAgICB0aGlzLmNsZWFyRGF0YShmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy5uZXdPcGVyYXRvciA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckV4YW1wbGUgPSB0aGlzLnVzZXJFeGFtcGxlLnNsaWNlKDAsIC0zKSArIGAgJHtvcGVyYXRvcnNbdGFyZ2V0RGF0YV19IGBcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRGaWVsZC5pbm5lclRleHQgPSBgJHt0aGlzLnVzZXJFeGFtcGxlfWBcclxuICAgICAgICAgICAgdGhpcy5jbGVhckRhdGEoZmFsc2UpXHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNsZWFyRGF0YSh0cnVlKVxyXG4gICB9XHJcblxyXG4gICBkaXNwbGF5Q2FsY3VsYXRlZFZhbHVlKGV4YW1wbGU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgIG1vZGlmeXJlLmNvbnZlcnNpb25Gcm9tSW5maXgoZXhhbXBsZSlcclxuICAgICAgdGhpcy51c2VyRXhhbXBsZSA9ICcnXHJcbiAgICAgIHRoaXMudXNlcklucHV0VmFsdWUgPVxyXG4gICAgICAgICAnJyArIGNhbGN1bGF0b3IuY2FsY3VsYXRlUmVzdWx0VmFsdWUobW9kaWZ5cmUuZ2V0UG9zdGZpeEV4YW1wbGUoKSlcclxuICAgICAgdGhpcy51c2VySW5wdXRWYWx1ZSA9IHRoaXMudXNlcklucHV0VmFsdWUucmVwbGFjZSgnLicsICcsJylcclxuICAgICAgdGhpcy51cGRhdGVJbnB1dEZpZWxkKClcclxuICAgICAgcmV0dXJuIDBcclxuICAgfVxyXG5cclxuICAgdXBkYXRlSW5wdXRGaWVsZCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5pbnB1dEZpZWxkLnZhbHVlID0gYCR7dGhpcy51c2VySW5wdXRWYWx1ZX1gXHJcbiAgIH1cclxuXHJcbiAgIC8vRnJvbSBrZXlib2FyZFxyXG4gICBnZXRJbnB1dFN5bWJvbChlbDogSW5wdXRFdmVudCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgIGNvbnN0IHRhcmdldERhdGE6IHN0cmluZyB8IG51bGwgPSBlbC5kYXRhXHJcbiAgICAgIC8vIG51bGwgLSBcImJhY2tzcGFjZVwiIG9uIGtleWJvYXJkXHJcbiAgICAgIGlmICh0YXJnZXREYXRhID09PSBudWxsKSB7XHJcbiAgICAgICAgIHRoaXMudXNlcklucHV0VmFsdWUgPSB0aGlzLnVzZXJJbnB1dFZhbHVlLnNsaWNlKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dFZhbHVlLmxlbmd0aCAtIDFcclxuICAgICAgICAgKVxyXG4gICAgICAgICByZXR1cm4gMFxyXG4gICAgICB9XHJcbiAgICAgIGlmICgvXFxkfFxcKHxcXCkvLnRlc3QodGFyZ2V0RGF0YSkpIHtcclxuICAgICAgICAgdGhpcy51c2VySW5wdXRWYWx1ZSArPSB0YXJnZXREYXRhXHJcbiAgICAgICAgIHRoaXMubmV3T3BlcmF0b3IgPSB0cnVlXHJcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3JzLmhhc093blByb3BlcnR5KHRhcmdldERhdGEpKSB7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlRXhhbXBsZUZpZWxkQW5kRGF0YSh0YXJnZXREYXRhKVxyXG4gICAgICB9IGVsc2UgaWYgKHRhcmdldERhdGEgPT09ICcuJyB8fCB0YXJnZXREYXRhID09PSAnLCcpIHtcclxuICAgICAgICAgdGhpcy51c2VySW5wdXRWYWx1ZSArPSB0YXJnZXREYXRhID09PSAnLicgPyAnLCcgOiB0YXJnZXREYXRhXHJcbiAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRGaWVsZCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRGaWVsZCgpXHJcbiAgICAgIH1cclxuICAgfVxyXG4gICAvL0Zyb20gaW50ZXJmYWNlXHJcbiAgIGdldFByZXNzZWRCdXR0b24oZTogTW91c2VFdmVudCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgY29uc3QgdGFyZ2V0VmFsdWVBdHRyaWJ1dGUgPSBldmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICdkYXRhLXZhbHVlJ1xyXG4gICAgICApIGFzIHN0cmluZ1xyXG5cclxuICAgICAgaWYgKC9cXGQvLnRlc3QodGFyZ2V0VmFsdWVBdHRyaWJ1dGUpKSB7XHJcbiAgICAgICAgIHRoaXMudXNlcklucHV0VmFsdWUgKz0gdGFyZ2V0VmFsdWVBdHRyaWJ1dGVcclxuICAgICAgICAgdGhpcy5uZXdPcGVyYXRvciA9IHRydWVcclxuICAgICAgICAgdGhpcy51cGRhdGVJbnB1dEZpZWxkKClcclxuICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgfVxyXG4gICAgICBpZiAodGFyZ2V0VmFsdWVBdHRyaWJ1dGUgPT09ICcsJykge1xyXG4gICAgICAgICB0aGlzLnVzZXJJbnB1dFZhbHVlICs9IHRhcmdldFZhbHVlQXR0cmlidXRlXHJcbiAgICAgICAgIHRoaXMudXBkYXRlSW5wdXRGaWVsZCgpXHJcbiAgICAgICAgIHJldHVybiAwXHJcbiAgICAgIH1cclxuICAgICAgc3dpdGNoICh0YXJnZXRWYWx1ZUF0dHJpYnV0ZSkge1xyXG4gICAgICAgICBjYXNlICdDJzpcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFeGFtcGxlRmllbGRBbmREYXRhKCcnKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICBjYXNlICc9JzpcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFeGFtcGxlRmllbGRBbmREYXRhKCc9JylcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q2FsY3VsYXRlZFZhbHVlKHRoaXMudXNlckV4YW1wbGUpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRXhhbXBsZUZpZWxkQW5kRGF0YSh0YXJnZXRWYWx1ZUF0dHJpYnV0ZSlcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBhZGRCdXR0b25MaXN0ZW5lcigpOiB2b2lkIHtcclxuICAgICAgY29uc3QgYnV0dG9uc0ludGVyZmFjZTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAnLmJ1dHRvbidcclxuICAgICAgKVxyXG4gICAgICBidXR0b25zSW50ZXJmYWNlLmZvckVhY2goKGJ0bjogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJlc3NlZEJ1dHRvbihlKVxyXG4gICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgIH1cclxuXHJcbiAgIGFkZElucHV0TGlzdGVuZXIoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldjogYW55KSA9PlxyXG4gICAgICAgICB0aGlzLmdldElucHV0U3ltYm9sKGV2KVxyXG4gICAgICApXHJcbiAgICAgIHRoaXMuaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJyB8fCBlLmNvZGUgPT09ICdOdW1wYWRFbnRlcicpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFeGFtcGxlRmllbGRBbmREYXRhKCc9JylcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q2FsY3VsYXRlZFZhbHVlKHRoaXMudXNlckV4YW1wbGUpXHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0RlbGV0ZScpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFeGFtcGxlRmllbGRBbmREYXRhKCcnKVxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmIChlLmNvZGUgaW4gY29kZXMpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgfVxyXG59XHJcbiIsImltcG9ydCB7IG9wZXJhdG9yc0FuZFByaW9yaXR5IH0gZnJvbSAnLi9zdGF0aWMvY2FsY09wZXJhdG9ycydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmeXJlIHtcclxuICAgb3BlcmF0aW9uc1N0YWNrOiBzdHJpbmdbXVxyXG4gICBvdXRwdXRTdHI6IHN0cmluZ1tdXHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgOyh0aGlzLm9wZXJhdGlvbnNTdGFjayA9IFtdKSwgKHRoaXMub3V0cHV0U3RyID0gW10pXHJcbiAgIH1cclxuXHJcbiAgIGdldFBvc3RmaXhFeGFtcGxlKCk6IHN0cmluZ1tdIHtcclxuICAgICAgcmV0dXJuIHRoaXMub3V0cHV0U3RyXHJcbiAgIH1cclxuXHJcbiAgIGNsb3NpbmdCcmFja2V0T3BlcmF0b3IoKTogdm9pZCB7XHJcbiAgICAgIGxldCBmbGFnU3RvcFBvaW50ID0gdHJ1ZVxyXG4gICAgICB3aGlsZSAoZmxhZ1N0b3BQb2ludCkge1xyXG4gICAgICAgICAvLyB3aGlsZSBub3QgZmluZCAnKCcgb3IgZW1wdHkgc3RhY2tcclxuICAgICAgICAgY29uc3QgT3BlcmF0aW9uU3RhY2tsZW5ndGg6IG51bWJlciA9IHRoaXMub3BlcmF0aW9uc1N0YWNrLmxlbmd0aFxyXG4gICAgICAgICBpZiAodGhpcy5vcGVyYXRpb25zU3RhY2tbT3BlcmF0aW9uU3RhY2tsZW5ndGggLSAxXSA9PT0gJygnKSB7XHJcbiAgICAgICAgICAgIGZsYWdTdG9wUG9pbnQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLm9wZXJhdGlvbnNTdGFjay5wb3AoKVxyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBmb3IgcHJldmVudGlvbiBpbmZpbml0ZSBjeWNsZVxyXG4gICAgICAgICAgICBpZiAoT3BlcmF0aW9uU3RhY2tsZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMub3V0cHV0U3RyLnB1c2godGhpcy5vcGVyYXRpb25zU3RhY2sucG9wKCkgYXMgc3RyaW5nKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBmbGFnU3RvcFBvaW50ID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZGVmYXVsdE1hdGhPcGVyYXRvcnMobWF0aE9wZXJhdG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgY29uc3Qgb3BlcmF0aW9uc1N0YWNrTGFzdEVsZW1lbnQ6IG51bWJlciA9IHRoaXMub3BlcmF0aW9uc1N0YWNrLmxlbmd0aCAtIDFcclxuICAgICAgLy9jaGVjayBvcGVyYXRvciBwcmlvcml0eSBpbiBvcGVyYXRpb25zU3RhY2tcclxuICAgICAgaWYgKFxyXG4gICAgICAgICBvcGVyYXRvcnNBbmRQcmlvcml0eVtcclxuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25zU3RhY2tbb3BlcmF0aW9uc1N0YWNrTGFzdEVsZW1lbnRdXHJcbiAgICAgICAgIF0gPj0gb3BlcmF0b3JzQW5kUHJpb3JpdHlbbWF0aE9wZXJhdG9yXVxyXG4gICAgICApIHtcclxuICAgICAgICAgY29uc3Qgb3BlcmF0b3JGcm9tU3RhY2s6IHN0cmluZyA9IHRoaXMub3BlcmF0aW9uc1N0YWNrLnBvcCgpIGFzIHN0cmluZ1xyXG4gICAgICAgICB0aGlzLm9wZXJhdGlvbnNTdGFjay5wdXNoKG1hdGhPcGVyYXRvcilcclxuICAgICAgICAgdGhpcy5vdXRwdXRTdHIucHVzaChvcGVyYXRvckZyb21TdGFjaylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgdGhpcy5vcGVyYXRpb25zU3RhY2sucHVzaChtYXRoT3BlcmF0b3IpXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgY29udmVyc2lvbkZyb21JbmZpeChpbnB1dEV4YW1wbGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICB0aGlzLm91dHB1dFN0ciA9IFtdXHJcbiAgICAgIC8vID09PT09PT09PT09IGFkZCB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlICcsJz09PT09PT09PT09XHJcbiAgICAgIGlucHV0RXhhbXBsZSA9IGlucHV0RXhhbXBsZS5yZXBsYWNlKC8oXFwsKS9nLCAnLicpXHJcbiAgICAgIGlucHV0RXhhbXBsZSA9IGlucHV0RXhhbXBsZS5yZXBsYWNlKC8oXFwoKS9nLCAnKCAnKVxyXG4gICAgICBpbnB1dEV4YW1wbGUgPSBpbnB1dEV4YW1wbGUucmVwbGFjZSgvKFxcKSkvZywgJyApJylcclxuXHJcbiAgICAgIGNvbnN0IHNwbGl0SW5wdXRFeGFtcGxlOiBzdHJpbmdbXSA9IGlucHV0RXhhbXBsZS5zcGxpdCgnICcpXHJcbiAgICAgIC8vID09PT09PT09PT0gZGVsZXRlIGFsbCB3aGl0ZXNwYWNlXHJcbiAgICAgIGNvbnN0IHNwbGl0QW5kQ2xlYXJJbnB1dEV4YW1wbGU6IHN0cmluZ1tdID0gc3BsaXRJbnB1dEV4YW1wbGUuZmlsdGVyKFxyXG4gICAgICAgICAoZWw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWwgIT09ICcnICYmIGVsICE9PSAnICcpIHtcclxuICAgICAgICAgICAgICAgcmV0dXJuIGVsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIHNwbGl0QW5kQ2xlYXJJbnB1dEV4YW1wbGUuZm9yRWFjaCgoZWxlbWVudDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgIGNvbnN0IGVsTnVtYmVyOiBudW1iZXIgPSArZWxlbWVudFxyXG4gICAgICAgICAvLyA9PT09PT09PT09IG5lZ2F0aXZlIG51bWJlciA9PT09PT09PT09PT1cclxuICAgICAgICAgaWYoIChpbmRleCA9PT0gMCAmJiBlbGVtZW50ID09PSAnLScpIHx8ICh0aGlzLm9wZXJhdGlvbnNTdGFja1t0aGlzLm9wZXJhdGlvbnNTdGFjay5sZW5ndGggLSAxXSA9PT0gJygnKSAmJiBlbGVtZW50ID09PSAnLScpe1xyXG4gICAgICAgICAgICB0aGlzLm9wZXJhdGlvbnNTdGFjay5wdXNoKGVsZW1lbnQpXHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0U3RyLnB1c2goJzAnKVxyXG4gICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8vID09PT09PT09PT0gZWxlbWVudCBudW1iZXIgb3IgJygnID09PT09PT09PT09PVxyXG4gICAgICAgICBpZiAoIWlzTmFOKGVsTnVtYmVyKSB8fCBlbGVtZW50ID09PSAnKCcpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9PT0gJygnXHJcbiAgICAgICAgICAgICAgID8gdGhpcy5vcGVyYXRpb25zU3RhY2sucHVzaChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICA6IHRoaXMub3V0cHV0U3RyLnB1c2goZWxlbWVudClcclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAoZWxlbWVudCA9PT0gJyknKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2luZ0JyYWNrZXRPcGVyYXRvcigpXHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLy8gPT09PT09PT09PSAvLCosKywtLCUgPT09PT09PT09PT09XHJcbiAgICAgICAgIGlmIChvcGVyYXRvcnNBbmRQcmlvcml0eS5oYXNPd25Qcm9wZXJ0eShlbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRNYXRoT3BlcmF0b3JzKGVsZW1lbnQpXHJcbiAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy9jbGVhciBmcm9tIHdyb25nICcoJywgJyknXHJcbiAgICAgIHRoaXMub3BlcmF0aW9uc1N0YWNrID0gdGhpcy5vcGVyYXRpb25zU3RhY2suZmlsdGVyKChlbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgIGlmIChlbCAhPT0gJygnICYmIGVsICE9PSAnKScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsXHJcbiAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy9wdXNoIHRoZSByZW1haW5pbmcgb3BlcmF0aW9uIGluIG91dHB1dFN0clxyXG4gICAgICBmb3IgKGNvbnN0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm9wZXJhdGlvbnNTdGFjay5sZW5ndGg7ICkge1xyXG4gICAgICAgICB0aGlzLm91dHB1dFN0ci5wdXNoKHRoaXMub3BlcmF0aW9uc1N0YWNrLnBvcCgpIGFzIHN0cmluZylcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9wZXJhdGlvbnNTdGFjayA9IFtdXHJcbiAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvYzQ2NjgxOGU0NmY5OGQyODhhNWZjMDk4N2IyZDU4N2QuZW90XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2M0NjY4MThlNDZmOThkMjg4YTVmYzA5ODdiMmQ1ODdkLmVvdFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy8xODczZmU4NDIwMjNkNTMzODIxYmQ2MjdkNjA5YmMzMC50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvM2E5ZWQzNGJlNWM1YjNkOGZjM2MyNjE1N2IyNTc0YjIud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9iOGQ1MGZhZGFhODA0OWNhZmNlYmE3Y2I0ZDk4OTgxZi5lb3RcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvYjhkNTBmYWRhYTgwNDljYWZjZWJhN2NiNGQ5ODk4MWYuZW90XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzLzhmMTc3ZDI0ZDMzMTcxZGZjNTE4ZGFlNzczNWZkYzM4LnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9iN2Y3NGIyNjAyOTFjODI0NjFkMTM0N2UzZjEyMGIxZC53b2ZmXCI7IiwiaW1wb3J0IEhhbmRsZXJzIGZyb20gJy4vSGFuZGxlcnMudHMnXHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgY29uc3QgaGFuZGxlcnMgPSBuZXcgSGFuZGxlcnMoKVxyXG4gICBoYW5kbGVycy5hZGRJbnB1dExpc3RlbmVyKClcclxuICAgaGFuZGxlcnMuYWRkQnV0dG9uTGlzdGVuZXIoKVxyXG59KVxyXG4iLCJpbnRlcmZhY2UgT3BlcmF0aW9uIHtcclxuICAgW2tleTogc3RyaW5nXTogc3RyaW5nXHJcbn1cclxuaW50ZXJmYWNlIE9wZXJhdGlvblByaW9yaXR5IHtcclxuICAgW2tleTogc3RyaW5nXTogbnVtYmVyXHJcbn1cclxuY29uc3Qgb3BlcmF0b3JzOiBPcGVyYXRpb24gPSB7XHJcbiAgICcqJzogJ3gnLFxyXG4gICB4OiAneCcsXHJcbiAgINGFOiAneCcsXHJcbiAgICclJzogJyUnLFxyXG4gICAnLyc6ICcvJyxcclxuICAgJy0nOiAnLScsXHJcbiAgICcrJzogJysnLFxyXG4gICAn4oiaJzogJ+KImicsXHJcbn1cclxuXHJcbmNvbnN0IG9wZXJhdG9yc0FuZFByaW9yaXR5OiBPcGVyYXRpb25Qcmlvcml0eSA9IHtcclxuICAgeDogMTQsXHJcbiAgICclJzogMTQsXHJcbiAgICcvJzogMTQsXHJcbiAgICctJzogMTMsXHJcbiAgICcrJzogMTMsXHJcbiAgICfiiJonOiAxNSxcclxufVxyXG5cclxuZXhwb3J0IHsgb3BlcmF0b3JzLCBvcGVyYXRvcnNBbmRQcmlvcml0eSB9XHJcbiIsImVudW0gY29kZXMge1xyXG4gICAnQXJyb3dVcCcsXHJcbiAgICdBcnJvd0Rvd24nLFxyXG4gICAnQXJyb3dMZWZ0JyxcclxuICAgJ0Fycm93UmlnaHQnLFxyXG4gICAnU3BhY2UnLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb2Rlc1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9