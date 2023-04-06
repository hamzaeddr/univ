(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestionadmission"],{

/***/ "./assets/components/admission/gestionadmission.js":
/*!*********************************************************!*\
  !*** ./assets/components/admission/gestionadmission.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

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
var id_admission = false;
var idAdmissions = [];
var frais = [];
$(document).ready(function () {
  var table = $("#datatables_gestion_admission").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/admission/gestion/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      idAdmissions.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_admission).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  var getDocuments = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _icon, request, data, message;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _icon = $('#document i');

              _icon.removeClass('fa-check').addClass('fa-spinner fa-spin');

              _context.next = 5;
              return axios.get("/admission/gestion/getdocuments/" + id_admission);

            case 5:
              request = _context.sent;
              _context.next = 8;
              return request.data;

            case 8:
              data = _context.sent;
              $('.ms-selectable .ms-list').html(data.documents);
              $('.ms-selection .ms-list').html(data.documentsExists);

              _icon.addClass('fa-check').removeClass('fa-spinner fa-spin');

              _context.next = 20;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-check').removeClass('fa-spinner fa-spin');

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function getDocuments() {
      return _ref.apply(this, arguments);
    };
  }();

  var getOrganisme = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.get("/api/organisme");

            case 3:
              request = _context2.sent;
              _context2.next = 6;
              return request.data;

            case 6:
              data = _context2.sent;
              $('#organisme').html(data).select2();
              _context2.next = 15;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              message = _context2.t0.response.data;
              console.log(_context2.t0, _context2.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function getOrganisme() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getNatureEtudiant = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios.get("/api/nature_etudiant/" + id_admission);

            case 3:
              request = _context3.sent;
              _context3.next = 6;
              return request.data;

            case 6:
              data = _context3.sent;
              $('#organisme').html(data).select2();
              _context3.next = 15;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              message = _context3.t0.response.data;
              console.log(_context3.t0, _context3.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function getNatureEtudiant() {
      return _ref3.apply(this, arguments);
    };
  }();

  $("#frais").on("change", function () {
    $("#montant").val($("#frais").find(":selected").data('frais'));
  });
  getOrganisme();
  $("#etablissement").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_etab = $(this).val();
            table.columns().search("");
            table.columns(0).search(id_etab).draw();
            response = "";

            if (!(id_etab != "")) {
              _context4.next = 11;
              break;
            }

            _context4.next = 7;
            return axios.get('/api/formation/' + id_etab);

          case 7:
            request = _context4.sent;
            response = request.data;
            _context4.next = 12;
            break;

          case 11:
            $('#annee').html("").select2();

          case 12:
            $('#formation').html(response).select2();

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_formation = $(this).val();
            table.columns().search("");
            table.columns(1).search(id_formation).draw();
            response = "";

            if (!(id_formation != "")) {
              _context5.next = 9;
              break;
            }

            _context5.next = 7;
            return axios.get('/api/annee/' + id_formation);

          case 7:
            request = _context5.sent;
            response = request.data;

          case 9:
            $('#annee').html(response).select2();

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#annee").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            table.columns().search("");
            table.columns(2).search($(this).val()).draw();

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));

  var getInscriptionAnnee = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              icon = $('#inscription-modal i');
              _context7.prev = 1;
              icon.removeClass('fa-check').addClass('fa-spinner fa-spin');
              _context7.next = 5;
              return axios.get("/admission/gestion/getAnneeDisponible/" + id_admission);

            case 5:
              request = _context7.sent;
              _context7.next = 8;
              return request.data;

            case 8:
              data = _context7.sent;
              $('#annee_inscription').html(data.anneeHtml).select2();
              $('#promotion_inscription').html(data.promotionHtml).select2();
              $('#inscription-modal').attr('disabled', false);
              _context7.next = 21;
              break;

            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](1);
              $('#inscription-modal').attr('disabled', true);
              $('#annee_inscription, #promotion_inscription').empty();
              message = _context7.t0.response.data;
              console.log(_context7.t0, _context7.t0.response);
              Toast.fire({
                icon: 'info',
                title: message
              });

            case 21:
              icon.addClass('fa-check').removeClass('fa-spinner fa-spin');

            case 22:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 14]]);
    }));

    return function getInscriptionAnnee() {
      return _ref7.apply(this, arguments);
    };
  }();

  $('body').on('click', '#datatables_gestion_admission tbody tr', function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idAdmissions.indexOf(input.attr("id"));
      idAdmissions.splice(index, 1);
    } else {
      input.prop("checked", true);
      idAdmissions.push(input.attr("id"));
    }
  });
  $('body').on('dblclick', '#datatables_gestion_admission tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      $('#inscription-modal').attr('disabled', true);
      id_admission = null;
    } else {
      $("#datatables_gestion_admission tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_admission = $(this).attr('id');
      getNatureEtudiant();
      getInscriptionAnnee();
      getDocuments();
    }
  });
  $("#document").on("click", function () {
    if (!id_admission) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#document_modal").modal("show");
  });
  $("body").on("click", ".ms-elem-selection", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var formData, request, data;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            $('.ms-selectable .ms-list').prepend($(this).clone().removeClass("ms-elem-selection").addClass("ms-elem-selectable"));
            formData = new FormData();
            formData.append('idDocument', $(this).attr("id"));
            formData.append('idAdmission', id_admission);
            $(this).remove();
            _context8.prev = 5;
            _context8.next = 8;
            return axios.post("/admission/gestion/deletedocument", formData);

          case 8:
            request = _context8.sent;
            _context8.next = 11;
            return request.data;

          case 11:
            data = _context8.sent;
            _context8.next = 17;
            break;

          case 14:
            _context8.prev = 14;
            _context8.t0 = _context8["catch"](5);
            Toast.fire({
              icon: 'error',
              title: 'error'
            });

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this, [[5, 14]]);
  })));
  $("body").on("click", ".ms-elem-selectable", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var formData, request, data;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            $('.ms-selection .ms-list').prepend($(this).clone().removeClass("ms-elem-selectable").addClass("ms-elem-selection"));
            formData = new FormData();
            formData.append('idDocument', $(this).attr("id"));
            formData.append('idAdmission', id_admission);
            $(this).remove();
            _context9.prev = 5;
            _context9.next = 8;
            return axios.post("/admission/gestion/adddocuments", formData);

          case 8:
            request = _context9.sent;
            _context9.next = 11;
            return request.data;

          case 11:
            data = _context9.sent;
            _context9.next = 17;
            break;

          case 14:
            _context9.prev = 14;
            _context9.t0 = _context9["catch"](5);
            Toast.fire({
              icon: 'error',
              title: 'error'
            });

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this, [[5, 14]]);
  })));

  var getFrais = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              _context10.next = 3;
              return axios.get("/api/frais/" + id_admission);

            case 3:
              request = _context10.sent;
              _context10.next = 6;
              return request.data;

            case 6:
              data = _context10.sent;
              $('#frais').html(data.list).select2();
              $('#code-facture').html(data.codefacture);
              $("#frais_inscription-modal").modal("show");
              _context10.next = 17;
              break;

            case 12:
              _context10.prev = 12;
              _context10.t0 = _context10["catch"](0);
              message = _context10.t0.response.data;
              console.log(_context10.t0, _context10.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });

            case 17:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 12]]);
    }));

    return function getFrais() {
      return _ref10.apply(this, arguments);
    };
  }();

  var getAdmissionInfos = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
      var _icon2, request, data, message;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              _icon2 = $('#frais-modal i');

              _icon2.removeClass('fa-money-bill-alt').addClass('fa-spinner fa-spin');

              _context11.next = 5;
              return axios.get("/admission/gestion/info/" + id_admission);

            case 5:
              request = _context11.sent;
              _context11.next = 8;
              return request.data;

            case 8:
              data = _context11.sent;
              $('.etudiant_info').html(data);

              _icon2.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

              _context11.next = 19;
              break;

            case 13:
              _context11.prev = 13;
              _context11.t0 = _context11["catch"](0);
              message = _context11.t0.response.data;
              console.log(_context11.t0, _context11.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

            case 19:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[0, 13]]);
    }));

    return function getAdmissionInfos() {
      return _ref11.apply(this, arguments);
    };
  }();

  $("#frais-modal").on("click", function () {
    if (!id_admission) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    getAdmissionInfos();
    getFrais();
  });
  $('input[type=radio][name=organ]').on('change', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var request;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();

              if (!(this.value == 0)) {
                _context12.next = 10;
                break;
              }

              _context12.next = 4;
              return axios.get('/api/getorganismepasPayant');

            case 4:
              request = _context12.sent;
              response = request.data;
              $('.select-organ #org').html(response).select2();
              $('.select-organ').css('display', 'block');
              _context12.next = 12;
              break;

            case 10:
              $('.select-organ #org').html("");
              $('.select-organ').css('display', 'none');

            case 12:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    return function (_x) {
      return _ref12.apply(this, arguments);
    };
  }());
  $("#add_frais_gestion").on("click", function () {
    var fraisId = $("#frais").find(":selected").val();

    if (fraisId != "") {
      var fraisText = $("#frais").find(":selected").text();
      var prix = $("#montant").val();
      var ice = $("#ice").val();
      var organ = $('.select-organ #org').find(':selected').text();
      var organisme_id = $('.select-organ #org').val();

      if (!$.isNumeric(fraisId) || prix == "") {
        return;
      }

      if ($("input[name='organ']:checked").val() == 1) {
        organisme_id = 7;
        organ = "Payant";
      } else if (organisme_id == "") {
        return;
      }

      console.log($("input[name='organ']:checked").val());
      frais.push({
        index: Math.floor(Math.random() * 1000 + 1),
        id: fraisId,
        designation: fraisText,
        montant: prix,
        ice: ice,
        organisme_id: organisme_id,
        organisme: organ
      });
      rawFrais();
    }
  });

  var rawFrais = function rawFrais() {
    var html = "";
    frais.map(function (f, i) {
      html += "\n            <tr>\n                <td>".concat(i + 1, "</td>\n                <td>").concat(f.designation, "</td>\n                <td>").concat(f.montant, "</td>\n                <td>").concat(f.ice, "</td>\n                <td>").concat(f.organisme, "</td>\n                <td><button class='delete_frais btn btn-danger'  id='").concat(f.index, "'><i class='fa fa-trash' ></i></button></td>\n            </tr>\n        ");
    }); // console.log(html);

    $(".table_frais_admission").html(html);
  };

  $("body").on("click", '.delete_frais', function () {
    var _this = this;

    var index = frais.findIndex(function (frais) {
      return frais.index == $(_this).attr("id");
    });
    frais.splice(index, 1);
    rawFrais();
  });
  $("#save_frais_gestion").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var formData, modalAlert, icon, request, _response, message;

    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            formData = new FormData();
            formData.append("frais", JSON.stringify(frais)); // formData.append("organisme", $("#organisme").val())

            modalAlert = $("#frais_inscription-modal .modal-body .alert");
            modalAlert.remove();
            icon = $("#save_frais_gestion i");
            icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
            _context13.prev = 6;
            _context13.next = 9;
            return axios.post('/admission/gestion/addfrais/' + id_admission, formData);

          case 9:
            request = _context13.sent;
            _response = request.data;
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>Bien Enregistre</p>\n              </div>");
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $(".table_frais_admission").empty();
            frais = [];
            window.open("/admission/gestion/facture/" + _response, '_blank');
            table.ajax.reload(null, false);
            _context13.next = 26;
            break;

          case 19:
            _context13.prev = 19;
            _context13.t0 = _context13["catch"](6);
            message = _context13.t0.response.data;
            console.log(_context13.t0, _context13.t0.response);
            modalAlert.remove();
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

          case 26:
            setTimeout(function () {
              $("#frais_inscription-modal .modal-body .alert").remove();
            }, 3000);

          case 27:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[6, 19]]);
  })));
  $("#inscription-modal").on("click", function () {
    if (!id_admission) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#inscription_modal .modal-body .alert").remove();
    $("#inscription_modal").modal("show");
  });
  $("#inscription_save").on("submit", /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var formData, modalAlert, icon, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#inscription_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#inscription_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context14.prev = 6;
              _context14.next = 9;
              return axios.post('/admission/gestion/inscription/' + id_admission, formData);

            case 9:
              request = _context14.sent;
              _response2 = request.data;
              $("#inscription_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response2, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $("#annee_inscription, #promotion_inscription, #organisme").empty();
              table.ajax.reload(null, false);
              _context14.next = 24;
              break;

            case 17:
              _context14.prev = 17;
              _context14.t0 = _context14["catch"](6);
              message = _context14.t0.response.data;
              console.log(_context14.t0, _context14.t0.response);
              modalAlert.remove();
              $("#inscription_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this, [[6, 17]]);
    }));

    return function (_x2) {
      return _ref14.apply(this, arguments);
    };
  }());
  $("#attestation_admission").on('click', function () {
    if (!id_admission) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    window.open("/admission/gestion/attestation/" + id_admission, '_blank');
  });
  $('body').on('click', '#imprimer_docs', function () {
    if (!id_admission) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Choisir Une ligne!'
      });
      return;
    }

    window.open('/admission/gestion/print_documents_admission/' + id_admission, '_blank');
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-c22831"], () => (__webpack_exec__("./assets/components/admission/gestionadmission.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQTFFO0FBQ0QsR0FURDtBQVVILENBNVpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaXNzaW9uL2dlc3Rpb25hZG1pc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbiAgICB0b2FzdDogdHJ1ZSxcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICB0aW1lcjogMzAwMCxcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxuICAgIH0sXG4gICAgfSlcbiAgICBsZXQgaWRfYWRtaXNzaW9uID0gZmFsc2U7XG4gICAgbGV0IGlkQWRtaXNzaW9ucyA9IFtdO1xuICAgIGxldCBmcmFpcyA9IFtdO1xuICAgIFxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XG4gICAgdmFyIHRhYmxlID0gJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fYWRtaXNzaW9uXCIpLkRhdGFUYWJsZSh7XG4gICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXG4gICAgICAgIGFqYXg6IFwiL2FkbWlzc2lvbi9nZXN0aW9uL2xpc3RcIixcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWRBZG1pc3Npb25zLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9hZG1pc3Npb24pLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcbiAgICAgICAgfSxcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZ2V0RG9jdW1lbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoJyNkb2N1bWVudCBpJylcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FkbWlzc2lvbi9nZXN0aW9uL2dldGRvY3VtZW50cy9cIitpZF9hZG1pc3Npb24pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgICQoJy5tcy1zZWxlY3RhYmxlIC5tcy1saXN0JykuaHRtbChkYXRhLmRvY3VtZW50cylcbiAgICAgICAgICAgICQoJy5tcy1zZWxlY3Rpb24gLm1zLWxpc3QnKS5odG1sKGRhdGEuZG9jdW1lbnRzRXhpc3RzKVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcbiAgICAgICAgICAgIH0pICAgIFxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRPcmdhbmlzbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9vcmdhbmlzbWVcIik7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgJCgnI29yZ2FuaXNtZScpLmh0bWwoZGF0YSkuc2VsZWN0MigpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXG4gICAgICAgICAgICB9KSAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXROYXR1cmVFdHVkaWFudCA9IGFzeW5jICgpID0+e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvbmF0dXJlX2V0dWRpYW50L1wiK2lkX2FkbWlzc2lvbik7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgJCgnI29yZ2FuaXNtZScpLmh0bWwoZGF0YSkuc2VsZWN0MigpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXG4gICAgICAgICAgICB9KSAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAkKFwiI2ZyYWlzXCIpLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgJChcIiNtb250YW50XCIpLnZhbCgkKFwiI2ZyYWlzXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikuZGF0YSgnZnJhaXMnKSlcbiAgICB9KVxuICAgIGdldE9yZ2FuaXNtZSgpO1xuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKClcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcbiAgICAgICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoJyNhbm5lZScpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XG4gICAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FubmVlLycraWRfZm9ybWF0aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1cbiAgICAgICAgJCgnI2FubmVlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNhbm5lZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XG4gICAgICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKCQodGhpcykudmFsKCkpLmRyYXcoKTtcbiAgICB9KVxuICAgIGNvbnN0IGdldEluc2NyaXB0aW9uQW5uZWUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb24gPSAkKCcjaW5zY3JpcHRpb24tbW9kYWwgaScpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hZG1pc3Npb24vZ2VzdGlvbi9nZXRBbm5lZURpc3BvbmlibGUvXCIraWRfYWRtaXNzaW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICAkKCcjYW5uZWVfaW5zY3JpcHRpb24nKS5odG1sKGRhdGEuYW5uZWVIdG1sKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAkKCcjcHJvbW90aW9uX2luc2NyaXB0aW9uJykuaHRtbChkYXRhLnByb21vdGlvbkh0bWwpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICQoJyNpbnNjcmlwdGlvbi1tb2RhbCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgJCgnI2luc2NyaXB0aW9uLW1vZGFsJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICQoJyNhbm5lZV9pbnNjcmlwdGlvbiwgI3Byb21vdGlvbl9pbnNjcmlwdGlvbicpLmVtcHR5KClcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdpbmZvJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pICAgIFxuICAgICAgICB9XG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXG4gICAgfVxuICAgIFxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19nZXN0aW9uX2FkbWlzc2lvbiB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xuICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZEFkbWlzc2lvbnMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xuICAgICAgICAgICAgaWRBZG1pc3Npb25zLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xuICAgICAgICAgICAgaWRBZG1pc3Npb25zLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25fYWRtaXNzaW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XG4gICAgICAgIFxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgICQoJyNpbnNjcmlwdGlvbi1tb2RhbCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICBpZF9hZG1pc3Npb24gPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fYWRtaXNzaW9uIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICAgICBpZF9hZG1pc3Npb24gPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBnZXROYXR1cmVFdHVkaWFudCgpO1xuICAgICAgICAgICAgZ2V0SW5zY3JpcHRpb25Bbm5lZSgpO1xuICAgICAgICAgICAgZ2V0RG9jdW1lbnRzKCk7ICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG4gICAgXG4gICAgJChcIiNkb2N1bWVudFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYoIWlkX2FkbWlzc2lvbil7XG4gICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgXG4gICAgICAgICQoXCIjZG9jdW1lbnRfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXG4gICAgfSlcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLm1zLWVsZW0tc2VsZWN0aW9uXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcubXMtc2VsZWN0YWJsZSAubXMtbGlzdCcpLnByZXBlbmQoJCh0aGlzKS5jbG9uZSgpLnJlbW92ZUNsYXNzKFwibXMtZWxlbS1zZWxlY3Rpb25cIikuYWRkQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGFibGVcIikpXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkRG9jdW1lbnQnLCAkKHRoaXMpLmF0dHIoXCJpZFwiKSlcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZEFkbWlzc2lvbicsIGlkX2FkbWlzc2lvbik7XG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hZG1pc3Npb24vZ2VzdGlvbi9kZWxldGVkb2N1bWVudFwiLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5tcy1lbGVtLXNlbGVjdGFibGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5tcy1zZWxlY3Rpb24gLm1zLWxpc3QnKS5wcmVwZW5kKCQodGhpcykuY2xvbmUoKS5yZW1vdmVDbGFzcyhcIm1zLWVsZW0tc2VsZWN0YWJsZVwiKS5hZGRDbGFzcyhcIm1zLWVsZW0tc2VsZWN0aW9uXCIpKVxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZERvY3VtZW50JywgJCh0aGlzKS5hdHRyKFwiaWRcIikpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRBZG1pc3Npb24nLCBpZF9hZG1pc3Npb24pO1xuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYWRtaXNzaW9uL2dlc3Rpb24vYWRkZG9jdW1lbnRzXCIsIGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgZ2V0RnJhaXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9mcmFpcy9cIitpZF9hZG1pc3Npb24pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgICQoJyNmcmFpcycpLmh0bWwoZGF0YS5saXN0KS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAkKCcjY29kZS1mYWN0dXJlJykuaHRtbChkYXRhLmNvZGVmYWN0dXJlKTtcbiAgICAgICAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXG5cbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRBZG1pc3Npb25JbmZvcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKCcjZnJhaXMtbW9kYWwgaScpXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpLmFkZENsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hZG1pc3Npb24vZ2VzdGlvbi9pbmZvL1wiK2lkX2FkbWlzc2lvbik7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgJCgnLmV0dWRpYW50X2luZm8nKS5odG1sKGRhdGEpO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKSAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAkKFwiI2ZyYWlzLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZighaWRfYWRtaXNzaW9uKXtcbiAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBnZXRBZG1pc3Npb25JbmZvcygpOyBcbiAgICAgICAgZ2V0RnJhaXMoKTtcbiAgICB9KVxuICAgICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9b3JnYW5dJykub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldG9yZ2FuaXNtZXBhc1BheWFudCcpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLmh0bWwoXCJcIik7XG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwiI2FkZF9mcmFpc19nZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgIGxldCBmcmFpc0lkID0gJChcIiNmcmFpc1wiKS5maW5kKFwiOnNlbGVjdGVkXCIpLnZhbCgpO1xuICAgICAgICBpZihmcmFpc0lkICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGxldCBmcmFpc1RleHQgPSAkKFwiI2ZyYWlzXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikudGV4dCgpO1xuICAgICAgICAgICAgbGV0IHByaXggPSAkKFwiI21vbnRhbnRcIikudmFsKCk7XG4gICAgICAgICAgICBsZXQgaWNlID0gJChcIiNpY2VcIikudmFsKCk7XG4gICAgICAgICAgICBsZXQgb3JnYW4gID0gJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuZmluZCgnOnNlbGVjdGVkJykudGV4dCgpO1xuICAgICAgICAgICAgbGV0IG9yZ2FuaXNtZV9pZCAgPSAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS52YWwoKTtcbiAgICAgICAgICAgIGlmICghJC5pc051bWVyaWMoZnJhaXNJZCkgfHwgcHJpeCA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJChcImlucHV0W25hbWU9J29yZ2FuJ106Y2hlY2tlZFwiKS52YWwoKSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgb3JnYW5pc21lX2lkID0gN1xuICAgICAgICAgICAgICAgIG9yZ2FuID0gXCJQYXlhbnRcIlxuICAgICAgICAgICAgfWVsc2UgaWYob3JnYW5pc21lX2lkID09IFwiXCIpe1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJChcImlucHV0W25hbWU9J29yZ2FuJ106Y2hlY2tlZFwiKS52YWwoKSk7XG4gICAgICAgICAgICAgICAgZnJhaXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4IDogTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMSksXG4gICAgICAgICAgICAgICAgICAgIGlkOiBmcmFpc0lkLFxuICAgICAgICAgICAgICAgICAgICBkZXNpZ25hdGlvbjogZnJhaXNUZXh0LFxuICAgICAgICAgICAgICAgICAgICBtb250YW50OiBwcml4LFxuICAgICAgICAgICAgICAgICAgICBpY2U6IGljZSxcbiAgICAgICAgICAgICAgICAgICAgb3JnYW5pc21lX2lkOiBvcmdhbmlzbWVfaWQsXG4gICAgICAgICAgICAgICAgICAgIG9yZ2FuaXNtZTogb3JnYW5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByYXdGcmFpcygpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zdCByYXdGcmFpcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGh0bWwgPSBcIlwiO1xuICAgICAgICBmcmFpcy5tYXAoKGYsIGkpID0+IHtcbiAgICAgICAgICAgIGh0bWwgKz0gYFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD4ke2kgKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5kZXNpZ25hdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke2YubW9udGFudH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke2YuaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5vcmdhbmlzbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz0nZGVsZXRlX2ZyYWlzIGJ0biBidG4tZGFuZ2VyJyAgaWQ9JyR7Zi5pbmRleH0nPjxpIGNsYXNzPSdmYSBmYS10cmFzaCcgPjwvaT48L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgYFxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhodG1sKTtcbiAgICAgICAgJChcIi50YWJsZV9mcmFpc19hZG1pc3Npb25cIikuaHRtbChodG1sKVxuICAgIH1cbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcuZGVsZXRlX2ZyYWlzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGZyYWlzLmZpbmRJbmRleChmcmFpcyA9PiBmcmFpcy5pbmRleCA9PSAkKHRoaXMpLmF0dHIoXCJpZFwiKSk7XG4gICAgICAgIGZyYWlzLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgcmF3RnJhaXMoKTtcbiAgICB9KVxuICAgICQoXCIjc2F2ZV9mcmFpc19nZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZnJhaXNcIiwgSlNPTi5zdHJpbmdpZnkoZnJhaXMpKVxuICAgICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJvcmdhbmlzbWVcIiwgJChcIiNvcmdhbmlzbWVcIikudmFsKCkpXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcbiAgICBcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc2F2ZV9mcmFpc19nZXN0aW9uIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWlzc2lvbi9nZXN0aW9uL2FkZGZyYWlzLycraWRfYWRtaXNzaW9uLCBmb3JtRGF0YSk7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgPHA+QmllbiBFbnJlZ2lzdHJlPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgJChcIi50YWJsZV9mcmFpc19hZG1pc3Npb25cIikuZW1wdHkoKVxuICAgICAgICAgIGZyYWlzID0gW107XG4gICAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaXNzaW9uL2dlc3Rpb24vZmFjdHVyZS9cIityZXNwb25zZSwgJ19ibGFuaycpO1xuICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH0pXG5cbiAgICAkKFwiI2luc2NyaXB0aW9uLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZighaWRfYWRtaXNzaW9uKXtcbiAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI2luc2NyaXB0aW9uX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKVxuICAgICAgICAkKFwiI2luc2NyaXB0aW9uX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxuICAgIH0pXG5cbiAgICAkKFwiI2luc2NyaXB0aW9uX3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2luc2NyaXB0aW9uX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxuICAgIFxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBpY29uID0gJChcIiNpbnNjcmlwdGlvbl9zYXZlIC5idG4gaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaXNzaW9uL2dlc3Rpb24vaW5zY3JpcHRpb24vJytpZF9hZG1pc3Npb24sIGZvcm1EYXRhKTtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAkKFwiI2luc2NyaXB0aW9uX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICQoXCIjYW5uZWVfaW5zY3JpcHRpb24sICNwcm9tb3Rpb25faW5zY3JpcHRpb24sICNvcmdhbmlzbWVcIikuZW1wdHkoKVxuICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgICAkKFwiI2luc2NyaXB0aW9uX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJChcIiNhdHRlc3RhdGlvbl9hZG1pc3Npb25cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIWlkX2FkbWlzc2lvbikge1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaXNzaW9uL2dlc3Rpb24vYXR0ZXN0YXRpb24vXCIraWRfYWRtaXNzaW9uLCAnX2JsYW5rJyk7XG4gICAgfSlcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2ltcHJpbWVyX2RvY3MnLCBmdW5jdGlvbiAoKXtcbiAgICAgIGlmKCFpZF9hZG1pc3Npb24pe1xuICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBVbmUgbGlnbmUhJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5vcGVuKCcvYWRtaXNzaW9uL2dlc3Rpb24vcHJpbnRfZG9jdW1lbnRzX2FkbWlzc2lvbi8nK2lkX2FkbWlzc2lvbiwgJ19ibGFuaycpO1xuICAgIH0pXG59KVxuICAgIFxuICAgICJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9hZG1pc3Npb24iLCJpZEFkbWlzc2lvbnMiLCJmcmFpcyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInJlc3BvbnNpdmUiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJnZXREb2N1bWVudHMiLCJpY29uIiwicmVtb3ZlQ2xhc3MiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImRvY3VtZW50cyIsImRvY3VtZW50c0V4aXN0cyIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJmaXJlIiwidGl0bGUiLCJnZXRPcmdhbmlzbWUiLCJzZWxlY3QyIiwiZ2V0TmF0dXJlRXR1ZGlhbnQiLCJvbiIsInZhbCIsImlkX2V0YWIiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImlkX2Zvcm1hdGlvbiIsImdldEluc2NyaXB0aW9uQW5uZWUiLCJhbm5lZUh0bWwiLCJwcm9tb3Rpb25IdG1sIiwiYXR0ciIsImVtcHR5IiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJoYXNDbGFzcyIsIm1vZGFsIiwicHJlcGVuZCIsImNsb25lIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlbW92ZSIsInBvc3QiLCJnZXRGcmFpcyIsImxpc3QiLCJjb2RlZmFjdHVyZSIsImdldEFkbWlzc2lvbkluZm9zIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImNzcyIsImZyYWlzSWQiLCJmcmFpc1RleHQiLCJ0ZXh0IiwicHJpeCIsImljZSIsIm9yZ2FuIiwib3JnYW5pc21lX2lkIiwiaXNOdW1lcmljIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJkZXNpZ25hdGlvbiIsIm1vbnRhbnQiLCJvcmdhbmlzbWUiLCJyYXdGcmFpcyIsIm1hcCIsImYiLCJpIiwiZmluZEluZGV4IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGFsQWxlcnQiLCJ3aW5kb3ciLCJvcGVuIiwicmVsb2FkIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=