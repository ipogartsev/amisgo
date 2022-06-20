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
        // on utilise le JSON.parse pour forcer et lui dire que c'est du JSON.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hiYXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFNlYXJjaGJhciBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoYmFyLmpzeCc7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG5yb290LnJlbmRlciggXG4gICAgPFNlYXJjaGJhciAvPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpe1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBjYXJkLWl0ZW0tYm9keVwiIHN0eWxlPXt7J21hcmdpbi1sZWZ0JzpcIjBweFwifX0+XG4gICAgICAgICAgICA8dGltZSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPntwcm9wcy5kYXRhLmRhdGVPZkV2ZW50fTwvdGltZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZC1pdGVtLWJvZHktY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCI+e3Byb3BzLmRhdGEudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIj57cHJvcHMuZGF0YS5jaXR5fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3RhcnQgbGgtMSBwLTNcIj57cHJvcHMuZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICBcbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsIi8vIENoYXJnZW1lbnQgZGVzIGTDqXBlbmRhbmNlcyAobGlicmFpcmllIFJlYWN0IGljaSlcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcblxuZnVuY3Rpb24gU2VhcmNoYmFyKCkge1xuXG4gICAgY29uc3QgW2NvbnRlbnRCZGQsIHNldENvbnRlbnRCZGRdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzZWFyY2hUeHQsIHNldFNlYXJjaFR4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgXG4gICAgZnVuY3Rpb24gY2hhbmdlVGV4dChldmVudCl7XG4gICAgICBzZXRTZWFyY2hUeHQoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gJy9kYXRhJztcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZihzZWFyY2hUeHQgIT0gXCJcIil7XG4gICAgICAgIGZldGNoKHVybCsnLycrc2VhcmNoVHh0KVxuICAgICAgICAgIC50aGVuKGh0dHBSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaHR0cFJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oYm9keSA9PiB7XG4gICAgICAgICAgICAvLyBvbiB1dGlsaXNlIGxlIEpTT04ucGFyc2UgcG91ciBmb3JjZXIgbGUgXCJ0cnVjXCJcbiAgICAgICAgICAgIHNldENvbnRlbnRCZGQoSlNPTi5wYXJzZShib2R5KSk7ICAgICAgICAgICAgXG4gICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc2V0Q29udGVudEJkZChbXSk7XG4gICAgICAgIH1cbiAgICAgICAgfSwgW3NlYXJjaFR4dF0pXG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtjaGFuZ2VUZXh0fSB2YWx1ZT17c2VhcmNoVHh0fSBjbGFzc05hbWUgPVwiZm9ybS1jb250cm9sIGJvcmRlciBib3JkZXItZGFuZ2VyIHNoYWRvdyBwLTMgbWItNSBiZy13aGl0ZSByb3VuZGVkXCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyIHVuIMOpdsOobmVtZW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgey8qIE1vbiDDqXbDqG5lbWVudCByZWNoZXJjaMOpIGVzdCA6IHtzZWFyY2hUeHR9ICovfVxuICAgICAgICAgICAgICA8c2VjdGlvbiA+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBjb250ZW50QmRkLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENhcmQga2V5PXtpfSBkYXRhPXtlbGVtZW50fSAvPlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hiYXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJTZWFyY2hiYXIiLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJDYXJkIiwicHJvcHMiLCJkYXRhIiwiZGF0ZU9mRXZlbnQiLCJ0aXRsZSIsImNpdHkiLCJkZXNjcmlwdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29udGVudEJkZCIsInNldENvbnRlbnRCZGQiLCJzZWFyY2hUeHQiLCJzZXRTZWFyY2hUeHQiLCJjaGFuZ2VUZXh0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJodHRwUmVzcG9uc2UiLCJqc29uIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsIm1hcCIsImVsZW1lbnQiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==
