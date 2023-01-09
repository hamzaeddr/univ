(self["webpackChunk"] = self["webpackChunk"] || []).push([["epreuve"],{

/***/ "./assets/components/administration/epreuve.js":
/*!*****************************************************!*\
  !*** ./assets/components/administration/epreuve.js ***!
  \*****************************************************/
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

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

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
var rattrapage = 0;
var id_epreuve = null;
var idEpreuves = [];
var idInscriptions = [];
$(document).ready(function () {
  var tableEpreuveNormal = $("#list_epreuve_normal").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/administration/epreuve/list/normal",
    processing: true,
    serverSide: true,
    deferRender: true,
    drawCallback: function drawCallback() {
      idEpreuves.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_epreuve).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  var tableEpreuveRattrapage = $("#list_epreuve_rattrapage").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/administration/epreuve/list/rattrapage",
    processing: true,
    serverSide: true,
    deferRender: true,
    drawCallback: function drawCallback() {
      idEpreuves.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_epreuve).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('body').on('click', '#list_epreuve_normal tbody tr', function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idEpreuves.indexOf(input.attr("id"));
      idEpreuves.splice(index, 1);
    } else {
      input.prop("checked", true);
      idEpreuves.push(input.attr("id"));
    }
  });
  $('body').on('click', '#list_epreuve_rattrapage tbody tr', function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idEpreuves.indexOf(input.attr("id"));
      idEpreuves.splice(index, 1);
    } else {
      input.prop("checked", true);
      idEpreuves.push(input.attr("id"));
    }
  });
  $('body').on('dblclick', '#list_epreuve_normal tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      $('#inscription-modal').attr('disabled', true);
      id_epreuve = null;
    } else {
      $("#list_epreuve_normal tbody tr").removeClass('active_databales');
      $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_epreuve = $(this).attr('id');
    }
  });
  $('body').on('dblclick', '#list_epreuve_rattrapage tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      $('#inscription-modal').attr('disabled', true);
      id_epreuve = null;
    } else {
      $("#list_epreuve_normal tbody tr").removeClass('active_databales');
      $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_epreuve = $(this).attr('id');
    }
  });
  $('.nav-pills a').on('click', function (e) {
    $(this).tab('show');
    id_epreuve = null;
    idEpreuves = [];
    $("#list_epreuve_normal tbody tr").removeClass('active_databales');
    $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
    $("input").prop("checked", false);

    if ($(this).html() == 'Session normal') {
      rattrapage = 0;
    } else {
      rattrapage = 1;
    }
  });
  $("#import_epreuve").on("click", function () {
    $("#import_en_masse").modal("show");
    $("#import_en_masse .modal-body .alert").remove();
  });
  $("#epreuve_canvas").on('click', function () {
    window.open("/administration/epreuve/canvas", '_blank');
  });
  $("#import_epreuve_save").on("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var formData, modalAlert, icon, request, _response, message;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#import_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#epreuve_enregistre i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context.prev = 6;
              _context.next = 9;
              return axios.post('/administration/epreuve/import', formData);

            case 9:
              request = _context.sent;
              _response = request.data;
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response.message, "</p>\n              </div>"));
              window.open("/" + _response.file, "_blank");
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context.next = 25;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](6);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[6, 18]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $("#affilier_etudiant").on('click', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var icon, formData, request, _response2, message, _icon, _request, _response3, _message;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();

              if (!(rattrapage === 0)) {
                _context2.next = 29;
                break;
              }

              if (!(idEpreuves.length == 0)) {
                _context2.next = 5;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context2.abrupt("return");

            case 5:
              icon = $("#affilier_etudiant i");
              icon.removeClass('fa-link').addClass("fa-spinner fa-spin");
              _context2.prev = 7;
              formData = new FormData();
              formData.append("epreuves", JSON.stringify(idEpreuves));
              _context2.next = 12;
              return axios.post('/administration/epreuve/affiliation_normale', formData);

            case 12:
              request = _context2.sent;
              _response2 = request.data;
              icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

              if (_response2.total > 0) {
                window.open("/" + _response2.zipname, "_blank");
              } else {
                Toast.fire({
                  icon: 'info',
                  title: "Epreuves déja affilier ou valider"
                });
              }

              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              idEpreuves = [];
              _context2.next = 27;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](7);
              console.log(_context2.t0);
              message = _context2.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

            case 27:
              _context2.next = 52;
              break;

            case 29:
              if (id_epreuve) {
                _context2.next = 32;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context2.abrupt("return");

            case 32:
              _icon = $("#affilier_etudiant i");

              _icon.removeClass('fa-link').addClass("fa-spinner fa-spin");

              _context2.prev = 34;
              _context2.next = 37;
              return axios.get('/administration/epreuve/etudiants/' + id_epreuve);

            case 37:
              _request = _context2.sent;
              _response3 = _request.data;

              _icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

              $(".list_etudiants").html(_response3);
              $(".check_all_etudiant").prop("checked", false);
              $("#affilier_list_etudiant").modal("show");
              $("#affilier_list_etudiant .modal-body .alert").remove();
              _context2.next = 52;
              break;

            case 46:
              _context2.prev = 46;
              _context2.t1 = _context2["catch"](34);
              console.log(_context2.t1);
              _message = _context2.t1.response.data;
              Toast.fire({
                icon: 'error',
                title: _message
              });

              _icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

            case 52:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[7, 21], [34, 46]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  $('body').on('click', '.check_etudiant', function () {
    var index = idInscriptions.indexOf($(this).val());

    if (index != -1) {
      idInscriptions.splice(index, 1);
    } else {
      idInscriptions.push($(this).val());
    }

    console.log(idInscriptions);
  });
  $('body').on('click', '.check_all_etudiant', function () {
    idInscriptions = [];
    var inscriptions = $(".check_etudiant");

    if ($(".check_all_etudiant").prop('checked') == true) {
      inscriptions.prop("checked", true);
      inscriptions.map(function () {
        idInscriptions.push(this.value);
      });
    } else {
      inscriptions.prop("checked", false);
    }

    console.log(idInscriptions);
  });
  $("#cloture_epreuve").on('click', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var icon, formData, request, _response4, message;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context3.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context3.abrupt("return");

            case 4:
              icon = $("#cloture_epreuve i");
              icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append("idEpreuves", JSON.stringify(idEpreuves));
              _context3.prev = 8;
              _context3.next = 11;
              return axios.post('/administration/epreuve/cloture', formData);

            case 11:
              request = _context3.sent;
              _response4 = request.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: _response4
              });
              idEpreuves = [];
              tableEpreuveRattrapage.ajax.reload(null, false);
              tableEpreuveNormal.ajax.reload(null, false);
              _context3.next = 26;
              break;

            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3["catch"](8);
              console.log(_context3.t0);
              message = _context3.t0.response.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 26:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[8, 20]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  $("#decloturer_epreuve").on('click', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var icon, formData, request, _response5, message;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context4.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context4.abrupt("return");

            case 4:
              icon = $("#decloturer_epreuve i");
              icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append("idEpreuves", JSON.stringify(idEpreuves));
              _context4.prev = 8;
              _context4.next = 11;
              return axios.post('/administration/epreuve/decloture', formData);

            case 11:
              request = _context4.sent;
              _response5 = request.data;
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: _response5
              });
              idEpreuves = [];
              tableEpreuveRattrapage.ajax.reload(null, false);
              tableEpreuveNormal.ajax.reload(null, false);
              _context4.next = 26;
              break;

            case 20:
              _context4.prev = 20;
              _context4.t0 = _context4["catch"](8);
              console.log(_context4.t0);
              message = _context4.t0.response.data;
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 26:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[8, 20]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  $("#save_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var icon, modalAlert, formData, request, _response6, message;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              icon = $("#save_list_etudiant i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              modalAlert = $("#affilier_list_etudiant .modal-body .alert");
              modalAlert.remove();
              formData = new FormData();
              formData.append("idInscriptions", JSON.stringify(idInscriptions));
              formData.append("idEpreuve", id_epreuve);
              _context5.prev = 8;
              _context5.next = 11;
              return axios.post('/administration/epreuve/affiliation_rattrapage', formData);

            case 11:
              request = _context5.sent;
              _response6 = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              $("#affilier_list_etudiant .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>".concat(_response6, "</p>\n                  </div>"));
              $(".list_etudiants").empty();
              tableEpreuveRattrapage.ajax.reload(null, false);
              tableEpreuveNormal.ajax.reload(null, false);
              _context5.next = 27;
              break;

            case 20:
              _context5.prev = 20;
              _context5.t0 = _context5["catch"](8);
              console.log(_context5.t0);
              message = _context5.t0.response.data;
              modalAlert.remove();
              $("#affilier_list_etudiant .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");

            case 27:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[8, 20]]);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
  $('select').select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context6.next = 7;
              break;
            }

            _context6.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context6.sent;
            response = request.data;

          case 7:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context7.next = 7;
              break;
            }

            _context7.next = 5;
            return axios.get('/api/promotion/' + id_formation);

          case 5:
            request = _context7.sent;
            response = request.data;

          case 7:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html('').select2();
            $('#promotion').html(response).select2();

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var id_promotion, request, requestt;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id_promotion = $(this).val();

            if (!(id_promotion != "")) {
              _context8.next = 10;
              break;
            }

            _context8.next = 4;
            return axios.get('/api/semestre/' + id_promotion);

          case 4:
            request = _context8.sent;
            response = request.data;
            _context8.next = 8;
            return axios.get('/api/niv1/' + id_promotion);

          case 8:
            requestt = _context8.sent;
            niv1 = requestt.data;

          case 10:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html(response).select2();

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var id_semestre, request;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id_semestre = $(this).val();

            if (!(id_semestre != "")) {
              _context9.next = 6;
              break;
            }

            _context9.next = 4;
            return axios.get('/api/module/' + id_semestre);

          case 4:
            request = _context9.sent;
            response = request.data;

          case 6:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 8:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#module").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var id_module, request;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id_module = $(this).val();

            if (!(id_module != "")) {
              _context10.next = 6;
              break;
            }

            _context10.next = 4;
            return axios.get('/api/element/' + id_module);

          case 4:
            request = _context10.sent;
            response = request.data;

          case 6:
            $('#element').html(response).select2();

          case 7:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $("#ajouter_epreuve").on("click", function (e) {
    e.preventDefault();
    $("#ajouter_epreuve-modal").modal("show");
  });
  $("body").on('submit', "#add_epreuve", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var formData, modalAlert, icon, request, _response7, message;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault(); // var res = confirm('Vous voulez vraiment ajouter cette enregistrement ?');
              // if(res == 1){

              formData = new FormData($('#add_epreuve')[0]);
              modalAlert = $("#ajouter_epreuve-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#ajouter_epreuve-modal button i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              _context11.prev = 6;
              _context11.next = 9;
              return axios.post('/administration/epreuve/add_epreuve', formData);

            case 9:
              request = _context11.sent;
              _response7 = request.data;
              $("#ajouter_epreuve-modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n                  <p>".concat(_response7, "</p>\n                </div>"));
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context11.next = 23;
              break;

            case 17:
              _context11.prev = 17;
              _context11.t0 = _context11["catch"](6);
              message = _context11.t0.response.data;
              modalAlert.remove();
              $("#ajouter_epreuve-modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");

            case 23:
              // }
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 24:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[6, 17]]);
    }));

    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }());
  $("#import_epreuve").on("click", function () {
    $("#import_en_masse").modal("show");
    $("#import_en_masse .modal-body .alert").remove();
  });
  $('#epreuve_imprimer').on('click', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var icon, request, _response8, message;

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
              icon = $("#epreuve_imprimer i");
              icon.removeClass('fa-copy').addClass("fa-spinner fa-spin");
              _context12.prev = 6;
              _context12.next = 9;
              return axios.get('/administration/epreuve/checkifanonymat/' + id_epreuve);

            case 9:
              request = _context12.sent;
              _response8 = request.data;
              console.log(_response8);
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");
              $("#imprimer_epreuve").modal("show");
              $('#imprimer_epreuve .etudiant_info').html(_response8.html);
              $('#imprimer_epreuve .epreuve_title').html(_response8.id);

              if (_response8.anonymat == "oui") {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>\n                    <a href=\"#\" class=\"btn btn-secondary mt-3\" id=\"impression_anonymat\">Impression Anonymat</a>");
              } else {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>");
              }

              _context12.next = 25;
              break;

            case 19:
              _context12.prev = 19;
              _context12.t0 = _context12["catch"](6);
              console.log(_context12.t0);
              message = _context12.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[6, 19]]);
    }));

    return function (_x7) {
      return _ref12.apply(this, arguments);
    };
  }());
  $('#modifier_epreuve').on('click', /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      var icon, request, _response9, message;

      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context13.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context13.abrupt("return");

            case 4:
              icon = $("#modifier_epreuve i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context13.prev = 6;
              _context13.next = 9;
              return axios.get('/administration/epreuve/edit/' + id_epreuve);

            case 9:
              request = _context13.sent;
              _response9 = request.data;
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
              $("#modifier_epreuve-modal").modal("show");
              $("#modifier_epreuve-modal #edit_epreuve").html(_response9);
              $('select').select2();
              _context13.next = 23;
              break;

            case 17:
              _context13.prev = 17;
              _context13.t0 = _context13["catch"](6);
              console.log(_context13.t0);
              message = _context13.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[6, 17]]);
    }));

    return function (_x8) {
      return _ref13.apply(this, arguments);
    };
  }());
  $('#edit_epreuve').on('submit', /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var icon, formData, request, _response10, message;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();
              icon = $("#edit_epreuve button i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              formData = new FormData($(this)[0]);
              _context14.prev = 4;
              _context14.next = 7;
              return axios.post('/administration/epreuve/update/' + id_epreuve, formData);

            case 7:
              request = _context14.sent;
              _response10 = request.data;
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
              $("#modifier_epreuve-modal").modal("hide");
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context14.next = 21;
              break;

            case 15:
              _context14.prev = 15;
              _context14.t0 = _context14["catch"](4);
              console.log(_context14.t0);
              message = _context14.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");

            case 21:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this, [[4, 15]]);
    }));

    return function (_x9) {
      return _ref14.apply(this, arguments);
    };
  }());
  $('body').on('click', '#impression_clair', function (e) {
    e.preventDefault();
    window.open("/administration/epreuve/impression/" + id_epreuve + "/0", '_blank');
  });
  $('body').on('click', '#impression_anonymat', function (e) {
    e.preventDefault();
    window.open("/administration/epreuve/impression/" + id_epreuve + "/1", '_blank');
  });
  $('#capitaliser_etudiant').on('click', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var icon, formData, request, _response11, message;

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
              icon = $("#capitaliser_etudiant i");
              icon.removeClass('fab fa-get-pocket').addClass("fa fa-spinner fa-spin");
              formData = new FormData();
              formData.append('idEpreuves', JSON.stringify(idEpreuves));
              _context15.prev = 8;
              _context15.next = 11;
              return axios.post('/administration/epreuve/capitaliser', formData);

            case 11:
              request = _context15.sent;
              _response11 = request.data;
              console.log(_response11);
              icon.addClass('fab fa-get-pocket').removeClass("fa fa-spinner fa-spin ");

              if (_response11.count > 0) {
                window.open("/" + _response11.fileName, "_blank");
              } else {
                Toast.fire({
                  icon: 'info',
                  title: "Epreuves no capitaliser"
                });
              }

              idEpreuves = [];
              _context15.next = 25;
              break;

            case 19:
              _context15.prev = 19;
              _context15.t0 = _context15["catch"](8);
              console.log(_context15.t0);
              message = _context15.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fab fa-get-pocket').removeClass("fa fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[8, 19]]);
    }));

    return function (_x10) {
      return _ref15.apply(this, arguments);
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

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
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

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-3e9a6d","vendors-node_modules_core-js_modules_es_promise_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/administration/epreuve.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxufSlcclxuXHJcbiAgICBsZXQgcmF0dHJhcGFnZSA9IDA7XHJcbiAgICBsZXQgaWRfZXByZXV2ZSA9IG51bGw7XHJcbiAgICBsZXQgaWRFcHJldXZlcyA9IFtdO1xyXG4gICAgbGV0IGlkSW5zY3JpcHRpb25zID0gW107XHJcbiAgICBcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIHZhciB0YWJsZUVwcmV1dmVOb3JtYWwgPSAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9saXN0L25vcm1hbFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2VwcmV1dmUpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB2YXIgdGFibGVFcHJldXZlUmF0dHJhcGFnZSA9ICQoXCIjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2VcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9saXN0L3JhdHRyYXBhZ2VcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9lcHJldXZlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZEVwcmV1dmVzLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRFcHJldXZlcy5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICBpZEVwcmV1dmVzLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKCcjaW5zY3JpcHRpb24tbW9kYWwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgaWRfZXByZXV2ZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKCcjaW5zY3JpcHRpb24tbW9kYWwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgaWRfZXByZXV2ZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQodGhpcykudGFiKCdzaG93JylcclxuICAgICAgICBpZF9lcHJldXZlID0gbnVsbDtcclxuICAgICAgICBpZEVwcmV1dmVzID0gW107XHJcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICQoXCJpbnB1dFwiKS5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5odG1sKCkgPT0gJ1Nlc3Npb24gbm9ybWFsJykge1xyXG4gICAgICAgICAgICByYXR0cmFwYWdlID0gMDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmF0dHJhcGFnZSA9IDE7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXBvcnRfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuICAgICQoXCIjZXByZXV2ZV9jYW52YXNcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2FudmFzXCIsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNpbXBvcnRfZXByZXV2ZV9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICBcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VwcmV1dmVfZW5yZWdpc3RyZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvaW1wb3J0JywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2UubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHdpbmRvdy5vcGVuKFwiL1wiK3Jlc3BvbnNlLmZpbGUgLFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjYWZmaWxpZXJfZXR1ZGlhbnRcIikub24oJ2NsaWNrJyAsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKHJhdHRyYXBhZ2UgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gc2Vzc2lvbiBub3JtYWxcclxuICAgICAgICAgICAgaWYoaWRFcHJldXZlcy5sZW5ndGggPT0wKSB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYWZmaWxpZXJfZXR1ZGlhbnQgaVwiKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbGluaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZXByZXV2ZXNcIiwgSlNPTi5zdHJpbmdpZnkoaWRFcHJldXZlcykpXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvYWZmaWxpYXRpb25fbm9ybWFsZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbGluaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnRvdGFsID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiL1wiK3Jlc3BvbnNlLnppcG5hbWUgLFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcHJldXZlcyBkw6lqYSBhZmZpbGllciBvdSB2YWxpZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgaWRFcHJldXZlcyA9IFtdO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxpbmsnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNhZmZpbGllcl9ldHVkaWFudCBpXCIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1saW5rJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2V0dWRpYW50cy8nK2lkX2VwcmV1dmUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7ICAgIFxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbGluaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpc3RfZXR1ZGlhbnRzXCIpLmh0bWwocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAkKFwiLmNoZWNrX2FsbF9ldHVkaWFudFwiKS5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1saW5rJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5jaGVja19ldHVkaWFudCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaWRJbnNjcmlwdGlvbnMuaW5kZXhPZigkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICBpZihpbmRleCAhPSAtMSl7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWRJbnNjcmlwdGlvbnMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRJbnNjcmlwdGlvbnMpO1xyXG5cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmNoZWNrX2FsbF9ldHVkaWFudCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlkSW5zY3JpcHRpb25zID0gW107XHJcbiAgICAgICAgY29uc3QgaW5zY3JpcHRpb25zID0gJChcIi5jaGVja19ldHVkaWFudFwiKTtcclxuICAgICAgICBpZigkKFwiLmNoZWNrX2FsbF9ldHVkaWFudFwiKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpbnNjcmlwdGlvbnMucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgaW5zY3JpcHRpb25zLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zLnB1c2godGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnNjcmlwdGlvbnMucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkSW5zY3JpcHRpb25zKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Nsb3R1cmVfZXByZXV2ZVwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09MCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjY2xvdHVyZV9lcHJldXZlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbG9jaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkRXByZXV2ZXNcIiwgIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9jbG90dXJlJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTsgICAgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpZEVwcmV1dmVzID0gW11cclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNkZWNsb3R1cmVyX2VwcmV1dmVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RlY2xvdHVyZXJfZXByZXV2ZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkRXByZXV2ZXNcIiwgIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9kZWNsb3R1cmUnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWRFcHJldXZlcyA9IFtdXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjc2F2ZV9saXN0X2V0dWRpYW50XCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc2F2ZV9saXN0X2V0dWRpYW50IGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEluc2NyaXB0aW9uc1wiLCBKU09OLnN0cmluZ2lmeShpZEluc2NyaXB0aW9ucykpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaWRFcHJldXZlXCIsIGlkX2VwcmV1dmUpXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9hZmZpbGlhdGlvbl9yYXR0cmFwYWdlJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTsgICAgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICQoXCIubGlzdF9ldHVkaWFudHNcIikuZW1wdHkoKVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3R0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjEvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICBuaXYxID0gcmVxdWVzdHQuZGF0YSBcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiI2Fqb3V0ZXJfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpeyAgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNhZGRfZXByZXV2ZVwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgYWpvdXRlciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICAgICAgLy8gaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoJyNhZGRfZXByZXV2ZScpWzBdKTtcclxuICAgICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNham91dGVyX2VwcmV1dmUtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIGJ1dHRvbiBpXCIpO1xyXG4gICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9hZGRfZXByZXV2ZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCAyNTAwKSAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXBvcnRfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuICAgICQoJyNlcHJldXZlX2ltcHJpbWVyJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VwcmV1dmVfaW1wcmltZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jb3B5JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2NoZWNraWZhbm9ueW1hdC8nK2lkX2VwcmV1dmUpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNvcHknKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjaW1wcmltZXJfZXByZXV2ZVwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICAgICAgJCgnI2ltcHJpbWVyX2VwcmV1dmUgLmV0dWRpYW50X2luZm8nKS5odG1sKHJlc3BvbnNlLmh0bWwpO1xyXG4gICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuZXByZXV2ZV90aXRsZScpLmh0bWwocmVzcG9uc2UuaWQpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5hbm9ueW1hdCA9PSBcIm91aVwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuYWN0aW9ucycpLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9jbGFpclwiPkltcHJlc3Npb24gQ2xhaXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IG10LTNcIiBpZD1cImltcHJlc3Npb25fYW5vbnltYXRcIj5JbXByZXNzaW9uIEFub255bWF0PC9hPmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuYWN0aW9ucycpLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9jbGFpclwiPkltcHJlc3Npb24gQ2xhaXI8L2E+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY29weScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJyNtb2RpZmllcl9lcHJldXZlJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyX2VwcmV1dmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2VkaXQvJytpZF9lcHJldXZlKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfZXByZXV2ZS1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9lcHJldXZlLW1vZGFsICNlZGl0X2VwcmV1dmVcIikuaHRtbChyZXNwb25zZSk7ICAgIFxyXG4gICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7ICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJyNlZGl0X2VwcmV1dmUnKS5vbignc3VibWl0JywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VkaXRfZXByZXV2ZSBidXR0b24gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvdXBkYXRlLycraWRfZXByZXV2ZSwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfZXByZXV2ZS1tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNpbXByZXNzaW9uX2NsYWlyJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvaW1wcmVzc2lvbi9cIitpZF9lcHJldXZlK1wiLzBcIiwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2ltcHJlc3Npb25fYW5vbnltYXQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXByZXNzaW9uL1wiK2lkX2VwcmV1dmUrXCIvMVwiLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnI2NhcGl0YWxpc2VyX2V0dWRpYW50Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2NhcGl0YWxpc2VyX2V0dWRpYW50IGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5hZGRDbGFzcyhcImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkRXByZXV2ZXMnLCBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2FwaXRhbGlzZXInLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvdW50PjApIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiL1wiK3Jlc3BvbnNlLmZpbGVOYW1lICxcIl9ibGFua1wiKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVwcmV1dmVzIG5vIGNhcGl0YWxpc2VyXCIsXHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZEVwcmV1dmVzID0gIFtdXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxufSkiLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCIvLyBpbiBvbGQgV2ViS2l0IHZlcnNpb25zLCBgZWxlbWVudC5jbGFzc0xpc3RgIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBnbG9iYWwgYERPTVRva2VuTGlzdGBcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxudmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnc3BhbicpLmNsYXNzTGlzdDtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSBjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NVG9rZW5MaXN0UHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlID8gdW5kZWZpbmVkIDogRE9NVG9rZW5MaXN0UHJvdG90eXBlO1xuIiwiLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcbiAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIgcHJvcHMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgcHJvcHNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIGhhbmRsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIHtcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcbiAgfVxufVxuXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJyYXR0cmFwYWdlIiwiaWRfZXByZXV2ZSIsImlkRXByZXV2ZXMiLCJpZEluc2NyaXB0aW9ucyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGVFcHJldXZlTm9ybWFsIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwiYWRkQ2xhc3MiLCJsYW5ndWFnZSIsInVybCIsInRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UiLCJvbiIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJhdHRyIiwic3BsaWNlIiwicHVzaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0YWIiLCJodG1sIiwibW9kYWwiLCJyZW1vdmUiLCJ3aW5kb3ciLCJvcGVuIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibW9kYWxBbGVydCIsImljb24iLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwicHJlcGVuZCIsIm1lc3NhZ2UiLCJmaWxlIiwicmVsb2FkIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImZpcmUiLCJ0aXRsZSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b3RhbCIsInppcG5hbWUiLCJnZXQiLCJ2YWwiLCJpbnNjcmlwdGlvbnMiLCJtYXAiLCJ2YWx1ZSIsImVtcHR5Iiwic2VsZWN0MiIsImlkX2V0YWIiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJyZXF1ZXN0dCIsIm5pdjEiLCJpZF9zZW1lc3RyZSIsImlkX21vZHVsZSIsInNldFRpbWVvdXQiLCJpZCIsImFub255bWF0IiwiY291bnQiLCJmaWxlTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=