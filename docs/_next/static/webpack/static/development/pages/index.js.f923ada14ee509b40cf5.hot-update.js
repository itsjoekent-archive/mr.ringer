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
var chalkStickAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{left:0;}99%{opacity:1;}100%{left:100%;opacity:0;}"]);
var chalkUnderlineStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["position:relative;&:before{content:'';display:block;position:absolute;bottom:-21px;left:0;width:17px;height:17px;background-image:url(", "/chalk-stick.svg);animation:0.35s ", " linear forwards;}&:after{content:'';display:block;position:absolute;bottom:-4px;left:0;width:0%;height:2px;background-color:", ";animation:0.35s ", " linear forwards;}"], "", chalkStickAnimation, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.light;
}, chalkUnderlineAnimation);
var screenReaderOnly = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);"]);

/***/ })

})
//# sourceMappingURL=index.js.f923ada14ee509b40cf5.hot-update.js.map