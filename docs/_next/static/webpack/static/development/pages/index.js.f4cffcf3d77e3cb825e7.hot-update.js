webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeId */ "./src/makeId.js");

var markup = "\n  # Overview\n\n  Mr. Ringer is a Javascript math library with a simple API for complex math.\n\n  This library was created to aide the development of a 3D video game, after realizing I didn\u2019t understand the math required to make a 3D game from scratch and I needed to learn it. As such this library has a bias towards supporting what is necessary for that project. But this code is [open source](https://github.com/itsjoekent/mr.ringer) and anyone can contribute towards it.\n\n  This package is named after my high school trigonometry teacher, Mr Ringer, who told myself and the rest of the class to go to the beach instead of taking the final exam for his class (I ended up getting a 46% on that test).\n\n  This page serves as not only written documentation for how to use the library, but as a virtual chalkboard for dummies like me that don\u2019t understand what some of these equations are actually used for and what they do.\n\n  # Installation\n\n  You can install mr.ringer from either npm or use it as a standalone script on the page.\n\n  ```\n  $ npm install mr.ringer\n\n  <script src=\"https://unpkg.com/mr.ringer/dist/mr.ringer.js\"></script>\n  ```\n\n  # Vector2\n\n  ## add()\n\n  # Vector3\n";
var lines = markup.split('\n').map(function (line, index) {
  return {
    line: line.trim(),
    index: index
  };
});
var sections = lines.filter(function (_ref) {
  var line = _ref.line;
  return line.startsWith('# ');
}).map(function (_ref2) {
  var line = _ref2.line,
      index = _ref2.index;
  return {
    index: index,
    id: Object(_makeId__WEBPACK_IMPORTED_MODULE_0__["default"])(line.replace('#', '')),
    title: line.replace('#', '').trim()
  };
});
sections.forEach(function (section, index) {
  var start = section.index;
  var end = (sections[index + 1] || {}).index || lines.length;
  var subSections = lines.slice(start, end).filter(function (_ref3) {
    var line = _ref3.line;
    return line.startsWith('## ');
  }).map(function (_ref4) {
    var line = _ref4.line,
        index = _ref4.index;
    return {
      index: index,
      id: Object(_makeId__WEBPACK_IMPORTED_MODULE_0__["default"])(line.replace('##', '')),
      title: line.replace('##', '').trim()
    };
  });
  sections[index].subSections = subSections;
});
var content = {
  markup: markup,
  sections: sections
};
console.log(content);
/* harmony default export */ __webpack_exports__["default"] = (content);

/***/ })

})
//# sourceMappingURL=index.js.f4cffcf3d77e3cb825e7.hot-update.js.map