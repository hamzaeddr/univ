(self["webpackChunk"] = self["webpackChunk"] || []).push([["extraction_stage"],{

/***/ "./assets/components/assiduite/extraction_stage.js":
/*!*********************************************************!*\
  !*** ./assets/components/assiduite/extraction_stage.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
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
$(document).ready(function () {
  /////////////////////////////////dropdown-situation////////////////////////////
  $("#E_situation").prop("selectedIndex", 1);
  $("#F_situation").prop("selectedIndex", 1);
  $("#P_situation").prop("selectedIndex", 1); ///////////////etablissement//////////

  $("#E_situation").on("change", function () {
    var etablissement = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Formation_aff/" + etablissement,
      success: function success(html) {
        $(".loader2").hide();
        $("#F_situation").html(html);
        $("#F_situation").prop("selectedIndex", 1);
        $.ajax({
          type: "POST",
          url: "/api/Promotion_aff/" + $("#F_situation").val(),
          success: function success(html) {
            $("#P_situation").html(html);
            $("#P_situation").prop("selectedIndex", 1);
            etudiant_situation_affichage($("#P_situation").val());
          },
          error: function error() {
            $(".loader2").hide();
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !'
            });
          }
        });
      },
      error: function error() {
        $(".loader2").hide();
        Toast.fire({
          icon: 'error',
          title: 'Probleme  !'
        });
      }
    });
  }); ///////////////Fomation//////////

  $("#F_situation").on("change", function () {
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function success(html) {
        $(".loader2").hide();
        $("#P_situation").html(html);
        $("#P_situation").prop("selectedIndex", 1);
        etudiant_situation_affichage($("#P_situation").val());
      },
      error: function error() {
        $(".loader2").hide();
        Toast.fire({
          icon: 'error',
          title: 'Probleme  !'
        });
      }
    });
  }); ///////////////Promotion//////////

  $("#P_situation").on("change", function () {
    var promotion = $(this).val();
    etudiant_situation_affichage(promotion);
  }); //////////////////extraction stage////////////////:

  $('#create_extraction_stage').click(function () {
    var to = $('#datetimeFsituation').val();
    var from = $('#datetimeDsituation').val();
    var service = $('#E_situation').val();
    var formation = $('#F_situation').val();
    var promotion = $('#P_situation').val();
    var tou = $('input[name="tous"]:checked').val(); // window.location.href = "{{ path('extraction') }}?To="+to+"&From="+from;

    url = "/api/generate_extraction?To=" + to + "&From=" + from + "&formation=" + formation + "&promotion=" + promotion + "&Service=" + service + "&Tou=" + tou + "&type=stage";
    service;
    window.open(url);
  });
  $('#E_situation').select2();
  $('#F_situation').select2();
  $('#P_situation').select2();
  $('#Et_situation').select2();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/components/assiduite/extraction_stage.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQUQsQ0FBRCxDQUFrQjJCLE9BQWxCO0FBQ0EzQixFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCMkIsT0FBbEI7QUFDQTNCLEVBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIyQixPQUFuQjtBQUNDLENBcEdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXNzaWR1aXRlL2V4dHJhY3Rpb25fc3RhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246IFwidG9wLWVuZFwiLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcclxuICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgU3dhbC5yZXN1bWVUaW1lcik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd24tc2l0dWF0aW9uLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gJChcIiNFX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICQoXCIjRl9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAkKFwiI1Bfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG5cclxuIC8vLy8vLy8vLy8vLy8vL2V0YWJsaXNzZW1lbnQvLy8vLy8vLy8vXHJcblxyXG4gJChcIiNFX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXRhYmxpc3NlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvRm9ybWF0aW9uX2FmZi9cIiArIGV0YWJsaXNzZW1lbnQsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI0Zfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgJChcIiNGX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hcGkvUHJvbW90aW9uX2FmZi9cIiArICQoXCIjRl9zaXR1YXRpb25cIikudmFsKCksXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgICAgIGV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UoJChcIiNQX3NpdHVhdGlvblwiKS52YWwoKSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9Gb21hdGlvbi8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNGX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgZm9ybWF0aW9uLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNQX3NpdHVhdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSgkKFwiI1Bfc2l0dWF0aW9uXCIpLnZhbCgpKTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vL1Byb21vdGlvbi8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNQX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UocHJvbW90aW9uKTtcclxuXHJcbiAgfSk7XHJcbiAgIC8vLy8vLy8vLy8vLy8vLy8vL2V4dHJhY3Rpb24gc3RhZ2UvLy8vLy8vLy8vLy8vLy8vOlxyXG4gJCgnI2NyZWF0ZV9leHRyYWN0aW9uX3N0YWdlJykuY2xpY2soZnVuY3Rpb24oKXsgXHJcbiAgXHJcbiAgICB2YXIgdG8gPSAkKCcjZGF0ZXRpbWVGc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgICB2YXIgZnJvbSA9ICQoJyNkYXRldGltZURzaXR1YXRpb24nKS52YWwoKTtcclxuICAgIHZhciBzZXJ2aWNlID0gJCgnI0Vfc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgICB2YXIgZm9ybWF0aW9uID0gJCgnI0Zfc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgICB2YXIgcHJvbW90aW9uID0gJCgnI1Bfc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgXHJcbiAgXHJcbiAgICB2YXIgdG91ID0gICQoJ2lucHV0W25hbWU9XCJ0b3VzXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwie3sgcGF0aCgnZXh0cmFjdGlvbicpIH19P1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbTtcclxuICAgICAgICAgICB1cmwgPSBcIi9hcGkvZ2VuZXJhdGVfZXh0cmFjdGlvbj9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb20rXCImZm9ybWF0aW9uPVwiK2Zvcm1hdGlvbitcIiZwcm9tb3Rpb249XCIrcHJvbW90aW9uK1wiJlNlcnZpY2U9XCIrc2VydmljZStcIiZUb3U9XCIrdG91K1wiJnR5cGU9c3RhZ2VcIjtcclxuICAgICAgICAgICBzZXJ2aWNlO1xyXG4gICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICAgICAgICAgICBcclxuICBcclxuICAgICAgICAgICAgICB9KTsgIFxyXG4gICAgICAgICAgICAgICQoJyNFX3NpdHVhdGlvbicpLnNlbGVjdDIoKTtcclxuJCgnI0Zfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xyXG4kKCcjUF9zaXR1YXRpb24nKS5zZWxlY3QyKCk7XHJcbiQoJyNFdF9zaXR1YXRpb24nKS5zZWxlY3QyKCk7XHJcbn0pOyAgXHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInByb3AiLCJvbiIsImV0YWJsaXNzZW1lbnQiLCJ2YWwiLCJhamF4IiwidHlwZSIsInVybCIsInN1Y2Nlc3MiLCJodG1sIiwiaGlkZSIsImV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UiLCJlcnJvciIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJmb3JtYXRpb24iLCJwcm9tb3Rpb24iLCJjbGljayIsInRvIiwiZnJvbSIsInNlcnZpY2UiLCJ0b3UiLCJ3aW5kb3ciLCJvcGVuIiwic2VsZWN0MiJdLCJzb3VyY2VSb290IjoiIn0=