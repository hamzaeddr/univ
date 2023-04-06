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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_string_-810dcf"], () => (__webpack_exec__("./assets/components/facture/facture.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WixDQUY4QyxDQUc5Qzs7QUFDQXNELElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLG9EQUFrREMsS0FBOUQsRUFBcUUsUUFBckU7QUFDSCxHQUxEO0FBTUgsQ0F6WkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9mYWN0dXJlL2ZhY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gICAgICAgIHRvYXN0OiB0cnVlLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICAgIHRpbWVyOiAzMDAwLFxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxuICAgICAgICB9LFxuICAgIH0pXG4gICAgbGV0IGlkX2ZhY3R1cmUgPSBmYWxzZTtcbiAgICB2YXIgdGFibGVfZmFjdHVyZSA9ICQoXCIjZGF0YWJsZXNfZmFjdHVyZVwiKS5EYXRhVGFibGUoe1xuICAgICAgICBsZW5ndGhNZW51OiBbXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICBdLFxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxuICAgICAgICBhamF4OiBcIi9mYWN0dXJlL2ZhY3R1cmVzL2xpc3RcIixcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfZmFjdHVyZSkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCcjZGF0YWJsZXNfZmFjdHVyZScpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2RhdGFibGVzX2ZhY3R1cmUnKS5EYXRhVGFibGUoKTtcblxuICAgICAgICAgICAgICAgIC8vQWJvcnQgcHJldmlvdXMgYWpheCByZXF1ZXN0IGlmIGl0IGlzIHN0aWxsIGluIHByb2Nlc3MuXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8gJChcIiNiYW5xdWVcIikuc2VsZWN0MigpO1xuICAgIC8vICQoXCIjcGFpZW1lbnRcIikuc2VsZWN0MigpO1xuICAgIC8vICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKCk7XG4gICAgLy8gJChcIiNtb2RpZmllcl9vcmctbW9kYWwgI29yZ1wiKS5zZWxlY3QyKCk7XG4gICAgLy8gJChcIiNvcmdhbmlzbWVcIikuc2VsZWN0MigpO1xuICAgIC8vICQoXCIjcmVnbGVtZW50XCIpLnNlbGVjdDIoKTtcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcbiAgICBcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDEpLnNlYXJjaChcIlwiKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGlmICgkKFwiI3JlZ2xlbWVudFwiKSAmJiAkKFwiI3JlZ2xlbWVudFwiKS52YWwoKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3JlZ2xlbWVudFwiKS52YWwoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkKFwiI29yZ2FuaXNtZVwiKS52YWwoKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI29yZ2FuaXNtZVwiKS52YWwoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XG4gICAgICAgICAgICBpZiAoJChcIiNyZWdsZW1lbnRcIikgJiYgJChcIiNyZWdsZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygyKS5zZWFyY2goJChcIiNyZWdsZW1lbnRcIikudmFsKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJChcIiNvcmdhbmlzbWVcIikudmFsKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygzKS5zZWFyY2goJChcIiNvcmdhbmlzbWVcIikudmFsKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICB9KVxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xuICAgICAgICBpZiAoJChcIiNyZWdsZW1lbnRcIikgJiYgJChcIiNyZWdsZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3JlZ2xlbWVudFwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoJChcIiNvcmdhbmlzbWVcIikudmFsKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI29yZ2FuaXNtZVwiKS52YWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcIiNyZWdsZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9yZWdsZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMikuc2VhcmNoKGlkX3JlZ2xlbWVudCkuZHJhdygpO1xuICAgIH0pXG4gICAgJChcIiNvcmdhbmlzbWVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9vcmdhbmlzbWUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMykuc2VhcmNoKGlkX29yZ2FuaXNtZSkuZHJhdygpO1xuICAgIH0pXG4gICAgbGV0IHJlZ2xlbWVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGdldE1vbnRhbnQgPSAoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2ZhY3R1cmUvZmFjdHVyZXMvZ2V0TW9udGFudC8nK2lkX2ZhY3R1cmUpXG4gICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgcmVnbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICQoXCIjYWpvdXRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MuZGF0YSAhPSAndmlkZScpIHtcbiAgICAgICAgICAgICAgICByZWdsZW1lbnQgPSAxMjtcbiAgICAgICAgICAgICAgICAvLyAkKFwiI21vbnRhbnRcIikudmFsKHN1Y2Nlc3MuZGF0YVsnbW9udGFudCddKTtcbiAgICAgICAgICAgICAgICAvLyAkKFwiI21vbnRhbnQyXCIpLnZhbChzdWNjZXNzLmRhdGFbJ21vbnRhbnQnXSk7XG4gICAgICAgICAgICAgICAgJChcIiNtb250YW50X2ZhY3R1cmVcIikudmFsKHN1Y2Nlc3MuZGF0YVsnbW9udGFudF9mYWN0dXJlJ10pO1xuICAgICAgICAgICAgICAgICQoXCIjYWpvdXRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tcHJpbWFyeScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBnZXRGYWN0dXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpY29uID0gJChcIiNmYWN0dXJlIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIGF4aW9zLmdldCgnL2ZhY3R1cmUvZmFjdHVyZXMvZGV0YWlsbGVfZmFjdHVyZS8nK2lkX2ZhY3R1cmUpXG4gICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgaWYoc3VjY2Vzcy5kYXRhWzBdID09IDApe1xuICAgICAgICAgICAgICAgICQoJy5tb2RhbC1mYWN0dXJlICNhZGRfZGV0YWlsbGUnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2FkZCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjZGV0YWlsbGVfYWN0aXZlJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2FkZF9kZXRhaWxsZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2FkZCcpLmNzcygnZGlzcGxheScsJ2ZsZXgnKTtcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjZGV0YWlsbGVfYWN0aXZlJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJy50YWJsZV9kZXRhaWxsZV9mYWN0dXJlIHRib2R5JykuaHRtbChzdWNjZXNzLmRhdGFbMV0pXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLW1vbmV5LWJpbGwtYWx0XCIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3VjY2Vzcy5kYXRhWzBdKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGdldE9yZ2FuaXNtZUJ5RmFjdHVyZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYoaWRfZmFjdHVyZSl7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL29yZ2FuaXNtZS8nK2lkX2ZhY3R1cmUpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgICAgICQoJyNvcmcnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgICAgIH0gICAgXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxvYWRfZnJhaXNfcHJlaW5zID0gKCkgPT4ge1xuICAgICAgICBpZihpZF9mYWN0dXJlKXtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2ZhY3R1cmUvZmFjdHVyZXMvYXJ0aWNsZV9mcmFpcy8nK2lkX2ZhY3R1cmUpXG4gICAgICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgICAkKCcjZGV0YWlsX2ZhY3R1cmVfbW9kYWwgI2ZyYWlzJykuaHRtbChzdWNjZXNzLmRhdGEpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAkKCcjZGV0YWlsX2ZhY3R1cmVfbW9kYWwgI21vbnRhbnR0JykudmFsKCcnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSAgICBcbiAgICB9XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19mYWN0dXJlIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgaWRfZmFjdHVyZSA9IG51bGw7XG4gICAgICAgICAgICByZWdsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgJChcIiNham91dGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX2ZhY3R1cmUgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgIGlkX2ZhY3R1cmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZF9mYWN0dXJlKTtcbiAgICAgICAgICAgIGdldE9yZ2FuaXNtZUJ5RmFjdHVyZSgpXG4gICAgICAgICAgICBnZXRNb250YW50KCk7XG4gICAgICAgICAgICBnZXRGYWN0dXJlKCk7XG4gICAgICAgICAgICBsb2FkX2ZyYWlzX3ByZWlucygpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2ZhY3R1cmUnLGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIWlkX2ZhY3R1cmUpe1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjZGV0YWlsX2ZhY3R1cmVfbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcbiAgICBleHRyYV9mcmFpc1xuICAgICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9b3JnYW5dJykub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldG9yZ2FuaXNtZXBhc1BheWFudCcpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLmh0bWwoXCJcIik7XG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKCdib2R5Jykub24oJ2NoYW5nZScsJy5tb2RhbC1mYWN0dXJlICNmcmFpcycsZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZnJhaXMgPSAkKHRoaXMpLmZpbmQoJzpzZWxlY3RlZCcpLmF0dHIoJ2RhdGEtaWQnKTtcbiAgICAgICAgaWYoZnJhaXMgIT0gXCJcIil7XG4gICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjbW9udGFudHQnKS52YWwoKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjbW9udGFudHQnKS52YWwoZnJhaXMpO1xuICAgIH0pO1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjYWRkX2RldGFpbGxlJyxhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGljb24gPSAkKHRoaXMpLmZpbmQoJ2knKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtcGx1cycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICBsZXQgb3JnYW5pc21lX2lkICA9ICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLnZhbCgpO1xuICAgICAgICBpZiAoJChcImlucHV0W25hbWU9J29yZ2FuJ106Y2hlY2tlZFwiKS52YWwoKSA9PSAxKSB7XG4gICAgICAgICAgICBvcmdhbmlzbWVfaWQgPSA3XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZyYWlzJywgJCgnI2ZyYWlzJykudmFsKCkpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21vbnRhbnQnLCAkKCcjbW9udGFudHQnKS52YWwoKSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWNlJywgJCgnI2ljZScpLnZhbCgpKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdvcmdhbmlzbWVfaWQnLCBvcmdhbmlzbWVfaWQpO1xuXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIubW9kYWwtZmFjdHVyZSAubW9kYWwtYm9keSAuYWxlcnRcIik7XG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZmFjdHVyZS9mYWN0dXJlcy9hZGRfZGV0YWlsbGUvJytpZF9mYWN0dXJlLGZvcm1EYXRhKVxuICAgICAgICAgICAgZ2V0RmFjdHVyZSgpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgJChcIi5tb2RhbC1mYWN0dXJlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+RmFjdHVyZSBCaWVuIEFqb3V0ZXI8L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgJCgnc2VsZWN0JykudmFsKCcnKTtcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtcGx1c1wiKTtcbiAgICAgICAgICAgIGdldE1vbnRhbnQoKTtcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7ICAgICAgICAgICAgXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWZhY3R1cmUgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1wbHVzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJChcIi5tb2RhbC1mYWN0dXJlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgfSk7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9kZWxldGUgYWxsXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGVsZXRlX2RldGFpbGxlJyxhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gYWxlcnQoaWRfZmFjdHVyZSlcbiAgICAgICAgICAgIC8vIGxldCBpZF9kZXQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBkZXNhY3RpdmVyIHRvdXQgbGVzIGZyYWlzID8nKTtcbiAgICAgICAgICAgIGlmKHJlcyA9PSAxKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gJCh0aGlzKS5maW5kKCdpJyk7XG4gICAgICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtd2luZG93LWNsb3NlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL2Nsb3R1cmVfYWxsX2RldGFpbGxlLycraWRfZmFjdHVyZSlcbiAgICAgICAgICAgICAgICAgICAgZ2V0TW9udGFudCgpXG4gICAgICAgICAgICAgICAgICAgIGdldEZhY3R1cmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtd2luZG93LWNsb3NlXCIpO1xuICAgICAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLXdpbmRvdy1jbG9zZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vZGVsZXRlIGFsbFxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcuZGV0YWlsbGVfY2xvdHVyZScsYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpY29uID0gJCh0aGlzKS5maW5kKCdpJyk7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXdpbmRvdy1jbG9zZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICBsZXQgaWRfZGV0ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL2Nsb3R1cmVfZGV0YWlsbGUvJytpZF9kZXQpXG4gICAgICAgICAgICBnZXRNb250YW50KClcbiAgICAgICAgICAgIGdldEZhY3R1cmUoKTtcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS13aW5kb3ctY2xvc2VcIik7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtd2luZG93LWNsb3NlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNham91dGVyJyxmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCFpZF9mYWN0dXJlKXtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFyZWdsZW1lbnQpe1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NldHRlIEZhY3R1cmUgTlxcJ2EgQXVjdW4gRGV0YWlsIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjYWpvdXRlcl9tb2RhbFwiKS5tb2RhbCgnc2hvdycpO1xuICAgIH0pO1xuICAgIFxuICAgICQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsICcubmV3X2ZhY3R1cmUtZm9ybScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGZvcm1kYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKVxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI2Fqb3V0ZXJfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBpY29uID0gJChcIi5uZXdfZmFjdHVyZS1mb3JtIC5idG4gaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL2ZhY3R1cmUvZmFjdHVyZXMvYWpvdXRlcl9yZWdsZW1lbnQvJytpZF9mYWN0dXJlLGZvcm1kYXRhKVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlJlZ2xlbWVudCBCaWVuIEFqb3V0ZXI8L2Rpdj5gXG4gICAgICAgICAgICApOyBcbiAgICAgICAgICAgICQodGhpcykudHJpZ2dlcihcInJlc2V0XCIpO1xuICAgICAgICAgICAgJCgnLm5ld19mYWN0dXJlLWZvcm0gc2VsZWN0JykudmFsKCcnKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgICAgICAgICAgZ2V0TW9udGFudCgpO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICByZWdsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL2ZhY3R1cmVzL2ZhY3R1cmUvJytpZF9mYWN0dXJlKycvJytkYXRhLCAnX2JsYW5rJyk7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xuICAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgfSk7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNtb2RpZmllcicsYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBpZighaWRfZmFjdHVyZSl7XG4gICAgICAgIC8vICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgLy8gICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIC8vICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gJChcIiNtb2RpZmllcl9vcmctbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcbiAgICBcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI21vZGlmaWVyX29yZycsIGFzeW5jIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjbW9kaWZpZXJfb3JnLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIubW9kYWxfbW9kaWZpZXJfb3JnLWZhY3R1cmUgLmJ0biBpXCIpO1xuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnb3JnYW5pc21lJywgJCgnI29yZycpLnZhbCgpKTtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL21vZGlmaWVyX29yZ2FuaXNtZV9mYWN0dXJlLycraWRfZmFjdHVyZSxmb3JtRGF0YSlcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX29yZy1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXG4gICAgICAgICAgICApOyBcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcjb3JnJykuc2VsZWN0MigpXG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX29yZy1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICQoXCIjbW9kaWZpZXJfb3JnLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSwgNDAwMCk7XG5cbiAgICB9KVxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNpbXByaW1lcicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIWlkX2ZhY3R1cmUpe1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5vcGVuKCcvZmFjdHVyZS9mYWN0dXJlcy9wcmludGZhY3R1cmUvJytpZF9mYWN0dXJlLCAnX2JsYW5rJyk7XG4gICAgfSk7XG4gIFxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXh0cmFjdGlvbicsIGZ1bmN0aW9uICgpe1xuICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL2ZhY3R1cmVzL2V4dHJhY3Rpb25fZmFjdHVyZXMnLCAnX2JsYW5rJyk7XG4gICAgfSlcbiAgICBcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhX2ZyYWlzJyxmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCIjYW5uZWVfZXh0cmFjdGlvbl9mcmFpc1wiKS5tb2RhbCgnc2hvdycpO1xuICAgIH0pO1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXhwb3J0X2ZyYWlzJyxmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBhbm5lZSA9ICQoJyNhbm5lZScpLnZhbCgpO1xuICAgICAgICAvLyBhbGVydChhbm5lZSk7XG4gICAgICAgIHdpbmRvdy5vcGVuKCcvZmFjdHVyZS9mYWN0dXJlcy9leHRyYWN0aW9uX2ZhY3R1cmVzX2J5X2FubmVlLycrYW5uZWUsICdfYmxhbmsnKTtcbiAgICB9KTtcbn0pOyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX2ZhY3R1cmUiLCJ0YWJsZV9mYWN0dXJlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiYWRkQ2xhc3MiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsInNlbGVjdDIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwicmVzcG9uc2UiLCJkcmF3IiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9yZWdsZW1lbnQiLCJpZF9vcmdhbmlzbWUiLCJyZWdsZW1lbnQiLCJnZXRNb250YW50IiwidGhlbiIsInN1Y2Nlc3MiLCJyZW1vdmVDbGFzcyIsImF0dHIiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0RmFjdHVyZSIsImljb24iLCJjc3MiLCJnZXRPcmdhbmlzbWVCeUZhY3R1cmUiLCJsb2FkX2ZyYWlzX3ByZWlucyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwiZmlyZSIsInRpdGxlIiwibW9kYWwiLCJleHRyYV9mcmFpcyIsInZhbHVlIiwiZnJhaXMiLCJmaW5kIiwib3JnYW5pc21lX2lkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1vZGFsQWxlcnQiLCJyZW1vdmUiLCJwb3N0IiwicHJlcGVuZCIsInJlbG9hZCIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwicmVzIiwiY29uZmlybSIsImlkX2RldCIsImZvcm1kYXRhIiwic2VyaWFsaXplIiwidHJpZ2dlciIsIndpbmRvdyIsIm9wZW4iLCJhbm5lZSJdLCJzb3VyY2VSb290IjoiIn0=