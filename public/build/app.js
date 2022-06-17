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
        if (contentBdd != "[]") {
          setContentBdd(JSON.parse(body));
        } else {
          setContentBdd("");
        }
      });
    }
  }, [searchTxt]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "form-group"
  }, "dfgsdfgd", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VhcmNoYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFNlYXJjaGJhciBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoYmFyLmpzeCc7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG5yb290LnJlbmRlciggXG4gICAgPFNlYXJjaGJhciAvPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpe1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBjYXJkLWl0ZW0tYm9keVwiPlxuICAgICAgICAgICAgPHRpbWUgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj57cHJvcHMuZGF0YS5kYXRlT2ZFdmVudH08L3RpbWU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWQtaXRlbS1ib2R5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPntwcm9wcy5kYXRhLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCI+e3Byb3BzLmRhdGEuY2l0eX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IGxoLTEgcC0zXCI+e3Byb3BzLmRhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgXG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCIvLyBDaGFyZ2VtZW50IGRlcyBkw6lwZW5kYW5jZXMgKGxpYnJhaXJpZSBSZWFjdCBpY2kpXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5cbmZ1bmN0aW9uIFNlYXJjaGJhcigpIHtcblxuICAgIGNvbnN0IFtjb250ZW50QmRkLCBzZXRDb250ZW50QmRkXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2VhcmNoVHh0LCBzZXRTZWFyY2hUeHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIFxuICAgIGZ1bmN0aW9uIGNoYW5nZVRleHQoZXZlbnQpe1xuICAgICAgc2V0U2VhcmNoVHh0KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9ICcvZGF0YSc7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYoc2VhcmNoVHh0ICE9IFwiXCIpe1xuICAgICAgICBmZXRjaCh1cmwrJy8nK3NlYXJjaFR4dClcbiAgICAgICAgICAudGhlbihodHRwUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZS5qc29uKClcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKGJvZHkgPT4ge1xuICAgICAgICAgICAgLy8gb24gdXRpbGlzZSBsZSBKU09OLnBhcnNlIHBvdXIgZm9yY2VyIGxlIFwidHJ1Y1wiXG4gICAgICAgICAgICBpZihjb250ZW50QmRkICE9IFwiW11cIil7XG4gICAgICAgICAgICAgIHNldENvbnRlbnRCZGQoSlNPTi5wYXJzZShib2R5KSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgc2V0Q29udGVudEJkZChcIlwiKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgfSwgW3NlYXJjaFR4dF0pXG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIGRmZ3NkZmdkXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlVGV4dH0gdmFsdWU9e3NlYXJjaFR4dH0gY2xhc3NOYW1lID1cImZvcm0tY29udHJvbCBib3JkZXIgYm9yZGVyLWRhbmdlciBzaGFkb3cgcC0zIG1iLTUgYmctd2hpdGUgcm91bmRlZFwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciB1biDDqXbDqG5lbWVudFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgIHsvKiBNb24gw6l2w6huZW1lbnQgcmVjaGVyY2jDqSBlc3QgOiB7c2VhcmNoVHh0fSAqL31cbiAgICAgICAgICAgICAgPHNlY3Rpb24gPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgY29udGVudEJkZC5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYXJkIGtleT17aX0gZGF0YT17ZWxlbWVudH0gLz5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYmFyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiU2VhcmNoYmFyIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiQ2FyZCIsInByb3BzIiwiZGF0YSIsImRhdGVPZkV2ZW50IiwidGl0bGUiLCJjaXR5IiwiZGVzY3JpcHRpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbnRlbnRCZGQiLCJzZXRDb250ZW50QmRkIiwic2VhcmNoVHh0Iiwic2V0U2VhcmNoVHh0IiwiY2hhbmdlVGV4dCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiaHR0cFJlc3BvbnNlIiwianNvbiIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJtYXAiLCJlbGVtZW50IiwiaSJdLCJzb3VyY2VSb290IjoiIn0=