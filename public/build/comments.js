(self["webpackChunk"] = self["webpackChunk"] || []).push([["comments"],{

/***/ "./assets/comments.js":
/*!****************************!*\
  !*** ./assets/comments.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function CommentCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "d-flex flex-column card-item-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", {
    className: "text-start"
  }, props.data.name, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, props.data.date.date.substring(0, 16)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-start chat-conversation-text-wrapper d-flex lh-1 p-3"
  }, props.data.text));
}

/* harmony default export */ __webpack_exports__["default"] = (CommentCard);

/***/ }),

/***/ "./assets/components/Comments.jsx":
/*!****************************************!*\
  !*** ./assets/components/Comments.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _CommentCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CommentCard */ "./assets/components/CommentCard.jsx");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Chargement des dépendances (librairie React ici)



function Comments() {
  // récuperer les commentaires existants pour les afficher ensuite
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]),
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
    FD.append('user', userId); // Vider input

    myForm.value = ""; //Set up request

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


  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    getComments();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("section", null, contentBdd.map(function (element, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_CommentCard__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: i,
      data: element
    });
  }), userId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("form", {
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    class: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    type: "textarea",
    className: "form-control",
    id: "comment",
    rows: "3",
    placeholder: "Ecrivez un message ..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    class: "btn send-btn",
    type: "button",
    onClick: sendData,
    id: "post"
  }, "Envoyer"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ }),

