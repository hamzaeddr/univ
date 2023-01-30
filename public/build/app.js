(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;
__webpack_require__.g.axios = axios;
__webpack_require__.g.Swal = swal; // require('@popperjs/core');

__webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");

__webpack_require__(/*! ./components/includes/nicescroll */ "./assets/components/includes/nicescroll.js");

var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

__webpack_require__.g.moment = moment;

__webpack_require__(/*! ./components/includes/stisla */ "./assets/components/includes/stisla.js");

__webpack_require__(/*! ./components/includes/datatables/core */ "./assets/components/includes/datatables/core.js");

__webpack_require__(/*! ./components/includes/datatables/datatable-bs4 */ "./assets/components/includes/datatables/datatable-bs4.js");

__webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");

__webpack_require__(/*! select2/dist/css/select2.css */ "./node_modules/select2/dist/css/select2.css");

__webpack_require__(/*! fullcalendar */ "./node_modules/fullcalendar/dist/fullcalendar.js");

__webpack_require__(/*! fullcalendar/dist/fullcalendar.css */ "./node_modules/fullcalendar/dist/fullcalendar.css");

__webpack_require__(/*! fullcalendar/dist/locale/fr */ "./node_modules/fullcalendar/dist/locale/fr.js");

__webpack_require__(/*! ./components/script */ "./assets/components/script.js");

__webpack_require__(/*! ./components/custom */ "./assets/components/custom.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/components/custom.js":
/*!*************************************!*\
  !*** ./assets/components/custom.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */
var Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: function didOpen(toast) {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});
$(document).ready(function () {
  $(".password_change").on("click", function () {
    $("#password_modal").modal("show");
  });
  $("#password_modal #save_password_change").on("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              icon = $("#password_modal #save_password_change i");
              _context.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context.next = 7;
              return axios.post('/passwordchange', formData);

            case 7:
              request = _context.sent;
              response = request.data; // icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              // $('#password_modal #save')[0].reset();
              // $("#password_modal").modal("hide")

              window.location.href = "/logout";
              _context.next = 18;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              console.log(_context.t0, _context.t0.response);
              message = _context.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[3, 12]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./assets/components/includes/datatables/core.js":
/*!*******************************************************!*\
  !*** ./assets/components/includes/datatables/core.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/esnext.global-this.js */ "./node_modules/core-js/modules/esnext.global-this.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.array.reduce-right.js */ "./node_modules/core-js/modules/es.array.reduce-right.js");

__webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/*!
   Copyright 2008-2021 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.11.5
 ©2008-2021 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};

$jscomp.findInternal = function (l, z, A) {
  l instanceof String && (l = String(l));

  for (var q = l.length, E = 0; E < q; E++) {
    var P = l[E];
    if (z.call(A, P, E, l)) return {
      i: E,
      v: P
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (l, z, A) {
  if (l == Array.prototype || l == Object.prototype) return l;
  l[z] = A.value;
  return l;
};

$jscomp.getGlobal = function (l) {
  l = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, l, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g];

  for (var z = 0; z < l.length; ++z) {
    var A = l[z];
    if (A && A.Math == Math) return A;
  }

  throw Error("Cannot find global object");
};

$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === _typeof(Symbol("x"));
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";

var $jscomp$lookupPolyfilledValue = function $jscomp$lookupPolyfilledValue(l, z) {
  var A = $jscomp.propertyToPolyfillSymbol[z];
  if (null == A) return l[z];
  A = l[A];
  return void 0 !== A ? A : l[z];
};

$jscomp.polyfill = function (l, z, A, q) {
  z && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(l, z, A, q) : $jscomp.polyfillUnisolated(l, z, A, q));
};

$jscomp.polyfillUnisolated = function (l, z, A, q) {
  A = $jscomp.global;
  l = l.split(".");

  for (q = 0; q < l.length - 1; q++) {
    var E = l[q];
    if (!(E in A)) return;
    A = A[E];
  }

  l = l[l.length - 1];
  q = A[l];
  z = z(q);
  z != q && null != z && $jscomp.defineProperty(A, l, {
    configurable: !0,
    writable: !0,
    value: z
  });
};

$jscomp.polyfillIsolated = function (l, z, A, q) {
  var E = l.split(".");
  l = 1 === E.length;
  q = E[0];
  q = !l && q in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var P = 0; P < E.length - 1; P++) {
    var ma = E[P];
    if (!(ma in q)) return;
    q = q[ma];
  }

  E = E[E.length - 1];
  A = $jscomp.IS_SYMBOL_NATIVE && "es6" === A ? q[E] : null;
  z = z(A);
  null != z && (l ? $jscomp.defineProperty($jscomp.polyfills, E, {
    configurable: !0,
    writable: !0,
    value: z
  }) : z !== A && ($jscomp.propertyToPolyfillSymbol[E] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(E) : $jscomp.POLYFILL_PREFIX + E, E = $jscomp.propertyToPolyfillSymbol[E], $jscomp.defineProperty(q, E, {
    configurable: !0,
    writable: !0,
    value: z
  })));
};

$jscomp.polyfill("Array.prototype.find", function (l) {
  return l ? l : function (z, A) {
    return $jscomp.findInternal(this, z, A).v;
  };
}, "es6", "es3");

(function (l) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (z) {
    return l(z, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function (l, z, A, q) {
  function E(a) {
    var b,
        c,
        d = {};
    l.each(a, function (e, h) {
      (b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && (c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && E(a[e]));
    });
    a._hungarianMap = d;
  }

  function P(a, b, c) {
    a._hungarianMap || E(a);
    var d;
    l.each(b, function (e, h) {
      d = a._hungarianMap[e];
      d === q || !c && b[d] !== q || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), l.extend(!0, b[d], b[e]), P(a[d], b[d], c)) : b[d] = b[e]);
    });
  }

  function ma(a) {
    var b = u.defaults.oLanguage,
        c = b.sDecimal;
    c && Xa(c);

    if (a) {
      var d = a.sZeroRecords;
      !a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && X(a, a, "sZeroRecords", "sEmptyTable");
      !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && X(a, a, "sZeroRecords", "sLoadingRecords");
      a.sInfoThousands && (a.sThousands = a.sInfoThousands);
      (a = a.sDecimal) && c !== a && Xa(a);
    }
  }

  function zb(a) {
    S(a, "ordering", "bSort");
    S(a, "orderMulti", "bSortMulti");
    S(a, "orderClasses", "bSortClasses");
    S(a, "orderCellsTop", "bSortCellsTop");
    S(a, "order", "aaSorting");
    S(a, "orderFixed", "aaSortingFixed");
    S(a, "paging", "bPaginate");
    S(a, "pagingType", "sPaginationType");
    S(a, "pageLength", "iDisplayLength");
    S(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
    "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
    if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++) {
      a[b] && P(u.models.oSearch, a[b]);
    }
  }

  function Ab(a) {
    S(a, "orderable", "bSortable");
    S(a, "orderData", "aDataSort");
    S(a, "orderSequence", "asSorting");
    S(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    "number" !== typeof b || Array.isArray(b) || (a.aDataSort = [b]);
  }

  function Bb(a) {
    if (!u.__browser) {
      var b = {};
      u.__browser = b;
      var c = l("<div/>").css({
        position: "fixed",
        top: 0,
        left: -1 * l(z).scrollLeft(),
        height: 1,
        width: 1,
        overflow: "hidden"
      }).append(l("<div/>").css({
        position: "absolute",
        top: 1,
        left: 1,
        width: 100,
        overflow: "scroll"
      }).append(l("<div/>").css({
        width: "100%",
        height: 10
      }))).appendTo("body"),
          d = c.children(),
          e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove();
    }

    l.extend(a.oBrowser, u.__browser);
    a.oScroll.iBarWidth = u.__browser.barWidth;
  }

  function Cb(a, b, c, d, e, h) {
    var f = !1;

    if (c !== q) {
      var g = c;
      f = !0;
    }

    for (; d !== e;) {
      a.hasOwnProperty(d) && (g = f ? b(g, a[d], d, a) : a[d], f = !0, d += h);
    }

    return g;
  }

  function Ya(a, b) {
    var c = u.defaults.column,
        d = a.aoColumns.length;
    c = l.extend({}, u.models.oColumn, c, {
      nTh: b ? b : A.createElement("th"),
      sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
      aDataSort: c.aDataSort ? c.aDataSort : [d],
      mData: c.mData ? c.mData : d,
      idx: d
    });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = l.extend({}, u.models.oSearch, c[d]);
    Ga(a, d, l(b).data());
  }

  function Ga(a, b, c) {
    b = a.aoColumns[b];
    var d = a.oClasses,
        e = l(b.nTh);

    if (!b.sWidthOrig) {
      b.sWidthOrig = e.attr("width") || null;
      var h = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      h && (b.sWidthOrig = h[1]);
    }

    c !== q && null !== c && (Ab(c), P(u.defaults.column, c, !0), c.mDataProp === q || c.mData || (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), l.extend(b, c), X(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== q && (b.aDataSort = [c.iDataSort]), X(b, c, "aDataSort"));
    var f = b.mData,
        g = na(f),
        k = b.mRender ? na(b.mRender) : null;

    c = function c(m) {
      return "string" === typeof m && -1 !== m.indexOf("@");
    };

    b._bAttrSrc = l.isPlainObject(f) && (c(f.sort) || c(f.type) || c(f.filter));
    b._setter = null;

    b.fnGetData = function (m, n, p) {
      var t = g(m, n, q, p);
      return k && n ? k(t, n, m, p) : t;
    };

    b.fnSetData = function (m, n, p) {
      return ha(f)(m, n, p);
    };

    "number" !== typeof f && (a._rowReadObject = !0);
    a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
    a = -1 !== l.inArray("asc", b.asSorting);
    c = -1 !== l.inArray("desc", b.asSorting);
    b.bSortable && (a || c) ? a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI) : (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "");
  }

  function sa(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Za(a);

      for (var c = 0, d = b.length; c < d; c++) {
        b[c].nTh.style.width = b[c].sWidth;
      }
    }

    b = a.oScroll;
    "" === b.sY && "" === b.sX || Ha(a);
    F(a, null, "column-sizing", [a]);
  }

  function ta(a, b) {
    a = Ia(a, "bVisible");
    return "number" === typeof a[b] ? a[b] : null;
  }

  function ua(a, b) {
    a = Ia(a, "bVisible");
    b = l.inArray(b, a);
    return -1 !== b ? b : null;
  }

  function oa(a) {
    var b = 0;
    l.each(a.aoColumns, function (c, d) {
      d.bVisible && "none" !== l(d.nTh).css("display") && b++;
    });
    return b;
  }

  function Ia(a, b) {
    var c = [];
    l.map(a.aoColumns, function (d, e) {
      d[b] && c.push(e);
    });
    return c;
  }

  function $a(a) {
    var b = a.aoColumns,
        c = a.aoData,
        d = u.ext.type.detect,
        e,
        h,
        f;
    var g = 0;

    for (e = b.length; g < e; g++) {
      var k = b[g];
      var m = [];
      if (!k.sType && k._sManualType) k.sType = k._sManualType;else if (!k.sType) {
        var n = 0;

        for (h = d.length; n < h; n++) {
          var p = 0;

          for (f = c.length; p < f; p++) {
            m[p] === q && (m[p] = T(a, p, g, "type"));
            var t = d[n](m[p], a);
            if (!t && n !== d.length - 1) break;
            if ("html" === t && !Z(m[p])) break;
          }

          if (t) {
            k.sType = t;
            break;
          }
        }

        k.sType || (k.sType = "string");
      }
    }
  }

  function Db(a, b, c, d) {
    var e,
        h,
        f,
        g = a.aoColumns;
    if (b) for (e = b.length - 1; 0 <= e; e--) {
      var k = b[e];
      var m = k.targets !== q ? k.targets : k.aTargets;
      Array.isArray(m) || (m = [m]);
      var n = 0;

      for (h = m.length; n < h; n++) {
        if ("number" === typeof m[n] && 0 <= m[n]) {
          for (; g.length <= m[n];) {
            Ya(a);
          }

          d(m[n], k);
        } else if ("number" === typeof m[n] && 0 > m[n]) d(g.length + m[n], k);else if ("string" === typeof m[n]) {
          var p = 0;

          for (f = g.length; p < f; p++) {
            ("_all" == m[n] || l(g[p].nTh).hasClass(m[n])) && d(p, k);
          }
        }
      }
    }
    if (c) for (e = 0, a = c.length; e < a; e++) {
      d(e, c[e]);
    }
  }

  function ia(a, b, c, d) {
    var e = a.aoData.length,
        h = l.extend(!0, {}, u.models.oRow, {
      src: c ? "dom" : "data",
      idx: e
    });
    h._aData = b;
    a.aoData.push(h);

    for (var f = a.aoColumns, g = 0, k = f.length; g < k; g++) {
      f[g].sType = null;
    }

    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== q && (a.aIds[b] = h);
    !c && a.oFeatures.bDeferRender || ab(a, e, c, d);
    return e;
  }

  function Ja(a, b) {
    var c;
    b instanceof l || (b = l(b));
    return b.map(function (d, e) {
      c = bb(a, e);
      return ia(a, c.data, e, c.cells);
    });
  }

  function T(a, b, c, d) {
    "search" === d ? d = "filter" : "order" === d && (d = "sort");
    var e = a.iDraw,
        h = a.aoColumns[c],
        f = a.aoData[b]._aData,
        g = h.sDefaultContent,
        k = h.fnGetData(f, d, {
      settings: a,
      row: b,
      col: c
    });
    if (k === q) return a.iDrawError != e && null === g && (da(a, 0, "Requested unknown parameter " + ("function" == typeof h.mData ? "{function}" : "'" + h.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), g;
    if ((k === f || null === k) && null !== g && d !== q) k = g;else if ("function" === typeof k) return k.call(f);
    if (null === k && "display" === d) return "";
    "filter" === d && (a = u.ext.type.search, a[h.sType] && (k = a[h.sType](k)));
    return k;
  }

  function Eb(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
      settings: a,
      row: b,
      col: c
    });
  }

  function cb(a) {
    return l.map(a.match(/(\\.|[^\.])+/g) || [""], function (b) {
      return b.replace(/\\\./g, ".");
    });
  }

  function db(a) {
    return U(a.aoData, "_aData");
  }

  function Ka(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {};
  }

  function La(a, b, c) {
    for (var d = -1, e = 0, h = a.length; e < h; e++) {
      a[e] == b ? d = e : a[e] > b && a[e]--;
    }

    -1 != d && c === q && a.splice(d, 1);
  }

  function va(a, b, c, d) {
    var e = a.aoData[b],
        h,
        f = function f(k, m) {
      for (; k.childNodes.length;) {
        k.removeChild(k.firstChild);
      }

      k.innerHTML = T(a, b, m, "display");
    };

    if ("dom" !== c && (c && "auto" !== c || "dom" !== e.src)) {
      var g = e.anCells;
      if (g) if (d !== q) f(g[d], d);else for (c = 0, h = g.length; c < h; c++) {
        f(g[c], c);
      }
    } else e._aData = bb(a, e, d, d === q ? q : e._aData).data;

    e._aSortData = null;
    e._aFilterData = null;
    f = a.aoColumns;
    if (d !== q) f[d].sType = null;else {
      c = 0;

      for (h = f.length; c < h; c++) {
        f[c].sType = null;
      }

      eb(a, e);
    }
  }

  function bb(a, b, c, d) {
    var e = [],
        h = b.firstChild,
        f,
        g = 0,
        k,
        m = a.aoColumns,
        n = a._rowReadObject;
    d = d !== q ? d : n ? {} : [];

    var p = function p(x, w) {
      if ("string" === typeof x) {
        var r = x.indexOf("@");
        -1 !== r && (r = x.substring(r + 1), ha(x)(d, w.getAttribute(r)));
      }
    },
        t = function t(x) {
      if (c === q || c === g) f = m[g], k = x.innerHTML.trim(), f && f._bAttrSrc ? (ha(f.mData._)(d, k), p(f.mData.sort, x), p(f.mData.type, x), p(f.mData.filter, x)) : n ? (f._setter || (f._setter = ha(f.mData)), f._setter(d, k)) : d[g] = k;
      g++;
    };

    if (h) for (; h;) {
      var v = h.nodeName.toUpperCase();
      if ("TD" == v || "TH" == v) t(h), e.push(h);
      h = h.nextSibling;
    } else for (e = b.anCells, h = 0, v = e.length; h < v; h++) {
      t(e[h]);
    }
    (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && ha(a.rowId)(d, b);
    return {
      data: d,
      cells: e
    };
  }

  function ab(a, b, c, d) {
    var e = a.aoData[b],
        h = e._aData,
        f = [],
        g,
        k;

    if (null === e.nTr) {
      var m = c || A.createElement("tr");
      e.nTr = m;
      e.anCells = f;
      m._DT_RowIndex = b;
      eb(a, e);
      var n = 0;

      for (g = a.aoColumns.length; n < g; n++) {
        var p = a.aoColumns[n];
        e = (k = c ? !1 : !0) ? A.createElement(p.sCellType) : d[n];
        e._DT_CellIndex = {
          row: b,
          column: n
        };
        f.push(e);
        if (k || !(!p.mRender && p.mData === n || l.isPlainObject(p.mData) && p.mData._ === n + ".display")) e.innerHTML = T(a, b, n, "display");
        p.sClass && (e.className += " " + p.sClass);
        p.bVisible && !c ? m.appendChild(e) : !p.bVisible && c && e.parentNode.removeChild(e);
        p.fnCreatedCell && p.fnCreatedCell.call(a.oInstance, e, T(a, b, n), h, b, n);
      }

      F(a, "aoRowCreatedCallback", null, [m, h, b, f]);
    }
  }

  function eb(a, b) {
    var c = b.nTr,
        d = b._aData;

    if (c) {
      if (a = a.rowIdFn(d)) c.id = a;
      d.DT_RowClass && (a = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? Ma(b.__rowc.concat(a)) : a, l(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && l(c).attr(d.DT_RowAttr);
      d.DT_RowData && l(c).data(d.DT_RowData);
    }
  }

  function Fb(a) {
    var b,
        c,
        d = a.nTHead,
        e = a.nTFoot,
        h = 0 === l("th, td", d).length,
        f = a.oClasses,
        g = a.aoColumns;
    h && (c = l("<tr/>").appendTo(d));
    var k = 0;

    for (b = g.length; k < b; k++) {
      var m = g[k];
      var n = l(m.nTh).addClass(m.sClass);
      h && n.appendTo(c);
      a.oFeatures.bSort && (n.addClass(m.sSortingClass), !1 !== m.bSortable && (n.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), fb(a, m.nTh, k)));
      m.sTitle != n[0].innerHTML && n.html(m.sTitle);
      gb(a, "header")(a, n, m, f);
    }

    h && wa(a.aoHeader, d);
    l(d).children("tr").children("th, td").addClass(f.sHeaderTH);
    l(e).children("tr").children("th, td").addClass(f.sFooterTH);
    if (null !== e) for (a = a.aoFooter[0], k = 0, b = a.length; k < b; k++) {
      m = g[k], m.nTf = a[k].cell, m.sClass && l(m.nTf).addClass(m.sClass);
    }
  }

  function xa(a, b, c) {
    var d,
        e,
        h = [],
        f = [],
        g = a.aoColumns.length;

    if (b) {
      c === q && (c = !1);
      var k = 0;

      for (d = b.length; k < d; k++) {
        h[k] = b[k].slice();
        h[k].nTr = b[k].nTr;

        for (e = g - 1; 0 <= e; e--) {
          a.aoColumns[e].bVisible || c || h[k].splice(e, 1);
        }

        f.push([]);
      }

      k = 0;

      for (d = h.length; k < d; k++) {
        if (a = h[k].nTr) for (; e = a.firstChild;) {
          a.removeChild(e);
        }
        e = 0;

        for (b = h[k].length; e < b; e++) {
          var m = g = 1;

          if (f[k][e] === q) {
            a.appendChild(h[k][e].cell);

            for (f[k][e] = 1; h[k + g] !== q && h[k][e].cell == h[k + g][e].cell;) {
              f[k + g][e] = 1, g++;
            }

            for (; h[k][e + m] !== q && h[k][e].cell == h[k][e + m].cell;) {
              for (c = 0; c < g; c++) {
                f[k + c][e + m] = 1;
              }

              m++;
            }

            l(h[k][e].cell).attr("rowspan", g).attr("colspan", m);
          }
        }
      }
    }
  }

  function ja(a, b) {
    var c = "ssp" == Q(a),
        d = a.iInitDisplayStart;
    d !== q && -1 !== d && (a._iDisplayStart = c ? d : d >= a.fnRecordsDisplay() ? 0 : d, a.iInitDisplayStart = -1);
    c = F(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== l.inArray(!1, c)) V(a, !1);else {
      c = [];
      var e = 0;
      d = a.asStripeClasses;
      var h = d.length,
          f = a.oLanguage,
          g = "ssp" == Q(a),
          k = a.aiDisplay,
          m = a._iDisplayStart,
          n = a.fnDisplayEnd();
      a.bDrawing = !0;
      if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, V(a, !1);else if (!g) a.iDraw++;else if (!a.bDestroying && !b) {
        Gb(a);
        return;
      }
      if (0 !== k.length) for (b = g ? a.aoData.length : n, f = g ? 0 : m; f < b; f++) {
        g = k[f];
        var p = a.aoData[g];
        null === p.nTr && ab(a, g);
        var t = p.nTr;

        if (0 !== h) {
          var v = d[e % h];
          p._sRowStripe != v && (l(t).removeClass(p._sRowStripe).addClass(v), p._sRowStripe = v);
        }

        F(a, "aoRowCallback", null, [t, p._aData, e, f, g]);
        c.push(t);
        e++;
      } else e = f.sZeroRecords, 1 == a.iDraw && "ajax" == Q(a) ? e = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (e = f.sEmptyTable), c[0] = l("<tr/>", {
        "class": h ? d[0] : ""
      }).append(l("<td />", {
        valign: "top",
        colSpan: oa(a),
        "class": a.oClasses.sRowEmpty
      }).html(e))[0];
      F(a, "aoHeaderCallback", "header", [l(a.nTHead).children("tr")[0], db(a), m, n, k]);
      F(a, "aoFooterCallback", "footer", [l(a.nTFoot).children("tr")[0], db(a), m, n, k]);
      d = l(a.nTBody);
      d.children().detach();
      d.append(l(c));
      F(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1;
    }
  }

  function ka(a, b) {
    var c = a.oFeatures,
        d = c.bFilter;
    c.bSort && Hb(a);
    d ? ya(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    ja(a);
    a._drawHold = !1;
  }

  function Ib(a) {
    var b = a.oClasses,
        c = l(a.nTable);
    c = l("<div/>").insertBefore(c);
    var d = a.oFeatures,
        e = l("<div/>", {
      id: a.sTableId + "_wrapper",
      "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
    });
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;

    for (var h = a.sDom.split(""), f, g, k, m, n, p, t = 0; t < h.length; t++) {
      f = null;
      g = h[t];

      if ("<" == g) {
        k = l("<div/>")[0];
        m = h[t + 1];

        if ("'" == m || '"' == m) {
          n = "";

          for (p = 2; h[t + p] != m;) {
            n += h[t + p], p++;
          }

          "H" == n ? n = b.sJUIHeader : "F" == n && (n = b.sJUIFooter);
          -1 != n.indexOf(".") ? (m = n.split("."), k.id = m[0].substr(1, m[0].length - 1), k.className = m[1]) : "#" == n.charAt(0) ? k.id = n.substr(1, n.length - 1) : k.className = n;
          t += p;
        }

        e.append(k);
        e = l(k);
      } else if (">" == g) e = e.parent();else if ("l" == g && d.bPaginate && d.bLengthChange) f = Jb(a);else if ("f" == g && d.bFilter) f = Kb(a);else if ("r" == g && d.bProcessing) f = Lb(a);else if ("t" == g) f = Mb(a);else if ("i" == g && d.bInfo) f = Nb(a);else if ("p" == g && d.bPaginate) f = Ob(a);else if (0 !== u.ext.feature.length) for (k = u.ext.feature, p = 0, m = k.length; p < m; p++) {
        if (g == k[p].cFeature) {
          f = k[p].fnInit(a);
          break;
        }
      }

      f && (k = a.aanFeatures, k[g] || (k[g] = []), k[g].push(f), e.append(f));
    }

    c.replaceWith(e);
    a.nHolding = null;
  }

  function wa(a, b) {
    b = l(b).children("tr");
    var c, d, e;
    a.splice(0, a.length);
    var h = 0;

    for (e = b.length; h < e; h++) {
      a.push([]);
    }

    h = 0;

    for (e = b.length; h < e; h++) {
      var f = b[h];

      for (c = f.firstChild; c;) {
        if ("TD" == c.nodeName.toUpperCase() || "TH" == c.nodeName.toUpperCase()) {
          var g = 1 * c.getAttribute("colspan");
          var k = 1 * c.getAttribute("rowspan");
          g = g && 0 !== g && 1 !== g ? g : 1;
          k = k && 0 !== k && 1 !== k ? k : 1;
          var m = 0;

          for (d = a[h]; d[m];) {
            m++;
          }

          var n = m;
          var p = 1 === g ? !0 : !1;

          for (d = 0; d < g; d++) {
            for (m = 0; m < k; m++) {
              a[h + m][n + d] = {
                cell: c,
                unique: p
              }, a[h + m].nTr = f;
            }
          }
        }

        c = c.nextSibling;
      }
    }
  }

  function Na(a, b, c) {
    var d = [];
    c || (c = a.aoHeader, b && (c = [], wa(c, b)));
    b = 0;

    for (var e = c.length; b < e; b++) {
      for (var h = 0, f = c[b].length; h < f; h++) {
        !c[b][h].unique || d[h] && a.bSortCellsTop || (d[h] = c[b][h].cell);
      }
    }

    return d;
  }

  function Oa(a, b, c) {
    F(a, "aoServerParams", "serverParams", [b]);

    if (b && Array.isArray(b)) {
      var d = {},
          e = /(.*?)\[\]$/;
      l.each(b, function (n, p) {
        (n = p.name.match(e)) ? (n = n[0], d[n] || (d[n] = []), d[n].push(p.value)) : d[p.name] = p.value;
      });
      b = d;
    }

    var h = a.ajax,
        f = a.oInstance,
        g = function g(n) {
      var p = a.jqXHR ? a.jqXHR.status : null;
      if (null === n || "number" === typeof p && 204 == p) n = {}, za(a, n, []);
      (p = n.error || n.sError) && da(a, 0, p);
      a.json = n;
      F(a, null, "xhr", [a, n, a.jqXHR]);
      c(n);
    };

    if (l.isPlainObject(h) && h.data) {
      var k = h.data;
      var m = "function" === typeof k ? k(b, a) : k;
      b = "function" === typeof k && m ? m : l.extend(!0, b, m);
      delete h.data;
    }

    m = {
      data: b,
      success: g,
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function error(n, p, t) {
        t = F(a, null, "xhr", [a, null, a.jqXHR]);
        -1 === l.inArray(!0, t) && ("parsererror" == p ? da(a, 0, "Invalid JSON response", 1) : 4 === n.readyState && da(a, 0, "Ajax error", 7));
        V(a, !1);
      }
    };
    a.oAjaxData = b;
    F(a, null, "preXhr", [a, b]);
    a.fnServerData ? a.fnServerData.call(f, a.sAjaxSource, l.map(b, function (n, p) {
      return {
        name: p,
        value: n
      };
    }), g, a) : a.sAjaxSource || "string" === typeof h ? a.jqXHR = l.ajax(l.extend(m, {
      url: h || a.sAjaxSource
    })) : "function" === typeof h ? a.jqXHR = h.call(f, b, g, a) : (a.jqXHR = l.ajax(l.extend(m, h)), h.data = k);
  }

  function Gb(a) {
    a.iDraw++;
    V(a, !0);
    Oa(a, Pb(a), function (b) {
      Qb(a, b);
    });
  }

  function Pb(a) {
    var b = a.aoColumns,
        c = b.length,
        d = a.oFeatures,
        e = a.oPreviousSearch,
        h = a.aoPreSearchCols,
        f = [],
        g = pa(a);
    var k = a._iDisplayStart;
    var m = !1 !== d.bPaginate ? a._iDisplayLength : -1;

    var n = function n(x, w) {
      f.push({
        name: x,
        value: w
      });
    };

    n("sEcho", a.iDraw);
    n("iColumns", c);
    n("sColumns", U(b, "sName").join(","));
    n("iDisplayStart", k);
    n("iDisplayLength", m);
    var p = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: k,
      length: m,
      search: {
        value: e.sSearch,
        regex: e.bRegex
      }
    };

    for (k = 0; k < c; k++) {
      var t = b[k];
      var v = h[k];
      m = "function" == typeof t.mData ? "function" : t.mData;
      p.columns.push({
        data: m,
        name: t.sName,
        searchable: t.bSearchable,
        orderable: t.bSortable,
        search: {
          value: v.sSearch,
          regex: v.bRegex
        }
      });
      n("mDataProp_" + k, m);
      d.bFilter && (n("sSearch_" + k, v.sSearch), n("bRegex_" + k, v.bRegex), n("bSearchable_" + k, t.bSearchable));
      d.bSort && n("bSortable_" + k, t.bSortable);
    }

    d.bFilter && (n("sSearch", e.sSearch), n("bRegex", e.bRegex));
    d.bSort && (l.each(g, function (x, w) {
      p.order.push({
        column: w.col,
        dir: w.dir
      });
      n("iSortCol_" + x, w.col);
      n("sSortDir_" + x, w.dir);
    }), n("iSortingCols", g.length));
    b = u.ext.legacy.ajax;
    return null === b ? a.sAjaxSource ? f : p : b ? f : p;
  }

  function Qb(a, b) {
    var c = function c(f, g) {
      return b[f] !== q ? b[f] : b[g];
    },
        d = za(a, b),
        e = c("sEcho", "draw"),
        h = c("iTotalRecords", "recordsTotal");

    c = c("iTotalDisplayRecords", "recordsFiltered");

    if (e !== q) {
      if (1 * e < a.iDraw) return;
      a.iDraw = 1 * e;
    }

    d || (d = []);
    Ka(a);
    a._iRecordsTotal = parseInt(h, 10);
    a._iRecordsDisplay = parseInt(c, 10);
    e = 0;

    for (h = d.length; e < h; e++) {
      ia(a, d[e]);
    }

    a.aiDisplay = a.aiDisplayMaster.slice();
    ja(a, !0);
    a._bInitComplete || Pa(a, b);
    V(a, !1);
  }

  function za(a, b, c) {
    a = l.isPlainObject(a.ajax) && a.ajax.dataSrc !== q ? a.ajax.dataSrc : a.sAjaxDataProp;
    if (!c) return "data" === a ? b.aaData || b[a] : "" !== a ? na(a)(b) : b;
    ha(a)(b, c);
  }

  function Kb(a) {
    var b = a.oClasses,
        c = a.sTableId,
        d = a.oLanguage,
        e = a.oPreviousSearch,
        h = a.aanFeatures,
        f = '<input type="search" class="' + b.sFilterInput + '"/>',
        g = d.sSearch;
    g = g.match(/_INPUT_/) ? g.replace("_INPUT_", f) : g + f;
    b = l("<div/>", {
      id: h.f ? null : c + "_filter",
      "class": b.sFilter
    }).append(l("<label/>").append(g));

    var k = function k(n) {
      var p = this.value ? this.value : "";
      e["return"] && "Enter" !== n.key || p == e.sSearch || (ya(a, {
        sSearch: p,
        bRegex: e.bRegex,
        bSmart: e.bSmart,
        bCaseInsensitive: e.bCaseInsensitive,
        "return": e["return"]
      }), a._iDisplayStart = 0, ja(a));
    };

    h = null !== a.searchDelay ? a.searchDelay : "ssp" === Q(a) ? 400 : 0;
    var m = l("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", h ? hb(k, h) : k).on("mouseup", function (n) {
      setTimeout(function () {
        k.call(m[0], n);
      }, 10);
    }).on("keypress.DT", function (n) {
      if (13 == n.keyCode) return !1;
    }).attr("aria-controls", c);
    l(a.nTable).on("search.dt.DT", function (n, p) {
      if (a === p) try {
        m[0] !== A.activeElement && m.val(e.sSearch);
      } catch (t) {}
    });
    return b[0];
  }

  function ya(a, b, c) {
    var d = a.oPreviousSearch,
        e = a.aoPreSearchCols,
        h = function h(g) {
      d.sSearch = g.sSearch;
      d.bRegex = g.bRegex;
      d.bSmart = g.bSmart;
      d.bCaseInsensitive = g.bCaseInsensitive;
      d["return"] = g["return"];
    },
        f = function f(g) {
      return g.bEscapeRegex !== q ? !g.bEscapeRegex : g.bRegex;
    };

    $a(a);

    if ("ssp" != Q(a)) {
      Rb(a, b.sSearch, c, f(b), b.bSmart, b.bCaseInsensitive, b["return"]);
      h(b);

      for (b = 0; b < e.length; b++) {
        Sb(a, e[b].sSearch, b, f(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
      }

      Tb(a);
    } else h(b);

    a.bFiltered = !0;
    F(a, null, "search", [a]);
  }

  function Tb(a) {
    for (var b = u.ext.search, c = a.aiDisplay, d, e, h = 0, f = b.length; h < f; h++) {
      for (var g = [], k = 0, m = c.length; k < m; k++) {
        e = c[k], d = a.aoData[e], b[h](a, d._aFilterData, e, d._aData, k) && g.push(e);
      }

      c.length = 0;
      l.merge(c, g);
    }
  }

  function Sb(a, b, c, d, e, h) {
    if ("" !== b) {
      var f = [],
          g = a.aiDisplay;
      d = ib(b, d, e, h);

      for (e = 0; e < g.length; e++) {
        b = a.aoData[g[e]]._aFilterData[c], d.test(b) && f.push(g[e]);
      }

      a.aiDisplay = f;
    }
  }

  function Rb(a, b, c, d, e, h) {
    e = ib(b, d, e, h);
    var f = a.oPreviousSearch.sSearch,
        g = a.aiDisplayMaster;
    h = [];
    0 !== u.ext.search.length && (c = !0);
    var k = Ub(a);
    if (0 >= b.length) a.aiDisplay = g.slice();else {
      if (k || c || d || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice();
      b = a.aiDisplay;

      for (c = 0; c < b.length; c++) {
        e.test(a.aoData[b[c]]._sFilterRow) && h.push(b[c]);
      }

      a.aiDisplay = h;
    }
  }

  function ib(a, b, c, d) {
    a = b ? a : jb(a);
    c && (a = "^(?=.*?" + l.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (e) {
      if ('"' === e.charAt(0)) {
        var h = e.match(/^"(.*)"$/);
        e = h ? h[1] : e;
      }

      return e.replace('"', "");
    }).join(")(?=.*?") + ").*$");
    return new RegExp(a, d ? "i" : "");
  }

  function Ub(a) {
    var b = a.aoColumns,
        c,
        d;
    var e = !1;
    var h = 0;

    for (c = a.aoData.length; h < c; h++) {
      var f = a.aoData[h];

      if (!f._aFilterData) {
        var g = [];
        e = 0;

        for (d = b.length; e < d; e++) {
          var k = b[e];
          k.bSearchable ? (k = T(a, h, e, "filter"), null === k && (k = ""), "string" !== typeof k && k.toString && (k = k.toString())) : k = "";
          k.indexOf && -1 !== k.indexOf("&") && (Qa.innerHTML = k, k = tc ? Qa.textContent : Qa.innerText);
          k.replace && (k = k.replace(/[\r\n\u2028]/g, ""));
          g.push(k);
        }

        f._aFilterData = g;
        f._sFilterRow = g.join("  ");
        e = !0;
      }
    }

    return e;
  }

  function Vb(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive
    };
  }

  function Wb(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive
    };
  }

  function Nb(a) {
    var b = a.sTableId,
        c = a.aanFeatures.i,
        d = l("<div/>", {
      "class": a.oClasses.sInfo,
      id: c ? null : b + "_info"
    });
    c || (a.aoDrawCallback.push({
      fn: Xb,
      sName: "information"
    }), d.attr("role", "status").attr("aria-live", "polite"), l(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0];
  }

  function Xb(a) {
    var b = a.aanFeatures.i;

    if (0 !== b.length) {
      var c = a.oLanguage,
          d = a._iDisplayStart + 1,
          e = a.fnDisplayEnd(),
          h = a.fnRecordsTotal(),
          f = a.fnRecordsDisplay(),
          g = f ? c.sInfo : c.sInfoEmpty;
      f !== h && (g += " " + c.sInfoFiltered);
      g += c.sInfoPostFix;
      g = Yb(a, g);
      c = c.fnInfoCallback;
      null !== c && (g = c.call(a.oInstance, a, d, e, h, f, g));
      l(b).html(g);
    }
  }

  function Yb(a, b) {
    var c = a.fnFormatNumber,
        d = a._iDisplayStart + 1,
        e = a._iDisplayLength,
        h = a.fnRecordsDisplay(),
        f = -1 === e;
    return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, h)).replace(/_PAGE_/g, c.call(a, f ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, f ? 1 : Math.ceil(h / e)));
  }

  function Aa(a) {
    var b = a.iInitDisplayStart,
        c = a.aoColumns;
    var d = a.oFeatures;
    var e = a.bDeferLoading;

    if (a.bInitialised) {
      Ib(a);
      Fb(a);
      xa(a, a.aoHeader);
      xa(a, a.aoFooter);
      V(a, !0);
      d.bAutoWidth && Za(a);
      var h = 0;

      for (d = c.length; h < d; h++) {
        var f = c[h];
        f.sWidth && (f.nTh.style.width = K(f.sWidth));
      }

      F(a, null, "preInit", [a]);
      ka(a);
      c = Q(a);
      if ("ssp" != c || e) "ajax" == c ? Oa(a, [], function (g) {
        var k = za(a, g);

        for (h = 0; h < k.length; h++) {
          ia(a, k[h]);
        }

        a.iInitDisplayStart = b;
        ka(a);
        V(a, !1);
        Pa(a, g);
      }, a) : (V(a, !1), Pa(a));
    } else setTimeout(function () {
      Aa(a);
    }, 200);
  }

  function Pa(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && sa(a);
    F(a, null, "plugin-init", [a, b]);
    F(a, "aoInitComplete", "init", [a, b]);
  }

  function kb(a, b) {
    b = parseInt(b, 10);
    a._iDisplayLength = b;
    lb(a);
    F(a, null, "length", [a, b]);
  }

  function Jb(a) {
    var b = a.oClasses,
        c = a.sTableId,
        d = a.aLengthMenu,
        e = Array.isArray(d[0]),
        h = e ? d[0] : d;
    d = e ? d[1] : d;
    e = l("<select/>", {
      name: c + "_length",
      "aria-controls": c,
      "class": b.sLengthSelect
    });

    for (var f = 0, g = h.length; f < g; f++) {
      e[0][f] = new Option("number" === typeof d[f] ? a.fnFormatNumber(d[f]) : d[f], h[f]);
    }

    var k = l("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (k[0].id = c + "_length");
    k.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
    l("select", k).val(a._iDisplayLength).on("change.DT", function (m) {
      kb(a, l(this).val());
      ja(a);
    });
    l(a.nTable).on("length.dt.DT", function (m, n, p) {
      a === n && l("select", k).val(p);
    });
    return k[0];
  }

  function Ob(a) {
    var b = a.sPaginationType,
        c = u.ext.pager[b],
        d = "function" === typeof c,
        e = function e(f) {
      ja(f);
    };

    b = l("<div/>").addClass(a.oClasses.sPaging + b)[0];
    var h = a.aanFeatures;
    d || c.fnInit(a, b, e);
    h.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
      fn: function fn(f) {
        if (d) {
          var g = f._iDisplayStart,
              k = f._iDisplayLength,
              m = f.fnRecordsDisplay(),
              n = -1 === k;
          g = n ? 0 : Math.ceil(g / k);
          k = n ? 1 : Math.ceil(m / k);
          m = c(g, k);
          var p;
          n = 0;

          for (p = h.p.length; n < p; n++) {
            gb(f, "pageButton")(f, h.p[n], n, m, g, k);
          }
        } else c.fnUpdate(f, e);
      },
      sName: "pagination"
    }));
    return b;
  }

  function Ra(a, b, c) {
    var d = a._iDisplayStart,
        e = a._iDisplayLength,
        h = a.fnRecordsDisplay();
    0 === h || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > h && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < h && (d += e) : "last" == b ? d = Math.floor((h - 1) / e) * e : da(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (F(a, null, "page", [a]), c && ja(a));
    return b;
  }

  function Lb(a) {
    return l("<div/>", {
      id: a.aanFeatures.r ? null : a.sTableId + "_processing",
      "class": a.oClasses.sProcessing
    }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0];
  }

  function V(a, b) {
    a.oFeatures.bProcessing && l(a.aanFeatures.r).css("display", b ? "block" : "none");
    F(a, null, "processing", [a, b]);
  }

  function Mb(a) {
    var b = l(a.nTable),
        c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
        e = c.sY,
        h = a.oClasses,
        f = b.children("caption"),
        g = f.length ? f[0]._captionSide : null,
        k = l(b[0].cloneNode(!1)),
        m = l(b[0].cloneNode(!1)),
        n = b.children("tfoot");
    n.length || (n = null);
    k = l("<div/>", {
      "class": h.sScrollWrapper
    }).append(l("<div/>", {
      "class": h.sScrollHead
    }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: d ? d ? K(d) : null : "100%"
    }).append(l("<div/>", {
      "class": h.sScrollHeadInner
    }).css({
      "box-sizing": "content-box",
      width: c.sXInner || "100%"
    }).append(k.removeAttr("id").css("margin-left", 0).append("top" === g ? f : null).append(b.children("thead"))))).append(l("<div/>", {
      "class": h.sScrollBody
    }).css({
      position: "relative",
      overflow: "auto",
      width: d ? K(d) : null
    }).append(b));
    n && k.append(l("<div/>", {
      "class": h.sScrollFoot
    }).css({
      overflow: "hidden",
      border: 0,
      width: d ? d ? K(d) : null : "100%"
    }).append(l("<div/>", {
      "class": h.sScrollFootInner
    }).append(m.removeAttr("id").css("margin-left", 0).append("bottom" === g ? f : null).append(b.children("tfoot")))));
    b = k.children();
    var p = b[0];
    h = b[1];
    var t = n ? b[2] : null;
    if (d) l(h).on("scroll.DT", function (v) {
      v = this.scrollLeft;
      p.scrollLeft = v;
      n && (t.scrollLeft = v);
    });
    l(h).css("max-height", e);
    c.bCollapse || l(h).css("height", e);
    a.nScrollHead = p;
    a.nScrollBody = h;
    a.nScrollFoot = t;
    a.aoDrawCallback.push({
      fn: Ha,
      sName: "scrolling"
    });
    return k[0];
  }

  function Ha(a) {
    var b = a.oScroll,
        c = b.sX,
        d = b.sXInner,
        e = b.sY;
    b = b.iBarWidth;
    var h = l(a.nScrollHead),
        f = h[0].style,
        g = h.children("div"),
        k = g[0].style,
        m = g.children("table");
    g = a.nScrollBody;
    var n = l(g),
        p = g.style,
        t = l(a.nScrollFoot).children("div"),
        v = t.children("table"),
        x = l(a.nTHead),
        w = l(a.nTable),
        r = w[0],
        C = r.style,
        G = a.nTFoot ? l(a.nTFoot) : null,
        aa = a.oBrowser,
        L = aa.bScrollOversize;
    U(a.aoColumns, "nTh");

    var O = [],
        I = [],
        H = [],
        ea = [],
        Y,
        Ba = function Ba(D) {
      D = D.style;
      D.paddingTop = "0";
      D.paddingBottom = "0";
      D.borderTopWidth = "0";
      D.borderBottomWidth = "0";
      D.height = 0;
    };

    var fa = g.scrollHeight > g.clientHeight;
    if (a.scrollBarVis !== fa && a.scrollBarVis !== q) a.scrollBarVis = fa, sa(a);else {
      a.scrollBarVis = fa;
      w.children("thead, tfoot").remove();

      if (G) {
        var ba = G.clone().prependTo(w);
        var la = G.find("tr");
        ba = ba.find("tr");
      }

      var mb = x.clone().prependTo(w);
      x = x.find("tr");
      fa = mb.find("tr");
      mb.find("th, td").removeAttr("tabindex");
      c || (p.width = "100%", h[0].style.width = "100%");
      l.each(Na(a, mb), function (D, W) {
        Y = ta(a, D);
        W.style.width = a.aoColumns[Y].sWidth;
      });
      G && ca(function (D) {
        D.style.width = "";
      }, ba);
      h = w.outerWidth();
      "" === c ? (C.width = "100%", L && (w.find("tbody").height() > g.offsetHeight || "scroll" == n.css("overflow-y")) && (C.width = K(w.outerWidth() - b)), h = w.outerWidth()) : "" !== d && (C.width = K(d), h = w.outerWidth());
      ca(Ba, fa);
      ca(function (D) {
        var W = z.getComputedStyle ? z.getComputedStyle(D).width : K(l(D).width());
        H.push(D.innerHTML);
        O.push(W);
      }, fa);
      ca(function (D, W) {
        D.style.width = O[W];
      }, x);
      l(fa).css("height", 0);
      G && (ca(Ba, ba), ca(function (D) {
        ea.push(D.innerHTML);
        I.push(K(l(D).css("width")));
      }, ba), ca(function (D, W) {
        D.style.width = I[W];
      }, la), l(ba).height(0));
      ca(function (D, W) {
        D.innerHTML = '<div class="dataTables_sizing">' + H[W] + "</div>";
        D.childNodes[0].style.height = "0";
        D.childNodes[0].style.overflow = "hidden";
        D.style.width = O[W];
      }, fa);
      G && ca(function (D, W) {
        D.innerHTML = '<div class="dataTables_sizing">' + ea[W] + "</div>";
        D.childNodes[0].style.height = "0";
        D.childNodes[0].style.overflow = "hidden";
        D.style.width = I[W];
      }, ba);
      Math.round(w.outerWidth()) < Math.round(h) ? (la = g.scrollHeight > g.offsetHeight || "scroll" == n.css("overflow-y") ? h + b : h, L && (g.scrollHeight > g.offsetHeight || "scroll" == n.css("overflow-y")) && (C.width = K(la - b)), "" !== c && "" === d || da(a, 1, "Possible column misalignment", 6)) : la = "100%";
      p.width = K(la);
      f.width = K(la);
      G && (a.nScrollFoot.style.width = K(la));
      !e && L && (p.height = K(r.offsetHeight + b));
      c = w.outerWidth();
      m[0].style.width = K(c);
      k.width = K(c);
      d = w.height() > g.clientHeight || "scroll" == n.css("overflow-y");
      e = "padding" + (aa.bScrollbarLeft ? "Left" : "Right");
      k[e] = d ? b + "px" : "0px";
      G && (v[0].style.width = K(c), t[0].style.width = K(c), t[0].style[e] = d ? b + "px" : "0px");
      w.children("colgroup").insertBefore(w.children("thead"));
      n.trigger("scroll");
      !a.bSorted && !a.bFiltered || a._drawHold || (g.scrollTop = 0);
    }
  }

  function ca(a, b, c) {
    for (var d = 0, e = 0, h = b.length, f, g; e < h;) {
      f = b[e].firstChild;

      for (g = c ? c[e].firstChild : null; f;) {
        1 === f.nodeType && (c ? a(f, g, d) : a(f, d), d++), f = f.nextSibling, g = c ? g.nextSibling : null;
      }

      e++;
    }
  }

  function Za(a) {
    var b = a.nTable,
        c = a.aoColumns,
        d = a.oScroll,
        e = d.sY,
        h = d.sX,
        f = d.sXInner,
        g = c.length,
        k = Ia(a, "bVisible"),
        m = l("th", a.nTHead),
        n = b.getAttribute("width"),
        p = b.parentNode,
        t = !1,
        v,
        x = a.oBrowser;
    d = x.bScrollOversize;
    (v = b.style.width) && -1 !== v.indexOf("%") && (n = v);

    for (v = 0; v < k.length; v++) {
      var w = c[k[v]];
      null !== w.sWidth && (w.sWidth = Zb(w.sWidthOrig, p), t = !0);
    }

    if (d || !t && !h && !e && g == oa(a) && g == m.length) for (v = 0; v < g; v++) {
      k = ta(a, v), null !== k && (c[k].sWidth = K(m.eq(v).width()));
    } else {
      g = l(b).clone().css("visibility", "hidden").removeAttr("id");
      g.find("tbody tr").remove();
      var r = l("<tr/>").appendTo(g.find("tbody"));
      g.find("thead, tfoot").remove();
      g.append(l(a.nTHead).clone()).append(l(a.nTFoot).clone());
      g.find("tfoot th, tfoot td").css("width", "");
      m = Na(a, g.find("thead")[0]);

      for (v = 0; v < k.length; v++) {
        w = c[k[v]], m[v].style.width = null !== w.sWidthOrig && "" !== w.sWidthOrig ? K(w.sWidthOrig) : "", w.sWidthOrig && h && l(m[v]).append(l("<div/>").css({
          width: w.sWidthOrig,
          margin: 0,
          padding: 0,
          border: 0,
          height: 1
        }));
      }

      if (a.aoData.length) for (v = 0; v < k.length; v++) {
        t = k[v], w = c[t], l($b(a, t)).clone(!1).append(w.sContentPadding).appendTo(r);
      }
      l("[name]", g).removeAttr("name");
      w = l("<div/>").css(h || e ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}).append(g).appendTo(p);
      h && f ? g.width(f) : h ? (g.css("width", "auto"), g.removeAttr("width"), g.width() < p.clientWidth && n && g.width(p.clientWidth)) : e ? g.width(p.clientWidth) : n && g.width(n);

      for (v = e = 0; v < k.length; v++) {
        p = l(m[v]), f = p.outerWidth() - p.width(), p = x.bBounding ? Math.ceil(m[v].getBoundingClientRect().width) : p.outerWidth(), e += p, c[k[v]].sWidth = K(p - f);
      }

      b.style.width = K(e);
      w.remove();
    }
    n && (b.style.width = K(n));
    !n && !h || a._reszEvt || (b = function b() {
      l(z).on("resize.DT-" + a.sInstance, hb(function () {
        sa(a);
      }));
    }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0);
  }

  function Zb(a, b) {
    if (!a) return 0;
    a = l("<div/>").css("width", K(a)).appendTo(b || A.body);
    b = a[0].offsetWidth;
    a.remove();
    return b;
  }

  function $b(a, b) {
    var c = ac(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return d.nTr ? d.anCells[b] : l("<td/>").html(T(a, c, b, "display"))[0];
  }

  function ac(a, b) {
    for (var c, d = -1, e = -1, h = 0, f = a.aoData.length; h < f; h++) {
      c = T(a, h, b, "display") + "", c = c.replace(uc, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = h);
    }

    return e;
  }

  function K(a) {
    return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a;
  }

  function pa(a) {
    var b = [],
        c = a.aoColumns;
    var d = a.aaSortingFixed;
    var e = l.isPlainObject(d);
    var h = [];

    var f = function f(n) {
      n.length && !Array.isArray(n[0]) ? h.push(n) : l.merge(h, n);
    };

    Array.isArray(d) && f(d);
    e && d.pre && f(d.pre);
    f(a.aaSorting);
    e && d.post && f(d.post);

    for (a = 0; a < h.length; a++) {
      var g = h[a][0];
      f = c[g].aDataSort;
      d = 0;

      for (e = f.length; d < e; d++) {
        var k = f[d];
        var m = c[k].sType || "string";
        h[a]._idx === q && (h[a]._idx = l.inArray(h[a][1], c[k].asSorting));
        b.push({
          src: g,
          col: k,
          dir: h[a][1],
          index: h[a]._idx,
          type: m,
          formatter: u.ext.type.order[m + "-pre"]
        });
      }
    }

    return b;
  }

  function Hb(a) {
    var b,
        c = [],
        d = u.ext.type.order,
        e = a.aoData,
        h = 0,
        f = a.aiDisplayMaster;
    $a(a);
    var g = pa(a);
    var k = 0;

    for (b = g.length; k < b; k++) {
      var m = g[k];
      m.formatter && h++;
      bc(a, m.col);
    }

    if ("ssp" != Q(a) && 0 !== g.length) {
      k = 0;

      for (b = f.length; k < b; k++) {
        c[f[k]] = k;
      }

      h === g.length ? f.sort(function (n, p) {
        var t,
            v = g.length,
            x = e[n]._aSortData,
            w = e[p]._aSortData;

        for (t = 0; t < v; t++) {
          var r = g[t];
          var C = x[r.col];
          var G = w[r.col];
          C = C < G ? -1 : C > G ? 1 : 0;
          if (0 !== C) return "asc" === r.dir ? C : -C;
        }

        C = c[n];
        G = c[p];
        return C < G ? -1 : C > G ? 1 : 0;
      }) : f.sort(function (n, p) {
        var t,
            v = g.length,
            x = e[n]._aSortData,
            w = e[p]._aSortData;

        for (t = 0; t < v; t++) {
          var r = g[t];
          var C = x[r.col];
          var G = w[r.col];
          r = d[r.type + "-" + r.dir] || d["string-" + r.dir];
          C = r(C, G);
          if (0 !== C) return C;
        }

        C = c[n];
        G = c[p];
        return C < G ? -1 : C > G ? 1 : 0;
      });
    }

    a.bSorted = !0;
  }

  function cc(a) {
    var b = a.aoColumns,
        c = pa(a);
    a = a.oLanguage.oAria;

    for (var d = 0, e = b.length; d < e; d++) {
      var h = b[d];
      var f = h.asSorting;
      var g = h.ariaTitle || h.sTitle.replace(/<.*?>/g, "");
      var k = h.nTh;
      k.removeAttribute("aria-sort");
      h.bSortable && (0 < c.length && c[0].col == d ? (k.setAttribute("aria-sort", "asc" == c[0].dir ? "ascending" : "descending"), h = f[c[0].index + 1] || f[0]) : h = f[0], g += "asc" === h ? a.sSortAscending : a.sSortDescending);
      k.setAttribute("aria-label", g);
    }
  }

  function nb(a, b, c, d) {
    var e = a.aaSorting,
        h = a.aoColumns[b].asSorting,
        f = function f(g, k) {
      var m = g._idx;
      m === q && (m = l.inArray(g[1], h));
      return m + 1 < h.length ? m + 1 : k ? null : 0;
    };

    "number" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti ? (c = l.inArray(b, U(e, "0")), -1 !== c ? (b = f(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = h[b], e[c]._idx = b)) : (e.push([b, h[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = f(e[0]), e.length = 1, e[0][1] = h[b], e[0]._idx = b) : (e.length = 0, e.push([b, h[0]]), e[0]._idx = 0);
    ka(a);
    "function" == typeof d && d(a);
  }

  function fb(a, b, c, d) {
    var e = a.aoColumns[c];
    ob(b, {}, function (h) {
      !1 !== e.bSortable && (a.oFeatures.bProcessing ? (V(a, !0), setTimeout(function () {
        nb(a, c, h.shiftKey, d);
        "ssp" !== Q(a) && V(a, !1);
      }, 0)) : nb(a, c, h.shiftKey, d));
    });
  }

  function Sa(a) {
    var b = a.aLastSort,
        c = a.oClasses.sSortColumn,
        d = pa(a),
        e = a.oFeatures,
        h;

    if (e.bSort && e.bSortClasses) {
      e = 0;

      for (h = b.length; e < h; e++) {
        var f = b[e].src;
        l(U(a.aoData, "anCells", f)).removeClass(c + (2 > e ? e + 1 : 3));
      }

      e = 0;

      for (h = d.length; e < h; e++) {
        f = d[e].src, l(U(a.aoData, "anCells", f)).addClass(c + (2 > e ? e + 1 : 3));
      }
    }

    a.aLastSort = d;
  }

  function bc(a, b) {
    var c = a.aoColumns[b],
        d = u.ext.order[c.sSortDataType],
        e;
    d && (e = d.call(a.oInstance, a, b, ua(a, b)));

    for (var h, f = u.ext.type.order[c.sType + "-pre"], g = 0, k = a.aoData.length; g < k; g++) {
      if (c = a.aoData[g], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) h = d ? e[g] : T(a, g, b, "sort"), c._aSortData[b] = f ? f(h) : h;
    }
  }

  function Ca(a) {
    if (!a._bLoadingState) {
      var b = {
        time: +new Date(),
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: l.extend(!0, [], a.aaSorting),
        search: Vb(a.oPreviousSearch),
        columns: l.map(a.aoColumns, function (c, d) {
          return {
            visible: c.bVisible,
            search: Vb(a.aoPreSearchCols[d])
          };
        })
      };
      a.oSavedState = b;
      F(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oFeatures.bStateSave && !a.bDestroying && a.fnStateSaveCallback.call(a.oInstance, a, b);
    }
  }

  function dc(a, b, c) {
    if (a.oFeatures.bStateSave) return b = a.fnStateLoadCallback.call(a.oInstance, a, function (d) {
      pb(a, d, c);
    }), b !== q && pb(a, b, c), !0;
    c();
  }

  function pb(a, b, c) {
    var d,
        e = a.aoColumns;
    a._bLoadingState = !0;
    var h = a._bInitComplete ? new u.Api(a) : null;

    if (b && b.time) {
      var f = F(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
      if (-1 !== l.inArray(!1, f)) a._bLoadingState = !1;else if (f = a.iStateDuration, 0 < f && b.time < +new Date() - 1E3 * f) a._bLoadingState = !1;else if (b.columns && e.length !== b.columns.length) a._bLoadingState = !1;else {
        a.oLoadedState = l.extend(!0, {}, b);
        b.start !== q && (null === h ? (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start) : Ra(a, b.start / b.length));
        b.length !== q && (a._iDisplayLength = b.length);
        b.order !== q && (a.aaSorting = [], l.each(b.order, function (k, m) {
          a.aaSorting.push(m[0] >= e.length ? [0, m[1]] : m);
        }));
        b.search !== q && l.extend(a.oPreviousSearch, Wb(b.search));

        if (b.columns) {
          f = 0;

          for (d = b.columns.length; f < d; f++) {
            var g = b.columns[f];
            g.visible !== q && (h ? h.column(f).visible(g.visible, !1) : e[f].bVisible = g.visible);
            g.search !== q && l.extend(a.aoPreSearchCols[f], Wb(g.search));
          }

          h && h.columns.adjust();
        }

        a._bLoadingState = !1;
        F(a, "aoStateLoaded", "stateLoaded", [a, b]);
      }
    } else a._bLoadingState = !1;

    c();
  }

  function Ta(a) {
    var b = u.settings;
    a = l.inArray(a, U(b, "nTable"));
    return -1 !== a ? b[a] : null;
  }

  function da(a, b, c, d) {
    c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
    d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
    if (b) z.console && console.log && console.log(c);else if (b = u.ext, b = b.sErrMode || b.errMode, a && F(a, null, "error", [a, d, c]), "alert" == b) alert(c);else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c);
    }
  }

  function X(a, b, c, d) {
    Array.isArray(c) ? l.each(c, function (e, h) {
      Array.isArray(h) ? X(a, b, h[0], h[1]) : X(a, b, h);
    }) : (d === q && (d = c), b[c] !== q && (a[d] = b[c]));
  }

  function qb(a, b, c) {
    var d;

    for (d in b) {
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        l.isPlainObject(e) ? (l.isPlainObject(a[d]) || (a[d] = {}), l.extend(!0, a[d], e)) : c && "data" !== d && "aaData" !== d && Array.isArray(e) ? a[d] = e.slice() : a[d] = e;
      }
    }

    return a;
  }

  function ob(a, b, c) {
    l(a).on("click.DT", b, function (d) {
      l(a).trigger("blur");
      c(d);
    }).on("keypress.DT", b, function (d) {
      13 === d.which && (d.preventDefault(), c(d));
    }).on("selectstart.DT", function () {
      return !1;
    });
  }

  function R(a, b, c, d) {
    c && a[b].push({
      fn: c,
      sName: d
    });
  }

  function F(a, b, c, d) {
    var e = [];
    b && (e = l.map(a[b].slice().reverse(), function (h, f) {
      return h.fn.apply(a.oInstance, d);
    }));
    null !== c && (b = l.Event(c + ".dt"), l(a.nTable).trigger(b, d), e.push(b.result));
    return e;
  }

  function lb(a) {
    var b = a._iDisplayStart,
        c = a.fnDisplayEnd(),
        d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b;
  }

  function gb(a, b) {
    a = a.renderer;
    var c = u.ext.renderer[b];
    return l.isPlainObject(a) && a[b] ? c[a[b]] || c._ : "string" === typeof a ? c[a] || c._ : c._;
  }

  function Q(a) {
    return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom";
  }

  function Da(a, b) {
    var c = ec.numbers_length,
        d = Math.floor(c / 2);
    b <= c ? a = qa(0, b) : a <= d ? (a = qa(0, c - 2), a.push("ellipsis"), a.push(b - 1)) : (a >= b - 1 - d ? a = qa(b - (c - 2), b) : (a = qa(a - d + 2, a + d - 1), a.push("ellipsis"), a.push(b - 1)), a.splice(0, 0, "ellipsis"), a.splice(0, 0, 0));
    a.DT_el = "span";
    return a;
  }

  function Xa(a) {
    l.each({
      num: function num(b) {
        return Ua(b, a);
      },
      "num-fmt": function numFmt(b) {
        return Ua(b, a, rb);
      },
      "html-num": function htmlNum(b) {
        return Ua(b, a, Va);
      },
      "html-num-fmt": function htmlNumFmt(b) {
        return Ua(b, a, Va, rb);
      }
    }, function (b, c) {
      M.type.order[b + a + "-pre"] = c;
      b.match(/^html\-/) && (M.type.search[b + a] = M.type.search.html);
    });
  }

  function fc(a) {
    return function () {
      var b = [Ta(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
      return u.ext.internal[a].apply(this, b);
    };
  }

  var u = function u(a, b) {
    if (this instanceof u) return l(a).DataTable(b);
    b = a;

    this.$ = function (f, g) {
      return this.api(!0).$(f, g);
    };

    this._ = function (f, g) {
      return this.api(!0).rows(f, g).data();
    };

    this.api = function (f) {
      return f ? new B(Ta(this[M.iApiIndex])) : new B(this);
    };

    this.fnAddData = function (f, g) {
      var k = this.api(!0);
      f = Array.isArray(f) && (Array.isArray(f[0]) || l.isPlainObject(f[0])) ? k.rows.add(f) : k.row.add(f);
      (g === q || g) && k.draw();
      return f.flatten().toArray();
    };

    this.fnAdjustColumnSizing = function (f) {
      var g = this.api(!0).columns.adjust(),
          k = g.settings()[0],
          m = k.oScroll;
      f === q || f ? g.draw(!1) : ("" !== m.sX || "" !== m.sY) && Ha(k);
    };

    this.fnClearTable = function (f) {
      var g = this.api(!0).clear();
      (f === q || f) && g.draw();
    };

    this.fnClose = function (f) {
      this.api(!0).row(f).child.hide();
    };

    this.fnDeleteRow = function (f, g, k) {
      var m = this.api(!0);
      f = m.rows(f);
      var n = f.settings()[0],
          p = n.aoData[f[0][0]];
      f.remove();
      g && g.call(this, n, p);
      (k === q || k) && m.draw();
      return p;
    };

    this.fnDestroy = function (f) {
      this.api(!0).destroy(f);
    };

    this.fnDraw = function (f) {
      this.api(!0).draw(f);
    };

    this.fnFilter = function (f, g, k, m, n, p) {
      n = this.api(!0);
      null === g || g === q ? n.search(f, k, m, p) : n.column(g).search(f, k, m, p);
      n.draw();
    };

    this.fnGetData = function (f, g) {
      var k = this.api(!0);

      if (f !== q) {
        var m = f.nodeName ? f.nodeName.toLowerCase() : "";
        return g !== q || "td" == m || "th" == m ? k.cell(f, g).data() : k.row(f).data() || null;
      }

      return k.data().toArray();
    };

    this.fnGetNodes = function (f) {
      var g = this.api(!0);
      return f !== q ? g.row(f).node() : g.rows().nodes().flatten().toArray();
    };

    this.fnGetPosition = function (f) {
      var g = this.api(!0),
          k = f.nodeName.toUpperCase();
      return "TR" == k ? g.row(f).index() : "TD" == k || "TH" == k ? (f = g.cell(f).index(), [f.row, f.columnVisible, f.column]) : null;
    };

    this.fnIsOpen = function (f) {
      return this.api(!0).row(f).child.isShown();
    };

    this.fnOpen = function (f, g, k) {
      return this.api(!0).row(f).child(g, k).show().child()[0];
    };

    this.fnPageChange = function (f, g) {
      f = this.api(!0).page(f);
      (g === q || g) && f.draw(!1);
    };

    this.fnSetColumnVis = function (f, g, k) {
      f = this.api(!0).column(f).visible(g);
      (k === q || k) && f.columns.adjust().draw();
    };

    this.fnSettings = function () {
      return Ta(this[M.iApiIndex]);
    };

    this.fnSort = function (f) {
      this.api(!0).order(f).draw();
    };

    this.fnSortListener = function (f, g, k) {
      this.api(!0).order.listener(f, g, k);
    };

    this.fnUpdate = function (f, g, k, m, n) {
      var p = this.api(!0);
      k === q || null === k ? p.row(g).data(f) : p.cell(g, k).data(f);
      (n === q || n) && p.columns.adjust();
      (m === q || m) && p.draw();
      return 0;
    };

    this.fnVersionCheck = M.fnVersionCheck;
    var c = this,
        d = b === q,
        e = this.length;
    d && (b = {});
    this.oApi = this.internal = M.internal;

    for (var h in u.ext.internal) {
      h && (this[h] = fc(h));
    }

    this.each(function () {
      var f = {},
          g = 1 < e ? qb(f, b, !0) : b,
          k = 0,
          m;
      f = this.getAttribute("id");
      var n = !1,
          p = u.defaults,
          t = l(this);
      if ("table" != this.nodeName.toLowerCase()) da(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);else {
        zb(p);
        Ab(p.column);
        P(p, p, !0);
        P(p.column, p.column, !0);
        P(p, l.extend(g, t.data()), !0);
        var v = u.settings;
        k = 0;

        for (m = v.length; k < m; k++) {
          var x = v[k];

          if (x.nTable == this || x.nTHead && x.nTHead.parentNode == this || x.nTFoot && x.nTFoot.parentNode == this) {
            var w = g.bRetrieve !== q ? g.bRetrieve : p.bRetrieve;
            if (d || w) return x.oInstance;

            if (g.bDestroy !== q ? g.bDestroy : p.bDestroy) {
              x.oInstance.fnDestroy();
              break;
            } else {
              da(x, 0, "Cannot reinitialise DataTable", 3);
              return;
            }
          }

          if (x.sTableId == this.id) {
            v.splice(k, 1);
            break;
          }
        }

        if (null === f || "" === f) this.id = f = "DataTables_Table_" + u.ext._unique++;
        var r = l.extend(!0, {}, u.models.oSettings, {
          sDestroyWidth: t[0].style.width,
          sInstance: f,
          sTableId: f
        });
        r.nTable = this;
        r.oApi = c.internal;
        r.oInit = g;
        v.push(r);
        r.oInstance = 1 === c.length ? c : t.dataTable();
        zb(g);
        ma(g.oLanguage);
        g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = Array.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
        g = qb(l.extend(!0, {}, p), g);
        X(r.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
        X(r, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]);
        X(r.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);
        X(r.oLanguage, g, "fnInfoCallback");
        R(r, "aoDrawCallback", g.fnDrawCallback, "user");
        R(r, "aoServerParams", g.fnServerParams, "user");
        R(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
        R(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
        R(r, "aoStateLoaded", g.fnStateLoaded, "user");
        R(r, "aoRowCallback", g.fnRowCallback, "user");
        R(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
        R(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
        R(r, "aoFooterCallback", g.fnFooterCallback, "user");
        R(r, "aoInitComplete", g.fnInitComplete, "user");
        R(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
        r.rowIdFn = na(g.rowId);
        Bb(r);
        var C = r.oClasses;
        l.extend(C, u.ext.classes, g.oClasses);
        t.addClass(C.sTable);
        r.iInitDisplayStart === q && (r.iInitDisplayStart = g.iDisplayStart, r._iDisplayStart = g.iDisplayStart);
        null !== g.iDeferLoading && (r.bDeferLoading = !0, f = Array.isArray(g.iDeferLoading), r._iRecordsDisplay = f ? g.iDeferLoading[0] : g.iDeferLoading, r._iRecordsTotal = f ? g.iDeferLoading[1] : g.iDeferLoading);
        var G = r.oLanguage;
        l.extend(!0, G, g.oLanguage);
        G.sUrl ? (l.ajax({
          dataType: "json",
          url: G.sUrl,
          success: function success(I) {
            P(p.oLanguage, I);
            ma(I);
            l.extend(!0, G, I);
            F(r, null, "i18n", [r]);
            Aa(r);
          },
          error: function error() {
            Aa(r);
          }
        }), n = !0) : F(r, null, "i18n", [r]);
        null === g.asStripeClasses && (r.asStripeClasses = [C.sStripeOdd, C.sStripeEven]);
        f = r.asStripeClasses;
        var aa = t.children("tbody").find("tr").eq(0);
        -1 !== l.inArray(!0, l.map(f, function (I, H) {
          return aa.hasClass(I);
        })) && (l("tbody tr", this).removeClass(f.join(" ")), r.asDestroyStripes = f.slice());
        f = [];
        v = this.getElementsByTagName("thead");
        0 !== v.length && (wa(r.aoHeader, v[0]), f = Na(r));
        if (null === g.aoColumns) for (v = [], k = 0, m = f.length; k < m; k++) {
          v.push(null);
        } else v = g.aoColumns;
        k = 0;

        for (m = v.length; k < m; k++) {
          Ya(r, f ? f[k] : null);
        }

        Db(r, g.aoColumnDefs, v, function (I, H) {
          Ga(r, I, H);
        });

        if (aa.length) {
          var L = function L(I, H) {
            return null !== I.getAttribute("data-" + H) ? H : null;
          };

          l(aa[0]).children("th, td").each(function (I, H) {
            var ea = r.aoColumns[I];

            if (ea.mData === I) {
              var Y = L(H, "sort") || L(H, "order");
              H = L(H, "filter") || L(H, "search");
              if (null !== Y || null !== H) ea.mData = {
                _: I + ".display",
                sort: null !== Y ? I + ".@data-" + Y : q,
                type: null !== Y ? I + ".@data-" + Y : q,
                filter: null !== H ? I + ".@data-" + H : q
              }, Ga(r, I);
            }
          });
        }

        var O = r.oFeatures;

        f = function f() {
          if (g.aaSorting === q) {
            var I = r.aaSorting;
            k = 0;

            for (m = I.length; k < m; k++) {
              I[k][1] = r.aoColumns[k].asSorting[0];
            }
          }

          Sa(r);
          O.bSort && R(r, "aoDrawCallback", function () {
            if (r.bSorted) {
              var Y = pa(r),
                  Ba = {};
              l.each(Y, function (fa, ba) {
                Ba[ba.src] = ba.dir;
              });
              F(r, null, "order", [r, Y, Ba]);
              cc(r);
            }
          });
          R(r, "aoDrawCallback", function () {
            (r.bSorted || "ssp" === Q(r) || O.bDeferRender) && Sa(r);
          }, "sc");
          I = t.children("caption").each(function () {
            this._captionSide = l(this).css("caption-side");
          });
          var H = t.children("thead");
          0 === H.length && (H = l("<thead/>").appendTo(t));
          r.nTHead = H[0];
          var ea = t.children("tbody");
          0 === ea.length && (ea = l("<tbody/>").insertAfter(H));
          r.nTBody = ea[0];
          H = t.children("tfoot");
          0 === H.length && 0 < I.length && ("" !== r.oScroll.sX || "" !== r.oScroll.sY) && (H = l("<tfoot/>").appendTo(t));
          0 === H.length || 0 === H.children().length ? t.addClass(C.sNoFooter) : 0 < H.length && (r.nTFoot = H[0], wa(r.aoFooter, r.nTFoot));
          if (g.aaData) for (k = 0; k < g.aaData.length; k++) {
            ia(r, g.aaData[k]);
          } else (r.bDeferLoading || "dom" == Q(r)) && Ja(r, l(r.nTBody).children("tr"));
          r.aiDisplay = r.aiDisplayMaster.slice();
          r.bInitialised = !0;
          !1 === n && Aa(r);
        };

        R(r, "aoDrawCallback", Ca, "state_save");
        g.bStateSave ? (O.bStateSave = !0, dc(r, g, f)) : f();
      }
    });
    c = null;
    return this;
  },
      M,
      y,
      J,
      sb = {},
      gc = /[\r\n\u2028]/g,
      Va = /<.*?>/g,
      vc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
      wc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
      rb = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
      Z = function Z(a) {
    return a && !0 !== a && "-" !== a ? !1 : !0;
  },
      hc = function hc(a) {
    var b = parseInt(a, 10);
    return !isNaN(b) && isFinite(a) ? b : null;
  },
      ic = function ic(a, b) {
    sb[b] || (sb[b] = new RegExp(jb(b), "g"));
    return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(sb[b], ".") : a;
  },
      tb = function tb(a, b, c) {
    var d = "string" === typeof a;
    if (Z(a)) return !0;
    b && d && (a = ic(a, b));
    c && d && (a = a.replace(rb, ""));
    return !isNaN(parseFloat(a)) && isFinite(a);
  },
      jc = function jc(a, b, c) {
    return Z(a) ? !0 : Z(a) || "string" === typeof a ? tb(a.replace(Va, ""), b, c) ? !0 : null : null;
  },
      U = function U(a, b, c) {
    var d = [],
        e = 0,
        h = a.length;
    if (c !== q) for (; e < h; e++) {
      a[e] && a[e][b] && d.push(a[e][b][c]);
    } else for (; e < h; e++) {
      a[e] && d.push(a[e][b]);
    }
    return d;
  },
      Ea = function Ea(a, b, c, d) {
    var e = [],
        h = 0,
        f = b.length;
    if (d !== q) for (; h < f; h++) {
      a[b[h]][c] && e.push(a[b[h]][c][d]);
    } else for (; h < f; h++) {
      e.push(a[b[h]][c]);
    }
    return e;
  },
      qa = function qa(a, b) {
    var c = [];

    if (b === q) {
      b = 0;
      var d = a;
    } else d = b, b = a;

    for (a = b; a < d; a++) {
      c.push(a);
    }

    return c;
  },
      kc = function kc(a) {
    for (var b = [], c = 0, d = a.length; c < d; c++) {
      a[c] && b.push(a[c]);
    }

    return b;
  },
      Ma = function Ma(a) {
    a: {
      if (!(2 > a.length)) {
        var b = a.slice().sort();

        for (var c = b[0], d = 1, e = b.length; d < e; d++) {
          if (b[d] === c) {
            b = !1;
            break a;
          }

          c = b[d];
        }
      }

      b = !0;
    }

    if (b) return a.slice();
    b = [];
    e = a.length;
    var h,
        f = 0;
    d = 0;

    a: for (; d < e; d++) {
      c = a[d];

      for (h = 0; h < f; h++) {
        if (b[h] === c) continue a;
      }

      b.push(c);
      f++;
    }

    return b;
  },
      lc = function lc(a, b) {
    if (Array.isArray(b)) for (var c = 0; c < b.length; c++) {
      lc(a, b[c]);
    } else a.push(b);
    return a;
  },
      mc = function mc(a, b) {
    b === q && (b = 0);
    return -1 !== this.indexOf(a, b);
  };

  Array.isArray || (Array.isArray = function (a) {
    return "[object Array]" === Object.prototype.toString.call(a);
  });
  Array.prototype.includes || (Array.prototype.includes = mc);
  String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  });
  String.prototype.includes || (String.prototype.includes = mc);
  u.util = {
    throttle: function throttle(a, b) {
      var c = b !== q ? b : 200,
          d,
          e;
      return function () {
        var h = this,
            f = +new Date(),
            g = arguments;
        d && f < d + c ? (clearTimeout(e), e = setTimeout(function () {
          d = q;
          a.apply(h, g);
        }, c)) : (d = f, a.apply(h, g));
      };
    },
    escapeRegex: function escapeRegex(a) {
      return a.replace(wc, "\\$1");
    },
    set: function set(a) {
      if (l.isPlainObject(a)) return u.util.set(a._);
      if (null === a) return function () {};
      if ("function" === typeof a) return function (c, d, e) {
        a(c, "set", d, e);
      };
      if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (c, d) {
        c[a] = d;
      };

      var b = function b(c, d, e) {
        e = cb(e);
        var h = e[e.length - 1];

        for (var f, g, k = 0, m = e.length - 1; k < m; k++) {
          if ("__proto__" === e[k] || "constructor" === e[k]) throw Error("Cannot set prototype values");
          f = e[k].match(Fa);
          g = e[k].match(ra);

          if (f) {
            e[k] = e[k].replace(Fa, "");
            c[e[k]] = [];
            h = e.slice();
            h.splice(0, k + 1);
            f = h.join(".");
            if (Array.isArray(d)) for (g = 0, m = d.length; g < m; g++) {
              h = {}, b(h, d[g], f), c[e[k]].push(h);
            } else c[e[k]] = d;
            return;
          }

          g && (e[k] = e[k].replace(ra, ""), c = c[e[k]](d));
          if (null === c[e[k]] || c[e[k]] === q) c[e[k]] = {};
          c = c[e[k]];
        }

        if (h.match(ra)) c[h.replace(ra, "")](d);else c[h.replace(Fa, "")] = d;
      };

      return function (c, d) {
        return b(c, d, a);
      };
    },
    get: function get(a) {
      if (l.isPlainObject(a)) {
        var b = {};
        l.each(a, function (d, e) {
          e && (b[d] = u.util.get(e));
        });
        return function (d, e, h, f) {
          var g = b[e] || b._;
          return g !== q ? g(d, e, h, f) : d;
        };
      }

      if (null === a) return function (d) {
        return d;
      };
      if ("function" === typeof a) return function (d, e, h, f) {
        return a(d, e, h, f);
      };
      if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (d, e) {
        return d[a];
      };

      var c = function c(d, e, h) {
        if ("" !== h) {
          var f = cb(h);

          for (var g = 0, k = f.length; g < k; g++) {
            h = f[g].match(Fa);
            var m = f[g].match(ra);

            if (h) {
              f[g] = f[g].replace(Fa, "");
              "" !== f[g] && (d = d[f[g]]);
              m = [];
              f.splice(0, g + 1);
              f = f.join(".");
              if (Array.isArray(d)) for (g = 0, k = d.length; g < k; g++) {
                m.push(c(d[g], e, f));
              }
              d = h[0].substring(1, h[0].length - 1);
              d = "" === d ? m : m.join(d);
              break;
            } else if (m) {
              f[g] = f[g].replace(ra, "");
              d = d[f[g]]();
              continue;
            }

            if (null === d || d[f[g]] === q) return q;
            d = d[f[g]];
          }
        }

        return d;
      };

      return function (d, e) {
        return c(d, e, a);
      };
    }
  };

  var S = function S(a, b, c) {
    a[b] !== q && (a[c] = a[b]);
  },
      Fa = /\[.*?\]$/,
      ra = /\(\)$/,
      na = u.util.get,
      ha = u.util.set,
      jb = u.util.escapeRegex,
      Qa = l("<div>")[0],
      tc = Qa.textContent !== q,
      uc = /<.*?>/g,
      hb = u.util.throttle,
      nc = [],
      N = Array.prototype,
      xc = function xc(a) {
    var b,
        c = u.settings,
        d = l.map(c, function (h, f) {
      return h.nTable;
    });

    if (a) {
      if (a.nTable && a.oApi) return [a];

      if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
        var e = l.inArray(a, d);
        return -1 !== e ? [c[e]] : null;
      }

      if (a && "function" === typeof a.settings) return a.settings().toArray();
      "string" === typeof a ? b = l(a) : a instanceof l && (b = a);
    } else return [];

    if (b) return b.map(function (h) {
      e = l.inArray(this, d);
      return -1 !== e ? c[e] : null;
    }).toArray();
  };

  var B = function B(a, b) {
    if (!(this instanceof B)) return new B(a, b);

    var c = [],
        d = function d(f) {
      (f = xc(f)) && c.push.apply(c, f);
    };

    if (Array.isArray(a)) for (var e = 0, h = a.length; e < h; e++) {
      d(a[e]);
    } else d(a);
    this.context = Ma(c);
    b && l.merge(this, b);
    this.selector = {
      rows: null,
      cols: null,
      opts: null
    };
    B.extend(this, this, nc);
  };

  u.Api = B;
  l.extend(B.prototype, {
    any: function any() {
      return 0 !== this.count();
    },
    concat: N.concat,
    context: [],
    count: function count() {
      return this.flatten().length;
    },
    each: function each(a) {
      for (var b = 0, c = this.length; b < c; b++) {
        a.call(this, this[b], b, this);
      }

      return this;
    },
    eq: function eq(a) {
      var b = this.context;
      return b.length > a ? new B(b[a], this[a]) : null;
    },
    filter: function filter(a) {
      var b = [];
      if (N.filter) b = N.filter.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
        a.call(this, this[c], c, this) && b.push(this[c]);
      }
      return new B(this.context, b);
    },
    flatten: function flatten() {
      var a = [];
      return new B(this.context, a.concat.apply(a, this.toArray()));
    },
    join: N.join,
    indexOf: N.indexOf || function (a, b) {
      b = b || 0;

      for (var c = this.length; b < c; b++) {
        if (this[b] === a) return b;
      }

      return -1;
    },
    iterator: function iterator(a, b, c, d) {
      var e = [],
          h,
          f,
          g = this.context,
          k,
          m = this.selector;
      "string" === typeof a && (d = c, c = b, b = a, a = !1);
      var n = 0;

      for (h = g.length; n < h; n++) {
        var p = new B(g[n]);

        if ("table" === b) {
          var t = c.call(p, g[n], n);
          t !== q && e.push(t);
        } else if ("columns" === b || "rows" === b) t = c.call(p, g[n], this[n], n), t !== q && e.push(t);else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
          var v = this[n];
          "column-rows" === b && (k = Wa(g[n], m.opts));
          var x = 0;

          for (f = v.length; x < f; x++) {
            t = v[x], t = "cell" === b ? c.call(p, g[n], t.row, t.column, n, x) : c.call(p, g[n], t, n, x, k), t !== q && e.push(t);
          }
        }
      }

      return e.length || d ? (a = new B(g, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = m.rows, b.cols = m.cols, b.opts = m.opts, a) : this;
    },
    lastIndexOf: N.lastIndexOf || function (a, b) {
      return this.indexOf.apply(this.toArray.reverse(), arguments);
    },
    length: 0,
    map: function map(a) {
      var b = [];
      if (N.map) b = N.map.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
        b.push(a.call(this, this[c], c));
      }
      return new B(this.context, b);
    },
    pluck: function pluck(a) {
      return this.map(function (b) {
        return b[a];
      });
    },
    pop: N.pop,
    push: N.push,
    reduce: N.reduce || function (a, b) {
      return Cb(this, a, b, 0, this.length, 1);
    },
    reduceRight: N.reduceRight || function (a, b) {
      return Cb(this, a, b, this.length - 1, -1, -1);
    },
    reverse: N.reverse,
    selector: null,
    shift: N.shift,
    slice: function slice() {
      return new B(this.context, this);
    },
    sort: N.sort,
    splice: N.splice,
    toArray: function toArray() {
      return N.slice.call(this);
    },
    to$: function to$() {
      return l(this);
    },
    toJQuery: function toJQuery() {
      return l(this);
    },
    unique: function unique() {
      return new B(this.context, Ma(this));
    },
    unshift: N.unshift
  });

  B.extend = function (a, b, c) {
    if (c.length && b && (b instanceof B || b.__dt_wrapper)) {
      var d,
          e = function e(g, k, m) {
        return function () {
          var n = k.apply(g, arguments);
          B.extend(n, n, m.methodExt);
          return n;
        };
      };

      var h = 0;

      for (d = c.length; h < d; h++) {
        var f = c[h];
        b[f.name] = "function" === f.type ? e(a, f.val, f) : "object" === f.type ? {} : f.val;
        b[f.name].__dt_wrapper = !0;
        B.extend(a, b[f.name], f.propExt);
      }
    }
  };

  B.register = y = function y(a, b) {
    if (Array.isArray(a)) for (var c = 0, d = a.length; c < d; c++) {
      B.register(a[c], b);
    } else {
      d = a.split(".");
      var e = nc,
          h;
      a = 0;

      for (c = d.length; a < c; a++) {
        var f = (h = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];

        a: {
          var g = 0;

          for (var k = e.length; g < k; g++) {
            if (e[g].name === f) {
              g = e[g];
              break a;
            }
          }

          g = null;
        }

        g || (g = {
          name: f,
          val: {},
          methodExt: [],
          propExt: [],
          type: "object"
        }, e.push(g));
        a === c - 1 ? (g.val = b, g.type = "function" === typeof b ? "function" : l.isPlainObject(b) ? "object" : "other") : e = h ? g.methodExt : g.propExt;
      }
    }
  };

  B.registerPlural = J = function J(a, b, c) {
    B.register(a, c);
    B.register(b, function () {
      var d = c.apply(this, arguments);
      return d === this ? this : d instanceof B ? d.length ? Array.isArray(d[0]) ? new B(d.context, d[0]) : d[0] : q : d;
    });
  };

  var oc = function oc(a, b) {
    if (Array.isArray(a)) return l.map(a, function (d) {
      return oc(d, b);
    });
    if ("number" === typeof a) return [b[a]];
    var c = l.map(b, function (d, e) {
      return d.nTable;
    });
    return l(c).filter(a).map(function (d) {
      d = l.inArray(this, c);
      return b[d];
    }).toArray();
  };

  y("tables()", function (a) {
    return a !== q && null !== a ? new B(oc(a, this.context)) : this;
  });
  y("table()", function (a) {
    a = this.tables(a);
    var b = a.context;
    return b.length ? new B(b[0]) : a;
  });
  J("tables().nodes()", "table().node()", function () {
    return this.iterator("table", function (a) {
      return a.nTable;
    }, 1);
  });
  J("tables().body()", "table().body()", function () {
    return this.iterator("table", function (a) {
      return a.nTBody;
    }, 1);
  });
  J("tables().header()", "table().header()", function () {
    return this.iterator("table", function (a) {
      return a.nTHead;
    }, 1);
  });
  J("tables().footer()", "table().footer()", function () {
    return this.iterator("table", function (a) {
      return a.nTFoot;
    }, 1);
  });
  J("tables().containers()", "table().container()", function () {
    return this.iterator("table", function (a) {
      return a.nTableWrapper;
    }, 1);
  });
  y("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a ? ja(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), ka(b, !1 === a));
    });
  });
  y("page()", function (a) {
    return a === q ? this.page.info().page : this.iterator("table", function (b) {
      Ra(b, a);
    });
  });
  y("page.info()", function (a) {
    if (0 === this.context.length) return q;
    a = this.context[0];
    var b = a._iDisplayStart,
        c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
        d = a.fnRecordsDisplay(),
        e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === Q(a)
    };
  });
  y("page.len()", function (a) {
    return a === q ? 0 !== this.context.length ? this.context[0]._iDisplayLength : q : this.iterator("table", function (b) {
      kb(b, a);
    });
  });

  var pc = function pc(a, b, c) {
    if (c) {
      var d = new B(a);
      d.one("draw", function () {
        c(d.ajax.json());
      });
    }

    if ("ssp" == Q(a)) ka(a, b);else {
      V(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      Oa(a, [], function (h) {
        Ka(a);
        h = za(a, h);

        for (var f = 0, g = h.length; f < g; f++) {
          ia(a, h[f]);
        }

        ka(a, b);
        V(a, !1);
      });
    }
  };

  y("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json;
  });
  y("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData;
  });
  y("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      pc(c, !1 === b, a);
    });
  });
  y("ajax.url()", function (a) {
    var b = this.context;

    if (a === q) {
      if (0 === b.length) return q;
      b = b[0];
      return b.ajax ? l.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource;
    }

    return this.iterator("table", function (c) {
      l.isPlainObject(c.ajax) ? c.ajax.url = a : c.ajax = a;
    });
  });
  y("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      pc(c, !1 === b, a);
    });
  });

  var ub = function ub(a, b, c, d, e) {
    var h = [],
        f,
        g,
        k;

    var m = _typeof(b);

    b && "string" !== m && "function" !== m && b.length !== q || (b = [b]);
    m = 0;

    for (g = b.length; m < g; m++) {
      var n = b[m] && b[m].split && !b[m].match(/[\[\(:]/) ? b[m].split(",") : [b[m]];
      var p = 0;

      for (k = n.length; p < k; p++) {
        (f = c("string" === typeof n[p] ? n[p].trim() : n[p])) && f.length && (h = h.concat(f));
      }
    }

    a = M.selector[a];
    if (a.length) for (m = 0, g = a.length; m < g; m++) {
      h = a[m](d, e, h);
    }
    return Ma(h);
  },
      vb = function vb(a) {
    a || (a = {});
    a.filter && a.search === q && (a.search = a.filter);
    return l.extend({
      search: "none",
      order: "current",
      page: "all"
    }, a);
  },
      wb = function wb(a) {
    for (var b = 0, c = a.length; b < c; b++) {
      if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
    }

    a.length = 0;
    return a;
  },
      Wa = function Wa(a, b) {
    var c = [],
        d = a.aiDisplay;
    var e = a.aiDisplayMaster;
    var h = b.search;
    var f = b.order;
    b = b.page;
    if ("ssp" == Q(a)) return "removed" === h ? [] : qa(0, e.length);
    if ("current" == b) for (f = a._iDisplayStart, a = a.fnDisplayEnd(); f < a; f++) {
      c.push(d[f]);
    } else if ("current" == f || "applied" == f) {
      if ("none" == h) c = e.slice();else if ("applied" == h) c = d.slice();else {
        if ("removed" == h) {
          var g = {};
          f = 0;

          for (a = d.length; f < a; f++) {
            g[d[f]] = null;
          }

          c = l.map(e, function (k) {
            return g.hasOwnProperty(k) ? null : k;
          });
        }
      }
    } else if ("index" == f || "original" == f) for (f = 0, a = a.aoData.length; f < a; f++) {
      "none" == h ? c.push(f) : (e = l.inArray(f, d), (-1 === e && "removed" == h || 0 <= e && "applied" == h) && c.push(f));
    }
    return c;
  },
      yc = function yc(a, b, c) {
    var d;
    return ub("row", b, function (e) {
      var h = hc(e),
          f = a.aoData;
      if (null !== h && !c) return [h];
      d || (d = Wa(a, c));
      if (null !== h && -1 !== l.inArray(h, d)) return [h];
      if (null === e || e === q || "" === e) return d;
      if ("function" === typeof e) return l.map(d, function (k) {
        var m = f[k];
        return e(k, m._aData, m.nTr) ? k : null;
      });

      if (e.nodeName) {
        h = e._DT_RowIndex;
        var g = e._DT_CellIndex;
        if (h !== q) return f[h] && f[h].nTr === e ? [h] : [];
        if (g) return f[g.row] && f[g.row].nTr === e.parentNode ? [g.row] : [];
        h = l(e).closest("*[data-dt-row]");
        return h.length ? [h.data("dt-row")] : [];
      }

      if ("string" === typeof e && "#" === e.charAt(0) && (h = a.aIds[e.replace(/^#/, "")], h !== q)) return [h.idx];
      h = kc(Ea(a.aoData, d, "nTr"));
      return l(h).filter(e).map(function () {
        return this._DT_RowIndex;
      }).toArray();
    }, a, c);
  };

  y("rows()", function (a, b) {
    a === q ? a = "" : l.isPlainObject(a) && (b = a, a = "");
    b = vb(b);
    var c = this.iterator("table", function (d) {
      return yc(d, a, b);
    }, 1);
    c.selector.rows = a;
    c.selector.opts = b;
    return c;
  });
  y("rows().nodes()", function () {
    return this.iterator("row", function (a, b) {
      return a.aoData[b].nTr || q;
    }, 1);
  });
  y("rows().data()", function () {
    return this.iterator(!0, "rows", function (a, b) {
      return Ea(a.aoData, b, "_aData");
    }, 1);
  });
  J("rows().cache()", "row().cache()", function (a) {
    return this.iterator("row", function (b, c) {
      b = b.aoData[c];
      return "search" === a ? b._aFilterData : b._aSortData;
    }, 1);
  });
  J("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      va(b, c, a);
    });
  });
  J("rows().indexes()", "row().index()", function () {
    return this.iterator("row", function (a, b) {
      return b;
    }, 1);
  });
  J("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++) {
      for (var h = 0, f = this[d].length; h < f; h++) {
        var g = c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);
        b.push((!0 === a ? "#" : "") + g);
      }
    }

    return new B(c, b);
  });
  J("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var e = b.aoData,
          h = e[c],
          f,
          g;
      e.splice(c, 1);
      var k = 0;

      for (f = e.length; k < f; k++) {
        var m = e[k];
        var n = m.anCells;
        null !== m.nTr && (m.nTr._DT_RowIndex = k);
        if (null !== n) for (m = 0, g = n.length; m < g; m++) {
          n[m]._DT_CellIndex.row = k;
        }
      }

      La(b.aiDisplayMaster, c);
      La(b.aiDisplay, c);
      La(a[d], c, !1);
      0 < b._iRecordsDisplay && b._iRecordsDisplay--;
      lb(b);
      c = b.rowIdFn(h._aData);
      c !== q && delete b.aIds[c];
    });
    this.iterator("table", function (b) {
      for (var c = 0, d = b.aoData.length; c < d; c++) {
        b.aoData[c].idx = c;
      }
    });
    return this;
  });
  y("rows.add()", function (a) {
    var b = this.iterator("table", function (d) {
      var e,
          h = [];
      var f = 0;

      for (e = a.length; f < e; f++) {
        var g = a[f];
        g.nodeName && "TR" === g.nodeName.toUpperCase() ? h.push(Ja(d, g)[0]) : h.push(ia(d, g));
      }

      return h;
    }, 1),
        c = this.rows(-1);
    c.pop();
    l.merge(c, b);
    return c;
  });
  y("row()", function (a, b) {
    return wb(this.rows(a, b));
  });
  y("row().data()", function (a) {
    var b = this.context;
    if (a === q) return b.length && this.length ? b[0].aoData[this[0]]._aData : q;
    var c = b[0].aoData[this[0]];
    c._aData = a;
    Array.isArray(a) && c.nTr && c.nTr.id && ha(b[0].rowId)(a, c.nTr.id);
    va(b[0], this[0], "data");
    return this;
  });
  y("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });
  y("row.add()", function (a) {
    a instanceof l && a.length && (a = a[0]);
    var b = this.iterator("table", function (c) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase() ? Ja(c, a)[0] : ia(c, a);
    });
    return this.row(b[0]);
  });
  l(A).on("plugin-init.dt", function (a, b) {
    a = new B(b);
    a.on("stateSaveParams", function (d, e, h) {
      d = e.rowIdFn;
      e = e.aoData;

      for (var f = [], g = 0; g < e.length; g++) {
        e[g]._detailsShow && f.push("#" + d(e[g]._aData));
      }

      h.childRows = f;
    });
    var c = a.state.loaded();
    c && c.childRows && a.rows(l.map(c.childRows, function (d) {
      return d.replace(/:/g, "\\:");
    })).every(function () {
      F(b, null, "requestChild", [this]);
    });
  });

  var zc = function zc(a, b, c, d) {
    var e = [],
        h = function h(f, g) {
      if (Array.isArray(f) || f instanceof l) for (var k = 0, m = f.length; k < m; k++) {
        h(f[k], g);
      } else f.nodeName && "tr" === f.nodeName.toLowerCase() ? e.push(f) : (k = l("<tr><td></td></tr>").addClass(g), l("td", k).addClass(g).html(f)[0].colSpan = oa(a), e.push(k[0]));
    };

    h(c, d);
    b._details && b._details.detach();
    b._details = l(e);
    b._detailsShow && b._details.insertAfter(b.nTr);
  },
      qc = u.util.throttle(function (a) {
    Ca(a[0]);
  }, 500),
      xb = function xb(a, b) {
    var c = a.context;
    c.length && (a = c[0].aoData[b !== q ? b : a[0]]) && a._details && (a._details.remove(), a._detailsShow = q, a._details = q, l(a.nTr).removeClass("dt-hasChild"), qc(c));
  },
      rc = function rc(a, b) {
    var c = a.context;

    if (c.length && a.length) {
      var d = c[0].aoData[a[0]];
      d._details && ((d._detailsShow = b) ? (d._details.insertAfter(d.nTr), l(d.nTr).addClass("dt-hasChild")) : (d._details.detach(), l(d.nTr).removeClass("dt-hasChild")), F(c[0], null, "childRow", [b, a.row(a[0])]), Ac(c[0]), qc(c));
    }
  },
      Ac = function Ac(a) {
    var b = new B(a),
        c = a.aoData;
    b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
    0 < U(c, "_details").length && (b.on("draw.dt.DT_details", function (d, e) {
      a === e && b.rows({
        page: "current"
      }).eq(0).each(function (h) {
        h = c[h];
        h._detailsShow && h._details.insertAfter(h.nTr);
      });
    }), b.on("column-visibility.dt.DT_details", function (d, e, h, f) {
      if (a === e) for (e = oa(e), h = 0, f = c.length; h < f; h++) {
        d = c[h], d._details && d._details.children("td[colspan]").attr("colspan", e);
      }
    }), b.on("destroy.dt.DT_details", function (d, e) {
      if (a === e) for (d = 0, e = c.length; d < e; d++) {
        c[d]._details && xb(b, d);
      }
    }));
  };

  y("row().child()", function (a, b) {
    var c = this.context;
    if (a === q) return c.length && this.length ? c[0].aoData[this[0]]._details : q;
    !0 === a ? this.child.show() : !1 === a ? xb(this) : c.length && this.length && zc(c[0], c[0].aoData[this[0]], a, b);
    return this;
  });
  y(["row().child.show()", "row().child().show()"], function (a) {
    rc(this, !0);
    return this;
  });
  y(["row().child.hide()", "row().child().hide()"], function () {
    rc(this, !1);
    return this;
  });
  y(["row().child.remove()", "row().child().remove()"], function () {
    xb(this);
    return this;
  });
  y("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1;
  });

  var Bc = /^([^:]+):(name|visIdx|visible)$/,
      sc = function sc(a, b, c, d, e) {
    c = [];
    d = 0;

    for (var h = e.length; d < h; d++) {
      c.push(T(a, e[d], b));
    }

    return c;
  },
      Cc = function Cc(a, b, c) {
    var d = a.aoColumns,
        e = U(d, "sName"),
        h = U(d, "nTh");
    return ub("column", b, function (f) {
      var g = hc(f);
      if ("" === f) return qa(d.length);
      if (null !== g) return [0 <= g ? g : d.length + g];

      if ("function" === typeof f) {
        var k = Wa(a, c);
        return l.map(d, function (p, t) {
          return f(t, sc(a, t, 0, 0, k), h[t]) ? t : null;
        });
      }

      var m = "string" === typeof f ? f.match(Bc) : "";
      if (m) switch (m[2]) {
        case "visIdx":
        case "visible":
          g = parseInt(m[1], 10);

          if (0 > g) {
            var n = l.map(d, function (p, t) {
              return p.bVisible ? t : null;
            });
            return [n[n.length + g]];
          }

          return [ta(a, g)];

        case "name":
          return l.map(e, function (p, t) {
            return p === m[1] ? t : null;
          });

        default:
          return [];
      }
      if (f.nodeName && f._DT_CellIndex) return [f._DT_CellIndex.column];
      g = l(h).filter(f).map(function () {
        return l.inArray(this, h);
      }).toArray();
      if (g.length || !f.nodeName) return g;
      g = l(f).closest("*[data-dt-column]");
      return g.length ? [g.data("dt-column")] : [];
    }, a, c);
  };

  y("columns()", function (a, b) {
    a === q ? a = "" : l.isPlainObject(a) && (b = a, a = "");
    b = vb(b);
    var c = this.iterator("table", function (d) {
      return Cc(d, a, b);
    }, 1);
    c.selector.cols = a;
    c.selector.opts = b;
    return c;
  });
  J("columns().header()", "column().header()", function (a, b) {
    return this.iterator("column", function (c, d) {
      return c.aoColumns[d].nTh;
    }, 1);
  });
  J("columns().footer()", "column().footer()", function (a, b) {
    return this.iterator("column", function (c, d) {
      return c.aoColumns[d].nTf;
    }, 1);
  });
  J("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", sc, 1);
  });
  J("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].mData;
    }, 1);
  });
  J("columns().cache()", "column().cache()", function (a) {
    return this.iterator("column-rows", function (b, c, d, e, h) {
      return Ea(b.aoData, h, "search" === a ? "_aFilterData" : "_aSortData", c);
    }, 1);
  });
  J("columns().nodes()", "column().nodes()", function () {
    return this.iterator("column-rows", function (a, b, c, d, e) {
      return Ea(a.aoData, e, "anCells", b);
    }, 1);
  });
  J("columns().visible()", "column().visible()", function (a, b) {
    var c = this,
        d = this.iterator("column", function (e, h) {
      if (a === q) return e.aoColumns[h].bVisible;
      var f = e.aoColumns,
          g = f[h],
          k = e.aoData,
          m;

      if (a !== q && g.bVisible !== a) {
        if (a) {
          var n = l.inArray(!0, U(f, "bVisible"), h + 1);
          f = 0;

          for (m = k.length; f < m; f++) {
            var p = k[f].nTr;
            e = k[f].anCells;
            p && p.insertBefore(e[h], e[n] || null);
          }
        } else l(U(e.aoData, "anCells", h)).detach();

        g.bVisible = a;
      }
    });
    a !== q && this.iterator("table", function (e) {
      xa(e, e.aoHeader);
      xa(e, e.aoFooter);
      e.aiDisplay.length || l(e.nTBody).find("td[colspan]").attr("colspan", oa(e));
      Ca(e);
      c.iterator("column", function (h, f) {
        F(h, null, "column-visibility", [h, f, a, b]);
      });
      (b === q || b) && c.columns.adjust();
    });
    return d;
  });
  J("columns().indexes()", "column().index()", function (a) {
    return this.iterator("column", function (b, c) {
      return "visible" === a ? ua(b, c) : c;
    }, 1);
  });
  y("columns.adjust()", function () {
    return this.iterator("table", function (a) {
      sa(a);
    }, 1);
  });
  y("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return ta(c, b);
      if ("fromData" === a || "toVisible" === a) return ua(c, b);
    }
  });
  y("column()", function (a, b) {
    return wb(this.columns(a, b));
  });

  var Dc = function Dc(a, b, c) {
    var d = a.aoData,
        e = Wa(a, c),
        h = kc(Ea(d, e, "anCells")),
        f = l(lc([], h)),
        g,
        k = a.aoColumns.length,
        m,
        n,
        p,
        t,
        v,
        x;
    return ub("cell", b, function (w) {
      var r = "function" === typeof w;

      if (null === w || w === q || r) {
        m = [];
        n = 0;

        for (p = e.length; n < p; n++) {
          for (g = e[n], t = 0; t < k; t++) {
            v = {
              row: g,
              column: t
            }, r ? (x = d[g], w(v, T(a, g, t), x.anCells ? x.anCells[t] : null) && m.push(v)) : m.push(v);
          }
        }

        return m;
      }

      if (l.isPlainObject(w)) return w.column !== q && w.row !== q && -1 !== l.inArray(w.row, e) ? [w] : [];
      r = f.filter(w).map(function (C, G) {
        return {
          row: G._DT_CellIndex.row,
          column: G._DT_CellIndex.column
        };
      }).toArray();
      if (r.length || !w.nodeName) return r;
      x = l(w).closest("*[data-dt-row]");
      return x.length ? [{
        row: x.data("dt-row"),
        column: x.data("dt-column")
      }] : [];
    }, a, c);
  };

  y("cells()", function (a, b, c) {
    l.isPlainObject(a) && (a.row === q ? (c = a, a = null) : (c = b, b = null));
    l.isPlainObject(b) && (c = b, b = null);
    if (null === b || b === q) return this.iterator("table", function (n) {
      return Dc(n, a, vb(c));
    });
    var d = c ? {
      page: c.page,
      order: c.order,
      search: c.search
    } : {},
        e = this.columns(b, d),
        h = this.rows(a, d),
        f,
        g,
        k,
        m;
    d = this.iterator("table", function (n, p) {
      n = [];
      f = 0;

      for (g = h[p].length; f < g; f++) {
        for (k = 0, m = e[p].length; k < m; k++) {
          n.push({
            row: h[p][f],
            column: e[p][k]
          });
        }
      }

      return n;
    }, 1);
    d = c && c.selected ? this.cells(d, c) : d;
    l.extend(d.selector, {
      cols: b,
      rows: a,
      opts: c
    });
    return d;
  });
  J("cells().nodes()", "cell().node()", function () {
    return this.iterator("cell", function (a, b, c) {
      return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : q;
    }, 1);
  });
  y("cells().data()", function () {
    return this.iterator("cell", function (a, b, c) {
      return T(a, b, c);
    }, 1);
  });
  J("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator("cell", function (b, c, d) {
      return b.aoData[c][a][d];
    }, 1);
  });
  J("cells().render()", "cell().render()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      return T(b, c, d, a);
    }, 1);
  });
  J("cells().indexes()", "cell().index()", function () {
    return this.iterator("cell", function (a, b, c) {
      return {
        row: b,
        column: c,
        columnVisible: ua(a, c)
      };
    }, 1);
  });
  J("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      va(b, c, a, d);
    });
  });
  y("cell()", function (a, b, c) {
    return wb(this.cells(a, b, c));
  });
  y("cell().data()", function (a) {
    var b = this.context,
        c = this[0];
    if (a === q) return b.length && c.length ? T(b[0], c[0].row, c[0].column) : q;
    Eb(b[0], c[0].row, c[0].column, a);
    va(b[0], c[0].row, "data", c[0].column);
    return this;
  });
  y("order()", function (a, b) {
    var c = this.context;
    if (a === q) return 0 !== c.length ? c[0].aaSorting : q;
    "number" === typeof a ? a = [[a, b]] : a.length && !Array.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (d) {
      d.aaSorting = a.slice();
    });
  });
  y("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      fb(d, a, b, c);
    });
  });
  y("order.fixed()", function (a) {
    if (!a) {
      var b = this.context;
      b = b.length ? b[0].aaSortingFixed : q;
      return Array.isArray(b) ? {
        pre: b
      } : b;
    }

    return this.iterator("table", function (c) {
      c.aaSortingFixed = l.extend(!0, {}, a);
    });
  });
  y(["columns().order()", "column().order()"], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var e = [];
      l.each(b[d], function (h, f) {
        e.push([f, a]);
      });
      c.aaSorting = e;
    });
  });
  y("search()", function (a, b, c, d) {
    var e = this.context;
    return a === q ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : q : this.iterator("table", function (h) {
      h.oFeatures.bFilter && ya(h, l.extend({}, h.oPreviousSearch, {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), 1);
    });
  });
  J("columns().search()", "column().search()", function (a, b, c, d) {
    return this.iterator("column", function (e, h) {
      var f = e.aoPreSearchCols;
      if (a === q) return f[h].sSearch;
      e.oFeatures.bFilter && (l.extend(f[h], {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), ya(e, e.oPreviousSearch, 1));
    });
  });
  y("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });
  y("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {});
    });
  });
  y("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });
  y("state.save()", function () {
    return this.iterator("table", function (a) {
      Ca(a);
    });
  });

  u.versionCheck = u.fnVersionCheck = function (a) {
    var b = u.version.split(".");
    a = a.split(".");

    for (var c, d, e = 0, h = a.length; e < h; e++) {
      if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
    }

    return !0;
  };

  u.isDataTable = u.fnIsDataTable = function (a) {
    var b = l(a).get(0),
        c = !1;
    if (a instanceof u.Api) return !0;
    l.each(u.settings, function (d, e) {
      d = e.nScrollHead ? l("table", e.nScrollHead)[0] : null;
      var h = e.nScrollFoot ? l("table", e.nScrollFoot)[0] : null;
      if (e.nTable === b || d === b || h === b) c = !0;
    });
    return c;
  };

  u.tables = u.fnTables = function (a) {
    var b = !1;
    l.isPlainObject(a) && (b = a.api, a = a.visible);
    var c = l.map(u.settings, function (d) {
      if (!a || a && l(d.nTable).is(":visible")) return d.nTable;
    });
    return b ? new B(c) : c;
  };

  u.camelToHungarian = P;
  y("$()", function (a, b) {
    b = this.rows(b).nodes();
    b = l(b);
    return l([].concat(b.filter(a).toArray(), b.find(a).toArray()));
  });
  l.each(["on", "one", "off"], function (a, b) {
    y(b + "()", function () {
      var c = Array.prototype.slice.call(arguments);
      c[0] = l.map(c[0].split(/\s/), function (e) {
        return e.match(/\.dt\b/) ? e : e + ".dt";
      }).join(" ");
      var d = l(this.tables().nodes());
      d[b].apply(d, c);
      return this;
    });
  });
  y("clear()", function () {
    return this.iterator("table", function (a) {
      Ka(a);
    });
  });
  y("settings()", function () {
    return new B(this.context, this.context);
  });
  y("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null;
  });
  y("data()", function () {
    return this.iterator("table", function (a) {
      return U(a.aoData, "_aData");
    }).flatten();
  });
  y("destroy()", function (a) {
    a = a || !1;
    return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
          d = b.oClasses,
          e = b.nTable,
          h = b.nTBody,
          f = b.nTHead,
          g = b.nTFoot,
          k = l(e);
      h = l(h);
      var m = l(b.nTableWrapper),
          n = l.map(b.aoData, function (t) {
        return t.nTr;
      }),
          p;
      b.bDestroying = !0;
      F(b, "aoDestroyCallback", "destroy", [b]);
      a || new B(b).columns().visible(!0);
      m.off(".DT").find(":not(tbody *)").off(".DT");
      l(z).off(".DT-" + b.sInstance);
      e != f.parentNode && (k.children("thead").detach(), k.append(f));
      g && e != g.parentNode && (k.children("tfoot").detach(), k.append(g));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      Sa(b);
      l(n).removeClass(b.asStripeClasses.join(" "));
      l("th, td", f).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
      h.children().detach();
      h.append(n);
      f = a ? "remove" : "detach";
      k[f]();
      m[f]();
      !a && c && (c.insertBefore(e, b.nTableReinsertBefore), k.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && h.children().each(function (t) {
        l(this).addClass(b.asDestroyStripes[t % p]);
      }));
      c = l.inArray(b, u.settings);
      -1 !== c && u.settings.splice(c, 1);
    });
  });
  l.each(["column", "row", "cell"], function (a, b) {
    y(b + "s().every()", function (c) {
      var d = this.selector.opts,
          e = this;
      return this.iterator(b, function (h, f, g, k, m) {
        c.call(e[b](f, "cell" === b ? g : d, "cell" === b ? d : q), f, g, k, m);
      });
    });
  });
  y("i18n()", function (a, b, c) {
    var d = this.context[0];
    a = na(a)(d.oLanguage);
    a === q && (a = b);
    c !== q && l.isPlainObject(a) && (a = a[c] !== q ? a[c] : a._);
    return a.replace("%d", c);
  });
  u.version = "1.11.5";
  u.settings = [];
  u.models = {};
  u.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0,
    "return": !1
  };
  u.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1
  };
  u.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null
  };
  u.defaults = {
    aaData: null,
    aaSorting: [[0, "asc"]],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function fnFormatNumber(a) {
      return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function fnStateLoadCallback(a) {
      try {
        return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname));
      } catch (b) {
        return {};
      }
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function fnStateSaveCallback(a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b));
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending"
      },
      oPaginate: {
        sFirst: "First",
        sLast: "Last",
        sNext: "Next",
        sPrevious: "Previous"
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "Show _MENU_ entries",
      sLoadingRecords: "Loading...",
      sProcessing: "Processing...",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found"
    },
    oSearch: l.extend({}, u.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId"
  };
  E(u.defaults);
  u.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null
  };
  E(u.defaults.column);
  u.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null
    },
    oLanguage: {
      fnInfoCallback: null
    },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    jqXHR: null,
    json: q,
    oAjaxData: q,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function fnRecordsTotal() {
      return "ssp" == Q(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
    },
    fnRecordsDisplay: function fnRecordsDisplay() {
      return "ssp" == Q(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
    },
    fnDisplayEnd: function fnDisplayEnd() {
      var a = this._iDisplayLength,
          b = this._iDisplayStart,
          c = b + a,
          d = this.aiDisplay.length,
          e = this.oFeatures,
          h = e.bPaginate;
      return e.bServerSide ? !1 === h || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !h || c > d || -1 === a ? d : c;
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null
  };
  u.ext = M = {
    buttons: {},
    classes: {},
    builder: "-source-",
    errMode: "alert",
    feature: [],
    search: [],
    selector: {
      cell: [],
      column: [],
      row: []
    },
    internal: {},
    legacy: {
      ajax: null
    },
    pager: {},
    renderer: {
      pageButton: {},
      header: {}
    },
    order: {},
    type: {
      detect: [],
      search: {},
      order: {}
    },
    _unique: 0,
    fnVersionCheck: u.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: u.version
  };
  l.extend(M, {
    afnFiltering: M.search,
    aTypes: M.type.detect,
    ofnSearch: M.type.search,
    oSort: M.type.order,
    afnSortData: M.order,
    aoFeatures: M.feature,
    oApi: M.internal,
    oStdClasses: M.classes,
    oPagination: M.pager
  });
  l.extend(u.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_desc_disabled",
    sSortableDesc: "sorting_asc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: ""
  });
  var ec = u.ext.pager;
  l.extend(ec, {
    simple: function simple(a, b) {
      return ["previous", "next"];
    },
    full: function full(a, b) {
      return ["first", "previous", "next", "last"];
    },
    numbers: function numbers(a, b) {
      return [Da(a, b)];
    },
    simple_numbers: function simple_numbers(a, b) {
      return ["previous", Da(a, b), "next"];
    },
    full_numbers: function full_numbers(a, b) {
      return ["first", "previous", Da(a, b), "next", "last"];
    },
    first_last_numbers: function first_last_numbers(a, b) {
      return ["first", Da(a, b), "last"];
    },
    _numbers: Da,
    numbers_length: 7
  });
  l.extend(!0, u.ext.renderer, {
    pageButton: {
      _: function _(a, b, c, d, e, h) {
        var f = a.oClasses,
            g = a.oLanguage.oPaginate,
            k = a.oLanguage.oAria.paginate || {},
            m,
            n,
            p = 0,
            t = function t(x, w) {
          var r,
              C = f.sPageButtonDisabled,
              G = function G(I) {
            Ra(a, I.data.action, !0);
          };

          var aa = 0;

          for (r = w.length; aa < r; aa++) {
            var L = w[aa];

            if (Array.isArray(L)) {
              var O = l("<" + (L.DT_el || "div") + "/>").appendTo(x);
              t(O, L);
            } else {
              m = null;
              n = L;
              O = a.iTabIndex;

              switch (L) {
                case "ellipsis":
                  x.append('<span class="ellipsis">&#x2026;</span>');
                  break;

                case "first":
                  m = g.sFirst;
                  0 === e && (O = -1, n += " " + C);
                  break;

                case "previous":
                  m = g.sPrevious;
                  0 === e && (O = -1, n += " " + C);
                  break;

                case "next":
                  m = g.sNext;
                  if (0 === h || e === h - 1) O = -1, n += " " + C;
                  break;

                case "last":
                  m = g.sLast;
                  if (0 === h || e === h - 1) O = -1, n += " " + C;
                  break;

                default:
                  m = a.fnFormatNumber(L + 1), n = e === L ? f.sPageButtonActive : "";
              }

              null !== m && (O = l("<a>", {
                "class": f.sPageButton + " " + n,
                "aria-controls": a.sTableId,
                "aria-label": k[L],
                "data-dt-idx": p,
                tabindex: O,
                id: 0 === c && "string" === typeof L ? a.sTableId + "_" + L : null
              }).html(m).appendTo(x), ob(O, {
                action: L
              }, G), p++);
            }
          }
        };

        try {
          var v = l(b).find(A.activeElement).data("dt-idx");
        } catch (x) {}

        t(l(b).empty(), d);
        v !== q && l(b).find("[data-dt-idx=" + v + "]").trigger("focus");
      }
    }
  });
  l.extend(u.ext.type.detect, [function (a, b) {
    b = b.oLanguage.sDecimal;
    return tb(a, b) ? "num" + b : null;
  }, function (a, b) {
    if (a && !(a instanceof Date) && !vc.test(a)) return null;
    b = Date.parse(a);
    return null !== b && !isNaN(b) || Z(a) ? "date" : null;
  }, function (a, b) {
    b = b.oLanguage.sDecimal;
    return tb(a, b, !0) ? "num-fmt" + b : null;
  }, function (a, b) {
    b = b.oLanguage.sDecimal;
    return jc(a, b) ? "html-num" + b : null;
  }, function (a, b) {
    b = b.oLanguage.sDecimal;
    return jc(a, b, !0) ? "html-num-fmt" + b : null;
  }, function (a, b) {
    return Z(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null;
  }]);
  l.extend(u.ext.type.search, {
    html: function html(a) {
      return Z(a) ? a : "string" === typeof a ? a.replace(gc, " ").replace(Va, "") : "";
    },
    string: function string(a) {
      return Z(a) ? a : "string" === typeof a ? a.replace(gc, " ") : a;
    }
  });

  var Ua = function Ua(a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = ic(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a;
  };

  l.extend(M.type.order, {
    "date-pre": function datePre(a) {
      a = Date.parse(a);
      return isNaN(a) ? -Infinity : a;
    },
    "html-pre": function htmlPre(a) {
      return Z(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
    },
    "string-pre": function stringPre(a) {
      return Z(a) ? "" : "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : "";
    },
    "string-asc": function stringAsc(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    "string-desc": function stringDesc(a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    }
  });
  Xa("");
  l.extend(!0, u.ext.renderer, {
    header: {
      _: function _(a, b, c, d) {
        l(a.nTable).on("order.dt.DT", function (e, h, f, g) {
          a === h && (e = c.idx, b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == g[e] ? d.sSortAsc : "desc" == g[e] ? d.sSortDesc : c.sSortingClass));
        });
      },
      jqueryui: function jqueryui(a, b, c, d) {
        l("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(l("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
        l(a.nTable).on("order.dt.DT", function (e, h, f, g) {
          a === h && (e = c.idx, b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == g[e] ? d.sSortAsc : "desc" == g[e] ? d.sSortDesc : c.sSortingClass), b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass("asc" == g[e] ? d.sSortJUIAsc : "desc" == g[e] ? d.sSortJUIDesc : c.sSortingClassJUI));
        });
      }
    }
  });

  var yb = function yb(a) {
    Array.isArray(a) && (a = a.join(","));
    return "string" === typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a;
  };

  u.render = {
    number: function number(a, b, c, d, e) {
      return {
        display: function display(h) {
          if ("number" !== typeof h && "string" !== typeof h) return h;
          var f = 0 > h ? "-" : "",
              g = parseFloat(h);
          if (isNaN(g)) return yb(h);
          g = g.toFixed(c);
          h = Math.abs(g);
          g = parseInt(h, 10);
          h = c ? b + (h - g).toFixed(c).substring(2) : "";
          0 === g && 0 === parseFloat(h) && (f = "");
          return f + (d || "") + g.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + h + (e || "");
        }
      };
    },
    text: function text() {
      return {
        display: yb,
        filter: yb
      };
    }
  };
  l.extend(u.ext.internal, {
    _fnExternApiFunc: fc,
    _fnBuildAjax: Oa,
    _fnAjaxUpdate: Gb,
    _fnAjaxParameters: Pb,
    _fnAjaxUpdateDraw: Qb,
    _fnAjaxDataSrc: za,
    _fnAddColumn: Ya,
    _fnColumnOptions: Ga,
    _fnAdjustColumnSizing: sa,
    _fnVisibleToColumnIndex: ta,
    _fnColumnIndexToVisible: ua,
    _fnVisbleColumns: oa,
    _fnGetColumns: Ia,
    _fnColumnTypes: $a,
    _fnApplyColumnDefs: Db,
    _fnHungarianMap: E,
    _fnCamelToHungarian: P,
    _fnLanguageCompat: ma,
    _fnBrowserDetect: Bb,
    _fnAddData: ia,
    _fnAddTr: Ja,
    _fnNodeToDataIndex: function _fnNodeToDataIndex(a, b) {
      return b._DT_RowIndex !== q ? b._DT_RowIndex : null;
    },
    _fnNodeToColumnIndex: function _fnNodeToColumnIndex(a, b, c) {
      return l.inArray(c, a.aoData[b].anCells);
    },
    _fnGetCellData: T,
    _fnSetCellData: Eb,
    _fnSplitObjNotation: cb,
    _fnGetObjectDataFn: na,
    _fnSetObjectDataFn: ha,
    _fnGetDataMaster: db,
    _fnClearTable: Ka,
    _fnDeleteIndex: La,
    _fnInvalidate: va,
    _fnGetRowElements: bb,
    _fnCreateTr: ab,
    _fnBuildHead: Fb,
    _fnDrawHead: xa,
    _fnDraw: ja,
    _fnReDraw: ka,
    _fnAddOptionsHtml: Ib,
    _fnDetectHeader: wa,
    _fnGetUniqueThs: Na,
    _fnFeatureHtmlFilter: Kb,
    _fnFilterComplete: ya,
    _fnFilterCustom: Tb,
    _fnFilterColumn: Sb,
    _fnFilter: Rb,
    _fnFilterCreateSearch: ib,
    _fnEscapeRegex: jb,
    _fnFilterData: Ub,
    _fnFeatureHtmlInfo: Nb,
    _fnUpdateInfo: Xb,
    _fnInfoMacros: Yb,
    _fnInitialise: Aa,
    _fnInitComplete: Pa,
    _fnLengthChange: kb,
    _fnFeatureHtmlLength: Jb,
    _fnFeatureHtmlPaginate: Ob,
    _fnPageChange: Ra,
    _fnFeatureHtmlProcessing: Lb,
    _fnProcessingDisplay: V,
    _fnFeatureHtmlTable: Mb,
    _fnScrollDraw: Ha,
    _fnApplyToChildren: ca,
    _fnCalculateColumnWidths: Za,
    _fnThrottle: hb,
    _fnConvertToWidth: Zb,
    _fnGetWidestNode: $b,
    _fnGetMaxLenString: ac,
    _fnStringToCss: K,
    _fnSortFlatten: pa,
    _fnSort: Hb,
    _fnSortAria: cc,
    _fnSortListener: nb,
    _fnSortAttachListener: fb,
    _fnSortingClasses: Sa,
    _fnSortData: bc,
    _fnSaveState: Ca,
    _fnLoadState: dc,
    _fnImplementState: pb,
    _fnSettingsFromNode: Ta,
    _fnLog: da,
    _fnMap: X,
    _fnBindAction: ob,
    _fnCallbackReg: R,
    _fnCallbackFire: F,
    _fnLengthOverflow: lb,
    _fnRenderer: gb,
    _fnDataSource: Q,
    _fnRowAttributes: eb,
    _fnExtend: qb,
    _fnCalculateEnd: function _fnCalculateEnd() {}
  });
  l.fn.dataTable = u;
  u.$ = l;
  l.fn.dataTableSettings = u.settings;
  l.fn.dataTableExt = u.ext;

  l.fn.DataTable = function (a) {
    return l(this).dataTable(a).api();
  };

  l.each(u, function (a, b) {
    l.fn.DataTable[a] = b;
  });
  return u;
});

/***/ }),

/***/ "./assets/components/includes/datatables/datatable-bs4.js":
/*!****************************************************************!*\
  !*** ./assets/components/includes/datatables/datatable-bs4.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/esnext.global-this.js */ "./node_modules/core-js/modules/esnext.global-this.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};

$jscomp.findInternal = function (a, b, c) {
  a instanceof String && (a = String(a));

  for (var e = a.length, d = 0; d < e; d++) {
    var f = a[d];
    if (b.call(c, f, d, a)) return {
      i: d,
      v: f
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[b] = c.value;
  return a;
};

$jscomp.getGlobal = function (a) {
  a = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, a, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) && __webpack_require__.g];

  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c;
  }

  throw Error("Cannot find global object");
};

$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === _typeof(Symbol("x"));
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";

var $jscomp$lookupPolyfilledValue = function $jscomp$lookupPolyfilledValue(a, b) {
  var c = $jscomp.propertyToPolyfillSymbol[b];
  if (null == c) return a[b];
  c = a[c];
  return void 0 !== c ? c : a[b];
};

$jscomp.polyfill = function (a, b, c, e) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, e) : $jscomp.polyfillUnisolated(a, b, c, e));
};

