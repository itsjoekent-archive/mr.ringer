webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Section.js":
/*!**************************!*\
  !*** ./pages/Section.js ***!
  \**************************/
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
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharedStyles */ "./pages/sharedStyles.js");
var _jsxFileName = "/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/pages/Section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Section__SectionContainer",
  componentId: "sc-1dy62o7-0"
})(["display:flex;flex-direction:column;margin-bottom:64px;"]);
var SectionParagraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Section__SectionParagraph",
  componentId: "sc-1dy62o7-1"
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
  componentId: "sc-1dy62o7-2"
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
  componentId: "sc-1dy62o7-3"
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
  componentId: "sc-1dy62o7-4"
})(["display:block;padding:16px;background-color:", ";border:2px solid ", ";"], function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.dark;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.colors.complimentary;
});
var TerminalLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Section__TerminalLine",
  componentId: "sc-1dy62o7-5"
})(["font-family:monospace;font-size:", ";font-weight:400;color:", ";line-height:1.1;margin-bottom:4px;"], function (_ref18) {
  var theme = _ref18.theme;
  return theme.fontSizes.body;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.colors.lightComplimentary;
});
var TerminalLineBreak = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Section__TerminalLineBreak",
  componentId: "sc-1dy62o7-6"
})(["display:block;width:100%;height:calc((", " * 1.1) + 4px);"], function (_ref20) {
  var theme = _ref20.theme;
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
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(Title, {
    id: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, title), composition && composition.map(function (_ref21) {
    var type = _ref21.type,
        content = _ref21.content;
    var key = JSON.stringify(content);

    if (type === 'markdown') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: key,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
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
          lineNumber: 101,
          columnNumber: 15
        }
      }, content.map(function (line) {
        return line.length ? __jsx(TerminalLine, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 19
          }
        }, line) : __jsx(TerminalLineBreak, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 19
          }
        });
      }));
    }

    return null;
  }));
}

/***/ }),

/***/ "./pages/content.js":
/*!**************************!*\
  !*** ./pages/content.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var content = {
  sections: [{
    id: 'overview',
    title: 'Overview',
    composition: [{
      type: 'markdown',
      content: "Mr. Ringer is a Javascript math library with a simple API for complex math."
    }, {
      type: 'markdown',
      content: "This library was created to aide the development of a 3D video game, after realizing I didn\u2019t understand the math required to make a 3D game from scratch and I needed to learn it. As such this library has a bias towards supporting what is necessary for that project. But this code is [open source](https://github.com/itsjoekent/mr.ringer) and anyone can contribute towards it."
    }, {
      type: 'markdown',
      content: "This package is named after my high school trigonometry teacher, Mr Ringer, who told myself and the rest of the class to go to the beach instead of taking the final exam for his class (I ended up getting a 46% on that test)."
    }, {
      type: 'markdown',
      content: "This page serves as not only written documentation for how to use the library, but as a virtual chalkboard for dummies like me that don\u2019t understand what some of these equations are actually used for and what they do."
    }]
  }, {
    id: 'installation',
    title: 'Installation',
    composition: [{
      type: 'markdown',
      content: 'You can install mr.roger from either npm or use it as a standalone script on the page.'
    }, {
      type: 'terminal',
      content: ['$ npm install mr.ringer', '', '# Or use standalone ', '# <script src="https://unpkg.com/mr.ringer/dist/mr.ringer.js"></script>']
    }]
  }, {
    id: 'vector2',
    title: 'Vector2'
  }, {
    id: 'vector3',
    title: 'Vector3'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (content);

/***/ })

})
//# sourceMappingURL=index.js.e8b02b5286d6fd5994cd.hot-update.js.map