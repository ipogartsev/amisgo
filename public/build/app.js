"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function Card(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "d-flex flex-column card-item-body",
    style: {
      'margin-left': "0px"
    }
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

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./assets/components/Searchbar.jsx":
/*!*****************************************!*\
  !*** ./assets/components/Searchbar.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Card */ "./assets/components/Card.jsx");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Chargement des dépendances (librairie React ici)



function Searchbar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      contentBdd = _useState2[0],
      setContentBdd = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      searchTxt = _useState4[0],
      setSearchTxt = _useState4[1];

  function changeText(event) {
    setSearchTxt(event.currentTarget.value);
  }

  var url = '/data';
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    if (searchTxt != "") {
      fetch(url + '/' + searchTxt).then(function (httpResponse) {
        return httpResponse.json();
      }).then(function (body) {
        // on utilise le JSON.parse pour forcer et lui dire que c'est du JSON.
        setContentBdd(JSON.parse(body));
      });
    } else {
      setContentBdd([]);
    }
  }, [searchTxt]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
    onChange: changeText,
    value: searchTxt,
    className: "form-control border border-danger shadow p-3 mb-5 bg-white rounded",
    placeholder: "Rechercher un \xE9v\xE8nement"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("section", null, contentBdd.map(function (element, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: i,
      data: element
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Searchbar);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_m-5adc5c"], function() { return __webpack_exec__("./assets/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hiYXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hiYXIuanN4JztcclxuXHJcbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XHJcbnJvb3QucmVuZGVyKCBcclxuICAgIDxTZWFyY2hiYXIgLz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENhcmQocHJvcHMpe1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGNhcmQtaXRlbS1ib2R5XCIgc3R5bGU9e3snbWFyZ2luLWxlZnQnOlwiMHB4XCJ9fT5cclxuICAgICAgICAgICAgPHRpbWUgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj57cHJvcHMuZGF0YS5kYXRlT2ZFdmVudH08L3RpbWU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZC1pdGVtLWJvZHktY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIj57cHJvcHMuZGF0YS50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCI+e3Byb3BzLmRhdGEuY2l0eX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RhcnQgbGgtMSBwLTNcIj57cHJvcHMuZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiLy8gQ2hhcmdlbWVudCBkZXMgZMOpcGVuZGFuY2VzIChsaWJyYWlyaWUgUmVhY3QgaWNpKVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaGJhcigpIHtcclxuXHJcbiAgICBjb25zdCBbY29udGVudEJkZCwgc2V0Q29udGVudEJkZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VhcmNoVHh0LCBzZXRTZWFyY2hUeHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VUZXh0KGV2ZW50KXtcclxuICAgICAgc2V0U2VhcmNoVHh0KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVybCA9ICcvZGF0YSc7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYoc2VhcmNoVHh0ICE9IFwiXCIpe1xyXG4gICAgICAgIGZldGNoKHVybCsnLycrc2VhcmNoVHh0KVxyXG4gICAgICAgICAgLnRoZW4oaHR0cFJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihib2R5ID0+IHtcclxuICAgICAgICAgICAgLy8gb24gdXRpbGlzZSBsZSBKU09OLnBhcnNlIHBvdXIgZm9yY2VyIGV0IGx1aSBkaXJlIHF1ZSBjJ2VzdCBkdSBKU09OLlxyXG4gICAgICAgICAgICBzZXRDb250ZW50QmRkKEpTT04ucGFyc2UoYm9keSkpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHNldENvbnRlbnRCZGQoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9LCBbc2VhcmNoVHh0XSlcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlVGV4dH0gdmFsdWU9e3NlYXJjaFR4dH0gY2xhc3NOYW1lID1cImZvcm0tY29udHJvbCBib3JkZXIgYm9yZGVyLWRhbmdlciBzaGFkb3cgcC0zIG1iLTUgYmctd2hpdGUgcm91bmRlZFwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciB1biDDqXbDqG5lbWVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICB7LyogTW9uIMOpdsOobmVtZW50IHJlY2hlcmNow6kgZXN0IDoge3NlYXJjaFR4dH0gKi99XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24gPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgY29udGVudEJkZC5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENhcmQga2V5PXtpfSBkYXRhPXtlbGVtZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hiYXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJTZWFyY2hiYXIiLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJDYXJkIiwicHJvcHMiLCJkYXRhIiwiZGF0ZU9mRXZlbnQiLCJ0aXRsZSIsImNpdHkiLCJkZXNjcmlwdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29udGVudEJkZCIsInNldENvbnRlbnRCZGQiLCJzZWFyY2hUeHQiLCJzZXRTZWFyY2hUeHQiLCJjaGFuZ2VUZXh0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJodHRwUmVzcG9uc2UiLCJqc29uIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsIm1hcCIsImVsZW1lbnQiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==