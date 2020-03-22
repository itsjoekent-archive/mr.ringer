webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var markup = "\n  # Overview\n\n  Mr. Ringer is a Javascript math library with a simple API for complex math.\n\n  This library was created to aide the development of a 3D video game, after realizing I didn\u2019t understand the math required to make a 3D game from scratch and I needed to learn it. As such this library has a bias towards supporting what is necessary for that project. But this code is [open source](https://github.com/itsjoekent/mr.ringer) and anyone can contribute towards it.\n\n  This package is named after my high school trigonometry teacher, Mr Ringer, who told myself and the rest of the class to go to the beach instead of taking the final exam for his class (I ended up getting a 46% on that test).\n\n  This page serves as not only written documentation for how to use the library, but as a virtual chalkboard for dummies like me that don\u2019t understand what some of these equations are actually used for and what they do.\n\n  # Installation\n\n  You can install mr.ringer from either npm or use it as a standalone script on the page.\n\n  ```\n  $ npm install mr.ringer\n\n  <script src=\"https://unpkg.com/mr.ringer/dist/mr.ringer.js\"></script>\n  ```\n\n  # Vector2\n\n  ## add()\n\n  # Vector3\n";
var lines = markup.split('\n').map(function (line, index) {
  return {
    line: line.trirm(),
    index: index
  };
});

function buildSectionFromLine(line) {
  return {
    id: line.replace('# ', '').toLowerCase(),
    title: line.replace('# ', '')
  };
}

var sections = lines.filter(function (_ref) {
  var line = _ref.line;
  return line.startsWitth('# ');
}).map(function (_ref2) {
  var line = _ref2.line,
      index = _ref2.index;
  return _objectSpread({
    index: index,
    line: line
  }, buildSectionFromLine(line));
});
sections.forEach(function (section, index) {
  var start = index;
  var end = (sections[index + 1] || {}).index || lines.length;
  var subSections = lines.slice(start, end).filter(function (_ref3) {
    var line = _ref3.line;
    return line.startsWitth('## ');
  }).map(function (_ref4) {
    var line = _ref4.line,
        index = _ref4.index;
    return _objectSpread({
      index: index,
      line: line
    }, buildSectionFromLine(line));
  });
  sections[index].subSections = subSections;
});
var content = {
  markup: markup,
  sections: sections
}; // const content = {
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

/* harmony default export */ __webpack_exports__["default"] = (content);

/***/ })

})
//# sourceMappingURL=index.js.ffdf7fba36554618aeaf.hot-update.js.map