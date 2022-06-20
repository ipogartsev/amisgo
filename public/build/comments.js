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
  // récuperer les commentaires existants pour les afficher ensuite
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      contentBdd = _useState2[0],
      setContentBdd = _useState2[1];

  var Url = document.location.pathname;
  var id = Url.slice(Url.lastIndexOf("/") + 1);
  var userId;
  userId = document.getElementById("root").dataset.user;
  var url = '/comments/' + id;

  function sendData() {
    var XHR = new XMLHttpRequest();
    var FD = new FormData();
    var myForm = document.getElementById('comment'); //push data into object

    FD.append('comment', myForm.value);
    FD.append('user', userId); //Set up request

    XHR.open('POST', '/comments/' + id + '/post');
    XHR.send(FD);

    XHR.onload = function () {
      console.log(XHR.responseText);
      showComments();
    };
  }

  function showComments() {
    fetch(url).then(function (httpResponse) {
      return httpResponse.json();
    }).then(function (body) {
      // on utilise le JSON.parse pour forcer le "truc"
      setContentBdd(JSON.parse(body));
    });
  } // fetch pour récuper les donnés qu'il y a déjà dans la BDD


  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    showComments();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("section", null, contentBdd.map(function (element, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_CommentCard__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: i,
      data: element
    });
  }), userId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("form", {
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("label", {
    "for": "comment"
  }, "Ecrire un nouveau commentaire :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("input", {
    type: "textarea",
    className: "form-control",
    id: "comment",
    rows: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("button", {
    type: "button",
    onClick: sendData,
    id: "post"
  }, "Envoyer")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7Ozs7Ozs7Ozs7Ozs7QUNSRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29tbWVudHMuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1sYXN0LWluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubGFzdC1pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vY29tcG9uZW50cy9Db21tZW50cyc7XG5cblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbnJvb3QucmVuZGVyKCBcbiAgICA8Q29tbWVudHMgLz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDb21tZW50Q2FyZChwcm9wcyl7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGNhcmQtaXRlbS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWQtaXRlbS1ib2R5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPntwcm9wcy5kYXRhLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdGFydCBsaC0xIHAtM1wiPntwcm9wcy5kYXRhLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1zdGFydCBsaC0xIHAtM1wiPntwcm9wcy5kYXRhW2RhdGVdfTwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgXG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudENhcmQ7IiwiLy8gQ2hhcmdlbWVudCBkZXMgZMOpcGVuZGFuY2VzIChsaWJyYWlyaWUgUmVhY3QgaWNpKVxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tbWVudENhcmQgZnJvbSAnLi9Db21tZW50Q2FyZCc7XG5cbmZ1bmN0aW9uIENvbW1lbnRzKCkge1xuXG4gICAgLy8gcsOpY3VwZXJlciBsZXMgY29tbWVudGFpcmVzIGV4aXN0YW50cyBwb3VyIGxlcyBhZmZpY2hlciBlbnN1aXRlXG4gICAgY29uc3QgW2NvbnRlbnRCZGQsIHNldENvbnRlbnRCZGRdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgbGV0IFVybD0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgbGV0IGlkPShVcmwuc2xpY2UoVXJsLmxhc3RJbmRleE9mKFwiL1wiKSsxKSk7XG4gICAgbGV0IHVzZXJJZDtcblxuICAgIHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKS5kYXRhc2V0LnVzZXI7XG5cbiAgICBjb25zdCB1cmwgPSAnL2NvbW1lbnRzLycrIGlkO1xuXG4gICAgZnVuY3Rpb24gc2VuZERhdGEoKXtcblxuICAgICAgY29uc3QgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBsZXQgRkQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIFxuICAgICAgdmFyIG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XG5cbiAgICAgIC8vcHVzaCBkYXRhIGludG8gb2JqZWN0XG4gICAgICBGRC5hcHBlbmQoJ2NvbW1lbnQnLCAgbXlGb3JtLnZhbHVlKTtcbiAgICAgIEZELmFwcGVuZCgndXNlcicsICB1c2VySWQpO1xuICAgICAgXG5cbiAgICAgIC8vU2V0IHVwIHJlcXVlc3RcbiAgICAgIFhIUi5vcGVuKCdQT1NUJywgJy9jb21tZW50cy8nKyBpZCArICcvcG9zdCcpO1xuICAgICAgWEhSLnNlbmQoRkQpO1xuXG4gICAgICBYSFIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFhIUi5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgc2hvd0NvbW1lbnRzKCk7XG4gICAgICB9O1xuICAgfVxuICBcbiAgICBmdW5jdGlvbiBzaG93Q29tbWVudHMoKXsgXG4gICAgICAgIFxuICAgICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4oaHR0cFJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbihib2R5ID0+IHtcbiAgICAgICAgLy8gb24gdXRpbGlzZSBsZSBKU09OLnBhcnNlIHBvdXIgZm9yY2VyIGxlIFwidHJ1Y1wiXG4gICAgICAgIHNldENvbnRlbnRCZGQoSlNPTi5wYXJzZShib2R5KSk7ICAgXG4gICAgICB9KSAgXG4gICAgIH1cblxuICAgIC8vIGZldGNoIHBvdXIgcsOpY3VwZXIgbGVzIGRvbm7DqXMgcXUnaWwgeSBhIGTDqWrDoCBkYW5zIGxhIEJERFxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2hvd0NvbW1lbnRzKCk7XG4gICAgICB9LCBbXSlcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDw+ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEJkZC5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbW1lbnRDYXJkIGtleT17aX0gZGF0YT17ZWxlbWVudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7dXNlcklkICYmIFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2QgPSBcInBvc3RcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29tbWVudFwiPkVjcmlyZSB1biBub3V2ZWF1IGNvbW1lbnRhaXJlIDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9IFwidGV4dGFyZWFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbW1lbnRcIiByb3dzPVwiM1wiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17c2VuZERhdGF9IGlkPSdwb3N0Jz5FbnZveWVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzOyIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzLXgvbm8tYXJyYXktcHJvdG90eXBlLWxhc3RpbmRleG9mIC0tIHNhZmUgKi9cbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciAkbGFzdEluZGV4T2YgPSBbXS5sYXN0SW5kZXhPZjtcbnZhciBORUdBVElWRV9aRVJPID0gISEkbGFzdEluZGV4T2YgJiYgMSAvIFsxXS5sYXN0SW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdsYXN0SW5kZXhPZicpO1xudmFyIEZPUkNFRCA9IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0Q7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2ZgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubGFzdGluZGV4b2Zcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IEBbKi0xXSAqLykge1xuICAvLyBjb252ZXJ0IC0wIHRvICswXG4gIGlmIChORUdBVElWRV9aRVJPKSByZXR1cm4gYXBwbHkoJGxhc3RJbmRleE9mLCB0aGlzLCBhcmd1bWVudHMpIHx8IDA7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gIHZhciBpbmRleCA9IGxlbmd0aCAtIDE7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgaW5kZXggPSBtaW4oaW5kZXgsIHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnRzWzFdKSk7XG4gIGlmIChpbmRleCA8IDApIGluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gIGZvciAoO2luZGV4ID49IDA7IGluZGV4LS0pIGlmIChpbmRleCBpbiBPICYmIE9baW5kZXhdID09PSBzZWFyY2hFbGVtZW50KSByZXR1cm4gaW5kZXggfHwgMDtcbiAgcmV0dXJuIC0xO1xufSA6ICRsYXN0SW5kZXhPZjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGxhc3RJbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWxhc3QtaW5kZXgtb2YnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5sYXN0aW5kZXhvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tYXJyYXktcHJvdG90eXBlLWxhc3RpbmRleG9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBsYXN0SW5kZXhPZiAhPT0gW10ubGFzdEluZGV4T2YgfSwge1xuICBsYXN0SW5kZXhPZjogbGFzdEluZGV4T2Zcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJDb21tZW50cyIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIkNvbW1lbnRDYXJkIiwicHJvcHMiLCJkYXRhIiwibmFtZSIsInRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbnRlbnRCZGQiLCJzZXRDb250ZW50QmRkIiwiVXJsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlkIiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsInVzZXJJZCIsImRhdGFzZXQiLCJ1c2VyIiwidXJsIiwic2VuZERhdGEiLCJYSFIiLCJYTUxIdHRwUmVxdWVzdCIsIkZEIiwiRm9ybURhdGEiLCJteUZvcm0iLCJhcHBlbmQiLCJ2YWx1ZSIsIm9wZW4iLCJzZW5kIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlVGV4dCIsInNob3dDb21tZW50cyIsImZldGNoIiwidGhlbiIsImh0dHBSZXNwb25zZSIsImpzb24iLCJib2R5IiwiSlNPTiIsInBhcnNlIiwibWFwIiwiZWxlbWVudCIsImkiXSwic291cmNlUm9vdCI6IiJ9