webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/sharedStyles.js":
/*!*******************************!*\
  !*** ./pages/sharedStyles.js ***!
  \*******************************/
/*! exports provided: chalkUnderlineStyle, screenReaderOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chalkUnderlineStyle", function() { return chalkUnderlineStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenReaderOnly", function() { return screenReaderOnly; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var chalkUnderlineAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{width:0;}100%{width:100%;}"]);
var chalkUnderlineStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["position:relative;cursor:url(", "/chalk-stick.svg),auto;&:after{content:'';display:block;position:absolute;bottom:-4px;left:0;width:0%;height:2px;background-color:", ";animation:0.5s ", " linear forwards;}"], "", function (_ref) {
  var theme = _ref.theme;
  return theme.colors.light;
}, chalkUnderlineAnimation);
var screenReaderOnly = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);"]);

/***/ })

})
//# sourceMappingURL=index.js.7eb3ebf2fb4795c398c8.hot-update.js.map