/***/ "./node_modules/core-js/internals/array-last-index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_m-5adc5c"], function() { return __webpack_exec__("./assets/comments.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDMUJXO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsV0FBVztBQUMzRCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7O0FDVEEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxpR0FBa0M7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQXNFO0FBQzFFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWxhc3QtaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5sYXN0LWluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL2NvbXBvbmVudHMvQ29tbWVudHMnO1xyXG5cclxuXHJcbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XHJcbnJvb3QucmVuZGVyKCBcclxuICAgIDxDb21tZW50cyAvPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudENhcmQocHJvcHMpe1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGNhcmQtaXRlbS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPntwcm9wcy5kYXRhLm5hbWV9IDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+eyhwcm9wcy5kYXRhLmRhdGUuZGF0ZSkuc3Vic3RyaW5nKDAsMTYpfTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdGFydCBjaGF0LWNvbnZlcnNhdGlvbi10ZXh0LXdyYXBwZXIgZC1mbGV4IGxoLTEgcC0zXCI+e3Byb3BzLmRhdGEudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRleHQtc3RhcnQgbGgtMSBwLTNcIj57cHJvcHMuZGF0YVtkYXRlXX08L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Q2FyZDsiLCIvLyBDaGFyZ2VtZW50IGRlcyBkw6lwZW5kYW5jZXMgKGxpYnJhaXJpZSBSZWFjdCBpY2kpXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudENhcmQgZnJvbSAnLi9Db21tZW50Q2FyZCc7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50cygpIHtcclxuXHJcbiAgICAvLyByw6ljdXBlcmVyIGxlcyBjb21tZW50YWlyZXMgZXhpc3RhbnRzIHBvdXIgbGVzIGFmZmljaGVyIGVuc3VpdGVcclxuICAgIGNvbnN0IFtjb250ZW50QmRkLCBzZXRDb250ZW50QmRkXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyBvbiByw6ljdXBlcmUgbGEgdG90YWxpdMOpIGRlIG5vdHJlIHVybCBwb3VyIHBvdXZvaXIgZW5zdWl0ZSByw6ljdXDDqXJlciBsJ2lkIHF1aSBlc3QgZW4gZmluIGQndXJsXHJcbiAgICBsZXQgVXJsPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICAvLyBvbiByw6ljdXDDqHJlIGwnaWQgcXVpIGVzdCBlbiBmaW4gZCd1cmwgYXZlYyBsYSBtZXRob2RlIHNsaWNlIGV0IGxhc3RJbmRleE9mXHJcbiAgICBsZXQgaWQ9KFVybC5zbGljZShVcmwubGFzdEluZGV4T2YoXCIvXCIpKzEpKTtcclxuXHJcbiAgICAvLyBvbiBpbml0aWFsaXNlIGxhIHZhcmlhYmxlIHVzZXJJZFxyXG4gICAgbGV0IHVzZXJJZDtcclxuXHJcbiAgICAvLyBvbiBhZmZlY3RlIGEgdXNlcklEIGxlcyBkb25uw6llcyBkZSBsJ3V0aWxpc2F0ZXVyIHF1aSDDqXRhaXQgY2FjaMOpIGRhbnMgdW4gZGF0YXNldCBhdSBwcsOpYWxhYmxlIGVuIGh0bWxcclxuICAgIHVzZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKS5kYXRhc2V0LnVzZXI7XHJcblxyXG4gICAgY29uc3QgdXJsID0gJy9jb21tZW50cy8nKyBpZDtcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YSgpe1xyXG5cclxuICAgICAgY29uc3QgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIGxldCBGRCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBcclxuICAgICAgdmFyIG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XHJcblxyXG4gICAgICAvL3B1c2ggZGF0YSBpbnRvIG9iamVjdFxyXG4gICAgICBGRC5hcHBlbmQoJ2NvbW1lbnQnLCAgbXlGb3JtLnZhbHVlKTtcclxuICAgICAgRkQuYXBwZW5kKCd1c2VyJywgIHVzZXJJZCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBWaWRlciBpbnB1dFxyXG4gICAgICBteUZvcm0udmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgLy9TZXQgdXAgcmVxdWVzdFxyXG4gICAgICBYSFIub3BlbignUE9TVCcsICcvY29tbWVudHMvJysgaWQgKyAnL3Bvc3QnKTtcclxuICAgICAgWEhSLnNlbmQoRkQpO1xyXG5cclxuICAgICAgWEhSLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coWEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGdldENvbW1lbnRzKCk7XHJcbiAgICAgIH07XHJcbiAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGdldENvbW1lbnRzKCl7ICAgICAgIFxyXG4gICAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKGh0dHBSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZS5qc29uKClcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oYm9keSA9PiB7XHJcbiAgICAgICAgLy8gb24gdXRpbGlzZSBsZSBKU09OLnBhcnNlIHBvdXIgZm9yY2VyIGxhIGNvbXByw6loZW5zaW9uIGR1IG5hdmlnYXRldXJcclxuICAgICAgICBzZXRDb250ZW50QmRkKEpTT04ucGFyc2UoYm9keSkpOyAgIFxyXG4gICAgICB9KSAgXHJcbiAgICAgfVxyXG5cclxuICAgIC8vIGZldGNoIHBvdXIgcsOpY3VwZXIgbGVzIGRvbm7DqXMgcXUnaWwgeSBhIGTDqWrDoCBkYW5zIGxhIEJERFxyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldENvbW1lbnRzKCk7XHJcbiAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPD4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uID5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRCZGQubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbW1lbnRDYXJkIGtleT17aX0gZGF0YT17ZWxlbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHt1c2VySWQgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kID0gXCJwb3N0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSBcInRleHRhcmVhXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjb21tZW50XCIgcm93cz1cIjNcIiAgcGxhY2Vob2xkZXI9XCJFY3JpdmV6IHVuIG1lc3NhZ2UgLi4uXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzcz1cImJ0biBzZW5kLWJ0blwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17c2VuZERhdGF9IGlkPSdwb3N0Jz5FbnZveWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzOyIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzLXgvbm8tYXJyYXktcHJvdG90eXBlLWxhc3RpbmRleG9mIC0tIHNhZmUgKi9cbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciAkbGFzdEluZGV4T2YgPSBbXS5sYXN0SW5kZXhPZjtcbnZhciBORUdBVElWRV9aRVJPID0gISEkbGFzdEluZGV4T2YgJiYgMSAvIFsxXS5sYXN0SW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdsYXN0SW5kZXhPZicpO1xudmFyIEZPUkNFRCA9IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0Q7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2ZgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubGFzdGluZGV4b2Zcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IEBbKi0xXSAqLykge1xuICAvLyBjb252ZXJ0IC0wIHRvICswXG4gIGlmIChORUdBVElWRV9aRVJPKSByZXR1cm4gYXBwbHkoJGxhc3RJbmRleE9mLCB0aGlzLCBhcmd1bWVudHMpIHx8IDA7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xuICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gIHZhciBpbmRleCA9IGxlbmd0aCAtIDE7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkgaW5kZXggPSBtaW4oaW5kZXgsIHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnRzWzFdKSk7XG4gIGlmIChpbmRleCA8IDApIGluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gIGZvciAoO2luZGV4ID49IDA7IGluZGV4LS0pIGlmIChpbmRleCBpbiBPICYmIE9baW5kZXhdID09PSBzZWFyY2hFbGVtZW50KSByZXR1cm4gaW5kZXggfHwgMDtcbiAgcmV0dXJuIC0xO1xufSA6ICRsYXN0SW5kZXhPZjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGxhc3RJbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWxhc3QtaW5kZXgtb2YnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5sYXN0aW5kZXhvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tYXJyYXktcHJvdG90eXBlLWxhc3RpbmRleG9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBsYXN0SW5kZXhPZiAhPT0gW10ubGFzdEluZGV4T2YgfSwge1xuICBsYXN0SW5kZXhPZjogbGFzdEluZGV4T2Zcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJDb21tZW50cyIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIkNvbW1lbnRDYXJkIiwicHJvcHMiLCJkYXRhIiwibmFtZSIsImRhdGUiLCJzdWJzdHJpbmciLCJ0ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb250ZW50QmRkIiwic2V0Q29udGVudEJkZCIsIlVybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpZCIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJ1c2VySWQiLCJkYXRhc2V0IiwidXNlciIsInVybCIsInNlbmREYXRhIiwiWEhSIiwiWE1MSHR0cFJlcXVlc3QiLCJGRCIsIkZvcm1EYXRhIiwibXlGb3JtIiwiYXBwZW5kIiwidmFsdWUiLCJvcGVuIiwic2VuZCIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZVRleHQiLCJnZXRDb21tZW50cyIsImZldGNoIiwidGhlbiIsImh0dHBSZXNwb25zZSIsImpzb24iLCJib2R5IiwiSlNPTiIsInBhcnNlIiwibWFwIiwiZWxlbWVudCIsImkiXSwic291cmNlUm9vdCI6IiJ9