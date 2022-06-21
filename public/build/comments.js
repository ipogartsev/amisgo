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
      setContentBdd = _useState2[1]; // on récupere la totalité de notre url pour pouvoir ensuite récupérer l'id qui est en fin d'url


  var Url = document.location.pathname; // on récupère l'id qui est en fin d'url avec la methode slice et lastIndexOf

  var id = Url.slice(Url.lastIndexOf("/") + 1); // on initialise la variable userId

  var userId; // on affecte a userID les données de l'utilisateur qui était caché dans un dataset au préalable en html

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
      getComments();
    };
  }

  function getComments() {
    fetch(url).then(function (httpResponse) {
      return httpResponse.json();
    }).then(function (body) {
      // on utilise le JSON.parse pour forcer la compréhension du navigateur
      setContentBdd(JSON.parse(body));
    });
  } // fetch pour récuper les donnés qu'il y a déjà dans la BDD


  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    getComments();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBa0M7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQXNFO0FBQzFFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWxhc3QtaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5sYXN0LWluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL2NvbXBvbmVudHMvQ29tbWVudHMnO1xyXG5cclxuXHJcbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XHJcbnJvb3QucmVuZGVyKCBcclxuICAgIDxDb21tZW50cyAvPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudENhcmQocHJvcHMpe1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGNhcmQtaXRlbS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZC1pdGVtLWJvZHktY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIj57cHJvcHMuZGF0YS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdGFydCBsaC0xIHAtM1wiPntwcm9wcy5kYXRhLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IGxoLTEgcC0zXCI+e3Byb3BzLmRhdGFbZGF0ZV19PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudENhcmQ7IiwiLy8gQ2hhcmdlbWVudCBkZXMgZMOpcGVuZGFuY2VzIChsaWJyYWlyaWUgUmVhY3QgaWNpKVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbW1lbnRDYXJkIGZyb20gJy4vQ29tbWVudENhcmQnO1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudHMoKSB7XHJcblxyXG4gICAgLy8gcsOpY3VwZXJlciBsZXMgY29tbWVudGFpcmVzIGV4aXN0YW50cyBwb3VyIGxlcyBhZmZpY2hlciBlbnN1aXRlXHJcbiAgICBjb25zdCBbY29udGVudEJkZCwgc2V0Q29udGVudEJkZF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gb24gcsOpY3VwZXJlIGxhIHRvdGFsaXTDqSBkZSBub3RyZSB1cmwgcG91ciBwb3V2b2lyIGVuc3VpdGUgcsOpY3Vww6lyZXIgbCdpZCBxdWkgZXN0IGVuIGZpbiBkJ3VybFxyXG4gICAgbGV0IFVybD0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XHJcblxyXG4gICAgLy8gb24gcsOpY3Vww6hyZSBsJ2lkIHF1aSBlc3QgZW4gZmluIGQndXJsIGF2ZWMgbGEgbWV0aG9kZSBzbGljZSBldCBsYXN0SW5kZXhPZlxyXG4gICAgbGV0IGlkPShVcmwuc2xpY2UoVXJsLmxhc3RJbmRleE9mKFwiL1wiKSsxKSk7XHJcblxyXG4gICAgLy8gb24gaW5pdGlhbGlzZSBsYSB2YXJpYWJsZSB1c2VySWRcclxuICAgIGxldCB1c2VySWQ7XHJcblxyXG4gICAgLy8gb24gYWZmZWN0ZSBhIHVzZXJJRCBsZXMgZG9ubsOpZXMgZGUgbCd1dGlsaXNhdGV1ciBxdWkgw6l0YWl0IGNhY2jDqSBkYW5zIHVuIGRhdGFzZXQgYXUgcHLDqWFsYWJsZSBlbiBodG1sXHJcbiAgICB1c2VySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikuZGF0YXNldC51c2VyO1xyXG5cclxuICAgIGNvbnN0IHVybCA9ICcvY29tbWVudHMvJysgaWQ7XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZERhdGEoKXtcclxuXHJcbiAgICAgIGNvbnN0IFhIUiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICBsZXQgRkQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgXHJcbiAgICAgIHZhciBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcpO1xyXG5cclxuICAgICAgLy9wdXNoIGRhdGEgaW50byBvYmplY3RcclxuICAgICAgRkQuYXBwZW5kKCdjb21tZW50JywgIG15Rm9ybS52YWx1ZSk7XHJcbiAgICAgIEZELmFwcGVuZCgndXNlcicsICB1c2VySWQpO1xyXG4gICAgICBcclxuXHJcbiAgICAgIC8vU2V0IHVwIHJlcXVlc3RcclxuICAgICAgWEhSLm9wZW4oJ1BPU1QnLCAnL2NvbW1lbnRzLycrIGlkICsgJy9wb3N0Jyk7XHJcbiAgICAgIFhIUi5zZW5kKEZEKTtcclxuXHJcbiAgICAgIFhIUi5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBnZXRDb21tZW50cygpO1xyXG4gICAgICB9O1xyXG4gICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBnZXRDb21tZW50cygpeyAgICAgICBcclxuICAgICAgZmV0Y2godXJsKVxyXG4gICAgICAudGhlbihodHRwUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHJldHVybiBodHRwUmVzcG9uc2UuanNvbigpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGJvZHkgPT4ge1xyXG4gICAgICAgIC8vIG9uIHV0aWxpc2UgbGUgSlNPTi5wYXJzZSBwb3VyIGZvcmNlciBsYSBjb21wcsOpaGVuc2lvbiBkdSBuYXZpZ2F0ZXVyXHJcbiAgICAgICAgc2V0Q29udGVudEJkZChKU09OLnBhcnNlKGJvZHkpKTsgICBcclxuICAgICAgfSkgIFxyXG4gICAgIH1cclxuXHJcbiAgICAvLyBmZXRjaCBwb3VyIHLDqWN1cGVyIGxlcyBkb25uw6lzIHF1J2lsIHkgYSBkw6lqw6AgZGFucyBsYSBCRERcclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDb21tZW50cygpO1xyXG4gICAgICB9LCBbXSlcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDw+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiA+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50QmRkLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb21tZW50Q2FyZCBrZXk9e2l9IGRhdGE9e2VsZW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7dXNlcklkICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZCA9IFwicG9zdFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29tbWVudFwiPkVjcmlyZSB1biBub3V2ZWF1IGNvbW1lbnRhaXJlIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0gXCJ0ZXh0YXJlYVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiY29tbWVudFwiIHJvd3M9XCIzXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e3NlbmREYXRhfSBpZD0ncG9zdCc+RW52b3llcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzOyIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzLXgvbm8tYXJyYXktcHJvdG90eXBlLWxhc3RpbmRleG9mIC0tIHNhZmUgKi9cbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciAkbGFzdEluZGV4T2YgPSBbXS5sYXN0SW5kZXhPZjtcbnZhciBORUdBVElWRV9aRVJPID0gISEkbGFzdEluZGV4T2YgJiYgMSAvIFsxXS5sYXN0SW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdsYXN0SW5kZXhPZicpO1xudmFyIEZPUkNFRCA9IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0Q7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2ZgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubGFzdGluZGV4b2Zcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IEBbKi0xXSAqLykge1xuICAvLyBjb252ZXJ0IC0wIHRvICswXG4gIGlmIChORUdBVElWRV9aRVJPKSByZXR1cm4gYXBwbHkoJGxhc3RJbmRleE9mLCB0aGlzLCBhcmd1bWVudHMpIHx8IDA7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gIHZhciBpbmRleCA9IGxlbmd0aCAtIDE7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgaW5kZXggPSBtaW4oaW5kZXgsIHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnRzWzFdKSk7XG4gIGlmIChpbmRleCA8IDApIGluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gIGZvciAoO2luZGV4ID49IDA7IGluZGV4LS0pIGlmIChpbmRleCBpbiBPICYmIE9baW5kZXhdID09PSBzZWFyY2hFbGVtZW50KSByZXR1cm4gaW5kZXggfHwgMDtcbiAgcmV0dXJuIC0xO1xufSA6ICRsYXN0SW5kZXhPZjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGxhc3RJbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWxhc3QtaW5kZXgtb2YnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5sYXN0aW5kZXhvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tYXJyYXktcHJvdG90eXBlLWxhc3RpbmRleG9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBsYXN0SW5kZXhPZiAhPT0gW10ubGFzdEluZGV4T2YgfSwge1xuICBsYXN0SW5kZXhPZjogbGFzdEluZGV4T2Zcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJDb21tZW50cyIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIkNvbW1lbnRDYXJkIiwicHJvcHMiLCJkYXRhIiwibmFtZSIsInRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbnRlbnRCZGQiLCJzZXRDb250ZW50QmRkIiwiVXJsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlkIiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsInVzZXJJZCIsImRhdGFzZXQiLCJ1c2VyIiwidXJsIiwic2VuZERhdGEiLCJYSFIiLCJYTUxIdHRwUmVxdWVzdCIsIkZEIiwiRm9ybURhdGEiLCJteUZvcm0iLCJhcHBlbmQiLCJ2YWx1ZSIsIm9wZW4iLCJzZW5kIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlVGV4dCIsImdldENvbW1lbnRzIiwiZmV0Y2giLCJ0aGVuIiwiaHR0cFJlc3BvbnNlIiwianNvbiIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJtYXAiLCJlbGVtZW50IiwiaSJdLCJzb3VyY2VSb290IjoiIn0=