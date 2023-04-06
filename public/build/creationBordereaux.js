(self["webpackChunk"] = self["webpackChunk"] || []).push([["creationBordereaux"],{

/***/ "./assets/components/honoraire/creation_borderaux.js":
/*!***********************************************************!*\
  !*** ./assets/components/honoraire/creation_borderaux.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

$(document).ready(function () {
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
  var id_seance = false;
  var ids_seances = [];
  var table_creation_borderaux = $("#datables_creation_borderaux").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/honoraire/creation_borderaux/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      ids_seances.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_seance).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('body').on('dblclick', '#datables_creation_borderaux tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_seance = null;
    } else {
      $("#datables_creation_borderaux tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_seance = $(this).attr('id');
    }
  });
  $('body').on('click', '#datables_creation_borderaux tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

    if (input.hasClass('check_seance')) {
      return;
    } else {
      if (input.is(":checked")) {
        input.prop("checked", false);
        var index = ids_seances.indexOf(input.attr("data-id"));
        ids_seances.splice(index, 1);
      } else {
        input.prop("checked", true);
        ids_seances.push(input.attr("data-id"));
      }
    }
  });
  $("select").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_creation_borderaux.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 14;
              break;
            }

            if ($("#semaine").val() != "") {
              table_creation_borderaux.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_creation_borderaux.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_creation_borderaux.columns(4).search($("#grade").val());
            }

            table_creation_borderaux.columns(0).search(id_etab).draw();
            _context.next = 10;
            return axios.get('/api/formation/' + id_etab);

          case 10:
            request = _context.sent;
            response = request.data;
            _context.next = 18;
            break;

          case 14:
            table_creation_borderaux.columns().search('').draw();

            if ($("#semaine").val() != "") {
              table_creation_borderaux.columns(5).search($("#semaine").val()).draw();
            }

            if ($("#professeur").val() != "") {
              table_creation_borderaux.columns(6).search($("#professeur").val()).draw();
            }

            if ($("#grade").val() != "") {
              table_creation_borderaux.columns(4).search($("#grade").val()).draw();
            }

          case 18:
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 21:
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
            table_creation_borderaux.columns().search("");

            if ($("#semaine").val() != "") {
              table_creation_borderaux.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_creation_borderaux.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_creation_borderaux.columns(4).search($("#grade").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 14;
              break;
            }

            table_creation_borderaux.columns(1).search(id_formation).draw();
            _context2.next = 10;
            return axios.get('/api/promotion/' + id_formation);

          case 10:
            request = _context2.sent;
            response = request.data;
            _context2.next = 15;
            break;

          case 14:
            table_creation_borderaux.columns(0).search($("#etablissement").val()).draw();

          case 15:
            $('#semestre').html('').select2();
            $('#promotion').html(response).select2();

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
            table_creation_borderaux.columns().search("");

            if ($("#semaine").val() != "") {
              table_creation_borderaux.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_creation_borderaux.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_creation_borderaux.columns(4).search($("#grade").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 13;
              break;
            }

            table_creation_borderaux.columns(2).search(id_promotion).draw();
            _context3.next = 9;
            return axios.get('/api/semestre/' + id_promotion);

          case 9:
            request = _context3.sent;
            response = request.data;
            _context3.next = 14;
            break;

          case 13:
            table_creation_borderaux.columns(1).search($("#formation").val()).draw();

          case 14:
            $('#semestre').html('').select2();
            $('#semestre').html(response).select2();

          case 16:
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
            table_creation_borderaux.columns().search("");

            if ($("#semaine").val() != "") {
              table_creation_borderaux.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_creation_borderaux.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_creation_borderaux.columns(4).search($("#grade").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 13;
              break;
            }

            table_creation_borderaux.columns(3).search(id_semestre).draw();
            _context4.next = 9;
            return axios.get('/api/module/' + id_semestre);

          case 9:
            request = _context4.sent;
            response = request.data;
            _context4.next = 14;
            break;

          case 13:
            table_creation_borderaux.columns(2).search($("#promotion").val()).draw();

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#semaine").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var semaine;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            semaine = $(this).val();
            table_creation_borderaux.columns(5).search(semaine).draw();

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#semaine").select2({
    minimumInputLength: 10,
    // required enter 3 characters or more
    allowClear: true,
    placeholder: '2022-10-10',
    language: "fr",
    ajax: {
      dataType: 'json',
      url: '/honoraire/creation_borderaux/findSemaine',
      delay: 5,
      // ini bebas mau di pake atau tidak
      data: function data(params) {
        return {
          search: params.term
        };
      },
      processResults: function processResults(data, page) {
        console.log(data);
        var list = {
          text: "Semaine " + data.nsemaine + " de: " + data.debut + " à " + data.fin,
          id: data.id
        };
        return {
          results: [list]
        };
      }
    }
  });
  $("#professeur").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_prof;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_prof = $(this).val();
            table_creation_borderaux.columns(6).search(id_prof).draw();

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#grade").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var grade;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            grade = $(this).val();
            table_creation_borderaux.columns(4).search(grade).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $('body').on('click', '#cree', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var icon, formData, request, _response, message;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();

              if (!(ids_seances.length === 0 || $("#promotion").val() == "" || $("#semaine").val() == "")) {
                _context8.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une semestre et une semaine et au moins une ligne!'
              });
              return _context8.abrupt("return");

            case 4:
              icon = $("#cree i");
              icon.removeClass('fa-folder-open').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_seances', JSON.stringify(ids_seances));
              formData.append('promotion', $("#promotion").val());
              formData.append('semaine', $("#semaine").val());
              _context8.prev = 10;
              _context8.next = 13;
              return axios.post('/honoraire/creation_borderaux/cree_borderaux', formData);

            case 13:
              request = _context8.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: 'Borderaux Bien Crée'
              });
              window.open('/honoraire/creation_borderaux/honoraire_borderaux/' + _response, '_blank');
              table_creation_borderaux.ajax.reload(null, false);
              icon.addClass('fa-folder-open').removeClass("fa-spinner fa-spin");
              _context8.next = 25;
              break;

            case 21:
              _context8.prev = 21;
              _context8.t0 = _context8["catch"](10);
              message = _context8.t0.response.data;
              icon.addClass('fa-folder-open').removeClass("fa-spinner fa-spin");

            case 25:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[10, 21]]);
    }));

    return function (_x) {
      return _ref8.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


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

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/honoraire/creation_borderaux.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRCO0FBQy9DLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2hvbm9yYWlyZS9jcmVhdGlvbl9ib3JkZXJhdXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbiAgICAgICAgdG9hc3Q6IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgdGltZXI6IDMwMDAsXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBsZXQgaWRfc2VhbmNlID0gZmFsc2U7XG4gICAgbGV0IGlkc19zZWFuY2VzID0gW107XG4gICAgdmFyIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eCA9ICQoXCIjZGF0YWJsZXNfY3JlYXRpb25fYm9yZGVyYXV4XCIpLkRhdGFUYWJsZSh7XG4gICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXG4gICAgICAgIGFqYXg6IFwiL2hvbm9yYWlyZS9jcmVhdGlvbl9ib3JkZXJhdXgvbGlzdFwiLFxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZHNfc2VhbmNlcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfc2VhbmNlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICB9LFxuICAgICAgICBsYW5ndWFnZToge1xuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGFibGVzX2NyZWF0aW9uX2JvcmRlcmF1eCB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgIGlkX3NlYW5jZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX2NyZWF0aW9uX2JvcmRlcmF1eCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgaWRfc2VhbmNlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX2NyZWF0aW9uX2JvcmRlcmF1eCB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xuICAgICAgICBpZiAoaW5wdXQuaGFzQ2xhc3MoJ2NoZWNrX3NlYW5jZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHNfc2VhbmNlcy5pbmRleE9mKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcbiAgICAgICAgICAgICAgICBpZHNfc2VhbmNlcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xuICAgICAgICAgICAgICAgIGlkc19zZWFuY2VzLnB1c2goaW5wdXQuYXR0cihcImRhdGEtaWRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNSkuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg0KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygpLnNlYXJjaCgnJykuZHJhdygpO1xuICAgICAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpLmRyYXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKS5kcmF3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDQpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKS5kcmF3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygpLnNlYXJjaChcIlwiKTtcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNSkuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg0KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDQpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygpLnNlYXJjaChcIlwiKTtcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNSkuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg0KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygzKS5zZWFyY2goaWRfc2VtZXN0cmUpLmRyYXcoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygyKS5zZWFyY2goJChcIiNwcm9tb3Rpb25cIikudmFsKCkpLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcIiNzZW1haW5lXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3Qgc2VtYWluZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDUpLnNlYXJjaChzZW1haW5lKS5kcmF3KCk7XG4gICAgfSlcbiAgICAkKFwiI3NlbWFpbmVcIikuc2VsZWN0Mih7XG4gICAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMTAsICAvLyByZXF1aXJlZCBlbnRlciAzIGNoYXJhY3RlcnMgb3IgbW9yZVxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgICBwbGFjZWhvbGRlcjogJzIwMjItMTAtMTAnLFxuICAgICAgICBsYW5ndWFnZTogXCJmclwiLFxuICAgICAgICBhamF4OiB7XG4gICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgIHVybDogJy9ob25vcmFpcmUvY3JlYXRpb25fYm9yZGVyYXV4L2ZpbmRTZW1haW5lJywgIFxuICAgICAgICAgICBkZWxheTogNSwgIC8vIGluaSBiZWJhcyBtYXUgZGkgcGFrZSBhdGF1IHRpZGFrXG4gICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICBzZWFyY2g6IHBhcmFtcy50ZXJtXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9LFxuICAgICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEsIHBhZ2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGxpc3QgPSB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJTZW1haW5lIFwiICtkYXRhLm5zZW1haW5lICtcIiBkZTogXCIrZGF0YS5kZWJ1dCArIFwiIMOgIFwiICtkYXRhLmZpbixcbiAgICAgICAgICAgICAgICBpZDogZGF0YS5pZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdHM6ICBbbGlzdF1cbiAgICAgICAgICAgIH07XG4gICAgICAgICB9LFxuICAgICAgIH1cbiAgICB9KVxuICAgICQoXCIjcHJvZmVzc2V1clwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3Byb2YgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg2KS5zZWFyY2goaWRfcHJvZikuZHJhdygpO1xuICAgIH0pXG4gICAgJChcIiNncmFkZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGdyYWRlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNCkuc2VhcmNoKGdyYWRlKS5kcmF3KCk7XG4gICAgfSlcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2NyZWUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGlkc19zZWFuY2VzLmxlbmd0aCA9PT0gMCB8fCAkKFwiI3Byb21vdGlvblwiKS52YWwoKSA9PSBcIlwiIHx8ICQoXCIjc2VtYWluZVwiKS52YWwoKSA9PSBcIlwiICl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciB1bmUgc2VtZXN0cmUgZXQgdW5lIHNlbWFpbmUgZXQgYXUgbW9pbnMgdW5lIGxpZ25lIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2NyZWUgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZm9sZGVyLW9wZW4nKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRzX3NlYW5jZXMnLCBKU09OLnN0cmluZ2lmeShpZHNfc2VhbmNlcykpOyBcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9tb3Rpb24nLCAkKFwiI3Byb21vdGlvblwiKS52YWwoKSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc2VtYWluZScsICQoXCIjc2VtYWluZVwiKS52YWwoKSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2hvbm9yYWlyZS9jcmVhdGlvbl9ib3JkZXJhdXgvY3JlZV9ib3JkZXJhdXgnLGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQm9yZGVyYXV4IEJpZW4gQ3LDqWUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCcvaG9ub3JhaXJlL2NyZWF0aW9uX2JvcmRlcmF1eC9ob25vcmFpcmVfYm9yZGVyYXV4LycrcmVzcG9uc2UsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWZvbGRlci1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWZvbGRlci1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxufSkiLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBtb3ZlZCB0byBlbnRyeSBwb2ludHNcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBSZWdFeHBQcm90b3R5cGUgPSBSZWdFeHAucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMsIEZPUkNFRCwgU0hBTSkge1xuICB2YXIgU1lNQk9MID0gd2VsbEtub3duU3ltYm9sKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG5cbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBXZSBjYW4ndCB1c2UgcmVhbCByZWdleCBoZXJlIHNpbmNlIGl0IGNhdXNlcyBkZW9wdGltaXphdGlvblxuICAgICAgLy8gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb24gaW4gVjhcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMDZcbiAgICAgIHJlID0ge307XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgICByZS5mbGFncyA9ICcnO1xuICAgICAgcmVbU1lNQk9MXSA9IC8uL1tTWU1CT0xdO1xuICAgIH1cblxuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcblxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSk7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgRk9SQ0VEXG4gICkge1xuICAgIHZhciB1bmN1cnJpZWROYXRpdmVSZWdFeHBNZXRob2QgPSB1bmN1cnJ5VGhpcygvLi9bU1lNQk9MXSk7XG4gICAgdmFyIG1ldGhvZHMgPSBleGVjKFNZTUJPTCwgJydbS0VZXSwgZnVuY3Rpb24gKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICB2YXIgdW5jdXJyaWVkTmF0aXZlTWV0aG9kID0gdW5jdXJyeVRoaXMobmF0aXZlTWV0aG9kKTtcbiAgICAgIHZhciAkZXhlYyA9IHJlZ2V4cC5leGVjO1xuICAgICAgaWYgKCRleGVjID09PSByZWdleHBFeGVjIHx8ICRleGVjID09PSBSZWdFeHBQcm90b3R5cGUuZXhlYykge1xuICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5jdXJyaWVkTmF0aXZlUmVnRXhwTWV0aG9kKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmN1cnJpZWROYXRpdmVNZXRob2Qoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgIH0pO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBtZXRob2RzWzBdKTtcbiAgICByZWRlZmluZShSZWdFeHBQcm90b3R5cGUsIFNZTUJPTCwgbWV0aG9kc1sxXSk7XG4gIH1cblxuICBpZiAoU0hBTSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cFByb3RvdHlwZVtTWU1CT0xdLCAnc2hhbScsIHRydWUpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmIChpc0NhbGxhYmxlKGV4ZWMpKSB7XG4gICAgdmFyIHJlc3VsdCA9IGNhbGwoZXhlYywgUiwgUyk7XG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkgYW5PYmplY3QocmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmIChjbGFzc29mKFIpID09PSAnUmVnRXhwJykgcmV0dXJuIGNhbGwocmVnZXhwRXhlYywgUiwgUyk7XG4gIHRocm93IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xufTtcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX3NlYW5jZSIsImlkc19zZWFuY2VzIiwidGFibGVfY3JlYXRpb25fYm9yZGVyYXV4IiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJvbiIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImF0dHIiLCJpbnB1dCIsImlzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsInNlbGVjdDIiLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsInJlc3BvbnNlIiwiZHJhdyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwiaWRfc2VtZXN0cmUiLCJzZW1haW5lIiwibWluaW11bUlucHV0TGVuZ3RoIiwiYWxsb3dDbGVhciIsInBsYWNlaG9sZGVyIiwiZGF0YVR5cGUiLCJkZWxheSIsInBhcmFtcyIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsInRleHQiLCJuc2VtYWluZSIsImRlYnV0IiwiZmluIiwiaWQiLCJyZXN1bHRzIiwiaWRfcHJvZiIsImdyYWRlIiwibGVuZ3RoIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsIndpbmRvdyIsIm9wZW4iLCJyZWxvYWQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==