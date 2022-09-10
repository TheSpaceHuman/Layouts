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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pug.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/pug.js":
/*!***********************!*\
  !*** ./src/js/pug.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(\"./src/pug sync \\\\.pug$\");\n__webpack_require__(\"./src/pug/includes sync \\\\.pug$\");\n__webpack_require__(\"./src/pug/extends sync \\\\.pug$\");\n\n//# sourceURL=webpack:///./src/js/pug.js?");

/***/ }),

/***/ "./src/pug sync \\.pug$":
/*!******************************************!*\
  !*** ./src/pug sync nonrecursive \.pug$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./index.pug\": \"./src/pug/index.pug\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/pug sync \\\\.pug$\";\n\n//# sourceURL=webpack:///./src/pug_sync_nonrecursive_\\.pug$?");

/***/ }),

/***/ "./src/pug/extends sync \\.pug$":
/*!**************************************************!*\
  !*** ./src/pug/extends sync nonrecursive \.pug$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./layout.pug\": \"./src/pug/extends/layout.pug\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/pug/extends sync \\\\.pug$\";\n\n//# sourceURL=webpack:///./src/pug/extends_sync_nonrecursive_\\.pug$?");

/***/ }),

/***/ "./src/pug/extends/layout.pug":
/*!************************************!*\
  !*** ./src/pug/extends/layout.pug ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"extends/layout.html\";\n\n//# sourceURL=webpack:///./src/pug/extends/layout.pug?");

/***/ }),

/***/ "./src/pug/includes sync \\.pug$":
/*!***************************************************!*\
  !*** ./src/pug/includes sync nonrecursive \.pug$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./footer.pug\": \"./src/pug/includes/footer.pug\",\n\t\"./header.pug\": \"./src/pug/includes/header.pug\",\n\t\"./main.pug\": \"./src/pug/includes/main.pug\",\n\t\"./popup.pug\": \"./src/pug/includes/popup.pug\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/pug/includes sync \\\\.pug$\";\n\n//# sourceURL=webpack:///./src/pug/includes_sync_nonrecursive_\\.pug$?");

/***/ }),

/***/ "./src/pug/includes/footer.pug":
/*!*************************************!*\
  !*** ./src/pug/includes/footer.pug ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"includes/footer.html\";\n\n//# sourceURL=webpack:///./src/pug/includes/footer.pug?");

/***/ }),

/***/ "./src/pug/includes/header.pug":
/*!*************************************!*\
  !*** ./src/pug/includes/header.pug ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"includes/header.html\";\n\n//# sourceURL=webpack:///./src/pug/includes/header.pug?");

/***/ }),

/***/ "./src/pug/includes/main.pug":
/*!***********************************!*\
  !*** ./src/pug/includes/main.pug ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"includes/main.html\";\n\n//# sourceURL=webpack:///./src/pug/includes/main.pug?");

/***/ }),

/***/ "./src/pug/includes/popup.pug":
/*!************************************!*\
  !*** ./src/pug/includes/popup.pug ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"includes/popup.html\";\n\n//# sourceURL=webpack:///./src/pug/includes/popup.pug?");

/***/ }),

/***/ "./src/pug/index.pug":
/*!***************************!*\
  !*** ./src/pug/index.pug ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//# sourceURL=webpack:///./src/pug/index.pug?");

/***/ })

/******/ });