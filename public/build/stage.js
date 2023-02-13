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
    $(".loader2").show();
    $.ajax({
      type: "POST",
      url: "/api/Seance_aff/" + var1 + "/" + var2 + "/" + var3,
      success: function success(html) {
        $(".loader2").hide();

        if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample")) {
          $("#dtDynamicVerticalScrollExample").DataTable().clear().destroy();
        }

        $("#dtDynamicVerticalScrollExample").html(html).DataTable({
          bLengthChange: false,
          lengthMenu: [[10, 20, 30, 40, 50, 20000000000000], [10, 15, 25, 50, 100, "All"]],
          "font-size": "3rem"
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
        $(".loader2").hide();
        $("#formation").html(html);
        $("#formation").prop("selectedIndex", 1);
        $.ajax({
          type: "POST",
          url: "/api/Promotion_aff/" + $("#formation").val(),
          success: function success(html) {
            $(".loader2").hide();
            $("#promotion").html(html);
            $("#promotion").prop("selectedIndex", 1);
            seanceaffichage($("#promotion").val(), $("#datetime").val(), 'stage');
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

  $("#formation").on("change", function () {
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function success(html) {
        $(".loader2").hide();
        $("#promotion").html(html);
        $("#promotion").prop("selectedIndex", 1);
        seanceaffichage($("#promotion").val(), $("#datetime").val(), 'stage');
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
            $(".loader2").hide();
            $(".grid").html(html);
          },
          error: function error() {
            $(".loader2").hide();
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !'
            });
          }
        });
      });
    } // console.log(list);

  }); ////////////////////////////////:: pop up etudiant ////////////////////////////////////:
  // $("body #dtDynamicVerticalScrollExample").on("dblclick", "tr", function () {
  //   // $(".loader2").show();
  //   $("#etudiant-modal").modal("toggle");
  //   $("#etudiant-modal").modal("show");
  //   list.forEach((obj) => {
  //     $.ajax({
  //       type: "POST",
  //       url: "/api/Etud_aff",
  //       data: {
  //         promotion: obj.promotion,
  //         seance: obj.seance,
  //         groupe: obj.groupe,
  //         existe: obj.existe,
  //       },
  //       success: function (html) {
  //         $(".loader2").hide();
  //         if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample2")) {
  //           $("#dtDynamicVerticalScrollExample2").DataTable().clear().destroy();
  //         }
  //         $("#dtDynamicVerticalScrollExample2")
  //           .html(html)
  //           .DataTable({
  //             bLengthChange: false,
  //             lengthMenu: [
  //               [25, 50, 75, 100, 125, 20000000000000],
  //               [10, 15, 25, 50, 100, "All"],
  //             ],
  //           });
  //       },error:function(){
  //         $(".loader2").hide();
  //          Toast.fire({
  //            icon: 'error',
  //            title: 'Probleme  !',
  //             });
  //     },
  //     });
  //   });
  // });

  $("body #dtDynamicVerticalScrollExample").on("dblclick", "tr", function () {
    $("#etudiant-modal").modal("toggle");
    $("#etudiant-modal").modal("show"); // console.log(obj);

    list.forEach(function (obj) {
      $("#Seance_etud").val(obj.seance);
      $("#salle_etud").val(obj.nature + ' / ' + obj.salle);
      $("#element_etud").val(obj.element);
      $("#Enseignant_etud").val(obj.enseignant);
      $("#Hd_etud").val(obj.hd);
      $("#Hf_etud").val(obj.hf);
      $("#group_etud").val(obj.groupe);
      $(".loader2").hide();
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
          // $(".loader2").hide();
          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample2")) {
            $("#dtDynamicVerticalScrollExample2").DataTable().clear().destroy();
          }

          $("#dtDynamicVerticalScrollExample2").html(html).DataTable({
            bLengthChange: false,
            lengthMenu: [[12, 24, 36, 48, 60, 20000000000000], [10, 15, 25, 50, 100, "All"]]
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
    });
  }); //////////////////////////Pointage ////////////////////////////////////////////

  $("body #pointage").on("click", function () {
    list.forEach(function (obj) {
      if (obj.statut == 1) {
        $.ajax({
          type: "POST",
          url: "/api/Etud_pointage",
          data: {
            promo: $('#promotion').val(),
            date: $('#datetime').val(),
            hd: obj.hd
          },
          success: function success(html) {
            if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample4")) {
              $("#dtDynamicVerticalScrollExample4").DataTable().clear().destroy();
            }

            $("#dtDynamicVerticalScrollExample4").html(html).DataTable({
              bLengthChange: false,
              lengthMenu: [[16, 32, 48, 64, 74, 20000000000000], [10, 15, 25, 50, 100, "All"]]
            });
            $(".loader2").hide();
          },
          error: function error() {
            $(".loader2").hide();
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !'
            });
          }
        });
      }
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
            $(".loader2").hide();
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
          },
          error: function error() {
            $(".loader2").hide();
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !'
            });
          }
        });
      } else {
        $(".loader2").hide();
        Toast.fire({
          icon: 'error',
          title: 'seance deja traité'
        });
      }
    });
  }); ////////////////////////////////:: retraiter  ////////////////////////////////////:

  $("body #retraiter_seance").on("click", function () {
    // $(".loader2").hide();
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
          $(".loader2").hide();
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
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme  !'
          });
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
          $(".loader2").hide();
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme  !'
          });
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
          $(".loader2").hide();
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme  !'
          });
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
          $(".loader2").hide();
          Toast.fire({
            icon: 'success',
            title: 'seance signé'
          });
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme  !'
          });
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
          $(".loader2").hide();
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme  !'
          });
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
          $(".loader2").hide();
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme  !'
          });
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
          $(".loader2").hide();
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme  !'
          });
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
          $(".loader2").hide();
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme  !'
          });
        }
      });
    });
  });
  $("button").on("click", function () {
    $('.loader2').fadeIn();
  });
  $(".close").on("click", function () {
    $('.loader2').fadeOut();
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-9e73f9","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-312b80"], () => (__webpack_exec__("./assets/components/assiduite/stage.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFELENBQWN5RSxPQUFkO0FBQ0EsR0FGRDtBQUlHLENBaHFCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Fzc2lkdWl0ZS9zdGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgU3dhbC5zdG9wVGltZXIpO1xyXG4gICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB0YWJsZURhdGEgPSBbXTtcclxuXHJcbiAgICBcclxuICBmdW5jdGlvbiBzZWFuY2VhZmZpY2hhZ2UodmFyMSwgdmFyMiwgdmFyMykge1xyXG4gICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcclxuICBcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9TZWFuY2VfYWZmL1wiICsgdmFyMSArIFwiL1wiICsgdmFyMiArIFwiL1wiICsgdmFyMyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKSkge1xyXG4gICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpXHJcbiAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMCwgMjAsIDMwLCA0MCwgNTAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHZhcjE7XHJcbiAgICB9XHJcblxyXG4gLy8vLy8vLy8vLy86ZGF0YXRhYmxlLy8vLy8vLy8vLy8vLy8vOlxyXG4gXHJcbiBmdW5jdGlvbiBoaWdobGlnaHQoKSB7fVxyXG4gJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikuRGF0YVRhYmxlKHtcclxuICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgIGxlbmd0aE1lbnU6IFtcclxuICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgXSxcclxuIH0pO1xyXG4gLy8vLy8vZHJvcGRvd24gc2VsZWN0IGZpcnN0IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgIFxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgJChcIiNmb3JtYXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuXHJcbiAvLy8vLy9BZmZpY2ggU2VhbmNlIGZpcnN0IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgIFxyXG5cclxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIGRheSA9IChcIjBcIiArIG5vdy5nZXREYXRlKCkpLnNsaWNlKC0yKTtcclxuICAgIHZhciBtb250aCA9IChcIjBcIiArIChub3cuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7XHJcbiAgICB2YXIgdG9kYXkgPSBub3cuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuICBcclxuICAgICQoXCIjZGF0ZXRpbWVcIikudmFsKHRvZGF5KTtcclxuICAgIHZhciBwcm9tb3Rpb24gPSAkKFwiI3Byb21vdGlvblwiKS52YWwoKTtcclxuICAgIGxldCBsaXN0ID0gW107XHJcbiAgICBzZWFuY2VhZmZpY2hhZ2UocHJvbW90aW9uLCB0b2RheSwnc3RhZ2UnKTtcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy9ldGFibGlzc2VtZW50Ly8vLy8vLy8vL1xyXG5cclxuJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBldGFibGlzc2VtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Gb3JtYXRpb25fYWZmL1wiICsgZXRhYmxpc3NlbWVudCxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjZm9ybWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgJChcIiNmb3JtYXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyAkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ3N0YWdlJyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vRm9tYXRpb24vLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjZm9ybWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyBmb3JtYXRpb24sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICQoXCIjcHJvbW90aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnc3RhZ2UnKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9Qcm9tb3Rpb24vLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjcHJvbW90aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgc2VhbmNlYWZmaWNoYWdlKHByb21vdGlvbiwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnc3RhZ2UnKTtcclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9EYXRlLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2RhdGV0aW1lXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkYXRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgZGF0ZSwnc3RhZ2UnKTtcclxuICB9KTtcclxuXHJcblxyXG4gICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikub24oXCJjbGlja1wiLCBcInRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxlY3RlZCA9ICQodGhpcykuaGFzQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlIHRyXCIpLnJlbW92ZUNsYXNzKFwib2RkXCIpO1xyXG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcImV2ZW5cIik7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICAgdmFyIGN1cnJlbnRSb3cgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKTtcclxuICAgICAgdmFyIHN0YXR1dCA9IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEpXCIpLmh0bWwoKTtcclxuICAgICAgbGlzdCA9IFtdO1xyXG4gICAgICBsaXN0LnB1c2goe1xyXG4gICAgICAgIHByb21vdGlvbjogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMilcIikuaHRtbCgpLFxyXG4gICAgICAgIHNlYW5jZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMylcIikuaHRtbCgpLFxyXG4gICAgICAgIGdyb3VwZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTApXCIpLmh0bWwoKSxcclxuICAgICAgICBoZDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoOClcIikuaHRtbCgpLFxyXG4gICAgICAgIG1vZHVsZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTQpXCIpLmh0bWwoKSxcclxuICAgICAgICBzYWxlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxNSlcIikuaHRtbCgpLFxyXG4gICAgICAgIGV4aXN0ZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTEpXCIpLmh0bWwoKSxcclxuICAgICAgICBzdGF0dXQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEpXCIpLmh0bWwoKSxcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcclxuICAgICAgaWYgKHN0YXR1dCA9PSAnMScpIHtcclxuICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTtcclxuICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdGF0dXQgPT0gJzInKSB7XHJcbiAgICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoc3RhdHV0ID09ICcxJyB8fCBzdGF0dXQgPT0gJzInKXtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2NvdW50X3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICBcclxuICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLmdyaWRcIikuaHRtbChodG1sKTtcclxuXHJcbiAgICAgIH0sZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAgIFxyXG4gIH0pO1xyXG4gIH0pO1xyXG59XHJcbi8vIGNvbnNvbGUubG9nKGxpc3QpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogcG9wIHVwIGV0dWRpYW50IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAvLyAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLm9uKFwiZGJsY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAvLyAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xyXG4gIC8vICAgJChcIiNldHVkaWFudC1tb2RhbFwiKS5tb2RhbChcInRvZ2dsZVwiKTtcclxuICAvLyAgICQoXCIjZXR1ZGlhbnQtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gIC8vICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAvLyAgICAgJC5hamF4KHtcclxuICAvLyAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAvLyAgICAgICB1cmw6IFwiL2FwaS9FdHVkX2FmZlwiLFxyXG4gIC8vICAgICAgIGRhdGE6IHtcclxuICAvLyAgICAgICAgIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcclxuICAvLyAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAvLyAgICAgICAgIGdyb3VwZTogb2JqLmdyb3VwZSxcclxuICAvLyAgICAgICAgIGV4aXN0ZTogb2JqLmV4aXN0ZSxcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgLy8gICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gIC8vICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikpIHtcclxuICAvLyAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpXHJcbiAgLy8gICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgLy8gICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gIC8vICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gIC8vICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAvLyAgICAgICAgICAgICAgIFsyNSwgNTAsIDc1LCAxMDAsIDEyNSwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gIC8vICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gIC8vICAgICAgICAgICAgIF0sXHJcbiAgLy8gICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH0sZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAvLyAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgLy8gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgLy8gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gIC8vICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSk7XHJcbiAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5vbihcImRibGNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNldHVkaWFudC1tb2RhbFwiKS5tb2RhbChcInRvZ2dsZVwiKTtcclxuICAgICQoXCIjZXR1ZGlhbnQtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cob2JqKTtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAkKFwiI1NlYW5jZV9ldHVkXCIpLnZhbChvYmouc2VhbmNlKTtcclxuICAgICQoXCIjc2FsbGVfZXR1ZFwiKS52YWwob2JqLm5hdHVyZSArICcgLyAnICsgb2JqLnNhbGxlKTtcclxuICAgICQoXCIjZWxlbWVudF9ldHVkXCIpLnZhbChvYmouZWxlbWVudCk7XHJcbiAgICAkKFwiI0Vuc2VpZ25hbnRfZXR1ZFwiKS52YWwob2JqLmVuc2VpZ25hbnQpO1xyXG4gICAgJChcIiNIZF9ldHVkXCIpLnZhbChvYmouaGQpO1xyXG4gICAgJChcIiNIZl9ldHVkXCIpLnZhbChvYmouaGYpO1xyXG4gICAgJChcIiNncm91cF9ldHVkXCIpLnZhbChvYmouZ3JvdXBlKTtcclxuICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL0V0dWRfYWZmXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZ3JvdXBlOiBvYmouZ3JvdXBlLFxyXG4gICAgICAgICAgZXhpc3RlOiBvYmouZXhpc3RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIC8vICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKSkge1xyXG4gICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIilcclxuICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgWzEyLCAyNCwgMzYsIDQ4LCA2MCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1BvaW50YWdlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gJChcImJvZHkgI3BvaW50YWdlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcblxyXG4gIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICBpZiAob2JqLnN0YXR1dCA9PSAxKSB7XHJcbiAgXHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBcIi9hcGkvRXR1ZF9wb2ludGFnZVwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBwcm9tbzogJCgnI3Byb21vdGlvbicpLnZhbCgpLFxyXG4gICAgICBkYXRlOiAkKCcjZGF0ZXRpbWUnKS52YWwoKSxcclxuICAgICAgaGQ6IG9iai5oZCxcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKSkge1xyXG4gICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTRcIilcclxuICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxNiwgMzIsIDQ4LCA2NCwgNzQsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgfSxcclxuICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICB9KTtcclxuICB9LFxyXG4gIFxyXG4gIH0pO1xyXG4gIH1cclxuICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogdHJhaXRlbWVudCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3RyYWl0ZV9lcHJldXZlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgaWYgKG9iai5ncm91cGUgPT09IFwiXCIpIHtcclxuICAgICAgICBvYmouZ3JvdXBlID0gXCJlbXB0eVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICggb2JqLnN0YXR1dCAhPSAnMScpe1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLy8gcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIC8vIGhkOiBvYmouaGQsXHJcbiAgICAgICAgICAvLyBtb2R1bGU6IG9iai5tb2R1bGUsXHJcbiAgICAgICAgICAvLyBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICAvLyBzYWxlOiBvYmouc2FsZSxcclxuICAgICAgICAgIHR5cGUgOiAndHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzZWFuY2UgdHJhaXTDqSBhdmVjIHN1Y2NlcycsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnc2VhbmNlIGRlamEgdHJhaXTDqScsXHJcbiAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHJldHJhaXRlciAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG5cclxuICAkKFwiYm9keSAjcmV0cmFpdGVyX3NlYW5jZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICBpZiAob2JqLmdyb3VwZSA9PT0gXCJcIikge1xyXG4gICAgICAgIG9iai5ncm91cGUgPSBcImVtcHR5XCI7XHJcbiAgICAgIH1cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS90cmFpdGVtZW50X2Fzc2lkdWl0ZVwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC8vIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgICAgICAvLyBoZDogb2JqLmhkLFxyXG4gICAgICAgICAgLy8gbW9kdWxlOiBvYmoubW9kdWxlLFxyXG4gICAgICAgICAgLy8gZ3JvdXBlOiBvYmouZ3JvdXBlLFxyXG4gICAgICAgICAgLy8gc2FsZTogb2JqLnNhbGUsXHJcbiAgICAgICAgICB0eXBlIDogJ3JldHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBmZXVpbGUgcGRmICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2Fzc2lkdWl0ZV9wcmludFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGYvJytvYmouc2VhbmNlLCAnX2JsYW5rJyk7XHJcblxyXG59KTtcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHJlbW92ZSBzZWFuY2UgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3JlbW92ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3JlbW92ZV9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBleGlzdGUgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2V4aXN0ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2V4aXN0X3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHNpZ24gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3NpZ25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9zaWduX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnc2VhbmNlIHNpZ27DqScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogY2FuY2VsICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNjYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9jYW5jZWxfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGRldmVyb3UgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvZGV2ZXJfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBtb2RpZmllcl9zYWxsZSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNtb2Rpc2FsbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2FsbGUgPSAkKFwiI3NhbGxlXCIpLnZhbCgpO1xyXG4gICAgXHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9tb2RpZmllcl9zYWxsZS9cIitvYmouc2VhbmNlK1wiL1wiK3NhbGxlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogbW9kaWZpZXJfc2FsbGUgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjdmVyb3VpbGxlci1tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvbG9ja19zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuICAgXHJcbiQoXCJidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCgnLmxvYWRlcjInKS5mYWRlSW4oKTtcclxufSk7XHJcblxyXG4kKFwiLmNsb3NlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gJCgnLmxvYWRlcjInKS5mYWRlT3V0KCk7XHJcbn0pO1xyXG5cclxuICB9KTsiXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZURhdGEiLCJzZWFuY2VhZmZpY2hhZ2UiLCJ2YXIxIiwidmFyMiIsInZhcjMiLCJzaG93IiwiYWpheCIsInR5cGUiLCJ1cmwiLCJzdWNjZXNzIiwiaHRtbCIsImhpZGUiLCJmbiIsIkRhdGFUYWJsZSIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95IiwiYkxlbmd0aENoYW5nZSIsImxlbmd0aE1lbnUiLCJlcnJvciIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJoaWdobGlnaHQiLCJwcm9wIiwibm93IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJzbGljZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ0b2RheSIsImdldEZ1bGxZZWFyIiwidmFsIiwicHJvbW90aW9uIiwibGlzdCIsIm9uIiwiZXRhYmxpc3NlbWVudCIsImZvcm1hdGlvbiIsImRhdGUiLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImN1cnJlbnRSb3ciLCJjbG9zZXN0Iiwic3RhdHV0IiwiZmluZCIsInB1c2giLCJzZWFuY2UiLCJncm91cGUiLCJoZCIsIm1vZHVsZSIsInNhbGUiLCJleGlzdGUiLCJjc3MiLCJmb3JFYWNoIiwib2JqIiwiZGF0YSIsIm1vZGFsIiwibmF0dXJlIiwic2FsbGUiLCJlbGVtZW50IiwiZW5zZWlnbmFudCIsImhmIiwicHJvbW8iLCJ3aW5kb3ciLCJvcGVuIiwiZmFkZUluIiwiZmFkZU91dCJdLCJzb3VyY2VSb290IjoiIn0=