$jscomp.polyfillUnisolated = function (a, b, c, e) {
  c = $jscomp.global;
  a = a.split(".");

  for (e = 0; e < a.length - 1; e++) {
    var d = a[e];
    if (!(d in c)) return;
    c = c[d];
  }

  a = a[a.length - 1];
  e = c[a];
  b = b(e);
  b != e && null != b && $jscomp.defineProperty(c, a, {
    configurable: !0,
    writable: !0,
    value: b
  });
};

$jscomp.polyfillIsolated = function (a, b, c, e) {
  var d = a.split(".");
  a = 1 === d.length;
  e = d[0];
  e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var f = 0; f < d.length - 1; f++) {
    var l = d[f];
    if (!(l in e)) return;
    e = e[l];
  }

  d = d[d.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? e[d] : null;
  b = b(c);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, d, {
    configurable: !0,
    writable: !0,
    value: b
  }) : b !== c && ($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + d, d = $jscomp.propertyToPolyfillSymbol[d], $jscomp.defineProperty(e, d, {
    configurable: !0,
    writable: !0,
    value: b
  })));
};

$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (b, c) {
    return $jscomp.findInternal(this, b, c).v;
  };
}, "es6", "es3");

(function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (b) {
    return a(b, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function (a, b, c, e) {
  var d = a.fn.dataTable;
  a.extend(!0, d.defaults, {
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    renderer: "bootstrap"
  });
  a.extend(d.ext.classes, {
    sWrapper: "dataTables_wrapper dt-bootstrap4",
    sFilterInput: "form-control form-control-sm",
    sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
    sProcessing: "dataTables_processing card",
    sPageButton: "paginate_button page-item"
  });

  d.ext.renderer.pageButton.bootstrap = function (f, l, A, B, m, t) {
    var u = new d.Api(f),
        C = f.oClasses,
        n = f.oLanguage.oPaginate,
        D = f.oLanguage.oAria.paginate || {},
        h,
        k,
        v = 0,
        y = function y(q, w) {
      var x,
          E = function E(p) {
        p.preventDefault();
        a(p.currentTarget).hasClass("disabled") || u.page() == p.data.action || u.page(p.data.action).draw("page");
      };

      var r = 0;

      for (x = w.length; r < x; r++) {
        var g = w[r];
        if (Array.isArray(g)) y(q, g);else {
          k = h = "";

          switch (g) {
            case "ellipsis":
              h = "&#x2026;";
              k = "disabled";
              break;

            case "first":
              h = n.sFirst;
              k = g + (0 < m ? "" : " disabled");
              break;

            case "previous":
              h = n.sPrevious;
              k = g + (0 < m ? "" : " disabled");
              break;

            case "next":
              h = n.sNext;
              k = g + (m < t - 1 ? "" : " disabled");
              break;

            case "last":
              h = n.sLast;
              k = g + (m < t - 1 ? "" : " disabled");
              break;

            default:
              h = g + 1, k = m === g ? "active" : "";
          }

          if (h) {
            var F = a("<li>", {
              "class": C.sPageButton + " " + k,
              id: 0 === A && "string" === typeof g ? f.sTableId + "_" + g : null
            }).append(a("<a>", {
              href: "#",
              "aria-controls": f.sTableId,
              "aria-label": D[g],
              "data-dt-idx": v,
              tabindex: f.iTabIndex,
              "class": "page-link"
            }).html(h)).appendTo(q);

            f.oApi._fnBindAction(F, {
              action: g
            }, E);

            v++;
          }
        }
      }
    };

    try {
      var z = a(l).find(c.activeElement).data("dt-idx");
    } catch (q) {}

    y(a(l).empty().html('<ul class="pagination"/>').children("ul"), B);
    z !== e && a(l).find("[data-dt-idx=" + z + "]").trigger("focus");
  };

  return d;
});

/***/ }),

