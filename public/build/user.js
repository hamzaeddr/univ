(self["webpackChunk"] = self["webpackChunk"] || []).push([["user"],{

/***/ "./assets/components/parametre/user.js":
/*!*********************************************!*\
  !*** ./assets/components/parametre/user.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

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
var id_user = false;
var idInscription = [];
var frais = [];
$(document).ready(function () {
  var checkInputIfAllChildAreChecked = function checkInputIfAllChildAreChecked() {
    // console.log($(".sousModules"));
    $(".sousModules").map(function () {
      // console.log($(this).parent().find('.inputOperation').not(':checked'));
      if ($(this).parent().find('.inputOperation').not(':checked').length === 0) {
        $(this).find(".inputSousModule").prop("checked", true);
      }
    });
    $(".modules").map(function () {
      if ($(this).parent().find('.inputSousModule').not(':checked').length === 0) {
        $(this).find(".inputModule").prop("checked", true);
      }
    }); // console.log($('.modules').find(".inputModule").not(':checked'))

    if ($('.modules').find(".inputModule").not(':checked').length === 0) {
      $('.tous').prop("checked", true);
    }
  };

  var table = $("#datatables_gestion_users").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/user/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('body').on('click', '#datatables_gestion_users tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_user = null;
    } else {
      $("#datatables_gestion_users tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_user = $(this).attr('id');
    }
  });
  $("#privillege").on("click", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              $(".privilege input:checkbox").prop("checked", false);
              icon = $("#privillege i");

              if (id_user) {
                _context.next = 6;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context.abrupt("return");

            case 6:
              _context.prev = 6;
              icon.remove('fa-plus').addClass("fa-spinner fa-spin ");
              _context.next = 10;
              return axios.post('/parametre/user/getoperations/' + id_user);

            case 10:
              request = _context.sent;
              response = request.data;
              response.map(function (element) {
                console.log(element);
                $(".buttons ." + element.id).prop("checked", true);
              });
              icon.addClass('fa-plus').removeClass("fa-spinner fa-spin ");
              checkInputIfAllChildAreChecked();
              $("#privillege-modal").modal("show");
              _context.next = 23;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](6);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              icon.addClass('fa-plus').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 18]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $(".Collapsable").on("click", function () {
    $(this).parent().children().toggle();
    $(this).toggle();
  });
  $(".inputSousModule").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var url, sous_module, request, response, message;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sous_module = $(this).attr("data-module");

            if ($(this).is(":checked")) {
              $(this).parent().parent().find(".inputOperation").prop("checked", true);
              url = "/parametre/user/sousmodule/" + sous_module + "/" + id_user + "/add";
            } else {
              $(this).parent().parent().find(".inputOperation").prop("checked", false);
              url = "/parametre/user/sousmodule/" + sous_module + "/" + id_user + "/remove";
            }

            checkInputIfAllChildAreChecked();
            _context2.prev = 3;
            _context2.next = 6;
            return axios.post(url);

          case 6:
            request = _context2.sent;
            response = request.data;
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            message = _context2.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[3, 10]]);
  })));
  $(".inputModule").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var url, module, request, response, message;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            module = $(this).attr("data-id");

            if ($(this).is(":checked")) {
              $(this).parent().parent().find("input:checkbox").prop("checked", true);
              url = "/parametre/user/module/" + module + "/" + id_user + "/add";
            } else {
              $(this).parent().parent().find("input:checkbox").prop("checked", false);
              url = "/parametre/user/module/" + module + "/" + id_user + "/remove";
            }

            checkInputIfAllChildAreChecked();
            _context3.prev = 3;
            _context3.next = 6;
            return axios.post(url);

          case 6:
            request = _context3.sent;
            response = request.data;
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            message = _context3.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[3, 10]]);
  })));
  $(".inputOperation").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var url, operation, request, response, message;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            operation = $(this).attr("data-operation");

            if ($(this).is(":checked")) {
              // $(".inputOperation").parent().parent().find("input:checkbox").prop("checked", true);
              url = "/parametre/user/operation/" + operation + "/" + id_user + "/add";
            } else {
              // $(".inputOperation").parent().parent().find("input:checkbox").prop("checked", false);
              url = "/parametre/user/operation/" + operation + "/" + id_user + "/remove";
            }

            checkInputIfAllChildAreChecked();
            _context4.prev = 3;
            _context4.next = 6;
            return axios.post(url);

          case 6:
            request = _context4.sent;
            response = request.data;
            _context4.next = 14;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](3);
            message = _context4.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[3, 10]]);
  })));
  $(".tous").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var url, request, response, message;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if ($(this).is(":checked")) {
              $(".tous").parent().parent().find("input:checkbox").prop("checked", true);
              url = "/parametre/user/all/" + id_user + "/add";
            } else {
              $(".tous").parent().parent().find("input:checkbox").prop("checked", false); // $(".inputOperation").parent().parent().find("input:checkbox").prop("checked", false);

              url = "/parametre/user/all/" + id_user + "/remove";
            }

            checkInputIfAllChildAreChecked();
            _context5.prev = 2;
            _context5.next = 5;
            return axios.post(url);

          case 5:
            request = _context5.sent;
            response = request.data;
            _context5.next = 13;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            message = _context5.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[2, 9]]);
  })));
  $("body").on("click", ".disable", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id, request, response, message;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = $(this).attr("id");
            _context6.prev = 1;
            _context6.next = 4;
            return axios.post("/parametre/user/active/" + id + "/0");

          case 4:
            request = _context6.sent;
            response = request.data;
            table.ajax.reload();
            _context6.next = 13;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](1);
            message = _context6.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[1, 9]]);
  })));
  $("body").on("click", ".enable", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var id, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = $(this).attr("id");
            _context7.prev = 1;
            _context7.next = 4;
            return axios.post("/parametre/user/active/" + id + "/1");

          case 4:
            request = _context7.sent;
            response = request.data;
            table.ajax.reload();
            _context7.next = 13;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](1);
            message = _context7.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this, [[1, 9]]);
  })));
  $("body").on("click", ".btn_reinitialiser", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var id, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = $(this).attr("id");
            _context8.prev = 1;
            _context8.next = 4;
            return axios.post("/reinitialiser/" + id);

          case 4:
            request = _context8.sent;
            response = request.data;
            table.ajax.reload();
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context8.next = 14;
            break;

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](1);
            message = _context8.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this, [[1, 10]]);
  })));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_map_js"], () => (__webpack_exec__("./assets/components/parametre/user.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQVg2QixHQVduQixhQUFNUCxRQUFOLENBQWVDLElBWEk7QUFZbkNsRCxZQUFBQSxLQUFLLENBQUMyQyxJQUFOLENBQVc7QUFDUEQsY0FBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEUsY0FBQUEsS0FBSyxFQUFFWTtBQUZBLGFBQVg7O0FBWm1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNDO0FBa0JILENBbE9HIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFyYW1ldHJlL3VzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbiAgICB9KVxyXG4gICAgbGV0IGlkX3VzZXIgPSBmYWxzZTtcclxuICAgIGxldCBpZEluc2NyaXB0aW9uID0gW107XHJcbiAgICBsZXQgZnJhaXMgPSBbXTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIGNvbnN0IGNoZWNrSW5wdXRJZkFsbENoaWxkQXJlQ2hlY2tlZCA9ICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkKFwiLnNvdXNNb2R1bGVzXCIpKTtcclxuICAgICAgICAkKFwiLnNvdXNNb2R1bGVzXCIpLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuaW5wdXRPcGVyYXRpb24nKS5ub3QoJzpjaGVja2VkJykpO1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5pbnB1dE9wZXJhdGlvbicpLm5vdCgnOmNoZWNrZWQnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChcIi5pbnB1dFNvdXNNb2R1bGVcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICAgICAgJChcIi5tb2R1bGVzXCIpLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuaW5wdXRTb3VzTW9kdWxlJykubm90KCc6Y2hlY2tlZCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKFwiLmlucHV0TW9kdWxlXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJCgnLm1vZHVsZXMnKS5maW5kKFwiLmlucHV0TW9kdWxlXCIpLm5vdCgnOmNoZWNrZWQnKSlcclxuICAgICAgICBpZigkKCcubW9kdWxlcycpLmZpbmQoXCIuaW5wdXRNb2R1bGVcIikubm90KCc6Y2hlY2tlZCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAkKCcudG91cycpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgXHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl91c2Vyc1wiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9wYXJhbWV0cmUvdXNlci9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25fdXNlcnMgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3VzZXIgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX3VzZXJzIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfdXNlciA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNwcml2aWxsZWdlXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIi5wcml2aWxlZ2UgaW5wdXQ6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3ByaXZpbGxlZ2UgaVwiKTtcclxuICAgICAgICBpZighaWRfdXNlcil7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtcGx1cycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvdXNlci9nZXRvcGVyYXRpb25zLycraWRfdXNlcik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICByZXNwb25zZS5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICQoXCIuYnV0dG9ucyAuXCIrZWxlbWVudC5pZCkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXBsdXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGNoZWNrSW5wdXRJZkFsbENoaWxkQXJlQ2hlY2tlZCgpO1xyXG4gICAgICAgICAgICAkKFwiI3ByaXZpbGxlZ2UtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXBsdXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIuQ29sbGFwc2FibGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oKS50b2dnbGUoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZSgpO1xyXG4gICAgXHJcbiAgICB9KTtcclxuICAgICQoXCIuaW5wdXRTb3VzTW9kdWxlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGxldCB1cmw7XHJcbiAgICAgICAgbGV0IHNvdXNfbW9kdWxlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1tb2R1bGVcIik7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmlucHV0T3BlcmF0aW9uXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB1cmwgPSBcIi9wYXJhbWV0cmUvdXNlci9zb3VzbW9kdWxlL1wiK3NvdXNfbW9kdWxlK1wiL1wiK2lkX3VzZXIrXCIvYWRkXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZChcIi5pbnB1dE9wZXJhdGlvblwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHVybCA9IFwiL3BhcmFtZXRyZS91c2VyL3NvdXNtb2R1bGUvXCIrc291c19tb2R1bGUrXCIvXCIraWRfdXNlcitcIi9yZW1vdmVcIjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrSW5wdXRJZkFsbENoaWxkQXJlQ2hlY2tlZCgpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QodXJsKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIi5pbnB1dE1vZHVsZVwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBsZXQgdXJsO1xyXG4gICAgICAgIGxldCBtb2R1bGUgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWlkXCIpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZChcImlucHV0OmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB1cmwgPSBcIi9wYXJhbWV0cmUvdXNlci9tb2R1bGUvXCIrbW9kdWxlK1wiL1wiK2lkX3VzZXIrXCIvYWRkXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZChcImlucHV0OmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgdXJsID0gXCIvcGFyYW1ldHJlL3VzZXIvbW9kdWxlL1wiK21vZHVsZStcIi9cIitpZF91c2VyK1wiL3JlbW92ZVwiO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2hlY2tJbnB1dElmQWxsQ2hpbGRBcmVDaGVja2VkKCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QodXJsKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIi5pbnB1dE9wZXJhdGlvblwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBsZXQgdXJsO1xyXG4gICAgICAgIGxldCBvcGVyYXRpb24gPSAkKHRoaXMpLmF0dHIoXCJkYXRhLW9wZXJhdGlvblwiKTtcclxuICAgICAgICBpZigkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICAvLyAkKFwiLmlucHV0T3BlcmF0aW9uXCIpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCJpbnB1dDpjaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdXJsID0gXCIvcGFyYW1ldHJlL3VzZXIvb3BlcmF0aW9uL1wiK29wZXJhdGlvbitcIi9cIitpZF91c2VyK1wiL2FkZFwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyAkKFwiLmlucHV0T3BlcmF0aW9uXCIpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCJpbnB1dDpjaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHVybCA9IFwiL3BhcmFtZXRyZS91c2VyL29wZXJhdGlvbi9cIitvcGVyYXRpb24rXCIvXCIraWRfdXNlcitcIi9yZW1vdmVcIjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrSW5wdXRJZkFsbENoaWxkQXJlQ2hlY2tlZCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KHVybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIudG91c1wiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBsZXQgdXJsO1xyXG4gICAgICAgIGlmKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgICQoXCIudG91c1wiKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiaW5wdXQ6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHVybCA9IFwiL3BhcmFtZXRyZS91c2VyL2FsbC9cIitpZF91c2VyK1wiL2FkZFwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKFwiLnRvdXNcIikucGFyZW50KCkucGFyZW50KCkuZmluZChcImlucHV0OmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gJChcIi5pbnB1dE9wZXJhdGlvblwiKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiaW5wdXQ6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB1cmwgPSBcIi9wYXJhbWV0cmUvdXNlci9hbGwvXCIraWRfdXNlcitcIi9yZW1vdmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hlY2tJbnB1dElmQWxsQ2hpbGRBcmVDaGVja2VkKCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QodXJsKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuZGlzYWJsZVwiLGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcGFyYW1ldHJlL3VzZXIvYWN0aXZlL1wiK2lkK1wiLzBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuZW5hYmxlXCIsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcGFyYW1ldHJlL3VzZXIvYWN0aXZlL1wiK2lkK1wiLzFcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5idG5fcmVpbml0aWFsaXNlclwiLGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcmVpbml0aWFsaXNlci9cIitpZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF91c2VyIiwiaWRJbnNjcmlwdGlvbiIsImZyYWlzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjaGVja0lucHV0SWZBbGxDaGlsZEFyZUNoZWNrZWQiLCJtYXAiLCJwYXJlbnQiLCJmaW5kIiwibm90IiwibGVuZ3RoIiwicHJvcCIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJsYW5ndWFnZSIsInVybCIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImljb24iLCJmaXJlIiwidGl0bGUiLCJyZW1vdmUiLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm1vZGFsIiwibWVzc2FnZSIsImNoaWxkcmVuIiwidG9nZ2xlIiwic291c19tb2R1bGUiLCJpcyIsIm1vZHVsZSIsIm9wZXJhdGlvbiIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=