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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQVg2QixHQVduQixhQUFNUCxRQUFOLENBQWVDLElBWEk7QUFZbkNsRCxZQUFBQSxLQUFLLENBQUMyQyxJQUFOLENBQVc7QUFDUEQsY0FBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEUsY0FBQUEsS0FBSyxFQUFFWTtBQUZBLGFBQVg7O0FBWm1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNDO0FBa0JILENBbE9HIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFyYW1ldHJlL3VzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbiAgICB0b2FzdDogdHJ1ZSxcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICB0aW1lcjogMzAwMCxcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxuICAgIH0sXG4gICAgfSlcbiAgICBsZXQgaWRfdXNlciA9IGZhbHNlO1xuICAgIGxldCBpZEluc2NyaXB0aW9uID0gW107XG4gICAgbGV0IGZyYWlzID0gW107XG4gICAgXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcbiAgICBjb25zdCBjaGVja0lucHV0SWZBbGxDaGlsZEFyZUNoZWNrZWQgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQoXCIuc291c01vZHVsZXNcIikpO1xuICAgICAgICAkKFwiLnNvdXNNb2R1bGVzXCIpLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCQodGhpcykucGFyZW50KCkuZmluZCgnLmlucHV0T3BlcmF0aW9uJykubm90KCc6Y2hlY2tlZCcpKTtcbiAgICAgICAgICAgIGlmKCQodGhpcykucGFyZW50KCkuZmluZCgnLmlucHV0T3BlcmF0aW9uJykubm90KCc6Y2hlY2tlZCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChcIi5pbnB1dFNvdXNNb2R1bGVcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgICQoXCIubW9kdWxlc1wiKS5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZigkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5pbnB1dFNvdXNNb2R1bGUnKS5ub3QoJzpjaGVja2VkJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKFwiLmlucHV0TW9kdWxlXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQoJy5tb2R1bGVzJykuZmluZChcIi5pbnB1dE1vZHVsZVwiKS5ub3QoJzpjaGVja2VkJykpXG4gICAgICAgIGlmKCQoJy5tb2R1bGVzJykuZmluZChcIi5pbnB1dE1vZHVsZVwiKS5ub3QoJzpjaGVja2VkJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAkKCcudG91cycpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgIFxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX3VzZXJzXCIpLkRhdGFUYWJsZSh7XG4gICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXG4gICAgICAgIGFqYXg6IFwiL3BhcmFtZXRyZS91c2VyL2xpc3RcIixcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19nZXN0aW9uX3VzZXJzIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XG4gICAgICAgIFxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgIGlkX3VzZXIgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fdXNlcnMgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgICAgIGlkX3VzZXIgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICAkKFwiI3ByaXZpbGxlZ2VcIikub24oXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCIucHJpdmlsZWdlIGlucHV0OmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcHJpdmlsbGVnZSBpXCIpO1xuICAgICAgICBpZighaWRfdXNlcil7XG4gICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1wbHVzJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvdXNlci9nZXRvcGVyYXRpb25zLycraWRfdXNlcik7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAgIHJlc3BvbnNlLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAkKFwiLmJ1dHRvbnMgLlwiK2VsZW1lbnQuaWQpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXBsdXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICBjaGVja0lucHV0SWZBbGxDaGlsZEFyZUNoZWNrZWQoKTtcbiAgICAgICAgICAgICQoXCIjcHJpdmlsbGVnZS1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1wbHVzJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgICQoXCIuQ29sbGFwc2FibGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbigpLnRvZ2dsZSgpO1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZSgpO1xuICAgIFxuICAgIH0pO1xuICAgICQoXCIuaW5wdXRTb3VzTW9kdWxlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBsZXQgdXJsO1xuICAgICAgICBsZXQgc291c19tb2R1bGUgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLW1vZHVsZVwiKTtcbiAgICAgICAgaWYoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKXtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZChcIi5pbnB1dE9wZXJhdGlvblwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHVybCA9IFwiL3BhcmFtZXRyZS91c2VyL3NvdXNtb2R1bGUvXCIrc291c19tb2R1bGUrXCIvXCIraWRfdXNlcitcIi9hZGRcIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIuaW5wdXRPcGVyYXRpb25cIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgdXJsID0gXCIvcGFyYW1ldHJlL3VzZXIvc291c21vZHVsZS9cIitzb3VzX21vZHVsZStcIi9cIitpZF91c2VyK1wiL3JlbW92ZVwiO1xuXG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tJbnB1dElmQWxsQ2hpbGRBcmVDaGVja2VkKClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KHVybCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwiLmlucHV0TW9kdWxlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBsZXQgdXJsO1xuICAgICAgICBsZXQgbW9kdWxlID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgaWYoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKXtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZChcImlucHV0OmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAgICAgdXJsID0gXCIvcGFyYW1ldHJlL3VzZXIvbW9kdWxlL1wiK21vZHVsZStcIi9cIitpZF91c2VyK1wiL2FkZFwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZChcImlucHV0OmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHVybCA9IFwiL3BhcmFtZXRyZS91c2VyL21vZHVsZS9cIittb2R1bGUrXCIvXCIraWRfdXNlcitcIi9yZW1vdmVcIjtcblxuICAgICAgICB9XG4gICAgICAgIGNoZWNrSW5wdXRJZkFsbENoaWxkQXJlQ2hlY2tlZCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QodXJsKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH1cbiAgICB9KVxuICAgICQoXCIuaW5wdXRPcGVyYXRpb25cIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGxldCB1cmw7XG4gICAgICAgIGxldCBvcGVyYXRpb24gPSAkKHRoaXMpLmF0dHIoXCJkYXRhLW9wZXJhdGlvblwiKTtcbiAgICAgICAgaWYoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKXtcbiAgICAgICAgICAgIC8vICQoXCIuaW5wdXRPcGVyYXRpb25cIikucGFyZW50KCkucGFyZW50KCkuZmluZChcImlucHV0OmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAgICAgdXJsID0gXCIvcGFyYW1ldHJlL3VzZXIvb3BlcmF0aW9uL1wiK29wZXJhdGlvbitcIi9cIitpZF91c2VyK1wiL2FkZFwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vICQoXCIuaW5wdXRPcGVyYXRpb25cIikucGFyZW50KCkucGFyZW50KCkuZmluZChcImlucHV0OmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHVybCA9IFwiL3BhcmFtZXRyZS91c2VyL29wZXJhdGlvbi9cIitvcGVyYXRpb24rXCIvXCIraWRfdXNlcitcIi9yZW1vdmVcIjtcblxuICAgICAgICB9XG4gICAgICAgIGNoZWNrSW5wdXRJZkFsbENoaWxkQXJlQ2hlY2tlZCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QodXJsKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH1cbiAgICB9KVxuICAgICQoXCIudG91c1wiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgbGV0IHVybDtcbiAgICAgICAgaWYoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKXtcbiAgICAgICAgICAgICQoXCIudG91c1wiKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiaW5wdXQ6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB1cmwgPSBcIi9wYXJhbWV0cmUvdXNlci9hbGwvXCIraWRfdXNlcitcIi9hZGRcIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKFwiLnRvdXNcIikucGFyZW50KCkucGFyZW50KCkuZmluZChcImlucHV0OmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vICQoXCIuaW5wdXRPcGVyYXRpb25cIikucGFyZW50KCkucGFyZW50KCkuZmluZChcImlucHV0OmNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHVybCA9IFwiL3BhcmFtZXRyZS91c2VyL2FsbC9cIitpZF91c2VyK1wiL3JlbW92ZVwiO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrSW5wdXRJZkFsbENoaWxkQXJlQ2hlY2tlZCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QodXJsKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5kaXNhYmxlXCIsYXN5bmMgZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9wYXJhbWV0cmUvdXNlci9hY3RpdmUvXCIraWQrXCIvMFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmVuYWJsZVwiLCBhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3BhcmFtZXRyZS91c2VyL2FjdGl2ZS9cIitpZCtcIi8xXCIpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuYnRuX3JlaW5pdGlhbGlzZXJcIixhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3JlaW5pdGlhbGlzZXIvXCIraWQpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuXG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfdXNlciIsImlkSW5zY3JpcHRpb24iLCJmcmFpcyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2hlY2tJbnB1dElmQWxsQ2hpbGRBcmVDaGVja2VkIiwibWFwIiwicGFyZW50IiwiZmluZCIsIm5vdCIsImxlbmd0aCIsInByb3AiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwibGFuZ3VhZ2UiLCJ1cmwiLCJvbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImF0dHIiLCJlIiwicHJldmVudERlZmF1bHQiLCJpY29uIiwiZmlyZSIsInRpdGxlIiwicmVtb3ZlIiwiYXhpb3MiLCJwb3N0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJtb2RhbCIsIm1lc3NhZ2UiLCJjaGlsZHJlbiIsInRvZ2dsZSIsInNvdXNfbW9kdWxlIiwiaXMiLCJtb2R1bGUiLCJvcGVyYXRpb24iLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9