(self["webpackChunk"] = self["webpackChunk"] || []).push([["comments"],{

/***/ "./assets/comments.js":
/*!****************************!*\
  !*** ./assets/comments.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Comments */ "./assets/components/Comments.jsx");




var root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Comments__WEBPACK_IMPORTED_MODULE_3__["default"], null));

/***/ }),

/***/ "./assets/components/CommentCard.jsx":
/*!*******************************************!*\
  !*** ./assets/components/CommentCard.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function CommentCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "d-flex flex-column card-item-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "cad-item-body-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", {
    className: "text-start"
  }, props.data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-start lh-1 p-3"
  }, props.data.text)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentCard);

/***/ }),

/***/ "./assets/components/Comments.jsx":
/*!****************************************!*\
  !*** ./assets/components/Comments.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _CommentCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CommentCard */ "./assets/components/CommentCard.jsx");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Chargement des dépendances (librairie React ici)



function Comments() {
  // const [contentBdd, setContentBdd] = useState([]);
  // const [searchTxt, setSearchTxt] = useState("");
  // récuperer les commentaires existants pour les afficher ensuite
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      contentBdd = _useState2[0],
      setContentBdd = _useState2[1]; // attend un nouveau commentaire


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      commentTxt = _useState4[0],
      setCommentTxt = _useState4[1];

  var Url = document.location.pathname;
  var id = Url.slice(Url.lastIndexOf("/") + 1);
  console.log(id);

  function changeText(event) {
    setCommentTxt(event.currentTarget.value);
  }

  var url = '/comments/' + id; // fetch pour récuper les donnés qu'il y a déjà dans la BDD

  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    fetch(url).then(function (httpResponse) {
      return httpResponse.json();
    }).then(function (body) {
      // on utilise le JSON.parse pour forcer le "truc"
      setContentBdd(JSON.parse(body));
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("section", null, contentBdd.map(function (element, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_CommentCard__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: i,
      data: element
    });
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);

/***/ }),

/***/ "./node_modules/core-js/internals/array-last-index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es-x/no-array-prototype-lastindexof -- safe */
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = lengthOfArrayLike(O);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.last-index-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.last-index-of.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "./node_modules/core-js/internals/array-last-index-of.js");

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es-x/no-array-prototype-lastindexof -- required for testing
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-e4b339"], () => (__webpack_exec__("./assets/comments.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsUUFBUSxZQUFZO0FBQ3BCO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7O0FDMUJXO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsV0FBVztBQUMzRCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7O0FDVEEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxpR0FBa0M7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQXNFO0FBQzFFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWxhc3QtaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5sYXN0LWluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL2NvbXBvbmVudHMvQ29tbWVudHMnO1xyXG5cclxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcclxucm9vdC5yZW5kZXIoIFxyXG4gICAgPENvbW1lbnRzIC8+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50Q2FyZChwcm9wcyl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gY2FyZC1pdGVtLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FkLWl0ZW0tYm9keS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPntwcm9wcy5kYXRhLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IGxoLTEgcC0zXCI+e3Byb3BzLmRhdGEudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRleHQtc3RhcnQgbGgtMSBwLTNcIj57cHJvcHMuZGF0YVtkYXRlXX08L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Q2FyZDsiLCIvLyBDaGFyZ2VtZW50IGRlcyBkw6lwZW5kYW5jZXMgKGxpYnJhaXJpZSBSZWFjdCBpY2kpXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudENhcmQgZnJvbSAnLi9Db21tZW50Q2FyZCc7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50cygpIHtcclxuXHJcbiAgICAvLyBjb25zdCBbY29udGVudEJkZCwgc2V0Q29udGVudEJkZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAvLyBjb25zdCBbc2VhcmNoVHh0LCBzZXRTZWFyY2hUeHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgLy8gcsOpY3VwZXJlciBsZXMgY29tbWVudGFpcmVzIGV4aXN0YW50cyBwb3VyIGxlcyBhZmZpY2hlciBlbnN1aXRlXHJcbiAgICBjb25zdCBbY29udGVudEJkZCwgc2V0Q29udGVudEJkZF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gYXR0ZW5kIHVuIG5vdXZlYXUgY29tbWVudGFpcmVcclxuICAgIGNvbnN0IFtjb21tZW50VHh0LCBzZXRDb21tZW50VHh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgICBsZXQgVXJsPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGxldCBpZD0oVXJsLnNsaWNlKFVybC5sYXN0SW5kZXhPZihcIi9cIikrMSkpO1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VUZXh0KGV2ZW50KXtcclxuICAgICAgc2V0Q29tbWVudFR4dChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cmwgPSAnL2NvbW1lbnRzLycraWQ7XHJcblxyXG5cclxuICAgIC8vIGZldGNoIHBvdXIgcsOpY3VwZXIgbGVzIGRvbm7DqXMgcXUnaWwgeSBhIGTDqWrDoCBkYW5zIGxhIEJERFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgXHJcbiAgICAgIGZldGNoKHVybClcclxuICAgICAgICAudGhlbihodHRwUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGJvZHkgPT4ge1xyXG4gICAgICAgICAgLy8gb24gdXRpbGlzZSBsZSBKU09OLnBhcnNlIHBvdXIgZm9yY2VyIGxlIFwidHJ1Y1wiXHJcbiAgICAgICAgICBzZXRDb250ZW50QmRkKEpTT04ucGFyc2UoYm9keSkpOyAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VUZXh0fSAgY2xhc3NOYW1lID1cImZvcm0tY29udHJvbCBib3JkZXIgYm9yZGVyLWRhbmdlciBzaGFkb3cgcC0zIG1iLTUgYmctd2hpdGUgcm91bmRlZFwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciB1biDDqXbDqG5lbWVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgey8qIE1vbiDDqXbDqG5lbWVudCByZWNoZXJjaMOpIGVzdCA6IHtzZWFyY2hUeHR9ICovfVxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRCZGQubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb21tZW50Q2FyZCBrZXk9e2l9IGRhdGE9e2VsZW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzOyIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzLXgvbm8tYXJyYXktcHJvdG90eXBlLWxhc3RpbmRleG9mIC0tIHNhZmUgKi9cbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciAkbGFzdEluZGV4T2YgPSBbXS5sYXN0SW5kZXhPZjtcbnZhciBORUdBVElWRV9aRVJPID0gISEkbGFzdEluZGV4T2YgJiYgMSAvIFsxXS5sYXN0SW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdsYXN0SW5kZXhPZicpO1xudmFyIEZPUkNFRCA9IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0Q7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2ZgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubGFzdGluZGV4b2Zcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IEBbKi0xXSAqLykge1xuICAvLyBjb252ZXJ0IC0wIHRvICswXG4gIGlmIChORUdBVElWRV9aRVJPKSByZXR1cm4gYXBwbHkoJGxhc3RJbmRleE9mLCB0aGlzLCBhcmd1bWVudHMpIHx8IDA7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gIHZhciBpbmRleCA9IGxlbmd0aCAtIDE7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgaW5kZXggPSBtaW4oaW5kZXgsIHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnRzWzFdKSk7XG4gIGlmIChpbmRleCA8IDApIGluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gIGZvciAoO2luZGV4ID49IDA7IGluZGV4LS0pIGlmIChpbmRleCBpbiBPICYmIE9baW5kZXhdID09PSBzZWFyY2hFbGVtZW50KSByZXR1cm4gaW5kZXggfHwgMDtcbiAgcmV0dXJuIC0xO1xufSA6ICRsYXN0SW5kZXhPZjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGxhc3RJbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWxhc3QtaW5kZXgtb2YnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5sYXN0aW5kZXhvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tYXJyYXktcHJvdG90eXBlLWxhc3RpbmRleG9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBsYXN0SW5kZXhPZiAhPT0gW10ubGFzdEluZGV4T2YgfSwge1xuICBsYXN0SW5kZXhPZjogbGFzdEluZGV4T2Zcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJDb21tZW50cyIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIkNvbW1lbnRDYXJkIiwicHJvcHMiLCJkYXRhIiwibmFtZSIsInRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbnRlbnRCZGQiLCJzZXRDb250ZW50QmRkIiwiY29tbWVudFR4dCIsInNldENvbW1lbnRUeHQiLCJVcmwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaWQiLCJzbGljZSIsImxhc3RJbmRleE9mIiwiY29uc29sZSIsImxvZyIsImNoYW5nZVRleHQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInVybCIsImZldGNoIiwidGhlbiIsImh0dHBSZXNwb25zZSIsImpzb24iLCJib2R5IiwiSlNPTiIsInBhcnNlIiwibWFwIiwiZWxlbWVudCIsImkiXSwic291cmNlUm9vdCI6IiJ9