webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Sandbox.js":
/*!************************!*\
  !*** ./src/Sandbox.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-codemirror2 */ "./node_modules/react-codemirror2/index.js");
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_codemirror2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mr_ringer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mr.ringer */ "./node_modules/mr.ringer/dist/mr.ringer.js");
/* harmony import */ var mr_ringer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mr_ringer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lessons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lessons */ "./src/lessons.js");

var _jsxFileName = "/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/src/Sandbox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // Referenced from, https://jaketrent.com/post/render-codemirror-on-server/

var modeLoaded = false;

if ( true && typeof window.navigator !== 'undefined') {
  __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");

  modeLoaded = true;
}

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Sandbox__Container",
  componentId: "sc-1yhnmvq-0"
})(["display:flex;flex-direction:row;flex-wrap:wrap;width:100%;max-height:90vh;margin-top:48px;margin-bottom:48px;padding-top:16px;background-color:", ";border-top:2px solid ", ";border-bottom:2px solid ", ";position:relative;@media (min-width:1280px){height:90vh;}&:before{content:'Mr. Ringer TI-84';", " font-size:", ";font-weight:700;font-style:italic;letter-spacing:", ";line-height:", ";text-transform:uppercase;color:", ";background-color:", ";border:2px solid ", ";border-radius:4px;position:absolute;left:50%;transform:translate(-50%);top:-0.65em;padding-left:16px;padding-right:16px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.dark;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.complimentary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.complimentary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.chalkFont;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fontSizes.body;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.chalkLetterSpacing;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.chalkLineHeight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.complimentary;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.dark;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.complimentary;
});
var LessonsColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Sandbox__LessonsColumn",
  componentId: "sc-1yhnmvq-1"
})(["display:flex;flex-direction:column;padding:16px;width:50%;max-height:200px;overflow-y:scroll;@media (min-width:1280px){width:20%;max-height:none;}"]);
var LessonsColumnHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Sandbox__LessonsColumnHeader",
  componentId: "sc-1yhnmvq-2"
})(["display:block;", " font-size:", ";font-weight:700;letter-spacing:", ";line-height:", ";color:", ";margin-bottom:12px;"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.font;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.fontSizes.header;
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
var LessonsColumnSubheader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Sandbox__LessonsColumnSubheader",
  componentId: "sc-1yhnmvq-3"
})(["display:block;", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";text-decoration:none;margin-bottom:24px;"], function (_ref16) {
  var theme = _ref16.theme;
  return theme.font;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.fontSizes.small;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.letterSpacing;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.lineHeight;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.colors.light;
});

var lessonTitleHoverFrames = function lessonTitleHoverFrames(theme) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{background-position:0% 50%;}100%{background-position:100% 50%;}"]);
};

var LessonTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "Sandbox__LessonTitle",
  componentId: "sc-1yhnmvq-4"
})(["", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";border:none;margin:0;margin-bottom:12px;padding:0;background:none;cursor:pointer;text-align:left;position:relative;", " &:hover:after{content:'';display:block;position:absolute;bottom:0px;left:0;width:100%;height:3px;background:linear-gradient(to right,", ",", ");background-size:200% 500%;animation:1s linear 0s infinite alternate ", ";}"], function (_ref21) {
  var theme = _ref21.theme;
  return theme.font;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.fontSizes.small;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.letterSpacing;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.lineHeight;
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.colors.lightComplimentary;
}, function (_ref26) {
  var theme = _ref26.theme,
      isActive = _ref26.isActive;
  return isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["color:", ";"], function (_ref27) {
    var theme = _ref27.theme;
    return theme.colors.complimentary;
  });
}, function (_ref28) {
  var theme = _ref28.theme;
  return theme.colors.lightComplimentary;
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.colors.complimentary;
}, function (_ref30) {
  var theme = _ref30.theme;
  return lessonTitleHoverFrames(theme);
});
var ChartColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Sandbox__ChartColumn",
  componentId: "sc-1yhnmvq-5"
})(["width:50%;padding:16px;position:relative;@media (min-width:1280px){width:40%;}"]);
var errorMessageEntrance = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{bottom:-100%;opacity:0;}100%{bottom:16px;opacity:1;}"]);
var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Sandbox__ErrorMessage",
  componentId: "sc-1yhnmvq-6"
})(["position:absolute;left:0;width:100%;padding:16px;", " font-size:", ";font-weight:700;letter-spacing:", ";line-height:", ";color:", ";background-color:", ";animation:0.5s linear forwards ", ";"], function (_ref31) {
  var theme = _ref31.theme;
  return theme.font;
}, function (_ref32) {
  var theme = _ref32.theme;
  return theme.fontSizes.body;
}, function (_ref33) {
  var theme = _ref33.theme;
  return theme.letterSpacing;
}, function (_ref34) {
  var theme = _ref34.theme;
  return theme.lineHeight;
}, function (_ref35) {
  var theme = _ref35.theme;
  return theme.colors.complimentary;
}, function (_ref36) {
  var theme = _ref36.theme;
  return theme.colors.lightComplimentary;
}, errorMessageEntrance);
var ChartCanvas = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].canvas.withConfig({
  displayName: "Sandbox__ChartCanvas",
  componentId: "sc-1yhnmvq-7"
})([""]);
var CodeColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Sandbox__CodeColumn",
  componentId: "sc-1yhnmvq-8"
})(["width:100%;padding:16px;height:100%;@media (min-width:1280px){width:40%;height:100%;.code-mirror-override,.code-mirror-override .CodeMirror{height:100%;}}"]);

