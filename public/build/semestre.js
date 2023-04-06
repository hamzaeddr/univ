(self["webpackChunk"] = self["webpackChunk"] || []).push([["semestre"],{

/***/ "./assets/components/parametre/semestre.js":
/*!*************************************************!*\
  !*** ./assets/components/parametre/semestre.js ***!
  \*************************************************/
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
  var id_semestre;
  var table = $("#datatables_gestion_semestre").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/semestre/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("#etablissement").select2();
  $('body').on('click', '#datatables_gestion_semestre tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_semestre = null;
    } else {
      $("#datatables_gestion_semestre tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_semestre = $(this).attr('id');
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
    var id_promotion;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();

            if (id_promotion != "") {
              table.columns(2).search(id_promotion).draw();
            } else {
              table.columns(2).search("").draw();
            }

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#ajouter").on("click", function () {
    // alert($("#formation").val())
    if (!$("#promotion").val() || $("#promotion").val() == "") {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez choissir une promotion!'
      });
      return;
    }

    $("#ajout_modal").modal("show");
  });
  $("#modifier").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (id_semestre) {
              _context4.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!'
            });
            return _context4.abrupt("return");

          case 3:
            icon = $("#modifier i");
            _context4.prev = 4;
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            _context4.next = 8;
            return axios.get('/parametre/semestre/details/' + id_semestre);

          case 8:
            request = _context4.sent;
            response = request.data;
            console.log(response);
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("#modifier_modal #designation").val(response.designation);

            if (response.active == 1) {
              $("#modifier_modal #active").prop("checked", true);
            } else {
              $("#modifier_modal #active").prop("checked", false);
            }

            $("#modifier_modal").modal("show");
            _context4.next = 23;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](4);
            console.log(_context4.t0, _context4.t0.response);
            message = _context4.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 17]]);
  })));
  $("#save").on("submit", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#save")[0]);
              formData.append("promotion_id", $("#promotion").val());
              icon = $("#save i");
              _context5.prev = 4;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context5.next = 8;
              return axios.post('/parametre/semestre/new', formData);

            case 8:
              request = _context5.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              $("#ajout_modal").modal("hide");
              _context5.next = 22;
              break;

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](4);
              console.log(_context5.t0, _context5.t0.response);
              message = _context5.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[4, 16]]);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());
  $("#udpate").on("submit", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#udpate")[0]);
              icon = $("#udpate i");
              _context6.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context6.next = 7;
              return axios.post('/parametre/semestre/update/' + id_semestre, formData);

            case 7:
              request = _context6.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload();
              $("#modifier_modal").modal("hide");
              _context6.next = 20;
              break;

            case 14:
              _context6.prev = 14;
              _context6.t0 = _context6["catch"](3);
              console.log(_context6.t0, _context6.t0.response);
              message = _context6.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 20:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[3, 14]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js"], () => (__webpack_exec__("./assets/components/parametre/semestre.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhcmFtZXRyZS9zZW1lc3RyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gICAgdG9hc3Q6IHRydWUsXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgdGltZXI6IDMwMDAsXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcbiAgICB9LFxuICAgIH0pXG4gICAgXG4gICAgXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcbiAgICBsZXQgaWRfc2VtZXN0cmU7XG4gICBcbiAgICB2YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9zZW1lc3RyZVwiKS5EYXRhVGFibGUoe1xuICAgICAgICBsZW5ndGhNZW51OiBbXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICBdLFxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxuICAgICAgICBhamF4OiBcIi9wYXJhbWV0cmUvc2VtZXN0cmUvbGlzdFwiLFxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9zZW1lc3RyZSB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xuICAgICAgICBcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICAgICBpZF9zZW1lc3RyZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9zZW1lc3RyZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7ICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oXCJjaGFuZ2VcIixhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goJCh0aGlzKS52YWwoKSkuZHJhdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goXCJcIikuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcblxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xuICAgICAgICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goXCJcIikuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgICAgXG4gICAgfSlcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKGlkX3Byb21vdGlvbikuZHJhdygpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaChcIlwiKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9KVxuICAgICQoXCIjYWpvdXRlclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy8gYWxlcnQoJChcIiNmb3JtYXRpb25cIikudmFsKCkpXG4gICAgICAgIGlmKCEkKFwiI3Byb21vdGlvblwiKS52YWwoKSB8fCAkKFwiI3Byb21vdGlvblwiKS52YWwoKSA9PSBcIlwiKXtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNob2lzc2lyIHVuZSBwcm9tb3Rpb24hJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcblxuICAgIH0pXG4gICAgJChcIiNtb2RpZmllclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCFpZF9zZW1lc3RyZSl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb25lciB1bmUgbGlnbmUhJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXIgaVwiKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvcGFyYW1ldHJlL3NlbWVzdHJlL2RldGFpbHMvJytpZF9zZW1lc3RyZSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgI2Rlc2lnbmF0aW9uXCIpLnZhbChyZXNwb25zZS5kZXNpZ25hdGlvbilcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmFjdGl2ZSA9PSAxKXtcbiAgICAgICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsICNhY3RpdmVcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsICNhY3RpdmVcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICAkKFwiI3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiNzYXZlXCIpWzBdKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm9tb3Rpb25faWRcIiwgJChcIiNwcm9tb3Rpb25cIikudmFsKCkpO1xuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlIGlcIik7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9zZW1lc3RyZS9uZXcnLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgICQoJyNzYXZlJylbMF0ucmVzZXQoKTtcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XG4gICAgICAgICAgICAkKFwiI2Fqb3V0X21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwiI3VkcGF0ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3VkcGF0ZVwiKVswXSlcbiAgICAgICBcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjdWRwYXRlIGlcIik7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9zZW1lc3RyZS91cGRhdGUvJytpZF9zZW1lc3RyZSwgZm9ybURhdGEpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pXG4gICBcbn0pXG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBtb3ZlZCB0byBlbnRyeSBwb2ludHNcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBSZWdFeHBQcm90b3R5cGUgPSBSZWdFeHAucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMsIEZPUkNFRCwgU0hBTSkge1xuICB2YXIgU1lNQk9MID0gd2VsbEtub3duU3ltYm9sKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG5cbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBXZSBjYW4ndCB1c2UgcmVhbCByZWdleCBoZXJlIHNpbmNlIGl0IGNhdXNlcyBkZW9wdGltaXphdGlvblxuICAgICAgLy8gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb24gaW4gVjhcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMDZcbiAgICAgIHJlID0ge307XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgICByZS5mbGFncyA9ICcnO1xuICAgICAgcmVbU1lNQk9MXSA9IC8uL1tTWU1CT0xdO1xuICAgIH1cblxuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcblxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSk7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgRk9SQ0VEXG4gICkge1xuICAgIHZhciB1bmN1cnJpZWROYXRpdmVSZWdFeHBNZXRob2QgPSB1bmN1cnJ5VGhpcygvLi9bU1lNQk9MXSk7XG4gICAgdmFyIG1ldGhvZHMgPSBleGVjKFNZTUJPTCwgJydbS0VZXSwgZnVuY3Rpb24gKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICB2YXIgdW5jdXJyaWVkTmF0aXZlTWV0aG9kID0gdW5jdXJyeVRoaXMobmF0aXZlTWV0aG9kKTtcbiAgICAgIHZhciAkZXhlYyA9IHJlZ2V4cC5leGVjO1xuICAgICAgaWYgKCRleGVjID09PSByZWdleHBFeGVjIHx8ICRleGVjID09PSBSZWdFeHBQcm90b3R5cGUuZXhlYykge1xuICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5jdXJyaWVkTmF0aXZlUmVnRXhwTWV0aG9kKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmN1cnJpZWROYXRpdmVNZXRob2Qoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgIH0pO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBtZXRob2RzWzBdKTtcbiAgICByZWRlZmluZShSZWdFeHBQcm90b3R5cGUsIFNZTUJPTCwgbWV0aG9kc1sxXSk7XG4gIH1cblxuICBpZiAoU0hBTSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cFByb3RvdHlwZVtTWU1CT0xdLCAnc2hhbScsIHRydWUpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmIChpc0NhbGxhYmxlKGV4ZWMpKSB7XG4gICAgdmFyIHJlc3VsdCA9IGNhbGwoZXhlYywgUiwgUyk7XG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkgYW5PYmplY3QocmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmIChjbGFzc29mKFIpID09PSAnUmVnRXhwJykgcmV0dXJuIGNhbGwocmVnZXhwRXhlYywgUiwgUyk7XG4gIHRocm93IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xufTtcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImlkX3NlbWVzdHJlIiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsImlkX2V0YWIiLCJ2YWwiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwibW9kYWwiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiZGVzaWduYXRpb24iLCJhY3RpdmUiLCJwcm9wIiwibWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwicmVzZXQiLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9