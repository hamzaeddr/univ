(self["webpackChunk"] = self["webpackChunk"] || []).push([["planification"],{

/***/ "./assets/components/planification/planification.js":
/*!**********************************************************!*\
  !*** ./assets/components/planification/planification.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// const Locale = require("./local-all");
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

  var pills = function pills() {
    $('body').on('click', '.nav-pills a', function (e) {
      $(this).tab('show');
    });
  };

  var getModuleBySemestre = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var request;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get('/api/module/' + $('#semestre').val());

            case 2:
              request = _context.sent;
              response = request.data;
              $('.modal-addform_planif #module').html(response).select2();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getModuleBySemestre() {
      return _ref.apply(this, arguments);
    };
  }();

  var edit_groupe = 0;
  var id_semestre = false;
  var niv = 0;
  var currentweek = false;
  var heur_debut = false;
  var heur_fin = false;
  var d = new Date();
  var day = d.getDay();
  var currentDay = false;
  var id_planning = false;
  var alltime = [];
  $('#calendar').fullCalendar({
    lang: "fr",
    customButtons: {
      myCustomButton: {
        text: 'Imprimer',
        click: function click() {
          var currentWeek = moment($('#calendar').fullCalendar('getDate'), "MMDDYYYY").isoWeek();
          var currentDate = moment($('#calendar').fullCalendar('getDate')).format('YYYY-MM-DD');

          if (id_semestre != "") {
            window.open('/planification/planifications/print_planning/' + id_semestre + '/' + niv + '/' + currentWeek + '/' + currentDate, '_blank');
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Merci de Choisir une Semestre!!'
            });
          }
        }
      }
    },
    events: alltime,
    header: {
      left: 'prev,next today myCustomButton',
      center: 'title',
      right: 'month,agendaWeek'
    },
    defaultView: 'agendaWeek',
    editable: true,
    eventLimit: true,
    // allow "more" link when too many events
    selectable: true,
    selectHelper: true,
    navLinks: true,
    height: 450,
    allDaySlot: false,
    locale: "fr",
    firstDay: 1,
    minTime: "08:00:00",
    maxTime: "18:01:00",
    select: function select(start, end, date) {
      if ($('#semestre').val() != "") {
        currentDay = moment(start).format('YYYY-MM-DD');
        currentweek = moment(start, "MMDDYYYY").isoWeek();
        heur_debut = moment(start).format('HH:mm');
        heur_fin = moment(end).format('HH:mm');
        axios.get('/planification/planifications/planification_infos/' + $('#semestre').val()).then(function (success) {
          $('.modal-addform_planif .add_planning').html(success.data);
          $('.modal-addform_planif #h_debut').val(heur_debut);
          $('.modal-addform_planif #h_fin').val(heur_fin);
          $('.modal-addform_planif select').select2();
          getModuleBySemestre();
          $('#addform_planif-modal').modal("show");
          pills();
        })["catch"](function (err) {// console.log(err);
        });
      }
    },
    eventRender: function eventRender(event, element) {
      element.bind('dblclick', function () {
        id_planning = event.id;

        if (id_planning) {
          var formData = new FormData();
          axios.get('/planification/planifications/planification_infos_edit/' + id_planning).then(function (success) {
            $('.modal-updateform_planif .update_planning').html(success.data);
            $('.modal-updateform_planif select').select2();
            $('#updateform_planif-modal').modal("show");
            pills();
          })["catch"](function (err) {// console.log(err);
          });
        }
      });
    },
    eventDrop: function eventDrop(event, delta, revertFunc) {
      edit(event);
    },
    eventResize: function eventResize(event, dayDelta, minuteDelta, revertFunc) {
      // si changement de longueur
      edit(event);
    }
  });
  $("body select").select2(); // $("#nature_seance").select2();

  $("#salle").select2();

  var alltimes = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var request;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.post('/planification/planifications/calendar/' + id_semestre + '/' + niv);

            case 3:
              request = _context2.sent;
              // const request = await axios.post('/planification/planifications/calendar/107/9')
              alltime = request.data;
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
              _context2.next = 14;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime); // console.log(error)
              // Toast.fire({
              //     icon: 'error',
              //     title: 'Some Error!!',
              // })

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function alltimes() {
      return _ref2.apply(this, arguments);
    };
  }(); // alltimes()


  var edit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
      var formData, request;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              start = event.start.format('YYYY-MM-DD HH:mm:ss');

              if (event.end) {
                end = event.end.format('YYYY-MM-DD HH:mm:ss');
              } else {
                end = start;
              }

              id_emptime = event.id;
              formData = new FormData();
              formData.append('start', start);
              formData.append('end', end);
              _context3.prev = 6;
              _context3.next = 9;
              return axios.post('/planification/planifications/planifications_editEventDate/' + id_emptime, formData);

            case 9:
              request = _context3.sent;
              Toast.fire({
                icon: 'success',
                title: request.data
              });
              _context3.next = 18;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](6);
              Toast.fire({
                icon: 'error',
                title: _context3.t0.response.data
              });
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[6, 13]]);
    }));

    return function edit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  $("#etablissement").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context4.next = 7;
              break;
            }

            _context4.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context4.sent;
            response = request.data;

          case 7:
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 10:
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
            response = "";

            if (!(id_formation != "")) {
              _context5.next = 7;
              break;
            }

            _context5.next = 5;
            return axios.get('/api/promotion/' + id_formation);

          case 5:
            request = _context5.sent;
            response = request.data;

          case 7:
            $('#semestre').html('').select2();
            $('#promotion').html(response).select2();

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_promotion, response, request, requestt;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_promotion = $(this).val();
            response = "";
            $('#semestre').html(response).select2();
            $('#niv1').html(response).select2();
            $('#niv2').html(response).select2();
            $('#niv3').html(response).select2();
            niv = 0;

            if (!(id_promotion != "")) {
              _context6.next = 18;
              break;
            }

            _context6.next = 10;
            return axios.get('/api/semestre/' + id_promotion);

          case 10:
            request = _context6.sent;
            semestre = request.data;
            $('#semestre').html(semestre).select2();
            _context6.next = 15;
            return axios.get('/api/niv1/' + id_promotion);

          case 15:
            requestt = _context6.sent;
            niv1 = requestt.data;
            $('#niv1').html(niv1).select2();

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_semestre = $(this).val();

            if (id_semestre != "") {
              alltimes();
            } else {
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
            }

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#niv1").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var niv1, response, request;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            niv1 = $(this).val(); // niv = $(this).val();

            response = "";

            if (!(niv1 != "")) {
              _context8.next = 10;
              break;
            }

            niv = niv1;
            _context8.next = 6;
            return axios.get('/api/niv2/' + niv1);

          case 6:
            request = _context8.sent;
            response = request.data;
            _context8.next = 11;
            break;

          case 10:
            niv = 0; // alltime = [];
            // $('#calendar').fullCalendar('refetchEvents');

          case 11:
            if (id_semestre != "") {
              alltimes();
            } else {
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
            }

            $('#niv3').html("").select2();
            $('#niv2').html(response).select2();

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#niv2").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var niv2, request;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            niv2 = $(this).val();

            if (!(niv2 != "")) {
              _context9.next = 9;
              break;
            }

            niv = niv2;
            _context9.next = 5;
            return axios.get('/api/niv3/' + niv2);

          case 5:
            request = _context9.sent;
            response = request.data;
            _context9.next = 10;
            break;

          case 9:
            niv = $('#niv1').val();

          case 10:
            if (id_semestre != "") {
              alltimes();
            } else {
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
            }

            $('#niv3').html(response).select2();

          case 12:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#niv3").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var niv3;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            niv3 = $(this).val();

            if (niv3 != "") {
              niv = niv3;
            } else {
              niv = $('#niv2').val();
            }

            if (id_semestre != "") {
              alltimes();
            } else {
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
            } // $('#calendar').fullCalendar('refetchEvents');


          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $("body").on('change', '#module', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var id_module, response, request;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id_module = $(this).val();
            response = "";

            if (!(id_module != "")) {
              _context11.next = 7;
              break;
            }

            _context11.next = 5;
            return axios.get('/api/element/' + id_module);

          case 5:
            request = _context11.sent;
            response = request.data;

          case 7:
            $('#element').html(response).select2();

          case 8:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  })));
  $("body").on('change', '#nature_seance', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var id_nature_seance, id_element, request;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            id_nature_seance = $(this).val();
            id_element = $('#element').val();

            if (!(id_element != "" && id_nature_seance != "")) {
              _context12.next = 8;
              break;
            }

            _context12.next = 5;
            return axios.get('/api/enseignantsByProgramme/' + id_element + '/' + id_nature_seance);

          case 5:
            request = _context12.sent;
            response = request.data;
            pills();

          case 8:
            $('#enseignant').html(response).select2();

          case 9:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  })));
  $("body").on('change', '#element', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var id_element, id_nature_seance, response, request;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            id_element = $(this).val();
            id_nature_seance = $('#nature_seance').val();
            response = "";

            if (!(id_element != "" && id_nature_seance != "")) {
              _context13.next = 9;
              break;
            }

            _context13.next = 6;
            return axios.get('/api/enseignantsByProgramme/' + id_element + '/' + id_nature_seance);

          case 6:
            request = _context13.sent;
            response = request.data;
            pills();

          case 9:
            $('#enseignant').html(response).select2();

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  })));
  $("body").on('submit', '.form_add_planning', /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var formData, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();
              formData = new FormData(this);
              formData.append('n_semaine', currentweek);
              formData.append('day', currentDay);
              formData.append('groupe', niv);
              console.log(formData);
              modalAlert = $("#addform_planif-modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".form_add_planning .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context14.prev = 10;
              _context14.next = 13;
              return axios.post('/planification/planifications/planifications_calendar_add', formData);

            case 13:
              request = _context14.sent;
              data = request.data;
              $("#addform_planif-modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              alltimes();
              setTimeout(function () {
                //    $("#addform_planif-modal .modal-body .alert").remove();
                $('#addform_planif-modal').modal("hide");
              }, 3000);
              _context14.next = 27;
              break;

            case 21:
              _context14.prev = 21;
              _context14.t0 = _context14["catch"](10);
              message = _context14.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#addform_planif-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 27:
              setTimeout(function () {
                $("#addform_planif-modal .modal-body .alert").remove();
              }, 3000);

            case 28:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this, [[10, 21]]);
    }));

    return function (_x2) {
      return _ref14.apply(this, arguments);
    };
  }());
  $("body").on('submit', '.form_update_planning', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var formData, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e.preventDefault();
              formData = new FormData(this);
              formData.append('edit_groupe', edit_groupe); ////////////

              modalAlert = $("#updateform_planif-modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".form_update_planning .btn_update_planning i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context15.prev = 7;
              _context15.next = 10;
              return axios.post('/planification/planifications/planifications_calendar_edit/' + id_planning, formData);

            case 10:
              request = _context15.sent;
              data = request.data;
              $("#updateform_planif-modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              alltimes();
              setTimeout(function () {
                $("#updateform_planif-modal .modal-body .alert").remove();
                $('#updateform_planif-modal').modal("hide");
              }, 4000);
              _context15.next = 24;
              break;

            case 18:
              _context15.prev = 18;
              _context15.t0 = _context15["catch"](7);
              message = _context15.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#updateform_planif-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this, [[7, 18]]);
    }));

    return function (_x3) {
      return _ref15.apply(this, arguments);
    };
  }());
  $('body').on('click', '#planning_delete', /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
      var res, icon, request, _response, message;

      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              e.preventDefault();

              if (!id_planning) {
                _context16.next = 22;
                break;
              }

              res = confirm('Vous voulez vraiment supprimer cette enregistrement ?');

              if (!(res == 1)) {
                _context16.next = 22;
                break;
              }

              icon = $("#planning_enregistre .update_planning i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context16.prev = 6;
              _context16.next = 9;
              return axios.post('/planification/planifications/delete_planning/' + id_planning);

            case 9:
              request = _context16.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: _response
              });
              alltimes();
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              _context16.next = 21;
              break;

            case 16:
              _context16.prev = 16;
              _context16.t0 = _context16["catch"](6);
              message = _context16.t0.response.data;
              Toast.fire({
                icon: 'success',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 21:
              setTimeout(function () {
                $('#updateform_planif-modal').modal("hide");
              }, 1000);

            case 22:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[6, 16]]);
    }));

    return function (_x4) {
      return _ref16.apply(this, arguments);
    };
  }());
  $("body").on('click', '#import', /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              e.preventDefault();
              $('#import_en_masse').modal("show");

            case 2:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }));

    return function (_x5) {
      return _ref17.apply(this, arguments);
    };
  }());
  $('body').on('click', '#planning_canvas', function () {
    window.open('/planification/planifications/planning_canvas', '_blank');
  });
  $("#import_planning_save").on("submit", /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e) {
      var formData, modalAlert, icon, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#import_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#planning_enregistre i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context18.prev = 6;
              _context18.next = 9;
              return axios.post('/planification/planifications/import', formData);

            case 9:
              request = _context18.sent;
              _response2 = request.data;
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>".concat(_response2, "</p>\n                </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              _context18.next = 22;
              break;

            case 15:
              _context18.prev = 15;
              _context18.t0 = _context18["catch"](6);
              message = _context18.t0.response.data;
              console.log(_context18.t0, _context18.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
              setTimeout(function () {
                $("#import_en_masse .modal-body .alert").remove();
              }, 4000);

            case 23:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this, [[6, 15]]);
    }));

    return function (_x6) {
      return _ref18.apply(this, arguments);
    };
  }());
  $("body").on('click', '#generer', /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e) {
      var res, formData, icon, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              e.preventDefault();

              if (id_semestre) {
                _context19.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Vous devez choisir Semestre et Niveau!!'
              });
              return _context19.abrupt("return");

            case 4:
              //////
              // let crntday = moment($('#calendar').fullCalendar('getDate')).format('YYYY-MM-DD')
              res = confirm('Vous voulez Vraiment Générer les planifications de cette semaine ?');

              if (!(res == 1)) {
                _context19.next = 25;
                break;
              }

              currentweek = moment($('#calendar').fullCalendar('getDate'), "MMDDYYYY").isoWeek();
              formData = new FormData();
              formData.append('nsemaine', currentweek); // formData.append('crntday',crntday)

              icon = $("#generer i");
              icon.removeClass('fab fa-get-pocket').addClass("fas fa-spinner fa-spin");
              _context19.prev = 11;
              _context19.next = 14;
              return axios.post('/planification/planifications/generer_planning/' + id_semestre + '/' + niv, formData);

            case 14:
              request = _context19.sent;
              // const request = await axios.post('/planification/planifications/generer_planning/107/9', formData);
              _response3 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response3
              });
              icon.addClass('fab fa-get-pocket').removeClass("fas fa-spinner fa-spin ");
              _context19.next = 25;
              break;

            case 20:
              _context19.prev = 20;
              _context19.t0 = _context19["catch"](11);
              message = _context19.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fab fa-get-pocket').removeClass("fas fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, null, [[11, 20]]);
    }));

    return function (_x7) {
      return _ref19.apply(this, arguments);
    };
  }());
  $("body").on("click", '#seance_absence', function (e) {
    e.preventDefault();

    if (!id_planning) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Selectionner une Seance'
      });
      return;
    }

    window.open('/planification/planifications/GetAbsenceByGroupe/' + id_planning, '_blank');
  });
  $("body").on("click", '#fiche_sequence', function (e) {
    e.preventDefault();

    if (!id_planning) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Selectionner une Seance'
      });
      return;
    }

    window.open('/planification/planifications/Getsequence/' + id_planning, '_blank');
  });
  $("body").on('change', "#niveau1", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
    var niveau1, response, request;
    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            niveau1 = $(this).val(); // niv = $(this).val();

            response = "";

            if (!(niveau1 != "")) {
              _context20.next = 10;
              break;
            }

            edit_groupe = niveau1;
            _context20.next = 6;
            return axios.get('/api/niv2/' + niveau1);

          case 6:
            request = _context20.sent;
            response = request.data;
            _context20.next = 11;
            break;

          case 10:
            edit_groupe = 0;

          case 11:
            $('#niveau3').html("").select2();
            $('#niveau2').html(response).select2();

          case 13:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, this);
  })));
  $("body").on('change', "#niveau2", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
    var niveau2, request;
    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            niveau2 = $(this).val();

            if (!(niveau2 != "")) {
              _context21.next = 9;
              break;
            }

            edit_groupe = niveau2;
            _context21.next = 5;
            return axios.get('/api/niv3/' + niveau2);

          case 5:
            request = _context21.sent;
            response = request.data;
            _context21.next = 10;
            break;

          case 9:
            edit_groupe = $('#niveau2').val();

          case 10:
            $('#niveau3').html(response).select2();

          case 11:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, this);
  })));
  $("body").on('change', "#niveau3", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
    var niveau3;
    return regeneratorRuntime.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            niveau3 = $(this).val();

            if (niveau3 != "") {
              edit_groupe = niveau3;
            } else {
              edit_groupe = $('#niveau2').val();
            }

          case 2:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, this);
  })));
}); // const allLocales = require("../includes/local-all");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var Function = global.Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var un$DateToString = uncurryThis(DatePrototype[TO_STRING]);
var getTime = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? un$DateToString(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/planification/planification.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmlmaWNhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVc7QUFDckJDLElBQUFBLEtBQUssRUFBRSxJQURjO0FBRXJCQyxJQUFBQSxRQUFRLEVBQUUsU0FGVztBQUdyQkMsSUFBQUEsaUJBQWlCLEVBQUUsS0FIRTtBQUlyQkMsSUFBQUEsS0FBSyxFQUFFLElBSmM7QUFLckJDLElBQUFBLGdCQUFnQixFQUFFLElBTEc7QUFNckJDLElBQUFBLE9BQU8sRUFBRSxpQkFBQ0wsS0FBRCxFQUFXO0FBQ2hCQSxNQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDUixJQUFJLENBQUNTLFNBQTFDO0FBQ0FQLE1BQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1UsV0FBMUM7QUFDSDtBQVRvQixHQUFYLENBQWQ7O0FBV0EsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQmYsSUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVZ0IsRUFBVixDQUFhLE9BQWIsRUFBcUIsY0FBckIsRUFBcUMsVUFBVUMsQ0FBVixFQUFhO0FBQzlDakIsTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsR0FBUixDQUFZLE1BQVo7QUFDSCxLQUZEO0FBR0gsR0FKRDs7QUFLQSxNQUFNQyxtQkFBbUI7QUFBQSx1RUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNGQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxpQkFBZXJCLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXNCLEdBQWYsRUFBekIsQ0FERTs7QUFBQTtBQUNsQkMsY0FBQUEsT0FEa0I7QUFFeEJDLGNBQUFBLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxJQUFuQjtBQUNBekIsY0FBQUEsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUMwQixJQUFuQyxDQUF3Q0YsUUFBeEMsRUFBa0RHLE9BQWxEOztBQUh3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQlIsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQU1BLE1BQUlTLFdBQVcsR0FBRyxDQUFsQjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxLQUFsQjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxDQUFWO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEtBQWxCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLEtBQWpCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFDQSxNQUFNQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixFQUFWO0FBQ0EsTUFBSUMsR0FBRyxHQUFHRixDQUFDLENBQUNHLE1BQUYsRUFBVjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxLQUFqQjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxLQUFsQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxFQUFkO0FBQ0F4QyxFQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWV5QyxZQUFmLENBQTRCO0FBQ3hCQyxJQUFBQSxJQUFJLEVBQUUsSUFEa0I7QUFFeEJDLElBQUFBLGFBQWEsRUFBRTtBQUNYQyxNQUFBQSxjQUFjLEVBQUU7QUFDWkMsUUFBQUEsSUFBSSxFQUFFLFVBRE07QUFFWkMsUUFBQUEsS0FBSyxFQUFFLGlCQUFZO0FBQ2YsY0FBSUMsV0FBVyxHQUFHQyxNQUFNLENBQUNoRCxDQUFDLENBQUMsV0FBRCxDQUFELENBQWV5QyxZQUFmLENBQTRCLFNBQTVCLENBQUQsRUFBeUMsVUFBekMsQ0FBTixDQUEyRFEsT0FBM0QsRUFBbEI7QUFDQSxjQUFJQyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ2hELENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXlDLFlBQWYsQ0FBNEIsU0FBNUIsQ0FBRCxDQUFOLENBQStDVSxNQUEvQyxDQUFzRCxZQUF0RCxDQUFsQjs7QUFDQSxjQUFHdEIsV0FBVyxJQUFJLEVBQWxCLEVBQXFCO0FBQ2pCdUIsWUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksa0RBQWdEeEIsV0FBaEQsR0FBNEQsR0FBNUQsR0FBZ0VDLEdBQWhFLEdBQW9FLEdBQXBFLEdBQXdFaUIsV0FBeEUsR0FBb0YsR0FBcEYsR0FBd0ZHLFdBQXBHLEVBQWlILFFBQWpIO0FBQ0gsV0FGRCxNQUVLO0FBQ0QvQyxZQUFBQSxLQUFLLENBQUNtRCxJQUFOLENBQVc7QUFDUEMsY0FBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsY0FBQUEsS0FBSyxFQUFFO0FBRkEsYUFBWDtBQUlIO0FBQ0o7QUFiVztBQURMLEtBRlM7QUFtQnhCQyxJQUFBQSxNQUFNLEVBQUVqQixPQW5CZ0I7QUFvQnhCa0IsSUFBQUEsTUFBTSxFQUFFO0FBQ0pDLE1BQUFBLElBQUksRUFBRSxnQ0FERjtBQUVKQyxNQUFBQSxNQUFNLEVBQUUsT0FGSjtBQUdKQyxNQUFBQSxLQUFLLEVBQUU7QUFISCxLQXBCZ0I7QUF5QnhCQyxJQUFBQSxXQUFXLEVBQUUsWUF6Qlc7QUEwQnhCQyxJQUFBQSxRQUFRLEVBQUUsSUExQmM7QUEyQnhCQyxJQUFBQSxVQUFVLEVBQUUsSUEzQlk7QUEyQk47QUFDbEJDLElBQUFBLFVBQVUsRUFBRSxJQTVCWTtBQTZCeEJDLElBQUFBLFlBQVksRUFBRSxJQTdCVTtBQThCeEJDLElBQUFBLFFBQVEsRUFBRSxJQTlCYztBQStCeEJDLElBQUFBLE1BQU0sRUFBRSxHQS9CZ0I7QUFnQ3hCQyxJQUFBQSxVQUFVLEVBQUUsS0FoQ1k7QUFpQ3hCQyxJQUFBQSxNQUFNLEVBQUUsSUFqQ2dCO0FBa0N4QkMsSUFBQUEsUUFBUSxFQUFFLENBbENjO0FBbUN4QkMsSUFBQUEsT0FBTyxFQUFFLFVBbkNlO0FBb0N4QkMsSUFBQUEsT0FBTyxFQUFFLFVBcENlO0FBcUN4QkMsSUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxLQUFWLEVBQWlCQyxHQUFqQixFQUFxQkMsSUFBckIsRUFBMkI7QUFDL0IsVUFBRzdFLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXNCLEdBQWYsTUFBd0IsRUFBM0IsRUFBOEI7QUFDMUJnQixRQUFBQSxVQUFVLEdBQUdVLE1BQU0sQ0FBQzJCLEtBQUQsQ0FBTixDQUFjeEIsTUFBZCxDQUFxQixZQUFyQixDQUFiO0FBQ0FwQixRQUFBQSxXQUFXLEdBQUdpQixNQUFNLENBQUMyQixLQUFELEVBQVEsVUFBUixDQUFOLENBQTBCMUIsT0FBMUIsRUFBZDtBQUNBakIsUUFBQUEsVUFBVSxHQUFFZ0IsTUFBTSxDQUFDMkIsS0FBRCxDQUFOLENBQWN4QixNQUFkLENBQXFCLE9BQXJCLENBQVo7QUFDQWxCLFFBQUFBLFFBQVEsR0FBRWUsTUFBTSxDQUFDNEIsR0FBRCxDQUFOLENBQVl6QixNQUFaLENBQW1CLE9BQW5CLENBQVY7QUFDQS9CLFFBQUFBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLHVEQUFxRHJCLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXNCLEdBQWYsRUFBL0QsRUFDQ3dELElBREQsQ0FDTSxVQUFBQyxPQUFPLEVBQUk7QUFDYi9FLFVBQUFBLENBQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDMEIsSUFBekMsQ0FBOENxRCxPQUFPLENBQUN0RCxJQUF0RDtBQUNBekIsVUFBQUEsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NzQixHQUFwQyxDQUF3Q1UsVUFBeEM7QUFDQWhDLFVBQUFBLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDc0IsR0FBbEMsQ0FBc0NXLFFBQXRDO0FBQ0FqQyxVQUFBQSxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQzJCLE9BQWxDO0FBQ0FSLFVBQUFBLG1CQUFtQjtBQUNuQm5CLFVBQUFBLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCZ0YsS0FBM0IsQ0FBaUMsTUFBakM7QUFDQWpFLFVBQUFBLEtBQUs7QUFDUixTQVRELFdBVU8sVUFBQWtFLEdBQUcsRUFBSSxDQUNWO0FBQ0gsU0FaRDtBQWFIO0FBQ0osS0F6RHVCO0FBMER4QkMsSUFBQUEsV0FBVyxFQUFFLHFCQUFVQyxLQUFWLEVBQWlCQyxPQUFqQixFQUEwQjtBQUNuQ0EsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsVUFBYixFQUF5QixZQUFZO0FBQ2pDOUMsUUFBQUEsV0FBVyxHQUFHNEMsS0FBSyxDQUFDRyxFQUFwQjs7QUFDQSxZQUFJL0MsV0FBSixFQUFpQjtBQUNiLGNBQUlnRCxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFmO0FBQ0FwRSxVQUFBQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSw0REFBMERrQixXQUFwRSxFQUNDdUMsSUFERCxDQUNNLFVBQUFDLE9BQU8sRUFBSTtBQUNiL0UsWUFBQUEsQ0FBQyxDQUFDLDJDQUFELENBQUQsQ0FBK0MwQixJQUEvQyxDQUFvRHFELE9BQU8sQ0FBQ3RELElBQTVEO0FBQ0F6QixZQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQzJCLE9BQXJDO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QmdGLEtBQTlCLENBQW9DLE1BQXBDO0FBQ0FqRSxZQUFBQSxLQUFLO0FBQ1IsV0FORCxXQU9PLFVBQUFrRSxHQUFHLEVBQUksQ0FDVjtBQUNILFdBVEQ7QUFVSDtBQUNKLE9BZkQ7QUFnQkgsS0EzRXVCO0FBNEV4QlEsSUFBQUEsU0FBUyxFQUFFLG1CQUFVTixLQUFWLEVBQWlCTyxLQUFqQixFQUF3QkMsVUFBeEIsRUFBb0M7QUFDM0NDLE1BQUFBLElBQUksQ0FBQ1QsS0FBRCxDQUFKO0FBQ0gsS0E5RXVCO0FBK0V4QlUsSUFBQUEsV0FBVyxFQUFFLHFCQUFVVixLQUFWLEVBQWlCVyxRQUFqQixFQUEyQkMsV0FBM0IsRUFBd0NKLFVBQXhDLEVBQW9EO0FBQUU7QUFDL0RDLE1BQUFBLElBQUksQ0FBQ1QsS0FBRCxDQUFKO0FBQ0g7QUFqRnVCLEdBQTVCO0FBbUZBbkYsRUFBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjJCLE9BQWpCLEdBckgwQixDQXNIMUI7O0FBQ0EzQixFQUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVkyQixPQUFaOztBQUNBLE1BQU1xRSxRQUFRO0FBQUEsd0VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVjNUUsS0FBSyxDQUFDNkUsSUFBTixDQUFXLDRDQUEwQ3BFLFdBQTFDLEdBQXNELEdBQXRELEdBQTBEQyxHQUFyRSxDQUZkOztBQUFBO0FBRUhQLGNBQUFBLE9BRkc7QUFHVDtBQUNBaUIsY0FBQUEsT0FBTyxHQUFHakIsT0FBTyxDQUFDRSxJQUFsQjtBQUNBekIsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFleUMsWUFBZixDQUE0QixjQUE1QjtBQUNBekMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFleUMsWUFBZixDQUE0QixnQkFBNUIsRUFBOENELE9BQTlDO0FBTlM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRVEEsY0FBQUEsT0FBTyxHQUFHLEVBQVY7QUFDQXhDLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXlDLFlBQWYsQ0FBNEIsY0FBNUI7QUFDQXpDLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXlDLFlBQWYsQ0FBNEIsZ0JBQTVCLEVBQThDRCxPQUE5QyxFQVZTLENBV1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFmUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSd0QsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkLENBeEgwQixDQTBJMUI7OztBQUNBLE1BQU1KLElBQUk7QUFBQSx3RUFBRyxrQkFBT1QsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVFIsY0FBQUEsS0FBSyxHQUFHUSxLQUFLLENBQUNSLEtBQU4sQ0FBWXhCLE1BQVosQ0FBbUIscUJBQW5CLENBQVI7O0FBQ0Esa0JBQUlnQyxLQUFLLENBQUNQLEdBQVYsRUFBZTtBQUNYQSxnQkFBQUEsR0FBRyxHQUFHTyxLQUFLLENBQUNQLEdBQU4sQ0FBVXpCLE1BQVYsQ0FBaUIscUJBQWpCLENBQU47QUFDSCxlQUZELE1BRU87QUFDSHlCLGdCQUFBQSxHQUFHLEdBQUdELEtBQU47QUFDSDs7QUFDRHVCLGNBQUFBLFVBQVUsR0FBR2YsS0FBSyxDQUFDRyxFQUFuQjtBQUNJQyxjQUFBQSxRQVJLLEdBUU0sSUFBSUMsUUFBSixFQVJOO0FBU1RELGNBQUFBLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQixPQUFoQixFQUF3QnhCLEtBQXhCO0FBQ0FZLGNBQUFBLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQixLQUFoQixFQUFzQnZCLEdBQXRCO0FBVlM7QUFBQTtBQUFBLHFCQVlrQnhELEtBQUssQ0FBQzZFLElBQU4sQ0FBVyxnRUFBOERDLFVBQXpFLEVBQW9GWCxRQUFwRixDQVpsQjs7QUFBQTtBQVlDaEUsY0FBQUEsT0FaRDtBQWFMcEIsY0FBQUEsS0FBSyxDQUFDbUQsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFakMsT0FBTyxDQUFDRTtBQUZSLGVBQVg7QUFiSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCTHRCLGNBQUFBLEtBQUssQ0FBQ21ELElBQU4sQ0FBVztBQUNQQyxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsZ0JBQUFBLEtBQUssRUFBRSxhQUFNaEMsUUFBTixDQUFlQztBQUZmLGVBQVg7QUFJQXpCLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXlDLFlBQWYsQ0FBNEIsY0FBNUI7QUFDQXpDLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXlDLFlBQWYsQ0FBNEIsZ0JBQTVCLEVBQThDRCxPQUE5Qzs7QUF2Qks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBSm9ELElBQUk7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUEwQkE1RixFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjJCLE9BQXBCO0FBQ0EzQixFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmdCLEVBQXBCLENBQXVCLFFBQXZCLHVFQUFpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJvRixZQUFBQSxPQUR1QixHQUNicEcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsR0FBUixFQURhO0FBRXpCRSxZQUFBQSxRQUZ5QixHQUVkLEVBRmM7O0FBQUEsa0JBRzFCNEUsT0FBTyxJQUFJLEVBSGU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJSGhGLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQitFLE9BQTVCLENBSkc7O0FBQUE7QUFJbkI3RSxZQUFBQSxPQUptQjtBQUt6QkMsWUFBQUEsUUFBUSxHQUFHRCxPQUFPLENBQUNFLElBQW5COztBQUx5QjtBQU83QnpCLFlBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBCLElBQWYsQ0FBb0IsRUFBcEIsRUFBd0JDLE9BQXhCO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEIsSUFBaEIsQ0FBcUIsRUFBckIsRUFBeUJDLE9BQXpCO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEIsSUFBaEIsQ0FBcUJGLFFBQXJCLEVBQStCRyxPQUEvQjs7QUFUNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBakM7QUFXQTNCLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JnQixFQUFoQixDQUFtQixRQUFuQix1RUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CcUYsWUFBQUEsWUFEbUIsR0FDSnJHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEdBQVIsRUFESTtBQUVyQkUsWUFBQUEsUUFGcUIsR0FFVixFQUZVOztBQUFBLGtCQUd0QjZFLFlBQVksSUFBSSxFQUhNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUNqRixLQUFLLENBQUNDLEdBQU4sQ0FBVSxvQkFBa0JnRixZQUE1QixDQUpEOztBQUFBO0FBSWY5RSxZQUFBQSxPQUplO0FBS3JCQyxZQUFBQSxRQUFRLEdBQUdELE9BQU8sQ0FBQ0UsSUFBbkI7O0FBTHFCO0FBT3pCekIsWUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEIsSUFBZixDQUFvQixFQUFwQixFQUF3QkMsT0FBeEI7QUFDQTNCLFlBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IwQixJQUFoQixDQUFxQkYsUUFBckIsRUFBK0JHLE9BQS9COztBQVJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3QjtBQVVBM0IsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmdCLEVBQWhCLENBQW1CLFFBQW5CLHVFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJzRixZQUFBQSxZQURtQixHQUNKdEcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsR0FBUixFQURJO0FBRXJCRSxZQUFBQSxRQUZxQixHQUVWLEVBRlU7QUFHekJ4QixZQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWUwQixJQUFmLENBQW9CRixRQUFwQixFQUE4QkcsT0FBOUI7QUFDQTNCLFlBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVzBCLElBQVgsQ0FBZ0JGLFFBQWhCLEVBQTBCRyxPQUExQjtBQUNBM0IsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXMEIsSUFBWCxDQUFnQkYsUUFBaEIsRUFBMEJHLE9BQTFCO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcwQixJQUFYLENBQWdCRixRQUFoQixFQUEwQkcsT0FBMUI7QUFDQUcsWUFBQUEsR0FBRyxHQUFHLENBQU47O0FBUHlCLGtCQVF0QndFLFlBQVksSUFBSSxFQVJNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBU0NsRixLQUFLLENBQUNDLEdBQU4sQ0FBVSxtQkFBaUJpRixZQUEzQixDQVREOztBQUFBO0FBU2YvRSxZQUFBQSxPQVRlO0FBVXJCZ0YsWUFBQUEsUUFBUSxHQUFHaEYsT0FBTyxDQUFDRSxJQUFuQjtBQUNBekIsWUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEIsSUFBZixDQUFvQjZFLFFBQXBCLEVBQThCNUUsT0FBOUI7QUFYcUI7QUFBQSxtQkFZRVAsS0FBSyxDQUFDQyxHQUFOLENBQVUsZUFBYWlGLFlBQXZCLENBWkY7O0FBQUE7QUFZZkUsWUFBQUEsUUFaZTtBQWFyQkMsWUFBQUEsSUFBSSxHQUFHRCxRQUFRLENBQUMvRSxJQUFoQjtBQUNBekIsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXMEIsSUFBWCxDQUFnQitFLElBQWhCLEVBQXNCOUUsT0FBdEI7O0FBZHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCO0FBaUJBM0IsRUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlZ0IsRUFBZixDQUFrQixRQUFsQix1RUFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN4QmEsWUFBQUEsV0FBVyxHQUFHN0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsR0FBUixFQUFkOztBQUNBLGdCQUFHTyxXQUFXLElBQUksRUFBbEIsRUFBcUI7QUFDakJtRSxjQUFBQSxRQUFRO0FBQ1gsYUFGRCxNQUVLO0FBQ0R4RCxjQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNBeEMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFleUMsWUFBZixDQUE0QixjQUE1QjtBQUNBekMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFleUMsWUFBZixDQUE0QixnQkFBNUIsRUFBOENELE9BQTlDO0FBQ0g7O0FBUnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVCO0FBVUF4QyxFQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnQixFQUFYLENBQWMsUUFBZCx1RUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2R5RixZQUFBQSxJQURjLEdBQ1B6RyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQixHQUFSLEVBRE8sRUFFcEI7O0FBQ0lFLFlBQUFBLFFBSGdCLEdBR0wsRUFISzs7QUFBQSxrQkFJakJpRixJQUFJLElBQUksRUFKUztBQUFBO0FBQUE7QUFBQTs7QUFLaEIzRSxZQUFBQSxHQUFHLEdBQUcyRSxJQUFOO0FBTGdCO0FBQUEsbUJBTU1yRixLQUFLLENBQUNDLEdBQU4sQ0FBVSxlQUFhb0YsSUFBdkIsQ0FOTjs7QUFBQTtBQU1WbEYsWUFBQUEsT0FOVTtBQU9oQkMsWUFBQUEsUUFBUSxHQUFHRCxPQUFPLENBQUNFLElBQW5CO0FBUGdCO0FBQUE7O0FBQUE7QUFTaEJLLFlBQUFBLEdBQUcsR0FBRyxDQUFOLENBVGdCLENBVWhCO0FBQ0E7O0FBWGdCO0FBYXBCLGdCQUFHRCxXQUFXLElBQUksRUFBbEIsRUFBcUI7QUFDakJtRSxjQUFBQSxRQUFRO0FBQ1gsYUFGRCxNQUVLO0FBQ0R4RCxjQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNBeEMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFleUMsWUFBZixDQUE0QixjQUE1QjtBQUNBekMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFleUMsWUFBZixDQUE0QixnQkFBNUIsRUFBOENELE9BQTlDO0FBQ0g7O0FBQ0R4QyxZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcwQixJQUFYLENBQWdCLEVBQWhCLEVBQW9CQyxPQUFwQjtBQUNBM0IsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXMEIsSUFBWCxDQUFnQkYsUUFBaEIsRUFBMEJHLE9BQTFCOztBQXJCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7QUF1QkEzQixFQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnQixFQUFYLENBQWMsUUFBZCx1RUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QwRixZQUFBQSxJQURjLEdBQ1AxRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQixHQUFSLEVBRE87O0FBQUEsa0JBRWpCb0YsSUFBSSxJQUFJLEVBRlM7QUFBQTtBQUFBO0FBQUE7O0FBR2hCNUUsWUFBQUEsR0FBRyxHQUFHNEUsSUFBTjtBQUhnQjtBQUFBLG1CQUlNdEYsS0FBSyxDQUFDQyxHQUFOLENBQVUsZUFBYXFGLElBQXZCLENBSk47O0FBQUE7QUFJVm5GLFlBQUFBLE9BSlU7QUFLaEJDLFlBQUFBLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxJQUFuQjtBQUxnQjtBQUFBOztBQUFBO0FBT2hCSyxZQUFBQSxHQUFHLEdBQUc5QixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdzQixHQUFYLEVBQU47O0FBUGdCO0FBU3BCLGdCQUFHTyxXQUFXLElBQUksRUFBbEIsRUFBcUI7QUFDakJtRSxjQUFBQSxRQUFRO0FBQ1gsYUFGRCxNQUVLO0FBQ0R4RCxjQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNBeEMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFleUMsWUFBZixDQUE0QixjQUE1QjtBQUNBekMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFleUMsWUFBZixDQUE0QixnQkFBNUIsRUFBOENELE9BQTlDO0FBQ0g7O0FBQ0R4QyxZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcwQixJQUFYLENBQWdCRixRQUFoQixFQUEwQkcsT0FBMUI7O0FBaEJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4QjtBQWtCQTNCLEVBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dCLEVBQVgsQ0FBYyxRQUFkLHVFQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZDJGLFlBQUFBLElBRGMsR0FDUDNHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEdBQVIsRUFETzs7QUFFcEIsZ0JBQUdxRixJQUFJLElBQUksRUFBWCxFQUFlO0FBQ1g3RSxjQUFBQSxHQUFHLEdBQUc2RSxJQUFOO0FBQ0gsYUFGRCxNQUVLO0FBQ0Q3RSxjQUFBQSxHQUFHLEdBQUc5QixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdzQixHQUFYLEVBQU47QUFDSDs7QUFDRCxnQkFBR08sV0FBVyxJQUFJLEVBQWxCLEVBQXFCO0FBQ2pCbUUsY0FBQUEsUUFBUTtBQUNYLGFBRkQsTUFFSztBQUNEeEQsY0FBQUEsT0FBTyxHQUFHLEVBQVY7QUFDQXhDLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXlDLFlBQWYsQ0FBNEIsY0FBNUI7QUFDQXpDLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXlDLFlBQWYsQ0FBNEIsZ0JBQTVCLEVBQThDRCxPQUE5QztBQUNILGFBYm1CLENBY3BCOzs7QUFkb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7QUFnQkF4QyxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsUUFBYixFQUFzQixTQUF0Qix1RUFBaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCNEYsWUFBQUEsU0FEdUIsR0FDWDVHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEdBQVIsRUFEVztBQUV6QkUsWUFBQUEsUUFGeUIsR0FFZCxFQUZjOztBQUFBLGtCQUcxQm9GLFNBQVMsSUFBSSxFQUhhO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUh4RixLQUFLLENBQUNDLEdBQU4sQ0FBVSxrQkFBZ0J1RixTQUExQixDQUpHOztBQUFBO0FBSW5CckYsWUFBQUEsT0FKbUI7QUFLekJDLFlBQUFBLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxJQUFuQjs7QUFMeUI7QUFPN0J6QixZQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMwQixJQUFkLENBQW1CRixRQUFuQixFQUE2QkcsT0FBN0I7O0FBUDZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWpDO0FBU0EzQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsUUFBYixFQUFzQixnQkFBdEIsdUVBQXdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QjZGLFlBQUFBLGdCQUQ4QixHQUNYN0csQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsR0FBUixFQURXO0FBRWhDd0YsWUFBQUEsVUFGZ0MsR0FFbkI5RyxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNzQixHQUFkLEVBRm1COztBQUFBLGtCQUdqQ3dGLFVBQVUsSUFBSSxFQUFkLElBQW9CRCxnQkFBZ0IsSUFBSSxFQUhQO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSVZ6RixLQUFLLENBQUNDLEdBQU4sQ0FBVSxpQ0FBK0J5RixVQUEvQixHQUEwQyxHQUExQyxHQUE4Q0QsZ0JBQXhELENBSlU7O0FBQUE7QUFJMUJ0RixZQUFBQSxPQUowQjtBQUtoQ0MsWUFBQUEsUUFBUSxHQUFHRCxPQUFPLENBQUNFLElBQW5CO0FBQ0FWLFlBQUFBLEtBQUs7O0FBTjJCO0FBUXBDZixZQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCMEIsSUFBakIsQ0FBc0JGLFFBQXRCLEVBQWdDRyxPQUFoQzs7QUFSb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEM7QUFXQTNCLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLFVBQXRCLHVFQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEI4RixZQUFBQSxVQUR3QixHQUNYOUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsR0FBUixFQURXO0FBRTFCdUYsWUFBQUEsZ0JBRjBCLEdBRVA3RyxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQnNCLEdBQXBCLEVBRk87QUFHMUJFLFlBQUFBLFFBSDBCLEdBR2YsRUFIZTs7QUFBQSxrQkFJM0JzRixVQUFVLElBQUksRUFBZCxJQUFvQkQsZ0JBQWdCLElBQUksRUFKYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUtKekYsS0FBSyxDQUFDQyxHQUFOLENBQVUsaUNBQStCeUYsVUFBL0IsR0FBMEMsR0FBMUMsR0FBOENELGdCQUF4RCxDQUxJOztBQUFBO0FBS3BCdEYsWUFBQUEsT0FMb0I7QUFNMUJDLFlBQUFBLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxJQUFuQjtBQUNBVixZQUFBQSxLQUFLOztBQVBxQjtBQVM5QmYsWUFBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjBCLElBQWpCLENBQXNCRixRQUF0QixFQUFnQ0csT0FBaEM7O0FBVDhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWxDO0FBV0EzQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsUUFBYixFQUFzQixvQkFBdEI7QUFBQSx5RUFBNEMsbUJBQWdCQyxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeENBLGNBQUFBLENBQUMsQ0FBQzhGLGNBQUY7QUFDSXhCLGNBQUFBLFFBRm9DLEdBRXpCLElBQUlDLFFBQUosQ0FBYSxJQUFiLENBRnlCO0FBR3hDRCxjQUFBQSxRQUFRLENBQUNZLE1BQVQsQ0FBZ0IsV0FBaEIsRUFBNkJwRSxXQUE3QjtBQUNBd0QsY0FBQUEsUUFBUSxDQUFDWSxNQUFULENBQWdCLEtBQWhCLEVBQXVCN0QsVUFBdkI7QUFDQWlELGNBQUFBLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQixRQUFoQixFQUEwQnJFLEdBQTFCO0FBQ0FrRixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTFCLFFBQVo7QUFDSTJCLGNBQUFBLFVBUG9DLEdBT3RCbEgsQ0FBQyxDQUFDLDBDQUFELENBUHFCO0FBUXhDa0gsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ001RCxjQUFBQSxJQVRrQyxHQVMzQnZELENBQUMsQ0FBQywyQkFBRCxDQVQwQjtBQVV4Q3VELGNBQUFBLElBQUksQ0FBQzZELFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DQyxRQUFwQyxDQUE2QyxvQkFBN0M7QUFWd0M7QUFBQTtBQUFBLHFCQVliakcsS0FBSyxDQUFDNkUsSUFBTixDQUFXLDJEQUFYLEVBQXVFVixRQUF2RSxDQVphOztBQUFBO0FBWTlCaEUsY0FBQUEsT0FaOEI7QUFhOUJFLGNBQUFBLElBYjhCLEdBYXZCRixPQUFPLENBQUNFLElBYmU7QUFjcEN6QixjQUFBQSxDQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1Q3NILE9BQXZDLDhDQUN3QzdGLElBRHhDO0FBR0E4QixjQUFBQSxJQUFJLENBQUM4RCxRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLG9CQUE3QztBQUNBcEIsY0FBQUEsUUFBUTtBQUNSdUIsY0FBQUEsVUFBVSxDQUFDLFlBQU07QUFDakI7QUFDR3ZILGdCQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQmdGLEtBQTNCLENBQWlDLE1BQWpDO0FBQ0YsZUFIUyxFQUdQLElBSE8sQ0FBVjtBQW5Cb0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF3QjlCd0MsY0FBQUEsT0F4QjhCLEdBd0JwQixjQUFNaEcsUUFBTixDQUFlQyxJQXhCSyxFQXlCcEM7O0FBQ0F5RixjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDQW5ILGNBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDc0gsT0FBdkMsNkNBQ3VDRSxPQUR2QztBQUdBakUsY0FBQUEsSUFBSSxDQUFDOEQsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBOUJvQztBQWdDeENHLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2J2SCxnQkFBQUEsQ0FBQyxDQUFDLDBDQUFELENBQUQsQ0FBOENtSCxNQUE5QztBQUNGLGVBRlEsRUFFTixJQUZNLENBQVY7O0FBaEN3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE1Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9DQW5ILEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLHVCQUF0QjtBQUFBLHlFQUErQyxtQkFBZ0JDLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzQ0EsY0FBQUEsQ0FBQyxDQUFDOEYsY0FBRjtBQUNJeEIsY0FBQUEsUUFGdUMsR0FFNUIsSUFBSUMsUUFBSixDQUFhLElBQWIsQ0FGNEI7QUFHM0NELGNBQUFBLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQixhQUFoQixFQUErQnZFLFdBQS9CLEVBSDJDLENBSTNDOztBQUNJc0YsY0FBQUEsVUFMdUMsR0FLekJsSCxDQUFDLENBQUMsNkNBQUQsQ0FMd0I7QUFNM0NrSCxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDTTVELGNBQUFBLElBUHFDLEdBTzlCdkQsQ0FBQyxDQUFDLDhDQUFELENBUDZCO0FBUTNDdUQsY0FBQUEsSUFBSSxDQUFDNkQsV0FBTCxDQUFpQixpQkFBakIsRUFBb0NDLFFBQXBDLENBQTZDLG9CQUE3QztBQVIyQztBQUFBO0FBQUEscUJBVWhCakcsS0FBSyxDQUFDNkUsSUFBTixDQUFXLGdFQUE4RDFELFdBQXpFLEVBQXFGZ0QsUUFBckYsQ0FWZ0I7O0FBQUE7QUFVakNoRSxjQUFBQSxPQVZpQztBQVdqQ0UsY0FBQUEsSUFYaUMsR0FXMUJGLE9BQU8sQ0FBQ0UsSUFYa0I7QUFZdkN6QixjQUFBQSxDQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ3NILE9BQTFDLDhDQUN3QzdGLElBRHhDO0FBR0E4QixjQUFBQSxJQUFJLENBQUM4RCxRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLG9CQUE3QztBQUNBcEIsY0FBQUEsUUFBUTtBQUNSdUIsY0FBQUEsVUFBVSxDQUFDLFlBQU07QUFDYnZILGdCQUFBQSxDQUFDLENBQUMsNkNBQUQsQ0FBRCxDQUFpRG1ILE1BQWpEO0FBQ0FuSCxnQkFBQUEsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJnRixLQUE5QixDQUFvQyxNQUFwQztBQUNILGVBSFMsRUFHUCxJQUhPLENBQVY7QUFqQnVDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBc0JqQ3dDLGNBQUFBLE9BdEJpQyxHQXNCdkIsY0FBTWhHLFFBQU4sQ0FBZUMsSUF0QlEsRUF1QnZDOztBQUNBeUYsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ0FuSCxjQUFBQSxDQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ3NILE9BQTFDLDZDQUN1Q0UsT0FEdkM7QUFHQWpFLGNBQUFBLElBQUksQ0FBQzhELFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDOztBQTVCdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBL0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQ0FwSCxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsT0FBYixFQUFxQixrQkFBckI7QUFBQSx5RUFBeUMsbUJBQWVDLENBQWY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQ0EsY0FBQUEsQ0FBQyxDQUFDOEYsY0FBRjs7QUFEcUMsbUJBRWxDeEUsV0FGa0M7QUFBQTtBQUFBO0FBQUE7O0FBRzdCa0YsY0FBQUEsR0FINkIsR0FHdkJDLE9BQU8sQ0FBQyx1REFBRCxDQUhnQjs7QUFBQSxvQkFJOUJELEdBQUcsSUFBSSxDQUp1QjtBQUFBO0FBQUE7QUFBQTs7QUFLdkJsRSxjQUFBQSxJQUx1QixHQUtoQnZELENBQUMsQ0FBQyx5Q0FBRCxDQUxlO0FBTTdCdUQsY0FBQUEsSUFBSSxDQUFDNkQsV0FBTCxDQUFpQixpQkFBakIsRUFBb0NDLFFBQXBDLENBQTZDLG9CQUE3QztBQU42QjtBQUFBO0FBQUEscUJBUUhqRyxLQUFLLENBQUM2RSxJQUFOLENBQVcsbURBQWlEMUQsV0FBNUQsQ0FSRzs7QUFBQTtBQVFuQmhCLGNBQUFBLE9BUm1CO0FBU25CQyxjQUFBQSxTQVRtQixHQVNSRCxPQUFPLENBQUNFLElBVEE7QUFVekJ0QixjQUFBQSxLQUFLLENBQUNtRCxJQUFOLENBQVc7QUFDUEMsZ0JBQUFBLElBQUksRUFBRSxTQURDO0FBRVBDLGdCQUFBQSxLQUFLLEVBQUVoQztBQUZBLGVBQVg7QUFJQXdFLGNBQUFBLFFBQVE7QUFDUnpDLGNBQUFBLElBQUksQ0FBQzhELFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDO0FBZnlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUJuQkksY0FBQUEsT0FqQm1CLEdBaUJULGNBQU1oRyxRQUFOLENBQWVDLElBakJOO0FBa0J6QnRCLGNBQUFBLEtBQUssQ0FBQ21ELElBQU4sQ0FBVztBQUNQQyxnQkFBQUEsSUFBSSxFQUFFLFNBREM7QUFFUEMsZ0JBQUFBLEtBQUssRUFBRWdFO0FBRkEsZUFBWDtBQUlBakUsY0FBQUEsSUFBSSxDQUFDOEQsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBdEJ5QjtBQXdCN0JHLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2J2SCxnQkFBQUEsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJnRixLQUE5QixDQUFvQyxNQUFwQztBQUNILGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBeEI2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF6Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStCQWhGLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLFNBQXJCO0FBQUEseUVBQWdDLG1CQUFnQkMsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM1QkEsY0FBQUEsQ0FBQyxDQUFDOEYsY0FBRjtBQUNBL0csY0FBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JnRixLQUF0QixDQUE0QixNQUE1Qjs7QUFGNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQWhGLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLGtCQUFyQixFQUF5QyxZQUFXO0FBQ2hEb0MsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksK0NBQVosRUFBNkQsUUFBN0Q7QUFDSCxHQUZEO0FBSUFyRCxFQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQmdCLEVBQTNCLENBQThCLFFBQTlCO0FBQUEseUVBQXdDLG1CQUFlQyxDQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcENBLGNBQUFBLENBQUMsQ0FBQzhGLGNBQUY7QUFDSXhCLGNBQUFBLFFBRmdDLEdBRXJCLElBQUlDLFFBQUosQ0FBYXhGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxDQUFSLENBQWIsQ0FGcUI7QUFHaENrSCxjQUFBQSxVQUhnQyxHQUduQmxILENBQUMsQ0FBQyxxQ0FBRCxDQUhrQjtBQUlwQ2tILGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNNNUQsY0FBQUEsSUFMOEIsR0FLdkJ2RCxDQUFDLENBQUMsd0JBQUQsQ0FMc0I7QUFNcEN1RCxjQUFBQSxJQUFJLENBQUM2RCxXQUFMLENBQWlCLGlCQUFqQixFQUFvQ0MsUUFBcEMsQ0FBNkMsb0JBQTdDO0FBTm9DO0FBQUE7QUFBQSxxQkFRVmpHLEtBQUssQ0FBQzZFLElBQU4sQ0FBVyxzQ0FBWCxFQUFtRFYsUUFBbkQsQ0FSVTs7QUFBQTtBQVExQmhFLGNBQUFBLE9BUjBCO0FBUzFCQyxjQUFBQSxVQVQwQixHQVNmRCxPQUFPLENBQUNFLElBVE87QUFVaEN6QixjQUFBQSxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ3NILE9BQWxDLHVFQUVhOUYsVUFGYjtBQUtBK0IsY0FBQUEsSUFBSSxDQUFDOEQsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7QUFmZ0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQjFCSSxjQUFBQSxPQWpCMEIsR0FpQmhCLGNBQU1oRyxRQUFOLENBQWVDLElBakJDO0FBa0JoQ3VGLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBbUIsY0FBTXpGLFFBQXpCO0FBQ0EwRixjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDQW5ILGNBQUFBLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDc0gsT0FBbEMsNkNBQ3VDRSxPQUR2QztBQUdBakUsY0FBQUEsSUFBSSxDQUFDOEQsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBdkJnQztBQXlCcENHLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2J2SCxnQkFBQUEsQ0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNtSCxNQUF6QztBQUNILGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBekJvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF4Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThCQW5ILEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLFVBQXJCO0FBQUEseUVBQWlDLG1CQUFnQkMsQ0FBaEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3QkEsY0FBQUEsQ0FBQyxDQUFDOEYsY0FBRjs7QUFENkIsa0JBRXpCbEYsV0FGeUI7QUFBQTtBQUFBO0FBQUE7O0FBR3pCMUIsY0FBQUEsS0FBSyxDQUFDbUQsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFO0FBRkEsZUFBWDtBQUh5Qjs7QUFBQTtBQVM3QjtBQUNBO0FBQ0lpRSxjQUFBQSxHQVh5QixHQVduQkMsT0FBTyxDQUFDLG9FQUFELENBWFk7O0FBQUEsb0JBWXpCRCxHQUFHLElBQUksQ0Faa0I7QUFBQTtBQUFBO0FBQUE7O0FBYXpCMUYsY0FBQUEsV0FBVyxHQUFHaUIsTUFBTSxDQUFDaEQsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFleUMsWUFBZixDQUE0QixTQUE1QixDQUFELEVBQXlDLFVBQXpDLENBQU4sQ0FBMkRRLE9BQTNELEVBQWQ7QUFDSXNDLGNBQUFBLFFBZHFCLEdBY1YsSUFBSUMsUUFBSixFQWRVO0FBZXpCRCxjQUFBQSxRQUFRLENBQUNZLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBMkJwRSxXQUEzQixFQWZ5QixDQWdCekI7O0FBQ013QixjQUFBQSxJQWpCbUIsR0FpQlp2RCxDQUFDLENBQUMsWUFBRCxDQWpCVztBQWtCekJ1RCxjQUFBQSxJQUFJLENBQUM2RCxXQUFMLENBQWlCLG1CQUFqQixFQUFzQ0MsUUFBdEMsQ0FBK0Msd0JBQS9DO0FBbEJ5QjtBQUFBO0FBQUEscUJBb0JDakcsS0FBSyxDQUFDNkUsSUFBTixDQUFXLG9EQUFrRHBFLFdBQWxELEdBQThELEdBQTlELEdBQWtFQyxHQUE3RSxFQUFrRnlELFFBQWxGLENBcEJEOztBQUFBO0FBb0JmaEUsY0FBQUEsT0FwQmU7QUFxQnJCO0FBQ01DLGNBQUFBLFVBdEJlLEdBc0JKRCxPQUFPLENBQUNFLElBdEJKO0FBdUJyQnRCLGNBQUFBLEtBQUssQ0FBQ21ELElBQU4sQ0FBVztBQUNQQyxnQkFBQUEsSUFBSSxFQUFFLFNBREM7QUFFUEMsZ0JBQUFBLEtBQUssRUFBRWhDO0FBRkEsZUFBWDtBQUlBK0IsY0FBQUEsSUFBSSxDQUFDOEQsUUFBTCxDQUFjLG1CQUFkLEVBQW1DRCxXQUFuQyxDQUErQyx5QkFBL0M7QUEzQnFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBNkJmSSxjQUFBQSxPQTdCZSxHQTZCTCxjQUFNaEcsUUFBTixDQUFlQyxJQTdCVjtBQThCckJ0QixjQUFBQSxLQUFLLENBQUNtRCxJQUFOLENBQVc7QUFDUEMsZ0JBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGdCQUFBQSxLQUFLLEVBQUVnRTtBQUZBLGVBQVg7QUFJQWpFLGNBQUFBLElBQUksQ0FBQzhELFFBQUwsQ0FBYyxtQkFBZCxFQUFtQ0QsV0FBbkMsQ0FBK0MseUJBQS9DOztBQWxDcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBakM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1Q0FwSCxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsT0FBYixFQUFzQixpQkFBdEIsRUFBeUMsVUFBVUMsQ0FBVixFQUFhO0FBQ2xEQSxJQUFBQSxDQUFDLENBQUM4RixjQUFGOztBQUNBLFFBQUcsQ0FBQ3hFLFdBQUosRUFBZ0I7QUFDWnBDLE1BQUFBLEtBQUssQ0FBQ21ELElBQU4sQ0FBVztBQUNQQyxRQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxRQUFBQSxLQUFLLEVBQUU7QUFGQSxPQUFYO0FBSUE7QUFDSDs7QUFDREosSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksc0RBQW9EZCxXQUFoRSxFQUE2RSxRQUE3RTtBQUNILEdBVkQ7QUFZQXZDLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLGlCQUF0QixFQUF5QyxVQUFVQyxDQUFWLEVBQWE7QUFDbERBLElBQUFBLENBQUMsQ0FBQzhGLGNBQUY7O0FBQ0EsUUFBRyxDQUFDeEUsV0FBSixFQUFnQjtBQUNacEMsTUFBQUEsS0FBSyxDQUFDbUQsSUFBTixDQUFXO0FBQ1BDLFFBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLFFBQUFBLEtBQUssRUFBRTtBQUZBLE9BQVg7QUFJQTtBQUNIOztBQUNESixJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSwrQ0FBNkNkLFdBQXpELEVBQXNFLFFBQXRFO0FBQ0gsR0FWRDtBQVlBdkMsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVZ0IsRUFBVixDQUFhLFFBQWIsRUFBc0IsVUFBdEIsdUVBQWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN4QjJHLFlBQUFBLE9BRHdCLEdBQ2QzSCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQixHQUFSLEVBRGMsRUFFOUI7O0FBQ0lFLFlBQUFBLFFBSDBCLEdBR2YsRUFIZTs7QUFBQSxrQkFJM0JtRyxPQUFPLElBQUksRUFKZ0I7QUFBQTtBQUFBO0FBQUE7O0FBSzFCL0YsWUFBQUEsV0FBVyxHQUFHK0YsT0FBZDtBQUwwQjtBQUFBLG1CQU1KdkcsS0FBSyxDQUFDQyxHQUFOLENBQVUsZUFBYXNHLE9BQXZCLENBTkk7O0FBQUE7QUFNcEJwRyxZQUFBQSxPQU5vQjtBQU8xQkMsWUFBQUEsUUFBUSxHQUFHRCxPQUFPLENBQUNFLElBQW5CO0FBUDBCO0FBQUE7O0FBQUE7QUFTMUJHLFlBQUFBLFdBQVcsR0FBRyxDQUFkOztBQVQwQjtBQVc5QjVCLFlBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYzBCLElBQWQsQ0FBbUIsRUFBbkIsRUFBdUJDLE9BQXZCO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMwQixJQUFkLENBQW1CRixRQUFuQixFQUE2QkcsT0FBN0I7O0FBWjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWxDO0FBY0EzQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsUUFBYixFQUFzQixVQUF0Qix1RUFBa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hCNEcsWUFBQUEsT0FEd0IsR0FDZDVILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEdBQVIsRUFEYzs7QUFBQSxrQkFFM0JzRyxPQUFPLElBQUksRUFGZ0I7QUFBQTtBQUFBO0FBQUE7O0FBRzFCaEcsWUFBQUEsV0FBVyxHQUFHZ0csT0FBZDtBQUgwQjtBQUFBLG1CQUlKeEcsS0FBSyxDQUFDQyxHQUFOLENBQVUsZUFBYXVHLE9BQXZCLENBSkk7O0FBQUE7QUFJcEJyRyxZQUFBQSxPQUpvQjtBQUsxQkMsWUFBQUEsUUFBUSxHQUFHRCxPQUFPLENBQUNFLElBQW5CO0FBTDBCO0FBQUE7O0FBQUE7QUFPMUJHLFlBQUFBLFdBQVcsR0FBRzVCLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3NCLEdBQWQsRUFBZDs7QUFQMEI7QUFTOUJ0QixZQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMwQixJQUFkLENBQW1CRixRQUFuQixFQUE2QkcsT0FBN0I7O0FBVDhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWxDO0FBV0EzQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsUUFBYixFQUFzQixVQUF0Qix1RUFBa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hCNkcsWUFBQUEsT0FEd0IsR0FDZDdILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEdBQVIsRUFEYzs7QUFFOUIsZ0JBQUd1RyxPQUFPLElBQUksRUFBZCxFQUFrQjtBQUNkakcsY0FBQUEsV0FBVyxHQUFHaUcsT0FBZDtBQUNILGFBRkQsTUFFSztBQUNEakcsY0FBQUEsV0FBVyxHQUFHNUIsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjc0IsR0FBZCxFQUFkO0FBQ0g7O0FBTjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWxDO0FBUUgsQ0F4aEJELEdBMGhCQTs7Ozs7Ozs7Ozs7QUM1aEJhO0FBQ2IsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsYUFBYSxtQkFBTyxDQUFDLDJGQUErQjtBQUNwRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hDQSxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLDJFQUF1Qjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUNqQkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMscUZBQTRCOztBQUUvQztBQUNBO0FBQ0EsSUFBSSxpQ0FBaUM7QUFDckM7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1BELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IExvY2FsZSA9IHJlcXVpcmUoXCIuL2xvY2FsLWFsbFwiKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gICAgICAgIHRvYXN0OiB0cnVlLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgICAgIHRpbWVyOiAzMDAwLFxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QgcGlsbHMgPSAoKSA9PiB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcubmF2LXBpbGxzIGEnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJCh0aGlzKS50YWIoJ3Nob3cnKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgZ2V0TW9kdWxlQnlTZW1lc3RyZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJyskKCcjc2VtZXN0cmUnKS52YWwoKSk7XG4gICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiAjbW9kdWxlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH1cbiAgICBcbiAgICBsZXQgZWRpdF9ncm91cGUgPSAwO1xuICAgIGxldCBpZF9zZW1lc3RyZSA9IGZhbHNlO1xuICAgIGxldCBuaXYgPSAwO1xuICAgIGxldCBjdXJyZW50d2VlayA9IGZhbHNlO1xuICAgIGxldCBoZXVyX2RlYnV0ID0gZmFsc2U7XG4gICAgbGV0IGhldXJfZmluID0gZmFsc2U7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRheSA9IGQuZ2V0RGF5KCk7XG4gICAgbGV0IGN1cnJlbnREYXkgPSBmYWxzZTtcbiAgICBsZXQgaWRfcGxhbm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgYWxsdGltZSA9IFtdO1xuICAgICQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcih7XG4gICAgICAgIGxhbmc6IFwiZnJcIixcbiAgICAgICAgY3VzdG9tQnV0dG9uczoge1xuICAgICAgICAgICAgbXlDdXN0b21CdXR0b246IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSW1wcmltZXInLFxuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50V2VlayA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSwgXCJNTUREWVlZWVwiKS5pc29XZWVrKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3ByaW50X3BsYW5uaW5nLycraWRfc2VtZXN0cmUrJy8nK25pdisnLycrY3VycmVudFdlZWsrJy8nK2N1cnJlbnREYXRlLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgdW5lIFNlbWVzdHJlISEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czogYWxsdGltZSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5IG15Q3VzdG9tQnV0dG9uJyxcbiAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnbW9udGgsYWdlbmRhV2VlaydcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdFZpZXc6ICdhZ2VuZGFXZWVrJyxcbiAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgIGV2ZW50TGltaXQ6IHRydWUsIC8vIGFsbG93IFwibW9yZVwiIGxpbmsgd2hlbiB0b28gbWFueSBldmVudHNcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgc2VsZWN0SGVscGVyOiB0cnVlLFxuICAgICAgICBuYXZMaW5rczogdHJ1ZSxcbiAgICAgICAgaGVpZ2h0OiA0NTAsXG4gICAgICAgIGFsbERheVNsb3Q6IGZhbHNlLFxuICAgICAgICBsb2NhbGU6IFwiZnJcIixcbiAgICAgICAgZmlyc3REYXk6IDEsXG4gICAgICAgIG1pblRpbWU6IFwiMDg6MDA6MDBcIixcbiAgICAgICAgbWF4VGltZTogXCIxODowMTowMFwiLFxuICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChzdGFydCwgZW5kLGRhdGUpIHtcbiAgICAgICAgICAgIGlmKCQoJyNzZW1lc3RyZScpLnZhbCgpICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnREYXkgPSBtb21lbnQoc3RhcnQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnR3ZWVrID0gbW9tZW50KHN0YXJ0LCBcIk1NRERZWVlZXCIpLmlzb1dlZWsoKTtcbiAgICAgICAgICAgICAgICBoZXVyX2RlYnV0PSBtb21lbnQoc3RhcnQpLmZvcm1hdCgnSEg6bW0nKVxuICAgICAgICAgICAgICAgIGhldXJfZmluPSBtb21lbnQoZW5kKS5mb3JtYXQoJ0hIOm1tJylcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25faW5mb3MvJyskKCcjc2VtZXN0cmUnKS52YWwoKSlcbiAgICAgICAgICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmIC5hZGRfcGxhbm5pbmcnKS5odG1sKHN1Y2Nlc3MuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiAjaF9kZWJ1dCcpLnZhbChoZXVyX2RlYnV0KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmICNoX2ZpbicpLnZhbChoZXVyX2Zpbik7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiBzZWxlY3QnKS5zZWxlY3QyKCk7XG4gICAgICAgICAgICAgICAgICAgIGdldE1vZHVsZUJ5U2VtZXN0cmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2FkZGZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJzaG93XCIpO1xuICAgICAgICAgICAgICAgICAgICBwaWxscygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBldmVudFJlbmRlcjogZnVuY3Rpb24gKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2RibGNsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlkX3BsYW5uaW5nID0gZXZlbnQuaWQ7XG4gICAgICAgICAgICAgICAgaWYgKGlkX3BsYW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25faW5mb3NfZWRpdC8nK2lkX3BsYW5uaW5nKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC11cGRhdGVmb3JtX3BsYW5pZiAudXBkYXRlX3BsYW5uaW5nJykuaHRtbChzdWNjZXNzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLXVwZGF0ZWZvcm1fcGxhbmlmIHNlbGVjdCcpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpbGxzKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBldmVudERyb3A6IGZ1bmN0aW9uIChldmVudCwgZGVsdGEsIHJldmVydEZ1bmMpIHsgXG4gICAgICAgICAgICBlZGl0KGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRSZXNpemU6IGZ1bmN0aW9uIChldmVudCwgZGF5RGVsdGEsIG1pbnV0ZURlbHRhLCByZXZlcnRGdW5jKSB7IC8vIHNpIGNoYW5nZW1lbnQgZGUgbG9uZ3VldXJcbiAgICAgICAgICAgIGVkaXQoZXZlbnQpO1xuICAgICAgICB9LFxuICAgIH0pO1xuICAgICQoXCJib2R5IHNlbGVjdFwiKS5zZWxlY3QyKCk7XG4gICAgLy8gJChcIiNuYXR1cmVfc2VhbmNlXCIpLnNlbGVjdDIoKTtcbiAgICAkKFwiI3NhbGxlXCIpLnNlbGVjdDIoKTtcbiAgICBjb25zdCBhbGx0aW1lcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9jYWxlbmRhci8nK2lkX3NlbWVzdHJlKycvJytuaXYpXG4gICAgICAgICAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvY2FsZW5kYXIvMTA3LzknKVxuICAgICAgICAgICAgYWxsdGltZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBhbGx0aW1lID0gW107XG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAvLyBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgIC8vICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAnU29tZSBFcnJvciEhJyxcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYWxsdGltZXMoKVxuICAgIGNvbnN0IGVkaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgc3RhcnQgPSBldmVudC5zdGFydC5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcbiAgICAgICAgaWYgKGV2ZW50LmVuZCkge1xuICAgICAgICAgICAgZW5kID0gZXZlbnQuZW5kLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kID0gc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWRfZW1wdGltZSA9IGV2ZW50LmlkO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdGFydCcsc3RhcnQpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW5kJyxlbmQpXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbnNfZWRpdEV2ZW50RGF0ZS8nK2lkX2VtcHRpbWUsZm9ybURhdGEpXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlcXVlc3QuZGF0YSxcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogZXJyb3IucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxuICAgICAgICB9XG4gICAgfVxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKCk7XG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfVxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKCcnKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICAgICAgJCgnI25pdjEnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNuaXYyJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgICAgICAkKCcjbml2MycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICAgICAgbml2ID0gMDtcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xuICAgICAgICAgICAgc2VtZXN0cmUgPSByZXF1ZXN0LmRhdGEgICAgICAgICAgICBcbiAgICAgICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoc2VtZXN0cmUpLnNlbGVjdDIoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3R0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjEvJytpZF9wcm9tb3Rpb24pO1xuICAgICAgICAgICAgbml2MSA9IHJlcXVlc3R0LmRhdGEgIFxuICAgICAgICAgICAgJCgnI25pdjEnKS5odG1sKG5pdjEpLnNlbGVjdDIoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XG4gICAgICAgICAgICBhbGx0aW1lcygpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcIiNuaXYxXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3Qgbml2MSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIC8vIG5pdiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYobml2MSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuaXYgPSBuaXYxO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYyLycrbml2MSk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG5pdiA9IDA7XG4gICAgICAgICAgICAvLyBhbGx0aW1lID0gW107XG4gICAgICAgICAgICAvLyAkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ3JlZmV0Y2hFdmVudHMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKXtcbiAgICAgICAgICAgIGFsbHRpbWVzKClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGx0aW1lID0gW107XG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxuICAgICAgICB9XG4gICAgICAgICQoJyNuaXYzJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNuaXYyJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNuaXYyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3Qgbml2MiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGlmKG5pdjIgIT0gXCJcIikge1xuICAgICAgICAgICAgbml2ID0gbml2MjtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2My8nK25pdjIpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBuaXYgPSAkKCcjbml2MScpLnZhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xuICAgICAgICAgICAgYWxsdGltZXMoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXG4gICAgICAgIH1cbiAgICAgICAgJCgnI25pdjMnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI25pdjNcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBuaXYzID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgaWYobml2MyAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuaXYgPSBuaXYzO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG5pdiA9ICQoJyNuaXYyJykudmFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XG4gICAgICAgICAgICBhbGx0aW1lcygpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcbiAgICAgICAgfVxuICAgICAgICAvLyAkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ3JlZmV0Y2hFdmVudHMnKTtcbiAgICB9KVxuICAgICQoXCJib2R5XCIpLm9uKCdjaGFuZ2UnLCcjbW9kdWxlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9XG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsJyNuYXR1cmVfc2VhbmNlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX25hdHVyZV9zZWFuY2UgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBsZXQgaWRfZWxlbWVudCA9ICQoJyNlbGVtZW50JykudmFsKCk7XG4gICAgICAgIGlmKGlkX2VsZW1lbnQgIT0gXCJcIiAmJiBpZF9uYXR1cmVfc2VhbmNlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW5zZWlnbmFudHNCeVByb2dyYW1tZS8nK2lkX2VsZW1lbnQrJy8nK2lkX25hdHVyZV9zZWFuY2UpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgICAgIHBpbGxzKClcbiAgICAgICAgfVxuICAgICAgICAkKCcjZW5zZWlnbmFudCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICB9KVxuXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsJyNlbGVtZW50JywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX2VsZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBsZXQgaWRfbmF0dXJlX3NlYW5jZSA9ICQoJyNuYXR1cmVfc2VhbmNlJykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfZWxlbWVudCAhPSBcIlwiICYmIGlkX25hdHVyZV9zZWFuY2UgIT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbnNlaWduYW50c0J5UHJvZ3JhbW1lLycraWRfZWxlbWVudCsnLycraWRfbmF0dXJlX3NlYW5jZSk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICAgICAgcGlsbHMoKVxuICAgICAgICB9XG4gICAgICAgICQoJyNlbnNlaWduYW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsJy5mb3JtX2FkZF9wbGFubmluZycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbl9zZW1haW5lJywgY3VycmVudHdlZWspO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RheScsIGN1cnJlbnREYXkpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZ3JvdXBlJywgbml2KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjYWRkZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBpY29uID0gJChcIi5mb3JtX2FkZF9wbGFubmluZyAuYnRuIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25zX2NhbGVuZGFyX2FkZCcsZm9ybURhdGEpXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXG4gICAgICAgICAgICApOyBcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgYWxsdGltZXMoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAkKFwiI2FkZGZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICQoJyNhZGRmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoXCIjYWRkZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XG4gICAgICAgICB9LCAzMDAwKTtcbiAgICB9KVxuICAgICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCcuZm9ybV91cGRhdGVfcGxhbm5pbmcnLCBhc3luYyBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VkaXRfZ3JvdXBlJywgZWRpdF9ncm91cGUpO1xuICAgICAgICAvLy8vLy8vLy8vLy9cbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiLmZvcm1fdXBkYXRlX3BsYW5uaW5nIC5idG5fdXBkYXRlX3BsYW5uaW5nIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25zX2NhbGVuZGFyX2VkaXQvJytpZF9wbGFubmluZyxmb3JtRGF0YSlcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICAkKFwiI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+JHtkYXRhfTwvZGl2PmBcbiAgICAgICAgICAgICk7IFxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICBhbGx0aW1lcygpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKFwiI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAkKCcjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwnKS5tb2RhbChcImhpZGVcIik7XG4gICAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKFwiI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI3BsYW5uaW5nX2RlbGV0ZScsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihpZF9wbGFubmluZyl7XG4gICAgICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGVucmVnaXN0cmVtZW50ID8nKTtcbiAgICAgICAgICAgIGlmKHJlcyA9PSAxKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNwbGFubmluZ19lbnJlZ2lzdHJlIC51cGRhdGVfcGxhbm5pbmcgaVwiKTtcbiAgICAgICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvZGVsZXRlX3BsYW5uaW5nLycraWRfcGxhbm5pbmcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGFsbHRpbWVzKClcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKCcjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwnKS5tb2RhbChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsJyNpbXBvcnQnLCBhc3luYyBmdW5jdGlvbiAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnI2ltcG9ydF9lbl9tYXNzZScpLm1vZGFsKFwic2hvd1wiKTtcbiAgICB9KVxuICAgIFxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjcGxhbm5pbmdfY2FudmFzJywgZnVuY3Rpb24gKCl7XG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wbGFubmluZ19jYW52YXMnLCAnX2JsYW5rJyk7XG4gICAgfSlcbiAgICBcbiAgICAkKFwiI2ltcG9ydF9wbGFubmluZ19zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3BsYW5uaW5nX2VucmVnaXN0cmUgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvaW1wb3J0JywgZm9ybURhdGEpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgfSlcbiAgICBcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCcjZ2VuZXJlcicsIGFzeW5jIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZighaWRfc2VtZXN0cmUpe1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZvdXMgZGV2ZXogY2hvaXNpciBTZW1lc3RyZSBldCBOaXZlYXUhIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8vLy8vXG4gICAgICAgIC8vIGxldCBjcm50ZGF5ID0gbW9tZW50KCQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcignZ2V0RGF0ZScpKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogVnJhaW1lbnQgR8OpbsOpcmVyIGxlcyBwbGFuaWZpY2F0aW9ucyBkZSBjZXR0ZSBzZW1haW5lID8nKTtcbiAgICAgICAgaWYgKHJlcyA9PSAxKSB7XG4gICAgICAgICAgICBjdXJyZW50d2VlayA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSwgXCJNTUREWVlZWVwiKS5pc29XZWVrKCk7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbnNlbWFpbmUnLGN1cnJlbnR3ZWVrKVxuICAgICAgICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdjcm50ZGF5Jyxjcm50ZGF5KVxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZ2VuZXJlciBpXCIpO1xuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5hZGRDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9nZW5lcmVyX3BsYW5uaW5nLycraWRfc2VtZXN0cmUrJy8nK25pdiwgZm9ybURhdGEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9nZW5lcmVyX3BsYW5uaW5nLzEwNy85JywgZm9ybURhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcjc2VhbmNlX2Fic2VuY2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgU2VsZWN0aW9ubmVyIHVuZSBTZWFuY2UnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cub3BlbignL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvR2V0QWJzZW5jZUJ5R3JvdXBlLycraWRfcGxhbm5pbmcsICdfYmxhbmsnKTtcbiAgICB9KTtcbiAgICBcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcjZmljaGVfc2VxdWVuY2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgU2VsZWN0aW9ubmVyIHVuZSBTZWFuY2UnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cub3BlbignL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvR2V0c2VxdWVuY2UvJytpZF9wbGFubmluZywgJ19ibGFuaycpO1xuICAgIH0pO1xuXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsXCIjbml2ZWF1MVwiLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3Qgbml2ZWF1MSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIC8vIG5pdiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYobml2ZWF1MSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBlZGl0X2dyb3VwZSA9IG5pdmVhdTE7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjIvJytuaXZlYXUxKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZWRpdF9ncm91cGUgPSAwO1xuICAgICAgICB9XG4gICAgICAgICQoJyNuaXZlYXUzJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XG4gICAgICAgICQoJyNuaXZlYXUyJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsXCIjbml2ZWF1MlwiLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3Qgbml2ZWF1MiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGlmKG5pdmVhdTIgIT0gXCJcIikge1xuICAgICAgICAgICAgZWRpdF9ncm91cGUgPSBuaXZlYXUyO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYzLycrbml2ZWF1Mik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGVkaXRfZ3JvdXBlID0gJCgnI25pdmVhdTInKS52YWwoKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjbml2ZWF1MycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcbiAgICB9KVxuICAgICQoXCJib2R5XCIpLm9uKCdjaGFuZ2UnLFwiI25pdmVhdTNcIiwgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IG5pdmVhdTMgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBpZihuaXZlYXUzICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGVkaXRfZ3JvdXBlID0gbml2ZWF1MztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBlZGl0X2dyb3VwZSA9ICQoJyNuaXZlYXUyJykudmFsKCk7XG4gICAgICAgIH1cbiAgICB9KSAgIFxufSlcblxuLy8gY29uc3QgYWxsTG9jYWxlcyA9IHJlcXVpcmUoXCIuLi9pbmNsdWRlcy9sb2NhbC1hbGxcIik7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIWhhc093bihmYWN0b3JpZXMsIGFyZ3NMZW5ndGgpKSB7XG4gICAgZm9yICh2YXIgbGlzdCA9IFtdLCBpID0gMDsgaSA8IGFyZ3NMZW5ndGg7IGkrKykgbGlzdFtpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIGZhY3Rvcmllc1thcmdzTGVuZ3RoXSA9IEZ1bmN0aW9uKCdDLGEnLCAncmV0dXJuIG5ldyBDKCcgKyBqb2luKGxpc3QsICcsJykgKyAnKScpO1xuICB9IHJldHVybiBmYWN0b3JpZXNbYXJnc0xlbmd0aF0oQywgYXJncyk7XG59O1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgdmFyIEYgPSBhQ2FsbGFibGUodGhpcyk7XG4gIHZhciBQcm90b3R5cGUgPSBGLnByb3RvdHlwZTtcbiAgdmFyIHBhcnRBcmdzID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIGJvdW5kKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IGNvbmNhdChwYXJ0QXJncywgYXJyYXlTbGljZShhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoRiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogRi5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KFByb3RvdHlwZSkpIGJvdW5kRnVuY3Rpb24ucHJvdG90eXBlID0gUHJvdG90eXBlO1xuICByZXR1cm4gYm91bmRGdW5jdGlvbjtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIHVuJERhdGVUb1N0cmluZyA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGVbVE9fU1RSSU5HXSk7XG52YXIgZ2V0VGltZSA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGUuZ2V0VGltZSk7XG5cbi8vIGBEYXRlLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoU3RyaW5nKG5ldyBEYXRlKE5hTikpICE9IElOVkFMSURfREFURSkge1xuICByZWRlZmluZShEYXRlUHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUodGhpcyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdW4kRGF0ZVRvU3RyaW5nKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZCcpO1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuJCh7IHRhcmdldDogJ0Z1bmN0aW9uJywgcHJvdG86IHRydWUgfSwge1xuICBiaW5kOiBiaW5kXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsInBpbGxzIiwib24iLCJlIiwidGFiIiwiZ2V0TW9kdWxlQnlTZW1lc3RyZSIsImF4aW9zIiwiZ2V0IiwidmFsIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsImh0bWwiLCJzZWxlY3QyIiwiZWRpdF9ncm91cGUiLCJpZF9zZW1lc3RyZSIsIm5pdiIsImN1cnJlbnR3ZWVrIiwiaGV1cl9kZWJ1dCIsImhldXJfZmluIiwiZCIsIkRhdGUiLCJkYXkiLCJnZXREYXkiLCJjdXJyZW50RGF5IiwiaWRfcGxhbm5pbmciLCJhbGx0aW1lIiwiZnVsbENhbGVuZGFyIiwibGFuZyIsImN1c3RvbUJ1dHRvbnMiLCJteUN1c3RvbUJ1dHRvbiIsInRleHQiLCJjbGljayIsImN1cnJlbnRXZWVrIiwibW9tZW50IiwiaXNvV2VlayIsImN1cnJlbnREYXRlIiwiZm9ybWF0Iiwid2luZG93Iiwib3BlbiIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJldmVudHMiLCJoZWFkZXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJkZWZhdWx0VmlldyIsImVkaXRhYmxlIiwiZXZlbnRMaW1pdCIsInNlbGVjdGFibGUiLCJzZWxlY3RIZWxwZXIiLCJuYXZMaW5rcyIsImhlaWdodCIsImFsbERheVNsb3QiLCJsb2NhbGUiLCJmaXJzdERheSIsIm1pblRpbWUiLCJtYXhUaW1lIiwic2VsZWN0Iiwic3RhcnQiLCJlbmQiLCJkYXRlIiwidGhlbiIsInN1Y2Nlc3MiLCJtb2RhbCIsImVyciIsImV2ZW50UmVuZGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiYmluZCIsImlkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImV2ZW50RHJvcCIsImRlbHRhIiwicmV2ZXJ0RnVuYyIsImVkaXQiLCJldmVudFJlc2l6ZSIsImRheURlbHRhIiwibWludXRlRGVsdGEiLCJhbGx0aW1lcyIsInBvc3QiLCJpZF9lbXB0aW1lIiwiYXBwZW5kIiwiaWRfZXRhYiIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsInNlbWVzdHJlIiwicmVxdWVzdHQiLCJuaXYxIiwibml2MiIsIm5pdjMiLCJpZF9tb2R1bGUiLCJpZF9uYXR1cmVfc2VhbmNlIiwiaWRfZWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm1vZGFsQWxlcnQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicHJlcGVuZCIsInNldFRpbWVvdXQiLCJtZXNzYWdlIiwicmVzIiwiY29uZmlybSIsIm5pdmVhdTEiLCJuaXZlYXUyIiwibml2ZWF1MyJdLCJzb3VyY2VSb290IjoiIn0=