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
var lightComplimentary = '#ffddee';
var theme = {
  colors: {
    primary: primary,
    light: light,
    complimentary: complimentary,
    lightComplimentary: lightComplimentary
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
          lineNumber: 53,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, __jsx("title", {
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }, "Mr. Ringer"), __jsx("meta", {
        property: "og:title",
        content: "Mr. Ringer",
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }), __jsx("meta", {
        property: "og:description",
        content: "Mr. Ringer is a Javascript math library that makes it simple to perform complex math.",
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "icon",
        href: "".concat("", "/favicon.ico"),
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap",
        rel: "stylesheet",
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap",
        rel: "stylesheet",
        className: "jsx-3457709720",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3457709720",
        __self: this
      }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}p,h1,h2,h3{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VrZW50ZXcgMS9kZXYvam9lL21yLnJpbmdlci9jaGFsa2JvYXJkL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0UyQixBQUl1QixBQVFZLEFBT2IsU0FDWCxDQWZXLFNBR0csR0FLZCxtSUFKQSIsImZpbGUiOiIvVXNlcnMvam9la2VudGV3IDEvZGV2L2pvZS9tci5yaW5nZXIvY2hhbGtib2FyZC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IGNzcywgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgY2hhbGtGb250ID0gY3NzYFxuICBmb250LWZhbWlseTogJ0NhdmVhdCcsIGN1cnNpdmU7XG5gO1xuY29uc3QgdGVybWluYWxGb250ID0gY3NzYFxuICBmb250LWZhbWlseTogJ1VidW50dSBNb25vJywgbW9ub3NwYWNlO1xuYDtcblxuY29uc3QgY2hhbGtMZXR0ZXJTcGFjaW5nID0gJzJweCc7XG5jb25zdCBjaGFsa0xpbmVIZWlnaHQgPSAnMS4yJztcblxuY29uc3QgdGVybWluYWxMZXR0ZXJTcGFjaW5nID0gJ25vcm1hbCc7XG5jb25zdCB0ZXJtaW5hbExpbmVIZWlnaHQgPSAnMS4xJztcblxuY29uc3QgbGlnaHQgPSAnI2YzZjNmMyc7XG5jb25zdCBwcmltYXJ5ID0gJyMxYjFiMWInO1xuXG5jb25zdCBjb21wbGltZW50YXJ5ID0gJyNmMTAwNzknO1xuY29uc3QgbGlnaHRDb21wbGltZW50YXJ5ID0gJyNmZmRkZWUnO1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeSxcbiAgICBsaWdodCxcbiAgICBjb21wbGltZW50YXJ5LFxuICAgIGxpZ2h0Q29tcGxpbWVudGFyeSxcbiAgfSxcbiAgZm9udDogdGVybWluYWxGb250LFxuICBsaW5lSGVpZ2h0OiB0ZXJtaW5hbExpbmVIZWlnaHQsXG4gIGxldHRlclNwYWNpbmc6IHRlcm1pbmFsTGV0dGVyU3BhY2luZyxcbiAgY2hhbGtMZXR0ZXJTcGFjaW5nLFxuICBjaGFsa0xpbmVIZWlnaHQsXG4gIGNoYWxrRm9udCxcbiAgdGVybWluYWxGb250LFxuICBmb250U2l6ZXM6IHtcbiAgICB0aW55OiAnMTJweCcsXG4gICAgc21hbGw6ICcxNnB4JyxcbiAgICBib2R5OiAnMThweCcsXG4gICAgaGVhZGVyOiAnMjRweCcsXG4gICAgdGl0bGU6ICc0OHB4JyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TXIuIFJpbmdlcjwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNci4gUmluZ2VyXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250ZW50PVwiTXIuIFJpbmdlciBpcyBhIEphdmFzY3JpcHQgbWF0aCBsaWJyYXJ5IHRoYXQgbWFrZXMgaXQgc2ltcGxlIHRvIHBlcmZvcm0gY29tcGxleCBtYXRoLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS9mYXZpY29uLmljb2B9IC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dStNb25vOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2F2ZWF0OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCxcbiAgICAgICAgICBoMSxcbiAgICAgICAgICBoMixcbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/pages/_app.js */"), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: theme,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: "jsx-3457709720" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.7a9a702982074c37bd17.hot-update.js.map