/***/ "./assets/components/includes/nicescroll.js":
/*!**************************************************!*\
  !*** ./assets/components/includes/nicescroll.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.seal.js */ "./node_modules/core-js/modules/es.object.seal.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/* jquery.nicescroll v3.7.6 InuYaksa - MIT - https://nicescroll.areaaperta.com */
!function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (e) {
  "use strict";

  var o = !1,
      t = !1,
      r = 0,
      i = 2e3,
      s = 0,
      n = e,
      l = document,
      a = window,
      c = n(a),
      d = [],
      u = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || !1,
      h = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || !1;
  if (u) a.cancelAnimationFrame || (h = function h(e) {});else {
    var p = 0;
    u = function u(e, o) {
      var t = new Date().getTime(),
          r = Math.max(0, 16 - (t - p)),
          i = a.setTimeout(function () {
        e(t + r);
      }, r);
      return p = t + r, i;
    }, h = function h(e) {
      a.clearTimeout(e);
    };
  }

  var m = a.MutationObserver || a.WebKitMutationObserver || !1,
      f = Date.now || function () {
    return new Date().getTime();
  },
      g = {
    zindex: "auto",
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorcolor: "#424242",
    cursorwidth: "6px",
    cursorborder: "1px solid #fff",
    cursorborderradius: "5px",
    scrollspeed: 40,
    mousescrollstep: 27,
    touchbehavior: !1,
    emulatetouch: !1,
    hwacceleration: !0,
    usetransition: !0,
    boxzoom: !1,
    dblclickzoom: !0,
    gesturezoom: !0,
    grabcursorenabled: !0,
    autohidemode: !0,
    background: "",
    iframeautoresize: !0,
    cursorminheight: 32,
    preservenativescrolling: !0,
    railoffset: !1,
    railhoffset: !1,
    bouncescroll: !0,
    spacebarenabled: !0,
    railpadding: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    disableoutline: !0,
    horizrailenabled: !0,
    railalign: "right",
    railvalign: "bottom",
    enabletranslate3d: !0,
    enablemousewheel: !0,
    enablekeyboard: !0,
    smoothscroll: !0,
    sensitiverail: !0,
    enablemouselockapi: !0,
    cursorfixedheight: !1,
    directionlockdeadzone: 6,
    hidecursordelay: 400,
    nativeparentscrolling: !0,
    enablescrollonselection: !0,
    overflowx: !0,
    overflowy: !0,
    cursordragspeed: .3,
    rtlmode: "auto",
    cursordragontouch: !1,
    oneaxismousemode: "auto",
    scriptpath: function () {
      var e = l.currentScript || function () {
        var e = l.getElementsByTagName("script");
        return !!e.length && e[e.length - 1];
      }(),
          o = e ? e.src.split("?")[0] : "";

      return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : "";
    }(),
    preventmultitouchscrolling: !0,
    disablemutationobserver: !1,
    enableobserver: !0,
    scrollbarid: !1
  },
      v = !1,
      w = function w() {
    if (v) return v;
    var e = l.createElement("DIV"),
        o = e.style,
        t = navigator.userAgent,
        r = navigator.platform,
        i = {};
    return i.haspointerlock = "pointerLockElement" in l || "webkitPointerLockElement" in l || "mozPointerLockElement" in l, i.isopera = "opera" in a, i.isopera12 = i.isopera && "getUserMedia" in navigator, i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(a.operamini), i.isie = "all" in l && "attachEvent" in e && !i.isopera, i.isieold = i.isie && !("msInterpolationMode" in o), i.isie7 = i.isie && !i.isieold && (!("documentMode" in l) || 7 === l.documentMode), i.isie8 = i.isie && "documentMode" in l && 8 === l.documentMode, i.isie9 = i.isie && "performance" in a && 9 === l.documentMode, i.isie10 = i.isie && "performance" in a && 10 === l.documentMode, i.isie11 = "msRequestFullscreen" in e && l.documentMode >= 11, i.ismsedge = "msCredentials" in a, i.ismozilla = "MozAppearance" in o, i.iswebkit = !i.ismsedge && "WebkitAppearance" in o, i.ischrome = i.iswebkit && "chrome" in a, i.ischrome38 = i.ischrome && "touchAction" in o, i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock, i.ischrome26 = !i.ischrome38 && i.ischrome && "transition" in o, i.cantouch = "ontouchstart" in l.documentElement || "ontouchstart" in a, i.hasw3ctouch = (a.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1), i.ismac = /^mac$/i.test(r), i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r), i.isios4 = i.isios && !("seal" in Object), i.isios7 = i.isios && "webkitHidden" in l, i.isios8 = i.isios && "hidden" in l, i.isios10 = i.isios && a.Proxy, i.isandroid = /android/i.test(t), i.haseventlistener = "addEventListener" in e, i.trstyle = !1, i.hastransform = !1, i.hastranslate3d = !1, i.transitionstyle = !1, i.hastransition = !1, i.transitionend = !1, i.trstyle = "transform", i.hastransform = "transform" in o || function () {
      for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, r = e.length; t < r; t++) {
        if (void 0 !== o[e[t]]) {
          i.trstyle = e[t];
          break;
        }
      }

      i.hastransform = !!i.trstyle;
    }(), i.hastransform && (o[i.trstyle] = "translate3d(1px,2px,3px)", i.hastranslate3d = /translate3d/.test(o[i.trstyle])), i.transitionstyle = "transition", i.prefixstyle = "", i.transitionend = "transitionend", i.hastransition = "transition" in o || function () {
      i.transitionend = !1;

      for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], s = 0, n = e.length; s < n; s++) {
        if (e[s] in o) {
          i.transitionstyle = e[s], i.prefixstyle = t[s], i.transitionend = r[s];
          break;
        }
      }

      i.ischrome26 && (i.prefixstyle = t[1]), i.hastransition = i.transitionstyle;
    }(), i.cursorgrabvalue = function () {
      var e = ["grab", "-webkit-grab", "-moz-grab"];
      (i.ischrome && !i.ischrome38 || i.isie) && (e = []);

      for (var t = 0, r = e.length; t < r; t++) {
        var s = e[t];
        if (o.cursor = s, o.cursor == s) return s;
      }

      return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize";
    }(), i.hasmousecapture = "setCapture" in e, i.hasMutationObserver = !1 !== m, e = null, v = i, i;
  },
      b = function b(e, p) {
    function v() {
      var e = T.doc.css(P.trstyle);
      return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/);
    }

    function b() {
      var e = T.win;
      if ("zIndex" in e) return e.zIndex();

      for (; e.length > 0;) {
        if (9 == e[0].nodeType) return !1;
        var o = e.css("zIndex");
        if (!isNaN(o) && 0 !== o) return parseInt(o);
        e = e.parent();
      }

      return !1;
    }

    function x(e, o, t) {
      var r = e.css(o),
          i = parseFloat(r);

      if (isNaN(i)) {
        var s = 3 == (i = I[r] || 0) ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
        return T.isie8 && i && (i += 1), s ? i : 0;
      }

      return i;
    }

    function S(e, o, t, r) {
      T._bind(e, o, function (r) {
        var i = {
          original: r = r || a.event,
          target: r.target || r.srcElement,
          type: "wheel",
          deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: function preventDefault() {
            return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1;
          },
          stopImmediatePropagation: function stopImmediatePropagation() {
            r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0;
          }
        };
        return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX), r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY), !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail, t.call(e, i);
      }, r);
    }

    function z(e, o, t, r) {
      T.scrollrunning || (T.newscrolly = T.getScrollTop(), T.newscrollx = T.getScrollLeft(), D = f());
      var i = f() - D;

      if (D = f(), i > 350 ? A = 1 : A += (2 - A) / 10, e = e * A | 0, o = o * A | 0, e) {
        if (r) if (e < 0) {
          if (T.getScrollLeft() >= T.page.maxw) return !0;
        } else if (T.getScrollLeft() <= 0) return !0;
        var s = e > 0 ? 1 : -1;
        X !== s && (T.scrollmom && T.scrollmom.stop(), T.newscrollx = T.getScrollLeft(), X = s), T.lastdeltax -= e;
      }

      if (o) {
        if (function () {
          var e = T.getScrollTop();

          if (o < 0) {
            if (e >= T.page.maxh) return !0;
          } else if (e <= 0) return !0;
        }()) {
          if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive) return !0;
          var n = T.view.h >> 1;
          T.newscrolly < -n ? (T.newscrolly = -n, o = -1) : T.newscrolly > T.page.maxh + n ? (T.newscrolly = T.page.maxh + n, o = 1) : o = 0;
        }

        var l = o > 0 ? 1 : -1;
        B !== l && (T.scrollmom && T.scrollmom.stop(), T.newscrolly = T.getScrollTop(), B = l), T.lastdeltay -= o;
      }

      (o || e) && T.synched("relativexy", function () {
        var e = T.lastdeltay + T.newscrolly;
        T.lastdeltay = 0;
        var o = T.lastdeltax + T.newscrollx;
        T.lastdeltax = 0, T.rail.drag || T.doScrollPos(o, e);
      });
    }

    function k(e, o, t) {
      var r, i;
      return !(t || !q) || (0 === e.deltaMode ? (r = -e.deltaX * (M.mousescrollstep / 54) | 0, i = -e.deltaY * (M.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (r = -e.deltaX * M.mousescrollstep * 50 / 80 | 0, i = -e.deltaY * M.mousescrollstep * 50 / 80 | 0), o && M.oneaxismousemode && 0 === r && i && (r = i, i = 0, t && (r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0) && (i = r, r = 0)), T.isrtlmode && (r = -r), z(r, i, t, !0) ? void (t && (q = !0)) : (q = !1, e.stopImmediatePropagation(), e.preventDefault()));
    }

    var T = this;
    this.version = "3.7.6", this.name = "nicescroll", this.me = p;
    var E = n("body"),
        M = this.opt = {
      doc: E,
      win: !1
    };
    if (n.extend(M, g), M.snapbackspeed = 80, e) for (var L in M) {
      void 0 !== e[L] && (M[L] = e[L]);
    }

    if (M.disablemutationobserver && (m = !1), this.doc = M.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== M.win, this.win = M.win || (this.ispage ? c : this.doc), this.docscroll = this.ispage && !this.haswrapper ? c : this.win, this.body = E, this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != M.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
      x: 0,
      y: 0
    }, this.scrollratio = {
      x: 0,
      y: 0
    }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == M.rtlmode) {
      var C = this.win[0] == a ? this.body : this.win,
          N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
      "horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N, this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N);
    } else this.isrtlmode = !0 === M.rtlmode, this.isvertical = !1;

    if (this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1, !1 !== M.scrollbarid) this.id = M.scrollbarid;else do {
      this.id = "ascrail" + i++;
    } while (l.getElementById(this.id));
    this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = M.overflowx, this.overflowy = M.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = w();
    var P = n.extend({}, this.detected);
    this.canhwscroll = P.hastransform && M.hwacceleration, this.ishwscroll = this.canhwscroll && T.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, M.enablemouselockapi || (P.hasmousecapture = !1, P.haspointerlock = !1), this.debounced = function (e, o, t) {
      T && (T.delaylist[e] || !1 || (T.delaylist[e] = {
        h: u(function () {
          T.delaylist[e].fn.call(T), T.delaylist[e] = !1;
        }, t)
      }, o.call(T)), T.delaylist[e].fn = o);
    }, this.synched = function (e, o) {
      T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o, u(function () {
        T && (T.synclist[e] && T.synclist[e].call(T), T.synclist[e] = null);
      }));
    }, this.unsynched = function (e) {
      T.synclist[e] && (T.synclist[e] = !1);
    }, this.css = function (e, o) {
      for (var t in o) {
        T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t]);
      }
    }, this.scrollTop = function (e) {
      return void 0 === e ? T.getScrollTop() : T.setScrollTop(e);
    }, this.scrollLeft = function (e) {
      return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e);
    };

    var R = function R(e, o, t, r, i, s, n) {
      this.st = e, this.ed = o, this.spd = t, this.p1 = r || 0, this.p2 = i || 1, this.p3 = s || 0, this.p4 = n || 1, this.ts = f(), this.df = o - e;
    };

    if (R.prototype = {
      B2: function B2(e) {
        return 3 * (1 - e) * (1 - e) * e;
      },
      B3: function B3(e) {
        return 3 * (1 - e) * e * e;
      },
      B4: function B4(e) {
        return e * e * e;
      },
      getPos: function getPos() {
        return (f() - this.ts) / this.spd;
      },
      getNow: function getNow() {
        var e = (f() - this.ts) / this.spd,
            o = this.B2(e) + this.B3(e) + this.B4(e);
        return e >= 1 ? this.ed : this.st + this.df * o | 0;
      },
      update: function update(e, o) {
        return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = f(), this.df = this.ed - this.st, this;
      }
    }, this.ishwscroll) {
      this.doc.translate = {
        x: 0,
        y: 0,
        tx: "0px",
        ty: "0px"
      }, P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (e) {
        if (!e) {
          var o = v();
          if (o) return 16 == o.length ? -o[13] : -o[5];
          if (T.timerscroll && T.timerscroll.bz) return T.timerscroll.bz.getNow();
        }

        return T.doc.translate.y;
      }, this.getScrollLeft = function (e) {
        if (!e) {
          var o = v();
          if (o) return 16 == o.length ? -o[12] : -o[4];
          if (T.timerscroll && T.timerscroll.bh) return T.timerscroll.bh.getNow();
        }

        return T.doc.translate.x;
      }, this.notifyScrollEvent = function (e) {
        var o = l.createEvent("UIEvents");
        o.initUIEvent("scroll", !1, !1, a, 1), o.niceevent = !0, e.dispatchEvent(o);
      };

      var _ = this.isrtlmode ? 1 : -1;

      P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function (e, o) {
        T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0]);
      }, this.setScrollLeft = function (e, o) {
        T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0]);
      }) : (this.setScrollTop = function (e, o) {
        T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0]);
      }, this.setScrollLeft = function (e, o) {
        T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0]);
      });
    } else this.getScrollTop = function () {
      return T.docscroll.scrollTop();
    }, this.setScrollTop = function (e) {
      T.docscroll.scrollTop(e);
    }, this.getScrollLeft = function () {
      return T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft();
    }, this.setScrollLeft = function (e) {
      return setTimeout(function () {
        if (T) return T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e), T.docscroll.scrollLeft(e);
      }, 1);
    };

    this.getTarget = function (e) {
      return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement);
    }, this.hasParent = function (e, o) {
      if (!e) return !1;

      for (var t = e.target || e.srcElement || e || !1; t && t.id != o;) {
        t = t.parentNode || !1;
      }

      return !1 !== t;
    };
    var I = {
      thin: 1,
      medium: 3,
      thick: 5
    };
    this.getDocumentScrollOffset = function () {
      return {
        top: a.pageYOffset || l.documentElement.scrollTop,
        left: a.pageXOffset || l.documentElement.scrollLeft
      };
    }, this.getOffset = function () {
      if (T.isfixed) {
        var e = T.win.offset(),
            o = T.getDocumentScrollOffset();
        return e.top -= o.top, e.left -= o.left, e;
      }

      var t = T.win.offset();
      if (!T.viewport) return t;
      var r = T.viewport.offset();
      return {
        top: t.top - r.top,
        left: t.left - r.left
      };
    }, this.updateScrollBar = function (e) {
      var o, t;
      if (T.ishwscroll) T.rail.css({
        height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)
      }), T.railh && T.railh.css({
        width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)
      });else {
        var r = T.getOffset();

        if (o = {
          top: r.top,
          left: r.left - (M.railpadding.left + M.railpadding.right)
        }, o.top += x(T.win, "border-top-width", !0), o.left += T.rail.align ? T.win.outerWidth() - x(T.win, "border-right-width") - T.rail.width : x(T.win, "border-left-width"), (t = M.railoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left)), T.railslocked || T.rail.css({
          top: o.top,
          left: o.left,
          height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)
        }), T.zoom && T.zoom.css({
          top: o.top + 1,
          left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4
        }), T.railh && !T.railslocked) {
          o = {
            top: r.top,
            left: r.left
          }, (t = M.railhoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left));
          var i = T.railh.align ? o.top + x(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + x(T.win, "border-top-width", !0),
              s = o.left + x(T.win, "border-left-width");
          T.railh.css({
            top: i - (M.railpadding.top + M.railpadding.bottom),
            left: s,
            width: T.railh.width
          });
        }
      }
    }, this.doRailClick = function (e, o, t) {
      var r, i, s, n;
      T.railslocked || (T.cancelEvent(e), "pageY" in e || (e.pageX = e.clientX + l.documentElement.scrollLeft, e.pageY = e.clientY + l.documentElement.scrollTop), o ? (r = t ? T.doScrollLeft : T.doScrollTop, s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y, T.unsynched("relativexy"), r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy, s = t ? T.scroll.x : T.scroll.y, n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top, i = t ? T.view.w : T.view.h, r(s >= n ? i : -i)));
    }, T.newscrolly = T.newscrollx = 0, T.hasanimationframe = "requestAnimationFrame" in a, T.hascancelanimationframe = "cancelAnimationFrame" in a, T.hasborderbox = !1, this.init = function () {
      if (T.saved.css = [], P.isoperamini) return !0;
      if (P.isandroid && !("hidden" in l)) return !0;
      M.emulatetouch = M.emulatetouch || M.touchbehavior, T.hasborderbox = a.getComputedStyle && "border-box" === a.getComputedStyle(l.body)["box-sizing"];
      var e = {
        "overflow-y": "hidden"
      };

      if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"), T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"), P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)), T.zindex = "auto", T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = b() || "auto", !T.ispage && "auto" != T.zindex && T.zindex > s && (s = T.zindex), T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"), !T.ispage || !P.isieold) {
        var i = T.docscroll;
        T.ispage && (i = T.haswrapper ? T.win : T.doc), T.css(i, e), T.ispage && (P.isie11 || P.isie) && T.css(n("html"), e), !P.isios || T.ispage || T.haswrapper || T.css(E, {
          "-webkit-overflow-scrolling": "touch"
        });
        var d = n(l.createElement("div"));
        d.css({
          position: "relative",
          top: 0,
          "float": "right",
          width: M.cursorwidth,
          height: 0,
          "background-color": M.cursorcolor,
          border: M.cursorborder,
          "background-clip": "padding-box",
          "-webkit-border-radius": M.cursorborderradius,
          "-moz-border-radius": M.cursorborderradius,
          "border-radius": M.cursorborderradius
        }), d.addClass("nicescroll-cursors"), T.cursor = d;
        var u = n(l.createElement("div"));
        u.attr("id", T.id), u.addClass("nicescroll-rails nicescroll-rails-vr");
        var h,
            p,
            f = ["left", "right", "top", "bottom"];

        for (var g in f) {
          p = f[g], (h = M.railpadding[p] || 0) && u.css("padding-" + p, h + "px");
        }

        u.append(d), u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth()), u.css({
          width: u.width + "px",
          zIndex: T.zindex,
          background: M.background,
          cursor: "default"
        }), u.visibility = !0, u.scrollable = !0, u.align = "left" == M.railalign ? 0 : 1, T.rail = u, T.rail.drag = !1;
        var v = !1;
        !M.boxzoom || T.ispage || P.isieold || (v = l.createElement("div"), T.bind(v, "click", T.doZoom), T.bind(v, "mouseenter", function () {
          T.zoom.css("opacity", M.cursoropacitymax);
        }), T.bind(v, "mouseleave", function () {
          T.zoom.css("opacity", M.cursoropacitymin);
        }), T.zoom = n(v), T.zoom.css({
          cursor: "pointer",
          zIndex: T.zindex,
          backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
          height: 18,
          width: 18,
          backgroundPosition: "0 0"
        }), M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom), P.cantouch && M.gesturezoom && (T.ongesturezoom = function (e) {
          return e.scale > 1.5 && T.doZoomIn(e), e.scale < .8 && T.doZoomOut(e), T.cancelEvent(e);
        }, T.bind(T.win, "gestureend", T.ongesturezoom))), T.railh = !1;
        var w;
        if (M.horizrailenabled && (T.css(i, {
          overflowX: "hidden"
        }), (d = n(l.createElement("div"))).css({
          position: "absolute",
          top: 0,
          height: M.cursorwidth,
          width: 0,
          backgroundColor: M.cursorcolor,
          border: M.cursorborder,
          backgroundClip: "padding-box",
          "-webkit-border-radius": M.cursorborderradius,
          "-moz-border-radius": M.cursorborderradius,
          "border-radius": M.cursorborderradius
        }), P.isieold && d.css("overflow", "hidden"), d.addClass("nicescroll-cursors"), T.cursorh = d, (w = n(l.createElement("div"))).attr("id", T.id + "-hr"), w.addClass("nicescroll-rails nicescroll-rails-hr"), w.height = Math.max(parseFloat(M.cursorwidth), d.outerHeight()), w.css({
          height: w.height + "px",
          zIndex: T.zindex,
          background: M.background
        }), w.append(d), w.visibility = !0, w.scrollable = !0, w.align = "top" == M.railvalign ? 0 : 1, T.railh = w, T.railh.drag = !1), T.ispage) u.css({
          position: "fixed",
          top: 0,
          height: "100%"
        }), u.css(u.align ? {
          right: 0
        } : {
          left: 0
        }), T.body.append(u), T.railh && (w.css({
          position: "fixed",
          left: 0,
          width: "100%"
        }), w.css(w.align ? {
          bottom: 0
        } : {
          top: 0
        }), T.body.append(w));else {
          if (T.ishwscroll) {
            "static" == T.win.css("position") && T.css(T.win, {
              position: "relative"
            });
            var x = "HTML" == T.win[0].nodeName ? T.body : T.win;
            n(x).scrollTop(0).scrollLeft(0), T.zoom && (T.zoom.css({
              position: "absolute",
              top: 1,
              right: 0,
              "margin-right": u.width + 4
            }), x.append(T.zoom)), u.css({
              position: "absolute",
              top: 0
            }), u.css(u.align ? {
              right: 0
            } : {
              left: 0
            }), x.append(u), w && (w.css({
              position: "absolute",
              left: 0,
              bottom: 0
            }), w.css(w.align ? {
              bottom: 0
            } : {
              top: 0
            }), x.append(w));
          } else {
            T.isfixed = "fixed" == T.win.css("position");
            var S = T.isfixed ? "fixed" : "absolute";
            T.isfixed || (T.viewport = T.getViewport(T.win[0])), T.viewport && (T.body = T.viewport, /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {
              position: "relative"
            })), u.css({
              position: S
            }), T.zoom && T.zoom.css({
              position: S
            }), T.updateScrollBar(), T.body.append(u), T.zoom && T.body.append(T.zoom), T.railh && (w.css({
              position: S
            }), T.body.append(w));
          }

          P.isios && T.css(T.win, {
            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
            "-webkit-touch-callout": "none"
          }), M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"), P.iswebkit && T.win.css("outline", "none"));
        }

        if (!1 === M.autohidemode ? (T.autohidedom = !1, T.rail.css({
          opacity: M.cursoropacitymax
        }), T.railh && T.railh.css({
          opacity: M.cursoropacitymax
        })) : !0 === M.autohidemode || "leave" === M.autohidemode ? (T.autohidedom = n().add(T.rail), P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)), T.railh && (T.autohidedom = T.autohidedom.add(T.railh)), T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = n().add(T.rail), T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = n().add(T.cursor), T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1, T.hide(), T.railslocked = !1), P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
          T.scrollmom = new y(T);
          T.ontouchstart = function (e) {
            if (T.locked) return !1;
            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;

            if (T.hasmoving = !1, T.scrollmom.timer && (T.triggerScrollEnd(), T.scrollmom.stop()), !T.railslocked) {
              var o = T.getTarget(e);
              if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type)) return T.stopPropagation(e);
              var t = "mousedown" === e.type;

              if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), T.forcescreen) {
                var r = e;
                (e = {
                  original: e.original ? e.original : e
                }).clientX = r.screenX, e.clientY = r.screenY;
              }

              if (T.rail.drag = {
                x: e.clientX,
                y: e.clientY,
                sx: T.scroll.x,
                sy: T.scroll.y,
                st: T.getScrollTop(),
                sl: T.getScrollLeft(),
                pt: 2,
                dl: !1,
                tg: o
              }, T.ispage || !M.directionlockdeadzone) T.rail.drag.dl = "f";else {
                var i = {
                  w: c.width(),
                  h: c.height()
                },
                    s = T.getContentSize(),
                    l = s.h - i.h,
                    a = s.w - i.w;
                T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 && "v" : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = a > 0 && "h" : T.rail.drag.ck = !1;
              }

              if (M.emulatetouch && T.isiframe && P.isie) {
                var d = T.win.position();
                T.rail.drag.x += d.left, T.rail.drag.y += d.top;
              }

              if (T.hasmoving = !1, T.lastmouseup = !1, T.scrollmom.reset(e.clientX, e.clientY), o && t) {
                if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName)) return P.hasmousecapture && o.setCapture(), M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function (e) {
                  if (T.hasmoving) return !1;

                  o._onclick.call(this, e);
                }), T.cancelEvent(e)) : T.stopPropagation(e);
                /SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type")) && (T.preventclick = {
                  tg: o,
                  click: !1
                });
              }
            }
          }, T.ontouchend = function (e) {
            if (!T.rail.drag) return !0;

            if (2 == T.rail.drag.pt) {
              if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
              T.rail.drag = !1;
              var o = "mouseup" === e.type;
              if (T.hasmoving && (T.scrollmom.doMomentum(), T.lastmouseup = !0, T.hideCursor(), P.hasmousecapture && l.releaseCapture(), o)) return T.cancelEvent(e);
            } else if (1 == T.rail.drag.pt) return T.onmouseup(e);
          };
          var z = M.emulatetouch && T.isiframe && !P.hasmousecapture,
              k = .3 * M.directionlockdeadzone | 0;
          T.ontouchmove = function (e, o) {
            if (!T.rail.drag) return !0;
            if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1) return !0;
            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;

            if (2 == T.rail.drag.pt) {
              "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY);
              var t, r;

              if (r = t = 0, z && !o) {
                var i = T.win.position();
                r = -i.left, t = -i.top;
              }

              var s = e.clientY + t,
                  n = s - T.rail.drag.y,
                  a = e.clientX + r,
                  c = a - T.rail.drag.x,
                  d = T.rail.drag.st - n;
              if (T.ishwscroll && M.bouncescroll) d < 0 ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));else if (d < 0 ? (d = 0, s = 0) : d > T.page.maxh && (d = T.page.maxh, s = 0), 0 === s && !T.hasmoving) return T.ispage || (T.rail.drag = !1), !0;
              var u = T.getScrollLeft();

              if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? c - T.rail.drag.sl : T.rail.drag.sl - c, T.ishwscroll && M.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (u < 0 && (u = 0, a = 0), u > T.page.maxw && (u = T.page.maxw, a = 0))), !T.hasmoving) {
                if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX) return T.cancelEvent(e);
                var h = Math.abs(n),
                    p = Math.abs(c),
                    m = M.directionlockdeadzone;
                if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && h <= k ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && p <= k ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"), !T.rail.drag.dl) return T.cancelEvent(e);
                T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0;
              }

              return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1, T.preventclick.tg.onclick = T.onpreventclick), T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)), T.synched("touchmove", function () {
                T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(), T.rail.scrollable && T.setScrollTop(d), T.scrollmom.update(a, s), T.railh && T.railh.scrollable ? (T.setScrollLeft(u), T.showCursor(d, u)) : T.showCursor(d), P.isie10 && l.selection.clear());
              }), T.cancelEvent(e);
            }

            return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0;
          }, T.ontouchstartCursor = function (e, o) {
            if (!T.rail.drag || 3 == T.rail.drag.pt) {
              if (T.locked) return T.cancelEvent(e);
              T.cancelScroll(), T.rail.drag = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
                sx: T.scroll.x,
                sy: T.scroll.y,
                pt: 3,
                hr: !!o
              };
              var t = T.getTarget(e);
              return !T.ispage && P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
                "pointer-events": "none"
              })), T.cancelEvent(e);
            }
          }, T.ontouchendCursor = function (e) {
            if (T.rail.drag) {
              if (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), 3 != T.rail.drag.pt) return;
              return T.rail.drag = !1, T.cancelEvent(e);
            }
          }, T.ontouchmoveCursor = function (e) {
            if (T.rail.drag) {
              if (3 != T.rail.drag.pt) return;

              if (T.cursorfreezed = !0, T.rail.drag.hr) {
                T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                var o = T.scrollvaluemaxw;
                T.scroll.x > o && (T.scroll.x = o);
              } else {
                T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                var t = T.scrollvaluemax;
                T.scroll.y > t && (T.scroll.y = t);
              }

              return T.synched("touchmove", function () {
                T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(), T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed));
              }), T.cancelEvent(e);
            }
          };
        }

        if (T.onmousedown = function (e, o) {
          if (!T.rail.drag || 1 == T.rail.drag.pt) {
            if (T.railslocked) return T.cancelEvent(e);
            T.cancelScroll(), T.rail.drag = {
              x: e.clientX,
              y: e.clientY,
              sx: T.scroll.x,
              sy: T.scroll.y,
              pt: 1,
              hr: o || !1
            };
            var t = T.getTarget(e);
            return P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {
              "pointer-events": "none"
            })), T.hasmoving = !1, T.cancelEvent(e);
          }
        }, T.onmouseup = function (e) {
          if (T.rail.drag) return 1 != T.rail.drag.pt || (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), T.rail.drag = !1, T.cursorfreezed = !1, T.hasmoving && T.triggerScrollEnd(), T.cancelEvent(e));
        }, T.onmousemove = function (e) {
          if (T.rail.drag) {
            if (1 !== T.rail.drag.pt) return;
            if (P.ischrome && 0 === e.which) return T.onmouseup(e);

            if (T.cursorfreezed = !0, T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0, T.rail.drag.hr) {
              T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
              var o = T.scrollvaluemaxw;
              T.scroll.x > o && (T.scroll.x = o);
            } else {
              T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
              var t = T.scrollvaluemax;
              T.scroll.y > t && (T.scroll.y = t);
            }

            return T.synched("mousemove", function () {
              T.cursorfreezed && (T.showCursor(), T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)));
            }), T.cancelEvent(e);
          }

          T.checkarea = 0;
        }, P.cantouch || M.emulatetouch) T.onpreventclick = function (e) {
          if (T.preventclick) return T.preventclick.tg.onclick = T.preventclick.click, T.preventclick = !1, T.cancelEvent(e);
        }, T.onclick = !P.isios && function (e) {
          return !T.lastmouseup || (T.lastmouseup = !1, T.cancelEvent(e));
        }, M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {
          cursor: P.cursorgrabvalue
        }), T.css(T.rail, {
          cursor: P.cursorgrabvalue
        }));else {
          var L = function L(e) {
            if (T.selectiondrag) {
              if (e) {
                var o = T.win.outerHeight(),
                    t = e.pageY - T.selectiondrag.top;
                t > 0 && t < o && (t = 0), t >= o && (t -= o), T.selectiondrag.df = t;
              }

              if (0 !== T.selectiondrag.df) {
                var r = -2 * T.selectiondrag.df / 6 | 0;
                T.doScrollBy(r), T.debounced("doselectionscroll", function () {
                  L();
                }, 50);
              }
            }
          };

          T.hasTextSelected = "getSelection" in l ? function () {
            return l.getSelection().rangeCount > 0;
          } : "selection" in l ? function () {
            return "None" != l.selection.type;
          } : function () {
            return !1;
          }, T.onselectionstart = function (e) {
            T.ispage || (T.selectiondrag = T.win.offset());
          }, T.onselectionend = function (e) {
            T.selectiondrag = !1;
          }, T.onselectiondrag = function (e) {
            T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function () {
              L(e);
            }, 250);
          };
        }

        if (P.hasw3ctouch ? (T.css(T.ispage ? n("html") : T.win, {
          "touch-action": "none"
        }), T.css(T.rail, {
          "touch-action": "none"
        }), T.css(T.cursor, {
          "touch-action": "none"
        }), T.bind(T.win, "pointerdown", T.ontouchstart), T.bind(l, "pointerup", T.ontouchend), T.delegate(l, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? n("html") : T.win, {
          "-ms-touch-action": "none"
        }), T.css(T.rail, {
          "-ms-touch-action": "none"
        }), T.css(T.cursor, {
          "-ms-touch-action": "none"
        }), T.bind(T.win, "MSPointerDown", T.ontouchstart), T.bind(l, "MSPointerUp", T.ontouchend), T.delegate(l, "MSPointerMove", T.ontouchmove), T.bind(T.cursor, "MSGestureHold", function (e) {
          e.preventDefault();
        }), T.bind(T.cursor, "contextmenu", function (e) {
          e.preventDefault();
        })) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0), T.bind(l, "touchend", T.ontouchend, !1, !0), T.bind(l, "touchcancel", T.ontouchend, !1, !0), T.delegate(l, "touchmove", T.ontouchmove, !1, !0)), M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0), T.bind(l, "mouseup", T.ontouchend, !1, !0), T.bind(l, "mousemove", T.ontouchmove, !1, !0)), (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({
          cursor: "default"
        }), T.railh && T.railh.css({
          cursor: "default"
        }), T.jqbind(T.rail, "mouseenter", function () {
          if (!T.ispage && !T.win.is(":visible")) return !1;
          T.canshowonmouseevent && T.showCursor(), T.rail.active = !0;
        }), T.jqbind(T.rail, "mouseleave", function () {
          T.rail.active = !1, T.rail.drag || T.hideCursor();
        }), M.sensitiverail && (T.bind(T.rail, "click", function (e) {
          T.doRailClick(e, !1, !1);
        }), T.bind(T.rail, "dblclick", function (e) {
          T.doRailClick(e, !0, !1);
        }), T.bind(T.cursor, "click", function (e) {
          T.cancelEvent(e);
        }), T.bind(T.cursor, "dblclick", function (e) {
          T.cancelEvent(e);
        })), T.railh && (T.jqbind(T.railh, "mouseenter", function () {
          if (!T.ispage && !T.win.is(":visible")) return !1;
          T.canshowonmouseevent && T.showCursor(), T.rail.active = !0;
        }), T.jqbind(T.railh, "mouseleave", function () {
          T.rail.active = !1, T.rail.drag || T.hideCursor();
        }), M.sensitiverail && (T.bind(T.railh, "click", function (e) {
          T.doRailClick(e, !1, !0);
        }), T.bind(T.railh, "dblclick", function (e) {
          T.doRailClick(e, !0, !0);
        }), T.bind(T.cursorh, "click", function (e) {
          T.cancelEvent(e);
        }), T.bind(T.cursorh, "dblclick", function (e) {
          T.cancelEvent(e);
        })))), M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor), T.bind(T.cursor, "touchmove", T.ontouchmoveCursor), T.bind(T.cursor, "touchend", T.ontouchendCursor), T.cursorh && T.bind(T.cursorh, "touchstart", function (e) {
          T.ontouchstartCursor(e, !0);
        }), T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor), T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)), M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.ontouchend), T.onclick && T.bind(l, "click", T.onclick), M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.cursorh && T.bind(T.cursorh, "mousedown", function (e) {
          T.onmousedown(e, !0);
        }), T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function (e) {
          e.preventDefault();
        }), T.railh && T.bind(T.railh, "mousedown", function (e) {
          e.preventDefault();
        }))) : (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.onmouseup), T.bind(l, "mousemove", T.onmousemove), T.onclick && T.bind(l, "click", T.onclick), T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.railh && (T.bind(T.cursorh, "mousedown", function (e) {
          T.onmousedown(e, !0);
        }), T.bind(T.cursorh, "mouseup", T.onmouseup)), !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart), T.bind(l, "mouseup", T.onselectionend), T.bind(T.cursor, "mouseup", T.onselectionend), T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend), T.bind(l, "mousemove", T.onselectiondrag)), T.zoom && (T.jqbind(T.zoom, "mouseenter", function () {
          T.canshowonmouseevent && T.showCursor(), T.rail.active = !0;
        }), T.jqbind(T.zoom, "mouseleave", function () {
          T.rail.active = !1, T.rail.drag || T.hideCursor();
        }))), M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel), T.mousewheel(T.rail, T.onmousewheel), T.railh && T.mousewheel(T.railh, T.onmousewheelhr)), T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({
          tabindex: ++r
        }), T.bind(T.win, "focus", function (e) {
          o = T.getTarget(e).id || T.getTarget(e) || !1, T.hasfocus = !0, T.canshowonmouseevent && T.noticeCursor();
        }), T.bind(T.win, "blur", function (e) {
          o = !1, T.hasfocus = !1;
        }), T.bind(T.win, "mouseenter", function (e) {
          t = T.getTarget(e).id || T.getTarget(e) || !1, T.hasmousefocus = !0, T.canshowonmouseevent && T.noticeCursor();
        }), T.bind(T.win, "mouseleave", function (e) {
          t = !1, T.hasmousefocus = !1, T.rail.drag || T.hideCursor();
        })), T.onkeypress = function (e) {
          if (T.railslocked && 0 === T.page.maxh) return !0;
          e = e || a.event;
          var r = T.getTarget(e);
          if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!(r.getAttribute("type") || r.type || !1) || !/submit|button|cancel/i.tp)) return !0;
          if (n(r).attr("contenteditable")) return !0;

          if (T.hasfocus || T.hasmousefocus && !o || T.ispage && !o && !t) {
            var i = e.keyCode;
            if (T.railslocked && 27 != i) return T.cancelEvent(e);
            var s = e.ctrlKey || !1,
                l = e.shiftKey || !1,
                c = !1;

            switch (i) {
              case 38:
              case 63233:
                T.doScrollBy(72), c = !0;
                break;

              case 40:
              case 63235:
                T.doScrollBy(-72), c = !0;
                break;

              case 37:
              case 63232:
                T.railh && (s ? T.doScrollLeft(0) : T.doScrollLeftBy(72), c = !0);
                break;

              case 39:
              case 63234:
                T.railh && (s ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72), c = !0);
                break;

              case 33:
              case 63276:
                T.doScrollBy(T.view.h), c = !0;
                break;

              case 34:
              case 63277:
                T.doScrollBy(-T.view.h), c = !0;
                break;

              case 36:
              case 63273:
                T.railh && s ? T.doScrollPos(0, 0) : T.doScrollTo(0), c = !0;
                break;

              case 35:
              case 63275:
                T.railh && s ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh), c = !0;
                break;

              case 32:
                M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h), c = !0);
                break;

              case 27:
                T.zoomactive && (T.doZoom(), c = !0);
            }

            if (c) return T.cancelEvent(e);
          }
        }, M.enablekeyboard && T.bind(l, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress), T.bind(l, "keydown", function (e) {
          (e.ctrlKey || !1) && (T.wheelprevented = !0);
        }), T.bind(l, "keyup", function (e) {
          e.ctrlKey || !1 || (T.wheelprevented = !1);
        }), T.bind(a, "blur", function (e) {
          T.wheelprevented = !1;
        }), T.bind(a, "resize", T.onscreenresize), T.bind(a, "orientationchange", T.onscreenresize), T.bind(a, "load", T.lazyResize), P.ischrome && !T.ispage && !T.haswrapper) {
          var C = T.win.attr("style"),
              N = parseFloat(T.win.css("width")) + 1;
          T.win.css("width", N), T.synched("chromefix", function () {
            T.win.attr("style", C);
          });
        }

        if (T.onAttributeChange = function (e) {
          T.lazyResize(T.isieold ? 250 : 30);
        }, M.enableobserver && (T.isie11 || !1 === m || (T.observerbody = new m(function (e) {
          if (e.forEach(function (e) {
            if ("attributes" == e.type) return E.hasClass("modal-open") && E.hasClass("modal-dialog") && !n.contains(n(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show();
          }), T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height) return T.lazyResize(30);
        }), T.observerbody.observe(l.body, {
          childList: !0,
          subtree: !0,
          characterData: !1,
          attributes: !0,
          attributeFilter: ["class"]
        })), !T.ispage && !T.haswrapper)) {
          var R = T.win[0];
          !1 !== m ? (T.observer = new m(function (e) {
            e.forEach(T.onAttributeChange);
          }), T.observer.observe(R, {
            childList: !0,
            characterData: !1,
            attributes: !0,
            subtree: !1
          }), T.observerremover = new m(function (e) {
            e.forEach(function (e) {
              if (e.removedNodes.length > 0) for (var o in e.removedNodes) {
                if (T && e.removedNodes[o] === R) return T.remove();
              }
            });
          }), T.observerremover.observe(R.parentNode, {
            childList: !0,
            characterData: !1,
            attributes: !1,
            subtree: !1
          })) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange), P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange), T.bind(R, "DOMNodeRemoved", function (e) {
            e.target === R && T.remove();
          }));
        }

        !T.ispage && M.boxzoom && T.bind(a, "resize", T.resizeZoom), T.istextarea && (T.bind(T.win, "keydown", T.lazyResize), T.bind(T.win, "mouseup", T.lazyResize)), T.lazyResize(30);
      }

      if ("IFRAME" == this.doc[0].nodeName) {
        var _ = function _() {
          T.iframexd = !1;
          var o;

          try {
            (o = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc).domain;
          } catch (e) {
            T.iframexd = !0, o = !1;
          }

          if (T.iframexd) return "console" in a && console.log("NiceScroll error: policy restriced iframe"), !0;

          if (T.forcescreen = !0, T.isiframe && (T.iframe = {
            doc: n(o),
            html: T.doc.contents().find("html")[0],
            body: T.doc.contents().find("body")[0]
          }, T.getContentSize = function () {
            return {
              w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth),
              h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)
            };
          }, T.docscroll = n(T.iframe.body)), !P.isios && M.iframeautoresize && !T.isiframe) {
            T.win.scrollTop(0), T.doc.height("");
            var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
            T.doc.height(t);
          }

          T.lazyResize(30), T.css(n(T.iframe.body), e), P.isios && T.haswrapper && T.css(n(o.body), {
            "-webkit-transform": "translate3d(0,0,0)"
          }), "contentWindow" in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll), M.enablemousewheel && T.mousewheel(o, T.onmousewheel), M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress), P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart), T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart), T.bind(o, "mousemove", function (e) {
            return T.ontouchmove(e, !0);
          }), M.grabcursorenabled && P.cursorgrabvalue && T.css(n(o.body), {
            cursor: P.cursorgrabvalue
          })), T.bind(o, "mouseup", T.ontouchend), T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom), T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom));
        };

        this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function () {
          _.call(T.doc[0], !1);
        }, 500), T.bind(this.doc, "load", _);
      }
    }, this.showCursor = function (e, o) {
      if (T.cursortimeout && (clearTimeout(T.cursortimeout), T.cursortimeout = 0), T.rail) {
        if (T.autohidedom && (T.autohidedom.stop().css({
          opacity: M.cursoropacitymax
        }), T.cursoractive = !0), T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && !1 !== e && (T.scroll.y = e / T.scrollratio.y | 0), void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)), T.cursor.css({
          height: T.cursorheight,
          top: T.scroll.y
        }), T.cursorh) {
          var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
          T.cursorh.css({
            width: T.cursorwidth,
            left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t
          }), T.cursoractive = !0;
        }

        T.zoom && T.zoom.stop().css({
          opacity: M.cursoropacitymax
        });
      }
    }, this.hideCursor = function (e) {
      T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function () {
        T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({
          opacity: M.cursoropacitymin
        }), T.zoom && T.zoom.stop().animate({
          opacity: M.cursoropacitymin
        }), T.cursoractive = !1), T.cursortimeout = 0;
      }, e || M.hidecursordelay)));
    }, this.noticeCursor = function (e, o, t) {
      T.showCursor(o, t), T.rail.active || T.hideCursor(e);
    }, this.getContentSize = T.ispage ? function () {
      return {
        w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth),
        h: Math.max(l.body.scrollHeight, l.documentElement.scrollHeight)
      };
    } : T.haswrapper ? function () {
      return {
        w: T.doc[0].offsetWidth,
        h: T.doc[0].offsetHeight
      };
    } : function () {
      return {
        w: T.docscroll[0].scrollWidth,
        h: T.docscroll[0].scrollHeight
      };
    }, this.onResize = function (e, o) {
      if (!T || !T.win) return !1;
      var t = T.page.maxh,
          r = T.page.maxw,
          i = T.view.h,
          s = T.view.w;

      if (T.view = {
        w: T.ispage ? T.win.width() : T.win[0].clientWidth,
        h: T.ispage ? T.win.height() : T.win[0].clientHeight
      }, T.page = o || T.getContentSize(), T.page.maxh = Math.max(0, T.page.h - T.view.h), T.page.maxw = Math.max(0, T.page.w - T.view.w), T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
        if (T.ispage) return T;
        var n = T.win.offset();

        if (T.lastposition) {
          var l = T.lastposition;
          if (l.top == n.top && l.left == n.left) return T;
        }

        T.lastposition = n;
      }

      return 0 === T.page.maxh ? (T.hideRail(), T.scrollvaluemax = 0, T.scroll.y = 0, T.scrollratio.y = 0, T.cursorheight = 0, T.setScrollTop(0), T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom, T.rail.scrollable = !0), 0 === T.page.maxw ? (T.hideRailHr(), T.scrollvaluemaxw = 0, T.scroll.x = 0, T.scrollratio.x = 0, T.cursorwidth = 0, T.setScrollLeft(0), T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right, T.railh && (T.railh.scrollable = M.horizrailenabled)), T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw, T.railslocked ? (T.ispage || T.updateScrollBar(T.view), !1) : (T.hidden || (T.rail.visibility || T.showRail(), T.railh && !T.railh.visibility && T.showRailHr()), T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20), T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))), T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight), T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))), T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth), T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom), T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight), T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w, T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)), T.ispage || T.updateScrollBar(T.view), T.scrollratio = {
        x: T.page.maxw / T.scrollvaluemaxw,
        y: T.page.maxh / T.scrollvaluemax
      }, T.getScrollTop() > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0, T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0, T.cursoractive && T.noticeCursor()), T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0), T);
    }, this.resize = T.onResize;
    var O = 0;
    this.onscreenresize = function (e) {
      clearTimeout(O);
      var o = !T.ispage && !T.haswrapper;
      o && T.hideRails(), O = setTimeout(function () {
        T && (o && T.showRails(), T.resize()), O = 0;
      }, 120);
    }, this.lazyResize = function (e) {
      return clearTimeout(O), e = isNaN(e) ? 240 : e, O = setTimeout(function () {
        T && T.resize(), O = 0;
      }, e), T;
    }, this.jqbind = function (e, o, t) {
      T.events.push({
        e: e,
        n: o,
        f: t,
        q: !0
      }), n(e).on(o, t);
    }, this.mousewheel = function (e, o, t) {
      var r = "jquery" in e ? e[0] : e;
      if ("onwheel" in l.createElement("div")) T._bind(r, "wheel", o, t || !1);else {
        var i = void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        S(r, i, o, t || !1), "DOMMouseScroll" == i && S(r, "MozMousePixelScroll", o, t || !1);
      }
    };
    var Y = !1;

    if (P.haseventlistener) {
      try {
        var H = Object.defineProperty({}, "passive", {
          get: function get() {
            Y = !0;
          }
        });
        a.addEventListener("test", null, H);
      } catch (e) {}

      this.stopPropagation = function (e) {
        return !!e && ((e = e.original ? e.original : e).stopPropagation(), !1);
      }, this.cancelEvent = function (e) {
        return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1;
      };
    } else Event.prototype.preventDefault = function () {
      this.returnValue = !1;
    }, Event.prototype.stopPropagation = function () {
      this.cancelBubble = !0;
    }, a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (e, o, t) {
      this.attachEvent("on" + e, o);
    }, a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (e, o, t) {
      this.detachEvent("on" + e, o);
    }, this.cancelEvent = function (e) {
      return (e = e || a.event) && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1), !1;
    }, this.stopPropagation = function (e) {
      return (e = e || a.event) && (e.cancelBubble = !0), !1;
    };

    this.delegate = function (e, o, t, r, i) {
      var s = d[o] || !1;
      s || (s = {
        a: [],
        l: [],
        f: function f(e) {
          for (var o = s.l, t = !1, r = o.length - 1; r >= 0; r--) {
            if (!1 === (t = o[r].call(e.target, e))) return !1;
          }

          return t;
        }
      }, T.bind(e, o, s.f, r, i), d[o] = s), T.ispage ? (s.a = [T.id].concat(s.a), s.l = [t].concat(s.l)) : (s.a.push(T.id), s.l.push(t));
    }, this.undelegate = function (e, o, t, r, i) {
      var s = d[o] || !1;
      if (s && s.l) for (var n = 0, l = s.l.length; n < l; n++) {
        s.a[n] === T.id && (s.a.splice(n), s.l.splice(n), 0 === s.a.length && (T._unbind(e, o, s.l.f), d[o] = null));
      }
    }, this.bind = function (e, o, t, r, i) {
      var s = "jquery" in e ? e[0] : e;

      T._bind(s, o, t, r || !1, i || !1);
    }, this._bind = function (e, o, t, r, i) {
      T.events.push({
        e: e,
        n: o,
        f: t,
        b: r,
        q: !1
      }), Y && i ? e.addEventListener(o, t, {
        passive: !1,
        capture: r
      }) : e.addEventListener(o, t, r || !1);
    }, this._unbind = function (e, o, t, r) {
      d[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r);
    }, this.unbindAll = function () {
      for (var e = 0; e < T.events.length; e++) {
        var o = T.events[e];
        o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b);
      }
    }, this.showRails = function () {
      return T.showRail().showRailHr();
    }, this.showRail = function () {
      return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0, T.rail.css("display", "block")), T;
    }, this.showRailHr = function () {
      return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0, T.railh.css("display", "block"))), T;
    }, this.hideRails = function () {
      return T.hideRail().hideRailHr();
    }, this.hideRail = function () {
      return T.rail.visibility = !1, T.rail.css("display", "none"), T;
    }, this.hideRailHr = function () {
      return T.railh && (T.railh.visibility = !1, T.railh.css("display", "none")), T;
    }, this.show = function () {
      return T.hidden = !1, T.railslocked = !1, T.showRails();
    }, this.hide = function () {
      return T.hidden = !0, T.railslocked = !0, T.hideRails();
    }, this.toggle = function () {
      return T.hidden ? T.show() : T.hide();
    }, this.remove = function () {
      T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);

      for (var e in T.delaylist) {
        T.delaylist[e] && h(T.delaylist[e].h);
      }

      T.doZoomOut(), T.unbindAll(), P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange), !1 !== T.observer && T.observer.disconnect(), !1 !== T.observerremover && T.observerremover.disconnect(), !1 !== T.observerbody && T.observerbody.disconnect(), T.events = null, T.cursor && T.cursor.remove(), T.cursorh && T.cursorh.remove(), T.rail && T.rail.remove(), T.railh && T.railh.remove(), T.zoom && T.zoom.remove();

      for (var o = 0; o < T.saved.css.length; o++) {
        var t = T.saved.css[o];
        t[0].css(t[1], void 0 === t[2] ? "" : t[2]);
      }

      T.saved = !1, T.me.data("__nicescroll", "");
      var r = n.nicescroll;
      r.each(function (e) {
        if (this && this.id === T.id) {
          delete r[e];

          for (var o = ++e; o < r.length; o++, e++) {
            r[e] = r[o];
          }

          --r.length && delete r[r.length];
        }
      });

      for (var i in T) {
        T[i] = null, delete T[i];
      }

      T = null;
    }, this.scrollstart = function (e) {
      return this.onscrollstart = e, T;
    }, this.scrollend = function (e) {
      return this.onscrollend = e, T;
    }, this.scrollcancel = function (e) {
      return this.onscrollcancel = e, T;
    }, this.zoomin = function (e) {
      return this.onzoomin = e, T;
    }, this.zoomout = function (e) {
      return this.onzoomout = e, T;
    }, this.isScrollable = function (e) {
      var o = e.target ? e.target : e;
      if ("OPTION" == o.nodeName) return !0;

      for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName);) {
        var t = n(o),
            r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
        if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
        o = !!o.parentNode && o.parentNode;
      }

      return !1;
    }, this.getViewport = function (e) {
      for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
        var t = n(o);
        if (/fixed|absolute/.test(t.css("position"))) return t;
        var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
        if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) return t;
        if (t.getNiceScroll().length > 0) return t;
        o = !!o.parentNode && o.parentNode;
      }

      return !1;
    }, this.triggerScrollStart = function (e, o, t, r, i) {
      if (T.onscrollstart) {
        var s = {
          type: "scrollstart",
          current: {
            x: e,
            y: o
          },
          request: {
            x: t,
            y: r
          },
          end: {
            x: T.newscrollx,
            y: T.newscrolly
          },
          speed: i
        };
        T.onscrollstart.call(T, s);
      }
    }, this.triggerScrollEnd = function () {
      if (T.onscrollend) {
        var e = T.getScrollLeft(),
            o = T.getScrollTop(),
            t = {
          type: "scrollend",
          current: {
            x: e,
            y: o
          },
          end: {
            x: e,
            y: o
          }
        };
        T.onscrollend.call(T, t);
      }
    };
    var B = 0,
        X = 0,
        D = 0,
        A = 1,
        q = !1;
    if (this.onmousewheel = function (e) {
      if (T.wheelprevented || T.locked) return !1;
      if (T.railslocked) return T.debounced("checkunlock", T.resize, 250), !1;
      if (T.rail.drag) return T.cancelEvent(e);
      if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1), M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable) return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
      var o = f(),
          t = !1;
      if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, T.nativescrollingarea) return !0;
      var r = k(e, !1, t);
      return r && (T.checkarea = 0), r;
    }, this.onmousewheelhr = function (e) {
      if (!T.wheelprevented) {
        if (T.railslocked || !T.railh.scrollable) return !0;
        if (T.rail.drag) return T.cancelEvent(e);
        var o = f(),
            t = !1;
        return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, !0, t));
      }
    }, this.stop = function () {
      return T.cancelScroll(), T.scrollmon && T.scrollmon.stop(), T.cursorfreezed = !1, T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.noticeCursor(), T;
    }, this.getTransitionSpeed = function (e) {
      return 80 + e / 72 * M.scrollspeed | 0;
    }, M.smoothscroll) {
      if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
        var j = "";
        this.resetTransition = function () {
          j = "", T.doc.css(P.prefixstyle + "transition-duration", "0ms");
        }, this.prepareTransition = function (e, o) {
          var t = o ? e : T.getTransitionSpeed(e),
              r = t + "ms";
          return j !== r && (j = r, T.doc.css(P.prefixstyle + "transition-duration", r)), t;
        }, this.doScrollLeft = function (e, o) {
          var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
          T.doScrollPos(e, t, o);
        }, this.doScrollTop = function (e, o) {
          var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
          T.doScrollPos(t, e, o);
        }, this.cursorupdate = {
          running: !1,
          start: function start() {
            var e = this;

            if (!e.running) {
              e.running = !0;

              var o = function o() {
                e.running && u(o), T.showCursor(T.getScrollTop(), T.getScrollLeft()), T.notifyScrollEvent(T.win[0]);
              };

              u(o);
            }
          },
          stop: function stop() {
            this.running = !1;
          }
        }, this.doScrollPos = function (e, o, t) {
          var r = T.getScrollTop(),
              i = T.getScrollLeft();
          if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(), M.bouncescroll ? (o < 0 ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0), e < 0 ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (o < 0 ? o = 0 : o > T.page.maxh && (o = T.page.maxh), e < 0 ? e = 0 : e > T.page.maxw && (e = T.page.maxw)), T.scrollrunning && e == T.newscrollx && o == T.newscrolly) return !1;
          T.newscrolly = o, T.newscrollx = e;
          var s = T.getScrollTop(),
              n = T.getScrollLeft(),
              l = {};
          l.x = e - n, l.y = o - s;
          var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y),
              c = T.prepareTransition(a);
          T.scrollrunning || (T.scrollrunning = !0, T.triggerScrollStart(n, s, e, o, c), T.cursorupdate.start()), T.scrollendtrapped = !0, P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped), T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)), T.setScrollTop(T.newscrolly), T.setScrollLeft(T.newscrollx);
        }, this.cancelScroll = function () {
          if (!T.scrollendtrapped) return !0;
          var e = T.getScrollTop(),
              o = T.getScrollLeft();
          return T.scrollrunning = !1, P.transitionend || clearTimeout(P.transitionend), T.scrollendtrapped = !1, T.resetTransition(), T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1, T.cursorfreezed = !1, T.cursorupdate.stop(), T.showCursor(e, o), T;
        }, this.onScrollTransitionEnd = function () {
          if (T.scrollendtrapped) {
            var e = T.getScrollTop(),
                o = T.getScrollLeft();
            if (e < 0 ? e = 0 : e > T.page.maxh && (e = T.page.maxh), o < 0 ? o = 0 : o > T.page.maxw && (o = T.page.maxw), e != T.newscrolly || o != T.newscrollx) return T.doScrollPos(o, e, M.snapbackspeed);
            T.scrollrunning && T.triggerScrollEnd(), T.scrollrunning = !1, T.scrollendtrapped = !1, T.resetTransition(), T.timerscroll = !1, T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.cursorupdate.stop(), T.noticeCursor(!1, e, o), T.cursorfreezed = !1;
          }
        };
      } else this.doScrollLeft = function (e, o) {
        var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
        T.doScrollPos(e, t, o);
      }, this.doScrollTop = function (e, o) {
        var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
        T.doScrollPos(t, e, o);
      }, this.doScrollPos = function (e, o, t) {
        var r = T.getScrollTop(),
            i = T.getScrollLeft();
        ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
        var s = !1;
        if (T.bouncescroll && T.rail.visibility || (o < 0 ? (o = 0, s = !0) : o > T.page.maxh && (o = T.page.maxh, s = !0)), T.bouncescroll && T.railh.visibility || (e < 0 ? (e = 0, s = !0) : e > T.page.maxw && (e = T.page.maxw, s = !0)), T.scrollrunning && T.newscrolly === o && T.newscrollx === e) return !0;
        T.newscrolly = o, T.newscrollx = e, T.dst = {}, T.dst.x = e - i, T.dst.y = o - r, T.dst.px = i, T.dst.py = r;
        var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y),
            l = T.getTransitionSpeed(n);
        T.bzscroll = {};
        var a = s ? 1 : .58;
        T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1), T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1);
        f();

        var c = function c() {
          if (T.scrollrunning) {
            var e = T.bzscroll.y.getPos();
            T.setScrollLeft(T.bzscroll.x.getNow()), T.setScrollTop(T.bzscroll.y.getNow()), e <= 1 ? T.timer = u(c) : (T.scrollrunning = !1, T.timer = 0, T.triggerScrollEnd());
          }
        };

        T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l), T.scrollrunning = !0, T.timer = u(c));
      }, this.cancelScroll = function () {
        return T.timer && h(T.timer), T.timer = 0, T.bzscroll = !1, T.scrollrunning = !1, T;
      };
    } else this.doScrollLeft = function (e, o) {
      var t = T.getScrollTop();
      T.doScrollPos(e, t, o);
    }, this.doScrollTop = function (e, o) {
      var t = T.getScrollLeft();
      T.doScrollPos(t, e, o);
    }, this.doScrollPos = function (e, o, t) {
      var r = e > T.page.maxw ? T.page.maxw : e;
      r < 0 && (r = 0);
      var i = o > T.page.maxh ? T.page.maxh : o;
      i < 0 && (i = 0), T.synched("scroll", function () {
        T.setScrollTop(i), T.setScrollLeft(r);
      });
    }, this.cancelScroll = function () {};
    this.doScrollBy = function (e, o) {
      z(0, e);
    }, this.doScrollLeftBy = function (e, o) {
      z(e, 0);
    }, this.doScrollTo = function (e, o) {
      var t = o ? Math.round(e * T.scrollratio.y) : e;
      t < 0 ? t = 0 : t > T.page.maxh && (t = T.page.maxh), T.cursorfreezed = !1, T.doScrollTop(e);
    }, this.checkContentSize = function () {
      var e = T.getContentSize();
      e.h == T.page.h && e.w == T.page.w || T.resize(!1, e);
    }, T.onscroll = function (e) {
      T.rail.drag || T.cursorfreezed || T.synched("scroll", function () {
        T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y), T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)), T.noticeCursor();
      });
    }, T.bind(T.docscroll, "scroll", T.onscroll), this.doZoomIn = function (e) {
      if (!T.zoomactive) {
        T.zoomactive = !0, T.zoomrestore = {
          style: {}
        };
        var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
            t = T.win[0].style;

        for (var r in o) {
          var i = o[r];
          T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : "";
        }

        T.zoomrestore.style.width = T.win.css("width"), T.zoomrestore.style.height = T.win.css("height"), T.zoomrestore.padding = {
          w: T.win.outerWidth() - T.win.width(),
          h: T.win.outerHeight() - T.win.height()
        }, P.isios4 && (T.zoomrestore.scrollTop = c.scrollTop(), c.scrollTop(0)), T.win.css({
          position: P.isios4 ? "absolute" : "fixed",
          top: 0,
          left: 0,
          zIndex: s + 100,
          margin: 0
        });
        var n = T.win.css("backgroundColor");
        return ("" === n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && T.win.css("backgroundColor", "#fff"), T.rail.css({
          zIndex: s + 101
        }), T.zoom.css({
          zIndex: s + 102
        }), T.zoom.css("backgroundPosition", "0 -18px"), T.resizeZoom(), T.onzoomin && T.onzoomin.call(T), T.cancelEvent(e);
      }
    }, this.doZoomOut = function (e) {
      if (T.zoomactive) return T.zoomactive = !1, T.win.css("margin", ""), T.win.css(T.zoomrestore.style), P.isios4 && c.scrollTop(T.zoomrestore.scrollTop), T.rail.css({
        "z-index": T.zindex
      }), T.zoom.css({
        "z-index": T.zindex
      }), T.zoomrestore = !1, T.zoom.css("backgroundPosition", "0 0"), T.onResize(), T.onzoomout && T.onzoomout.call(T), T.cancelEvent(e);
    }, this.doZoom = function (e) {
      return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e);
    }, this.resizeZoom = function () {
      if (T.zoomactive) {
        var e = T.getScrollTop();
        T.win.css({
          width: c.width() - T.zoomrestore.padding.w + "px",
          height: c.height() - T.zoomrestore.padding.h + "px"
        }), T.onResize(), T.setScrollTop(Math.min(T.page.maxh, e));
      }
    }, this.init(), n.nicescroll.push(this);
  },
      y = function y(e) {
    var o = this;
    this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.reset = function (e, t) {
      o.stop(), o.steptime = 0, o.lasttime = f(), o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1;
    }, this.update = function (e, t) {
      var r = f();
      o.steptime = r - o.lasttime, o.lasttime = r;
      var i = t - o.lasty,
          s = e - o.lastx,
          n = o.nc.getScrollTop() + i,
          l = o.nc.getScrollLeft() + s;
      o.snapx = l < 0 || l > o.nc.page.maxw, o.snapy = n < 0 || n > o.nc.page.maxh, o.speedx = s, o.speedy = i, o.lastx = e, o.lasty = t;
    }, this.stop = function () {
      o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1;
    }, this.doSnapy = function (e, t) {
      var r = !1;
      t < 0 ? (t = 0, r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, r = !0), e < 0 ? (e = 0, r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, r = !0), r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd();
    }, this.doMomentum = function (e) {
      var t = f(),
          r = e ? t + e : o.lasttime,
          i = o.nc.getScrollLeft(),
          s = o.nc.getScrollTop(),
          n = o.nc.page.maxh,
          l = o.nc.page.maxw;
      o.speedx = l > 0 ? Math.min(60, o.speedx) : 0, o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
      var a = r && t - r <= 60;
      (s < 0 || s > n || i < 0 || i > l) && (a = !1);
      var c = !(!o.speedy || !a) && o.speedy,
          d = !(!o.speedx || !a) && o.speedx;

      if (c || d) {
        var u = Math.max(16, o.steptime);

        if (u > 50) {
          var h = u / 50;
          o.speedx *= h, o.speedy *= h, u = 50;
        }

        o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;

        var p = o.lastscrollx,
            m = o.lastscrolly,
            g = function g() {
          var e = f() - t > 600 ? .04 : .02;
          o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = p, (p < 0 || p > l) && (e = .1)), o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = m, (m < 0 || m > n) && (e = .1)), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function () {
            if (o.speedx) {
              o.nc.getScrollLeft();
              o.chkx = p, o.nc.setScrollLeft(p);
            }

            if (o.speedy) {
              o.nc.getScrollTop();
              o.chky = m, o.nc.setScrollTop(m);
            }

            o.timer || (o.nc.hideCursor(), o.doSnapy(p, m));
          }), o.demulxy < 1 ? o.timer = setTimeout(g, u) : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m));
        };

        g();
      } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop());
    };
  },
      x = e.fn.scrollTop;

  e.cssHooks.pageYOffset = {
    get: function get(e, o, t) {
      var r = n.data(e, "__nicescroll") || !1;
      return r && r.ishwscroll ? r.getScrollTop() : x.call(e);
    },
    set: function set(e, o) {
      var t = n.data(e, "__nicescroll") || !1;
      return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o), this;
    }
  }, e.fn.scrollTop = function (e) {
    if (void 0 === e) {
      var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
      return o && o.ishwscroll ? o.getScrollTop() : x.call(this);
    }

    return this.each(function () {
      var o = n.data(this, "__nicescroll") || !1;
      o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : x.call(n(this), e);
    });
  };
  var S = e.fn.scrollLeft;
  n.cssHooks.pageXOffset = {
    get: function get(e, o, t) {
      var r = n.data(e, "__nicescroll") || !1;
      return r && r.ishwscroll ? r.getScrollLeft() : S.call(e);
    },
    set: function set(e, o) {
      var t = n.data(e, "__nicescroll") || !1;
      return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o), this;
    }
  }, e.fn.scrollLeft = function (e) {
    if (void 0 === e) {
      var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
      return o && o.ishwscroll ? o.getScrollLeft() : S.call(this);
    }

    return this.each(function () {
      var o = n.data(this, "__nicescroll") || !1;
      o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : S.call(n(this), e);
    });
  };

  var z = function z(e) {
    var o = this;
    if (this.length = 0, this.name = "nicescrollarray", this.each = function (e) {
      return n.each(o, e), o;
    }, this.push = function (e) {
      o[o.length] = e, o.length++;
    }, this.eq = function (e) {
      return o[e];
    }, e) for (var t = 0; t < e.length; t++) {
      var r = n.data(e[t], "__nicescroll") || !1;
      r && (this[this.length] = r, this.length++);
    }
    return this;
  };

  !function (e, o, t) {
    for (var r = 0, i = o.length; r < i; r++) {
      t(e, o[r]);
    }
  }(z.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, o) {
    e[o] = function () {
      var e = arguments;
      return this.each(function () {
        this[o].apply(this, e);
      });
    };
  }), e.fn.getNiceScroll = function (e) {
    return void 0 === e ? new z(this) : this[e] && n.data(this[e], "__nicescroll") || !1;
  }, (e.expr.pseudos || e.expr[":"]).nicescroll = function (e) {
    return void 0 !== n.data(e, "__nicescroll");
  }, n.fn.niceScroll = function (e, o) {
    void 0 !== o || "object" != _typeof(e) || "jquery" in e || (o = e, e = !1);
    var t = new z();
    return this.each(function () {
      var r = n(this),
          i = n.extend({}, o);

      if (e) {
        var s = n(e);
        i.doc = s.length > 1 ? n(e, r) : s, i.win = r;
      }

      !("doc" in i) || "win" in i || (i.win = r);
      var l = r.data("__nicescroll") || !1;
      l || (i.doc = i.doc || r, l = new b(i, r), r.data("__nicescroll", l)), t.push(l);
    }), 1 === t.length ? t[0] : t;
  }, a.NiceScroll = {
    getjQuery: function getjQuery() {
      return e;
    }
  }, n.nicescroll || (n.nicescroll = new z(), n.nicescroll.options = g);
});

