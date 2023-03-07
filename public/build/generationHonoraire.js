(self["webpackChunk"] = self["webpackChunk"] || []).push([["generationHonoraire"],{

/***/ "./assets/components/honoraire/generation_honoraire.js":
/*!*************************************************************!*\
  !*** ./assets/components/honoraire/generation_honoraire.js ***!
  \*************************************************************/
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
  var table_generation_honoraires = $("#datables_generation_honoraires").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/honoraire/generation/list",
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
  $('body').on('dblclick', '#datables_generation_honoraires tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_seance = null;
    } else {
      $("#datables_generation_honoraires tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_seance = $(this).attr('id');
    }
  });
  $('body').on('click', '#datables_generation_honoraires tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

    if (input.hasClass('check_reg')) {
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
            table_generation_honoraires.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 15;
              break;
            }

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_generation_honoraires.columns(9).search($("#niv").val());
            }

            table_generation_honoraires.columns(0).search(id_etab).draw();
            _context.next = 11;
            return axios.get('/api/formation/' + id_etab);

          case 11:
            request = _context.sent;
            response = request.data;
            _context.next = 19;
            break;

          case 15:
            table_generation_honoraires.columns().search("").draw();

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val()).draw();
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val()).draw();
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val()).draw();
            }

          case 19:
            $('#niv1').html('').select2();
            $('#niv2').html('').select2();
            $('#niv3').html('').select2();
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 27:
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
            table_generation_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 14;
              break;
            }

            table_generation_honoraires.columns(1).search(id_formation).draw();
            _context2.next = 10;
            return axios.get('/api/promotion/' + id_formation);

          case 10:
            request = _context2.sent;
            response = request.data;
            _context2.next = 15;
            break;

          case 14:
            table_generation_honoraires.columns(0).search($("#etablissement").val()).draw();

          case 15:
            $('#niv1').html('').select2();
            $('#niv2').html('').select2();
            $('#niv3').html('').select2();
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html(response).select2();

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_promotion, request, requestt;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();
            table_generation_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 17;
              break;
            }

            table_generation_honoraires.columns(2).search(id_promotion).draw();
            _context3.next = 9;
            return axios.get('/api/semestre/' + id_promotion);

          case 9:
            request = _context3.sent;
            response = request.data;
            _context3.next = 13;
            return axios.get('/api/niv1/' + id_promotion);

          case 13:
            requestt = _context3.sent;
            niv1 = requestt.data;
            _context3.next = 18;
            break;

          case 17:
            table_generation_honoraires.columns(1).search($("#formation").val()).draw();

          case 18:
            $('#niv1').html(niv1).select2();
            $('#niv2').html('').select2();
            $('#niv3').html('').select2();
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#semestre').html(response).select2();

          case 25:
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
            table_generation_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            if ($("#niv1").val() != "") {
              table_generation_honoraires.columns(9).search($("#niv1").val());
            }

            if ($("#niv2").val() != "") {
              table_generation_honoraires.columns(10).search($("#niv2").val());
            }

            if ($("#niv3").val() != "") {
              table_generation_honoraires.columns(11).search($("#niv3").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 16;
              break;
            }

            table_generation_honoraires.columns(3).search(id_semestre).draw();
            _context4.next = 12;
            return axios.get('/api/module/' + id_semestre);

          case 12:
            request = _context4.sent;
            response = request.data;
            _context4.next = 17;
            break;

          case 16:
            table_generation_honoraires.columns(2).search($("#promotion").val()).draw();

          case 17:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 19:
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
            table_generation_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            if ($("#niv1").val() != "") {
              table_generation_honoraires.columns(9).search($("#niv1").val());
            }

            if ($("#niv2").val() != "") {
              table_generation_honoraires.columns(10).search($("#niv2").val());
            }

            if ($("#niv3").val() != "") {
              table_generation_honoraires.columns(11).search($("#niv3").val());
            }

            if (!(id_module != "")) {
              _context5.next = 16;
              break;
            }

            table_generation_honoraires.columns(4).search(id_module).draw();
            _context5.next = 12;
            return axios.get('/api/element/' + id_module);

          case 12:
            request = _context5.sent;
            response = request.data;
            _context5.next = 17;
            break;

          case 16:
            table_generation_honoraires.columns(3).search($("#semestre").val()).draw();

          case 17:
            $('#element').html(response).select2();

          case 18:
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
            table_generation_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            if ($("#niv1").val() != "") {
              table_generation_honoraires.columns(9).search($("#niv1").val());
            }

            if ($("#niv2").val() != "") {
              table_generation_honoraires.columns(10).search($("#niv2").val());
            }

            if ($("#niv3").val() != "") {
              table_generation_honoraires.columns(11).search($("#niv3").val());
            }

            table_generation_honoraires.columns(5).search(id_element).draw();

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#semaine").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var semaine;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            semaine = $(this).val();
            table_generation_honoraires.columns(6).search(semaine).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#professeur").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var id_prof;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id_prof = $(this).val();
            table_generation_honoraires.columns(7).search(id_prof).draw();

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#grade").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var grade;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            grade = $(this).val();
            table_generation_honoraires.columns(8).search(grade).draw();

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#niv1").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var niv1, response, request;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            niv1 = $(this).val();
            response = "";

            if (!(niv1 != "")) {
              _context10.next = 10;
              break;
            }

            niv = niv1;
            _context10.next = 6;
            return axios.get('/api/niv2/' + niv1);

          case 6:
            request = _context10.sent;
            response = request.data;
            _context10.next = 11;
            break;

          case 10:
            niv = 0;

          case 11:
            table_generation_honoraires.columns(9).search(niv1).draw();
            $('#niv3').html("").select2();
            $('#niv2').html(response).select2();

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $("#niv2").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var niv2, response, request;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            niv2 = $(this).val();
            response = "";

            if (!(niv2 != "")) {
              _context11.next = 10;
              break;
            }

            niv = niv2;
            _context11.next = 6;
            return axios.get('/api/niv3/' + niv2);

          case 6:
            request = _context11.sent;
            response = request.data;
            _context11.next = 11;
            break;

          case 10:
            niv = $('#niv1').val();

          case 11:
            $('#niv3').html(response).select2();
            table_generation_honoraires.columns(10).search(niv2).draw();

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  })));
  $("#niv3").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var niv3, response;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            niv3 = $(this).val();
            response = "";

            if (niv3 != "") {
              niv = niv3;
            } else {
              niv = $('#niv2').val();
            }

            table_generation_honoraires.columns(11).search(niv3).draw();

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  })));
  $('body').on('click', '#generer', /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      var icon, formData, request, _response, message;

      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();

              if (!(ids_seances.length === 0)) {
                _context13.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context13.abrupt("return");

            case 4:
              icon = $("#generer i");
              icon.removeClass('fab fa-get-pocket').addClass("fas fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_seances', JSON.stringify(ids_seances));
              _context13.prev = 8;
              _context13.next = 11;
              return axios.post('/honoraire/generation/generation_honoraire_generer', formData);

            case 11:
              request = _context13.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: _response
              });
              table_generation_honoraires.ajax.reload(null, false);
              ids_seances = [];
              icon.addClass('fab fa-get-pocket').removeClass("fas fa-spinner fa-spin");
              _context13.next = 23;
              break;

            case 19:
              _context13.prev = 19;
              _context13.t0 = _context13["catch"](8);
              message = _context13.t0.response.data;
              icon.addClass('fab fa-get-pocket').removeClass("fas fa-spinner fa-spin");

            case 23:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[8, 19]]);
    }));

    return function (_x) {
      return _ref13.apply(this, arguments);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/honoraire/generation_honoraire.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENELGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMscUZBQTRCO0FBQ3ZELDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1QztBQUMzRSxjQUFjLG1CQUFPLENBQUMsdUZBQTZCO0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2QztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ob25vcmFpcmUvZ2VuZXJhdGlvbl9ob25vcmFpcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfc2VhbmNlID0gZmFsc2U7XHJcbiAgICBsZXQgaWRzX3NlYW5jZXMgPSBbXTtcclxuICAgIHZhciB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMgPSAkKFwiI2RhdGFibGVzX2dlbmVyYXRpb25faG9ub3JhaXJlc1wiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9ob25vcmFpcmUvZ2VuZXJhdGlvbi9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkc19zZWFuY2VzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfc2VhbmNlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGFibGVzX2dlbmVyYXRpb25faG9ub3JhaXJlcyB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfc2VhbmNlID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX2dlbmVyYXRpb25faG9ub3JhaXJlcyB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3NlYW5jZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19nZW5lcmF0aW9uX2hvbm9yYWlyZXMgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc0NsYXNzKCdjaGVja19yZWcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkc19zZWFuY2VzLmluZGV4T2YoaW5wdXQuYXR0cihcImRhdGEtaWRcIikpO1xyXG4gICAgICAgICAgICAgICAgaWRzX3NlYW5jZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfc2VhbmNlcy5wdXNoKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI25pdlwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdjEnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjInKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygwKS5zZWFyY2goJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYxJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYyJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0dCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYxLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgbml2MSA9IHJlcXVlc3R0LmRhdGEgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDEpLnNlYXJjaCgkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbml2MScpLmh0bWwobml2MSkuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYyJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjFcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI25pdjFcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2MlwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMTApLnNlYXJjaCgkKFwiI25pdjJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2M1wiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMTEpLnNlYXJjaCgkKFwiI25pdjNcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMykuc2VhcmNoKGlkX3NlbWVzdHJlKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygyKS5zZWFyY2goJChcIiNwcm9tb3Rpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI21vZHVsZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2MVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjbml2MVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjbml2MlwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYzXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxMSkuc2VhcmNoKCQoXCIjbml2M1wiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNCkuc2VhcmNoKGlkX21vZHVsZSkuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygzKS5zZWFyY2goJChcIiNzZW1lc3RyZVwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2VsZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2VsZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYxXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg5KS5zZWFyY2goJChcIiNuaXYxXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiNuaXYyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjNcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDExKS5zZWFyY2goJChcIiNuaXYzXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg1KS5zZWFyY2goaWRfZWxlbWVudCkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtYWluZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgc2VtYWluZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKHNlbWFpbmUpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb2Zlc3NldXJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb2YgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaChpZF9wcm9mKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNncmFkZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgZ3JhZGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDgpLnNlYXJjaChncmFkZSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjbml2MVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2MSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKG5pdjEgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBuaXYgPSBuaXYxO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjIvJytuaXYxKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbml2ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOSkuc2VhcmNoKG5pdjEpLmRyYXcoKTtcclxuICAgICAgICAkKCcjbml2MycpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYyJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjbml2MlwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2MiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKG5pdjIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBuaXYgPSBuaXYyO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjMvJytuaXYyKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbml2ID0gJCgnI25pdjEnKS52YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMTApLnNlYXJjaChuaXYyKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNuaXYzXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBuaXYzID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYobml2MyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5pdiA9IG5pdjM7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5pdiA9ICQoJyNuaXYyJykudmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDExKS5zZWFyY2gobml2MykuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZ2VuZXJlcicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkc19zZWFuY2VzLmxlbmd0aCA9PT0gMCApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIGF1IG1vaW5zIHVuZSBsaWduZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZ2VuZXJlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykuYWRkQ2xhc3MoXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRzX3NlYW5jZXMnLCBKU09OLnN0cmluZ2lmeShpZHNfc2VhbmNlcykpOyBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2hvbm9yYWlyZS9nZW5lcmF0aW9uL2dlbmVyYXRpb25faG9ub3JhaXJlX2dlbmVyZXInLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgIGlkc19zZWFuY2VzID0gW107XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLnJlbW92ZUNsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn0pIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcclxudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xyXG5cclxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXHJcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XHJcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcclxufSA6IFtdLmZvckVhY2g7XHJcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xyXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIENTU1J1bGVMaXN0OiAwLFxyXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXHJcbiAgQ1NTVmFsdWVMaXN0OiAwLFxyXG4gIENsaWVudFJlY3RMaXN0OiAwLFxyXG4gIERPTVJlY3RMaXN0OiAwLFxyXG4gIERPTVN0cmluZ0xpc3Q6IDAsXHJcbiAgRE9NVG9rZW5MaXN0OiAxLFxyXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxyXG4gIEZpbGVMaXN0OiAwLFxyXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxyXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxyXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcclxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcclxuICBNZWRpYUxpc3Q6IDAsXHJcbiAgTWltZVR5cGVBcnJheTogMCxcclxuICBOYW1lZE5vZGVNYXA6IDAsXHJcbiAgTm9kZUxpc3Q6IDEsXHJcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcclxuICBQbHVnaW46IDAsXHJcbiAgUGx1Z2luQXJyYXk6IDAsXHJcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcclxuICBTVkdOdW1iZXJMaXN0OiAwLFxyXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxyXG4gIFNWR1BvaW50TGlzdDogMCxcclxuICBTVkdTdHJpbmdMaXN0OiAwLFxyXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXHJcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcclxuICBTdHlsZVNoZWV0TGlzdDogMCxcclxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxyXG4gIFRleHRUcmFja0xpc3Q6IDAsXHJcbiAgVG91Y2hMaXN0OiAwXHJcbn07XHJcbiIsIi8vIGluIG9sZCBXZWJLaXQgdmVyc2lvbnMsIGBlbGVtZW50LmNsYXNzTGlzdGAgaXMgbm90IGFuIGluc3RhbmNlIG9mIGdsb2JhbCBgRE9NVG9rZW5MaXN0YFxyXG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XHJcblxyXG52YXIgY2xhc3NMaXN0ID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdzcGFuJykuY2xhc3NMaXN0O1xyXG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gY2xhc3NMaXN0ICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3RvciAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBET01Ub2tlbkxpc3RQcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgPyB1bmRlZmluZWQgOiBET01Ub2tlbkxpc3RQcm90b3R5cGU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBtb3ZlZCB0byBlbnRyeSBwb2ludHNcclxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5yZWdleHAuZXhlYycpO1xyXG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XHJcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xyXG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xyXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcclxudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xyXG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xyXG5cclxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcclxudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMsIEZPUkNFRCwgU0hBTSkge1xyXG4gIHZhciBTWU1CT0wgPSB3ZWxsS25vd25TeW1ib2woS0VZKTtcclxuXHJcbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xyXG4gICAgdmFyIE8gPSB7fTtcclxuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XHJcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xyXG4gIH0pO1xyXG5cclxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xyXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcclxuICAgIHZhciByZSA9IC9hLztcclxuXHJcbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XHJcbiAgICAgIC8vIFdlIGNhbid0IHVzZSByZWFsIHJlZ2V4IGhlcmUgc2luY2UgaXQgY2F1c2VzIGRlb3B0aW1pemF0aW9uXHJcbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMDZcclxuICAgICAgcmUgPSB7fTtcclxuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcclxuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxyXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xyXG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xyXG4gICAgICByZS5mbGFncyA9ICcnO1xyXG4gICAgICByZVtTWU1CT0xdID0gLy4vW1NZTUJPTF07XHJcbiAgICB9XHJcblxyXG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xyXG5cclxuICAgIHJlW1NZTUJPTF0oJycpO1xyXG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoXHJcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxyXG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XHJcbiAgICBGT1JDRURcclxuICApIHtcclxuICAgIHZhciB1bmN1cnJpZWROYXRpdmVSZWdFeHBNZXRob2QgPSB1bmN1cnJ5VGhpcygvLi9bU1lNQk9MXSk7XHJcbiAgICB2YXIgbWV0aG9kcyA9IGV4ZWMoU1lNQk9MLCAnJ1tLRVldLCBmdW5jdGlvbiAobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcclxuICAgICAgdmFyIHVuY3VycmllZE5hdGl2ZU1ldGhvZCA9IHVuY3VycnlUaGlzKG5hdGl2ZU1ldGhvZCk7XHJcbiAgICAgIHZhciAkZXhlYyA9IHJlZ2V4cC5leGVjO1xyXG4gICAgICBpZiAoJGV4ZWMgPT09IHJlZ2V4cEV4ZWMgfHwgJGV4ZWMgPT09IFJlZ0V4cFByb3RvdHlwZS5leGVjKSB7XHJcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XHJcbiAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcclxuICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cclxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXHJcbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5jdXJyaWVkTmF0aXZlUmVnRXhwTWV0aG9kKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIG1ldGhvZHNbMF0pO1xyXG4gICAgcmVkZWZpbmUoUmVnRXhwUHJvdG90eXBlLCBTWU1CT0wsIG1ldGhvZHNbMV0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKFNIQU0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHBQcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcclxufTtcclxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcclxudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xyXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XHJcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XHJcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XHJcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XHJcblxyXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcclxuXHJcbi8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcclxuICB2YXIgZXhlYyA9IFIuZXhlYztcclxuICBpZiAoaXNDYWxsYWJsZShleGVjKSkge1xyXG4gICAgdmFyIHJlc3VsdCA9IGNhbGwoZXhlYywgUiwgUyk7XHJcbiAgICBpZiAocmVzdWx0ICE9PSBudWxsKSBhbk9iamVjdChyZXN1bHQpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgaWYgKGNsYXNzb2YoUikgPT09ICdSZWdFeHAnKSByZXR1cm4gY2FsbChyZWdleHBFeGVjLCBSLCBTKTtcclxuICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcclxufTtcclxuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcclxuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcclxuICBmb3JFYWNoOiBmb3JFYWNoXHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcclxudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xyXG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcclxudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XHJcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcclxudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XHJcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XHJcblxyXG4vLyBAQHNlYXJjaCBsb2dpY1xyXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcclxuICByZXR1cm4gW1xyXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcclxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcclxuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xyXG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcclxuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcclxuICAgIH0sXHJcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXHJcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xyXG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XHJcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XHJcblxyXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XHJcblxyXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XHJcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcclxuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xyXG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XHJcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcclxuICAgIH1cclxuICBdO1xyXG59KTtcclxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcclxudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XHJcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XHJcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XHJcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XHJcblxyXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcclxuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcclxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XHJcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcclxuICB9XHJcbn07XHJcblxyXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XHJcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XHJcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcclxuICB9XHJcbn1cclxuXHJcbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9zZWFuY2UiLCJpZHNfc2VhbmNlcyIsInRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcyIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJzZWxlY3QyIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsInJlcXVlc3R0Iiwibml2MSIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwiaWRfZWxlbWVudCIsInNlbWFpbmUiLCJpZF9wcm9mIiwiZ3JhZGUiLCJuaXYiLCJuaXYyIiwibml2MyIsImxlbmd0aCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3QiLCJyZWxvYWQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==