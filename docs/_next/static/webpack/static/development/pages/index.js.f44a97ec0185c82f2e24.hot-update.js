webpackHotUpdate("static/development/pages/index.js",{

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
})(["display:inline-block;", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";text-decoration:none;cursor:pointer;margin-bottom:12px;", " &:hover{color:", ";}"], function (_ref12) {
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
}, function (_ref17) {
  var isActive = _ref17.isActive,
      theme = _ref17.theme;
  return isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:", ";"], function (_ref18) {
    var theme = _ref18.theme;
    return theme.colors.complimentary;
  });
}, function (_ref19) {
  var theme = _ref19.theme,
      isActive = _ref19.isActive;
  return isActive ? theme.colors.complimentary : theme.colors.lightComplimentary;
});
var LinksContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Navigation__LinksContainer",
  componentId: "dqsris-6"
})(["display:flex;flex-direction:column;list-style-type:none;padding-left:0;"]);
var Sublink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Navigation__Sublink",
  componentId: "dqsris-7"
})(["display:inline-block;", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";text-decoration:none;cursor:pointer;margin-bottom:6px;&:hover{color:", ";}"], function (_ref20) {
  var theme = _ref20.theme;
  return theme.font;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.fontSizes.small;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.letterSpacing;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.lineHeight;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.colors.light;
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.colors.lightComplimentary;
});
var SublinksContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Navigation__SublinksContainer",
  componentId: "dqsris-8"
})(["display:flex;flex-direction:column;list-style-type:none;padding-left:8px;height:", ";margin-bottom:", ";overflow-y:hidden;li:last-of-type ", "{margin-bottom:0;}"], function (_ref26) {
  var isActive = _ref26.isActive;
  return isActive ? 'auto' : '0px';
}, function (_ref27) {
  var isActive = _ref27.isActive;
  return isActive ? '12px' : '0px';
}, Sublink);
function Navigation() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_content__WEBPACK_IMPORTED_MODULE_2__["default"].sections[0].id),
      activeSection = _useState[0],
      setActiveSection = _useState[1];

  return __jsx(NavigationContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx(TitleContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, "mr. ringer"), __jsx(Subtitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, "A Javascript Math library created by", ' ', __jsx(SubtitleLink, {
    as: "a",
    href: "https://joekent.nyc/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "@itsjoekent"))), __jsx(LinksContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, _content__WEBPACK_IMPORTED_MODULE_2__["default"].sections.map(function (section) {
    return __jsx("li", {
      key: section.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }
    }, __jsx(Link, {
      href: "#".concat(section.id),
      onClick: function onClick() {
        return setActiveSection(section.id);
      },
      isActive: section.id === activeSection,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    }, section.title), section.subSections && section.subSections.length && __jsx(SublinksContainer, {
      isActive: section.id === activeSection,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, section.subSections.map(function (subSection) {
      return __jsx(Sublink, {
        href: "#".concat(section.id, "-").concat(subSection.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 19
        }
      }, subSection.title);
    })));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.f44a97ec0185c82f2e24.hot-update.js.map