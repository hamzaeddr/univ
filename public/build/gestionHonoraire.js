(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestionHonoraire"],{

/***/ "./assets/components/honoraire/gestion_honoraire.js":
/*!**********************************************************!*\
  !*** ./assets/components/honoraire/gestion_honoraire.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

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
  var table_gestion_honoraires = $("#datables_gestion_honoraires").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/honoraire/gestion/list",
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
  $('body').on('dblclick', '#datables_gestion_honoraires tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_seance = null;
    } else {
      $("#datables_gestion_honoraires tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_seance = $(this).attr('id');
    }
  });
  $('body').on('click', '#datables_gestion_honoraires tbody tr', function (e) {
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
            table_gestion_honoraires.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 15;
              break;
            }

            if ($("#statut").val() != "") {
              table_gestion_honoraires.columns(4).search($("#statut").val());
            }

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            table_gestion_honoraires.columns(0).search(id_etab).draw();
            _context.next = 11;
            return axios.get('/api/formation/' + id_etab);

          case 11:
            request = _context.sent;
            response = request.data;
            _context.next = 20;
            break;

          case 15:
            // table_creation_borderaux.columns().search('').draw();
            table_gestion_honoraires.columns().search("").draw();

            if ($("#statut").val() != "") {
              table_gestion_honoraires.columns(4).search($("#statut").val()).draw();
            }

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val()).draw();
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val()).draw();
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val()).draw();
            }

          case 20:
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 23:
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
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 14;
              break;
            }

            table_gestion_honoraires.columns(1).search(id_formation).draw();
            _context2.next = 10;
            return axios.get('/api/promotion/' + id_formation);

          case 10:
            request = _context2.sent;
            response = request.data;
            _context2.next = 15;
            break;

          case 14:
            table_gestion_honoraires.columns(0).search($("#etablissement").val()).draw();

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
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 13;
              break;
            }

            table_gestion_honoraires.columns(2).search(id_promotion).draw();
            _context3.next = 9;
            return axios.get('/api/semestre/' + id_promotion);

          case 9:
            request = _context3.sent;
            response = request.data;
            _context3.next = 14;
            break;

          case 13:
            table_gestion_honoraires.columns(1).search($("#formation").val()).draw();

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
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 13;
              break;
            }

            table_gestion_honoraires.columns(3).search(id_semestre).draw();
            _context4.next = 9;
            return axios.get('/api/module/' + id_semestre);

          case 9:
            request = _context4.sent;
            response = request.data;
            _context4.next = 14;
            break;

          case 13:
            table_gestion_honoraires.columns(2).search($("#promotion").val()).draw();

          case 14:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 16:
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
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            if (!(id_module != "")) {
              _context5.next = 13;
              break;
            }

            table_gestion_honoraires.columns(4).search(id_module).draw();
            _context5.next = 9;
            return axios.get('/api/element/' + id_module);

          case 9:
            request = _context5.sent;
            response = request.data;
            _context5.next = 14;
            break;

          case 13:
            table_gestion_honoraires.columns(3).search($("#semestre").val()).draw();

          case 14:
            $('#element').html(response).select2();

          case 15:
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
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            table_gestion_honoraires.columns(5).search(id_element).draw();

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#statut").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var statut;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            statut = $(this).val();
            table_gestion_honoraires.columns(4).search(statut).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#semaine").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var semaine;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            semaine = $(this).val();
            table_gestion_honoraires.columns(5).search(semaine).draw();

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#professeur").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var id_prof;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id_prof = $(this).val();
            table_gestion_honoraires.columns(6).search(id_prof).draw();

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#grade").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var grade;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            grade = $(this).val();
            table_gestion_honoraires.columns(7).search(grade).draw();

          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $('body').on('click', '#annuler', /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var icon, formData, request, _response, message;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();

              if (!(ids_seances.length === 0)) {
                _context11.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context11.abrupt("return");

            case 4:
              icon = $("#annuler i");
              icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_seances', JSON.stringify(ids_seances));
              _context11.prev = 8;
              _context11.next = 11;
              return axios.post('/honoraire/gestion/annuler_honoraires', formData);

            case 11:
              request = _context11.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: 'Honoraire Anullée Avec Succée'
              });
              ids_seances = [];
              table_gestion_honoraires.ajax.reload(null, false);
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              _context11.next = 23;
              break;

            case 19:
              _context11.prev = 19;
              _context11.t0 = _context11["catch"](8);
              message = _context11.t0.response.data;
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");

            case 23:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[8, 19]]);
    }));

    return function (_x) {
      return _ref11.apply(this, arguments);
    };
  }());
  $('body').on('click', '#regle', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var icon, formData, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();

              if (!(ids_seances.length === 0)) {
                _context12.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context12.abrupt("return");

            case 4:
              icon = $("#regle i");
              icon.removeClass('a-plus-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_seances', JSON.stringify(ids_seances));
              _context12.prev = 8;
              _context12.next = 11;
              return axios.post('/honoraire/gestion/regle_honoraires', formData);

            case 11:
              request = _context12.sent;
              _response2 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response2
              });
              ids_seances = [];
              table_gestion_honoraires.ajax.reload(null, false);
              icon.addClass('a-plus-circle').removeClass("fa-spinner fa-spin");
              _context12.next = 23;
              break;

            case 19:
              _context12.prev = 19;
              _context12.t0 = _context12["catch"](8);
              message = _context12.t0.response.data;
              icon.addClass('a-plus-circle').removeClass("fa-spinner fa-spin");

            case 23:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[8, 19]]);
    }));

    return function (_x2) {
      return _ref12.apply(this, arguments);
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

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


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


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/honoraire/gestion_honoraire.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENELGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMscUZBQTRCO0FBQ3ZELDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1QztBQUMzRSxjQUFjLG1CQUFPLENBQUMsdUZBQTZCO0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2Qzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ob25vcmFpcmUvZ2VzdGlvbl9ob25vcmFpcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbiAgICAgICAgdG9hc3Q6IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgdGltZXI6IDMwMDAsXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBsZXQgaWRfc2VhbmNlID0gZmFsc2U7XG4gICAgbGV0IGlkc19zZWFuY2VzID0gW107XG4gICAgdmFyIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcyA9ICQoXCIjZGF0YWJsZXNfZ2VzdGlvbl9ob25vcmFpcmVzXCIpLkRhdGFUYWJsZSh7XG4gICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXG4gICAgICAgIGFqYXg6IFwiL2hvbm9yYWlyZS9nZXN0aW9uL2xpc3RcIixcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWRzX3NlYW5jZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcbiAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX3NlYW5jZSkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgfSxcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19nZXN0aW9uX2hvbm9yYWlyZXMgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICAgICBpZF9zZWFuY2UgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkYXRhYmxlc19nZXN0aW9uX2hvbm9yYWlyZXMgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgIGlkX3NlYW5jZSA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19nZXN0aW9uX2hvbm9yYWlyZXMgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcbiAgICAgICAgaWYgKGlucHV0Lmhhc0NsYXNzKCdjaGVja19zZWFuY2UnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRzX3NlYW5jZXMuaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgICAgICAgICAgaWRzX3NlYW5jZXMuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcbiAgICAgICAgICAgICAgICBpZHNfc2VhbmNlcy5wdXNoKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xuICAgICAgICAgICAgaWYoJChcIiNzdGF0dXRcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNCkuc2VhcmNoKCQoXCIjc3RhdHV0XCIpLnZhbCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy8gdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoKS5zZWFyY2goJycpLmRyYXcoKTtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcbiAgICAgICAgICAgIGlmKCQoXCIjc3RhdHV0XCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDQpLnNlYXJjaCgkKFwiI3N0YXR1dFwiKS52YWwoKSkuZHJhdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpLmRyYXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKS5kcmF3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKS5kcmF3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNSkuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNSkuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygzKS5zZWFyY2goaWRfc2VtZXN0cmUpLmRyYXcoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygyKS5zZWFyY2goJChcIiNwcm9tb3Rpb25cIikudmFsKCkpLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICB9KVxuICAgICQoXCIjbW9kdWxlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDQpLnNlYXJjaChpZF9tb2R1bGUpLmRyYXcoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI3NlbWVzdHJlXCIpLnZhbCgpKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI2VsZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNSkuc2VhcmNoKGlkX2VsZW1lbnQpLmRyYXcoKTtcbiAgICB9KVxuICAgICQoXCIjc3RhdHV0XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3Qgc3RhdHV0ID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNCkuc2VhcmNoKHN0YXR1dCkuZHJhdygpO1xuICAgIH0pXG4gICAgJChcIiNzZW1haW5lXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3Qgc2VtYWluZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaChzZW1haW5lKS5kcmF3KCk7XG4gICAgfSlcbiAgICAkKFwiI3Byb2Zlc3NldXJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9wcm9mID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKGlkX3Byb2YpLmRyYXcoKTtcbiAgICB9KVxuICAgICQoXCIjZ3JhZGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBncmFkZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaChncmFkZSkuZHJhdygpO1xuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNhbm51bGVyJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihpZHNfc2VhbmNlcy5sZW5ndGggPT09IDAgKXtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBhdSBtb2lucyB1bmUgbGlnbmUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNhbm51bGVyIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZHNfc2VhbmNlcycsIEpTT04uc3RyaW5naWZ5KGlkc19zZWFuY2VzKSk7IFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ob25vcmFpcmUvZ2VzdGlvbi9hbm51bGVyX2hvbm9yYWlyZXMnLGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSG9ub3JhaXJlIEFudWxsw6llIEF2ZWMgU3VjY8OpZScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWRzX3NlYW5jZXM9W107XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNyZWdsZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoaWRzX3NlYW5jZXMubGVuZ3RoID09PSAwICl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgYXUgbW9pbnMgdW5lIGxpZ25lJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcmVnbGUgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnYS1wbHVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZHNfc2VhbmNlcycsIEpTT04uc3RyaW5naWZ5KGlkc19zZWFuY2VzKSk7IFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ob25vcmFpcmUvZ2VzdGlvbi9yZWdsZV9ob25vcmFpcmVzJyxmb3JtRGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWRzX3NlYW5jZXMgPSBbXVxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnYS1wbHVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdhLXBsdXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICBcbn0pIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwiLy8gaW4gb2xkIFdlYktpdCB2ZXJzaW9ucywgYGVsZW1lbnQuY2xhc3NMaXN0YCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgZ2xvYmFsIGBET01Ub2tlbkxpc3RgXG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbnZhciBjbGFzc0xpc3QgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ3NwYW4nKS5jbGFzc0xpc3Q7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gY2xhc3NMaXN0ICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3RvciAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTVRva2VuTGlzdFByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSA/IHVuZGVmaW5lZCA6IERPTVRva2VuTGlzdFByb3RvdHlwZTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjLCBGT1JDRUQsIFNIQU0pIHtcbiAgdmFyIFNZTUJPTCA9IHdlbGxLbm93blN5bWJvbChLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIEZPUkNFRFxuICApIHtcbiAgICB2YXIgdW5jdXJyaWVkTmF0aXZlUmVnRXhwTWV0aG9kID0gdW5jdXJyeVRoaXMoLy4vW1NZTUJPTF0pO1xuICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgdmFyIHVuY3VycmllZE5hdGl2ZU1ldGhvZCA9IHVuY3VycnlUaGlzKG5hdGl2ZU1ldGhvZCk7XG4gICAgICB2YXIgJGV4ZWMgPSByZWdleHAuZXhlYztcbiAgICAgIGlmICgkZXhlYyA9PT0gcmVnZXhwRXhlYyB8fCAkZXhlYyA9PT0gUmVnRXhwUHJvdG90eXBlLmV4ZWMpIHtcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuY3VycmllZE5hdGl2ZVJlZ0V4cE1ldGhvZChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICB9KTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgbWV0aG9kc1swXSk7XG4gICAgcmVkZWZpbmUoUmVnRXhwUHJvdG90eXBlLCBTWU1CT0wsIG1ldGhvZHNbMV0pO1xuICB9XG5cbiAgaWYgKFNIQU0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHBQcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAoaXNDYWxsYWJsZShleGVjKSkge1xuICAgIHZhciByZXN1bHQgPSBjYWxsKGV4ZWMsIFIsIFMpO1xuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIGFuT2JqZWN0KHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoY2xhc3NvZihSKSA9PT0gJ1JlZ0V4cCcpIHJldHVybiBjYWxsKHJlZ2V4cEV4ZWMsIFIsIFMpO1xuICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbn07XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9zZWFuY2UiLCJpZHNfc2VhbmNlcyIsInRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcyIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJzZWxlY3QyIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwiaWRfZWxlbWVudCIsInN0YXR1dCIsInNlbWFpbmUiLCJpZF9wcm9mIiwiZ3JhZGUiLCJsZW5ndGgiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwicmVsb2FkIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=