/***/ }),

/***/ "./assets/components/includes/stisla.js":
/*!**********************************************!*\
  !*** ./assets/components/includes/stisla.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function ($, window, i) {
  // Bootstrap 4 Modal
  $.fn.fireModal = function (options) {
    var options = $.extend({
      size: 'modal-md',
      center: false,
      animation: true,
      title: 'Modal Title',
      closeButton: true,
      header: true,
      bodyClass: '',
      footerClass: '',
      body: '',
      buttons: [],
      autoFocus: true,
      removeOnDismiss: false,
      created: function created() {},
      appended: function appended() {},
      onFormSubmit: function onFormSubmit() {},
      modal: {}
    }, options);
    this.each(function () {
      i++;
      var id = 'fire-modal-' + i,
          trigger_class = 'trigger--' + id,
          trigger_button = $('.' + trigger_class);
      $(this).addClass(trigger_class); // Get modal body

      var body = options.body;

      if (_typeof(body) == 'object') {
        if (body.length) {
          var part = body;
          body = body.removeAttr('id').clone().removeClass('modal-part');
          part.remove();
        } else {
          body = '<div class="text-danger">Modal part element not found!</div>';
        }
      } // Modal base template


      var modal_template = '   <div class="modal' + (options.animation == true ? ' fade' : '') + '" tabindex="-1" role="dialog" id="' + id + '">  ' + '     <div class="modal-dialog ' + options.size + (options.center ? ' modal-dialog-centered' : '') + '" role="document">  ' + '       <div class="modal-content">  ' + (options.header == true ? '         <div class="modal-header">  ' + '           <h5 class="modal-title">' + options.title + '</h5>  ' + (options.closeButton == true ? '           <button type="button" class="close" data-dismiss="modal" aria-label="Close">  ' + '             <span aria-hidden="true">&times;</span>  ' + '           </button>  ' : '') + '         </div>  ' : '') + '         <div class="modal-body">  ' + '         </div>  ' + (options.buttons.length > 0 ? '         <div class="modal-footer">  ' + '         </div>  ' : '') + '       </div>  ' + '     </div>  ' + '  </div>  '; // Convert modal to object

      var modal_template = $(modal_template); // Start creating buttons from 'buttons' option

      var this_button;
      options.buttons.forEach(function (item) {
        // get option 'id'
        var id = "id" in item ? item.id : ''; // Button template

        this_button = '<button type="' + ("submit" in item && item.submit == true ? 'submit' : 'button') + '" class="' + item["class"] + '" id="' + id + '">' + item.text + '</button>'; // add click event to the button

        this_button = $(this_button).off('click').on("click", function () {
          // execute function from 'handler' option
          item.handler.call(this, modal_template);
        }); // append generated buttons to the modal footer

        $(modal_template).find('.modal-footer').append(this_button);
      }); // append a given body to the modal

      $(modal_template).find('.modal-body').append(body); // add additional body class

      if (options.bodyClass) $(modal_template).find('.modal-body').addClass(options.bodyClass); // add footer body class

      if (options.footerClass) $(modal_template).find('.modal-footer').addClass(options.footerClass); // execute 'created' callback

      options.created.call(this, modal_template, options); // modal form and submit form button

      var modal_form = $(modal_template).find('.modal-body form'),
          form_submit_btn = modal_template.find('button[type=submit]'); // append generated modal to the body

      $("body").append(modal_template); // execute 'appended' callback

      options.appended.call(this, $('#' + id), modal_form, options); // if modal contains form elements

      if (modal_form.length) {
        // if `autoFocus` option is true
        if (options.autoFocus) {
          // when modal is shown
          $(modal_template).on('shown.bs.modal', function () {
            // if type of `autoFocus` option is `boolean`
            if (typeof options.autoFocus == 'boolean') modal_form.find('input:eq(0)').focus(); // the first input element will be focused
            // if type of `autoFocus` option is `string` and `autoFocus` option is an HTML element
            else if (typeof options.autoFocus == 'string' && modal_form.find(options.autoFocus).length) modal_form.find(options.autoFocus).focus(); // find elements and focus on that
          });
        } // form object


        var form_object = {
          startProgress: function startProgress() {
            modal_template.addClass('modal-progress');
          },
          stopProgress: function stopProgress() {
            modal_template.removeClass('modal-progress');
          }
        }; // if form is not contains button element

        if (!modal_form.find('button').length) $(modal_form).append('<button class="d-none" id="' + id + '-submit"></button>'); // add click event

        form_submit_btn.click(function () {
          modal_form.submit();
        }); // add submit event

        modal_form.submit(function (e) {
          // start form progress
          form_object.startProgress(); // execute `onFormSubmit` callback

          options.onFormSubmit.call(this, modal_template, e, form_object);
        });
      }

      $(document).on("click", '.' + trigger_class, function () {
        var modal = $('#' + id).modal(options.modal);

        if (options.removeOnDismiss) {
          modal.on('hidden.bs.modal', function () {
            modal.remove();
          });
        }

        return false;
      });
    });
  }; // Bootstrap Modal Destroyer


  $.destroyModal = function (modal) {
    modal.modal('hide');
    modal.on('hidden.bs.modal', function () {});
  }; // Card Progress Controller


  $.cardProgress = function (card, options) {
    var options = $.extend({
      dismiss: false,
      dismissText: 'Cancel',
      spinner: true,
      onDismiss: function onDismiss() {}
    }, options);
    var me = $(card);
    me.addClass('card-progress');

    if (options.spinner == false) {
      me.addClass('remove-spinner');
    }

    if (options.dismiss == true) {
      var btn_dismiss = '<a class="btn btn-danger card-progress-dismiss">' + options.dismissText + '</a>';
      btn_dismiss = $(btn_dismiss).off('click').on('click', function () {
        me.removeClass('card-progress');
        me.find('.card-progress-dismiss').remove();
        options.onDismiss.call(this, me);
      });
      me.append(btn_dismiss);
    }

    return {
      dismiss: function dismiss(dismissed) {
        $.cardProgressDismiss(me, dismissed);
      }
    };
  };

  $.cardProgressDismiss = function (card, dismissed) {
    var me = $(card);
    me.removeClass('card-progress');
    me.find('.card-progress-dismiss').remove();
    if (dismissed) dismissed.call(this, me);
  };

  $.chatCtrl = function (element, chat) {
    var chat = $.extend({
      position: 'chat-right',
      text: '',
      time: moment(new Date().toISOString()).format('hh:mm'),
      picture: '',
      type: 'text',
      // or typing
      timeout: 0,
      onShow: function onShow() {}
    }, chat);
    var target = $(element),
        element = '<div class="chat-item ' + chat.position + '" style="display:none">' + '<img src="' + chat.picture + '">' + '<div class="chat-details">' + '<div class="chat-text">' + chat.text + '</div>' + '<div class="chat-time">' + chat.time + '</div>' + '</div>' + '</div>',
        typing_element = '<div class="chat-item chat-left chat-typing" style="display:none">' + '<img src="' + chat.picture + '">' + '<div class="chat-details">' + '<div class="chat-text"></div>' + '</div>' + '</div>';
    var append_element = element;

    if (chat.type == 'typing') {
      append_element = typing_element;
    }

    if (chat.timeout > 0) {
      setTimeout(function () {
        target.find('.chat-content').append($(append_element).fadeIn());
      }, chat.timeout);
    } else {
      target.find('.chat-content').append($(append_element).fadeIn());
    }

    var target_height = 0;
    target.find('.chat-content .chat-item').each(function () {
      target_height += $(this).outerHeight();
    });
    setTimeout(function () {
      target.find('.chat-content').scrollTop(target_height, -1);
    }, 100);
    chat.onShow.call(this, append_element);
  };
})(jQuery, this, 0);

/***/ }),