function Sandbox(props) {
  var _this = this;

  var theme = props.theme;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_lessons__WEBPACK_IMPORTED_MODULE_5__["default"][0]),
      activeLesson = _useState[0],
      setActiveLesson = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_lessons__WEBPACK_IMPORTED_MODULE_5__["default"][0].script),
      script = _useState2[0],
      setScript = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      scriptError = _useState3[0],
      setScriptError = _useState3[1];

  var canvasColumnRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0, 0]),
      dimensions = _useState4[0],
      setDimensions = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setScript(activeLesson.script);
  }, [activeLesson]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function runScript() {
      var canvasWidth = canvasRef.current.width;
      var canvasHeight = canvasRef.current.height;
      var ctx = canvasRef.current.getContext('2d');
      var Vector2 = mr_ringer__WEBPACK_IMPORTED_MODULE_4__["Vector2"];
      var gridDimension = '2d';
      var gridLength = 100;

      function getPoint(x, y) {
        if (gridDimension === '2d') {
          var gridPixelsPerWideUnit = canvasWidth / gridLength;
          var canvasX = x * gridPixelsPerWideUnit + canvasWidth / 2;
          var gridPixelsPerTallUnit = canvasHeight / gridLength;
          var canvasY = canvasHeight - y * gridPixelsPerTallUnit - canvasHeight / 2;
          return {
            x: canvasX,
            y: canvasY
          };
        }
      }

      function lineStyle() {
        var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : theme.colors.light;
        var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        ctx.strokeStyle = color;
        ctx.lineWidth = "".concat(width, "px");
      }

      function grid(dimension, length) {
        gridDimension = dimension;
        gridLength = length;

        if (dimension === '2d') {
          lineStyle();
          var origin = getPoint(0, 0);
          var top = getPoint(0, gridLength);
          var bottom = getPoint(0, -gridLength);
          var left = getPoint(-gridLength, 0);
          var right = getPoint(gridLength, 0);
          ctx.moveTo(top.x, top.y);
          ctx.lineTo(bottom.x, bottom.y);
          ctx.moveTo(left.x, left.y);
          ctx.lineTo(right.x, right.y);
          ctx.stroke();
        }
      }

      function arrow(fromX, fromY, toX, toY) {
        var from = getPoint(fromX, fromY);
        var to = getPoint(toX, toY);
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      }

      try {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        eval(script);
        setScriptError(null);
      } catch (error) {
        console.error(error);
        setScriptError(error.message);
      }
    }

    if (!canvasRef.current || !script) {
      return;
    }

    runScript();
  }, [canvasRef.current, script].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dimensions)));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!canvasRef.current || !canvasColumnRef.current) {
      return;
    }

    function resizeCanvas() {
      canvasRef.current.width = canvasColumnRef.current.getBoundingClientRect().width - 16;
      canvasRef.current.height = canvasColumnRef.current.getBoundingClientRect().height - 32;
      setDimensions([canvasRef.current.width, canvasRef.current.height]);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return function () {
      return window.removeEventListener('resize', resizeCanvas);
    };
  }, [canvasRef.current, canvasColumnRef.current]);
  var codeMirrorOptions = {
    theme: 'nord',
    lineNumbers: true,
    lineWrapping: true
  };

  if (modeLoaded) {
    codeMirrorOptions.mode = 'javascript';
  }

  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 5
    }
  }, __jsx(LessonsColumn, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 7
    }
  }, __jsx(LessonsColumnHeader, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 9
    }
  }, "Lessons"), __jsx(LessonsColumnSubheader, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 9
    }
  }, "Click a lesson to learn more about the topic."), _lessons__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (item, index) {
    return __jsx("span", {
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 11
      }
    }, __jsx(LessonTitle, {
      isActive: activeLesson.id === item.id,
      onClick: function onClick() {
        return setActiveLesson(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 13
      }
    }, index + 1, ". ", item.title));
  })), __jsx(ChartColumn, {
    ref: canvasColumnRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 7
    }
  }, __jsx(ChartCanvas, {
    ref: canvasRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 9
    }
  }), scriptError && __jsx(ErrorMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 25
    }
  }, scriptError)), __jsx(CodeColumn, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 7
    }
  }, __jsx(react_codemirror2__WEBPACK_IMPORTED_MODULE_3__["Controlled"], {
    className: "code-mirror-override",
    value: script,
    options: codeMirrorOptions,
    onBeforeChange: function onBeforeChange(editor, data, value) {
      return setScript(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(Sandbox));

/***/ })

})
//# sourceMappingURL=index.js.09f7d1e79e82cb0a1c5f.hot-update.js.map