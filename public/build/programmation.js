(self["webpackChunk"] = self["webpackChunk"] || []).push([["programmation"],{

/***/ "./assets/components/parametre/programmation.js":
/*!******************************************************!*\
  !*** ./assets/components/parametre/programmation.js ***!
  \******************************************************/
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
  var id_programmation;
  var table = $("#datatables_gestion_programmation").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/programmation/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("#etablissement").select2();
  $('body').on('click', '#datatables_gestion_programmation tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_programmation = null;
    } else {
      $("#datatables_gestion_programmation tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_programmation = $(this).attr('id');
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
            table.columns(0).search(id_etab).draw();
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
    var id_formation, response, annee_request, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context2.next = 14;
              break;
            }

            table.columns(1).search(id_formation).draw();
            _context2.next = 6;
            return axios.get('/api/anneeProgrammation/' + id_formation);

          case 6:
            annee_request = _context2.sent;
            response_annee = annee_request.data;
            _context2.next = 10;
            return axios.get('/api/promotion/' + id_formation);

          case 10:
            request = _context2.sent;
            response = request.data;
            _context2.next = 15;
            break;

          case 14:
            table.columns(1).search("").draw();

          case 15:
            $('#promotion').html(response).select2();
            $('#annee').html(response_annee).select2();

          case 17:
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
    var id_module, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_module = $(this).val();

            if (!(id_module != "")) {
              _context5.next = 9;
              break;
            }

            table.columns(4).search(id_module).draw();
            _context5.next = 5;
            return axios.get('/api/element/' + id_module);

          case 5:
            request = _context5.sent;
            response = request.data;
            _context5.next = 10;
            break;

          case 9:
            table.columns(4).search("").draw();

          case 10:
            $('#element').html(response).select2();

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#element").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_element;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_element = $(this).val();

            if (id_element != "") {
              table.columns(5).search(id_element).draw();
            } else {
              table.columns(5).search("").draw();
            }

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#annee").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var id_annee;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_annee = $(this).val();

            if (id_annee != "") {
              table.columns(6).search(id_annee).draw();
            } else {
              table.columns(6).search("").draw();
            }

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#ajouter").on("click", function () {
    // alert($("#formation").val())
    if (!$("#element").val() || $("#element").val() == "" || !$("#annee").val() || $("#annee").val() == "") {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez choissir une annee et un element!'
      });
      return;
    }

    $('select').select2();
    $("#ajout_modal").modal("show");
  });
  $("#save").on("submit", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var formData, icon, request, _response, message;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#save")[0]);
              formData.append("element_id", $("#element").val());
              formData.append("annee_id", $("#annee").val());
              icon = $("#save i");
              _context8.prev = 5;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context8.next = 9;
              return axios.post('/parametre/programmation/new', formData);

            case 9:
              request = _context8.sent;
              _response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              $("#ajout_modal").modal("hide");
              Toast.fire({
                icon: 'success',
                title: _response
              });
              _context8.next = 24;
              break;

            case 18:
              _context8.prev = 18;
              _context8.t0 = _context8["catch"](5);
              console.log(_context8.t0, _context8.t0.response);
              message = _context8.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[5, 18]]);
    }));

    return function (_x) {
      return _ref8.apply(this, arguments);
    };
  }());
  $("#modifier").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var icon, request, _response2, message;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (id_programmation) {
              _context9.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectionner une ligne!'
            });
            return _context9.abrupt("return");

          case 3:
            icon = $("#modifier i");
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            _context9.prev = 5;
            _context9.next = 8;
            return axios.get('/parametre/programmation/details/' + id_programmation);

          case 8:
            request = _context9.sent;
            _response2 = request.data; // console.log(response)

            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("body #modifier_modal #udpate").html(_response2);
            $('select').select2();
            $("#modifier_modal").modal("show");
            _context9.next = 22;
            break;

          case 16:
            _context9.prev = 16;
            _context9.t0 = _context9["catch"](5);
            console.log(_context9.t0, _context9.t0.response);
            message = _context9.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

          case 22:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[5, 16]]);
  })));
  $("#udpate").on("submit", /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
      var formData, icon, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#udpate")[0]);
              formData.append("annee_id", $("#annee").val());
              formData.append("element_id", $("#element").val());
              icon = $("#udpate i");
              _context10.prev = 5;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context10.next = 9;
              return axios.post('/parametre/programmation/update/' + id_programmation, formData);

            case 9:
              request = _context10.sent;
              _response3 = request.data;
              $('#udpate')[0].reset();
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload();
              $("#modifier_modal").modal("hide");
              Toast.fire({
                icon: 'success',
                title: _response3
              });
              _context10.next = 24;
              break;

            case 18:
              _context10.prev = 18;
              _context10.t0 = _context10["catch"](5);
              console.log(_context10.t0, _context10.t0.response);
              message = _context10.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[5, 18]]);
    }));

    return function (_x2) {
      return _ref10.apply(this, arguments);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js"], () => (__webpack_exec__("./assets/components/parametre/programmation.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUMsK0hBQWlEO0FBQzdGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFyYW1ldHJlL3Byb2dyYW1tYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xuICAgIHRvYXN0OiB0cnVlLFxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgIHRpbWVyOiAzMDAwLFxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXG4gICAgfSxcbn0pXG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xuICAgIGxldCBpZF9wcm9ncmFtbWF0aW9uO1xuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX3Byb2dyYW1tYXRpb25cIikuRGF0YVRhYmxlKHtcbiAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcbiAgICAgICAgXSxcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcbiAgICAgICAgYWpheDogXCIvcGFyYW1ldHJlL3Byb2dyYW1tYXRpb24vbGlzdFwiLFxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9wcm9ncmFtbWF0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XG4gICAgICAgIFxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgIGlkX3Byb2dyYW1tYXRpb24gPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fcHJvZ3JhbW1hdGlvbiB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgaWRfcHJvZ3JhbW1hdGlvbiA9ICQodGhpcykuYXR0cignaWQnKTsgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbihcImNoYW5nZVwiLGFzeW5jIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaChcIlwiKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICB9KVxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxuXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcbiAgICAgICAgICAgIGNvbnN0IGFubmVlX3JlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvYW5uZWVQcm9ncmFtbWF0aW9uLycraWRfZm9ybWF0aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlX2FubmVlID0gYW5uZWVfcmVxdWVzdC5kYXRhXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goXCJcIikuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNhbm5lZScpLmh0bWwocmVzcG9uc2VfYW5uZWUpLnNlbGVjdDIoKTsgICAgICAgXG4gICAgfSlcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKGlkX3Byb21vdGlvbikuZHJhdygpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaChcIlwiKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgICAgIFxuICAgIH0pXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFibGUuY29sdW1ucygzKS5zZWFyY2goXCJcIikuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgICAgXG4gICAgfSlcbiAgICAkKFwiI21vZHVsZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoNCkuc2VhcmNoKGlkX21vZHVsZSkuZHJhdygpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDQpLnNlYXJjaChcIlwiKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgICAgXG4gICAgfSlcbiAgICAkKFwiI2VsZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBpZihpZF9lbGVtZW50ICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoNSkuc2VhcmNoKGlkX2VsZW1lbnQpLmRyYXcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoNSkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0pXG4gICAgJChcIiNhbm5lZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX2FubmVlID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBpZihpZF9hbm5lZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDYpLnNlYXJjaChpZF9hbm5lZSkuZHJhdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFibGUuY29sdW1ucyg2KS5zZWFyY2goXCJcIikuZHJhdygpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIGFsZXJ0KCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKVxuICAgICAgICBpZighJChcIiNlbGVtZW50XCIpLnZhbCgpIHx8ICQoXCIjZWxlbWVudFwiKS52YWwoKSA9PSBcIlwiIHx8ICEkKFwiI2FubmVlXCIpLnZhbCgpIHx8ICQoXCIjYW5uZWVcIikudmFsKCkgPT0gXCJcIil7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjaG9pc3NpciB1bmUgYW5uZWUgZXQgdW4gZWxlbWVudCEnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoXCIjYWpvdXRfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXG5cbiAgICB9KVxuICAgICQoXCIjc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3NhdmVcIilbMF0pXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImVsZW1lbnRfaWRcIiwgJChcIiNlbGVtZW50XCIpLnZhbCgpKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYW5uZWVfaWRcIiwgJChcIiNhbm5lZVwiKS52YWwoKSk7XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmUgaVwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9wcm9ncmFtbWF0aW9uL25ldycsIGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgJCgnI3NhdmUnKVswXS5yZXNldCgpO1xuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcbiAgICAgICAgICAgICQoXCIjYWpvdXRfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICQoXCIjbW9kaWZpZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICBpZighaWRfcHJvZ3JhbW1hdGlvbil7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb25uZXIgdW5lIGxpZ25lIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL3BhcmFtZXRyZS9wcm9ncmFtbWF0aW9uL2RldGFpbHMvJytpZF9wcm9ncmFtbWF0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgJChcImJvZHkgI21vZGlmaWVyX21vZGFsICN1ZHBhdGVcIikuaHRtbChyZXNwb25zZSlcbiAgICAgICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcIiN1ZHBhdGVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiN1ZHBhdGVcIilbMF0pXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImFubmVlX2lkXCIsICQoXCIjYW5uZWVcIikudmFsKCkpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJlbGVtZW50X2lkXCIsICQoXCIjZWxlbWVudFwiKS52YWwoKSk7XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3VkcGF0ZSBpXCIpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvcHJvZ3JhbW1hdGlvbi91cGRhdGUvJytpZF9wcm9ncmFtbWF0aW9uLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgICQoJyN1ZHBhdGUnKVswXS5yZXNldCgpO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5cbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjLCBGT1JDRUQsIFNIQU0pIHtcbiAgdmFyIFNZTUJPTCA9IHdlbGxLbm93blN5bWJvbChLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIEZPUkNFRFxuICApIHtcbiAgICB2YXIgdW5jdXJyaWVkTmF0aXZlUmVnRXhwTWV0aG9kID0gdW5jdXJyeVRoaXMoLy4vW1NZTUJPTF0pO1xuICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgdmFyIHVuY3VycmllZE5hdGl2ZU1ldGhvZCA9IHVuY3VycnlUaGlzKG5hdGl2ZU1ldGhvZCk7XG4gICAgICB2YXIgJGV4ZWMgPSByZWdleHAuZXhlYztcbiAgICAgIGlmICgkZXhlYyA9PT0gcmVnZXhwRXhlYyB8fCAkZXhlYyA9PT0gUmVnRXhwUHJvdG90eXBlLmV4ZWMpIHtcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuY3VycmllZE5hdGl2ZVJlZ0V4cE1ldGhvZChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICB9KTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgbWV0aG9kc1swXSk7XG4gICAgcmVkZWZpbmUoUmVnRXhwUHJvdG90eXBlLCBTWU1CT0wsIG1ldGhvZHNbMV0pO1xuICB9XG5cbiAgaWYgKFNIQU0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHBQcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAoaXNDYWxsYWJsZShleGVjKSkge1xuICAgIHZhciByZXN1bHQgPSBjYWxsKGV4ZWMsIFIsIFMpO1xuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIGFuT2JqZWN0KHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoY2xhc3NvZihSKSA9PT0gJ1JlZ0V4cCcpIHJldHVybiBjYWxsKHJlZ2V4cEV4ZWMsIFIsIFMpO1xuICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbn07XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJpZF9wcm9ncmFtbWF0aW9uIiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsImlkX2V0YWIiLCJ2YWwiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJhbm5lZV9yZXF1ZXN0IiwicmVzcG9uc2VfYW5uZWUiLCJpZF9wcm9tb3Rpb24iLCJpZF9zZW1lc3RyZSIsImlkX21vZHVsZSIsImlkX2VsZW1lbnQiLCJpZF9hbm5lZSIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJtb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZW1vdmUiLCJwb3N0IiwicmVzZXQiLCJyZWxvYWQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=