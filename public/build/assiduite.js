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
$(document).ready(function () {
  /////////////////function loader hide////////////
  $(".loader2").hide();

  function loader_hide() {
    $(".loader2").hide();
  } // $(".loader").hide();
  // $("#etudiant_det_modal").hide();
  /////////////////////////////////// datatable //////////////////////////


  var tableData = [];

  function seanceaffichage(var1, var2, var3) {
    $(".loader2").show();
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
        // $(".loader2").hide();
        loader_hide();
        $("#Et_situation").html(html);
      },
      error: function error() {
        //  $(".loader2").hide();
        loader_hide();
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
  // /////////////////////////////////dropdown-situation////////////////////////////
  //   $("#E_situation").prop("selectedIndex", 1);
  //   $("#F_situation").prop("selectedIndex", 1);
  //   $("#P_situation").prop("selectedIndex", 1);
  /////////////////////////////////////////////etablissement//////////

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
          setInterval(function () {
            loader_hide();
          }, 1000);
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
    setInterval(function () {
      loader_hide();
    }, 1000);
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
    var hd, hf, date, result, val, _i, _val, value, _i2, _val2, _value;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            hd = $("#hd").val();
            hf = $("#hf").val();
            date = $("#datetime").val();
            val = [];
            $(':checkbox:checked').each(function (i) {
              val[i] = $(this).val();
            });
            _i = 0, _val = val;

          case 6:
            if (!(_i < _val.length)) {
              _context.next = 20;
              break;
            }

            value = _val[_i];
            _context.prev = 8;
            _context.next = 11;
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

          case 11:
            result = _context.sent;
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](8);
            console.error(_context.t0);

          case 17:
            _i++;
            _context.next = 6;
            break;

          case 20:
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

            for (_i2 = 0, _val2 = val; _i2 < _val2.length; _i2++) {
              _value = _val2[_i2];
              window.open('/assiduite/assiduites/pdf/' + _value, '_blank');
            }

            $(".loader2").hide(); ////////////////////////////////////////////////////////////////////:

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 14]]);
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
  }); ////////////////////////// PDF _ Synthese /////////////////////////////////////////////////////////////

  $("body #synthese_seance").on("click", function () {
    setInterval(function () {
      loader_hide();
    }, 1000);
    var date = $("#datetime").val();
    window.open('/assiduite/assiduites/pdfsynthese/' + date, '_blank');
  }); ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-9e73f9","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-e8b614"], () => (__webpack_exec__("./assets/components/assiduite/assiduite.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLFdBQVc7QUFDZCxLQUZZLEVBRVgsSUFGVyxDQUFYO0FBSUEsUUFBSWdDLElBQUksR0FBR3BDLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZWlDLEdBQWYsRUFBWDtBQUNBMEMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksdUNBQXFDeEMsSUFBakQsRUFBdUQsUUFBdkQ7QUFDRCxHQVBELEVBN21DNEIsQ0FzbkM1QjtBQUVBOztBQUVGcEMsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQndHLE9BQWxCO0FBQ0F4RyxFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCd0csT0FBbEI7QUFDQXhHLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J3RyxPQUFsQjtBQUNBeEcsRUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQndHLE9BQW5CO0FBSUF4RyxFQUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVkrQixFQUFaLENBQWUsT0FBZixFQUF3QixZQUFZO0FBQ2pDL0IsSUFBQUEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjNkUsTUFBZDtBQUNGLEdBRkQ7QUFJQTdFLEVBQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWStCLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQVk7QUFDbEMvQixJQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWN5RSxPQUFkO0FBQ0QsR0FGRDtBQUtDLENBMW9DRCxHQTJvQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hc3NpZHVpdGUvYXNzaWR1aXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgdG9hc3Q6IHRydWUsXHJcbiAgcG9zaXRpb246IFwidG9wLWVuZFwiLFxyXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICB0aW1lcjogMzAwMCxcclxuICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgU3dhbC5zdG9wVGltZXIpO1xyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgU3dhbC5yZXN1bWVUaW1lcik7XHJcbiAgfSxcclxufSk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAvLy8vLy8vLy8vLy8vLy8vL2Z1bmN0aW9uIGxvYWRlciBoaWRlLy8vLy8vLy8vLy8vXHJcbiAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRlcl9oaWRlKCkge1xyXG4gICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbn1cclxuICAvLyAkKFwiLmxvYWRlclwiKS5oaWRlKCk7XHJcbiAgLy8gJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikuaGlkZSgpO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBkYXRhdGFibGUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICB2YXIgdGFibGVEYXRhID0gW107XHJcbiAgICBmdW5jdGlvbiBzZWFuY2VhZmZpY2hhZ2UodmFyMSwgdmFyMiwgdmFyMykge1xyXG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvYXBpL1NlYW5jZV9hZmYvXCIgKyB2YXIxICsgXCIvXCIgKyB2YXIyICsgXCIvXCIgKyB2YXIzLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgIFsxMCwgMjAsIDMwLCA0MCw1MCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gdmFyMTtcclxuICAgICAgICB9XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bi1ldGRpYW50cy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSh2YXIxKSB7XHJcblxyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9ldHVkX2FmZl9zaXR1YXRpb24vXCIgKyB2YXIxLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgLy8gJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICBsb2FkZXJfaGlkZSgpO1xyXG4gICAgICAgICAgICAgICQoXCIjRXRfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8vICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgbG9hZGVyX2hpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YXIxO1xyXG4gICAgICAgICAgfVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gaGlnaGxpZ2h0KCkge31cclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgWzEzLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgWzEzLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfc2l0dWF0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgWzEzLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiLmRhdGFUYWJsZXNfbGVuZ3RoXCIpLmFkZENsYXNzKFwiYnMtc2VsZWN0XCIpO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGRyb3Bkb3duIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjZXRhYmxpc3NlbWVudFwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAkKFwiI2Zvcm1hdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duLXNpdHVhdGlvbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gICAkKFwiI0Vfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4vLyAgICQoXCIjRl9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbi8vICAgJChcIiNQX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2V0YWJsaXNzZW1lbnQvLy8vLy8vLy8vXHJcblxyXG4gICAgICAgICAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHZhciBldGFibGlzc2VtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9Gb3JtYXRpb25fYWZmL1wiICsgZXRhYmxpc3NlbWVudCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjZm9ybWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjZm9ybWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgJChcIiNmb3JtYXRpb25cIikudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0ZvbWF0aW9uLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2Zvcm1hdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgZm9ybWF0aW9uLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIjcHJvbW90aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgJChcIiNwcm9tb3Rpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICB9LFxyXG4gICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vUHJvbW90aW9uLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHByb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIHNlYW5jZWFmZmljaGFnZShwcm9tb3Rpb24sICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICB9KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vRGF0ZS8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNkYXRldGltZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksIGRhdGUsJ0NSJyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBkYXRlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciBkYXkgPSAoXCIwXCIgKyBub3cuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XHJcbiAgdmFyIG1vbnRoID0gKFwiMFwiICsgKG5vdy5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcclxuICB2YXIgdG9kYXkgPSBub3cuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuXHJcbiAgJChcIiNkYXRldGltZVwiKS52YWwodG9kYXkpO1xyXG4gIHZhciBwcm9tb3Rpb24gPSAkKFwiI3Byb21vdGlvblwiKS52YWwoKTtcclxuICBsZXQgbGlzdCA9IFtdO1xyXG4gIHNlYW5jZWFmZmljaGFnZShwcm9tb3Rpb24sIHRvZGF5LCdDUicpO1xyXG5cclxuXHJcbiAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS5oYXNDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlIHRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUgdHJcIikucmVtb3ZlQ2xhc3MoXCJvZGRcIik7XHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlIHRyXCIpLnJlbW92ZUNsYXNzKFwiZXZlblwiKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgICB2YXIgY3VycmVudFJvdyA9ICQodGhpcykuY2xvc2VzdChcInRyXCIpO1xyXG4gICAgICB2YXIgc3RhdHV0ID0gY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMSlcIikuaHRtbCgpO1xyXG4gICAgICBsaXN0ID0gW107XHJcbiAgICAgIGxpc3QucHVzaCh7XHJcbiAgICAgICAgcHJvbW90aW9uOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgyKVwiKS5odG1sKCksXHJcbiAgICAgICAgc2VhbmNlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgzKVwiKS5odG1sKCksXHJcbiAgICAgICAgZ3JvdXBlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxMClcIikuaHRtbCgpLFxyXG4gICAgICAgIGhkOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg4KVwiKS5odG1sKCksXHJcbiAgICAgICAgaGY6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDkpXCIpLmh0bWwoKSxcclxuICAgICAgICBtb2R1bGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDE0KVwiKS5odG1sKCksXHJcbiAgICAgICAgc2FsZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTUpXCIpLmh0bWwoKSxcclxuICAgICAgICBzYWxsZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoNSlcIikuaHRtbCgpLFxyXG4gICAgICAgIG5hdHVyZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoNClcIikuaHRtbCgpLFxyXG4gICAgICAgIGVsZW1lbnQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDYpXCIpLmh0bWwoKSxcclxuICAgICAgICBlbnNlaWduYW50OiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg3KVwiKS5odG1sKCksXHJcbiAgICAgICAgZXhpc3RlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxMSlcIikuaHRtbCgpLFxyXG4gICAgICAgIHN0YXR1dDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMSlcIikuaHRtbCgpLFxyXG4gICAgICB9KTtcclxuICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuaGlkZSgpO1xyXG4gICAgICBpZiAoc3RhdHV0ID09ICcxJykge1xyXG4gICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwibm9uZVwiIH0pO1xyXG4gICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXR1dCA9PSAnMicpIHtcclxuICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihzdGF0dXQgPT0gJzEnIHx8IHN0YXR1dCA9PSAnMicpe1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvY291bnRfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgIFxyXG4gICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiLmdyaWRcIikuaHRtbChodG1sKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyAkKFwiLmdyaWRcIikuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIH0pO1xyXG59XHJcbi8vIGNvbnNvbGUubG9nKGxpc3QpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBwb3AgdXAgZXR1ZGlhbnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikub24oXCJkYmxjbGlja1wiLCBcInRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjZXR1ZGlhbnQtbW9kYWxcIikubW9kYWwoXCJ0b2dnbGVcIik7XHJcbiAgICAkKFwiI2V0dWRpYW50LW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAkKFwiI1NlYW5jZV9ldHVkXCIpLnZhbChvYmouc2VhbmNlKTtcclxuICAgICQoXCIjc2FsbGVfZXR1ZFwiKS52YWwob2JqLm5hdHVyZSArICcgLyAnICsgb2JqLnNhbGxlKTtcclxuICAgICQoXCIjZWxlbWVudF9ldHVkXCIpLnZhbChvYmouZWxlbWVudCk7XHJcbiAgICAkKFwiI0Vuc2VpZ25hbnRfZXR1ZFwiKS52YWwob2JqLmVuc2VpZ25hbnQpO1xyXG4gICAgJChcIiNIZF9ldHVkXCIpLnZhbChvYmouaGQpO1xyXG4gICAgJChcIiNIZl9ldHVkXCIpLnZhbChvYmouaGYpO1xyXG4gICAgJChcIiNncm91cF9ldHVkXCIpLnZhbChvYmouZ3JvdXBlKTtcclxuICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL0V0dWRfYWZmXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZ3JvdXBlOiBvYmouZ3JvdXBlLFxyXG4gICAgICAgICAgZXhpc3RlOiBvYmouZXhpc3RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIC8vICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKSkge1xyXG4gICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIilcclxuICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgWzEyLCAyNCwgMzYsIDQ4LCA2MCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogdHJhaXRlbWVudCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3RyYWl0ZV9lcHJldXZlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGljb24gPSAkKHRoaXMpLmZpbmQoJ2knKTtcclxuICAgIHZhciBidXR0b24gPSAkKHRoaXMpO1xyXG4gICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICBpZiAob2JqLmdyb3VwZSA9PT0gXCJcIikge1xyXG4gICAgICAgIG9iai5ncm91cGUgPSBcImVtcHR5XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCBvYmouc3RhdHV0ICE9ICcxJyl7XHJcbiAgICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNsb2NrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvdHJhaXRlbWVudF9hc3NpZHVpdGVcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgICBkYXRlOiAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLFxyXG4gICAgICAgICAgdHlwZSA6ICd0cmFpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtY2xvY2tcIik7XHJcbiAgICAgICAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzZWFuY2UgdHJhaXTDqSBhdmVjIHN1Y2NlcycsXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuZ3JpZFwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAkKFwiLmxvYWRlcjJcIikuZmFkZU91dCgpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnc2VhbmNlIGRlamEgdHJhaXTDqScsXHJcblxyXG4gICAgICB9KVxyXG4gICAgICAvLyAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gIH0pO1xyXG4gICAgICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogcmV0cmFpdGVyICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcblxyXG4gICQoXCJib2R5ICNyZXRyYWl0ZXJfc2VhbmNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgaWYgKG9iai5ncm91cGUgPT09IFwiXCIpIHtcclxuICAgICAgICBvYmouZ3JvdXBlID0gXCJlbXB0eVwiO1xyXG4gICAgICB9XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvdHJhaXRlbWVudF9hc3NpZHVpdGVcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAvLyBwcm9tb3Rpb246IG9iai5wcm9tb3Rpb24sXHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgICBkYXRlOiAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLFxyXG4gICAgICAgICAgLy8gaGQ6IG9iai5oZCxcclxuICAgICAgICAgIC8vIG1vZHVsZTogb2JqLm1vZHVsZSxcclxuICAgICAgICAgIC8vIGdyb3VwZTogb2JqLmdyb3VwZSxcclxuICAgICAgICAgIC8vIHNhbGU6IG9iai5zYWxlLFxyXG4gICAgICAgICAgdHlwZSA6ICdyZXRyYWl0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxvYWRlcl9oaWRlKCk7XHJcbiAgICAgICAgfSwxMDAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGZldWlsZSBwZGYgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjYXNzaWR1aXRlX3ByaW50XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICBsb2FkZXJfaGlkZSgpO1xyXG4gIH0sMTAwMCk7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmLycrb2JqLnNlYW5jZSwgJ19ibGFuaycpO1xyXG5cclxufSk7XHJcbn0pO1xyXG5cclxuLy8gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbi8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBzaXR1YXRpb24gcHJlc2VudGlsIHBkZiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLyAgICQoXCJib2R5ICNzaXR1YXRpb25fcHJlc2VudGllbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIC8vIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbi8vICAgICAgIHZhciBldHVkaWFudCA9ICQoXCIjRXRfc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyAgICAgICAvLyB2YXIgZGF0ZV9kZWJ1dCA9ICQoXCIjZGF0ZXRpbWVEc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyAgICAgICAvLyB2YXIgZGF0ZV9maW4gPSAkKFwiI2RhdGV0aW1lRnNpdHVhdGlvblwiKS52YWwoKTtcclxuXHJcbi8vICAgICB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZl9wcmVzZW50aWVsLycrZXR1ZGlhbnQsICdfYmxhbmsnKTtcclxuXHJcbi8vIC8vIH0pO1xyXG4vLyB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogcmVtb3ZlIHNlYW5jZSAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjcmVtb3ZlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmxvYWRlcjInKS5mYWRlSW4oKTtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3JlbW92ZV9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lIHRlY2huaXF1ZSAgIScsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBleGlzdGUgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2V4aXN0ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2V4aXN0X3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHNpZ24gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3NpZ25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3NpZ25fc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NlYW5jZSBzaWduw6knLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBjYW5jZWwgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2NhbmNlbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9jYW5jZWxfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGRldmVyb3UgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2RldmVyX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBtb2RpZmllcl9zYWxsZSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNtb2Rpc2FsbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgdmFyIHNhbGxlID0gJChcIiNzYWxsZVwiKS52YWwoKTtcclxuICAgIFxyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvbW9kaWZpZXJfc2FsbGUvXCIrb2JqLnNlYW5jZStcIi9cIitzYWxsZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IG1vZGlmaWVyX3NhbGxlICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3Zlcm91aWxsZXItbW9kYWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2xvY2tfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBhcmxvdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2VsZWN0cygpeyAgXHJcbiAgdmFyIGVsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnY2hrJyk7ICBcclxuICBmb3IodmFyIGk9MDsgaTxlbGUubGVuZ3RoOyBpKyspeyAgXHJcbiAgICAgIGlmKGVsZVtpXS50eXBlPT0nY2hlY2tib3gnKSAgXHJcbiAgICAgICAgICBlbGVbaV0uY2hlY2tlZD10cnVlOyAgXHJcbiAgfSAgXHJcbn0gIFxyXG5mdW5jdGlvbiBkZVNlbGVjdCgpeyAgXHJcbiAgdmFyIGVsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnY2hrJyk7ICBcclxuICBmb3IodmFyIGk9MDsgaTxlbGUubGVuZ3RoOyBpKyspeyAgXHJcbiAgICAgIGlmKGVsZVtpXS50eXBlPT0nY2hlY2tib3gnKSAgXHJcbiAgICAgICAgICBlbGVbaV0uY2hlY2tlZD1mYWxzZTsgIFxyXG4gICAgICAgIFxyXG4gIH0gIFxyXG59ICAgICAgICAgIFxyXG4kKFwiYm9keSAjY2hlY2tcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vIGFsZXJ0KCdvaycpO1xyXG5zZWxlY3RzKCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XHJcbiQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbn0pO1xyXG4kKFwiYm9keSAjdW5jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gYWxlcnQoJ29rJyk7XHJcbmRlU2VsZWN0KCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XHJcbiQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwb2ludGV1c2UgY2hlY2sgL3VuY2hlY2sgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKFwiYm9keSAjcF9jaGVja1wiKS5jbGljayhmdW5jdGlvbiAoKSAge1xyXG5hbGVydCgnb2snKTtcclxuc2VsZWN0cygpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xyXG4gXHJcbn0pO1xyXG4kKFwiYm9keSAjcF91bmNoZWNrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5hbGVydCgnb2snKTtcclxuZGVTZWxlY3QoKTsgIC8vICQoXCIjcGFybG90X21vZGFsXCIpLnNob3coKTtcclxuIFxyXG59KTtcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBhcmxvdF9oZC1mIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJChcImJvZHkgI3BhcmxvdF9zZWFyY2hcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICB2YXIgaGQgPSAkKFwiI2hkXCIpLnZhbCgpO1xyXG4gIHZhciBoZiA9ICQoXCIjaGZcIikudmFsKCk7XHJcbiAgdmFyIGRhdGUgPSAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogXCIvYXBpL3BhcmxvdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBoZDogaGQsXHJcbiAgICAgIGhmOiBoZixcclxuICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICBcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjcGFybG90X2RhdGF0YWJsZVwiKSkge1xyXG4gICAgICAgICAgJChcIiNwYXJsb3RfZGF0YXRhYmxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCIjcGFybG90X2RhdGF0YWJsZVwiKVxyXG4gICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgfSk7XHJcbiAgfSxcclxuICB9KTtcclxuIFxyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFybG90X3RyYWl0ZW1lbnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKFwiYm9keSAjcGFybG90X3RyYWl0ZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGhkID0gJChcIiNoZFwiKS52YWwoKTtcclxuICB2YXIgaGYgPSAkKFwiI2hmXCIpLnZhbCgpO1xyXG4gIHZhciBkYXRlID0gJChcIiNkYXRldGltZVwiKS52YWwoKTtcclxuICBsZXQgcmVzdWx0O1xyXG4gICAgICB2YXIgdmFsID0gW107XHJcbiAgICAgICQoJzpjaGVja2JveDpjaGVja2VkJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICB2YWxbaV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgZm9yKGxldCB2YWx1ZSBvZiB2YWwpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2ltcG9ydCcsIHtcclxuICAgICAgLy8gICBzZWFuY2U6IHZhbHVlLFxyXG4gICAgICAvLyAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgIC8vICAgdHlwZSA6ICd0cmFpdGUnLFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIHJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvdHJhaXRlbWVudF9hc3NpZHVpdGVcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IHZhbHVlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIHR5cGUgOiAndHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4vLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbi8vIGFsZXJ0KGh0bWwpO1xyXG4vLyAgICAgLy8gd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGYvJytodG1sLCAnX2JsYW5rJyk7XHJcbi8vICAgfSxcclxuXHJcbiAgICAgIH0pO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbiAgICAgIH1cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9wYXJsb3RcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBoZDogaGQsXHJcbiAgICAgICAgICBoZjogaGYsXHJcbiAgICAgICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI3BhcmxvdF9kYXRhdGFibGVcIikpIHtcclxuICAgICAgICAgICAgICAkKFwiI3BhcmxvdF9kYXRhdGFibGVcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkKFwiI3BhcmxvdF9kYXRhdGFibGVcIilcclxuICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IobGV0IHZhbHVlIG9mIHZhbCl7XHJcblxyXG4gd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGYvJyt2YWx1ZSwgJ19ibGFuaycpO1xyXG5cclxuICAgICAgfVxyXG4gICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG59KTtcclxuXHJcblxyXG5cclxuLy8gJChcImJvZHkgI3NpdHVhdGlvbl9zZWFyY2hcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vIGV0dWRpYW50ID0gJChcIiNFdF9zaXR1YXRpb25cIikudmFsKCk7XHJcbi8vIGRhdGVkID0gJChcIiNkYXRldGltZURzaXR1YXRpb25cIikudmFsKCk7XHJcbi8vIGRhdGVmID0gJChcIiNkYXRldGltZUZzaXR1YXRpb25cIikudmFsKCk7XHJcbi8vICQuYWpheCh7XHJcbi8vICAgdHlwZTogXCJQT1NUXCIsXHJcbi8vICAgdXJsOiBcIi9hcGkvYWZmX3NpdHVhdGlvblwiLFxyXG4vLyAgIGRhdGE6IHtcclxuLy8gICAgIGV0dWRpYW50IDogZXR1ZGlhbnQsXHJcbi8vICAgICBkYXRlZCA6IGRhdGVkLFxyXG4vLyAgICAgZGF0ZWYgOiBkYXRlZiAsXHJcbi8vICAgfSxcclxuLy8gICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4vLyAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9zaXR1YXRpb25cIikpIHtcclxuLy8gICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfc2l0dWF0aW9uXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfc2l0dWF0aW9uXCIpXHJcbi8vICAgICAgIC5odG1sKGh0bWwpXHJcbi8vICAgICAgIC5EYXRhVGFibGUoe1xyXG4vLyAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4vLyAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuLy8gICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbi8vICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuLy8gICAgICAgfSk7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuLy8gfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vL2V0YWJsaXNzZW1lbnQvLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjRV9zaXR1YXRpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV0YWJsaXNzZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL0Zvcm1hdGlvbl9hZmYvXCIgKyBldGFibGlzc2VtZW50LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNGX3NpdHVhdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICQoXCIjRl9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyAkKFwiI0Zfc2l0dWF0aW9uXCIpLnZhbCgpLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgJChcIiNQX3NpdHVhdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgICAgICBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKCQoXCIjUF9zaXR1YXRpb25cIikudmFsKCkpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vRm9tYXRpb24vLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjRl9zaXR1YXRpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvUHJvbW90aW9uX2FmZi9cIiArIGZvcm1hdGlvbixcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgIGV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UoJChcIiNQX3NpdHVhdGlvblwiKS52YWwoKSk7XHJcblxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9Qcm9tb3Rpb24vLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjUF9zaXR1YXRpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKHByb21vdGlvbik7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiBcclxuICAgICAgICAgICAgXHJcbi8vICAvLy8vLy8vLy8vLy8vLy8vLy9leHRyYWN0aW9uLy8vLy8vLy8vLy8vLy8vLzpcclxuLy8gICQoJyNjcmVhdGVfZXh0cmFjdGlvbicpLmNsaWNrKGZ1bmN0aW9uKCl7IFxyXG5cclxuLy8gICB2YXIgdG8gPSAkKCcjZGF0ZXRpbWVGc2l0dWF0aW9uJykudmFsKCk7XHJcbi8vICAgdmFyIGZyb20gPSAkKCcjZGF0ZXRpbWVEc2l0dWF0aW9uJykudmFsKCk7XHJcbi8vICAgdmFyIHNlcnZpY2UgPSAkKCcjRV9zaXR1YXRpb24nKS52YWwoKTtcclxuLy8gICB2YXIgZm9ybWF0aW9uID0gJCgnI0Zfc2l0dWF0aW9uJykudmFsKCk7XHJcbi8vICAgdmFyIHByb21vdGlvbiA9ICQoJyNQX3NpdHVhdGlvbicpLnZhbCgpO1xyXG5cclxuXHJcbi8vICAgdmFyIHRvdSA9ICAkKCdpbnB1dFtuYW1lPVwidG91c1wiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgXHJcbi8vICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwie3sgcGF0aCgnZXh0cmFjdGlvbicpIH19P1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbTtcclxuLy8gICAgICAgICAgdXJsID0gXCIvYXBpL2dlbmVyYXRlX2V4dHJhY3Rpb24/VG89XCIrdG8rXCImRnJvbT1cIitmcm9tK1wiJmZvcm1hdGlvbj1cIitmb3JtYXRpb24rXCImcHJvbW90aW9uPVwiK3Byb21vdGlvbitcIiZTZXJ2aWNlPVwiK3NlcnZpY2UrXCImVG91PVwiK3RvdStcIiZ0eXBlPW5vcm1hbFwiOztcclxuLy8gICAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcclxuICAgICAgICAgICBcclxuXHJcbi8vICAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmFjdGlvbiBzdGFnZS8vLy8vLy8vLy8vLy8vLy86XHJcbiAkKCcjY3JlYXRlX2V4dHJhY3Rpb25fc3RhZ2UnKS5jbGljayhmdW5jdGlvbigpeyBcclxuXHJcbiAgdmFyIHRvID0gJCgnI2RhdGV0aW1lRnNpdHVhdGlvbicpLnZhbCgpO1xyXG4gIHZhciBmcm9tID0gJCgnI2RhdGV0aW1lRHNpdHVhdGlvbicpLnZhbCgpO1xyXG4gIHZhciBzZXJ2aWNlID0gJCgnI0Vfc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgdmFyIGZvcm1hdGlvbiA9ICQoJyNGX3NpdHVhdGlvbicpLnZhbCgpO1xyXG4gIHZhciBwcm9tb3Rpb24gPSAkKCcjUF9zaXR1YXRpb24nKS52YWwoKTtcclxuXHJcblxyXG4gIHZhciB0b3UgPSAgJCgnaW5wdXRbbmFtZT1cInRvdXNcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gIFxyXG4gICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInt7IHBhdGgoJ2V4dHJhY3Rpb24nKSB9fT9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb207XHJcbiAgICAgICAgIHVybCA9IFwiL2FwaS9nZW5lcmF0ZV9leHRyYWN0aW9uP1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbStcIiZmb3JtYXRpb249XCIrZm9ybWF0aW9uK1wiJnByb21vdGlvbj1cIitwcm9tb3Rpb24rXCImU2VydmljZT1cIitzZXJ2aWNlK1wiJlRvdT1cIit0b3UrXCImdHlwZT1zdGFnZVwiO1xyXG4gICAgICAgICBzZXJ2aWNlO1xyXG4gICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSk7ICAgICAgICBcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2V0dWRpYW50IGRldGFpbHMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikub24oXCJkYmxjbGlja1wiLCBcInRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgXHJcbiAgICAvLyBhbGVydChzdGF0dXQpO1xyXG4gICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICBcclxuICAgICAgIGlmIChvYmouc3RhdHV0ID09IDEpIHtcclxuICAgICAgICAkKFwiI2V0dWRpYW50X2RldF9tb2RhbFwiKS5tb2RhbChcInRvZ2dsZVwiKTtcclxuICAgICAgICAkKFwiI2V0dWRpYW50X2RldF9tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgdmFyIHJvd19ldHVkaWFudCA9ICQodGhpcykuY2xvc2VzdChcInRyXCIpO1xyXG4gICAgICAgIHZhciBpZF9ldHVkaWFudCA9IHJvd19ldHVkaWFudC5maW5kKFwidGQ6ZXEoMClcIikuaHRtbCgpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogXCIvYXBpL0V0dWRfZGV0YWlsc1wiLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBldHVkaWFudDogaWRfZXR1ZGlhbnQsXHJcbiAgICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfZXR1ZF9kZXQnKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgIH1cclxuXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vdmFsaWRlciBldHVkaWFudCBkZXRhaWxzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoXCJib2R5ICNzYXZlX2V0dWRfZGV0XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGp1c3RpZiA9IDA7XHJcbiAgICBpZiAoJCgnaW5wdXQuanVzdGlmaWVyJykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAganVzdGlmID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL0V0dWRfZGV0YWlsc192YWxpZGVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGV0dWRpYW50OiAkKCcjSURfQWRtaXNzaW9uJykudmFsKCksXHJcbiAgICAgICAgc2VhbmNlOiAkKCcjSWRfU2VhbmNlJykudmFsKCksXHJcbiAgICAgICAgY2F0X2VuczogJCgnI0NhdGVnb3JpZV9lbnMnKS52YWwoKSxcclxuICAgICAgICBtb3RpZl9hYnM6ICQoJyNtb3RpZl9hYnMnKS52YWwoKSxcclxuICAgICAgICBvYnM6ICQoJyNvYnMnKS52YWwoKSxcclxuICAgICAgICBqdXN0aWY6IGp1c3RpZixcclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvYXBpL0V0dWRfYWZmXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBwcm9tb3Rpb246IG9iai5wcm9tb3Rpb24sXHJcbiAgICAgICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgICAgIGdyb3VwZTogb2JqLmdyb3VwZSxcclxuICAgICAgICAgICAgICBleGlzdGU6IG9iai5leGlzdGUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgWzE1LCAzMCwgNDUsIDYwLCA3NSwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLm1vZGFsKFwidG9nZ2xlXCIpO1xyXG4gICAgICAgICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9Qb2ludGFnZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiYm9keSAjcG9pbnRhZ2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuXHJcbmxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgaWYgKG9iai5zdGF0dXQgPT0gMSkge1xyXG5cclxuJC5hamF4KHtcclxuICB0eXBlOiBcIlBPU1RcIixcclxuICB1cmw6IFwiL2FwaS9FdHVkX3BvaW50YWdlXCIsXHJcbiAgZGF0YToge1xyXG4gICAgcHJvbW86ICQoJyNwcm9tb3Rpb24nKS52YWwoKSxcclxuICAgIGRhdGU6ICQoJyNkYXRldGltZScpLnZhbCgpLFxyXG4gICAgaGQ6IG9iai5oZCxcclxuICB9LFxyXG4gIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKSkge1xyXG4gICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTRcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTRcIilcclxuICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgWzE2LCAzMiwgNDgsIDY0LCA3NCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gIH0sXHJcbiAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgfSk7XHJcbn0sXHJcblxyXG59KTtcclxufVxyXG4gIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBQREYgXyBTeW50aGVzZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgJChcImJvZHkgI3N5bnRoZXNlX3NlYW5jZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgbG9hZGVyX2hpZGUoKTtcclxuICB9LDEwMDApO1xyXG5cclxuICAgIHZhciBkYXRlID0gJChcIiNkYXRldGltZVwiKS52YWwoKTtcclxuICAgIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmc3ludGhlc2UvJytkYXRlLCAnX2JsYW5rJyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiQoJyNFX3NpdHVhdGlvbicpLnNlbGVjdDIoKTtcclxuJCgnI0Zfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xyXG4kKCcjUF9zaXR1YXRpb24nKS5zZWxlY3QyKCk7XHJcbiQoJyNFdF9zaXR1YXRpb24nKS5zZWxlY3QyKCk7XHJcblxyXG5cclxuXHJcbiQoXCJidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICQoJy5sb2FkZXIyJykuZmFkZUluKCk7XHJcbn0pO1xyXG5cclxuJChcIi5jbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcubG9hZGVyMicpLmZhZGVPdXQoKTtcclxufSk7XHJcblxyXG5cclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9zb3VmaWFuZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhpZGUiLCJsb2FkZXJfaGlkZSIsInRhYmxlRGF0YSIsInNlYW5jZWFmZmljaGFnZSIsInZhcjEiLCJ2YXIyIiwidmFyMyIsInNob3ciLCJhamF4IiwidHlwZSIsInVybCIsInN1Y2Nlc3MiLCJodG1sIiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImJMZW5ndGhDaGFuZ2UiLCJsZW5ndGhNZW51IiwiZXJyb3IiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSIsImhpZ2hsaWdodCIsImFkZENsYXNzIiwicHJvcCIsIm9uIiwiZXRhYmxpc3NlbWVudCIsInZhbCIsImZvcm1hdGlvbiIsInByb21vdGlvbiIsImRhdGUiLCJub3ciLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInNsaWNlIiwibW9udGgiLCJnZXRNb250aCIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJsaXN0Iiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiY3VycmVudFJvdyIsImNsb3Nlc3QiLCJzdGF0dXQiLCJmaW5kIiwicHVzaCIsInNlYW5jZSIsImdyb3VwZSIsImhkIiwiaGYiLCJtb2R1bGUiLCJzYWxlIiwic2FsbGUiLCJuYXR1cmUiLCJlbGVtZW50IiwiZW5zZWlnbmFudCIsImV4aXN0ZSIsImNzcyIsImZvckVhY2giLCJvYmoiLCJkYXRhIiwibW9kYWwiLCJidXR0b24iLCJhdHRyIiwiZmFkZU91dCIsInNldEludGVydmFsIiwid2luZG93Iiwib3BlbiIsImZhZGVJbiIsInNlbGVjdHMiLCJlbGUiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJsZW5ndGgiLCJjaGVja2VkIiwiZGVTZWxlY3QiLCJjbGljayIsImFsZXJ0IiwiZWFjaCIsInZhbHVlIiwicmVzdWx0IiwiY29uc29sZSIsInRvIiwiZnJvbSIsInNlcnZpY2UiLCJ0b3UiLCJyb3dfZXR1ZGlhbnQiLCJpZF9ldHVkaWFudCIsImV0dWRpYW50IiwianVzdGlmIiwiaXMiLCJjYXRfZW5zIiwibW90aWZfYWJzIiwib2JzIiwicHJvbW8iLCJzZWxlY3QyIl0sInNvdXJjZVJvb3QiOiIifQ==