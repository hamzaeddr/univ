(self["webpackChunk"] = self["webpackChunk"] || []).push([["element"],{

/***/ "./assets/components/parametre/element.js":
/*!************************************************!*\
  !*** ./assets/components/parametre/element.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  var id_element;
  var table = $("#datatables_gestion_element").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/element/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("#etablissement").select2();
  $('body').on('click', '#datatables_gestion_element tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_element = null;
    } else {
      $("#datatables_gestion_element tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_element = $(this).attr('id');
    }
  });
  $("#etablissement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context.sent;
            response = request.data;
            table.columns(0).search($(this).val()).draw();
            _context.next = 11;
            break;

          case 10:
            table.columns(0).search("").draw();

          case 11:
            $('#formation').html(response).select2();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context2.next = 10;
              break;
            }

            table.columns(1).search(id_formation).draw();
            _context2.next = 6;
            return axios.get('/api/promotion/' + id_formation);

          case 6:
            request = _context2.sent;
            response = request.data;
            _context2.next = 11;
            break;

          case 10:
            table.columns(1).search("").draw();

          case 11:
            $('#promotion').html(response).select2();

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_promotion, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();

            if (!(id_promotion != "")) {
              _context3.next = 9;
              break;
            }

            table.columns(2).search(id_promotion).draw();
            _context3.next = 5;
            return axios.get('/api/semestre/' + id_promotion);

          case 5:
            request = _context3.sent;
            response = request.data;
            _context3.next = 10;
            break;

          case 9:
            table.columns(2).search("").draw();

          case 10:
            $('#semestre').html(response).select2();

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_semestre, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_semestre = $(this).val();

            if (!(id_semestre != "")) {
              _context4.next = 9;
              break;
            }

            table.columns(3).search(id_semestre).draw();
            _context4.next = 5;
            return axios.get('/api/module/' + id_semestre);

          case 5:
            request = _context4.sent;
            response = request.data;
            _context4.next = 10;
            break;

          case 9:
            table.columns(3).search("").draw();

          case 10:
            $('#module').html(response).select2();

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#module").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_module;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_module = $(this).val();

            if (id_module != "") {
              table.columns(4).search(id_module).draw();
            } else {
              table.columns(4).search("").draw();
            }

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#ajouter").on("click", function () {
    // alert($("#formation").val())
    if (!$("#module").val() || $("#module").val() == "") {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez choissir un module!'
      });
      return;
    }

    $("#ajout_modal").modal("show");
    $("select").select2();
  });
  $("#modifier").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var icon, request, _response, message;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (id_element) {
              _context6.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!'
            });
            return _context6.abrupt("return");

          case 3:
            icon = $("#modifier i");
            _context6.prev = 4;
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            _context6.next = 8;
            return axios.get('/parametre/element/details/' + id_element);

          case 8:
            request = _context6.sent;
            _response = request.data;
            console.log(_response);
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("body #modifier_modal #udpate").html(_response);
            $('select').select2();
            $("#modifier_modal").modal("show");
            _context6.next = 23;
            break;

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](4);
            console.log(_context6.t0, _context6.t0.response);
            message = _context6.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[4, 17]]);
  })));
  $("#save").on("submit", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var formData, icon, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#save")[0]);
              formData.append("module_id", $("#module").val());
              icon = $("#save i");
              _context7.prev = 4;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context7.next = 8;
              return axios.post('/parametre/element/new', formData);

            case 8:
              request = _context7.sent;
              _response2 = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              $("#ajout_modal").modal("hide");
              Toast.fire({
                icon: 'success',
                title: _response2
              });
              _context7.next = 23;
              break;

            case 17:
              _context7.prev = 17;
              _context7.t0 = _context7["catch"](4);
              console.log(_context7.t0, _context7.t0.response);
              message = _context7.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[4, 17]]);
    }));

    return function (_x) {
      return _ref7.apply(this, arguments);
    };
  }());
  $("#udpate").on("submit", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var formData, icon, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#udpate")[0]);
              icon = $("#udpate i");
              _context8.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context8.next = 7;
              return axios.post('/parametre/element/update/' + id_element, formData);

            case 7:
              request = _context8.sent;
              _response3 = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              id_element = false;
              table.ajax.reload();
              $("#modifier_modal").modal("hide");
              Toast.fire({
                icon: 'success',
                title: _response3
              });
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
              _context8.next = 23;
              break;

            case 17:
              _context8.prev = 17;
              _context8.t0 = _context8["catch"](3);
              console.log(_context8.t0, _context8.t0.response);
              message = _context8.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[3, 17]]);
    }));

    return function (_x2) {
      return _ref8.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js"], () => (__webpack_exec__("./assets/components/parametre/element.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLHFGQUE0QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxjQUFjLG1CQUFPLENBQUMsaUZBQTBCO0FBQ2hELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYixXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhcmFtZXRyZS9lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbiAgICB0b2FzdDogdHJ1ZSxcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICB0aW1lcjogMzAwMCxcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxuICAgIH0sXG4gICAgfSlcbiAgICBcbiAgICBcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xuICAgIGxldCBpZF9lbGVtZW50O1xuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2VsZW1lbnRcIikuRGF0YVRhYmxlKHtcbiAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcbiAgICAgICAgXSxcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcbiAgICAgICAgYWpheDogXCIvcGFyYW1ldHJlL2VsZW1lbnQvbGlzdFwiLFxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9lbGVtZW50IHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XG4gICAgICAgIFxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgIGlkX2VsZW1lbnQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fZWxlbWVudCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgaWRfZWxlbWVudCA9ICQodGhpcykuYXR0cignaWQnKTsgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbihcImNoYW5nZVwiLGFzeW5jIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaCgkKHRoaXMpLnZhbCgpKS5kcmF3KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaChcIlwiKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICB9KVxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxuXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDEpLnNlYXJjaChcIlwiKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICAgICBcbiAgICB9KVxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xuICAgICAgICAgICAgdGFibGUuY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKFwiXCIpLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgICAgXG4gICAgfSlcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMykuc2VhcmNoKGlkX3NlbWVzdHJlKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nK2lkX3NlbWVzdHJlKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaChcIlwiKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICAgICBcbiAgICB9KVxuICAgICQoXCIjbW9kdWxlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xuICAgICAgICAgICAgdGFibGUuY29sdW1ucyg0KS5zZWFyY2goaWRfbW9kdWxlKS5kcmF3KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoNCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0pXG4gICAgJChcIiNham91dGVyXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyBhbGVydCgkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSlcbiAgICAgICAgaWYoISQoXCIjbW9kdWxlXCIpLnZhbCgpIHx8ICQoXCIjbW9kdWxlXCIpLnZhbCgpID09IFwiXCIpe1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY2hvaXNzaXIgdW4gbW9kdWxlIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjYWpvdXRfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXG4gICAgICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xuXG4gICAgfSlcbiAgICAkKFwiI21vZGlmaWVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIWlkX2VsZW1lbnQpe1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uZXIgdW5lIGxpZ25lIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL3BhcmFtZXRyZS9lbGVtZW50L2RldGFpbHMvJytpZF9lbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgJChcImJvZHkgI21vZGlmaWVyX21vZGFsICN1ZHBhdGVcIikuaHRtbChyZXNwb25zZSlcbiAgICAgICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICAkKFwiI3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiNzYXZlXCIpWzBdKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJtb2R1bGVfaWRcIiwgJChcIiNtb2R1bGVcIikudmFsKCkpO1xuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlIGlcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvZWxlbWVudC9uZXcnLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgICQoJyNzYXZlJylbMF0ucmVzZXQoKTtcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XG4gICAgICAgICAgICAkKFwiI2Fqb3V0X21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwiI3VkcGF0ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3VkcGF0ZVwiKVswXSlcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjdWRwYXRlIGlcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvZWxlbWVudC91cGRhdGUvJytpZF9lbGVtZW50LCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgIGlkX2VsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBtb3ZlZCB0byBlbnRyeSBwb2ludHNcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBSZWdFeHBQcm90b3R5cGUgPSBSZWdFeHAucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMsIEZPUkNFRCwgU0hBTSkge1xuICB2YXIgU1lNQk9MID0gd2VsbEtub3duU3ltYm9sKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG5cbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBXZSBjYW4ndCB1c2UgcmVhbCByZWdleCBoZXJlIHNpbmNlIGl0IGNhdXNlcyBkZW9wdGltaXphdGlvblxuICAgICAgLy8gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb24gaW4gVjhcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMDZcbiAgICAgIHJlID0ge307XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgICByZS5mbGFncyA9ICcnO1xuICAgICAgcmVbU1lNQk9MXSA9IC8uL1tTWU1CT0xdO1xuICAgIH1cblxuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcblxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSk7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgRk9SQ0VEXG4gICkge1xuICAgIHZhciB1bmN1cnJpZWROYXRpdmVSZWdFeHBNZXRob2QgPSB1bmN1cnJ5VGhpcygvLi9bU1lNQk9MXSk7XG4gICAgdmFyIG1ldGhvZHMgPSBleGVjKFNZTUJPTCwgJydbS0VZXSwgZnVuY3Rpb24gKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICB2YXIgdW5jdXJyaWVkTmF0aXZlTWV0aG9kID0gdW5jdXJyeVRoaXMobmF0aXZlTWV0aG9kKTtcbiAgICAgIHZhciAkZXhlYyA9IHJlZ2V4cC5leGVjO1xuICAgICAgaWYgKCRleGVjID09PSByZWdleHBFeGVjIHx8ICRleGVjID09PSBSZWdFeHBQcm90b3R5cGUuZXhlYykge1xuICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5jdXJyaWVkTmF0aXZlUmVnRXhwTWV0aG9kKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmN1cnJpZWROYXRpdmVNZXRob2Qoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgIH0pO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBtZXRob2RzWzBdKTtcbiAgICByZWRlZmluZShSZWdFeHBQcm90b3R5cGUsIFNZTUJPTCwgbWV0aG9kc1sxXSk7XG4gIH1cblxuICBpZiAoU0hBTSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cFByb3RvdHlwZVtTWU1CT0xdLCAnc2hhbScsIHRydWUpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmIChpc0NhbGxhYmxlKGV4ZWMpKSB7XG4gICAgdmFyIHJlc3VsdCA9IGNhbGwoZXhlYywgUiwgUyk7XG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkgYW5PYmplY3QocmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmIChjbGFzc29mKFIpID09PSAnUmVnRXhwJykgcmV0dXJuIGNhbGwocmVnZXhwRXhlYywgUiwgUyk7XG4gIHRocm93IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xufTtcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImlkX2VsZW1lbnQiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwibGFuZ3VhZ2UiLCJ1cmwiLCJzZWxlY3QyIiwib24iLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJhdHRyIiwiaWRfZXRhYiIsInZhbCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImNvbHVtbnMiLCJzZWFyY2giLCJkcmF3IiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsIm1vZGFsIiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsInJlc2V0IiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==