(self["webpackChunk"] = self["webpackChunk"] || []).push([["stage"],{

/***/ "./assets/components/assiduite/stage.js":
/*!**********************************************!*\
  !*** ./assets/components/assiduite/stage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

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
  var tableData = [];

  function seanceaffichage(var1, var2, var3) {
    $(".loader").show();
    $.ajax({
      type: "POST",
      url: "/api/Seance_aff/" + var1 + "/" + var2 + "/" + var3,
      success: function success(html) {
        $(".loader").hide();

        if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample")) {
          $("#dtDynamicVerticalScrollExample").DataTable().clear().destroy();
        }

        $("#dtDynamicVerticalScrollExample").html(html).DataTable({
          bLengthChange: false,
          lengthMenu: [[11, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
          "font-size": "3rem"
        });
      }
    });
    return var1;
  } ///////////:datatable///////////////:


  function highlight() {}

  $("#dtDynamicVerticalScrollExample").DataTable({
    bLengthChange: false,
    lengthMenu: [[13, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
  }); //////dropdown select first //////////////////////////////   

  $("#etablissement").prop("selectedIndex", 1);
  $("#formation").prop("selectedIndex", 1);
  $("#promotion").prop("selectedIndex", 1); //////Affich Seance first //////////////////////////////   

  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear() + "-" + month + "-" + day;
  $("#datetime").val(today);
  var promotion = $("#promotion").val();
  var list = [];
  seanceaffichage(promotion, today, 'stage'); ///////////////etablissement//////////

  $("#etablissement").on("change", function () {
    var etablissement = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Formation_aff/" + etablissement,
      success: function success(html) {
        $("#formation").html(html);
        $("#formation").prop("selectedIndex", 1);
        $.ajax({
          type: "POST",
          url: "/api/Promotion_aff/" + $("#formation").val(),
          success: function success(html) {
            $("#promotion").html(html);
            $("#promotion").prop("selectedIndex", 1);
            seanceaffichage($("#promotion").val(), $("#datetime").val(), 'stage');
          }
        });
      }
    });
  }); ///////////////Fomation//////////

  $("#formation").on("change", function () {
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function success(html) {
        $("#promotion").html(html);
        $("#promotion").prop("selectedIndex", 1);
        seanceaffichage($("#promotion").val(), $("#datetime").val(), 'stage');
      }
    });
  }); ///////////////Promotion//////////

  $("#promotion").on("change", function () {
    var promotion = $(this).val();
    seanceaffichage(promotion, $("#datetime").val(), 'stage');
  }); ///////////////Date//////////

  $("#datetime").on("change", function () {
    var date = $(this).val();
    seanceaffichage($("#promotion").val(), date, 'stage');
  });
  $("body #dtDynamicVerticalScrollExample").on("click", "tr", function () {
    var selected = $(this).hasClass("highlighty");
    $("body #dtDynamicVerticalScrollExample tr").removeClass("highlighty");
    $("body #dtDynamicVerticalScrollExample tr").removeClass("odd");
    $("body #dtDynamicVerticalScrollExample tr").removeClass("even");

    if (!selected) {
      $(this).addClass("highlighty");
      var currentRow = $(this).closest("tr");
      var statut = currentRow.find("td:eq(1)").html();
      list = [];
      list.push({
        promotion: currentRow.find("td:eq(2)").html(),
        seance: currentRow.find("td:eq(3)").html(),
        groupe: currentRow.find("td:eq(10)").html(),
        hd: currentRow.find("td:eq(8)").html(),
        module: currentRow.find("td:eq(14)").html(),
        sale: currentRow.find("td:eq(15)").html(),
        existe: currentRow.find("td:eq(11)").html(),
        statut: currentRow.find("td:eq(1)").html()
      });
      $("#traite_epreuve").hide();
      $("#retraiter_seance").hide();
      $("#deverouiller-modal").hide();
      $("#verouiller-modal").hide();
      $("#assiduite_print").hide();

      if (statut == '1') {
        $("#traite_epreuve").css({
          "display": "none"
        });
        $("#retraiter_seance").show();
        $("#verouiller-modal").show();
        $("#assiduite_print").show();
      }

      if (statut == '2') {
        $("#deverouiller-modal").show();
        $("#assiduite_print").show();
      } else {
        $("#traite_epreuve").show();
      }
    }

    if (statut == '1' || statut == '2') {
      list.forEach(function (obj) {
        $.ajax({
          type: "POST",
          url: "/api/count_seance/" + obj.seance,
          data: {
            seance: obj.seance
          },
          success: function success(html) {
            $(".grid").html(html);
          }
        });
      });
    }

    console.log(list);
  }); ////////////////////////////////:: pop up etudiant ////////////////////////////////////:

  $("body #dtDynamicVerticalScrollExample").on("dblclick", "tr", function () {
    $("#etudiant-modal").modal("toggle");
    $("#etudiant-modal").modal("show");
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/Etud_aff",
        data: {
          promotion: obj.promotion,
          seance: obj.seance,
          groupe: obj.groupe,
          existe: obj.existe
        },
        success: function success(html) {
          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample2")) {
            $("#dtDynamicVerticalScrollExample2").DataTable().clear().destroy();
          }

          $("#dtDynamicVerticalScrollExample2").html(html).DataTable({
            bLengthChange: false,
            lengthMenu: [[25, 50, 75, 100, 125, 20000000000000], [10, 15, 25, 50, 100, "All"]]
          });
        }
      });
    });
  }); ////////////////////////////////:: traitement ////////////////////////////////////:

  $("body #traite_epreuve").on("click", function () {
    list.forEach(function (obj) {
      if (obj.groupe === "") {
        obj.groupe = "empty";
      }

      if (obj.statut != '1') {
        $.ajax({
          type: "POST",
          url: "/api/traitement_assiduite",
          data: {
            // promotion: obj.promotion,
            seance: obj.seance,
            date: $("#datetime").val(),
            // hd: obj.hd,
            // module: obj.module,
            // groupe: obj.groupe,
            // sale: obj.sale,
            type: 'traite'
          },
          success: function success(html) {
            seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
            Toast.fire({
              icon: 'success',
              title: 'seance traité avec succes'
            });
            $(".grid").html(html);
            $("#traite_epreuve").hide();
            $("#retraiter_seance").hide();
            $("#deverouiller-modal").hide();
            $("#verouiller-modal").hide();
            $("#assiduite_print").hide();
            $("#retraiter_seance").show();
            $("#verouiller-modal").show();
            $("#assiduite_print").show();
          }
        });
      } else {
        Toast.fire({
          icon: 'error',
          title: 'seance deja traité'
        });
      }
    });
  }); ////////////////////////////////:: retraiter  ////////////////////////////////////:

  $("body #retraiter_seance").on("click", function () {
    list.forEach(function (obj) {
      if (obj.groupe === "") {
        obj.groupe = "empty";
      }

      $.ajax({
        type: "POST",
        url: "/api/traitement_assiduite",
        data: {
          // promotion: obj.promotion,
          seance: obj.seance,
          date: $("#datetime").val(),
          // hd: obj.hd,
          // module: obj.module,
          // groupe: obj.groupe,
          // sale: obj.sale,
          type: 'retraite'
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
          $(".grid").html(html);
          $("#traite_epreuve").hide();
          $("#retraiter_seance").hide();
          $("#deverouiller-modal").hide();
          $("#verouiller-modal").hide();
          $("#assiduite_print").hide();
          $("#retraiter_seance").show();
          $("#verouiller-modal").show();
          $("#assiduite_print").show();
        }
      });
    });
  }); ////////////////////////////////:: feuile pdf  ////////////////////////////////////:

  $("body #assiduite_print").on("click", function () {
    list.forEach(function (obj) {
      window.open('/assiduite/assiduites/pdf/' + obj.seance, '_blank');
    });
  }); ////////////////////////////////::  ////////////////////////////////////:
  ////////////////////////////////:: remove seance   ////////////////////////////////////:

  $("body #remove").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/remove_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////:: existe   ////////////////////////////////////:

  $("body #existe").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/exist_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////:: sign   ////////////////////////////////////:

  $("body #sign").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/sign_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          Toast.fire({
            icon: 'success',
            title: 'seance signé'
          });
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////:: cancel   ////////////////////////////////////:

  $("body #cancel").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/cancel_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////::  ////////////////////////////////////:
  ////////////////////////////////:: deverou  ////////////////////////////////////:

  $("body #deverouiller-modal").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/dever_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////:: modifier_salle  ////////////////////////////////////:

  $("body #modisalle").on("click", function () {
    var salle = $("#salle").val();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/modifier_salle/" + obj.seance + "/" + salle,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////:: modifier_salle  ////////////////////////////////////:

  $("body #verouiller-modal").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/lock_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-3e9a6d","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-f373fb0"], () => (__webpack_exec__("./assets/components/assiduite/stage.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246IFwidG9wLWVuZFwiLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcclxuICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgU3dhbC5yZXN1bWVUaW1lcik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGFibGVEYXRhID0gW107XHJcblxyXG4gICAgXHJcbiAgZnVuY3Rpb24gc2VhbmNlYWZmaWNoYWdlKHZhcjEsIHZhcjIsIHZhcjMpIHtcclxuICAgICQoXCIubG9hZGVyXCIpLnNob3coKTtcclxuICBcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9TZWFuY2VfYWZmL1wiICsgdmFyMSArIFwiL1wiICsgdmFyMiArIFwiL1wiICsgdmFyMyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgJChcIi5sb2FkZXJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIilcclxuICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHZhcjE7XHJcbiAgICB9XHJcblxyXG4gLy8vLy8vLy8vLy86ZGF0YXRhYmxlLy8vLy8vLy8vLy8vLy8vOlxyXG4gXHJcbiBmdW5jdGlvbiBoaWdobGlnaHQoKSB7fVxyXG4gJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikuRGF0YVRhYmxlKHtcclxuICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgIGxlbmd0aE1lbnU6IFtcclxuICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgXSxcclxuIH0pO1xyXG4gLy8vLy8vZHJvcGRvd24gc2VsZWN0IGZpcnN0IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgIFxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgJChcIiNmb3JtYXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuXHJcbiAvLy8vLy9BZmZpY2ggU2VhbmNlIGZpcnN0IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgIFxyXG5cclxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIGRheSA9IChcIjBcIiArIG5vdy5nZXREYXRlKCkpLnNsaWNlKC0yKTtcclxuICAgIHZhciBtb250aCA9IChcIjBcIiArIChub3cuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7XHJcbiAgICB2YXIgdG9kYXkgPSBub3cuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuICBcclxuICAgICQoXCIjZGF0ZXRpbWVcIikudmFsKHRvZGF5KTtcclxuICAgIHZhciBwcm9tb3Rpb24gPSAkKFwiI3Byb21vdGlvblwiKS52YWwoKTtcclxuICAgIGxldCBsaXN0ID0gW107XHJcbiAgICBzZWFuY2VhZmZpY2hhZ2UocHJvbW90aW9uLCB0b2RheSwnc3RhZ2UnKTtcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy9ldGFibGlzc2VtZW50Ly8vLy8vLy8vL1xyXG5cclxuJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBldGFibGlzc2VtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Gb3JtYXRpb25fYWZmL1wiICsgZXRhYmxpc3NlbWVudCxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiI2Zvcm1hdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICQoXCIjZm9ybWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgJChcIiNmb3JtYXRpb25cIikudmFsKCksXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAgICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdzdGFnZScpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vL0ZvbWF0aW9uLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2Zvcm1hdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgZm9ybWF0aW9uLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIjcHJvbW90aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgJChcIiNwcm9tb3Rpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdzdGFnZScpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vUHJvbW90aW9uLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI3Byb21vdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHNlYW5jZWFmZmljaGFnZShwcm9tb3Rpb24sICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ3N0YWdlJyk7XHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vRGF0ZS8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNkYXRldGltZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksIGRhdGUsJ3N0YWdlJyk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLm9uKFwiY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLmhhc0NsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUgdHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcIm9kZFwiKTtcclxuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUgdHJcIikucmVtb3ZlQ2xhc3MoXCJldmVuXCIpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWQpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAgIHZhciBjdXJyZW50Um93ID0gJCh0aGlzKS5jbG9zZXN0KFwidHJcIik7XHJcbiAgICAgIHZhciBzdGF0dXQgPSBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxKVwiKS5odG1sKCk7XHJcbiAgICAgIGxpc3QgPSBbXTtcclxuICAgICAgbGlzdC5wdXNoKHtcclxuICAgICAgICBwcm9tb3Rpb246IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDIpXCIpLmh0bWwoKSxcclxuICAgICAgICBzZWFuY2U6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDMpXCIpLmh0bWwoKSxcclxuICAgICAgICBncm91cGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEwKVwiKS5odG1sKCksXHJcbiAgICAgICAgaGQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDgpXCIpLmh0bWwoKSxcclxuICAgICAgICBtb2R1bGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDE0KVwiKS5odG1sKCksXHJcbiAgICAgICAgc2FsZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTUpXCIpLmh0bWwoKSxcclxuICAgICAgICBleGlzdGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDExKVwiKS5odG1sKCksXHJcbiAgICAgICAgc3RhdHV0OiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxKVwiKS5odG1sKCksXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5oaWRlKCk7XHJcbiAgICAgIGlmIChzdGF0dXQgPT0gJzEnKSB7XHJcbiAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7XHJcbiAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3RhdHV0ID09ICcyJykge1xyXG4gICAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHN0YXR1dCA9PSAnMScgfHwgc3RhdHV0ID09ICcyJyl7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9jb3VudF9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgXHJcbiAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIuZ3JpZFwiKS5odG1sKGh0bWwpO1xyXG5cclxuICAgICAgfVxyXG4gIH0pO1xyXG4gIH0pO1xyXG59XHJcbmNvbnNvbGUubG9nKGxpc3QpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogcG9wIHVwIGV0dWRpYW50IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLm9uKFwiZGJsY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2V0dWRpYW50LW1vZGFsXCIpLm1vZGFsKFwidG9nZ2xlXCIpO1xyXG4gICAgJChcIiNldHVkaWFudC1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL0V0dWRfYWZmXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZ3JvdXBlOiBvYmouZ3JvdXBlLFxyXG4gICAgICAgICAgZXhpc3RlOiBvYmouZXhpc3RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKVxyXG4gICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMjUsIDUwLCA3NSwgMTAwLCAxMjUsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogdHJhaXRlbWVudCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3RyYWl0ZV9lcHJldXZlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgaWYgKG9iai5ncm91cGUgPT09IFwiXCIpIHtcclxuICAgICAgICBvYmouZ3JvdXBlID0gXCJlbXB0eVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICggb2JqLnN0YXR1dCAhPSAnMScpe1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLy8gcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIC8vIGhkOiBvYmouaGQsXHJcbiAgICAgICAgICAvLyBtb2R1bGU6IG9iai5tb2R1bGUsXHJcbiAgICAgICAgICAvLyBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICAvLyBzYWxlOiBvYmouc2FsZSxcclxuICAgICAgICAgIHR5cGUgOiAndHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NlYW5jZSB0cmFpdMOpIGF2ZWMgc3VjY2VzJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnc2VhbmNlIGRlamEgdHJhaXTDqScsXHJcbiAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHJldHJhaXRlciAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG5cclxuICAkKFwiYm9keSAjcmV0cmFpdGVyX3NlYW5jZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgIGlmIChvYmouZ3JvdXBlID09PSBcIlwiKSB7XHJcbiAgICAgICAgb2JqLmdyb3VwZSA9IFwiZW1wdHlcIjtcclxuICAgICAgfVxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLy8gcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIC8vIGhkOiBvYmouaGQsXHJcbiAgICAgICAgICAvLyBtb2R1bGU6IG9iai5tb2R1bGUsXHJcbiAgICAgICAgICAvLyBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICAvLyBzYWxlOiBvYmouc2FsZSxcclxuICAgICAgICAgIHR5cGUgOiAncmV0cmFpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICQoXCIuZ3JpZFwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZmV1aWxlIHBkZiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNhc3NpZHVpdGVfcHJpbnRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmLycrb2JqLnNlYW5jZSwgJ19ibGFuaycpO1xyXG5cclxufSk7XHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiByZW1vdmUgc2VhbmNlICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNyZW1vdmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9yZW1vdmVfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBleGlzdGUgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2V4aXN0ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2V4aXN0X3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogc2lnbiAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjc2lnblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3NpZ25fc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NlYW5jZSBzaWduw6knLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGNhbmNlbCAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjY2FuY2VsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvY2FuY2VsX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGRldmVyb3UgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvZGV2ZXJfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IG1vZGlmaWVyX3NhbGxlICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI21vZGlzYWxsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzYWxsZSA9ICQoXCIjc2FsbGVcIikudmFsKCk7XHJcbiAgICBcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL21vZGlmaWVyX3NhbGxlL1wiK29iai5zZWFuY2UrXCIvXCIrc2FsbGUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IG1vZGlmaWVyX3NhbGxlICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3Zlcm91aWxsZXItbW9kYWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2xvY2tfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuICAgXHJcblxyXG4gIH0pO1xyXG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZURhdGEiLCJzZWFuY2VhZmZpY2hhZ2UiLCJ2YXIxIiwidmFyMiIsInZhcjMiLCJzaG93IiwiYWpheCIsInR5cGUiLCJ1cmwiLCJzdWNjZXNzIiwiaHRtbCIsImhpZGUiLCJmbiIsIkRhdGFUYWJsZSIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95IiwiYkxlbmd0aENoYW5nZSIsImxlbmd0aE1lbnUiLCJoaWdobGlnaHQiLCJwcm9wIiwibm93IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJzbGljZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ0b2RheSIsImdldEZ1bGxZZWFyIiwidmFsIiwicHJvbW90aW9uIiwibGlzdCIsIm9uIiwiZXRhYmxpc3NlbWVudCIsImZvcm1hdGlvbiIsImRhdGUiLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImN1cnJlbnRSb3ciLCJjbG9zZXN0Iiwic3RhdHV0IiwiZmluZCIsInB1c2giLCJzZWFuY2UiLCJncm91cGUiLCJoZCIsIm1vZHVsZSIsInNhbGUiLCJleGlzdGUiLCJjc3MiLCJmb3JFYWNoIiwib2JqIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtb2RhbCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ3aW5kb3ciLCJvcGVuIiwic2FsbGUiXSwic291cmNlUm9vdCI6IiJ9