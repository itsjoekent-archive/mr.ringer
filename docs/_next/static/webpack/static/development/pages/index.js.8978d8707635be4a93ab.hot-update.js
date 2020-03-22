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
/* harmony import */ var _src_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Navigation */ "./src/Navigation.js");
/* harmony import */ var _src_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Section */ "./src/Section.js");
/* harmony import */ var _src_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/content */ "./src/content.js");
/* harmony import */ var _src_content__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_content__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  body {\n    width: 100%;\n    min-height: 100vh;\n\n    background-color: ", ";\n\n    background-image: url(", "/chalk-noise.png);\n    background-size: 1280px 720px;\n    background-repeat: repeat;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var PageBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.dark;
}, "");
var layoutBreakpoint = "min-width: 1024px";
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
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(PageBackground, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx(PageLayout, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(NavColumn, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_src_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  })), __jsx(MainColumn, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, _src_content__WEBPACK_IMPORTED_MODULE_6___default.a.sections.map(function (section) {
    return __jsx(_src_Section__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, section, {
      key: section.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }));
  }))));
}

/***/ }),

/***/ "./src/Navigation.js":
/*!***************************!*\
  !*** ./src/Navigation.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharedStyles */ "./src/sharedStyles.js");
var _jsxFileName = "/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/src/Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var NavigationContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "Navigation__NavigationContainer",
  componentId: "dqsris-0"
})(["display:flex;flex-direction:column;@media (min-width:1280px){position:sticky;top:48px;}"]);
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Navigation__TitleContainer",
  componentId: "dqsris-1"
})(["display:flex;flex-direction:column;margin-bottom:24px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Navigation__Title",
  componentId: "dqsris-2"
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
  return theme.colors.complimentary;
});
var Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Navigation__Subtitle",
  componentId: "dqsris-3"
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
  componentId: "dqsris-4"
})(["text-decoration:none;display:inline-block;cursor:pointer;&:hover{color:", ";}"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.complimentary;
});
var Link = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Navigation__Link",
  componentId: "dqsris-5"
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
  componentId: "dqsris-6"
})(["display:flex;flex-direction:column;list-style-type:none;padding-left:0;li:last-of-type ", "{margin-bottom:0;}"], Link);
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
  }, _content__WEBPACK_IMPORTED_MODULE_2___default.a.sections.map(function (section) {
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

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

var markup = "\n  # Overview\n"; // const content = {
//   sections: [
//     {
//       id: 'overview',
//       title: 'Overview',
//       composition: [
//         {
//           type: 'markdown',
//           content: `Mr. Ringer is a Javascript math library with a simple API for complex math.`,
//         },
//         {
//           type: 'markdown',
//           content: `This library was created to aide the development of a 3D video game, after realizing I didn’t understand the math required to make a 3D game from scratch and I needed to learn it. As such this library has a bias towards supporting what is necessary for that project. But this code is [open source](https://github.com/itsjoekent/mr.ringer) and anyone can contribute towards it.`,
//         },
//         {
//           type: 'markdown',
//           content: `This package is named after my high school trigonometry teacher, Mr Ringer, who told myself and the rest of the class to go to the beach instead of taking the final exam for his class (I ended up getting a 46% on that test).`,
//         },
//         {
//           type: 'markdown',
//           content: `This page serves as not only written documentation for how to use the library, but as a virtual chalkboard for dummies like me that don’t understand what some of these equations are actually used for and what they do.`,
//         },
//       ],
//     },
//     {
//       id: 'installation',
//       title: 'Installation',
//       composition: [
//         {
//           type: 'markdown',
//           content: `You can install mr.ringer from either npm or use it as a standalone script on the page.`,
//         },
//         {
//           type: 'terminal',
//           content: [
//             '$ npm install mr.ringer',
//             '',
//             '<script src="https://unpkg.com/mr.ringer/dist/mr.ringer.js"></script>',
//           ],
//         },
//       ],
//     },
//     {
//       id: 'vector2',
//       title: 'Vector2',
//     },
//     {
//       id: 'vector3',
//       title: 'Vector3',
//     },
//   ],
// };
//
// export default content;

/***/ })

})
//# sourceMappingURL=index.js.8978d8707635be4a93ab.hot-update.js.map