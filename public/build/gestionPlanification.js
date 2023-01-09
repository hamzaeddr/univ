(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestionPlanification"],{

/***/ "./assets/components/planification/gestion_planification.js":
/*!******************************************************************!*\
  !*** ./assets/components/planification/gestion_planification.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

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
  var id_planning = false;
  var ids_planning = [];
  var table_gestion_planification = $("#datables_gestion_planification").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/planification/gestions/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      ids_planning.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_planning).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
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
            table_gestion_planification.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 16;
              break;
            }

            table_gestion_planification.columns(0).search(id_etab).draw();

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            _context.next = 12;
            return axios.get('/api/formation/' + id_etab);

          case 12:
            request = _context.sent;
            response = request.data;
            _context.next = 22;
            break;

          case 16:
            table_gestion_planification.columns().search("").draw();

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

          case 22:
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
            table_gestion_planification.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 16;
              break;
            }

            table_gestion_planification.columns(1).search(id_formation).draw();
            _context2.next = 12;
            return axios.get('/api/promotion/' + id_formation);

          case 12:
            request = _context2.sent;
            response = request.data;
            _context2.next = 17;
            break;

          case 16:
            table_gestion_planification.columns(0).search($("#etablissement").val()).draw();

          case 17:
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html(response).select2();

          case 21:
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
            table_gestion_planification.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 15;
              break;
            }

            table_gestion_planification.columns(2).search(id_promotion).draw();
            _context3.next = 11;
            return axios.get('/api/semestre/' + id_promotion);

          case 11:
            request = _context3.sent;
            response = request.data;
            _context3.next = 16;
            break;

          case 15:
            table_gestion_planification.columns(1).search($("#formation").val()).draw();

          case 16:
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#semestre').html(response).select2();

          case 20:
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
            table_gestion_planification.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 15;
              break;
            }

            _context4.next = 10;
            return axios.get('/api/module/' + id_semestre);

          case 10:
            request = _context4.sent;
            table_gestion_planification.columns(3).search(id_semestre).draw();
            response = request.data;
            _context4.next = 16;
            break;

          case 15:
            table_gestion_planification.columns(2).search($("#promotion").val()).draw();

          case 16:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 18:
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
            table_gestion_planification.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            if (!(id_module != "")) {
              _context5.next = 15;
              break;
            }

            table_gestion_planification.columns(4).search(id_module).draw();
            _context5.next = 11;
            return axios.get('/api/element/' + id_module);

          case 11:
            request = _context5.sent;
            response = request.data;
            _context5.next = 16;
            break;

          case 15:
            table_gestion_planification.columns(3).search($("#semestre").val()).draw();

          case 16:
            $('#element').html(response).select2();

          case 17:
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
            table_gestion_planification.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            table_gestion_planification.columns(5).search(id_element).draw();

          case 8:
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
            table_gestion_planification.columns(6).search(semaine).draw();

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
            table_gestion_planification.columns(7).search(id_prof).draw();

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
            table_gestion_planification.columns(8).search(grade).draw();

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#annuler").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var annuler;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            annuler = $(this).val();
            table_gestion_planification.columns(9).search(annuler).draw();

          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $("#valider").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var valider;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            valider = $(this).val();
            table_gestion_planification.columns(10).search(valider).draw();

          case 2:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  })));
  $('body').on('dblclick', '#datables_gestion_planification tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_planning = null;
    } else {
      $("#datables_gestion_planification tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_planning = $(this).attr('id');
    }
  });
  $('body').on('click', '#datables_gestion_planification tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

    if (input.hasClass('check_reg')) {
      return;
    } else {
      if (input.is(":checked")) {
        input.prop("checked", false);
        var index = ids_planning.indexOf(input.attr("data-id"));
        ids_planning.splice(index, 1);
      } else {
        input.prop("checked", true);
        ids_planning.push(input.attr("data-id"));
      }
    }
  });
  $('body').on('click', '#supprimer', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var res, icon, formData, request, _response, message;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();

              if (!(ids_planning.length === 0)) {
                _context12.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context12.abrupt("return");

            case 4:
              res = confirm('Vous voulez vraiment supprimer cette enregistrement ?');

              if (!(res == 1)) {
                _context12.next = 25;
                break;
              }

              icon = $("#supprimer i");
              icon.removeClass('fa-trash').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_planning', JSON.stringify(ids_planning));
              _context12.prev = 10;
              _context12.next = 13;
              return axios.post('/planification/gestions/gestion_delete_planning', formData);

            case 13:
              request = _context12.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: _response
              });
              ids_planning = [];
              table_gestion_planification.ajax.reload(null, false);
              icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
              _context12.next = 25;
              break;

            case 21:
              _context12.prev = 21;
              _context12.t0 = _context12["catch"](10);
              message = _context12.t0.response.data;
              icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");

            case 25:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[10, 21]]);
    }));

    return function (_x) {
      return _ref12.apply(this, arguments);
    };
  }());
  $('body').on('click', '#annulation', /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();

              if (id_planning) {
                _context13.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une ligne'
              });
              return _context13.abrupt("return");

            case 4:
              $('#annuler_planning_modal').modal("show"); // setTimeout(() => {
              //     $('#annuler_planning_modal').modal("hide");
              // }, 1000);

            case 5:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function (_x2) {
      return _ref13.apply(this, arguments);
    };
  }());
  $("body #motif_annuler").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            if ($('#motif_annuler').val() == "Autre") {
              $("body #autre_motif").removeClass('d-none').addClass('d-block');
            } else {
              $("body #autre_motif").removeClass('d-block').addClass('d-none');
            }

          case 1:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  })));
  $('body').on('click', '#Annuler_planning', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var res, icon, formData, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e.preventDefault(); // if(ids_planning.length === 0 ){
              //     Toast.fire({
              //     icon: 'error',
              //     title: 'Merci de Choisir au moins une ligne',
              //     })
              //     return;
              // }

              if (id_planning) {
                _context15.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une ligne'
              });
              return _context15.abrupt("return");

            case 4:
              if (!($('#motif_annuler').val() == "")) {
                _context15.next = 7;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir Le Motif d\'annulation'
              });
              return _context15.abrupt("return");

            case 7:
              // alert($('#annuler_select').val());
              res = confirm('Vous voulez vraiment Annuler cette Seance ?');

              if (!(res == 1)) {
                _context15.next = 31;
                break;
              }

              icon = $("#Annuler_planning i");
              icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
              formData = new FormData(); // formData.append('ids_planning', JSON.stringify(ids_planning)); 

              formData.append('motif_annuler', $('#motif_annuler').val());
              formData.append('autre_motif', $('#autre_motif').val());
              _context15.prev = 14;
              _context15.next = 17;
              return axios.post('/planification/gestions/gestion_annuler_planning/' + id_planning, formData);

            case 17:
              request = _context15.sent;
              _response2 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response2
              }); // ids_planning = []

              id_planning = false;
              $('#annuler_planning_modal').modal("hide");
              table_gestion_planification.ajax.reload(null, false);
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              _context15.next = 31;
              break;

            case 26:
              _context15.prev = 26;
              _context15.t0 = _context15["catch"](14);
              message = _context15.t0.response.data;
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 31:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[14, 26]]);
    }));

    return function (_x3) {
      return _ref15.apply(this, arguments);
    };
  }());
  $("body").on("click", '#list_absence', function (e) {
    e.preventDefault();

    if (!id_planning) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Selectionner une Seance'
      });
      return;
    }

    window.open('/planification/gestions/GetAbsenceByGroupe_gestion/' + id_planning, '_blank');
  });
  $("body").on("click", '#fiche_sequence', /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              e.preventDefault();

              if (id_planning) {
                _context16.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Selectionner une Seance'
              });
              return _context16.abrupt("return");

            case 4:
              window.open('/planification/gestions/Getsequence_gestion/' + id_planning, '_blank');

            case 5:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }));

    return function (_x4) {
      return _ref16.apply(this, arguments);
    };
  }());
  $('body').on('click', '#validation', /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
      var icon, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              e.preventDefault();

              if (id_planning) {
                _context17.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une ligne'
              });
              return _context17.abrupt("return");

            case 4:
              icon = $("#validation i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin"); // var formData = new FormData();
              // formData.append('ids_planning', JSON.stringify(ids_planning));

              _context17.prev = 6;
              _context17.next = 9;
              return axios.post('/planification/gestions/gestion_valider_planning/' + id_planning);

            case 9:
              request = _context17.sent;
              _response3 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response3
              });
              table_gestion_planification.ajax.reload(null, false);
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              _context17.next = 21;
              break;

            case 16:
              _context17.prev = 16;
              _context17.t0 = _context17["catch"](6);
              message = _context17.t0.response.data;
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 21:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[6, 16]]);
    }));

    return function (_x5) {
      return _ref17.apply(this, arguments);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-3e9a6d","vendors-node_modules_core-js_modules_es_promise_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/planification/gestion_planification.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFCO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLHFGQUE0QjtBQUN2RCw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDM0UsY0FBYyxtQkFBTyxDQUFDLHVGQUE2QjtBQUNuRCxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGxhbmlmaWNhdGlvbi9nZXN0aW9uX3BsYW5pZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIGxldCBpZF9wbGFubmluZyA9IGZhbHNlO1xyXG4gICAgbGV0IGlkc19wbGFubmluZyA9IFtdO1xyXG4gICAgdmFyIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbiA9ICQoXCIjZGF0YWJsZXNfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL3BsYW5pZmljYXRpb24vZ2VzdGlvbnMvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZHNfcGxhbm5pbmcuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9wbGFubmluZykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgICAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI2FubnVsZXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg5KS5zZWFyY2goJChcIiNhbm51bGVyXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjdmFsaWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMTApLnNlYXJjaCgkKFwiI3ZhbGlkZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygpLnNlYXJjaChcIlwiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg5KS5zZWFyY2goJChcIiNhbm51bGVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMTApLnNlYXJjaCgkKFwiI3ZhbGlkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygwKS5zZWFyY2goJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2FubnVsZXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI2FubnVsZXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjdmFsaWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjdmFsaWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxKS5zZWFyY2goJChcIiNmb3JtYXRpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtZXN0cmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiN2YWxpZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygyKS5zZWFyY2goJChcIiNwcm9tb3Rpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI21vZHVsZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiN2YWxpZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDQpLnNlYXJjaChpZF9tb2R1bGUpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjc2VtZXN0cmVcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZWxlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZWxlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2FubnVsZXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI2FubnVsZXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjdmFsaWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjdmFsaWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg1KS5zZWFyY2goaWRfZWxlbWVudCkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtYWluZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgc2VtYWluZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNikuc2VhcmNoKHNlbWFpbmUpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb2Zlc3NldXJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb2YgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDcpLnNlYXJjaChpZF9wcm9mKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNncmFkZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgZ3JhZGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDgpLnNlYXJjaChncmFkZSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjYW5udWxlclwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgYW5udWxlciA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKGFubnVsZXIpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3ZhbGlkZXJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IHZhbGlkZXIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2godmFsaWRlcikuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9wbGFubmluZyA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhYmxlc19nZXN0aW9uX3BsYW5pZmljYXRpb24gdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9wbGFubmluZyA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19nZXN0aW9uX3BsYW5pZmljYXRpb24gdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc0NsYXNzKCdjaGVja19yZWcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkc19wbGFubmluZy5pbmRleE9mKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICAgICAgICAgIGlkc19wbGFubmluZy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlkc19wbGFubmluZy5wdXNoKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjc3VwcHJpbWVyJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRzX3BsYW5uaW5nLmxlbmd0aCA9PT0gMCApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIGF1IG1vaW5zIHVuZSBsaWduZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICAgICAgaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNzdXBwcmltZXIgaVwiKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtdHJhc2gnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRzX3BsYW5uaW5nJywgSlNPTi5zdHJpbmdpZnkoaWRzX3BsYW5uaW5nKSk7IFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL2dlc3Rpb25zL2dlc3Rpb25fZGVsZXRlX3BsYW5uaW5nJyxmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWRzX3BsYW5uaW5nID0gW11cclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRyYXNoJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRyYXNoJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2FubnVsYXRpb24nLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcGxhbm5pbmcpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgdW5lIGxpZ25lJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjYW5udWxlcl9wbGFubmluZ19tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgJCgnI2FubnVsZXJfcGxhbm5pbmdfbW9kYWwnKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgLy8gfSwgMTAwMCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgICQoXCJib2R5ICNtb3RpZl9hbm51bGVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZiAoJCgnI21vdGlmX2FubnVsZXInKS52YWwoKSA9PSBcIkF1dHJlXCIgKSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5ICNhdXRyZV9tb3RpZlwiKS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJ2QtYmxvY2snKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKFwiYm9keSAjYXV0cmVfbW90aWZcIikucmVtb3ZlQ2xhc3MoJ2QtYmxvY2snKS5hZGRDbGFzcygnZC1ub25lJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNBbm51bGVyX3BsYW5uaW5nJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gaWYoaWRzX3BsYW5uaW5nLmxlbmd0aCA9PT0gMCApe1xyXG4gICAgICAgIC8vICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAvLyAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAvLyAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIGF1IG1vaW5zIHVuZSBsaWduZScsXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIHVuZSBsaWduZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJCgnI21vdGlmX2FubnVsZXInKS52YWwoKSA9PSBcIlwiICl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBMZSBNb3RpZiBkXFwnYW5udWxhdGlvbicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYWxlcnQoJCgnI2FubnVsZXJfc2VsZWN0JykudmFsKCkpO1xyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBBbm51bGVyIGNldHRlIFNlYW5jZSA/Jyk7XHJcbiAgICAgICAgaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNBbm51bGVyX3BsYW5uaW5nIGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdpZHNfcGxhbm5pbmcnLCBKU09OLnN0cmluZ2lmeShpZHNfcGxhbm5pbmcpKTsgXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbW90aWZfYW5udWxlcicsICQoJyNtb3RpZl9hbm51bGVyJykudmFsKCkpOyBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdXRyZV9tb3RpZicsICQoJyNhdXRyZV9tb3RpZicpLnZhbCgpKTsgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vZ2VzdGlvbnMvZ2VzdGlvbl9hbm51bGVyX3BsYW5uaW5nJyxmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vZ2VzdGlvbnMvZ2VzdGlvbl9hbm51bGVyX3BsYW5uaW5nLycraWRfcGxhbm5pbmcsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIGlkc19wbGFubmluZyA9IFtdXHJcbiAgICAgICAgICAgICAgICBpZF9wbGFubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgJCgnI2FubnVsZXJfcGxhbm5pbmdfbW9kYWwnKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNsaXN0X2Fic2VuY2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcGxhbm5pbmcpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIFNlbGVjdGlvbm5lciB1bmUgU2VhbmNlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL3BsYW5pZmljYXRpb24vZ2VzdGlvbnMvR2V0QWJzZW5jZUJ5R3JvdXBlX2dlc3Rpb24vJytpZF9wbGFubmluZywgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcjZmljaGVfc2VxdWVuY2UnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcGxhbm5pbmcpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIFNlbGVjdGlvbm5lciB1bmUgU2VhbmNlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL3BsYW5pZmljYXRpb24vZ2VzdGlvbnMvR2V0c2VxdWVuY2VfZ2VzdGlvbi8nK2lkX3BsYW5uaW5nLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjdmFsaWRhdGlvbicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciB1bmUgbGlnbmUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3ZhbGlkYXRpb24gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIC8vIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnaWRzX3BsYW5uaW5nJywgSlNPTi5zdHJpbmdpZnkoaWRzX3BsYW5uaW5nKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL2dlc3Rpb25zL2dlc3Rpb25fdmFsaWRlcl9wbGFubmluZy8nK2lkX3BsYW5uaW5nKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgXHJcbiAgICBcclxufSkiLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCIvLyBpbiBvbGQgV2ViS2l0IHZlcnNpb25zLCBgZWxlbWVudC5jbGFzc0xpc3RgIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBnbG9iYWwgYERPTVRva2VuTGlzdGBcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxudmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnc3BhbicpLmNsYXNzTGlzdDtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSBjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NVG9rZW5MaXN0UHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlID8gdW5kZWZpbmVkIDogRE9NVG9rZW5MaXN0UHJvdG90eXBlO1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfcGxhbm5pbmciLCJpZHNfcGxhbm5pbmciLCJ0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24iLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwiYWRkQ2xhc3MiLCJsYW5ndWFnZSIsInVybCIsInNlbGVjdDIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwicmVzcG9uc2UiLCJkcmF3IiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJpZF9zZW1lc3RyZSIsImlkX21vZHVsZSIsImlkX2VsZW1lbnQiLCJzZW1haW5lIiwiaWRfcHJvZiIsImdyYWRlIiwiYW5udWxlciIsInZhbGlkZXIiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJsZW5ndGgiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwicmVzIiwiY29uZmlybSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsInJlbG9hZCIsIm1lc3NhZ2UiLCJtb2RhbCIsIndpbmRvdyIsIm9wZW4iXSwic291cmNlUm9vdCI6IiJ9