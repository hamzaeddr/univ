(self["webpackChunk"] = self["webpackChunk"] || []).push([["inscription"],{

/***/ "./assets/components/inscription/gestioninscription.js":
/*!*************************************************************!*\
  !*** ./assets/components/inscription/gestioninscription.js ***!
  \*************************************************************/
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

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

var Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: function didOpen(toast) {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});
var id_inscription = false;
var idInscription = [];
var frais = [];
var facture_exist = false;
$(document).ready(function () {
  var table = $("#datatables_gestion_inscription").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/inscription/gestion/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      idInscription.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_inscription).addClass("active_databales");
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  var getStatutInscription = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              icon = $("#statut-modal i");
              _context.prev = 1;
              icon.removeClass("fa-check").addClass("fa-spinner fa-spin");
              _context.next = 5;
              return axios.get("/inscription/gestion/getstatut/" + id_inscription);

            case 5:
              request = _context.sent;
              _context.next = 8;
              return request.data;

            case 8:
              data = _context.sent;
              $("#statut_inscription").html(data).select2();
              _context.next = 17;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              Toast.fire({
                icon: "error",
                title: "Some Error"
              });

            case 17:
              icon.addClass("fa-check").removeClass("fa-spinner fa-spin");

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function getStatutInscription() {
      return _ref.apply(this, arguments);
    };
  }();

  $("#frais").on("change", function () {
    $("#montant").val($("#frais").find(":selected").data("frais"));
  });

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
              $("#organisme").html(data).select2();
              _context2.next = 15;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              message = _context2.t0.response.data;
              console.log(_context2.t0, _context2.t0.response);
              Toast.fire({
                icon: "error",
                title: "Some Error"
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

  getOrganisme();
  $("#etablissement").select2();
  $("#etablissement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_etab = $(this).val();
            table.columns().search("");
            table.columns(0).search(id_etab).draw();
            response = "";

            if (!(id_etab != "")) {
              _context3.next = 11;
              break;
            }

            _context3.next = 7;
            return axios.get("/api/formation/" + id_etab);

          case 7:
            request = _context3.sent;
            response = request.data;
            _context3.next = 13;
            break;

          case 11:
            $("#annee").html("").select2();
            $("#promotion").html("").select2();

          case 13:
            $("#formation").html(response).select2();

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#formation").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_formation, responseAnnee, responsePromotion, requestPromotion, requestAnnee;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_formation = $(this).val();
            table.columns().search("");
            responseAnnee = "";
            responsePromotion = "";

            if (!(id_formation != "")) {
              _context4.next = 16;
              break;
            }

            table.columns(1).search(id_formation).draw();
            _context4.next = 8;
            return axios.get("/api/promotion/" + id_formation);

          case 8:
            requestPromotion = _context4.sent;
            responsePromotion = requestPromotion.data;
            _context4.next = 12;
            return axios.get("/api/annee/" + id_formation);

          case 12:
            requestAnnee = _context4.sent;
            responseAnnee = requestAnnee.data;
            _context4.next = 17;
            break;

          case 16:
            table.columns(0).search($("#etablissement").val()).draw();

          case 17:
            $("#annee").html(responseAnnee).select2();
            $("#promotion").html(responsePromotion).select2();

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#promotion").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            table.columns().search("");

            if ($(this).val() != "") {
              if ($("#annee").val() != "") {
                table.columns(3).search($("#annee").val());
              }

              table.columns(2).search($(this).val()).draw();
            } else {
              table.columns(1).search($("#formation").val()).draw();
            }

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#annee").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            table.columns().search("");

            if ($(this).val() != "") {
              table.columns(3).search($(this).val());
            }

            table.columns(2).search($("#promotion").val()).draw();

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("body").on("click", "#datatables_gestion_inscription tbody tr", function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idInscription.indexOf(input.attr("id"));
      idInscription.splice(index, 1);
    } else {
      input.prop("checked", true);
      idInscription.push(input.attr("id"));
    }
  });
  $("body").on("dblclick", "#datatables_gestion_inscription tbody tr", function () {
    // const input = $(this).find("input");
    if ($(this).hasClass("active_databales")) {
      $(this).removeClass("active_databales");
      id_inscription = null;
    } else {
      $("#datatables_gestion_inscription tbody tr").removeClass("active_databales");
      $(this).addClass("active_databales");
      id_inscription = $(this).attr("id");
      getStatutInscription();
    }
  });

  var getFrais = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios.get("/inscription/gestion/frais/" + id_inscription);

            case 3:
              request = _context7.sent;
              _context7.next = 6;
              return request.data;

            case 6:
              data = _context7.sent;
              facture_exist = 1;
              $("#frais").html(data.list).select2();
              $("#code-facture").html(data.codefacture);
              _context7.next = 19;
              break;

            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](0);
              message = _context7.t0.response.data;
              facture_exist = false;
              Toast.fire({
                icon: "error",
                title: "Facture Introuvable!"
              });
              return _context7.abrupt("return");

            case 19:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 12]]);
    }));

    return function getFrais() {
      return _ref7.apply(this, arguments);
    };
  }();

  var getInscriptionInfos = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      var _icon, request, data, message;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _icon = $("#frais-modal i");

              _icon.removeClass("fa-money-bill-alt").addClass("fa-spinner fa-spin");

              _context8.next = 5;
              return axios.get("/inscription/gestion/info/" + id_inscription);

            case 5:
              request = _context8.sent;
              _context8.next = 8;
              return request.data;

            case 8:
              data = _context8.sent;
              $(".etudiant_info").html(data);

              _icon.addClass("fa-money-bill-alt").removeClass("fa-spinner fa-spin");

              $("#frais_inscription-modal").modal("show");
              _context8.next = 20;
              break;

            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](0);
              message = _context8.t0.response.data;
              console.log(_context8.t0, _context8.t0.response);
              Toast.fire({
                icon: "error",
                title: "Some Error"
              });
              icon.addClass("fa-money-bill-alt").removeClass("fa-spinner fa-spin");

            case 20:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 14]]);
    }));

    return function getInscriptionInfos() {
      return _ref8.apply(this, arguments);
    };
  }();

  $("#frais-modal").on("click", function () {
    if (!id_inscription) {
      Toast.fire({
        icon: "error",
        title: "Veuillez selection une ligne!"
      });
      return;
    } // if(!facture_exist){
    //     Toast.fire({
    //       icon: 'error',
    //       title: 'Facture Introuvable!',
    //     })
    //     return;
    // }


    getFrais();
    getInscriptionInfos();
  });
  $("input[type=radio][name=organ]").on("change", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var request;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();

              if (!(this.value == 0)) {
                _context9.next = 10;
                break;
              }

              _context9.next = 4;
              return axios.get("/api/getorganismepasPayant");

            case 4:
              request = _context9.sent;
              response = request.data;
              $(".select-organ #org").html(response).select2();
              $(".select-organ").css("display", "block");
              _context9.next = 12;
              break;

            case 10:
              $(".select-organ #org").html("");
              $(".select-organ").css("display", "none");

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    return function (_x) {
      return _ref9.apply(this, arguments);
    };
  }());
  $("#add_frais_gestion").on("click", function () {
    var fraisId = $("#frais").find(":selected").val();

    if (fraisId != "") {
      var fraisText = $("#frais").find(":selected").text();
      var prix = $("#montant").val();
      var ice = $("#ice").val();
      var organ = $(".select-organ #org").find(":selected").text();
      var organisme_id = $(".select-organ #org").val();

      if (!$.isNumeric(fraisId) || prix == "") {
        return;
      }

      if ($("input[name='organ']:checked").val() == 1) {
        organisme_id = 7;
        organ = "Payant";
      } else if (organisme_id == "") {
        return;
      }

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
  $("body").on("click", ".delete_frais", function () {
    var _this = this;

    var index = frais.findIndex(function (frais) {
      return frais.index == $(_this).attr("id");
    });
    frais.splice(index, 1);
    rawFrais();
  });

  var rawFrais = function rawFrais() {
    var html = "";
    frais.map(function (f, i) {
      html += "\n            <tr>\n                <td>".concat(i + 1, "</td>\n                <td>").concat(f.designation, "</td>\n                <td>").concat(f.montant, "</td>\n                <td>").concat(f.ice, "</td>\n                <td>").concat(f.organisme, "</td>\n                <td><button class='delete_frais btn btn-danger'  id='").concat(f.index, "'><i class='fa fa-trash' ></i></button></td>\n            </tr>\n        ");
    }); // console.log(html);

    $(".table_frais_inscription").html(html);
  };

  $("#save_frais_gestion").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var formData, modalAlert, icon, request, _response, message;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            formData = new FormData();
            formData.append("frais", JSON.stringify(frais)); // formData.append("organisme", $("#organisme").val())

            modalAlert = $("#frais_inscription-modal .modal-body .alert");
            modalAlert.remove();
            icon = $("#save_frais_gestion i");
            icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
            _context10.prev = 6;
            _context10.next = 9;
            return axios.post("/inscription/gestion/addfrais/" + id_inscription, formData);

          case 9:
            request = _context10.sent;
            _response = request.data;
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>Bien Enregistre</p>\n              </div>");
            icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
            $(".table_frais_inscription").empty();
            frais = [];
            window.open("/inscription/gestion/facture/" + _response, "_blank");
            table.ajax.reload(null, false);
            _context10.next = 26;
            break;

          case 19:
            _context10.prev = 19;
            _context10.t0 = _context10["catch"](6);
            message = _context10.t0.response.data;
            console.log(_context10.t0, _context10.t0.response);
            modalAlert.remove();
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
            icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");

          case 26:
            setTimeout(function () {
              $("#frais_inscription-modal .modal-body .alert").remove();
            }, 3000);

          case 27:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[6, 19]]);
  })));
  $("#statut-modal").on("click", function () {
    if (!id_inscription) {
      Toast.fire({
        icon: "error",
        title: "Veuillez selection une ligne!"
      });
      return;
    }

    $("#statut_modal .modal-body .alert").remove();
    $("#statut_modal").modal("show");
  });
  $("#statut_save").on("submit", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var formData, modalAlert, icon, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#statut_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#statut_save .btn i");
              icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
              _context11.prev = 6;
              _context11.next = 9;
              return axios.post("/inscription/gestion/updatestatut/" + id_inscription, formData);

            case 9:
              request = _context11.sent;
              _response2 = request.data;
              $("#statut_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response2, "</p>\n              </div>"));
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
              $("#annee_inscription, #promotion_inscription").empty();
              table.ajax.reload(null, false);
              _context11.next = 24;
              break;

            case 17:
              _context11.prev = 17;
              _context11.t0 = _context11["catch"](6);
              message = _context11.t0.response.data;
              console.log(_context11.t0, _context11.t0.response);
              modalAlert.remove();
              $("#statut_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this, [[6, 17]]);
    }));

    return function (_x2) {
      return _ref11.apply(this, arguments);
    };
  }());
  $("body").on("click", "#extraction", function () {
    window.open("/inscription/gestion/extraction_ins", "_blank");
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-9e73f9","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-c22831"], () => (__webpack_exec__("./assets/components/inscription/gestioninscription.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWNyQkssY0FBQUEsVUFkcUIsR0FjVkwsT0FBTyxDQUFDQyxJQWRFO0FBZTNCM0IsY0FBQUEsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0RixPQUEvQixtRUFFZTdELFVBRmY7QUFLQVQsY0FBQUEsSUFBSSxDQUFDSixRQUFMLENBQWMsaUJBQWQsRUFBaUNLLFdBQWpDLENBQTZDLHFCQUE3QztBQUNBdkIsY0FBQUEsQ0FBQyxDQUFDLDRDQUFELENBQUQsQ0FBZ0Q2RixLQUFoRDtBQUNBMUYsY0FBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVd5RixNQUFYLENBQWtCLElBQWxCLEVBQXdCLEtBQXhCO0FBdEIyQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCckJsRSxjQUFBQSxPQXhCcUIsR0F3QlgsY0FBTUMsUUFBTixDQUFlSixJQXhCSjtBQXlCM0JLLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBbUIsY0FBTUYsUUFBekI7QUFDQTBELGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNBMUYsY0FBQUEsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0RixPQUEvQiw2Q0FDcUM5RCxPQURyQztBQUdBUixjQUFBQSxJQUFJLENBQUNKLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0ssV0FBakMsQ0FBNkMscUJBQTdDOztBQTlCMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQ0F2QixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQyxFQUFWLENBQWEsT0FBYixFQUFzQixhQUF0QixFQUFxQyxZQUFZO0FBQy9DMEQsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVkscUNBQVosRUFBbUQsUUFBbkQ7QUFDRCxHQUZEO0FBR0QsQ0FsWEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pbnNjcmlwdGlvbi9nZXN0aW9uaW5zY3JpcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICB0b2FzdDogdHJ1ZSxcclxuICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXHJcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gIHRpbWVyOiAzMDAwLFxyXG4gIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBTd2FsLnN0b3BUaW1lcik7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcclxuICB9LFxyXG59KTtcclxubGV0IGlkX2luc2NyaXB0aW9uID0gZmFsc2U7XHJcbmxldCBpZEluc2NyaXB0aW9uID0gW107XHJcbmxldCBmcmFpcyA9IFtdO1xyXG5sZXQgZmFjdHVyZV9leGlzdCA9IGZhbHNlO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHRhYmxlID0gJChcIiNkYXRhdGFibGVzX2dlc3Rpb25faW5zY3JpcHRpb25cIikuRGF0YVRhYmxlKHtcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgXSxcclxuICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICBhamF4OiBcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2xpc3RcIixcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZEluc2NyaXB0aW9uLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2luc2NyaXB0aW9uKS5hZGRDbGFzcyhcImFjdGl2ZV9kYXRhYmFsZXNcIik7XHJcbiAgICB9LFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGdldFN0YXR1dEluc2NyaXB0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjc3RhdHV0LW1vZGFsIGlcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2tcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9nZXRzdGF0dXQvXCIgKyBpZF9pbnNjcmlwdGlvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiI3N0YXR1dF9pbnNjcmlwdGlvblwiKS5odG1sKGRhdGEpLnNlbGVjdDIoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiU29tZSBFcnJvclwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVja1wiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICB9O1xyXG4gICQoXCIjZnJhaXNcIikub24oXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgJChcIiNtb250YW50XCIpLnZhbCgkKFwiI2ZyYWlzXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikuZGF0YShcImZyYWlzXCIpKTtcclxuICB9KTtcclxuICBjb25zdCBnZXRPcmdhbmlzbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9vcmdhbmlzbWVcIik7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjb3JnYW5pc21lXCIpLmh0bWwoZGF0YSkuc2VsZWN0MigpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJTb21lIEVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZ2V0T3JnYW5pc21lKCk7XHJcbiAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gXCJcIjtcclxuICAgIGlmIChpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZm9ybWF0aW9uL1wiICsgaWRfZXRhYik7XHJcbiAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIiNhbm5lZVwiKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgJChcIiNwcm9tb3Rpb25cIikuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICB9XHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgfSk7XHJcbiAgJChcIiNmb3JtYXRpb25cIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICBsZXQgcmVzcG9uc2VBbm5lZSA9IFwiXCI7XHJcbiAgICBsZXQgcmVzcG9uc2VQcm9tb3Rpb24gPSBcIlwiO1xyXG4gICAgaWYgKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0UHJvbW90aW9uID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIFwiL2FwaS9wcm9tb3Rpb24vXCIgKyBpZF9mb3JtYXRpb25cclxuICAgICAgKTtcclxuICAgICAgcmVzcG9uc2VQcm9tb3Rpb24gPSByZXF1ZXN0UHJvbW90aW9uLmRhdGE7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3RBbm5lZSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvYW5uZWUvXCIgKyBpZF9mb3JtYXRpb24pO1xyXG4gICAgICByZXNwb25zZUFubmVlID0gcmVxdWVzdEFubmVlLmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgIH1cclxuICAgICQoXCIjYW5uZWVcIikuaHRtbChyZXNwb25zZUFubmVlKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5odG1sKHJlc3BvbnNlUHJvbW90aW9uKS5zZWxlY3QyKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjcHJvbW90aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgIGlmICgkKFwiI2FubmVlXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI2FubmVlXCIpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaCgkKHRoaXMpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YWJsZS5jb2x1bW5zKDEpLnNlYXJjaCgkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjYW5uZWVcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgdGFibGUuY29sdW1ucygzKS5zZWFyY2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICB9XHJcbiAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3Byb21vdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcclxuICAgIFwiY2xpY2tcIixcclxuICAgIFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbiB0Ym9keSB0clwiLFxyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICBpZiAoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSkge1xyXG4gICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGlkSW5zY3JpcHRpb24uaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIGlkSW5zY3JpcHRpb24uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICBpZEluc2NyaXB0aW9uLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICk7XHJcbiAgJChcImJvZHlcIikub24oXHJcbiAgICBcImRibGNsaWNrXCIsXHJcbiAgICBcIiNkYXRhdGFibGVzX2dlc3Rpb25faW5zY3JpcHRpb24gdGJvZHkgdHJcIixcclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuXHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlX2RhdGFiYWxlc1wiKSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVfZGF0YWJhbGVzXCIpO1xyXG4gICAgICAgIGlkX2luc2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbiB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgIFwiYWN0aXZlX2RhdGFiYWxlc1wiXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlX2RhdGFiYWxlc1wiKTtcclxuICAgICAgICBpZF9pbnNjcmlwdGlvbiA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gICAgICAgIGdldFN0YXR1dEluc2NyaXB0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG4gIGNvbnN0IGdldEZyYWlzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2ZyYWlzL1wiICsgaWRfaW5zY3JpcHRpb25cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgZmFjdHVyZV9leGlzdCA9IDE7XHJcbiAgICAgICQoXCIjZnJhaXNcIikuaHRtbChkYXRhLmxpc3QpLnNlbGVjdDIoKTtcclxuICAgICAgJChcIiNjb2RlLWZhY3R1cmVcIikuaHRtbChkYXRhLmNvZGVmYWN0dXJlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBmYWN0dXJlX2V4aXN0ID0gZmFsc2U7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJGYWN0dXJlIEludHJvdXZhYmxlIVwiLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0SW5zY3JpcHRpb25JbmZvcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI2ZyYWlzLW1vZGFsIGlcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1tb25leS1iaWxsLWFsdFwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2luZm8vXCIgKyBpZF9pbnNjcmlwdGlvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiLmV0dWRpYW50X2luZm9cIikuaHRtbChkYXRhKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLW1vbmV5LWJpbGwtYWx0XCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiU29tZSBFcnJvclwiLFxyXG4gICAgICB9KTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLW1vbmV5LWJpbGwtYWx0XCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgJChcIiNmcmFpcy1tb2RhbFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICghaWRfaW5zY3JpcHRpb24pIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBpZighZmFjdHVyZV9leGlzdCl7XHJcbiAgICAvLyAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAvLyAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgLy8gICAgICAgdGl0bGU6ICdGYWN0dXJlIEludHJvdXZhYmxlIScsXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICByZXR1cm47XHJcbiAgICAvLyB9XHJcbiAgICBnZXRGcmFpcygpO1xyXG4gICAgZ2V0SW5zY3JpcHRpb25JbmZvcygpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1vcmdhbl1cIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnZhbHVlID09IDApIHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZ2V0b3JnYW5pc21lcGFzUGF5YW50XCIpO1xyXG4gICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIi5zZWxlY3Qtb3JnYW4gI29yZ1wiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICQoXCIuc2VsZWN0LW9yZ2FuXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuc2VsZWN0LW9yZ2FuICNvcmdcIikuaHRtbChcIlwiKTtcclxuICAgICAgJChcIi5zZWxlY3Qtb3JnYW5cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjYWRkX2ZyYWlzX2dlc3Rpb25cIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBsZXQgZnJhaXNJZCA9ICQoXCIjZnJhaXNcIikuZmluZChcIjpzZWxlY3RlZFwiKS52YWwoKTtcclxuICAgIGlmIChmcmFpc0lkICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGZyYWlzVGV4dCA9ICQoXCIjZnJhaXNcIikuZmluZChcIjpzZWxlY3RlZFwiKS50ZXh0KCk7XHJcbiAgICAgIGxldCBwcml4ID0gJChcIiNtb250YW50XCIpLnZhbCgpO1xyXG4gICAgICBsZXQgaWNlID0gJChcIiNpY2VcIikudmFsKCk7XHJcbiAgICAgIGxldCBvcmdhbiA9ICQoXCIuc2VsZWN0LW9yZ2FuICNvcmdcIikuZmluZChcIjpzZWxlY3RlZFwiKS50ZXh0KCk7XHJcbiAgICAgIGxldCBvcmdhbmlzbWVfaWQgPSAkKFwiLnNlbGVjdC1vcmdhbiAjb3JnXCIpLnZhbCgpO1xyXG4gICAgICBpZiAoISQuaXNOdW1lcmljKGZyYWlzSWQpIHx8IHByaXggPT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoJChcImlucHV0W25hbWU9J29yZ2FuJ106Y2hlY2tlZFwiKS52YWwoKSA9PSAxKSB7XHJcbiAgICAgICAgb3JnYW5pc21lX2lkID0gNztcclxuICAgICAgICBvcmdhbiA9IFwiUGF5YW50XCI7XHJcbiAgICAgIH0gZWxzZSBpZiAob3JnYW5pc21lX2lkID09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZnJhaXMucHVzaCh7XHJcbiAgICAgICAgaW5kZXg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAgKyAxKSxcclxuICAgICAgICBpZDogZnJhaXNJZCxcclxuICAgICAgICBkZXNpZ25hdGlvbjogZnJhaXNUZXh0LFxyXG4gICAgICAgIG1vbnRhbnQ6IHByaXgsXHJcbiAgICAgICAgaWNlOiBpY2UsXHJcbiAgICAgICAgb3JnYW5pc21lX2lkOiBvcmdhbmlzbWVfaWQsXHJcbiAgICAgICAgb3JnYW5pc21lOiBvcmdhbixcclxuICAgICAgfSk7XHJcbiAgICAgIHJhd0ZyYWlzKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5kZWxldGVfZnJhaXNcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5kZXggPSBmcmFpcy5maW5kSW5kZXgoKGZyYWlzKSA9PiBmcmFpcy5pbmRleCA9PSAkKHRoaXMpLmF0dHIoXCJpZFwiKSk7XHJcbiAgICBmcmFpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgcmF3RnJhaXMoKTtcclxuICB9KTtcclxuICBjb25zdCByYXdGcmFpcyA9ICgpID0+IHtcclxuICAgIGxldCBodG1sID0gXCJcIjtcclxuICAgIGZyYWlzLm1hcCgoZiwgaSkgPT4ge1xyXG4gICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2YuZGVzaWduYXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2YubW9udGFudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5pY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2Yub3JnYW5pc21lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz0nZGVsZXRlX2ZyYWlzIGJ0biBidG4tZGFuZ2VyJyAgaWQ9JyR7XHJcbiAgICAgICAgICAgICAgICAgIGYuaW5kZXhcclxuICAgICAgICAgICAgICAgIH0nPjxpIGNsYXNzPSdmYSBmYS10cmFzaCcgPjwvaT48L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIGA7XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGh0bWwpO1xyXG4gICAgJChcIi50YWJsZV9mcmFpc19pbnNjcmlwdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gIH07XHJcblxyXG4gICQoXCIjc2F2ZV9mcmFpc19nZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmcmFpc1wiLCBKU09OLnN0cmluZ2lmeShmcmFpcykpO1xyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwib3JnYW5pc21lXCIsICQoXCIjb3JnYW5pc21lXCIpLnZhbCgpKVxyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuXHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjc2F2ZV9mcmFpc19nZXN0aW9uIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vYWRkZnJhaXMvXCIgKyBpZF9pbnNjcmlwdGlvbixcclxuICAgICAgICBmb3JtRGF0YVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+QmllbiBFbnJlZ2lzdHJlPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICQoXCIudGFibGVfZnJhaXNfaW5zY3JpcHRpb25cIikuZW1wdHkoKTtcclxuICAgICAgZnJhaXMgPSBbXTtcclxuICAgICAgd2luZG93Lm9wZW4oXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9mYWN0dXJlL1wiICsgcmVzcG9uc2UsIFwiX2JsYW5rXCIpO1xyXG4gICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJChcIiNzdGF0dXQtbW9kYWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoIWlkX2luc2NyaXB0aW9uKSB7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIVwiLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJChcIiNzdGF0dXRfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgJChcIiNzdGF0dXRfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiI3N0YXR1dF9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjc3RhdHV0X21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuXHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjc3RhdHV0X3NhdmUgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL3VwZGF0ZXN0YXR1dC9cIiArIGlkX2luc2NyaXB0aW9uLFxyXG4gICAgICAgIGZvcm1EYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiI3N0YXR1dF9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgJChcIiNhbm5lZV9pbnNjcmlwdGlvbiwgI3Byb21vdGlvbl9pbnNjcmlwdGlvblwiKS5lbXB0eSgpO1xyXG4gICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiNzdGF0dXRfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjZXh0cmFjdGlvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cub3BlbihcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2V4dHJhY3Rpb25faW5zXCIsIFwiX2JsYW5rXCIpO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX2luc2NyaXB0aW9uIiwiaWRJbnNjcmlwdGlvbiIsImZyYWlzIiwiZmFjdHVyZV9leGlzdCIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInJlc3BvbnNpdmUiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJnZXRTdGF0dXRJbnNjcmlwdGlvbiIsImljb24iLCJyZW1vdmVDbGFzcyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwic2VsZWN0MiIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJmaXJlIiwidGl0bGUiLCJvbiIsInZhbCIsImdldE9yZ2FuaXNtZSIsImlkX2V0YWIiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImlkX2Zvcm1hdGlvbiIsInJlc3BvbnNlQW5uZWUiLCJyZXNwb25zZVByb21vdGlvbiIsInJlcXVlc3RQcm9tb3Rpb24iLCJyZXF1ZXN0QW5uZWUiLCJpbnB1dCIsImlzIiwiaW5kZXgiLCJpbmRleE9mIiwiYXR0ciIsInNwbGljZSIsInB1c2giLCJoYXNDbGFzcyIsImdldEZyYWlzIiwibGlzdCIsImNvZGVmYWN0dXJlIiwiZ2V0SW5zY3JpcHRpb25JbmZvcyIsIm1vZGFsIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImNzcyIsImZyYWlzSWQiLCJmcmFpc1RleHQiLCJ0ZXh0IiwicHJpeCIsImljZSIsIm9yZ2FuIiwib3JnYW5pc21lX2lkIiwiaXNOdW1lcmljIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJkZXNpZ25hdGlvbiIsIm1vbnRhbnQiLCJvcmdhbmlzbWUiLCJyYXdGcmFpcyIsImZpbmRJbmRleCIsIm1hcCIsImYiLCJpIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicG9zdCIsInByZXBlbmQiLCJlbXB0eSIsIndpbmRvdyIsIm9wZW4iLCJyZWxvYWQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==