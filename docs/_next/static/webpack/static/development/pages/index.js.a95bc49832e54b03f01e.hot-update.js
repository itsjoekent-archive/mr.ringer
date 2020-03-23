webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lessons.js":
/*!************************!*\
  !*** ./src/lessons.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var lessons = [{
  id: 'adding-vectors',
  title: 'Adding vectors',
  script: "// Create a new Vector2\nconst vector = Vector2(10, 10);\n\ngrid('2d', 30);\n\n// Plot the vector on the grid\nlineStyle('#003e7b', 2);\narrow(0, 0, vector.x, vector.y);\n\n// Add a vector\nconst updatedVector = Vector2.add(Vector2(10, 10), vector);\n\n// Plot the updated vector, originating from the previous.\nlineStyle('#007b7b', 2);\narrow(vector.x, vector.y, updatedVector.x, updatedVector.y);\n"
}, {
  id: 'subtracting-vectors',
  title: 'Subtracting vectors',
  script: "\n\n    "
}, {
  id: 'scaling-vectors',
  title: 'Scaling vectors',
  script: "\n\n    "
}, {
  id: 'normalizing-vectors',
  title: 'Normalizing vectors',
  script: "\n\n    "
}];
/* harmony default export */ __webpack_exports__["default"] = (lessons);

/***/ })

})
//# sourceMappingURL=index.js.a95bc49832e54b03f01e.hot-update.js.map