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




var SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Section__SectionContainer",
  componentId: "sc-15yfimw-0"
})(["display:flex;flex-direction:column;margin-bottom:64px;"]);
var SectionParagraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Section__SectionParagraph",
  componentId: "sc-15yfimw-1"
})(["display:inline-block;", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";text-decoration:none;margin-bottom:12px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.font;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.body;
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
var SectionAnchor = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Section__SectionAnchor",
  componentId: "sc-15yfimw-2"
})(["display:inline-block;", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";cursor:pointer;text-decoration:none;&:hover{", "}"], function (_ref6) {
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
  return theme.colors.lightComplimentary;
}, _sharedStyles__WEBPACK_IMPORTED_MODULE_3__["chalkUnderlineStyle"]);
var compileMarkdown = marksy__WEBPACK_IMPORTED_MODULE_2___default()({
  createElement: react__WEBPACK_IMPORTED_MODULE_0__["createElement"],
  elements: {
    p: SectionParagraph,
    a: SectionAnchor
  }
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Section__Title",
  componentId: "sc-15yfimw-3"
})(["display:block;", " font-size:", ";font-weight:700;letter-spacing:", ";line-height:", ";color:", ";margin-bottom:36px;"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.font;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.fontSizes.title;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.letterSpacing;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.lineHeight;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.light;
});
var TerminalContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Section__TerminalContainer",
  componentId: "sc-15yfimw-4"
})(["display:block;margin-top:24px;margin-bottom:24px;padding-left:16px;word-break:break-word;"]);
var TerminalLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Section__TerminalLine",
  componentId: "sc-15yfimw-5"
})(["font-family:monospace;font-size:", ";font-weight:400;color:", ";line-height:1.1;margin-bottom:4px;"], function (_ref16) {
  var theme = _ref16.theme;
  return theme.fontSizes.body;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.colors.lightComplimentary;
});
var TerminalLineBreak = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Section__TerminalLineBreak",
  componentId: "sc-15yfimw-6"
})(["display:block;width:100%;height:calc((", " * 1.1) + 4px);"], function (_ref18) {
  var theme = _ref18.theme;
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
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(Title, {
    id: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, title), composition && composition.map(function (_ref19) {
    var type = _ref19.type,
        content = _ref19.content;
    var key = JSON.stringify(content);

    if (type === 'markdown') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: key,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
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
          lineNumber: 102,
          columnNumber: 15
        }
      }, content.map(function (line, index) {
        return line.length ? __jsx(TerminalLine, {
          key: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 21
          }
        }, line) : __jsx(TerminalLineBreak, {
          key: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
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
//# sourceMappingURL=index.js.d0ea55b94a8e50d9faf0.hot-update.js.map