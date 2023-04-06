(self["webpackChunk"] = self["webpackChunk"] || []).push([["note"],{

/***/ "./assets/components/administration/note.js":
/*!**************************************************!*\
  !*** ./assets/components/administration/note.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

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
  var id_epreuve = false;
  var idEpreuves = [];
  var table_notes_epreuve = $("#datables_notes_epreuve").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/administration/note/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  function table_note_inscription() {
    var table_notes_inscription = $("#datatables_notes_inscription").DataTable({
      lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
      order: [[2, "asc"]],
      ajax: "/administration/note/list/note_inscription/" + id_epreuve,
      processing: true,
      serverSide: true,
      deferRender: true,
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
      },
      stateSave: true,
      bDestroy: true
    });
  }

  $('body').on('click', '#datables_notes_epreuve tbody tr', function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idEpreuves.indexOf(input.attr("id"));
      idEpreuves.splice(index, 1);
    } else {
      input.prop("checked", true);
      idEpreuves.push(input.attr("id"));
    }

    console.log(idEpreuves);
  });
  $('body').on('dblclick', '#datables_notes_epreuve tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_epreuve = null;
    } else {
      $("#datables_notes_epreuve tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales'); // const icon = $('#note i');
      // icon.removeClass('fa-newspaper').addClass('fa-spinner fa-spin');

      id_epreuve = $(this).attr('id');
      table_note_inscription(); // icon.addClass('fa-newspaper').removeClass('fa-spinner fa-spin')
    }
  });
  $("#etablissement").select2();
  $("#professeur").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_notes_epreuve.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 12;
              break;
            }

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            table_notes_epreuve.columns(0).search(id_etab).draw();
            _context.next = 8;
            return axios.get('/api/formation/' + id_etab);

          case 8:
            request = _context.sent;
            response = request.data;
            _context.next = 13;
            break;

          case 12:
            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val()).draw();
            } else {
              table_notes_epreuve.columns().search("").draw();
            }

          case 13:
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 18:
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
            table_notes_epreuve.columns().search("");

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 12;
              break;
            }

            table_notes_epreuve.columns(1).search(id_formation).draw();
            _context2.next = 8;
            return axios.get('/api/promotion/' + id_formation);

          case 8:
            request = _context2.sent;
            response = request.data;
            _context2.next = 13;
            break;

          case 12:
            table_notes_epreuve.columns(0).search($("#etablissement").val()).draw();

          case 13:
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
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
            table_notes_epreuve.columns().search("");

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 11;
              break;
            }

            table_notes_epreuve.columns(2).search(id_promotion).draw();
            _context3.next = 7;
            return axios.get('/api/semestre/' + id_promotion);

          case 7:
            request = _context3.sent;
            response = request.data;
            _context3.next = 12;
            break;

          case 11:
            table_notes_epreuve.columns(1).search($("#formation").val()).draw();

          case 12:
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
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
            table_notes_epreuve.columns().search("");

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 11;
              break;
            }

            _context4.next = 6;
            return axios.get('/api/module/' + id_semestre);

          case 6:
            request = _context4.sent;
            table_notes_epreuve.columns(3).search(id_semestre).draw();
            response = request.data;
            _context4.next = 12;
            break;

          case 11:
            table_notes_epreuve.columns(2).search($("#promotion").val()).draw();

          case 12:
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 15:
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
            table_notes_epreuve.columns().search("");

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            if (!(id_module != "")) {
              _context5.next = 11;
              break;
            }

            table_notes_epreuve.columns(4).search(id_module).draw();
            _context5.next = 7;
            return axios.get('/api/element/' + id_module);

          case 7:
            request = _context5.sent;
            response = request.data;
            _context5.next = 12;
            break;

          case 11:
            table_notes_epreuve.columns(3).search($("#semestre").val()).draw();

          case 12:
            $('#element').html(response).select2();

          case 13:
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
            table_notes_epreuve.columns().search("");

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            table_notes_epreuve.columns(5).search(id_element).draw();

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#professeur").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var id_prof;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_prof = $(this).val();
            table_notes_epreuve.columns(6).search(id_prof).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#note").on('click', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context8.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context8.abrupt("return");

            case 4:
              $('#notesmodal').modal("show");

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x) {
      return _ref8.apply(this, arguments);
    };
  }());
  $('body').on('submit', '.save_note', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var id_exgnotes, formData, request, data;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();
              id_exgnotes = $(this).find('input').attr('id');

              if (!($(this).find('input').val() < 0 || $(this).find('input').val() > 20)) {
                _context9.next = 5;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'La Note doit etre entre 0 et 20'
              });
              return _context9.abrupt("return");

            case 5:
              $(this).find('input').blur();
              formData = new FormData($(this)[0]);
              $(this).parent().parent().next('tr').find('.input_note').focus();
              _context9.next = 10;
              return axios.post('/administration/note/note_update/' + id_exgnotes, formData);

            case 10:
              request = _context9.sent;
              response = request.data;
              _context9.next = 14;
              return request.data;

            case 14:
              data = _context9.sent;
              table_notes_epreuve.ajax.reload(null, false);

            case 16:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    return function (_x2) {
      return _ref9.apply(this, arguments);
    };
  }());
  $('body').on('submit', '.save_obs', /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
      var id_exgnotes, formData, request, data;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault();
              $(this).find('input').blur();
              id_exgnotes = $(this).find('input').attr('id');
              formData = new FormData($(this)[0]);
              $(this).parent().parent().next('tr').find('.input_obs').focus();
              _context10.next = 7;
              return axios.post('/administration/note/observation_update/' + id_exgnotes, formData);

            case 7:
              request = _context10.sent;
              _context10.next = 10;
              return request.data;

            case 10:
              data = _context10.sent;

            case 11:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    return function (_x3) {
      return _ref10.apply(this, arguments);
    };
  }());
  $('body').on('click', '.check_note_ins', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var formData, id_exgnotes, request, data, _request, _data;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            formData = new FormData();
            id_exgnotes = $(this).attr('id');

            if (!($(this).prop('checked') == true)) {
              _context11.next = 14;
              break;
            }

            formData.append('absence', true);
            _context11.next = 6;
            return axios.post('/administration/note/absence_update/' + id_exgnotes, formData);

          case 6:
            request = _context11.sent;
            _context11.next = 9;
            return request.data;

          case 9:
            data = _context11.sent;
            table_notes_epreuve.ajax.reload(null, false);
            ;
            _context11.next = 23;
            break;

          case 14:
            formData.append('absence', false);
            _context11.next = 17;
            return axios.post('/administration/note/absence_update/' + id_exgnotes, formData);

          case 17:
            _request = _context11.sent;
            _context11.next = 20;
            return _request.data;

          case 20:
            _data = _context11.sent;
            table_notes_epreuve.ajax.reload(null, false);
            ;

          case 23:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  })));
  $("#import").on('click', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context12.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context12.abrupt("return");

            case 4:
              $('#import_en_masse').modal("show");

            case 5:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x4) {
      return _ref12.apply(this, arguments);
    };
  }());
  $('body').on('click', '#epreuve_canvas', function () {
    window.open('/administration/note/canvas/' + id_epreuve, '_blank');
  });
  $("#import_epreuve_save").on("submit", /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      var formData, modalAlert, icon, request, _response, message;

      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#import_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#epreuve_enregistre i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context13.prev = 6;
              _context13.next = 9;
              return axios.post('/administration/note/import/' + id_epreuve, formData);

            case 9:
              request = _context13.sent;
              _response = request.data;
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table_note_inscription();
              _context13.next = 23;
              break;

            case 16:
              _context13.prev = 16;
              _context13.t0 = _context13["catch"](6);
              message = _context13.t0.response.data;
              console.log(_context13.t0, _context13.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this, [[6, 16]]);
    }));

    return function (_x5) {
      return _ref13.apply(this, arguments);
    };
  }());
  $("#cloture_epreuve").on('click', /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var icon, formData, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context14.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context14.abrupt("return");

            case 4:
              icon = $("#cloture_epreuve i");
              icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
              _context14.prev = 6;
              formData = new FormData();
              formData.append("epreuves", JSON.stringify(idEpreuves));
              _context14.next = 11;
              return axios.post('/administration/note/cloturer', formData);

            case 11:
              request = _context14.sent;
              _response2 = request.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin ");
              Toast.fire({
                icon: 'success',
                title: _response2
              });
              table_notes_epreuve.ajax.reload(null, false);
              idEpreuves = [];
              _context14.next = 25;
              break;

            case 19:
              _context14.prev = 19;
              _context14.t0 = _context14["catch"](6);
              console.log(_context14.t0);
              message = _context14.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, null, [[6, 19]]);
    }));

    return function (_x6) {
      return _ref14.apply(this, arguments);
    };
  }());
  $("#decloturer_epreuve").on('click', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var icon, formData, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context15.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context15.abrupt("return");

            case 4:
              icon = $("#decloturer_epreuve i");
              icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
              _context15.prev = 6;
              formData = new FormData();
              formData.append("epreuves", JSON.stringify(idEpreuves));
              _context15.next = 11;
              return axios.post('/administration/note/decloturer', formData);

            case 11:
              request = _context15.sent;
              _response3 = request.data;
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin ");
              Toast.fire({
                icon: 'success',
                title: _response3
              });
              table_notes_epreuve.ajax.reload(null, false);
              idEpreuves = [];
              _context15.next = 25;
              break;

            case 19:
              _context15.prev = 19;
              _context15.t0 = _context15["catch"](6);
              console.log(_context15.t0);
              message = _context15.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[6, 19]]);
    }));

    return function (_x7) {
      return _ref15.apply(this, arguments);
    };
  }());
  $('#epreuve_imprimer').on('click', /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
      var icon, request, _response4, message;

      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context16.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context16.abrupt("return");

            case 4:
              icon = $("#epreuve_imprimer i");
              icon.removeClass('fa-copy').addClass("fa-spinner fa-spin");
              _context16.prev = 6;
              _context16.next = 9;
              return axios.get('/administration/note/checkifanonymat/' + id_epreuve);

            case 9:
              request = _context16.sent;
              _response4 = request.data;
              console.log(_response4);
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");
              $("#imprimer_epreuve").modal("show");
              $('#imprimer_epreuve .etudiant_info').html(_response4.html);
              $('#imprimer_epreuve .epreuve_title').html(_response4.id);

              if (_response4.anonymat == "oui") {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>\n                    <a href=\"#\" class=\"btn btn-secondary mt-3\" id=\"impression_anonymat\">Impression Anonymat</a>");
              } else {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>");
              }

              _context16.next = 25;
              break;

            case 19:
              _context16.prev = 19;
              _context16.t0 = _context16["catch"](6);
              console.log(_context16.t0);
              message = _context16.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[6, 19]]);
    }));

    return function (_x8) {
      return _ref16.apply(this, arguments);
    };
  }());
  $('body').on('click', '#impression_clair', function (e) {
    e.preventDefault();
    window.open("/administration/note/impression/" + id_epreuve + "/0", '_blank');
  });
  $('body').on('click', '#impression_anonymat', function (e) {
    e.preventDefault();
    window.open("/administration/note/impression/" + id_epreuve + "/1", '_blank');
  });
  $("#capitaliser_etudiant").on('click', /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
      var icon, formData, request, _response5, message;

      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context17.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context17.abrupt("return");

            case 4:
              icon = $("#capitaliser_etudiant i");
              icon.removeClass('fa-archive').addClass("fa-spinner fa-spin");
              _context17.prev = 6;
              formData = new FormData();
              formData.append("epreuves", JSON.stringify(idEpreuves));
              _context17.next = 11;
              return axios.post('/administration/note/capitaliser', formData);

            case 11:
              request = _context17.sent;
              _response5 = request.data;
              icon.addClass('fa-archive').removeClass("fa-spinner fa-spin ");

              if (_response5.count > 0) {
                window.open("/" + _response5.fileName, "_blank");
              }

              idEpreuves = [];
              _context17.next = 24;
              break;

            case 18:
              _context17.prev = 18;
              _context17.t0 = _context17["catch"](6);
              console.log(_context17.t0);
              message = _context17.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-archive').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[6, 18]]);
    }));

    return function (_x9) {
      return _ref17.apply(this, arguments);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/administration/note.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9ub3RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gICAgICAgIHRvYXN0OiB0cnVlLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICAgIHRpbWVyOiAzMDAwLFxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxuICAgICAgICB9LFxuICAgIH0pXG4gICAgbGV0IGlkX2VwcmV1dmUgPSBmYWxzZTtcbiAgICBsZXQgaWRFcHJldXZlcyA9IFtdO1xuICAgIHZhciB0YWJsZV9ub3Rlc19lcHJldXZlID0gJChcIiNkYXRhYmxlc19ub3Rlc19lcHJldXZlXCIpLkRhdGFUYWJsZSh7XG4gICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXG4gICAgICAgIGFqYXg6IFwiL2FkbWluaXN0cmF0aW9uL25vdGUvbGlzdFwiLFxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBmdW5jdGlvbiB0YWJsZV9ub3RlX2luc2NyaXB0aW9uKCl7XG4gICAgICAgIHZhciB0YWJsZV9ub3Rlc19pbnNjcmlwdGlvbiA9ICAkKFwiI2RhdGF0YWJsZXNfbm90ZXNfaW5zY3JpcHRpb25cIikuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvcmRlcjogW1syLCBcImFzY1wiXV0sXG4gICAgICAgICAgICBhamF4OiBcIi9hZG1pbmlzdHJhdGlvbi9ub3RlL2xpc3Qvbm90ZV9pbnNjcmlwdGlvbi9cIitpZF9lcHJldXZlLFxuICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgICAgIHNlcnZlclNpZGU6IHRydWUsXG4gICAgICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcbiAgICAgICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0ZVNhdmU6IHRydWUsXG4gICAgICAgICAgICBiRGVzdHJveTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19ub3Rlc19lcHJldXZlIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkRXByZXV2ZXMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xuICAgICAgICAgICAgaWRFcHJldXZlcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcbiAgICAgICAgICAgIGlkRXByZXV2ZXMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGlkRXByZXV2ZXMpO1xuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19ub3Rlc19lcHJldXZlIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgaWRfZXByZXV2ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX25vdGVzX2VwcmV1dmUgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGljb24gPSAkKCcjbm90ZSBpJyk7XG4gICAgICAgICAgICAvLyBpY29uLnJlbW92ZUNsYXNzKCdmYS1uZXdzcGFwZXInKS5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJyk7XG4gICAgICAgICAgICBpZF9lcHJldXZlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgdGFibGVfbm90ZV9pbnNjcmlwdGlvbigpXG4gICAgICAgICAgICAvLyBpY29uLmFkZENsYXNzKCdmYS1uZXdzcGFwZXInKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcbiAgICAkKFwiI3Byb2Zlc3NldXJcIikuc2VsZWN0MigpO1xuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XG4gICAgICAgXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XG4gICAgICAgICAgICBpZiAoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYgKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpLmRyYXcoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygpLnNlYXJjaChcIlwiKS5kcmF3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICB9KVxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xuICAgICAgICBpZiAoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcbiAgICAgICAgaWYgKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDEpLnNlYXJjaCgkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSkuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICB9KVxuICAgICQoXCIjc2VtZXN0cmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcbiAgICAgICAgaWYgKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nK2lkX3NlbWVzdHJlKTtcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygzKS5zZWFyY2goaWRfc2VtZXN0cmUpLmRyYXcoKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3Byb21vdGlvblwiKS52YWwoKSkuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9tb2R1bGUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XG4gICAgICAgIGlmICgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucyg0KS5zZWFyY2goaWRfbW9kdWxlKS5kcmF3KCk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjc2VtZXN0cmVcIikudmFsKCkpLmRyYXcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNlbGVtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZWxlbWVudCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcbiAgICAgICAgaWYgKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcbiAgICAgICAgfVxuICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNSkuc2VhcmNoKGlkX2VsZW1lbnQpLmRyYXcoKTtcbiAgICB9KVxuICAgICQoXCIjcHJvZmVzc2V1clwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3Byb2YgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKGlkX3Byb2YpLmRyYXcoKTtcbiAgICB9KVxuXG4gICAgJChcIiNub3RlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZighaWRfZXByZXV2ZSl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQoJyNub3Rlc21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCcuc2F2ZV9ub3RlJywgYXN5bmMgZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBpZF9leGdub3RlcyA9ICQodGhpcykuZmluZCgnaW5wdXQnKS5hdHRyKCdpZCcpO1xuICAgICAgICBpZiggJCh0aGlzKS5maW5kKCdpbnB1dCcpLnZhbCgpIDwgMCB8fCAkKHRoaXMpLmZpbmQoJ2lucHV0JykudmFsKCkgPiAyMCl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTGEgTm90ZSBkb2l0IGV0cmUgZW50cmUgMCBldCAyMCcsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0JykuYmx1cigpO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgndHInKS5maW5kKCcuaW5wdXRfbm90ZScpLmZvY3VzKCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9ub3RlX3VwZGF0ZS8nK2lkX2V4Z25vdGVzLCBmb3JtRGF0YSk7XG4gICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XG4gICAgfSlcbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsJy5zYXZlX29icycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0JykuYmx1cigpO1xuICAgICAgICBsZXQgaWRfZXhnbm90ZXMgPSAkKHRoaXMpLmZpbmQoJ2lucHV0JykuYXR0cignaWQnKTtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoJ3RyJykuZmluZCgnLmlucHV0X29icycpLmZvY3VzKCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9vYnNlcnZhdGlvbl91cGRhdGUvJytpZF9leGdub3RlcywgZm9ybURhdGEpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5jaGVja19ub3RlX2lucycsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgbGV0IGlkX2V4Z25vdGVzID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhYnNlbmNlJyx0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9hYnNlbmNlX3VwZGF0ZS8nK2lkX2V4Z25vdGVzLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5hamF4LnJlbG9hZChudWxsLGZhbHNlKTs7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhYnNlbmNlJyxmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL25vdGUvYWJzZW5jZV91cGRhdGUvJytpZF9leGdub3RlcywgZm9ybURhdGEpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7O1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwiI2ltcG9ydFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIWlkX2VwcmV1dmUpe1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKCcjaW1wb3J0X2VuX21hc3NlJykubW9kYWwoXCJzaG93XCIpO1xuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNlcHJldXZlX2NhbnZhcycsIGZ1bmN0aW9uICgpe1xuICAgICAgICB3aW5kb3cub3BlbignL2FkbWluaXN0cmF0aW9uL25vdGUvY2FudmFzLycraWRfZXByZXV2ZSwgJ19ibGFuaycpO1xuICAgIH0pXG4gICAgJChcIiNpbXBvcnRfZXByZXV2ZV9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXG4gICAgXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VwcmV1dmVfZW5yZWdpc3RyZSBpXCIpO1xuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9ub3RlL2ltcG9ydC8nK2lkX2VwcmV1dmUsIGZvcm1EYXRhKTtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICApO1xuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICB0YWJsZV9ub3RlX2luc2NyaXB0aW9uKClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcbiAgICAgICAgICApO1xuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pXG5cblxuICAgIFxuICAgICQoXCIjY2xvdHVyZV9lcHJldXZlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNjbG90dXJlX2VwcmV1dmUgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbG9jaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZXByZXV2ZXNcIiwgSlNPTi5zdHJpbmdpZnkoaWRFcHJldXZlcykpXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL25vdGUvY2xvdHVyZXInLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxuICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgaWRFcHJldXZlcyA9IFtdO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcIiNkZWNsb3R1cmVyX2VwcmV1dmVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09MCkge1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RlY2xvdHVyZXJfZXByZXV2ZSBpXCIpO1xuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrLW9wZW4nKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImVwcmV1dmVzXCIsIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9ub3RlL2RlY2xvdHVyZXInLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXG4gICAgICAgICAgICBpZEVwcmV1dmVzID0gIFtdXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICAkKCcjZXByZXV2ZV9pbXByaW1lcicpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCFpZF9lcHJldXZlKSB7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNlcHJldXZlX2ltcHJpbWVyIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNvcHknKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9jaGVja2lmYW5vbnltYXQvJytpZF9lcHJldXZlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jb3B5JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgJChcIiNpbXByaW1lcl9lcHJldXZlXCIpLm1vZGFsKFwic2hvd1wiKVxuICAgICAgICAgICAgJCgnI2ltcHJpbWVyX2VwcmV1dmUgLmV0dWRpYW50X2luZm8nKS5odG1sKHJlc3BvbnNlLmh0bWwpO1xuICAgICAgICAgICAgJCgnI2ltcHJpbWVyX2VwcmV1dmUgLmVwcmV1dmVfdGl0bGUnKS5odG1sKHJlc3BvbnNlLmlkKTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmFub255bWF0ID09IFwib3VpXCIpIHtcbiAgICAgICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuYWN0aW9ucycpLmh0bWwoXG4gICAgICAgICAgICAgICAgICAgIGA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG10LTNcIiBpZD1cImltcHJlc3Npb25fY2xhaXJcIj5JbXByZXNzaW9uIENsYWlyPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9hbm9ueW1hdFwiPkltcHJlc3Npb24gQW5vbnltYXQ8L2E+YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5hY3Rpb25zJykuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9jbGFpclwiPkltcHJlc3Npb24gQ2xhaXI8L2E+YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jb3B5JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjaW1wcmVzc2lvbl9jbGFpcicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL25vdGUvaW1wcmVzc2lvbi9cIitpZF9lcHJldXZlK1wiLzBcIiwgJ19ibGFuaycpO1xuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjaW1wcmVzc2lvbl9hbm9ueW1hdCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL25vdGUvaW1wcmVzc2lvbi9cIitpZF9lcHJldXZlK1wiLzFcIiwgJ19ibGFuaycpO1xuICAgIH0pXG5cbiAgICAkKFwiI2NhcGl0YWxpc2VyX2V0dWRpYW50XCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNjYXBpdGFsaXNlcl9ldHVkaWFudCBpXCIpO1xuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1hcmNoaXZlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJlcHJldXZlc1wiLCBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9jYXBpdGFsaXNlcicsIGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtYXJjaGl2ZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvdW50PjApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIityZXNwb25zZS5maWxlTmFtZSAsXCJfYmxhbmtcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZEVwcmV1dmVzID0gIFtdXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtYXJjaGl2ZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSlcbiAgICBcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjLCBGT1JDRUQsIFNIQU0pIHtcbiAgdmFyIFNZTUJPTCA9IHdlbGxLbm93blN5bWJvbChLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIEZPUkNFRFxuICApIHtcbiAgICB2YXIgdW5jdXJyaWVkTmF0aXZlUmVnRXhwTWV0aG9kID0gdW5jdXJyeVRoaXMoLy4vW1NZTUJPTF0pO1xuICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgdmFyIHVuY3VycmllZE5hdGl2ZU1ldGhvZCA9IHVuY3VycnlUaGlzKG5hdGl2ZU1ldGhvZCk7XG4gICAgICB2YXIgJGV4ZWMgPSByZWdleHAuZXhlYztcbiAgICAgIGlmICgkZXhlYyA9PT0gcmVnZXhwRXhlYyB8fCAkZXhlYyA9PT0gUmVnRXhwUHJvdG90eXBlLmV4ZWMpIHtcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuY3VycmllZE5hdGl2ZVJlZ0V4cE1ldGhvZChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICB9KTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgbWV0aG9kc1swXSk7XG4gICAgcmVkZWZpbmUoUmVnRXhwUHJvdG90eXBlLCBTWU1CT0wsIG1ldGhvZHNbMV0pO1xuICB9XG5cbiAgaWYgKFNIQU0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHBQcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAoaXNDYWxsYWJsZShleGVjKSkge1xuICAgIHZhciByZXN1bHQgPSBjYWxsKGV4ZWMsIFIsIFMpO1xuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIGFuT2JqZWN0KHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoY2xhc3NvZihSKSA9PT0gJ1JlZ0V4cCcpIHJldHVybiBjYWxsKHJlZ2V4cEV4ZWMsIFIsIFMpO1xuICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbn07XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9lcHJldXZlIiwiaWRFcHJldXZlcyIsInRhYmxlX25vdGVzX2VwcmV1dmUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImxhbmd1YWdlIiwidXJsIiwidGFibGVfbm90ZV9pbnNjcmlwdGlvbiIsInRhYmxlX25vdGVzX2luc2NyaXB0aW9uIiwic3RhdGVTYXZlIiwiYkRlc3Ryb3kiLCJvbiIsImlucHV0IiwiZmluZCIsImlzIiwicHJvcCIsImluZGV4IiwiaW5kZXhPZiIsImF0dHIiLCJzcGxpY2UiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNlbGVjdDIiLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsInJlc3BvbnNlIiwiZHJhdyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwiaWRfc2VtZXN0cmUiLCJpZF9tb2R1bGUiLCJpZF9lbGVtZW50IiwiaWRfcHJvZiIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJtb2RhbCIsImlkX2V4Z25vdGVzIiwiYmx1ciIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJwYXJlbnQiLCJuZXh0IiwiZm9jdXMiLCJwb3N0IiwicmVsb2FkIiwiYXBwZW5kIiwid2luZG93Iiwib3BlbiIsIm1vZGFsQWxlcnQiLCJyZW1vdmUiLCJwcmVwZW5kIiwibWVzc2FnZSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsImFub255bWF0IiwiY291bnQiLCJmaWxlTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=