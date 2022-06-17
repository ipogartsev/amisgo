"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_Searchbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Searchbar.jsx */ "./assets/components/Searchbar.jsx");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)




var root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Searchbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));

/***/ }),

/***/ "./assets/components/Card.jsx":
/*!************************************!*\
  !*** ./assets/components/Card.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function Card(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "d-flex flex-column card-item-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("time", {
    className: "d-flex justify-content-end"
  }, props.data.dateOfEvent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "cad-item-body-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h4", {
    className: "text-start"
  }, props.data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h5", {
    className: "text-start"
  }, props.data.city), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "text-start lh-1 p-3"
  }, props.data.description)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./assets/components/Searchbar.jsx":
/*!*****************************************!*\
  !*** ./assets/components/Searchbar.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Card */ "./assets/components/Card.jsx");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Chargement des dépendances (librairie React ici)



function Searchbar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      contentBdd = _useState2[0],
      setContentBdd = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      searchTxt = _useState4[0],
      setSearchTxt = _useState4[1];

  function changeText(event) {
    setSearchTxt(event.currentTarget.value);
  }

  var url = '/data';
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    if (searchTxt != "") {
      fetch(url + '/' + searchTxt).then(function (httpResponse) {
        return httpResponse.json();
      }).then(function (body) {
        // on utilise le JSON.parse pour forcer le "truc"
        setContentBdd(JSON.parse(body));
      });
    } else {
      setContentBdd([]);
    }
  }, [searchTxt]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    onChange: changeText,
    value: searchTxt,
    className: "form-control border border-danger shadow p-3 mb-5 bg-white rounded",
    placeholder: "Rechercher un \xE9v\xE8nement"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("section", null, contentBdd.map(function (element, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: i,
      data: element
    });
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Searchbar);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-e4b339"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2NvbXBvbmVudHMvQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBTZWFyY2hiYXIgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaGJhci5qc3gnO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xucm9vdC5yZW5kZXIoIFxuICAgIDxTZWFyY2hiYXIgLz5cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBDYXJkKHByb3BzKXtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gY2FyZC1pdGVtLWJvZHlcIj5cbiAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+e3Byb3BzLmRhdGEuZGF0ZU9mRXZlbnR9PC90aW1lPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FkLWl0ZW0tYm9keS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIj57cHJvcHMuZGF0YS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPntwcm9wcy5kYXRhLmNpdHl9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdGFydCBsaC0xIHAtM1wiPntwcm9wcy5kYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIFxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiLy8gQ2hhcmdlbWVudCBkZXMgZMOpcGVuZGFuY2VzIChsaWJyYWlyaWUgUmVhY3QgaWNpKVxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuXG5mdW5jdGlvbiBTZWFyY2hiYXIoKSB7XG5cbiAgICBjb25zdCBbY29udGVudEJkZCwgc2V0Q29udGVudEJkZF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NlYXJjaFR4dCwgc2V0U2VhcmNoVHh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBcbiAgICBmdW5jdGlvbiBjaGFuZ2VUZXh0KGV2ZW50KXtcbiAgICAgIHNldFNlYXJjaFR4dChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSAnL2RhdGEnO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmKHNlYXJjaFR4dCAhPSBcIlwiKXtcbiAgICAgICAgZmV0Y2godXJsKycvJytzZWFyY2hUeHQpXG4gICAgICAgICAgLnRoZW4oaHR0cFJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBodHRwUmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihib2R5ID0+IHtcbiAgICAgICAgICAgIC8vIG9uIHV0aWxpc2UgbGUgSlNPTi5wYXJzZSBwb3VyIGZvcmNlciBsZSBcInRydWNcIlxuICAgICAgICAgICAgc2V0Q29udGVudEJkZChKU09OLnBhcnNlKGJvZHkpKTsgICAgICAgICAgICBcbiAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzZXRDb250ZW50QmRkKFtdKTtcbiAgICAgICAgfVxuICAgICAgICB9LCBbc2VhcmNoVHh0XSlcblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2NoYW5nZVRleHR9IHZhbHVlPXtzZWFyY2hUeHR9IGNsYXNzTmFtZSA9XCJmb3JtLWNvbnRyb2wgYm9yZGVyIGJvcmRlci1kYW5nZXIgc2hhZG93IHAtMyBtYi01IGJnLXdoaXRlIHJvdW5kZWRcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXIgdW4gw6l2w6huZW1lbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICB7LyogTW9uIMOpdsOobmVtZW50IHJlY2hlcmNow6kgZXN0IDoge3NlYXJjaFR4dH0gKi99XG4gICAgICAgICAgICAgIDxzZWN0aW9uID5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRCZGQubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2FyZCBrZXk9e2l9IGRhdGE9e2VsZW1lbnR9IC8+XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGJhcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIlNlYXJjaGJhciIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIkNhcmQiLCJwcm9wcyIsImRhdGEiLCJkYXRlT2ZFdmVudCIsInRpdGxlIiwiY2l0eSIsImRlc2NyaXB0aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb250ZW50QmRkIiwic2V0Q29udGVudEJkZCIsInNlYXJjaFR4dCIsInNldFNlYXJjaFR4dCIsImNoYW5nZVRleHQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInVybCIsImZldGNoIiwidGhlbiIsImh0dHBSZXNwb25zZSIsImpzb24iLCJib2R5IiwiSlNPTiIsInBhcnNlIiwibWFwIiwiZWxlbWVudCIsImkiXSwic291cmNlUm9vdCI6IiJ9