/***/ "./assets/components/script.js":
/*!*************************************!*\
  !*** ./assets/components/script.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
 // ChartJS

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

if (window.Chart) {
  Chart.defaults.global.defaultFontFamily = "'Nunito', 'Segoe UI', 'Arial'";
  Chart.defaults.global.defaultFontSize = 12;
  Chart.defaults.global.defaultFontStyle = 500;
  Chart.defaults.global.defaultFontColor = "#999";
  Chart.defaults.global.tooltips.backgroundColor = "#000";
  Chart.defaults.global.tooltips.bodyFontColor = "rgba(255,255,255,.7)";
  Chart.defaults.global.tooltips.titleMarginBottom = 10;
  Chart.defaults.global.tooltips.titleFontSize = 14;
  Chart.defaults.global.tooltips.titleFontFamily = "'Nunito', 'Segoe UI', 'Arial'";
  Chart.defaults.global.tooltips.titleFontColor = '#fff';
  Chart.defaults.global.tooltips.xPadding = 15;
  Chart.defaults.global.tooltips.yPadding = 15;
  Chart.defaults.global.tooltips.displayColors = false;
  Chart.defaults.global.tooltips.intersect = false;
  Chart.defaults.global.tooltips.mode = 'nearest';
} // DropzoneJS


if (window.Dropzone) {
  Dropzone.autoDiscover = false;
} // Basic confirm box


$('[data-confirm]').each(function () {
  var me = $(this),
      me_data = me.data('confirm');
  me_data = me_data.split("|");
  me.fireModal({
    title: me_data[0],
    body: me_data[1],
    buttons: [{
      text: me.data('confirm-text-yes') || 'Yes',
      "class": 'btn btn-danger btn-shadow',
      handler: function handler() {
        eval(me.data('confirm-yes'));
      }
    }, {
      text: me.data('confirm-text-cancel') || 'Cancel',
      "class": 'btn btn-secondary',
      handler: function handler(modal) {
        $.destroyModal(modal);
        eval(me.data('confirm-no'));
      }
    }]
  });
}); // Global

$(function () {
  var sidebar_nicescroll_opts = {
    cursoropacitymin: 0,
    cursoropacitymax: .8,
    zindex: 892
  },
      now_layout_class = null;

  var sidebar_sticky = function sidebar_sticky() {
    if ($("body").hasClass('layout-2')) {
      $("body.layout-2 #sidebar-wrapper").stick_in_parent({
        parent: $('body')
      });
      $("body.layout-2 #sidebar-wrapper").stick_in_parent({
        recalc_every: 1
      });
    }
  };

  sidebar_sticky();
  var sidebar_nicescroll;

  var update_sidebar_nicescroll = function update_sidebar_nicescroll() {
    var a = setInterval(function () {
      if (sidebar_nicescroll != null) sidebar_nicescroll.resize();
    }, 10);
    setTimeout(function () {
      clearInterval(a);
    }, 600);
  };

  var sidebar_dropdown = function sidebar_dropdown() {
    if ($(".main-sidebar").length) {
      $(".main-sidebar").niceScroll(sidebar_nicescroll_opts);
      sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
      $(".main-sidebar .sidebar-menu li a.has-dropdown").off('click').on('click', function () {
        var me = $(this);
        var active = false;

        if (me.parent().hasClass("active")) {
          active = true;
        }

        $('.main-sidebar .sidebar-menu li.active > .dropdown-menu').slideUp(500, function () {
          update_sidebar_nicescroll();
          return false;
        });
        $('.main-sidebar .sidebar-menu li.active').removeClass('active');

        if (active == true) {
          me.parent().removeClass('active');
          me.parent().find('> .dropdown-menu').slideUp(500, function () {
            update_sidebar_nicescroll();
            return false;
          });
        } else {
          me.parent().addClass('active');
          me.parent().find('> .dropdown-menu').slideDown(500, function () {
            update_sidebar_nicescroll();
            return false;
          });
        }

        return false;
      });
      $('.main-sidebar .sidebar-menu li.active > .dropdown-menu').slideDown(500, function () {
        update_sidebar_nicescroll();
        return false;
      });
    }
  };

  sidebar_dropdown();

  if ($("#top-5-scroll").length) {
    $("#top-5-scroll").css({
      height: 315
    }).niceScroll();
  }

  $(".main-content").css({
    minHeight: $(window).outerHeight() - 108
  });
  $(".nav-collapse-toggle").click(function () {
    $(this).parent().find('.navbar-nav').toggleClass('show');
    return false;
  });
  $(document).on('click', function (e) {
    $(".nav-collapse .navbar-nav").removeClass('show');
  });

  var toggle_sidebar_mini = function toggle_sidebar_mini(mini) {
    var body = $('body');

    if (!mini) {
      body.removeClass('sidebar-mini');
      $(".main-sidebar").css({
        overflow: 'hidden'
      });
      setTimeout(function () {
        $(".main-sidebar").niceScroll(sidebar_nicescroll_opts);
        sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
      }, 500);
      $(".main-sidebar .sidebar-menu > li > ul .dropdown-title").remove();
      $(".main-sidebar .sidebar-menu > li > a").removeAttr('data-toggle');
      $(".main-sidebar .sidebar-menu > li > a").removeAttr('data-original-title');
      $(".main-sidebar .sidebar-menu > li > a").removeAttr('title');
    } else {
      body.addClass('sidebar-mini');
      body.removeClass('sidebar-show');
      sidebar_nicescroll.remove();
      sidebar_nicescroll = null;
      $(".main-sidebar .sidebar-menu > li").each(function () {
        var me = $(this);

        if (me.find('> .dropdown-menu').length) {
          me.find('> .dropdown-menu').hide();
          me.find('> .dropdown-menu').prepend('<li class="dropdown-title pt-3">' + me.find('> a').text() + '</li>');
        } else {
          me.find('> a').attr('data-toggle', 'tooltip');
          me.find('> a').attr('data-original-title', me.find('> a').text());
          $("[data-toggle='tooltip']").tooltip({
            placement: 'right'
          });
        }
      });
    }
  };

  $("[data-toggle='sidebar']").click(function () {
    var body = $("body"),
        w = $(window);

    if (w.outerWidth() <= 1024) {
      body.removeClass('search-show search-gone');

      if (body.hasClass('sidebar-gone')) {
        body.removeClass('sidebar-gone');
        body.addClass('sidebar-show');
      } else {
        body.addClass('sidebar-gone');
        body.removeClass('sidebar-show');
      }

      update_sidebar_nicescroll();
    } else {
      body.removeClass('search-show search-gone');

      if (body.hasClass('sidebar-mini')) {
        toggle_sidebar_mini(false);
      } else {
        toggle_sidebar_mini(true);
      }
    }

    return false;
  });

  var toggleLayout = function toggleLayout() {
    var w = $(window),
        layout_class = $('body').attr('class') || '',
        layout_classes = layout_class.trim().length > 0 ? layout_class.split(' ') : '';

    if (layout_classes.length > 0) {
      layout_classes.forEach(function (item) {
        if (item.indexOf('layout-') != -1) {
          now_layout_class = item;
        }
      });
    }

    if (w.outerWidth() <= 1024) {
      if ($('body').hasClass('sidebar-mini')) {
        toggle_sidebar_mini(false);
        $('.main-sidebar').niceScroll(sidebar_nicescroll_opts);
        sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
      }

      $("body").addClass("sidebar-gone");
      $("body").removeClass("layout-2 layout-3 sidebar-mini sidebar-show");
      $("body").off('click touchend').on('click touchend', function (e) {
        if ($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
          $("body").removeClass("sidebar-show");
          $("body").addClass("sidebar-gone");
          $("body").removeClass("search-show");
          update_sidebar_nicescroll();
        }
      });
      update_sidebar_nicescroll();

      if (now_layout_class == 'layout-3') {
        var nav_second_classes = $(".navbar-secondary").attr('class'),
            nav_second = $(".navbar-secondary");
        nav_second.attr('data-nav-classes', nav_second_classes);
        nav_second.removeAttr('class');
        nav_second.addClass('main-sidebar');
        var main_sidebar = $(".main-sidebar");
        main_sidebar.find('.container').addClass('sidebar-wrapper').removeClass('container');
        main_sidebar.find('.navbar-nav').addClass('sidebar-menu').removeClass('navbar-nav');
        main_sidebar.find('.sidebar-menu .nav-item.dropdown.show a').click();
        main_sidebar.find('.sidebar-brand').remove();
        main_sidebar.find('.sidebar-menu').before($('<div>', {
          "class": 'sidebar-brand'
        }).append($('<a>', {
          href: $('.navbar-brand').attr('href')
        }).html($('.navbar-brand').html())));
        setTimeout(function () {
          sidebar_nicescroll = main_sidebar.niceScroll(sidebar_nicescroll_opts);
          sidebar_nicescroll = main_sidebar.getNiceScroll();
        }, 700);
        sidebar_dropdown();
        $(".main-wrapper").removeClass("container");
      }
    } else {
      $("body").removeClass("sidebar-gone sidebar-show");
      if (now_layout_class) $("body").addClass(now_layout_class);

      var _nav_second_classes = $(".main-sidebar").attr('data-nav-classes'),
          _nav_second = $(".main-sidebar");

      if (now_layout_class == 'layout-3' && _nav_second.hasClass('main-sidebar')) {
        _nav_second.find(".sidebar-menu li a.has-dropdown").off('click');

        _nav_second.find('.sidebar-brand').remove();

        _nav_second.removeAttr('class');

        _nav_second.addClass(_nav_second_classes);

        var _main_sidebar = $(".navbar-secondary");

        _main_sidebar.find('.sidebar-wrapper').addClass('container').removeClass('sidebar-wrapper');

        _main_sidebar.find('.sidebar-menu').addClass('navbar-nav').removeClass('sidebar-menu');

        _main_sidebar.find('.dropdown-menu').hide();

        _main_sidebar.removeAttr('style');

        _main_sidebar.removeAttr('tabindex');

        _main_sidebar.removeAttr('data-nav-classes');

        $(".main-wrapper").addClass("container"); // if(sidebar_nicescroll != null)
        //   sidebar_nicescroll.remove();
      } else if (now_layout_class == 'layout-2') {
        $("body").addClass("layout-2");
      } else {
        update_sidebar_nicescroll();
      }
    }
  };

  toggleLayout();
  $(window).resize(toggleLayout);
  $("[data-toggle='search']").click(function () {
    var body = $("body");

    if (body.hasClass('search-gone')) {
      body.addClass('search-gone');
      body.removeClass('search-show');
    } else {
      body.removeClass('search-gone');
      body.addClass('search-show');
    }
  }); // tooltip

  $("[data-toggle='tooltip']").tooltip(); // popover

  $('[data-toggle="popover"]').popover({
    container: 'body'
  }); // Select2

  if (jQuery().select2) {
    $(".select2").select2();
  } // Selectric


  if (jQuery().selectric) {
    $(".selectric").selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    });
  }

  $(".notification-toggle").dropdown();
  $(".notification-toggle").parent().on('shown.bs.dropdown', function () {
    $(".dropdown-list-icons").niceScroll({
      cursoropacitymin: .3,
      cursoropacitymax: .8,
      cursorwidth: 7
    });
  });
  $(".message-toggle").dropdown();
  $(".message-toggle").parent().on('shown.bs.dropdown', function () {
    $(".dropdown-list-message").niceScroll({
      cursoropacitymin: .3,
      cursoropacitymax: .8,
      cursorwidth: 7
    });
  });

  if ($(".chat-content").length) {
    $(".chat-content").niceScroll({
      cursoropacitymin: .3,
      cursoropacitymax: .8
    });
    $('.chat-content').getNiceScroll(0).doScrollTop($('.chat-content').height());
  }

  if (jQuery().summernote) {
    $(".summernote").summernote({
      dialogsInBody: true,
      minHeight: 250
    });
    $(".summernote-simple").summernote({
      dialogsInBody: true,
      minHeight: 150,
      toolbar: [['style', ['bold', 'italic', 'underline', 'clear']], ['font', ['strikethrough']], ['para', ['paragraph']]]
    });
  }

  if (window.CodeMirror) {
    $(".codeeditor").each(function () {
      var editor = CodeMirror.fromTextArea(this, {
        lineNumbers: true,
        theme: "duotone-dark",
        mode: 'javascript',
        height: 200
      });
      editor.setSize("100%", 200);
    });
  } // Follow function


  $('.follow-btn, .following-btn').each(function () {
    var me = $(this),
        follow_text = 'Follow',
        unfollow_text = 'Following';
    me.click(function () {
      if (me.hasClass('following-btn')) {
        me.removeClass('btn-danger');
        me.removeClass('following-btn');
        me.addClass('btn-primary');
        me.html(follow_text);
        eval(me.data('unfollow-action'));
      } else {
        me.removeClass('btn-primary');
        me.addClass('btn-danger');
        me.addClass('following-btn');
        me.html(unfollow_text);
        eval(me.data('follow-action'));
      }

      return false;
    });
  }); // Dismiss function

  $("[data-dismiss]").each(function () {
    var me = $(this),
        target = me.data('dismiss');
    me.click(function () {
      $(target).fadeOut(function () {
        $(target).remove();
      });
      return false;
    });
  }); // Collapsable

  $("[data-collapse]").each(function () {
    var me = $(this),
        target = me.data('collapse');
    me.click(function () {
      $(target).collapse('toggle');
      $(target).on('shown.bs.collapse', function (e) {
        e.stopPropagation();
        me.html('<i class="fas fa-minus"></i>');
      });
      $(target).on('hidden.bs.collapse', function (e) {
        e.stopPropagation();
        me.html('<i class="fas fa-plus"></i>');
      });
      return false;
    });
  }); // Gallery

  $(".gallery .gallery-item").each(function () {
    var me = $(this);
    me.attr('href', me.data('image'));
    me.attr('title', me.data('title'));

    if (me.parent().hasClass('gallery-fw')) {
      me.css({
        height: me.parent().data('item-height')
      });
      me.find('div').css({
        lineHeight: me.parent().data('item-height') + 'px'
      });
    }

    me.css({
      backgroundImage: 'url("' + me.data('image') + '")'
    });
  });

  if (jQuery().Chocolat) {
    $(".gallery").Chocolat({
      className: 'gallery',
      imageSelector: '.gallery-item'
    });
  } // Background


  $("[data-background]").each(function () {
    var me = $(this);
    me.css({
      backgroundImage: 'url(' + me.data('background') + ')'
    });
  }); // Custom Tab

  $("[data-tab]").each(function () {
    var me = $(this);
    me.click(function () {
      if (!me.hasClass('active')) {
        var tab_group = $('[data-tab-group="' + me.data('tab') + '"]'),
            tab_group_active = $('[data-tab-group="' + me.data('tab') + '"].active'),
            target = $(me.attr('href')),
            links = $('[data-tab="' + me.data('tab') + '"]');
        links.removeClass('active');
        me.addClass('active');
        target.addClass('active');
        tab_group_active.removeClass('active');
      }

      return false;
    });
  }); // Bootstrap 4 Validation

  $(".needs-validation").submit(function () {
    var form = $(this);

    if (form[0].checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.addClass('was-validated');
  }); // alert dismissible

  $(".alert-dismissible").each(function () {
    var me = $(this);
    me.find('.close').click(function () {
      me.alert('close');
    });
  });

  if ($('.main-navbar').length) {} // Image cropper


  $('[data-crop-image]').each(function (e) {
    $(this).css({
      overflow: 'hidden',
      position: 'relative',
      height: $(this).data('crop-image')
    });
  }); // Slide Toggle

  $('[data-toggle-slide]').click(function () {
    var target = $(this).data('toggle-slide');
    $(target).slideToggle();
    return false;
  }); // Dismiss modal

  $("[data-dismiss=modal]").click(function () {
    $(this).closest('.modal').modal('hide');
    return false;
  }); // Width attribute

  $('[data-width]').each(function () {
    $(this).css({
      width: $(this).data('width')
    });
  }); // Height attribute

  $('[data-height]').each(function () {
    $(this).css({
      height: $(this).data('height')
    });
  }); // Chocolat

  if ($('.chocolat-parent').length && jQuery().Chocolat) {
    $('.chocolat-parent').Chocolat();
  } // Sortable card


  if ($('.sortable-card').length && jQuery().sortable) {
    $('.sortable-card').sortable({
      handle: '.card-header',
      opacity: .8,
      tolerance: 'pointer'
    });
  } // Daterangepicker


  if (jQuery().daterangepicker) {
    if ($(".datepicker").length) {
      $('.datepicker').daterangepicker({
        locale: {
          format: 'YYYY-MM-DD'
        },
        singleDatePicker: true
      });
    }

    if ($(".datetimepicker").length) {
      $('.datetimepicker').daterangepicker({
        locale: {
          format: 'YYYY-MM-DD HH:mm'
        },
        singleDatePicker: true,
        timePicker: true,
        timePicker24Hour: true
      });
    }

    if ($(".daterange").length) {
      $('.daterange').daterangepicker({
        locale: {
          format: 'YYYY-MM-DD'
        },
        drops: 'down',
        opens: 'right'
      });
    }
  } // Timepicker


  if (jQuery().timepicker && $(".timepicker").length) {
    $(".timepicker").timepicker({
      icons: {
        up: 'fas fa-chevron-up',
        down: 'fas fa-chevron-down'
      }
    });
  }
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-3e9a6d","vendors-node_modules_core-js_modules_es_promise_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_strin-40879e","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-d805d8","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_axios_index_js-node_m-32cbd9"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);