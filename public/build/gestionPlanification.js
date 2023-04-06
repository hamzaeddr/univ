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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/planification/gestion_planification.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUMzRSxjQUFjLG1CQUFPLENBQUMsdUZBQTZCO0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2Qzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wbGFuaWZpY2F0aW9uL2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xuICAgICAgICB0b2FzdDogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgICAgICB0aW1lcjogMzAwMCxcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGxldCBpZF9wbGFubmluZyA9IGZhbHNlO1xuICAgIGxldCBpZHNfcGxhbm5pbmcgPSBbXTtcbiAgICB2YXIgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uID0gJChcIiNkYXRhYmxlc19nZXN0aW9uX3BsYW5pZmljYXRpb25cIikuRGF0YVRhYmxlKHtcbiAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcbiAgICAgICAgXSxcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcbiAgICAgICAgYWpheDogXCIvcGxhbmlmaWNhdGlvbi9nZXN0aW9ucy9saXN0XCIsXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlkc19wbGFubmluZy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfcGxhbm5pbmcpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygpLnNlYXJjaChcIlwiKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg5KS5zZWFyY2goJChcIiNhbm51bGVyXCIpLnZhbCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJChcIiN2YWxpZGVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMTApLnNlYXJjaCgkKFwiI3ZhbGlkZVwiKS52YWwoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI2FubnVsZXJcIikudmFsKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjdmFsaWRlXCIpLnZhbCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI2FubnVsZXJcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiN2YWxpZGVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjdmFsaWRlXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI2FubnVsZXJcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiN2YWxpZGVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjdmFsaWRlXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygzKS5zZWFyY2goaWRfc2VtZXN0cmUpLmRyYXcoKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI21vZHVsZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI2FubnVsZXJcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiN2YWxpZGVcIikudmFsKCkgIT0gXCJcIil7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjdmFsaWRlXCIpLnZhbCgpKVxuICAgICAgICB9XG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg0KS5zZWFyY2goaWRfbW9kdWxlKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygzKS5zZWFyY2goJChcIiNzZW1lc3RyZVwiKS52YWwoKSkuZHJhdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI2VsZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNSkuc2VhcmNoKGlkX2VsZW1lbnQpLmRyYXcoKTtcbiAgICB9KVxuICAgICQoXCIjc2VtYWluZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IHNlbWFpbmUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goc2VtYWluZSkuZHJhdygpO1xuICAgIH0pXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfcHJvZiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDcpLnNlYXJjaChpZF9wcm9mKS5kcmF3KCk7XG4gICAgfSlcbiAgICAkKFwiI2dyYWRlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgZ3JhZGUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg4KS5zZWFyY2goZ3JhZGUpLmRyYXcoKTtcbiAgICB9KVxuICAgICQoXCIjYW5udWxlclwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGFubnVsZXIgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg5KS5zZWFyY2goYW5udWxlcikuZHJhdygpO1xuICAgIH0pXG4gICAgJChcIiN2YWxpZGVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgdmFsaWRlciA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2godmFsaWRlcikuZHJhdygpO1xuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19nZXN0aW9uX3BsYW5pZmljYXRpb24gdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICAgICBpZF9wbGFubmluZyA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX2dlc3Rpb25fcGxhbmlmaWNhdGlvbiB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgaWRfcGxhbm5pbmcgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XG4gICAgICAgIGlmIChpbnB1dC5oYXNDbGFzcygnY2hlY2tfcmVnJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHNfcGxhbm5pbmcuaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XG4gICAgICAgICAgICAgICAgaWRzX3BsYW5uaW5nLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWRzX3BsYW5uaW5nLnB1c2goaW5wdXQuYXR0cihcImRhdGEtaWRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI3N1cHByaW1lcicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoaWRzX3BsYW5uaW5nLmxlbmd0aCA9PT0gMCApe1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIGF1IG1vaW5zIHVuZSBsaWduZScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xuICAgICAgICBpZihyZXMgPT0gMSl7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNzdXBwcmltZXIgaVwiKTtcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRyYXNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRzX3BsYW5uaW5nJywgSlNPTi5zdHJpbmdpZnkoaWRzX3BsYW5uaW5nKSk7IFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vZ2VzdGlvbnMvZ2VzdGlvbl9kZWxldGVfcGxhbm5pbmcnLGZvcm1EYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZHNfcGxhbm5pbmcgPSBbXVxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10cmFzaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10cmFzaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICBcbiAgICB9KVxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjYW5udWxhdGlvbicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIHVuZSBsaWduZScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQoJyNhbm51bGVyX3BsYW5uaW5nX21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICQoJyNhbm51bGVyX3BsYW5uaW5nX21vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xuICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICB9KVxuICAgIFxuICAgIFxuICAgICQoXCJib2R5ICNtb3RpZl9hbm51bGVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgaWYgKCQoJyNtb3RpZl9hbm51bGVyJykudmFsKCkgPT0gXCJBdXRyZVwiICkge1xuICAgICAgICAgICAgJChcImJvZHkgI2F1dHJlX21vdGlmXCIpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnZC1ibG9jaycpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgJChcImJvZHkgI2F1dHJlX21vdGlmXCIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJykuYWRkQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICAgIH1cbiAgICB9KVxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjQW5udWxlcl9wbGFubmluZycsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gaWYoaWRzX3BsYW5uaW5nLmxlbmd0aCA9PT0gMCApe1xuICAgICAgICAvLyAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgIC8vICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAvLyAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIGF1IG1vaW5zIHVuZSBsaWduZScsXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICBpZighaWRfcGxhbm5pbmcpe1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgdW5lIGxpZ25lJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoJCgnI21vdGlmX2FubnVsZXInKS52YWwoKSA9PSBcIlwiICl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBMZSBNb3RpZiBkXFwnYW5udWxhdGlvbicsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFsZXJ0KCQoJyNhbm51bGVyX3NlbGVjdCcpLnZhbCgpKTtcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IEFubnVsZXIgY2V0dGUgU2VhbmNlID8nKTtcbiAgICAgICAgaWYocmVzID09IDEpe1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjQW5udWxlcl9wbGFubmluZyBpXCIpO1xuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtdGltZXMtY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnaWRzX3BsYW5uaW5nJywgSlNPTi5zdHJpbmdpZnkoaWRzX3BsYW5uaW5nKSk7IFxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdtb3RpZl9hbm51bGVyJywgJCgnI21vdGlmX2FubnVsZXInKS52YWwoKSk7IFxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdXRyZV9tb3RpZicsICQoJyNhdXRyZV9tb3RpZicpLnZhbCgpKTsgXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9nZXN0aW9ucy9nZXN0aW9uX2FubnVsZXJfcGxhbm5pbmcnLGZvcm1EYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vZ2VzdGlvbnMvZ2VzdGlvbl9hbm51bGVyX3BsYW5uaW5nLycraWRfcGxhbm5pbmcsZm9ybURhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGlkc19wbGFubmluZyA9IFtdXG4gICAgICAgICAgICAgICAgaWRfcGxhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkKCcjYW5udWxlcl9wbGFubmluZ19tb2RhbCcpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICBcbiAgICB9KVxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNsaXN0X2Fic2VuY2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgU2VsZWN0aW9ubmVyIHVuZSBTZWFuY2UnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cub3BlbignL3BsYW5pZmljYXRpb24vZ2VzdGlvbnMvR2V0QWJzZW5jZUJ5R3JvdXBlX2dlc3Rpb24vJytpZF9wbGFubmluZywgJ19ibGFuaycpO1xuICAgIH0pO1xuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNmaWNoZV9zZXF1ZW5jZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBTZWxlY3Rpb25uZXIgdW5lIFNlYW5jZScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9nZXN0aW9ucy9HZXRzZXF1ZW5jZV9nZXN0aW9uLycraWRfcGxhbm5pbmcsICdfYmxhbmsnKTtcbiAgICB9KTtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI3ZhbGlkYXRpb24nLCBhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciB1bmUgbGlnbmUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpY29uID0gJChcIiN2YWxpZGF0aW9uIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIC8vIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2lkc19wbGFubmluZycsIEpTT04uc3RyaW5naWZ5KGlkc19wbGFubmluZykpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL2dlc3Rpb25zL2dlc3Rpb25fdmFsaWRlcl9wbGFubmluZy8nK2lkX3BsYW5uaW5nKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuICAgICBcbiAgICBcbn0pIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwiLy8gaW4gb2xkIFdlYktpdCB2ZXJzaW9ucywgYGVsZW1lbnQuY2xhc3NMaXN0YCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgZ2xvYmFsIGBET01Ub2tlbkxpc3RgXG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbnZhciBjbGFzc0xpc3QgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ3NwYW4nKS5jbGFzc0xpc3Q7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gY2xhc3NMaXN0ICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3RvciAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTVRva2VuTGlzdFByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSA/IHVuZGVmaW5lZCA6IERPTVRva2VuTGlzdFByb3RvdHlwZTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjLCBGT1JDRUQsIFNIQU0pIHtcbiAgdmFyIFNZTUJPTCA9IHdlbGxLbm93blN5bWJvbChLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIEZPUkNFRFxuICApIHtcbiAgICB2YXIgdW5jdXJyaWVkTmF0aXZlUmVnRXhwTWV0aG9kID0gdW5jdXJyeVRoaXMoLy4vW1NZTUJPTF0pO1xuICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgdmFyIHVuY3VycmllZE5hdGl2ZU1ldGhvZCA9IHVuY3VycnlUaGlzKG5hdGl2ZU1ldGhvZCk7XG4gICAgICB2YXIgJGV4ZWMgPSByZWdleHAuZXhlYztcbiAgICAgIGlmICgkZXhlYyA9PT0gcmVnZXhwRXhlYyB8fCAkZXhlYyA9PT0gUmVnRXhwUHJvdG90eXBlLmV4ZWMpIHtcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuY3VycmllZE5hdGl2ZVJlZ0V4cE1ldGhvZChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICB9KTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgbWV0aG9kc1swXSk7XG4gICAgcmVkZWZpbmUoUmVnRXhwUHJvdG90eXBlLCBTWU1CT0wsIG1ldGhvZHNbMV0pO1xuICB9XG5cbiAgaWYgKFNIQU0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHBQcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAoaXNDYWxsYWJsZShleGVjKSkge1xuICAgIHZhciByZXN1bHQgPSBjYWxsKGV4ZWMsIFIsIFMpO1xuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIGFuT2JqZWN0KHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoY2xhc3NvZihSKSA9PT0gJ1JlZ0V4cCcpIHJldHVybiBjYWxsKHJlZ2V4cEV4ZWMsIFIsIFMpO1xuICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbn07XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9wbGFubmluZyIsImlkc19wbGFubmluZyIsInRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbiIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwiaWRfZWxlbWVudCIsInNlbWFpbmUiLCJpZF9wcm9mIiwiZ3JhZGUiLCJhbm51bGVyIiwidmFsaWRlciIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImF0dHIiLCJpbnB1dCIsImlzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImxlbmd0aCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJyZXMiLCJjb25maXJtIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwicmVsb2FkIiwibWVzc2FnZSIsIm1vZGFsIiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=