webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Navigation.js":
/*!*****************************!*\
  !*** ./pages/Navigation.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./pages/content.js");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharedStyles */ "./pages/sharedStyles.js");
var _jsxFileName = "/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/pages/Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var NavigationContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "Navigation__NavigationContainer",
  componentId: "a2im98-0"
})(["display:flex;flex-direction:column;"]);
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Navigation__TitleContainer",
  componentId: "a2im98-1"
})(["display:flex;flex-direction:column;margin-bottom:24px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Navigation__Title",
  componentId: "a2im98-2"
})(["", " font-size:", ";font-weight:700;letter-spacing:", ";line-height:", ";text-transform:uppercase;color:", ";margin-bottom:6px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.chalkFont;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.body;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.chalkLetterSpacing;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.chalkLineHeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.light;
});
var Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Navigation__Subtitle",
  componentId: "a2im98-3"
})(["", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.font;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.fontSizes.tiny;
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
var SubtitleLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Subtitle).withConfig({
  displayName: "Navigation__SubtitleLink",
  componentId: "a2im98-4"
})(["text-decoration:none;display:inline-block;cursor:pointer;&:hover{color:", ";}"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.complimentary;
});
var Link = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Navigation__Link",
  componentId: "a2im98-5"
})(["display:inline-block;", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";text-decoration:none;cursor:pointer;margin-bottom:12px;&:hover{", "}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.font;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.fontSizes.header;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.letterSpacing;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.lineHeight;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.light;
}, _sharedStyles__WEBPACK_IMPORTED_MODULE_3__["chalkUnderlineStyle"]);
var LinksContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Navigation__LinksContainer",
  componentId: "a2im98-6"
})(["display:flex;flex-direction:column;list-style-type:none;padding-left:0;li:last-of-type ", "{margin-bottom:0;}@media (min-width:1280px){position:sticky;top:128px;}"], Link);
function Navigation() {
  var _this = this;

  return __jsx(NavigationContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(TitleContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, "mr. ringer"), __jsx(Subtitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "A Javascript Math library created by", ' ', __jsx(SubtitleLink, {
    as: "a",
    href: "https://joekent.nyc/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "@itsjoekent"))), __jsx(LinksContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, _content__WEBPACK_IMPORTED_MODULE_2__["default"].sections.map(function (section) {
    return __jsx("li", {
      key: section.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }, __jsx(Link, {
      href: "#".concat(section.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }, section.title));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.9b33931d6b53d6b9bbc0.hot-update.js.map