webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation */ "./pages/Navigation.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Section */ "./pages/Section.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content */ "./pages/content.js");


var _jsxFileName = "/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  body {\n    width: 100%;\n    min-height: 100vh;\n\n    background-color: ", ";\n\n    background-image: url(", "/chalk-noise.png);\n    background-size: 1280px 720px;\n    background-repeat: repeat;\n\n    cursor: url(", "/chalk-stick.svg), auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var PageBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, "", "");
var layoutBreakpoint = "\n  min-width: 1024px\n";
var PageLayout = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__PageLayout",
  componentId: "sc-1cvwks4-0"
})(["display:flex;flex-direction:column;width:100%;margin-top:24px;padding-left:24px;padding-right:24px;@media (", "){flex-direction:row;justify-content:space-between;max-width:1280px;margin-top:48px;margin-left:auto;margin-right:auto;}"], layoutBreakpoint);
var NavColumn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__NavColumn",
  componentId: "sc-1cvwks4-1"
})(["width:100%;margin-bottom:48px;@media (", "){width:calc(25% - 24px);margin-bottom:0;}"], layoutBreakpoint);
var MainColumn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(NavColumn).withConfig({
  displayName: "pages__MainColumn",
  componentId: "sc-1cvwks4-2"
})(["@media (", "){width:calc(75% - 48px);}"], layoutBreakpoint);
function Home(props) {
  var _this = this;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(PageBackground, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx(PageLayout, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(NavColumn, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  })), __jsx(MainColumn, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, _content__WEBPACK_IMPORTED_MODULE_6__["default"].sections.map(function (section) {
    return __jsx(_Section__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, section, {
      key: section.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }));
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.438fcac7fb9c7c6ee1f7.hot-update.js.map