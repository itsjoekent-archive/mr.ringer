webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Section.js":
/*!************************!*\
  !*** ./src/Section.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var marksy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marksy */ "./node_modules/marksy/lib/index.js");
/* harmony import */ var marksy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marksy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharedStyles */ "./src/sharedStyles.js");
var _jsxFileName = "/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/src/Section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var TerminalContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Section__TerminalContainer",
  componentId: "sc-15yfimw-0"
})(["display:block;margin-top:24px;margin-bottom:24px;padding-left:16px;word-break:break-word;"]);
var TerminalLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Section__TerminalLine",
  componentId: "sc-15yfimw-1"
})(["font-family:monospace;font-size:", ";font-weight:400;color:", ";line-height:1.1;margin-bottom:4px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.fontSizes.body;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.lightComplimentary;
});
var TerminalLineBreak = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Section__TerminalLineBreak",
  componentId: "sc-15yfimw-2"
})(["display:block;width:100%;height:calc((", " * 1.1) + 4px);"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSizes.body;
});
function Section(props) {
  var _this = this;

  var id = props.id,
      title = props.title,
      composition = props.composition;
  return __jsx(SectionContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(Title, {
    id: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, title), composition && composition.map(function (_ref4) {
    var type = _ref4.type,
        content = _ref4.content;
    var key = JSON.stringify(content);

    if (type === 'markdown') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: key,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }, compileMarkdown(content).tree);
    }

    if (type === 'terminal') {
      return __jsx(TerminalContainer, {
        key: key,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }
      }, content.map(function (line, index) {
        return line.length ? __jsx(TerminalLine, {
          key: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }
        }, line) : __jsx(TerminalLineBreak, {
          key: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }
        });
      }));
    }

    return null;
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.5a1851d3495956762d4f.hot-update.js.map