(self["webpackChunk"] = self["webpackChunk"] || []).push([["assiduite"],{

/***/ "./assets/components/assiduite/assiduite.js":
/*!**************************************************!*\
  !*** ./assets/components/assiduite/assiduite.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

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
$(document).ready(function () {
  $(".loader2").hide(); // $(".loader").hide();
  // $("#etudiant_det_modal").hide();
  /////////////////////////////////// datatable //////////////////////////

  var tableData = [];

  function seanceaffichage(var1, var2, var3) {
    $(".loader2").fadeIn();
    $.ajax({
      type: "POST",
      url: "/api/Seance_aff/" + var1 + "/" + var2 + "/" + var3,
      success: function success(html) {
        if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample")) {
          $("#dtDynamicVerticalScrollExample").DataTable().clear().destroy();
        }

        $("#dtDynamicVerticalScrollExample").html(html).DataTable({
          bLengthChange: false,
          lengthMenu: [[10, 20, 30, 40, 50, 20000000000000], [10, 15, 25, 50, 100, "All"]],
          "font-size": "3rem"
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
    return var1;
  } /////////////////dropdown-etdiants////////////////////////////


  function etudiant_situation_affichage(var1) {
    $(".loader2").show();
    $.ajax({
      type: "POST",
      url: "/api/etud_aff_situation/" + var1,
      success: function success(html) {
        $(".loader2").hide();
        $("#Et_situation").html(html);
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
  } ////////////////////////////////////////////////////////////////


  function highlight() {}

  $("#dtDynamicVerticalScrollExample").DataTable({
    bLengthChange: false,
    lengthMenu: [[13, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
  });
  $("#dtDynamicVerticalScrollExample_pointeuse").DataTable({
    bLengthChange: false,
    lengthMenu: [[13, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
  });
  $("#dtDynamicVerticalScrollExample_pointeuse2").DataTable({
    bLengthChange: false,
    lengthMenu: [[13, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
  });
  $("#dtDynamicVerticalScrollExample_situation").DataTable({
    bLengthChange: false,
    lengthMenu: [[13, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
  });
  $("#dtDynamicVerticalScrollExample2").DataTable({
    bLengthChange: false
  });
  $(".dataTables_length").addClass("bs-select"); ////////////////  //////////////////////////
  //////////////////////////////// dropdown //////////////////////////

  $("#etablissement").prop("selectedIndex", 1);
  $("#formation").prop("selectedIndex", 1);
  $("#promotion").prop("selectedIndex", 1); // -------------------------------------------------
  /////////////////////////////////dropdown-situation////////////////////////////

  $("#E_situation").prop("selectedIndex", 1);
  $("#F_situation").prop("selectedIndex", 1);
  $("#P_situation").prop("selectedIndex", 1); /////////////////////////////////////////////etablissement//////////

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
      }
    });
  }); ///////////////////////////////////////////////Fomation//////////

  $("#formation").on("change", function () {
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function success(html) {
        $("#promotion").html(html);
        $("#promotion").prop("selectedIndex", 1);
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
  }); ////////////////////////////////////////////////Promotion//////////

  $("#promotion").on("change", function () {
    var promotion = $(this).val();
    seanceaffichage(promotion, $("#datetime").val(), 'CR');
  }); ////////////////////////////////////////////////Date//////////

  $("#datetime").on("change", function () {
    var date = $(this).val();
    seanceaffichage($("#promotion").val(), date, 'CR');
  }); ///////////////////////////////////////////// date //////////////////////////

  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear() + "-" + month + "-" + day;
  $("#datetime").val(today);
  var promotion = $("#promotion").val();
  var list = [];
  seanceaffichage(promotion, today, 'CR');
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
        hf: currentRow.find("td:eq(9)").html(),
        module: currentRow.find("td:eq(14)").html(),
        sale: currentRow.find("td:eq(15)").html(),
        salle: currentRow.find("td:eq(5)").html(),
        nature: currentRow.find("td:eq(4)").html(),
        element: currentRow.find("td:eq(6)").html(),
        enseignant: currentRow.find("td:eq(7)").html(),
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
            $(".grid").html(html); // $(".grid").clear().destroy();
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

  $("body #dtDynamicVerticalScrollExample").on("dblclick", "tr", function () {
    $("#etudiant-modal").modal("toggle");
    $("#etudiant-modal").modal("show");
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
  }); ////////////////////////////////:: traitement ////////////////////////////////////:

  $("body #traite_epreuve").on("click", function () {
    var icon = $(this).find('i');
    var button = $(this);
    button.attr("disabled", true);
    list.forEach(function (obj) {
      if (obj.groupe === "") {
        obj.groupe = "empty";
      }

      if (obj.statut != '1') {
        $(".loader2").show();
        icon.removeClass('fa-clock').addClass("fa-spinner fa-spin");
        $.ajax({
          type: "POST",
          url: "/api/traitement_assiduite",
          data: {
            seance: obj.seance,
            date: $("#datetime").val(),
            type: 'traite'
          },
          success: function success(html) {
            icon.removeClass('fa-spinner fa-spin').addClass("fa-clock");
            button.attr("disabled", false);
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
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !'
            });
            $(".loader2").hide();
          }
        });
      } else {
        $(".loader2").fadeOut();
        Toast.fire({
          icon: 'error',
          title: 'seance deja traité'
        }); // $(".loader2").hide();
      }

      ;
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
  }); //   ////////////////////////////////::  ////////////////////////////////////:
  //   ////////////////////////////////:: situation presentil pdf  ////////////////////////////////////:
  //   $("body #situation_presentiel").on("click", function () {
  //     // list.forEach((obj) => {
  //       var etudiant = $("#Et_situation").val();
  //       // var date_debut = $("#datetimeDsituation").val();
  //       // var date_fin = $("#datetimeFsituation").val();
  //     window.open('/assiduite/assiduites/pdf_presentiel/'+etudiant, '_blank');
  // // });
  // });
  ////////////////////////////////::  ////////////////////////////////////:
  ////////////////////////////////:: remove seance   ////////////////////////////////////:

  $("body #remove").on("click", function () {
    $('.loader2').fadeIn();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/remove_seance/" + obj.seance,
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
            title: 'Probleme technique  !'
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
  }); ////////////////////////////////:: cancel   ////////////////////////////////////:

  $("body #cancel").on("click", function () {
    $(".loader2").hide();
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
    $(".loader2").hide();
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
    $(".loader2").hide();
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
  }); //////////////////////////////// parlot ////////////////////////////////////

  function selects() {
    var ele = document.getElementsByName('chk');

    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == 'checkbox') ele[i].checked = true;
    }
  }

  function deSelect() {
    var ele = document.getElementsByName('chk');

    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == 'checkbox') ele[i].checked = false;
    }
  }

  $("body #check").on("click", function () {
    // alert('ok');
    selects(); // $("#parlot_modal").show();

    $(".loader2").hide();
  });
  $("body #uncheck").on("click", function () {
    // alert('ok');
    deSelect(); // $("#parlot_modal").show();


    $(".loader2").hide();

  }); //////////////////////////////// pointeuse check /uncheck ////////////////////////////////////

  $("body #p_check").click(function () {
    alert('ok');
    selects(); // $("#parlot_modal").show();
  });
  $("body #p_uncheck").on("click", function () {
    alert('ok');
    deSelect(); // $("#parlot_modal").show();

  }); ////////////////////////////////::  ////////////////////////////////////:
  //////////////////////////////// parlot_hd-f ////////////////////////////////////

  $("body #parlot_search").on("click", function () {
    var hd = $("#hd").val();
    var hf = $("#hf").val();
    var date = $("#datetime").val();
    $.ajax({
      type: "POST",
      url: "/api/parlot",
      data: {
        hd: hd,
        hf: hf,
        date: date
      },
      success: function success(html) {
        $(".loader2").hide();

        if ($.fn.DataTable.isDataTable("#parlot_datatable")) {
          $("#parlot_datatable").DataTable().clear().destroy();
        }

        $("#parlot_datatable").html(html).DataTable({
          bLengthChange: false,
          lengthMenu: [[11, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
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
  }); //////////////////////////////// parlot_traitement ////////////////////////////////////

  $("body #parlot_traiter").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result, val, _i, _val, value, _i2, _val2, _value;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            val = [];
            $(':checkbox:checked').each(function (i) {
              val[i] = $(this).val();
            });
            _i = 0, _val = val;

          case 3:
            if (!(_i < _val.length)) {
              _context.next = 17;
              break;
            }

            value = _val[_i];
            _context.prev = 5;
            _context.next = 8;
            return $.ajax({
              type: "POST",
              url: "/api/traitement_assiduite",
              data: {
                seance: value,
                date: $("#datetime").val(),
                type: 'traite'
              } //         success: function (html) {
              // alert(html);
              //     // window.open('/assiduite/assiduites/pdf/'+html, '_blank');
              //   },

            });

          case 8:
            result = _context.sent;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](5);
            console.error(_context.t0);

          case 14:
            _i++;
            _context.next = 3;
            break;

          case 17:
            for (_i2 = 0, _val2 = val; _i2 < _val2.length; _i2++) {
              _value = _val2[_i2];
              window.open('/assiduite/assiduites/pdf/' + _value, '_blank');
            }

            $(".loader2").hide(); ////////////////////////////////////////////////////////////////////:

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 11]]);
  }))); // $("body #situation_search").on("click", function () {
  // etudiant = $("#Et_situation").val();
  // dated = $("#datetimeDsituation").val();
  // datef = $("#datetimeFsituation").val();
  // $.ajax({
  //   type: "POST",
  //   url: "/api/aff_situation",
  //   data: {
  //     etudiant : etudiant,
  //     dated : dated,
  //     datef : datef ,
  //   },
  //   success: function (html) {
  //     if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_situation")) {
  //       $("#dtDynamicVerticalScrollExample_situation").DataTable().clear().destroy();
  //     }
  //     $("#dtDynamicVerticalScrollExample_situation")
  //       .html(html)
  //       .DataTable({
  //         bLengthChange: false,
  //         lengthMenu: [
  //           [11, 25, 35, 50, 100, 20000000000000],
  //           [10, 15, 25, 50, 100, "All"],
  //         ],
  //         "font-size": "3rem",
  //       });
  //   }
  // });
  // });
  ///////////////etablissement//////////

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
  }); //  //////////////////extraction////////////////:
  //  $('#create_extraction').click(function(){ 
  //   var to = $('#datetimeFsituation').val();
  //   var from = $('#datetimeDsituation').val();
  //   var service = $('#E_situation').val();
  //   var formation = $('#F_situation').val();
  //   var promotion = $('#P_situation').val();
  //   var tou =  $('input[name="tous"]:checked').val();
  //           // window.location.href = "{{ path('extraction') }}?To="+to+"&From="+from;
  //          url = "/api/generate_extraction?To="+to+"&From="+from+"&formation="+formation+"&promotion="+promotion+"&Service="+service+"&Tou="+tou+"&type=normal";;
  //          window.open(url);
  //             });        
  //////////////////extraction stage////////////////:

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
  }); //////////////////////////etudiant details ////////////////////////////////////////////

  $("body #dtDynamicVerticalScrollExample2").on("dblclick", "tr", function () {
    var _this = this;

    // alert(statut);
    list.forEach(function (obj) {
      if (obj.statut == 1) {
        $("#etudiant_det_modal").modal("toggle");
        $("#etudiant_det_modal").modal("show");
        var row_etudiant = $(_this).closest("tr");
        var id_etudiant = row_etudiant.find("td:eq(0)").html();
        $.ajax({
          type: "POST",
          url: "/api/Etud_details",
          data: {
            etudiant: id_etudiant,
            seance: obj.seance
          },
          success: function success(html) {
            $('#modal_etud_det').html(html);
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
  }); //////////////////////////valider etudiant details ////////////////////////////////////////////

  $("body #save_etud_det").on("click", function () {
    var justif = 0;

    if ($('input.justifier').is(':checked')) {
      justif = 1;
    }

    $.ajax({
      type: "POST",
      url: "/api/Etud_details_valide",
      data: {
        etudiant: $('#ID_Admission').val(),
        seance: $('#Id_Seance').val(),
        cat_ens: $('#Categorie_ens').val(),
        motif_abs: $('#motif_abs').val(),
        obs: $('#obs').val(),
        justif: justif
      },
      success: function success(html) {
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
                lengthMenu: [[15, 30, 45, 60, 75, 20000000000000], [10, 15, 25, 50, 100, "All"]]
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
        $("#etudiant_det_modal").modal("toggle");
        $("#etudiant_det_modal").modal("hide");
      }
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
  }); ///////////////////////////////////////////////////////////////////////////////////////

  $('#E_situation').select2();
  $('#F_situation').select2();
  $('#P_situation').select2();
  $('#Et_situation').select2();
  $("button").on("click", function () {
    $('.loader2').fadeIn();
  });
  $(".close").on("click", function () {
    $('.loader2').fadeOut();
  });
}); /////////////////////////////////////////////////soufiane ///////////////////////////////////////////////////////////////

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-3e9a6d","vendors-node_modules_core-js_modules_es_promise_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-f373fb1"], () => (__webpack_exec__("./assets/components/assiduite/assiduite.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUZiO0FBU0VyQixZQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNHLElBQWQ7QUFDSCxXQXRCSTtBQXVCTG1CLFVBQUFBLEtBQUssRUFBQyxpQkFBVTtBQUNkdEIsWUFBQUEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjRyxJQUFkO0FBQ0NmLFlBQUFBLEtBQUssQ0FBQ21DLElBQU4sQ0FBVztBQUNUQyxjQUFBQSxJQUFJLEVBQUUsT0FERztBQUVUQyxjQUFBQSxLQUFLLEVBQUU7QUFGRSxhQUFYO0FBSUo7QUE3Qk0sU0FBUDtBQWdDQztBQUNFLEtBcENIO0FBcUNHLEdBeENELEVBcGdDNEIsQ0EraUM1Qjs7QUFFRnpCLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JxRyxPQUFsQjtBQUNBckcsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnFHLE9BQWxCO0FBQ0FyRyxFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCcUcsT0FBbEI7QUFDQXJHLEVBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJxRyxPQUFuQjtBQUlBckcsRUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZK0IsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBWTtBQUNqQy9CLElBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY1MsTUFBZDtBQUNGLEdBRkQ7QUFJQVQsRUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZK0IsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBWTtBQUNsQy9CLElBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3lFLE9BQWQ7QUFDRCxHQUZEO0FBS0MsQ0Fqa0NELEdBa2tDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Fzc2lkdWl0ZS9hc3NpZHVpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICB0b2FzdDogdHJ1ZSxcclxuICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXHJcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gIHRpbWVyOiAzMDAwLFxyXG4gIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBTd2FsLnN0b3BUaW1lcik7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcclxuICB9LFxyXG59KTtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgLy8gJChcIi5sb2FkZXJcIikuaGlkZSgpO1xyXG4gIC8vICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLmhpZGUoKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZGF0YXRhYmxlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgdmFyIHRhYmxlRGF0YSA9IFtdO1xyXG4gICAgZnVuY3Rpb24gc2VhbmNlYWZmaWNoYWdlKHZhcjEsIHZhcjIsIHZhcjMpIHtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuZmFkZUluKCk7XHJcblxyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvYXBpL1NlYW5jZV9hZmYvXCIgKyB2YXIxICsgXCIvXCIgKyB2YXIyICsgXCIvXCIgKyB2YXIzLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgIFsxMCwgMjAsIDMwLCA0MCw1MCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gdmFyMTtcclxuICAgICAgICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duLWV0ZGlhbnRzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKHZhcjEpIHtcclxuXHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgIHVybDogXCIvYXBpL2V0dWRfYWZmX3NpdHVhdGlvbi9cIiArIHZhcjEsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICQoXCIjRXRfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhcjE7XHJcbiAgICAgICAgICB9XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBoaWdobGlnaHQoKSB7fVxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsxMywgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9zaXR1YXRpb25cIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIuZGF0YVRhYmxlc19sZW5ndGhcIikuYWRkQ2xhc3MoXCJicy1zZWxlY3RcIik7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLyAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZHJvcGRvd24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNldGFibGlzc2VtZW50XCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICQoXCIjZm9ybWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICQoXCIjcHJvbW90aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd24tc2l0dWF0aW9uLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICQoXCIjRV9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgJChcIiNGX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAkKFwiI1Bfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZXRhYmxpc3NlbWVudC8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGV0YWJsaXNzZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL0Zvcm1hdGlvbl9hZmYvXCIgKyBldGFibGlzc2VtZW50LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgJChcIiNmb3JtYXRpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgICAgICAgJChcIiNmb3JtYXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyAkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9tb3Rpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vRm9tYXRpb24vLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjZm9ybWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyBmb3JtYXRpb24sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIiNwcm9tb3Rpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9Qcm9tb3Rpb24vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgICAgJChcIiNwcm9tb3Rpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKHByb21vdGlvbiwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgIH0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9EYXRlLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2RhdGV0aW1lXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkYXRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgZGF0ZSwnQ1InKTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGRhdGUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgdmFyIGRheSA9IChcIjBcIiArIG5vdy5nZXREYXRlKCkpLnNsaWNlKC0yKTtcclxuICB2YXIgbW9udGggPSAoXCIwXCIgKyAobm93LmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xyXG4gIHZhciB0b2RheSA9IG5vdy5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xyXG5cclxuICAkKFwiI2RhdGV0aW1lXCIpLnZhbCh0b2RheSk7XHJcbiAgdmFyIHByb21vdGlvbiA9ICQoXCIjcHJvbW90aW9uXCIpLnZhbCgpO1xyXG4gIGxldCBsaXN0ID0gW107XHJcbiAgc2VhbmNlYWZmaWNoYWdlKHByb21vdGlvbiwgdG9kYXksJ0NSJyk7XHJcblxyXG5cclxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLm9uKFwiY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLmhhc0NsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUgdHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcIm9kZFwiKTtcclxuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUgdHJcIikucmVtb3ZlQ2xhc3MoXCJldmVuXCIpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWQpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAgIHZhciBjdXJyZW50Um93ID0gJCh0aGlzKS5jbG9zZXN0KFwidHJcIik7XHJcbiAgICAgIHZhciBzdGF0dXQgPSBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxKVwiKS5odG1sKCk7XHJcbiAgICAgIGxpc3QgPSBbXTtcclxuICAgICAgbGlzdC5wdXNoKHtcclxuICAgICAgICBwcm9tb3Rpb246IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDIpXCIpLmh0bWwoKSxcclxuICAgICAgICBzZWFuY2U6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDMpXCIpLmh0bWwoKSxcclxuICAgICAgICBncm91cGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEwKVwiKS5odG1sKCksXHJcbiAgICAgICAgaGQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDgpXCIpLmh0bWwoKSxcclxuICAgICAgICBoZjogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoOSlcIikuaHRtbCgpLFxyXG4gICAgICAgIG1vZHVsZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTQpXCIpLmh0bWwoKSxcclxuICAgICAgICBzYWxlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxNSlcIikuaHRtbCgpLFxyXG4gICAgICAgIHNhbGxlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg1KVwiKS5odG1sKCksXHJcbiAgICAgICAgbmF0dXJlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg0KVwiKS5odG1sKCksXHJcbiAgICAgICAgZWxlbWVudDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoNilcIikuaHRtbCgpLFxyXG4gICAgICAgIGVuc2VpZ25hbnQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDcpXCIpLmh0bWwoKSxcclxuICAgICAgICBleGlzdGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDExKVwiKS5odG1sKCksXHJcbiAgICAgICAgc3RhdHV0OiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxKVwiKS5odG1sKCksXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5oaWRlKCk7XHJcbiAgICAgIGlmIChzdGF0dXQgPT0gJzEnKSB7XHJcbiAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7XHJcbiAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3RhdHV0ID09ICcyJykge1xyXG4gICAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHN0YXR1dCA9PSAnMScgfHwgc3RhdHV0ID09ICcyJyl7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9jb3VudF9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgXHJcbiAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIuZ3JpZFwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vICQoXCIuZ3JpZFwiKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgfSk7XHJcbn1cclxuLy8gY29uc29sZS5sb2cobGlzdCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHBvcCB1cCBldHVkaWFudCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5vbihcImRibGNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNldHVkaWFudC1tb2RhbFwiKS5tb2RhbChcInRvZ2dsZVwiKTtcclxuICAgICQoXCIjZXR1ZGlhbnQtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICQoXCIjU2VhbmNlX2V0dWRcIikudmFsKG9iai5zZWFuY2UpO1xyXG4gICAgJChcIiNzYWxsZV9ldHVkXCIpLnZhbChvYmoubmF0dXJlICsgJyAvICcgKyBvYmouc2FsbGUpO1xyXG4gICAgJChcIiNlbGVtZW50X2V0dWRcIikudmFsKG9iai5lbGVtZW50KTtcclxuICAgICQoXCIjRW5zZWlnbmFudF9ldHVkXCIpLnZhbChvYmouZW5zZWlnbmFudCk7XHJcbiAgICAkKFwiI0hkX2V0dWRcIikudmFsKG9iai5oZCk7XHJcbiAgICAkKFwiI0hmX2V0dWRcIikudmFsKG9iai5oZik7XHJcbiAgICAkKFwiI2dyb3VwX2V0dWRcIikudmFsKG9iai5ncm91cGUpO1xyXG4gICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvRXR1ZF9hZmZcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwcm9tb3Rpb246IG9iai5wcm9tb3Rpb24sXHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgICBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICBleGlzdGU6IG9iai5leGlzdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgLy8gJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKVxyXG4gICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMTIsIDI0LCAzNiwgNDgsIDYwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiB0cmFpdGVtZW50IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjdHJhaXRlX2VwcmV1dmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaWNvbiA9ICQodGhpcykuZmluZCgnaScpO1xyXG4gICAgdmFyIGJ1dHRvbiA9ICQodGhpcyk7XHJcbiAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgIGlmIChvYmouZ3JvdXBlID09PSBcIlwiKSB7XHJcbiAgICAgICAgb2JqLmdyb3VwZSA9IFwiZW1wdHlcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIG9iai5zdGF0dXQgIT0gJzEnKXtcclxuICAgICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2xvY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS90cmFpdGVtZW50X2Fzc2lkdWl0ZVwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgICAgICB0eXBlIDogJ3RyYWl0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1jbG9ja1wiKTtcclxuICAgICAgICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NlYW5jZSB0cmFpdMOpIGF2ZWMgc3VjY2VzJyxcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICBcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICQoXCIubG9hZGVyMlwiKS5mYWRlT3V0KCk7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdzZWFuY2UgZGVqYSB0cmFpdMOpJyxcclxuXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgfSk7XHJcbiAgICAgIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiByZXRyYWl0ZXIgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuXHJcbiAgJChcImJvZHkgI3JldHJhaXRlcl9zZWFuY2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICBpZiAob2JqLmdyb3VwZSA9PT0gXCJcIikge1xyXG4gICAgICAgIG9iai5ncm91cGUgPSBcImVtcHR5XCI7XHJcbiAgICAgIH1cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS90cmFpdGVtZW50X2Fzc2lkdWl0ZVwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC8vIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgICAgICAvLyBoZDogb2JqLmhkLFxyXG4gICAgICAgICAgLy8gbW9kdWxlOiBvYmoubW9kdWxlLFxyXG4gICAgICAgICAgLy8gZ3JvdXBlOiBvYmouZ3JvdXBlLFxyXG4gICAgICAgICAgLy8gc2FsZTogb2JqLnNhbGUsXHJcbiAgICAgICAgICB0eXBlIDogJ3JldHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAkKFwiLmdyaWRcIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGZldWlsZSBwZGYgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjYXNzaWR1aXRlX3ByaW50XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZi8nK29iai5zZWFuY2UsICdfYmxhbmsnKTtcclxuXHJcbn0pO1xyXG59KTtcclxuXHJcbi8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLyAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogc2l0dWF0aW9uIHByZXNlbnRpbCBwZGYgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuLy8gICAkKFwiYm9keSAjc2l0dWF0aW9uX3ByZXNlbnRpZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAvLyBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4vLyAgICAgICB2YXIgZXR1ZGlhbnQgPSAkKFwiI0V0X3NpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gICAgICAgLy8gdmFyIGRhdGVfZGVidXQgPSAkKFwiI2RhdGV0aW1lRHNpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gICAgICAgLy8gdmFyIGRhdGVfZmluID0gJChcIiNkYXRldGltZUZzaXR1YXRpb25cIikudmFsKCk7XHJcblxyXG4vLyAgICAgd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGZfcHJlc2VudGllbC8nK2V0dWRpYW50LCAnX2JsYW5rJyk7XHJcblxyXG4vLyAvLyB9KTtcclxuLy8gfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHJlbW92ZSBzZWFuY2UgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3JlbW92ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5sb2FkZXIyJykuZmFkZUluKCk7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9yZW1vdmVfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSB0ZWNobmlxdWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZXhpc3RlICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNleGlzdGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9leGlzdF9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBzaWduICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNzaWduXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9zaWduX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzZWFuY2Ugc2lnbsOpJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogY2FuY2VsICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNjYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvY2FuY2VsX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBkZXZlcm91ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2RldmVyb3VpbGxlci1tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9kZXZlcl9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogbW9kaWZpZXJfc2FsbGUgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjbW9kaXNhbGxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgIHZhciBzYWxsZSA9ICQoXCIjc2FsbGVcIikudmFsKCk7XHJcbiAgICBcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL21vZGlmaWVyX3NhbGxlL1wiK29iai5zZWFuY2UrXCIvXCIrc2FsbGUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBtb2RpZmllcl9zYWxsZSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICN2ZXJvdWlsbGVyLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9sb2NrX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJsb3QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNlbGVjdHMoKXsgIFxyXG4gIHZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXHJcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxyXG4gICAgICAgICAgZWxlW2ldLmNoZWNrZWQ9dHJ1ZTsgIFxyXG4gIH0gIFxyXG59ICBcclxuZnVuY3Rpb24gZGVTZWxlY3QoKXsgIFxyXG4gIHZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXHJcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxyXG4gICAgICAgICAgZWxlW2ldLmNoZWNrZWQ9ZmFsc2U7ICBcclxuICAgICAgICBcclxuICB9ICBcclxufSAgICAgICAgICBcclxuJChcImJvZHkgI2NoZWNrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyBhbGVydCgnb2snKTtcclxuc2VsZWN0cygpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xyXG4kKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG59KTtcclxuJChcImJvZHkgI3VuY2hlY2tcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vIGFsZXJ0KCdvaycpO1xyXG5kZVNlbGVjdCgpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xyXG4kKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG59KTtcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBhcmxvdF9oZC1mIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJChcImJvZHkgI3BhcmxvdF9zZWFyY2hcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICB2YXIgaGQgPSAkKFwiI2hkXCIpLnZhbCgpO1xyXG4gIHZhciBoZiA9ICQoXCIjaGZcIikudmFsKCk7XHJcbiAgdmFyIGRhdGUgPSAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogXCIvYXBpL3BhcmxvdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBoZDogaGQsXHJcbiAgICAgIGhmOiBoZixcclxuICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICBcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjcGFybG90X2RhdGF0YWJsZVwiKSkge1xyXG4gICAgICAgICAgJChcIiNwYXJsb3RfZGF0YXRhYmxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCIjcGFybG90X2RhdGF0YWJsZVwiKVxyXG4gICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgfSk7XHJcbiAgfSxcclxuICB9KTtcclxuIFxyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFybG90X3RyYWl0ZW1lbnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKFwiYm9keSAjcGFybG90X3RyYWl0ZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiBcclxuICBsZXQgcmVzdWx0O1xyXG4gICAgICB2YXIgdmFsID0gW107XHJcbiAgICAgICQoJzpjaGVja2JveDpjaGVja2VkJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICB2YWxbaV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgZm9yKGxldCB2YWx1ZSBvZiB2YWwpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2ltcG9ydCcsIHtcclxuICAgICAgLy8gICBzZWFuY2U6IHZhbHVlLFxyXG4gICAgICAvLyAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgIC8vICAgdHlwZSA6ICd0cmFpdGUnLFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIHJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvdHJhaXRlbWVudF9hc3NpZHVpdGVcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IHZhbHVlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIHR5cGUgOiAndHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4vLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbi8vIGFsZXJ0KGh0bWwpO1xyXG4vLyAgICAgLy8gd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGYvJytodG1sLCAnX2JsYW5rJyk7XHJcbi8vICAgfSxcclxuXHJcbiAgICAgIH0pO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCB2YWx1ZSBvZiB2YWwpe1xyXG5cclxuIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmLycrdmFsdWUsICdfYmxhbmsnKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxufSk7XHJcblxyXG5cclxuXHJcbi8vICQoXCJib2R5ICNzaXR1YXRpb25fc2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyBldHVkaWFudCA9ICQoXCIjRXRfc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyBkYXRlZCA9ICQoXCIjZGF0ZXRpbWVEc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyBkYXRlZiA9ICQoXCIjZGF0ZXRpbWVGc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyAkLmFqYXgoe1xyXG4vLyAgIHR5cGU6IFwiUE9TVFwiLFxyXG4vLyAgIHVybDogXCIvYXBpL2FmZl9zaXR1YXRpb25cIixcclxuLy8gICBkYXRhOiB7XHJcbi8vICAgICBldHVkaWFudCA6IGV0dWRpYW50LFxyXG4vLyAgICAgZGF0ZWQgOiBkYXRlZCxcclxuLy8gICAgIGRhdGVmIDogZGF0ZWYgLFxyXG4vLyAgIH0sXHJcbi8vICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuLy8gICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfc2l0dWF0aW9uXCIpKSB7XHJcbi8vICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuLy8gICAgIH1cclxuLy8gICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKVxyXG4vLyAgICAgICAuaHRtbChodG1sKVxyXG4vLyAgICAgICAuRGF0YVRhYmxlKHtcclxuLy8gICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuLy8gICAgICAgICBsZW5ndGhNZW51OiBbXHJcbi8vICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4vLyAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcbi8vIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy9ldGFibGlzc2VtZW50Ly8vLy8vLy8vL1xyXG5cclxuICAkKFwiI0Vfc2l0dWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBldGFibGlzc2VtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Gb3JtYXRpb25fYWZmL1wiICsgZXRhYmxpc3NlbWVudCxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjRl9zaXR1YXRpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAkKFwiI0Zfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgJChcIiNGX3NpdHVhdGlvblwiKS52YWwoKSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgJChcIiNQX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAgICAgICAgICAgZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSgkKFwiI1Bfc2l0dWF0aW9uXCIpLnZhbCgpKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vL0ZvbWF0aW9uLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI0Zfc2l0dWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyBmb3JtYXRpb24sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgJChcIiNQX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAgICAgICBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKCQoXCIjUF9zaXR1YXRpb25cIikudmFsKCkpO1xyXG5cclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vUHJvbW90aW9uLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI1Bfc2l0dWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZShwcm9tb3Rpb24pO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG4gXHJcbiAgICAgICAgICAgIFxyXG4vLyAgLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmFjdGlvbi8vLy8vLy8vLy8vLy8vLy86XHJcbi8vICAkKCcjY3JlYXRlX2V4dHJhY3Rpb24nKS5jbGljayhmdW5jdGlvbigpeyBcclxuXHJcbi8vICAgdmFyIHRvID0gJCgnI2RhdGV0aW1lRnNpdHVhdGlvbicpLnZhbCgpO1xyXG4vLyAgIHZhciBmcm9tID0gJCgnI2RhdGV0aW1lRHNpdHVhdGlvbicpLnZhbCgpO1xyXG4vLyAgIHZhciBzZXJ2aWNlID0gJCgnI0Vfc2l0dWF0aW9uJykudmFsKCk7XHJcbi8vICAgdmFyIGZvcm1hdGlvbiA9ICQoJyNGX3NpdHVhdGlvbicpLnZhbCgpO1xyXG4vLyAgIHZhciBwcm9tb3Rpb24gPSAkKCcjUF9zaXR1YXRpb24nKS52YWwoKTtcclxuXHJcblxyXG4vLyAgIHZhciB0b3UgPSAgJCgnaW5wdXRbbmFtZT1cInRvdXNcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gIFxyXG4vLyAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInt7IHBhdGgoJ2V4dHJhY3Rpb24nKSB9fT9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb207XHJcbi8vICAgICAgICAgIHVybCA9IFwiL2FwaS9nZW5lcmF0ZV9leHRyYWN0aW9uP1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbStcIiZmb3JtYXRpb249XCIrZm9ybWF0aW9uK1wiJnByb21vdGlvbj1cIitwcm9tb3Rpb24rXCImU2VydmljZT1cIitzZXJ2aWNlK1wiJlRvdT1cIit0b3UrXCImdHlwZT1ub3JtYWxcIjs7XHJcbi8vICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICAgICAgICAgXHJcblxyXG4vLyAgICAgICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuIC8vLy8vLy8vLy8vLy8vLy8vL2V4dHJhY3Rpb24gc3RhZ2UvLy8vLy8vLy8vLy8vLy8vOlxyXG4gJCgnI2NyZWF0ZV9leHRyYWN0aW9uX3N0YWdlJykuY2xpY2soZnVuY3Rpb24oKXsgXHJcblxyXG4gIHZhciB0byA9ICQoJyNkYXRldGltZUZzaXR1YXRpb24nKS52YWwoKTtcclxuICB2YXIgZnJvbSA9ICQoJyNkYXRldGltZURzaXR1YXRpb24nKS52YWwoKTtcclxuICB2YXIgc2VydmljZSA9ICQoJyNFX3NpdHVhdGlvbicpLnZhbCgpO1xyXG4gIHZhciBmb3JtYXRpb24gPSAkKCcjRl9zaXR1YXRpb24nKS52YWwoKTtcclxuICB2YXIgcHJvbW90aW9uID0gJCgnI1Bfc2l0dWF0aW9uJykudmFsKCk7XHJcblxyXG5cclxuICB2YXIgdG91ID0gICQoJ2lucHV0W25hbWU9XCJ0b3VzXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICBcclxuICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJ7eyBwYXRoKCdleHRyYWN0aW9uJykgfX0/VG89XCIrdG8rXCImRnJvbT1cIitmcm9tO1xyXG4gICAgICAgICB1cmwgPSBcIi9hcGkvZ2VuZXJhdGVfZXh0cmFjdGlvbj9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb20rXCImZm9ybWF0aW9uPVwiK2Zvcm1hdGlvbitcIiZwcm9tb3Rpb249XCIrcHJvbW90aW9uK1wiJlNlcnZpY2U9XCIrc2VydmljZStcIiZUb3U9XCIrdG91K1wiJnR5cGU9c3RhZ2VcIjtcclxuICAgICAgICAgc2VydmljZTtcclxuICAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9ldHVkaWFudCBkZXRhaWxzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLm9uKFwiZGJsY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgIFxyXG4gICAgLy8gYWxlcnQoc3RhdHV0KTtcclxuICAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgXHJcbiAgICAgICBpZiAob2JqLnN0YXR1dCA9PSAxKSB7XHJcbiAgICAgICAgJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikubW9kYWwoXCJ0b2dnbGVcIik7XHJcbiAgICAgICAgJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgIHZhciByb3dfZXR1ZGlhbnQgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKTtcclxuICAgICAgICB2YXIgaWRfZXR1ZGlhbnQgPSByb3dfZXR1ZGlhbnQuZmluZChcInRkOmVxKDApXCIpLmh0bWwoKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFwiL2FwaS9FdHVkX2RldGFpbHNcIixcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZXR1ZGlhbnQ6IGlkX2V0dWRpYW50LFxyXG4gICAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgJCgnI21vZGFsX2V0dWRfZGV0JykuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICB9XHJcblxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL3ZhbGlkZXIgZXR1ZGlhbnQgZGV0YWlscyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiYm9keSAjc2F2ZV9ldHVkX2RldFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBqdXN0aWYgPSAwO1xyXG4gICAgaWYgKCQoJ2lucHV0Lmp1c3RpZmllcicpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgIGp1c3RpZiA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9FdHVkX2RldGFpbHNfdmFsaWRlXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBldHVkaWFudDogJCgnI0lEX0FkbWlzc2lvbicpLnZhbCgpLFxyXG4gICAgICAgIHNlYW5jZTogJCgnI0lkX1NlYW5jZScpLnZhbCgpLFxyXG4gICAgICAgIGNhdF9lbnM6ICQoJyNDYXRlZ29yaWVfZW5zJykudmFsKCksXHJcbiAgICAgICAgbW90aWZfYWJzOiAkKCcjbW90aWZfYWJzJykudmFsKCksXHJcbiAgICAgICAgb2JzOiAkKCcjb2JzJykudmFsKCksXHJcbiAgICAgICAganVzdGlmOiBqdXN0aWYsXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL2FwaS9FdHVkX2FmZlwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgICAgICBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICAgICAgZXhpc3RlOiBvYmouZXhpc3RlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgIFsxNSwgMzAsIDQ1LCA2MCwgNzUsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2V0dWRpYW50X2RldF9tb2RhbFwiKS5tb2RhbChcInRvZ2dsZVwiKTtcclxuICAgICAgICAkKFwiI2V0dWRpYW50X2RldF9tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vUG9pbnRhZ2UgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJChcImJvZHkgI3BvaW50YWdlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcblxyXG5saXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gIGlmIChvYmouc3RhdHV0ID09IDEpIHtcclxuXHJcbiQuYWpheCh7XHJcbiAgdHlwZTogXCJQT1NUXCIsXHJcbiAgdXJsOiBcIi9hcGkvRXR1ZF9wb2ludGFnZVwiLFxyXG4gIGRhdGE6IHtcclxuICAgIHByb21vOiAkKCcjcHJvbW90aW9uJykudmFsKCksXHJcbiAgICBkYXRlOiAkKCcjZGF0ZXRpbWUnKS52YWwoKSxcclxuICAgIGhkOiBvYmouaGQsXHJcbiAgfSxcclxuICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTRcIikpIHtcclxuICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGU0XCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGU0XCIpXHJcbiAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgIFsxNiwgMzIsIDQ4LCA2NCwgNzQsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KTtcclxuICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICB9LFxyXG4gIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgIH0pO1xyXG59LFxyXG5cclxufSk7XHJcbn1cclxuICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJCgnI0Vfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xyXG4kKCcjRl9zaXR1YXRpb24nKS5zZWxlY3QyKCk7XHJcbiQoJyNQX3NpdHVhdGlvbicpLnNlbGVjdDIoKTtcclxuJCgnI0V0X3NpdHVhdGlvbicpLnNlbGVjdDIoKTtcclxuXHJcblxyXG5cclxuJChcImJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgJCgnLmxvYWRlcjInKS5mYWRlSW4oKTtcclxufSk7XHJcblxyXG4kKFwiLmNsb3NlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICQoJy5sb2FkZXIyJykuZmFkZU91dCgpO1xyXG59KTtcclxuXHJcblxyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL3NvdWZpYW5lIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaGlkZSIsInRhYmxlRGF0YSIsInNlYW5jZWFmZmljaGFnZSIsInZhcjEiLCJ2YXIyIiwidmFyMyIsImZhZGVJbiIsImFqYXgiLCJ0eXBlIiwidXJsIiwic3VjY2VzcyIsImh0bWwiLCJmbiIsIkRhdGFUYWJsZSIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95IiwiYkxlbmd0aENoYW5nZSIsImxlbmd0aE1lbnUiLCJlcnJvciIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlIiwic2hvdyIsImhpZ2hsaWdodCIsImFkZENsYXNzIiwicHJvcCIsIm9uIiwiZXRhYmxpc3NlbWVudCIsInZhbCIsImZvcm1hdGlvbiIsInByb21vdGlvbiIsImRhdGUiLCJub3ciLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInNsaWNlIiwibW9udGgiLCJnZXRNb250aCIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJsaXN0Iiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiY3VycmVudFJvdyIsImNsb3Nlc3QiLCJzdGF0dXQiLCJmaW5kIiwicHVzaCIsInNlYW5jZSIsImdyb3VwZSIsImhkIiwiaGYiLCJtb2R1bGUiLCJzYWxlIiwic2FsbGUiLCJuYXR1cmUiLCJlbGVtZW50IiwiZW5zZWlnbmFudCIsImV4aXN0ZSIsImNzcyIsImZvckVhY2giLCJvYmoiLCJkYXRhIiwibW9kYWwiLCJidXR0b24iLCJhdHRyIiwiZmFkZU91dCIsIndpbmRvdyIsIm9wZW4iLCJzZWxlY3RzIiwiZWxlIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwiY2hlY2tlZCIsImRlU2VsZWN0IiwiZWFjaCIsInZhbHVlIiwicmVzdWx0IiwiY29uc29sZSIsImNsaWNrIiwidG8iLCJmcm9tIiwic2VydmljZSIsInRvdSIsInJvd19ldHVkaWFudCIsImlkX2V0dWRpYW50IiwiZXR1ZGlhbnQiLCJqdXN0aWYiLCJpcyIsImNhdF9lbnMiLCJtb3RpZl9hYnMiLCJvYnMiLCJwcm9tbyIsInNlbGVjdDIiXSwic291cmNlUm9vdCI6IiJ9

