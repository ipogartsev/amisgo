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
    className: "d-flex justify-content-end",
    datetime: "2018-07-03T20:00:00"
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

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

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

  var url = '/data/' + searchTxt;
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    fetch(url).then(function (httpResponse) {
      return httpResponse.json();
    }).then(function (body) {
      // on utilise le JSON.parse pour forcer le "truc"
      setContentBdd(JSON.parse(body));

      if (body == null) {
        [], _readOnlyError("setContentBdd");
      } // console.log(body)

    });
  }, [searchTxt]); // if le body = 0 alors le setContentBdd est = []

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    "class": "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("input", {
    onChange: changeText,
    value: searchTxt,
    "class": "form-control border border-danger shadow p-3 mb-5 bg-white rounded",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNRyxJQUFJLEdBQUdGLHdEQUFBLENBQW9CSSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBcEIsQ0FBYjtBQUNBSCxJQUFJLENBQUNJLE1BQUwsZUFDSSwyREFBQyxpRUFBRCxPQURKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRUEsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQW9CO0VBRWhCLG9CQUVJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0k7SUFBTSxTQUFTLEVBQUMsNEJBQWhCO0lBQTZDLFFBQVEsRUFBQztFQUF0RCxHQUE2RUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFdBQXhGLENBREosZUFFUTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUksU0FBUyxFQUFDO0VBQWQsR0FBNEJGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxLQUF2QyxDQURKLGVBRUk7SUFBSSxTQUFTLEVBQUM7RUFBZCxHQUE0QkgsS0FBSyxDQUFDQyxJQUFOLENBQVdHLElBQXZDLENBRkosZUFHSTtJQUFHLFNBQVMsRUFBQztFQUFiLEdBQW9DSixLQUFLLENBQUNDLElBQU4sQ0FBV0ksV0FBL0MsQ0FISixDQUZSLENBRko7QUFhSDs7QUFDRCxpRUFBZU4sSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBOztBQUVBLFNBQVNOLFNBQVQsR0FBcUI7RUFFakIsZ0JBQW9DYyxnREFBUSxDQUFDLEVBQUQsQ0FBNUM7RUFBQTtFQUFBLElBQU9DLFVBQVA7RUFBQSxJQUFtQkMsYUFBbkI7O0VBQ0EsaUJBQWtDRixnREFBUSxDQUFDLEVBQUQsQ0FBMUM7RUFBQTtFQUFBLElBQU9HLFNBQVA7RUFBQSxJQUFrQkMsWUFBbEI7O0VBRUEsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7SUFDeEJGLFlBQVksQ0FBQ0UsS0FBSyxDQUFDQyxhQUFOLENBQW9CQyxLQUFyQixDQUFaO0VBQ0Q7O0VBR0QsSUFBTUMsR0FBRyxHQUFHLFdBQVdOLFNBQXZCO0VBRUFKLGlEQUFTLENBQUMsWUFBTTtJQUNaVyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1EsVUFBQUMsWUFBWSxFQUFJO01BQ3BCLE9BQU9BLFlBQVksQ0FBQ0MsSUFBYixFQUFQO0lBQ0QsQ0FISCxFQUlHRixJQUpILENBSVEsVUFBQUcsSUFBSSxFQUFJO01BQ2Q7TUFDSVosYUFBYSxDQUFDYSxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsSUFBWCxDQUFELENBQWI7O01BRUEsSUFBR0EsSUFBSSxJQUFJLElBQVgsRUFBZ0I7UUFDSSxFQUFoQjtNQUNILENBTlMsQ0FRVjs7SUFDSCxDQWJIO0VBY0MsQ0FmSSxFQWVGLENBQUNYLFNBQUQsQ0FmRSxDQUFULENBWmlCLENBNkJiOztFQUVBLG9CQUNJLHlJQUVJO0lBQUssU0FBTTtFQUFYLGdCQUNJO0lBQU8sUUFBUSxFQUFFRSxVQUFqQjtJQUE2QixLQUFLLEVBQUVGLFNBQXBDO0lBQStDLFNBQU8sb0VBQXREO0lBQTJILFdBQVcsRUFBQztFQUF2SSxFQURKLENBRkosZUFNRSx1RUFORixlQVNFLDZFQUVJRixVQUFVLENBQUNnQixHQUFYLENBQWUsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWLEVBQWdCO0lBQzdCLG9CQUFPLDREQUFDLDhDQUFEO01BQU0sR0FBRyxFQUFFQSxDQUFYO01BQWMsSUFBSSxFQUFFRDtJQUFwQixFQUFQO0VBQ0QsQ0FGRCxDQUZKLENBVEYsQ0FESjtBQW1CQzs7QUFFVCxpRUFBZWhDLFNBQWY7Ozs7Ozs7Ozs7O0FDeERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWFyY2hiYXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFNlYXJjaGJhciBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoYmFyLmpzeCc7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG5yb290LnJlbmRlciggXG4gICAgPFNlYXJjaGJhciAvPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpe1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBjYXJkLWl0ZW0tYm9keVwiPlxuICAgICAgICAgICAgPHRpbWUgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIiBkYXRldGltZT1cIjIwMTgtMDctMDNUMjA6MDA6MDBcIj57cHJvcHMuZGF0YS5kYXRlT2ZFdmVudH08L3RpbWU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWQtaXRlbS1ib2R5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPntwcm9wcy5kYXRhLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCI+e3Byb3BzLmRhdGEuY2l0eX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IGxoLTEgcC0zXCI+e3Byb3BzLmRhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgXG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCIvLyBDaGFyZ2VtZW50IGRlcyBkw6lwZW5kYW5jZXMgKGxpYnJhaXJpZSBSZWFjdCBpY2kpXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5cbmZ1bmN0aW9uIFNlYXJjaGJhcigpIHtcblxuICAgIGNvbnN0IFtjb250ZW50QmRkLCBzZXRDb250ZW50QmRkXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2VhcmNoVHh0LCBzZXRTZWFyY2hUeHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIFxuICAgIGZ1bmN0aW9uIGNoYW5nZVRleHQoZXZlbnQpe1xuICAgICAgc2V0U2VhcmNoVHh0KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIH1cbiAgXG5cbiAgICBjb25zdCB1cmwgPSAnL2RhdGEvJyArIHNlYXJjaFR4dDtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAudGhlbihodHRwUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZS5qc29uKClcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKGJvZHkgPT4ge1xuICAgICAgICAgIC8vIG9uIHV0aWxpc2UgbGUgSlNPTi5wYXJzZSBwb3VyIGZvcmNlciBsZSBcInRydWNcIlxuICAgICAgICAgICAgICBzZXRDb250ZW50QmRkKEpTT04ucGFyc2UoYm9keSkpO1xuXG4gICAgICAgICAgICAgIGlmKGJvZHkgPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICBzZXRDb250ZW50QmRkID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJvZHkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgW3NlYXJjaFR4dF0pXG5cbiAgICAgICAgLy8gaWYgbGUgYm9keSA9IDAgYWxvcnMgbGUgc2V0Q29udGVudEJkZCBlc3QgPSBbXVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17Y2hhbmdlVGV4dH0gdmFsdWU9e3NlYXJjaFR4dH0gY2xhc3MgPVwiZm9ybS1jb250cm9sIGJvcmRlciBib3JkZXItZGFuZ2VyIHNoYWRvdyBwLTMgbWItNSBiZy13aGl0ZSByb3VuZGVkXCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyIHVuIMOpdsOobmVtZW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgey8qIE1vbiDDqXbDqG5lbWVudCByZWNoZXJjaMOpIGVzdCA6IHtzZWFyY2hUeHR9ICovfVxuICAgICAgICAgICAgICA8c2VjdGlvbiA+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY29udGVudEJkZC5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYXJkIGtleT17aX0gZGF0YT17ZWxlbWVudH0gLz5cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGJhcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIlNlYXJjaGJhciIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIkNhcmQiLCJwcm9wcyIsImRhdGEiLCJkYXRlT2ZFdmVudCIsInRpdGxlIiwiY2l0eSIsImRlc2NyaXB0aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb250ZW50QmRkIiwic2V0Q29udGVudEJkZCIsInNlYXJjaFR4dCIsInNldFNlYXJjaFR4dCIsImNoYW5nZVRleHQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInVybCIsImZldGNoIiwidGhlbiIsImh0dHBSZXNwb25zZSIsImpzb24iLCJib2R5IiwiSlNPTiIsInBhcnNlIiwibWFwIiwiZWxlbWVudCIsImkiXSwic291cmNlUm9vdCI6IiJ9