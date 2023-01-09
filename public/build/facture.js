(self["webpackChunk"] = self["webpackChunk"] || []).push([["facture"],{

/***/ "./assets/components/facture/facture.js":
/*!**********************************************!*\
  !*** ./assets/components/facture/facture.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

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
  var id_facture = false;
  var table_facture = $("#datables_facture").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/facture/factures/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      $("body tr#" + id_facture).addClass('active_databales');
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_facture')) {
        var dt = $('#datables_facture').DataTable(); //Abort previous ajax request if it is still in process.

        var settings = dt.settings();

        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  }); // $("#banque").select2();
  // $("#paiement").select2();
  // $("#etablissement").select2();
  // $("#modifier_org-modal #org").select2();
  // $("#organisme").select2();
  // $("#reglement").select2();

  $("select").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_facture.columns(1).search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 13;
              break;
            }

            if ($("#reglement") && $("#reglement").val() != "") {
              table_facture.columns(2).search($("#reglement").val());
            }

            if ($("#organisme").val() != "") {
              table_facture.columns(3).search($("#organisme").val());
            }

            table_facture.columns(0).search(id_etab).draw();
            _context.next = 9;
            return axios.get('/api/formation/' + id_etab);

          case 9:
            request = _context.sent;
            response = request.data;
            _context.next = 16;
            break;

          case 13:
            table_facture.columns(0).search(id_etab).draw();

            if ($("#reglement") && $("#reglement").val() != "") {
              table_facture.columns(2).search($("#reglement").val());
            }

            if ($("#organisme").val() != "") {
              table_facture.columns(3).search($("#organisme").val());
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
            table_facture.columns().search("");

            if ($("#reglement") && $("#reglement").val() != "") {
              table_facture.columns(2).search($("#reglement").val());
            }

            if ($("#organisme").val() != "") {
              table_facture.columns(3).search($("#organisme").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 13;
              break;
            }

            table_facture.columns(1).search(id_formation).draw();
            _context2.next = 9;
            return axios.get('/api/promotion/' + id_formation);

          case 9:
            request = _context2.sent;
            response = request.data;
            _context2.next = 14;
            break;

          case 13:
            table_facture.columns(0).search($("#etablissement").val()).draw();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#reglement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_reglement;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_reglement = $(this).val();
            table_facture.columns(2).search(id_reglement).draw();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#organisme").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_organisme;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_organisme = $(this).val();
            table_facture.columns(3).search(id_organisme).draw();

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  var reglement = false;

  var getMontant = function getMontant() {
    axios.get('/facture/factures/getMontant/' + id_facture).then(function (success) {
      reglement = null;
      $("#ajouter").removeClass('btn-primary').addClass('btn-secondary').attr('disabled', false);

      if (success.data != 'vide') {
        reglement = 12; // $("#montant").val(success.data['montant']);
        // $("#montant2").val(success.data['montant']);

        $("#montant_facture").val(success.data['montant_facture']);
        $("#ajouter").removeClass('btn-secondary').addClass('btn-primary').attr('disabled', true);
      }
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var getFacture = function getFacture() {
    var icon = $("#facture i");
    icon.removeClass('fa-money-bill-alt').addClass("fa-spinner fa-spin");
    axios.get('/facture/factures/detaille_facture/' + id_facture).then(function (success) {
      if (success.data[0] == 0) {
        $('.modal-facture #add_detaille').css('display', 'none');
        $('.modal-facture #add').css('display', 'none');
        $('.modal-facture #detaille_active').css('display', 'none');
      } else {
        $('.modal-facture #add_detaille').css('display', 'block');
        $('.modal-facture #add').css('display', 'flex');
        $('.modal-facture #detaille_active').css('display', 'block');
      }

      $('.table_detaille_facture tbody').html(success.data[1]);
      icon.removeClass('fa-spinner fa-spin').addClass("fa-money-bill-alt"); // console.log(success.data[0]);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var getOrganismeByFacture = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var request;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!id_facture) {
                _context5.next = 6;
                break;
              }

              _context5.next = 3;
              return axios.get('/api/organisme/' + id_facture);

            case 3:
              request = _context5.sent;
              response = request.data;
              $('#org').html(response).select2();

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getOrganismeByFacture() {
      return _ref5.apply(this, arguments);
    };
  }();

  var load_frais_preins = function load_frais_preins() {
    if (id_facture) {
      axios.get('/facture/factures/article_frais/' + id_facture).then(function (success) {
        $('#detail_facture_modal #frais').html(success.data).select2();
        $('#detail_facture_modal #montantt').val('');
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  $('body').on('click', '#datables_facture tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_facture = null;
      reglement = null;
      $("#ajouter").removeClass('btn-primary').addClass('btn-secondary').attr('disabled', false);
    } else {
      $("#datables_facture tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_facture = $(this).attr('id');
      console.log(id_facture);
      getOrganismeByFacture();
      getMontant();
      getFacture();
      load_frais_preins();
    }
  });
  $('body').on('click', '#facture', function (e) {
    e.preventDefault();

    if (!id_facture) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#detail_facture_modal").modal('show');
  });
  extra_frais;
  $('input[type=radio][name=organ]').on('change', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var request;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();

              if (!(this.value == 0)) {
                _context6.next = 10;
                break;
              }

              _context6.next = 4;
              return axios.get('/api/getorganismepasPayant');

            case 4:
              request = _context6.sent;
              response = request.data;
              $('.select-organ #org').html(response).select2();
              $('.select-organ').css('display', 'block');
              _context6.next = 12;
              break;

            case 10:
              $('.select-organ #org').html("");
              $('.select-organ').css('display', 'none');

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }());
  $('body').on('change', '.modal-facture #frais', function (e) {
    e.preventDefault();
    var frais = $(this).find(':selected').attr('data-id');

    if (frais != "") {
      $('.modal-facture #montantt').val();
    }

    $('.modal-facture #montantt').val(frais);
  });
  $('body').on('click', '#add_detaille', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var icon, organisme_id, formData, modalAlert, request, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              icon = $(this).find('i');
              icon.removeClass('fa-plus').addClass("fa-spinner fa-spin");
              organisme_id = $('.select-organ #org').val();

              if ($("input[name='organ']:checked").val() == 1) {
                organisme_id = 7;
              }

              formData = new FormData();
              formData.append('frais', $('#frais').val());
              formData.append('montant', $('#montantt').val());
              formData.append('ice', $('#ice').val());
              formData.append('organisme_id', organisme_id);
              modalAlert = $(".modal-facture .modal-body .alert");
              modalAlert.remove();
              _context7.prev = 12;
              _context7.next = 15;
              return axios.post('/facture/factures/add_detaille/' + id_facture, formData);

            case 15:
              request = _context7.sent;
              getFacture();
              $(".modal-facture .modal-body").prepend("<div class=\"alert alert-success\">Facture Bien Ajouter</div>");
              $('select').val('');
              icon.removeClass('fa-spinner fa-spin').addClass("fa-plus");
              getMontant();
              table_facture.ajax.reload(null, false);
              _context7.next = 29;
              break;

            case 24:
              _context7.prev = 24;
              _context7.t0 = _context7["catch"](12);
              message = _context7.t0.response.data;
              $(".modal-facture .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.removeClass('fa-spinner fa-spin').addClass("fa-plus");

            case 29:
              setTimeout(function () {
                $(".modal-facture .modal-body .alert").remove();
              }, 4000);

            case 30:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[12, 24]]);
    }));

    return function (_x2) {
      return _ref7.apply(this, arguments);
    };
  }()); ////////////////////delete all

  $('body').on('click', '#delete_detaille', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var res, icon, request, message;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault(); // alert(id_facture)
              // let id_det = $(this).attr('id');

              res = confirm('Vous voulez vraiment desactiver tout les frais ?');

              if (!(res == 1)) {
                _context8.next = 19;
                break;
              }

              icon = $(this).find('i');
              icon.removeClass('fa-window-close').addClass("fa-spinner fa-spin");
              _context8.prev = 5;
              _context8.next = 8;
              return axios.post('/facture/factures/cloture_all_detaille/' + id_facture);

            case 8:
              request = _context8.sent;
              getMontant();
              getFacture();
              table_facture.ajax.reload(null, false);
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");
              _context8.next = 19;
              break;

            case 15:
              _context8.prev = 15;
              _context8.t0 = _context8["catch"](5);
              message = _context8.t0.response.data;
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");

            case 19:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this, [[5, 15]]);
    }));

    return function (_x3) {
      return _ref8.apply(this, arguments);
    };
  }()); ////////////////////delete all

  $('body').on('click', '.detaille_cloture', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var icon, id_det, request, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();
              icon = $(this).find('i');
              icon.removeClass('fa-window-close').addClass("fa-spinner fa-spin");
              id_det = $(this).attr('id');
              _context9.prev = 4;
              _context9.next = 7;
              return axios.post('/facture/factures/cloture_detaille/' + id_det);

            case 7:
              request = _context9.sent;
              getMontant();
              getFacture();
              table_facture.ajax.reload(null, false);
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");
              _context9.next = 18;
              break;

            case 14:
              _context9.prev = 14;
              _context9.t0 = _context9["catch"](4);
              message = _context9.t0.response.data;
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");

            case 18:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this, [[4, 14]]);
    }));

    return function (_x4) {
      return _ref9.apply(this, arguments);
    };
  }());
  $('body').on('click', '#ajouter', function (e) {
    e.preventDefault();

    if (!id_facture) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    if (!reglement) {
      Toast.fire({
        icon: 'error',
        title: 'Cette Facture N\'a Aucun Detail!'
      });
      return;
    }

    $("#ajouter_modal").modal('show');
  });
  $("body").on("submit", '.new_facture-form', /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault();
              formdata = $(this).serialize();
              modalAlert = $("#ajouter_modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".new_facture-form .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context10.prev = 6;
              _context10.next = 9;
              return axios.post('/facture/factures/ajouter_reglement/' + id_facture, formdata);

            case 9:
              request = _context10.sent;
              data = request.data;
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-success\">Reglement Bien Ajouter</div>");
              $(this).trigger("reset");
              $('.new_facture-form select').val('').trigger("change");
              getMontant();
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              reglement = false;
              table_facture.ajax.reload(null, false);
              window.open('/facture/factures/facture/' + id_facture + '/' + data, '_blank');
              _context10.next = 28;
              break;

            case 21:
              _context10.prev = 21;
              _context10.t0 = _context10["catch"](6);
              message = _context10.t0.response.data;
              console.log(_context10.t0, _context10.t0.response);
              modalAlert.remove();
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 28:
              setTimeout(function () {
                $("#ajouter_modal .modal-body .alert").remove();
              }, 4000);

            case 29:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this, [[6, 21]]);
    }));

    return function (_x5) {
      return _ref10.apply(this, arguments);
    };
  }());
  $('body').on('click', '#modifier', /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault(); // if(!id_facture){
              //     Toast.fire({
              //     icon: 'error',
              //     title: 'Veuillez selection une ligne!',
              //     })
              //     return;
              // }
              // $("#modifier_org-modal").modal('show');

            case 1:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }());
  $('body').on('click', '#modifier_org', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var modalAlert, icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();
              modalAlert = $("#modifier_org-modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".modal_modifier_org-facture .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('organisme', $('#org').val());
              _context12.prev = 7;
              _context12.next = 10;
              return axios.post('/facture/factures/modifier_organisme_facture/' + id_facture, formData);

            case 10:
              request = _context12.sent;
              data = request.data;
              $("#modifier_org-modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              table_facture.ajax.reload(null, false);
              $('#org').select2();
              _context12.next = 24;
              break;

            case 18:
              _context12.prev = 18;
              _context12.t0 = _context12["catch"](7);
              message = _context12.t0.response.data;
              modalAlert.remove();
              $("#modifier_org-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
              setTimeout(function () {
                $("#modifier_org-modal .modal-body .alert").remove();
              }, 4000);

            case 25:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[7, 18]]);
    }));

    return function (_x7) {
      return _ref12.apply(this, arguments);
    };
  }());
  $("body").on("click", '#imprimer', /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();

              if (id_facture) {
                _context13.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context13.abrupt("return");

            case 4:
              window.open('/facture/factures/printfacture/' + id_facture, '_blank');

            case 5:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function (_x8) {
      return _ref13.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction', function () {
    window.open('/facture/factures/extraction_factures', '_blank');
  });
  $('body').on('click', '#extra_frais', function (e) {
    e.preventDefault();
    $("#annee_extraction_frais").modal('show');
  });
  $('body').on('click', '#export_frais', function (e) {
    e.preventDefault();
    var annee = $('#annee').val(); // alert(annee);

    window.open('/facture/factures/extraction_factures_by_annee/' + annee, '_blank');
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
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

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-3e9a6d","vendors-node_modules_core-js_modules_es_promise_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8"], () => (__webpack_exec__("./assets/components/facture/facture.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9mYWN0dXJlL2ZhY3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgbGV0IGlkX2ZhY3R1cmUgPSBmYWxzZTtcclxuICAgIHZhciB0YWJsZV9mYWN0dXJlID0gJChcIiNkYXRhYmxlc19mYWN0dXJlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2ZhY3R1cmUvZmFjdHVyZXMvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9mYWN0dXJlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJyNkYXRhYmxlc19mYWN0dXJlJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9ICQoJyNkYXRhYmxlc19mYWN0dXJlJykuRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGR0LnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gJChcIiNiYW5xdWVcIikuc2VsZWN0MigpO1xyXG4gICAgLy8gJChcIiNwYWllbWVudFwiKS5zZWxlY3QyKCk7XHJcbiAgICAvLyAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgLy8gJChcIiNtb2RpZmllcl9vcmctbW9kYWwgI29yZ1wiKS5zZWxlY3QyKCk7XHJcbiAgICAvLyAkKFwiI29yZ2FuaXNtZVwiKS5zZWxlY3QyKCk7XHJcbiAgICAvLyAkKFwiI3JlZ2xlbWVudFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgIFxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMSkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIjcmVnbGVtZW50XCIpICYmICQoXCIjcmVnbGVtZW50XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygyKS5zZWFyY2goJChcIiNyZWdsZW1lbnRcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygzKS5zZWFyY2goJChcIiNvcmdhbmlzbWVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBpZiAoJChcIiNyZWdsZW1lbnRcIikgJiYgJChcIiNyZWdsZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3JlZ2xlbWVudFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChcIiNvcmdhbmlzbWVcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI29yZ2FuaXNtZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNyZWdsZW1lbnRcIikgJiYgJChcIiNyZWdsZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcmVnbGVtZW50XCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJChcIiNvcmdhbmlzbWVcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNyZWdsZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3JlZ2xlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDIpLnNlYXJjaChpZF9yZWdsZW1lbnQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI29yZ2FuaXNtZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfb3JnYW5pc21lID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMykuc2VhcmNoKGlkX29yZ2FuaXNtZSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgIGxldCByZWdsZW1lbnQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGdldE1vbnRhbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvZmFjdHVyZS9mYWN0dXJlcy9nZXRNb250YW50LycraWRfZmFjdHVyZSlcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgcmVnbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgJChcIiNham91dGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzLmRhdGEgIT0gJ3ZpZGUnKSB7XHJcbiAgICAgICAgICAgICAgICByZWdsZW1lbnQgPSAxMjtcclxuICAgICAgICAgICAgICAgIC8vICQoXCIjbW9udGFudFwiKS52YWwoc3VjY2Vzcy5kYXRhWydtb250YW50J10pO1xyXG4gICAgICAgICAgICAgICAgLy8gJChcIiNtb250YW50MlwiKS52YWwoc3VjY2Vzcy5kYXRhWydtb250YW50J10pO1xyXG4gICAgICAgICAgICAgICAgJChcIiNtb250YW50X2ZhY3R1cmVcIikudmFsKHN1Y2Nlc3MuZGF0YVsnbW9udGFudF9mYWN0dXJlJ10pO1xyXG4gICAgICAgICAgICAgICAgJChcIiNham91dGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0RmFjdHVyZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNmYWN0dXJlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBheGlvcy5nZXQoJy9mYWN0dXJlL2ZhY3R1cmVzL2RldGFpbGxlX2ZhY3R1cmUvJytpZF9mYWN0dXJlKVxyXG4gICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICBpZihzdWNjZXNzLmRhdGFbMF0gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjYWRkX2RldGFpbGxlJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2FkZCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbC1mYWN0dXJlICNkZXRhaWxsZV9hY3RpdmUnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2FkZF9kZXRhaWxsZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjYWRkJykuY3NzKCdkaXNwbGF5JywnZmxleCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2RldGFpbGxlX2FjdGl2ZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnLnRhYmxlX2RldGFpbGxlX2ZhY3R1cmUgdGJvZHknKS5odG1sKHN1Y2Nlc3MuZGF0YVsxXSlcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1tb25leS1iaWxsLWFsdFwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3VjY2Vzcy5kYXRhWzBdKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGdldE9yZ2FuaXNtZUJ5RmFjdHVyZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZihpZF9mYWN0dXJlKXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9vcmdhbmlzbWUvJytpZF9mYWN0dXJlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgJCgnI29yZycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBsb2FkX2ZyYWlzX3ByZWlucyA9ICgpID0+IHtcclxuICAgICAgICBpZihpZF9mYWN0dXJlKXtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvZmFjdHVyZS9mYWN0dXJlcy9hcnRpY2xlX2ZyYWlzLycraWRfZmFjdHVyZSlcclxuICAgICAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcjZGV0YWlsX2ZhY3R1cmVfbW9kYWwgI2ZyYWlzJykuaHRtbChzdWNjZXNzLmRhdGEpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgICAgICQoJyNkZXRhaWxfZmFjdHVyZV9tb2RhbCAjbW9udGFudHQnKS52YWwoJycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZmFjdHVyZSB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfZmFjdHVyZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJlZ2xlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfZmFjdHVyZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2ZhY3R1cmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkX2ZhY3R1cmUpO1xyXG4gICAgICAgICAgICBnZXRPcmdhbmlzbWVCeUZhY3R1cmUoKVxyXG4gICAgICAgICAgICBnZXRNb250YW50KCk7XHJcbiAgICAgICAgICAgIGdldEZhY3R1cmUoKTtcclxuICAgICAgICAgICAgbG9hZF9mcmFpc19wcmVpbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2ZhY3R1cmUnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9mYWN0dXJlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZGV0YWlsX2ZhY3R1cmVfbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgZXh0cmFfZnJhaXNcclxuICAgICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9b3JnYW5dJykub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldG9yZ2FuaXNtZXBhc1BheWFudCcpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NoYW5nZScsJy5tb2RhbC1mYWN0dXJlICNmcmFpcycsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZyYWlzID0gJCh0aGlzKS5maW5kKCc6c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgaWYoZnJhaXMgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1mYWN0dXJlICNtb250YW50dCcpLnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjbW9udGFudHQnKS52YWwoZnJhaXMpO1xyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2FkZF9kZXRhaWxsZScsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQodGhpcykuZmluZCgnaScpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXBsdXMnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgb3JnYW5pc21lX2lkICA9ICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLnZhbCgpO1xyXG4gICAgICAgIGlmICgkKFwiaW5wdXRbbmFtZT0nb3JnYW4nXTpjaGVja2VkXCIpLnZhbCgpID09IDEpIHtcclxuICAgICAgICAgICAgb3JnYW5pc21lX2lkID0gN1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZyYWlzJywgJCgnI2ZyYWlzJykudmFsKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbW9udGFudCcsICQoJyNtb250YW50dCcpLnZhbCgpKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ljZScsICQoJyNpY2UnKS52YWwoKSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdvcmdhbmlzbWVfaWQnLCBvcmdhbmlzbWVfaWQpO1xyXG5cclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiLm1vZGFsLWZhY3R1cmUgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2ZhY3R1cmUvZmFjdHVyZXMvYWRkX2RldGFpbGxlLycraWRfZmFjdHVyZSxmb3JtRGF0YSlcclxuICAgICAgICAgICAgZ2V0RmFjdHVyZSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWZhY3R1cmUgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPkZhY3R1cmUgQmllbiBBam91dGVyPC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAkKCdzZWxlY3QnKS52YWwoJycpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICAgICAgICAgIGdldE1vbnRhbnQoKTtcclxuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIubW9kYWwtZmFjdHVyZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWZhY3R1cmUgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfSk7XHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vL2RlbGV0ZSBhbGxcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RlbGV0ZV9kZXRhaWxsZScsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBhbGVydChpZF9mYWN0dXJlKVxyXG4gICAgICAgICAgICAvLyBsZXQgaWRfZGV0ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IGRlc2FjdGl2ZXIgdG91dCBsZXMgZnJhaXMgPycpO1xyXG4gICAgICAgICAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gJCh0aGlzKS5maW5kKCdpJyk7XHJcbiAgICAgICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS13aW5kb3ctY2xvc2UnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL2Nsb3R1cmVfYWxsX2RldGFpbGxlLycraWRfZmFjdHVyZSlcclxuICAgICAgICAgICAgICAgICAgICBnZXRNb250YW50KClcclxuICAgICAgICAgICAgICAgICAgICBnZXRGYWN0dXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS13aW5kb3ctY2xvc2VcIik7XHJcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtd2luZG93LWNsb3NlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vL2RlbGV0ZSBhbGxcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcuZGV0YWlsbGVfY2xvdHVyZScsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQodGhpcykuZmluZCgnaScpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXdpbmRvdy1jbG9zZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBpZF9kZXQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL2Nsb3R1cmVfZGV0YWlsbGUvJytpZF9kZXQpXHJcbiAgICAgICAgICAgIGdldE1vbnRhbnQoKVxyXG4gICAgICAgICAgICBnZXRGYWN0dXJlKCk7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLXdpbmRvdy1jbG9zZVwiKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS13aW5kb3ctY2xvc2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2Fqb3V0ZXInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9mYWN0dXJlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXJlZ2xlbWVudCl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2V0dGUgRmFjdHVyZSBOXFwnYSBBdWN1biBEZXRhaWwhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2Fqb3V0ZXJfbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCAnLm5ld19mYWN0dXJlLWZvcm0nLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybWRhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpXHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiLm5ld19mYWN0dXJlLWZvcm0gLmJ0biBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZmFjdHVyZS9mYWN0dXJlcy9ham91dGVyX3JlZ2xlbWVudC8nK2lkX2ZhY3R1cmUsZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+UmVnbGVtZW50IEJpZW4gQWpvdXRlcjwvZGl2PmBcclxuICAgICAgICAgICAgKTsgXHJcbiAgICAgICAgICAgICQodGhpcykudHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICAgICAgICAkKCcubmV3X2ZhY3R1cmUtZm9ybSBzZWxlY3QnKS52YWwoJycpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIGdldE1vbnRhbnQoKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIHJlZ2xlbWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL2ZhY3R1cmVzL2ZhY3R1cmUvJytpZF9mYWN0dXJlKycvJytkYXRhLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjbW9kaWZpZXInLGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGlmKCFpZF9mYWN0dXJlKXtcclxuICAgICAgICAvLyAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgLy8gICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgLy8gICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vICQoXCIjbW9kaWZpZXJfb3JnLW1vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNtb2RpZmllcl9vcmcnLCBhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNtb2RpZmllcl9vcmctbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIubW9kYWxfbW9kaWZpZXJfb3JnLWZhY3R1cmUgLmJ0biBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnb3JnYW5pc21lJywgJCgnI29yZycpLnZhbCgpKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZmFjdHVyZS9mYWN0dXJlcy9tb2RpZmllcl9vcmdhbmlzbWVfZmFjdHVyZS8nK2lkX2ZhY3R1cmUsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfb3JnLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj4ke2RhdGF9PC9kaXY+YFxyXG4gICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAkKCcjb3JnJykuc2VsZWN0MigpXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfb3JnLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgJChcIiNtb2RpZmllcl9vcmctbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG5cclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcjaW1wcmltZXInLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZmFjdHVyZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvZmFjdHVyZXMvcHJpbnRmYWN0dXJlLycraWRfZmFjdHVyZSwgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL2ZhY3R1cmVzL2V4dHJhY3Rpb25fZmFjdHVyZXMnLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhX2ZyYWlzJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiI2FubmVlX2V4dHJhY3Rpb25fZnJhaXNcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNleHBvcnRfZnJhaXMnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBhbm5lZSA9ICQoJyNhbm5lZScpLnZhbCgpO1xyXG4gICAgICAgIC8vIGFsZXJ0KGFubmVlKTtcclxuICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvZmFjdHVyZXMvZXh0cmFjdGlvbl9mYWN0dXJlc19ieV9hbm5lZS8nK2FubmVlLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxufSk7IiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4LCBmaWx0ZXJSZWplY3QgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgSVNfRklMVEVSX1JFSkVDVCA9IFRZUEUgPT0gNztcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0KTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2Uoc2VsZik7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY3JlYXRlID0gc3BlY2lmaWNDcmVhdGUgfHwgYXJyYXlTcGVjaWVzQ3JlYXRlO1xuICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgfHwgSVNfRklMVEVSX1JFSkVDVCA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbHVlLCByZXN1bHQ7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWx1ZSA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzdWx0ID0gYm91bmRGdW5jdGlvbih2YWx1ZSwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgdGFyZ2V0W2luZGV4XSA9IHJlc3VsdDsgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWx1ZTsgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHB1c2godGFyZ2V0LCB2YWx1ZSk7ICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDQ6IHJldHVybiBmYWxzZTsgICAgICAgICAgICAgLy8gZXZlcnlcbiAgICAgICAgICBjYXNlIDc6IHB1c2godGFyZ2V0LCB2YWx1ZSk7ICAgICAgLy8gZmlsdGVyUmVqZWN0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCgwKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbiAgbWFwOiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gIHNvbWU6IGNyZWF0ZU1ldGhvZCgzKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XG4gIGV2ZXJ5OiBjcmVhdGVNZXRob2QoNCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCg2KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJSZWplY3RgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maWx0ZXJpbmdcbiAgZmlsdGVyUmVqZWN0OiBjcmVhdGVNZXRob2QoNylcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgQXJyYXkgPSBnbG9iYWwuQXJyYXk7XG5cbi8vIGEgcGFydCBvZiBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5KSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKGlzQ29uc3RydWN0b3IoQykgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG4iLCJ2YXIgYXJyYXlTcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG4vLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoYXJyYXlTcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWxBcnJheSkpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09ICdBcnJheSc7XG59O1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfZmFjdHVyZSIsInRhYmxlX2ZhY3R1cmUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJhZGRDbGFzcyIsInByZURyYXdDYWxsYmFjayIsInNldHRpbmdzIiwiZm4iLCJpc0RhdGFUYWJsZSIsImR0IiwianFYSFIiLCJhYm9ydCIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3JlZ2xlbWVudCIsImlkX29yZ2FuaXNtZSIsInJlZ2xlbWVudCIsImdldE1vbnRhbnQiLCJ0aGVuIiwic3VjY2VzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRGYWN0dXJlIiwiaWNvbiIsImNzcyIsImdldE9yZ2FuaXNtZUJ5RmFjdHVyZSIsImxvYWRfZnJhaXNfcHJlaW5zIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJmaXJlIiwidGl0bGUiLCJtb2RhbCIsImV4dHJhX2ZyYWlzIiwidmFsdWUiLCJmcmFpcyIsImZpbmQiLCJvcmdhbmlzbWVfaWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibW9kYWxBbGVydCIsInJlbW92ZSIsInBvc3QiLCJwcmVwZW5kIiwicmVsb2FkIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJyZXMiLCJjb25maXJtIiwiaWRfZGV0IiwiZm9ybWRhdGEiLCJzZXJpYWxpemUiLCJ0cmlnZ2VyIiwid2luZG93Iiwib3BlbiIsImFubmVlIl0sInNvdXJjZVJvb3QiOiIifQ==