webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var chalkFont = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["css"])(["font-family:'Caveat',cursive;"]);
var terminalFont = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["css"])(["font-family:'Ubuntu Mono',monospace;"]);
var chalkLetterSpacing = '2px';
var chalkLineHeight = '1.2';
var terminalLetterSpacing = 'normal';
var terminalLineHeight = '1.1';
var light = '#f3f3f3';
var primary = '#1b1b1b';
var complimentary = '#f10079';
var theme = {
  colors: {
    primary: primary,
    light: light,
    complimentary: complimentary
  },
  font: terminalFont,
  lineHeight: terminalLineHeight,
  letterSpacing: terminalLetterSpacing,
  chalkLetterSpacing: chalkLetterSpacing,
  chalkLineHeight: chalkLineHeight,
  chalkFont: chalkFont,
  terminalFont: terminalFont,
  fontSizes: {
    tiny: '12px',
    small: '16px',
    body: '18px',
    header: '24px',
    title: '48px'
  }
};

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, __jsx("title", {
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }, "Mr. Ringer"), __jsx("meta", {
        property: "og:title",
        content: "Mr. Ringer",
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }), __jsx("meta", {
        property: "og:description",
        content: "Mr. Ringer is a Javascript math library that makes it simple to perform complex math.",
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "icon",
        href: "".concat("", "/favicon.ico"),
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap",
        rel: "stylesheet",
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap",
        rel: "stylesheet",
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3457709720",
        __self: this
      }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}p,h1,h2,h3{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VrZW50ZXcgMS9kZXYvam9lL21yLnJpbmdlci9jaGFsa2JvYXJkL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0UyQixBQUl1QixBQVFZLEFBT2IsU0FDWCxDQWZXLFNBR0csR0FLZCxtSUFKQSIsImZpbGUiOiIvVXNlcnMvam9la2VudGV3IDEvZGV2L2pvZS9tci5yaW5nZXIvY2hhbGtib2FyZC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IGNzcywgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgY2hhbGtGb250ID0gY3NzYFxuICBmb250LWZhbWlseTogJ0NhdmVhdCcsIGN1cnNpdmU7XG5gO1xuY29uc3QgdGVybWluYWxGb250ID0gY3NzYFxuICBmb250LWZhbWlseTogJ1VidW50dSBNb25vJywgbW9ub3NwYWNlO1xuYDtcblxuY29uc3QgY2hhbGtMZXR0ZXJTcGFjaW5nID0gJzJweCc7XG5jb25zdCBjaGFsa0xpbmVIZWlnaHQgPSAnMS4yJztcblxuY29uc3QgdGVybWluYWxMZXR0ZXJTcGFjaW5nID0gJ25vcm1hbCc7XG5jb25zdCB0ZXJtaW5hbExpbmVIZWlnaHQgPSAnMS4xJztcblxuY29uc3QgbGlnaHQgPSAnI2YzZjNmMyc7XG5jb25zdCBwcmltYXJ5ID0gJyMxYjFiMWInO1xuXG5jb25zdCBjb21wbGltZW50YXJ5ID0gJyNmMTAwNzknO1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeSxcbiAgICBsaWdodCxcbiAgICBjb21wbGltZW50YXJ5LFxuICB9LFxuICBmb250OiB0ZXJtaW5hbEZvbnQsXG4gIGxpbmVIZWlnaHQ6IHRlcm1pbmFsTGluZUhlaWdodCxcbiAgbGV0dGVyU3BhY2luZzogdGVybWluYWxMZXR0ZXJTcGFjaW5nLFxuICBjaGFsa0xldHRlclNwYWNpbmcsXG4gIGNoYWxrTGluZUhlaWdodCxcbiAgY2hhbGtGb250LFxuICB0ZXJtaW5hbEZvbnQsXG4gIGZvbnRTaXplczoge1xuICAgIHRpbnk6ICcxMnB4JyxcbiAgICBzbWFsbDogJzE2cHgnLFxuICAgIGJvZHk6ICcxOHB4JyxcbiAgICBoZWFkZXI6ICcyNHB4JyxcbiAgICB0aXRsZTogJzQ4cHgnLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Nci4gUmluZ2VyPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk1yLiBSaW5nZXJcIiAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJNci4gUmluZ2VyIGlzIGEgSmF2YXNjcmlwdCBtYXRoIGxpYnJhcnkgdGhhdCBtYWtlcyBpdCBzaW1wbGUgdG8gcGVyZm9ybSBjb21wbGV4IG1hdGguXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L2Zhdmljb24uaWNvYH0gLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1K01vbm86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwLFxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGgyLFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/pages/_app.js */"), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: theme,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: "jsx-3457709720" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.42c9a24c0376c5191f17.hot-update.js.map