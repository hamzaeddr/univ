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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/administration/epreuve.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xuICAgIHRvYXN0OiB0cnVlLFxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgIHRpbWVyOiAzMDAwLFxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXG4gICAgfSxcbn0pXG5cbiAgICBsZXQgcmF0dHJhcGFnZSA9IDA7XG4gICAgbGV0IGlkX2VwcmV1dmUgPSBudWxsO1xuICAgIGxldCBpZEVwcmV1dmVzID0gW107XG4gICAgbGV0IGlkSW5zY3JpcHRpb25zID0gW107XG4gICAgXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xuICAgIHZhciB0YWJsZUVwcmV1dmVOb3JtYWwgPSAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuRGF0YVRhYmxlKHtcbiAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcbiAgICAgICAgXSxcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcbiAgICAgICAgYWpheDogXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9saXN0L25vcm1hbFwiLFxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZEVwcmV1dmVzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9lcHJldXZlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpXG5cbiAgICAgICAgfSxcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIHZhciB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlID0gJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZVwiKS5EYXRhVGFibGUoe1xuICAgICAgICBsZW5ndGhNZW51OiBbXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICBdLFxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxuICAgICAgICBhamF4OiBcIi9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2xpc3QvcmF0dHJhcGFnZVwiLFxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZEVwcmV1dmVzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9lcHJldXZlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpXG5cbiAgICAgICAgfSxcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkRXByZXV2ZXMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xuICAgICAgICAgICAgaWRFcHJldXZlcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcbiAgICAgICAgICAgIGlkRXByZXV2ZXMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkRXByZXV2ZXMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xuICAgICAgICAgICAgaWRFcHJldXZlcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcbiAgICAgICAgICAgIGlkRXByZXV2ZXMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgJCgnI2luc2NyaXB0aW9uLW1vZGFsJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICAgICAgaWRfZXByZXV2ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgIGlkX2VwcmV1dmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZSB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xuICAgICAgICBcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICAgICAkKCcjaW5zY3JpcHRpb24tbW9kYWwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgaWRfZXByZXV2ZSA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICAkKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAkKHRoaXMpLnRhYignc2hvdycpXG4gICAgICAgIGlkX2VwcmV1dmUgPSBudWxsO1xuICAgICAgICBpZEVwcmV1dmVzID0gW107XG4gICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICQoXCJpbnB1dFwiKS5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcbiAgICAgICAgaWYgKCQodGhpcykuaHRtbCgpID09ICdTZXNzaW9uIG5vcm1hbCcpIHtcbiAgICAgICAgICAgIHJhdHRyYXBhZ2UgPSAwO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYXR0cmFwYWdlID0gMTtcbiAgICAgICAgfSAgIFxuICAgIFxuICAgIH0pXG4gICAgJChcIiNpbXBvcnRfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxuICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZVwiKS5tb2RhbChcInNob3dcIilcbiAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpXG4gICAgfSlcbiAgICAkKFwiI2VwcmV1dmVfY2FudmFzXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9jYW52YXNcIiwgJ19ibGFuaycpO1xuICAgIH0pXG5cbiAgICAkKFwiI2ltcG9ydF9lcHJldXZlX3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIilcbiAgICBcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXByZXV2ZV9lbnJlZ2lzdHJlIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvaW1wb3J0JywgZm9ybURhdGEpO1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIityZXNwb25zZS5maWxlICxcIl9ibGFua1wiKTtcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxuICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xuICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJChcIiNhZmZpbGllcl9ldHVkaWFudFwiKS5vbignY2xpY2snICwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihyYXR0cmFwYWdlID09PSAwKSB7XG4gICAgICAgICAgICAvLyBzZXNzaW9uIG5vcm1hbFxuICAgICAgICAgICAgaWYoaWRFcHJldXZlcy5sZW5ndGggPT0wKSB7XG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2FmZmlsaWVyX2V0dWRpYW50IGlcIik7XG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1saW5rJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZXByZXV2ZXNcIiwgSlNPTi5zdHJpbmdpZnkoaWRFcHJldXZlcykpXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2FmZmlsaWF0aW9uX25vcm1hbGUnLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbGluaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS50b3RhbCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCIvXCIrcmVzcG9uc2UuemlwbmFtZSAsXCJfYmxhbmtcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcHJldXZlcyBkw6lqYSBhZmZpbGllciBvdSB2YWxpZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcbiAgICAgICAgICAgICAgICBpZEVwcmV1dmVzID0gW107XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1saW5rJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoIWlkX2VwcmV1dmUpIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNhZmZpbGllcl9ldHVkaWFudCBpXCIpO1xuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbGluaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvZXR1ZGlhbnRzLycraWRfZXByZXV2ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7ICAgIFxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxpbmsnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG5cbiAgICAgICAgICAgICAgICAkKFwiLmxpc3RfZXR1ZGlhbnRzXCIpLmh0bWwocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgJChcIi5jaGVja19hbGxfZXR1ZGlhbnRcIikucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XG4gICAgICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50XCIpLm1vZGFsKFwic2hvd1wiKTtcbiAgICAgICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1saW5rJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmNoZWNrX2V0dWRpYW50JyxmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaWRJbnNjcmlwdGlvbnMuaW5kZXhPZigkKHRoaXMpLnZhbCgpKTtcbiAgICAgICAgaWYoaW5kZXggIT0gLTEpe1xuICAgICAgICAgICAgaWRJbnNjcmlwdGlvbnMuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zLnB1c2goJCh0aGlzKS52YWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coaWRJbnNjcmlwdGlvbnMpO1xuXG4gICAgfSlcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmNoZWNrX2FsbF9ldHVkaWFudCcsZnVuY3Rpb24gKCkge1xuICAgICAgICBpZEluc2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBpbnNjcmlwdGlvbnMgPSAkKFwiLmNoZWNrX2V0dWRpYW50XCIpO1xuICAgICAgICBpZigkKFwiLmNoZWNrX2FsbF9ldHVkaWFudFwiKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaW5zY3JpcHRpb25zLnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XG4gICAgICAgICAgICBpbnNjcmlwdGlvbnMubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zLnB1c2godGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnNjcmlwdGlvbnMucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coaWRJbnNjcmlwdGlvbnMpO1xuICAgIH0pXG4gICAgJChcIiNjbG90dXJlX2VwcmV1dmVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09MCkge1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2Nsb3R1cmVfZXByZXV2ZSBpXCIpO1xuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEVwcmV1dmVzXCIsICBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9jbG90dXJlJywgZm9ybURhdGEpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7ICAgIFxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgaWRFcHJldXZlcyA9IFtdXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcIiNkZWNsb3R1cmVyX2VwcmV1dmVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09MCkge1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RlY2xvdHVyZXJfZXByZXV2ZSBpXCIpO1xuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrLW9wZW4nKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkRXByZXV2ZXNcIiwgIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2RlY2xvdHVyZScsIGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgaWRFcHJldXZlcyA9IFtdXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoXCIjc2F2ZV9saXN0X2V0dWRpYW50XCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlX2xpc3RfZXR1ZGlhbnQgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5IC5hbGVydFwiKVxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaWRJbnNjcmlwdGlvbnNcIiwgSlNPTi5zdHJpbmdpZnkoaWRJbnNjcmlwdGlvbnMpKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEVwcmV1dmVcIiwgaWRfZXByZXV2ZSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2FmZmlsaWF0aW9uX3JhdHRyYXBhZ2UnLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTsgICAgXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAkKFwiLmxpc3RfZXR1ZGlhbnRzXCIpLmVtcHR5KClcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xuICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJCgnc2VsZWN0Jykuc2VsZWN0MigpO1xuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1cbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICB9KVxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfVxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2MS8nK2lkX3Byb21vdGlvbik7XG4gICAgICAgICAgICBuaXYxID0gcmVxdWVzdHQuZGF0YSBcbiAgICAgICAgfVxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9XG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9tb2R1bGUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1cbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICBcbiAgICAkKFwiI2Fqb3V0ZXJfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpeyAgXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcIiNham91dGVyX2VwcmV1dmUtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXG4gICAgfSlcbiAgICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjYWRkX2VwcmV1dmVcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgYWpvdXRlciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XG4gICAgICAgIC8vIGlmKHJlcyA9PSAxKXtcbiAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCgnI2FkZF9lcHJldXZlJylbMF0pO1xuICAgICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNham91dGVyX2VwcmV1dmUtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXG4gICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNham91dGVyX2VwcmV1dmUtbW9kYWwgYnV0dG9uIGlcIik7XG4gICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2FkZF9lcHJldXZlJywgZm9ybURhdGEpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICAkKFwiI2Fqb3V0ZXJfZXByZXV2ZS1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+XG4gICAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxuICAgICAgICAgIH1jYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPiR7bWVzc2FnZX08L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XG4gICAgICAgIH0sIDI1MDApICBcbiAgICB9KVxuICAgICQoXCIjaW1wb3J0X2VwcmV1dmVcIikub24oXCJjbGlja1wiLCAoKSA9PiB7ICBcbiAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2VcIikubW9kYWwoXCJzaG93XCIpXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKVxuICAgIH0pXG4gICAgJCgnI2VwcmV1dmVfaW1wcmltZXInKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZighaWRfZXByZXV2ZSkge1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXByZXV2ZV9pbXByaW1lciBpXCIpO1xuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jb3B5JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2NoZWNraWZhbm9ueW1hdC8nK2lkX2VwcmV1dmUpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNvcHknKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICAkKFwiI2ltcHJpbWVyX2VwcmV1dmVcIikubW9kYWwoXCJzaG93XCIpXG4gICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuZXR1ZGlhbnRfaW5mbycpLmh0bWwocmVzcG9uc2UuaHRtbCk7XG4gICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuZXByZXV2ZV90aXRsZScpLmh0bWwocmVzcG9uc2UuaWQpO1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuYW5vbnltYXQgPT0gXCJvdWlcIikge1xuICAgICAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5hY3Rpb25zJykuaHRtbChcbiAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9jbGFpclwiPkltcHJlc3Npb24gQ2xhaXI8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBtdC0zXCIgaWQ9XCJpbXByZXNzaW9uX2Fub255bWF0XCI+SW1wcmVzc2lvbiBBbm9ueW1hdDwvYT5gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI2ltcHJpbWVyX2VwcmV1dmUgLmFjdGlvbnMnKS5odG1sKFxuICAgICAgICAgICAgICAgICAgICBgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJpbXByZXNzaW9uX2NsYWlyXCI+SW1wcmVzc2lvbiBDbGFpcjwvYT5gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNvcHknKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgJCgnI21vZGlmaWVyX2VwcmV1dmUnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZighaWRfZXByZXV2ZSkge1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXJfZXByZXV2ZSBpXCIpO1xuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2VkaXQvJytpZF9lcHJldXZlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfZXByZXV2ZS1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfZXByZXV2ZS1tb2RhbCAjZWRpdF9lcHJldXZlXCIpLmh0bWwocmVzcG9uc2UpOyAgICBcbiAgICAgICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTsgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgJCgnI2VkaXRfZXByZXV2ZScpLm9uKCdzdWJtaXQnLCBhc3luYyBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZWRpdF9lcHJldXZlIGJ1dHRvbiBpXCIpO1xuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvdXBkYXRlLycraWRfZXByZXV2ZSwgZm9ybURhdGEpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfZXByZXV2ZS1tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNpbXByZXNzaW9uX2NsYWlyJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXByZXNzaW9uL1wiK2lkX2VwcmV1dmUrXCIvMFwiLCAnX2JsYW5rJyk7XG4gICAgfSlcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNpbXByZXNzaW9uX2Fub255bWF0JywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXByZXNzaW9uL1wiK2lkX2VwcmV1dmUrXCIvMVwiLCAnX2JsYW5rJyk7XG4gICAgfSlcbiAgICAkKCcjY2FwaXRhbGlzZXJfZXR1ZGlhbnQnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjY2FwaXRhbGlzZXJfZXR1ZGlhbnQgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5hZGRDbGFzcyhcImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRFcHJldXZlcycsIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2NhcGl0YWxpc2VyJywgZm9ybURhdGEpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgaWYocmVzcG9uc2UuY291bnQ+MCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiL1wiK3Jlc3BvbnNlLmZpbGVOYW1lICxcIl9ibGFua1wiKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcHJldXZlcyBubyBjYXBpdGFsaXNlclwiLFxuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWRFcHJldXZlcyA9ICBbXVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBcbn0pIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwiLy8gaW4gb2xkIFdlYktpdCB2ZXJzaW9ucywgYGVsZW1lbnQuY2xhc3NMaXN0YCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgZ2xvYmFsIGBET01Ub2tlbkxpc3RgXG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbnZhciBjbGFzc0xpc3QgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ3NwYW4nKS5jbGFzc0xpc3Q7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gY2xhc3NMaXN0ICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3RvciAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTVRva2VuTGlzdFByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSA/IHVuZGVmaW5lZCA6IERPTVRva2VuTGlzdFByb3RvdHlwZTtcbiIsIi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwicmF0dHJhcGFnZSIsImlkX2VwcmV1dmUiLCJpZEVwcmV1dmVzIiwiaWRJbnNjcmlwdGlvbnMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlRXByZXV2ZU5vcm1hbCIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJ0YWJsZUVwcmV1dmVSYXR0cmFwYWdlIiwib24iLCJpbnB1dCIsImlzIiwiaW5kZXgiLCJpbmRleE9mIiwiYXR0ciIsInNwbGljZSIsInB1c2giLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwidGFiIiwiaHRtbCIsIm1vZGFsIiwicmVtb3ZlIiwid2luZG93Iiwib3BlbiIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm1vZGFsQWxlcnQiLCJpY29uIiwiYXhpb3MiLCJwb3N0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsInByZXBlbmQiLCJtZXNzYWdlIiwiZmlsZSIsInJlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJmaXJlIiwidGl0bGUiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidG90YWwiLCJ6aXBuYW1lIiwiZ2V0IiwidmFsIiwiaW5zY3JpcHRpb25zIiwibWFwIiwidmFsdWUiLCJlbXB0eSIsInNlbGVjdDIiLCJpZF9ldGFiIiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwicmVxdWVzdHQiLCJuaXYxIiwiaWRfc2VtZXN0cmUiLCJpZF9tb2R1bGUiLCJzZXRUaW1lb3V0IiwiaWQiLCJhbm9ueW1hdCIsImNvdW50IiwiZmlsZU5hbWUiXSwic291cmNlUm9vdCI6IiJ9