(self["webpackChunk"] = self["webpackChunk"] || []).push([["reglement"],{

/***/ "./assets/components/facture/reglement.js":
/*!************************************************!*\
  !*** ./assets/components/facture/reglement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  var id_reglement = false;
  var ids_reglement = [];
  var table_reglement = $("#datables_reglement").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/facture/reglements/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      // ids_reglement.forEach((e) => {
      //     $("body tr#" + e)
      //     .find("input")
      //     .prop("checked", true);
      // });
      $("body tr#" + id_reglement).addClass('active_databales');
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_reglement')) {
        var dt = $('#datables_reglement').DataTable(); //Abort previous ajax request if it is still in process.

        var settings = dt.settings();

        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  var getReglementInfos = function getReglementInfos() {
    var modalAlert = $("#modifier_org-modal .modal-body .alert");
    modalAlert.remove();
    var icon = $("#modifier i");
    icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
    axios.get('/facture/reglements/getReglementInfos/' + id_reglement).then(function (success) {
      icon.removeClass('fa-spinner fa-spin').addClass("fa-edit");
      console.log(success);
      $('#edit_modal .edit_reglement-form').html(success.data);
      $('#edit_modal .edit_reglement-form select').select2();
    })["catch"](function (err) {
      console.log(err);
      icon.removeClass('fa-spinner fa-spin ').addClass("fa-edit");
    });
  };

  $("select").select2();
  $("#paiement").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_reglement.columns(1).search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 13;
              break;
            }

            if ($("#paiement") && $("#paiement").val() != "") {
              table_reglement.columns(2).search($("#paiement").val());
            }

            if ($("#bordereaux").val() != "") {
              table_reglement.columns(3).search($("#bordereaux").val());
            }

            table_reglement.columns(0).search(id_etab).draw();
            _context.next = 9;
            return axios.get('/api/formation/' + id_etab);

          case 9:
            request = _context.sent;
            response = request.data;
            _context.next = 16;
            break;

          case 13:
            table_reglement.columns(0).search(id_etab).draw();

            if ($("#paiement") && $("#paiement").val() != "") {
              table_reglement.columns(2).search($("#paiement").val());
            }

            if ($("#bordereaux").val() != "") {
              table_reglement.columns(3).search($("#bordereaux").val());
            }

          case 16:
            $('#formation').html(response).select2();

          case 17:
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
            table_reglement.columns().search("");

            if ($("#paiement").val() != "") {
              table_reglement.columns(2).search($("#paiement").val());
            }

            if ($("#bordereaux").val() != "") {
              table_reglement.columns(3).search($("#bordereaux").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 13;
              break;
            }

            table_reglement.columns(1).search(id_formation).draw();
            _context2.next = 9;
            return axios.get('/api/promotion/' + id_formation);

          case 9:
            request = _context2.sent;
            response = request.data;
            _context2.next = 14;
            break;

          case 13:
            table_reglement.columns(0).search($("#etablissement").val()).draw();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#paiement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_paiement;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_paiement = $(this).val();
            table_reglement.columns(2).search(id_paiement).draw();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#bordereaux").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_bordereaux;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_bordereaux = $(this).val();
            table_reglement.columns(3).search(id_bordereaux).draw();

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $('body').on('dblclick', '#datables_reglement tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_reglement = null;
    } else {
      $("#datables_reglement tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_reglement = $(this).attr('id');
      getReglementInfos();
    }

    console.log(id_reglement);
  }); // $('body').on('click','#datables_reglement tbody tr',function (e) {
  //     e.preventDefault();
  //     const input = $(this).find("input");
  //     // const input = $(this);
  //     if (input.hasClass('check_reg')) {
  //         return;
  //     }
  //     else{
  //         if(input.is(":checked")){
  //             input.prop("checked",false);
  //             const index = ids_reglement.indexOf(input.attr("data-id"));
  //             ids_reglement.splice(index,1);
  //         }else{
  //             input.prop("checked",true);
  //             ids_reglement.push(input.attr("data-id"));
  //         }
  //     }
  //     console.log(ids_reglement);
  // })

  $('body').on('click', '#check', function () {
    var input = $(this);
    console.log(input.attr("data-id"));

    if (input.is(":checked")) {
      ids_reglement.push(input.attr("data-id"));
    } else {
      var index = ids_reglement.indexOf(input.attr("data-id"));
      ids_reglement.splice(index, 1);
    }

    console.log(ids_reglement);
  });
  $("body").on("click", '#imprimer', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();

              if (id_reglement) {
                _context5.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context5.abrupt("return");

            case 4:
              window.open('/facture/reglements/reglementprint/' + id_reglement, '_blank');

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());
  $("body").on("click", '#borderaux', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var modalAlert, icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              modalAlert = $("#modifier_org-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#borderaux i");

              if (!(ids_reglement.length === 0 || $("#etablissement").val() == "" || $('#formation').val() == "" || $("#paiement").val() == "")) {
                _context6.next = 7;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir l\'etablissement, la formation, mode de paiement et au moins une ligne, '
              });
              return _context6.abrupt("return");

            case 7:
              icon.removeClass('fa-folder').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_reglement', JSON.stringify(ids_reglement));
              _context6.prev = 10;
              _context6.next = 13;
              return axios.post("/facture/reglements/borderaux/" + $('#formation').val() + '/' + $("#paiement").val(), formData);

            case 13:
              request = _context6.sent;
              data = request.data;
              icon.addClass('fa-folder').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: 'Borderaux Bien Genere'
              });
              ids_reglement.length = [];
              window.open('/facture/reglements/printborderaux/' + data, '_blank');
              table_reglement.ajax.reload(null, false);
              console.log(ids_reglement);
              _context6.next = 29;
              break;

            case 23:
              _context6.prev = 23;
              _context6.t0 = _context6["catch"](10);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              icon.addClass('fa-folder').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 29:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[10, 23]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("body").on("click", '#imprimer_creance', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              window.open('/facture/reglements/creanceprint', '_blank');

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x3) {
      return _ref7.apply(this, arguments);
    };
  }()); // $('body').on('click','#ajouter',function (e) {
  //     e.preventDefault();
  //     if(!id_facture){
  //         Toast.fire({
  //             icon: 'error',
  //             title: 'Veuillez selection une ligne!',
  //         })
  //         return;
  //     }
  //     $("#ajouter_modal").modal('show');
  // });

  $('body').on('click', '#annuler', function (e) {
    e.preventDefault();

    if (!id_reglement) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de choisir un reglement'
      });
      return;
    }

    $('#annuler_reglement_modal').modal("show");
  });
  $('body').on('click', '#Annuler_reglement', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var res, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();

              if (id_reglement) {
                _context8.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de choisir un reglement'
              });
              return _context8.abrupt("return");

            case 4:
              if (!($('#motif_annuler').find(':selected').val() == "")) {
                _context8.next = 7;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir Le Motif d\'annulation'
              });
              return _context8.abrupt("return");

            case 7:
              // alert($('#annuler_select').val());
              res = confirm('Vous voulez vraiment Annuler cette Reglement ?');

              if (!(res == 1)) {
                _context8.next = 27;
                break;
              }

              icon = $("#Annuler_reglement i");
              icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('motif_annuler', $('#motif_annuler').val());
              _context8.prev = 13;
              _context8.next = 16;
              return axios.post('/facture/reglements/annuler_reglement/' + id_reglement, formData);

            case 16:
              request = _context8.sent;
              response = request.data;
              Toast.fire({
                icon: 'success',
                title: response
              });
              table_reglement.ajax.reload(null, false);
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              _context8.next = 27;
              break;

            case 23:
              _context8.prev = 23;
              _context8.t0 = _context8["catch"](13);
              message = _context8.t0.response.data;
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");

            case 27:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[13, 23]]);
    }));

    return function (_x4) {
      return _ref8.apply(this, arguments);
    };
  }());
  $('body').on('click', '#modifier', function (e) {
    e.preventDefault();

    if (!id_reglement) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#edit_modal").modal('show');
  });
  $("body").on("submit", '.edit_reglement-form', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault(); // alert('test');

              formdata = $(this).serialize();
              modalAlert = $("#edit_modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".edit_reglement-form .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context9.prev = 6;
              _context9.next = 9;
              return axios.post('/facture/reglements/modifier_reglement/' + id_reglement, formdata);

            case 9:
              request = _context9.sent;
              data = request.data;
              $("#edit_modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              reglement = false;
              table_reglement.ajax.reload(null, false);
              window.open('/facture/reglements/reglementprint/' + id_reglement, '_blank');
              _context9.next = 25;
              break;

            case 18:
              _context9.prev = 18;
              _context9.t0 = _context9["catch"](6);
              message = _context9.t0.response.data;
              console.log(_context9.t0, _context9.t0.response);
              modalAlert.remove();
              $("#edit_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 25:
              setTimeout(function () {
                $("#edit_modal .modal-body .alert").remove();
              }, 4000);

            case 26:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this, [[6, 18]]);
    }));

    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction', function () {
    window.open('/facture/reglements/extraction_reglement', '_blank');
  });
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


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(isCallable(handler) ? handler : Function(handler), this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/facture/reglement.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYixXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNwQ0QsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFlBQVksbUJBQU8sQ0FBQyx1RkFBNkI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQztBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5ELHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3Q0FBd0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ZhY3R1cmUvcmVnbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xuICAgICAgICB0b2FzdDogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgICAgICB0aW1lcjogMzAwMCxcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGxldCBpZF9yZWdsZW1lbnQgPSBmYWxzZTtcbiAgICBsZXQgaWRzX3JlZ2xlbWVudCA9IFtdO1xuICAgIHZhciB0YWJsZV9yZWdsZW1lbnQgPSAkKFwiI2RhdGFibGVzX3JlZ2xlbWVudFwiKS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXG4gICAgICAgICAgICBhamF4OiBcIi9mYWN0dXJlL3JlZ2xlbWVudHMvbGlzdFwiLFxuICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgICAgIHNlcnZlclNpZGU6IHRydWUsXG4gICAgICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbFg6IHRydWUsXG4gICAgICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBpZHNfcmVnbGVtZW50LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxuICAgICAgICAgICAgICAgIC8vICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgICAgICAgICAgLy8gICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX3JlZ2xlbWVudCkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCcjZGF0YWJsZXNfcmVnbGVtZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2RhdGFibGVzX3JlZ2xlbWVudCcpLkRhdGFUYWJsZSgpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvL0Fib3J0IHByZXZpb3VzIGFqYXggcmVxdWVzdCBpZiBpdCBpcyBzdGlsbCBpbiBwcm9jZXNzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSBkdC5zZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZ2V0UmVnbGVtZW50SW5mb3MgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjbW9kaWZpZXJfb3JnLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXIgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICBheGlvcy5nZXQoJy9mYWN0dXJlL3JlZ2xlbWVudHMvZ2V0UmVnbGVtZW50SW5mb3MvJytpZF9yZWdsZW1lbnQpXG4gICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1lZGl0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XG4gICAgICAgICAgICAkKCcjZWRpdF9tb2RhbCAuZWRpdF9yZWdsZW1lbnQtZm9ybScpLmh0bWwoc3VjY2Vzcy5kYXRhKVxuICAgICAgICAgICAgJCgnI2VkaXRfbW9kYWwgLmVkaXRfcmVnbGVtZW50LWZvcm0gc2VsZWN0Jykuc2VsZWN0MigpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluICcpLmFkZENsYXNzKFwiZmEtZWRpdFwiKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XG4gICAgJChcIiNwYWllbWVudFwiKS5zZWxlY3QyKCk7XG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDEpLnNlYXJjaChcIlwiKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGlmICgkKFwiI3BhaWVtZW50XCIpICYmICQoXCIjcGFpZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3BhaWVtZW50XCIpLnZhbCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCQoXCIjYm9yZGVyZWF1eFwiKS52YWwoKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjYm9yZGVyZWF1eFwiKS52YWwoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xuICAgICAgICAgICAgaWYgKCQoXCIjcGFpZW1lbnRcIikgJiYgJChcIiNwYWllbWVudFwiKS52YWwoKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcGFpZW1lbnRcIikudmFsKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJChcIiNib3JkZXJlYXV4XCIpLnZhbCgpICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygzKS5zZWFyY2goJChcIiNib3JkZXJlYXV4XCIpLnZhbCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xuICAgICAgICBpZiAoJChcIiNwYWllbWVudFwiKS52YWwoKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygyKS5zZWFyY2goJChcIiNwYWllbWVudFwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoJChcIiNib3JkZXJlYXV4XCIpLnZhbCgpICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI2JvcmRlcmVhdXhcIikudmFsKCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwiI3BhaWVtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfcGFpZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygyKS5zZWFyY2goaWRfcGFpZW1lbnQpLmRyYXcoKTtcbiAgICB9KVxuICAgICQoXCIjYm9yZGVyZWF1eFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX2JvcmRlcmVhdXggPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygzKS5zZWFyY2goaWRfYm9yZGVyZWF1eCkuZHJhdygpO1xuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19yZWdsZW1lbnQgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICAgICBpZF9yZWdsZW1lbnQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkYXRhYmxlc19yZWdsZW1lbnQgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgIGlkX3JlZ2xlbWVudCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGdldFJlZ2xlbWVudEluZm9zKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coaWRfcmVnbGVtZW50KTtcbiAgICB9KVxuICAgIC8vICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfcmVnbGVtZW50IHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XG4gICAgLy8gICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKTtcbiAgICAvLyAgICAgaWYgKGlucHV0Lmhhc0NsYXNzKCdjaGVja19yZWcnKSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2V7XG4gICAgLy8gICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcbiAgICAvLyAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkc19yZWdsZW1lbnQuaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XG4gICAgLy8gICAgICAgICAgICAgaWRzX3JlZ2xlbWVudC5zcGxpY2UoaW5kZXgsMSk7XG4gICAgLy8gICAgICAgICB9ZWxzZXtcbiAgICAvLyAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xuICAgIC8vICAgICAgICAgICAgIGlkc19yZWdsZW1lbnQucHVzaChpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgY29uc29sZS5sb2coaWRzX3JlZ2xlbWVudCk7XG4gICAgLy8gfSlcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNjaGVjaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcylcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXQuYXR0cihcImRhdGEtaWRcIikpXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xuICAgICAgICAgICAgaWRzX3JlZ2xlbWVudC5wdXNoKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkc19yZWdsZW1lbnQuaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgICAgICBpZHNfcmVnbGVtZW50LnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgfVxuICAgICAgY29uc29sZS5sb2coaWRzX3JlZ2xlbWVudClcbiAgICAgIH0pO1xuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNpbXByaW1lcicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIWlkX3JlZ2xlbWVudCl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvcmVnbGVtZW50cy9yZWdsZW1lbnRwcmludC8nK2lkX3JlZ2xlbWVudCwgJ19ibGFuaycpO1xuICAgIH0pO1xuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNib3JkZXJhdXgnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjbW9kaWZpZXJfb3JnLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYm9yZGVyYXV4IGlcIik7XG4gICAgICAgIGlmKGlkc19yZWdsZW1lbnQubGVuZ3RoID09PSAwfHwgJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpID09IFwiXCIgfHwgJCgnI2Zvcm1hdGlvbicpLnZhbCgpID09IFwiXCIgfHwgJChcIiNwYWllbWVudFwiKS52YWwoKSA9PSBcIlwiKXtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBsXFwnZXRhYmxpc3NlbWVudCwgbGEgZm9ybWF0aW9uLCBtb2RlIGRlIHBhaWVtZW50IGV0IGF1IG1vaW5zIHVuZSBsaWduZSwgJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZm9sZGVyJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkc19yZWdsZW1lbnQnLCBKU09OLnN0cmluZ2lmeShpZHNfcmVnbGVtZW50KSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9mYWN0dXJlL3JlZ2xlbWVudHMvYm9yZGVyYXV4L1wiKyQoJyNmb3JtYXRpb24nKS52YWwoKSsnLycrJChcIiNwYWllbWVudFwiKS52YWwoKSwgZm9ybURhdGEpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWZvbGRlcicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQm9yZGVyYXV4IEJpZW4gR2VuZXJlJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZHNfcmVnbGVtZW50Lmxlbmd0aCA9IFtdO1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL3JlZ2xlbWVudHMvcHJpbnRib3JkZXJhdXgvJytkYXRhLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZHNfcmVnbGVtZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWZvbGRlcicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcjaW1wcmltZXJfY3JlYW5jZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL3JlZ2xlbWVudHMvY3JlYW5jZXByaW50JywgJ19ibGFuaycpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vICQoJ2JvZHknKS5vbignY2xpY2snLCcjYWpvdXRlcicsZnVuY3Rpb24gKGUpIHtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBpZighaWRfZmFjdHVyZSl7XG4gICAgLy8gICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAvLyAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAkKFwiI2Fqb3V0ZXJfbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcbiAgICAvLyB9KTtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2FubnVsZXInLGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIWlkX3JlZ2xlbWVudCl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgY2hvaXNpciB1biByZWdsZW1lbnQnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKCcjYW5udWxlcl9yZWdsZW1lbnRfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XG4gICAgfSk7XG4gICAgXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNBbm51bGVyX3JlZ2xlbWVudCcsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIWlkX3JlZ2xlbWVudCl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIGNob2lzaXIgdW4gcmVnbGVtZW50JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoJCgnI21vdGlmX2FubnVsZXInKS5maW5kKCc6c2VsZWN0ZWQnKS52YWwoKSA9PSBcIlwiICl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBMZSBNb3RpZiBkXFwnYW5udWxhdGlvbicsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFsZXJ0KCQoJyNhbm51bGVyX3NlbGVjdCcpLnZhbCgpKTtcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IEFubnVsZXIgY2V0dGUgUmVnbGVtZW50ID8nKTtcbiAgICAgICAgaWYocmVzID09IDEpe1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjQW5udWxlcl9yZWdsZW1lbnQgaVwiKTtcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21vdGlmX2FubnVsZXInLCAkKCcjbW90aWZfYW5udWxlcicpLnZhbCgpKTsgXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZmFjdHVyZS9yZWdsZW1lbnRzL2FubnVsZXJfcmVnbGVtZW50LycraWRfcmVnbGVtZW50LGZvcm1EYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICBcbiAgICB9KVxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjbW9kaWZpZXInLGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIWlkX3JlZ2xlbWVudCl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI2VkaXRfbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcbiAgICBcbiAgICAkKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCAnLmVkaXRfcmVnbGVtZW50LWZvcm0nLCBhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGFsZXJ0KCd0ZXN0Jyk7XG4gICAgICAgIGxldCBmb3JtZGF0YSA9ICQodGhpcykuc2VyaWFsaXplKClcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNlZGl0X21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIuZWRpdF9yZWdsZW1lbnQtZm9ybSAuYnRuIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9mYWN0dXJlL3JlZ2xlbWVudHMvbW9kaWZpZXJfcmVnbGVtZW50LycraWRfcmVnbGVtZW50LGZvcm1kYXRhKVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgICQoXCIjZWRpdF9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXG4gICAgICAgICAgICApOyBcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgcmVnbGVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL3JlZ2xlbWVudHMvcmVnbGVtZW50cHJpbnQvJytpZF9yZWdsZW1lbnQsICdfYmxhbmsnKTtcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKFwiI2VkaXRfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAkKFwiI2VkaXRfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xuICAgICAgICB9LCA0MDAwKTtcbiAgICB9KTtcbiAgXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNleHRyYWN0aW9uJywgZnVuY3Rpb24gKCl7XG4gICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvcmVnbGVtZW50cy9leHRyYWN0aW9uX3JlZ2xlbWVudCcsICdfYmxhbmsnKTtcbiAgICB9KVxuICAgIFxufSkiLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIG1vdmVkIHRvIGVudHJ5IHBvaW50c1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5yZWdleHAuZXhlYycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYywgRk9SQ0VELCBTSEFNKSB7XG4gIHZhciBTWU1CT0wgPSB3ZWxsS25vd25TeW1ib2woS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgIHZhciByZSA9IC9hLztcblxuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFdlIGNhbid0IHVzZSByZWFsIHJlZ2V4IGhlcmUgc2luY2UgaXQgY2F1c2VzIGRlb3B0aW1pemF0aW9uXG4gICAgICAvLyBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvbiBpbiBWOFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMwNlxuICAgICAgcmUgPSB7fTtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICAgIHJlLmZsYWdzID0gJyc7XG4gICAgICByZVtTWU1CT0xdID0gLy4vW1NZTUJPTF07XG4gICAgfVxuXG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuXG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KTtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICBGT1JDRURcbiAgKSB7XG4gICAgdmFyIHVuY3VycmllZE5hdGl2ZVJlZ0V4cE1ldGhvZCA9IHVuY3VycnlUaGlzKC8uL1tTWU1CT0xdKTtcbiAgICB2YXIgbWV0aG9kcyA9IGV4ZWMoU1lNQk9MLCAnJ1tLRVldLCBmdW5jdGlvbiAobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgIHZhciB1bmN1cnJpZWROYXRpdmVNZXRob2QgPSB1bmN1cnJ5VGhpcyhuYXRpdmVNZXRob2QpO1xuICAgICAgdmFyICRleGVjID0gcmVnZXhwLmV4ZWM7XG4gICAgICBpZiAoJGV4ZWMgPT09IHJlZ2V4cEV4ZWMgfHwgJGV4ZWMgPT09IFJlZ0V4cFByb3RvdHlwZS5leGVjKSB7XG4gICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmN1cnJpZWROYXRpdmVSZWdFeHBNZXRob2QocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuY3VycmllZE5hdGl2ZU1ldGhvZChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgfSk7XG5cbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIG1ldGhvZHNbMF0pO1xuICAgIHJlZGVmaW5lKFJlZ0V4cFByb3RvdHlwZSwgU1lNQk9MLCBtZXRob2RzWzFdKTtcbiAgfVxuXG4gIGlmIChTSEFNKSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoUmVnRXhwUHJvdG90eXBlW1NZTUJPTF0sICdzaGFtJywgdHJ1ZSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUiwgUykge1xuICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgaWYgKGlzQ2FsbGFibGUoZXhlYykpIHtcbiAgICB2YXIgcmVzdWx0ID0gY2FsbChleGVjLCBSLCBTKTtcbiAgICBpZiAocmVzdWx0ICE9PSBudWxsKSBhbk9iamVjdChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgPT09ICdSZWdFeHAnKSByZXR1cm4gY2FsbChyZWdleHBFeGVjLCBSLCBTKTtcbiAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG59O1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfcmVnbGVtZW50IiwiaWRzX3JlZ2xlbWVudCIsInRhYmxlX3JlZ2xlbWVudCIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImFkZENsYXNzIiwicHJlRHJhd0NhbGxiYWNrIiwic2V0dGluZ3MiLCJmbiIsImlzRGF0YVRhYmxlIiwiZHQiLCJqcVhIUiIsImFib3J0IiwibGFuZ3VhZ2UiLCJ1cmwiLCJnZXRSZWdsZW1lbnRJbmZvcyIsIm1vZGFsQWxlcnQiLCJyZW1vdmUiLCJpY29uIiwicmVtb3ZlQ2xhc3MiLCJheGlvcyIsImdldCIsInRoZW4iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImh0bWwiLCJkYXRhIiwic2VsZWN0MiIsImVyciIsIm9uIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJyZXF1ZXN0IiwiaWRfZm9ybWF0aW9uIiwiaWRfcGFpZW1lbnQiLCJpZF9ib3JkZXJlYXV4IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJhdHRyIiwiaW5wdXQiLCJpcyIsInB1c2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJmaXJlIiwidGl0bGUiLCJ3aW5kb3ciLCJvcGVuIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwicmVsb2FkIiwibWVzc2FnZSIsIm1vZGFsIiwiZmluZCIsInJlcyIsImNvbmZpcm0iLCJmb3JtZGF0YSIsInNlcmlhbGl6ZSIsInByZXBlbmQiLCJyZWdsZW1lbnQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==