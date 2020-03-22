webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Documentation.js":
/*!******************************!*\
  !*** ./src/Documentation.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Documentation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var marksy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marksy */ "./node_modules/marksy/lib/index.js");
/* harmony import */ var marksy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marksy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ "./src/content.js");
var _this = undefined,
    _jsxFileName = "/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/src/Documentation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Documentation__Container",
  componentId: "cnhtf5-0"
})(["display:flex;flex-direction:column;margin-bottom:64px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Documentation__Title",
  componentId: "cnhtf5-1"
})(["display:block;", " font-size:", ";font-weight:700;letter-spacing:", ";line-height:", ";color:", ";margin-bottom:36px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.font;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.title;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.letterSpacing;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.lineHeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.light;
});
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Documentation__Paragraph",
  componentId: "cnhtf5-2"
})(["display:inline-block;", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";text-decoration:none;margin-bottom:12px;"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.font;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.fontSizes.body;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.letterSpacing;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.lineHeight;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.light;
});
var Anchor = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Documentation__Anchor",
  componentId: "cnhtf5-3"
})(["display:inline-block;", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";cursor:pointer;text-decoration:none;&:hover{color:", ";}"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.font;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.fontSizes.body;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.letterSpacing;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.lineHeight;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.lightComplimentary;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.complimentary;
});

var compileMarkdown = function compileMarkdown() {
  var lastH1 = null;
  return marksy__WEBPACK_IMPORTED_MODULE_2___default()({
    createElement: react__WEBPACK_IMPORTED_MODULE_0__["createElement"],
    elements: {
      h1: function h1(_ref17) {
        var children = _ref17.children;
        var id = encodeURIComponent(children.replace('#', '').toLowerCase().trim());
        return __jsx(Title, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }
        }, children);
      },
      p: Paragraph,
      a: Anchor
    }
  });
};

function Documentation() {
  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, compileMarkdown()(_content__WEBPACK_IMPORTED_MODULE_3__["default"].markup).tree);
}

/***/ })

})
//# sourceMappingURL=index.js.49e727b763a1d16cbc58.hot-update.js.map