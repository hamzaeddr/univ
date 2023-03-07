const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
$(document).ready(function () {
  /////////////////function loader hide////////////
  $(".loader2").hide();

function loader_hide() {
  $(".loader2").hide();
}
  // $(".loader").hide();
  // $("#etudiant_det_modal").hide();
/////////////////////////////////// datatable //////////////////////////
  var tableData = [];
    function seanceaffichage(var1, var2, var3) {
        $(".loader2").show();

          $.ajax({
            type: "POST",
            url: "/api/Seance_aff/" + var1 + "/" + var2 + "/" + var3,
            success: function (html) {
              $(".loader2").hide();
              if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample")) {
                $("#dtDynamicVerticalScrollExample").DataTable().clear().destroy();
              }
              $("#dtDynamicVerticalScrollExample")
                .html(html)
                .DataTable({
                  bLengthChange: false,
                  lengthMenu: [
                    [10, 20, 30, 40,50, 20000000000000],
                    [10, 15, 25, 50, 100, "All"],
                  ],
                  "font-size": "3rem",
                });
                $(".loader2").hide();
            },
            error:function(){
             $(".loader2").hide();
              Toast.fire({
                icon: 'error',
                title: 'Probleme  !',
                 });
         }
          });
          return var1;
        }


/////////////////dropdown-etdiants////////////////////////////

  function etudiant_situation_affichage(var1) {
    $(".loader2").show();
      $.ajax({
        type: "POST",
        url: "/api/etud_aff_situation/" + var1,
        success: function (html) {
        $(".loader2").hide();
        // loader_hide();
        $("#Et_situation").html(html);   
      
        },
          error:function(){
        $(".loader2").hide();
      //  loader_hide();
        Toast.fire({
          icon: 'error',
          title: 'Probleme  !',
            });
    }
      });
      return var1;
    }
////////////////////////////////////////////////////////////////

          function highlight() {}
          $("#dtDynamicVerticalScrollExample").DataTable({
            bLengthChange: false,
            lengthMenu: [
              [13, 25, 35, 50, 100, 20000000000000],
              [10, 15, 25, 50, 100, "All"],
            ],
          });
          
          $("#dtDynamicVerticalScrollExample_pointeuse").DataTable({
            bLengthChange: false,
            lengthMenu: [
              [13, 25, 35, 50, 100, 20000000000000],
              [10, 15, 25, 50, 100, "All"],
            ],
          });
          $("#dtDynamicVerticalScrollExample_pointeuse2").DataTable({
            bLengthChange: false,
            lengthMenu: [
              [13, 25, 35, 50, 100, 20000000000000],
              [10, 15, 25, 50, 100, "All"],
            ],
          });
          $("#dtDynamicVerticalScrollExample_situation").DataTable({
            bLengthChange: false,
            lengthMenu: [
              [13, 25, 35, 50, 100, 20000000000000],
              [10, 15, 25, 50, 100, "All"],
            ],
          });

          $("#dtDynamicVerticalScrollExample2").DataTable({
            bLengthChange: false,
          });

          $(".dataTables_length").addClass("bs-select");
  ////////////////  //////////////////////////
//////////////////////////////// dropdown //////////////////////////

  $("#etablissement").prop("selectedIndex", 1);
  $("#formation").prop("selectedIndex", 1);
  $("#promotion").prop("selectedIndex", 1);
  // -------------------------------------------------
// /////////////////////////////////dropdown-situation////////////////////////////
//   $("#E_situation").prop("selectedIndex", 1);
//   $("#F_situation").prop("selectedIndex", 1);
//   $("#P_situation").prop("selectedIndex", 1);

/////////////////////////////////////////////etablissement//////////

    $("#etablissement").on("change", function () {
      $(".loader2").show();
      var etablissement = $(this).val();
      $.ajax({
        type: "POST",
        url: "/api/Formation_aff/" + etablissement,
        success: function (html) {
          $(".loader2").hide();
          $("#formation").html(html);
          $("#formation").prop("selectedIndex", 1);

          $.ajax({
            type: "POST",
            url: "/api/Promotion_aff/" + $("#formation").val(),
            success: function (html) {
              $("#promotion").html(html);
              $("#promotion").prop("selectedIndex", 1);
              seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
            },
            error:function(){
              $(".loader2").hide();
                Toast.fire({
                  icon: 'error',
                  title: 'Probleme  !',
                });
            }
          });
        },
      });
    });
///////////////////////////////////////////////Fomation//////////

  $("#formation").on("change", function () {
    $(".loader2").show();
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function (html) {
        $(".loader2").hide();
        $("#promotion").html(html);
        $("#promotion").prop("selectedIndex", 1);
        seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
      },
       error:function(){
             $(".loader2").hide();
              Toast.fire({
                icon: 'error',
                title: 'Probleme  !',
                 });
         }
    });
  });
////////////////////////////////////////////////Promotion//////////

  $("#promotion").on("change", function () {
    var promotion = $(this).val();
    seanceaffichage(promotion, $("#datetime").val(),'CR');
  });
////////////////////////////////////////////////Date//////////

  $("#datetime").on("change", function () {
    var date = $(this).val();
    seanceaffichage($("#promotion").val(), date,'CR');
  });

  ///////////////////////////////////////////// date //////////////////////////

  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear() + "-" + month + "-" + day;

  $("#datetime").val(today);
  var promotion = $("#promotion").val();
  let list = [];
  seanceaffichage(promotion, today,'CR');


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
        statut: currentRow.find("td:eq(1)").html(),
      });
      $("#traite_epreuve").hide();
      $("#retraiter_seance").hide();
      $("#deverouiller-modal").hide();
      $("#verouiller-modal").hide();
      $("#assiduite_print").hide();
      if (statut == '1') {
        $("#traite_epreuve").css({ "display": "none" });
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
    if(statut == '1' || statut == '2'){
    list.forEach((obj) => {

    $.ajax({
      type: "POST",
      url: "/api/count_seance/"+obj.seance,
      data: {
       
        seance: obj.seance,
        
      },
      success: function (html) {
        $(".grid").html(html);
        
        // $(".grid").clear().destroy();
      },
      error:function(){
        $(".loader2").hide();
         Toast.fire({
           icon: 'error',
           title: 'Probleme  !',
            });
    }
  });
  });
}
// console.log(list);

  });

  ////////////////////////////////:: pop up etudiant ////////////////////////////////////:
  $("body #dtDynamicVerticalScrollExample").on("dblclick", "tr", function () {

    $("#etudiant-modal").modal("toggle");
    $("#etudiant-modal").modal("show");
    list.forEach((obj) => {
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
          existe: obj.existe,
        },
        success: function (html) {
          // $(".loader2").hide();
          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample2")) {
            $("#dtDynamicVerticalScrollExample2").DataTable().clear().destroy();
          }
          $("#dtDynamicVerticalScrollExample2")
            .html(html)
            .DataTable({
              bLengthChange: false,
              lengthMenu: [
                [12, 24, 36, 48, 60, 20000000000000],
                [10, 15, 25, 50, 100, "All"],
              ],
            });
        },
        error:function(){
          $(".loader2").hide();
           Toast.fire({
             icon: 'error',
             title: 'Probleme  !',
              });
      }
      });
    });
  });
////////////////////////////////:: traitement ////////////////////////////////////:
  $("body #traite_epreuve").on("click", function () {
    $(".loader2").show();
    var icon = $(this).find('i');
    var button = $(this);

    list.forEach((obj) => {
      if (obj.groupe === "") {
        obj.groupe = "empty";
      }
      if ( obj.statut != '1'){
    button.attr("disabled", true);
      // $(".loader2").show();
      icon.removeClass('fa-clock').addClass("fa-spinner fa-spin");
      $.ajax({
        type: "POST",
        url: "/api/traitement_assiduite",
        data: {
          seance: obj.seance,
          date: $("#datetime").val(),
          type : 'traite',
        },
        success: function (html) {
          $(".loader2").hide();
          icon.removeClass('fa-spinner fa-spin').addClass("fa-clock");
          button.attr("disabled", false);
          seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
          Toast.fire({
            icon: 'success',
            title: 'seance traité avec succes',
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
        error:function(){
          
          Toast.fire({
            icon: 'error',
            title: 'Probleme  !',
          });
          $(".loader2").hide();
        }
      });
     
    }
    else{
      $(".loader2").hide();
      Toast.fire({
        icon: 'error',
        title: 'seance deja traité',

      })
      // $(".loader2").hide();
    };
    
  });
      
});

  ////////////////////////////////:: retraiter  ////////////////////////////////////:

  $("body #retraiter_seance").on("click", function () {
    $(".loader2").show();
    list.forEach((obj) => {
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
          type : 'retraite',
        },
        success: function (html) {
          $(".loader2").hide();
          seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
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
        },1000);
        },
        error:function(){
          $(".loader2").hide();
           Toast.fire({
             icon: 'error',
             title: 'Probleme  !',
              });
      }
      });
    });
  });

  ////////////////////////////////:: feuile pdf  ////////////////////////////////////:
  $("body #assiduite_print").on("click", function () {
    $(".loader2").show();
    setInterval(function () {
      loader_hide();
  },1000);
    list.forEach((obj) => {

    window.open('/assiduite/assiduites/pdf/'+obj.seance, '_blank');

});
});

//   ////////////////////////////////::  ////////////////////////////////////:
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
    // $('.loader2').fadeIn();
    $(".loader2").show();
    list.forEach((obj) => {

      $.ajax({
        type: "POST",
        url: "/api/remove_seance/"+obj.seance,
        data: {
          seance: obj.seance,
         
        },
        success: function (html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
          $(".loader2").hide();
        
        },
        error:function(){
          $(".loader2").hide();
           Toast.fire({
             icon: 'error',
             title: 'Probleme technique  !',
              });
      }
      });
  
  });
   
});

  ////////////////////////////////:: existe   ////////////////////////////////////:
  $("body #existe").on("click", function () {
    $(".loader2").show();
    list.forEach((obj) => {
      $.ajax({
        type: "POST",
        url: "/api/exist_seance/"+obj.seance,
        data: {
        seance: obj.seance, 
        },
        success: function (html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
          $(".loader2").hide();
        },
        error:function(){
          $(".loader2").hide();
           Toast.fire({
             icon: 'error',
             title: 'Probleme  !',
              });
      }
      });
  
  });
   
});

  ////////////////////////////////:: sign   ////////////////////////////////////:
  $("body #sign").on("click", function () {
    $(".loader2").show();
    list.forEach((obj) => {

      $.ajax({
        type: "POST",
        url: "/api/sign_seance/"+obj.seance,
        data: {
          seance: obj.seance,
         
        },
        success: function (html) {
          Toast.fire({
            icon: 'success',
            title: 'seance signé',
        })
          seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
          $(".loader2").hide();
        },
        error:function(){
          $(".loader2").hide();
           Toast.fire({
             icon: 'error',
             title: 'Probleme  !',
              });
      }
      });
  
  });
  
});

  ////////////////////////////////:: cancel   ////////////////////////////////////:
  $("body #cancel").on("click", function () {
    $(".loader2").show();
    list.forEach((obj) => {

      $.ajax({
        type: "POST",
        url: "/api/cancel_seance/"+obj.seance,
        data: {
          seance: obj.seance,
         
        },
        success: function (html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
          $(".loader2").hide();
        },
        error:function(){
          $(".loader2").hide();
           Toast.fire({
             icon: 'error',
             title: 'Probleme  !',
              });
      }
      });
  
  });
   
});

  ////////////////////////////////::  ////////////////////////////////////:
  ////////////////////////////////:: deverou  ////////////////////////////////////:
  $("body #deverouiller-modal").on("click", function () {
    $(".loader2").show();
    list.forEach((obj) => {

      $.ajax({
        type: "POST",
        url: "/api/dever_seance/"+obj.seance,
        data: {
          seance: obj.seance,
         
        },
        success: function (html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
          $(".loader2").hide();
        },
        error:function(){
          $(".loader2").hide();
           Toast.fire({
             icon: 'error',
             title: 'Probleme  !',
              });
      }
      });
  
  });
   
});
  ////////////////////////////////:: modifier_salle  ////////////////////////////////////:
  $("body #modisalle").on("click", function () {
    $(".loader2").show();
    var salle = $("#salle").val();
    
    list.forEach((obj) => {

      $.ajax({
        type: "POST",
        url: "/api/modifier_salle/"+obj.seance+"/"+salle,
        data: {
          seance: obj.seance,
         
        },
        success: function (html) {
          $(".loader2").hide();
          seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
          $(".loader2").hide();
        },
        error:function(){
          $(".loader2").hide();

           Toast.fire({
             icon: 'error',
             title: 'Probleme  !',
              });
      }
      });
  
  });
   
});
  ////////////////////////////////:: modifier_salle  ////////////////////////////////////:
  $("body #verouiller-modal").on("click", function () {
    $(".loader2").show();
    list.forEach((obj) => {

      $.ajax({
        type: "POST",
        url: "/api/lock_seance/"+obj.seance,
        data: {
        seance: obj.seance,
        },
        success: function (html) {
          $(".loader2").hide();
          seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
        },
        error:function(){
          $(".loader2").hide();
           Toast.fire({
             icon: 'error',
             title: 'Probleme  !',
              });
      }
      });
  
  });
   
});

//////////////////////////////// parlot ////////////////////////////////////
function selects(){  
  var ele=document.getElementsByName('chk');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=true;  
  }  
}  
function deSelect(){  
  var ele=document.getElementsByName('chk');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=false;  
        
  }  
}          
$("body #check").on("click", function () {
// alert('ok');
selects();  // $("#parlot_modal").show();
$(".loader2").hide();
});
$("body #uncheck").on("click", function () {
// alert('ok');
deSelect();  // $("#parlot_modal").show();
$(".loader2").hide();
});
//////////////////////////////// pointeuse check /uncheck ////////////////////////////////////

$("body #p_check").click(function ()  {
// alert('ok');
selects();  // $("#parlot_modal").show();
 
});
$("body #p_uncheck").on("click", function () {
// alert('ok');
deSelect();  // $("#parlot_modal").show();
 
});
  ////////////////////////////////::  ////////////////////////////////////:
//////////////////////////////// parlot_hd-f ////////////////////////////////////

$("body #parlot_search").on("click", function () {
  $(".loader2").show();
  var hd = $("#hd").val();
  var hf = $("#hf").val();
  var date = $("#datetime").val();
  $.ajax({
    type: "POST",
    url: "/api/parlot",
    data: {
      hd: hd,
      hf: hf,
      date: date,
     
    },
    success: function (html) {
      $(".loader2").hide();
      if ($.fn.DataTable.isDataTable("#parlot_datatable")) {
          $("#parlot_datatable").DataTable().clear().destroy();
      }
      $("#parlot_datatable")
        .html(html)
        .DataTable({
          bLengthChange: false,
          lengthMenu: [
            [11, 25, 35, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
          ],
          "font-size": "3rem",
        });
    },
    error:function(){
      $(".loader2").hide();
       Toast.fire({
         icon: 'error',
         title: 'Probleme  !',
          });
  },
  });
 
});
//////////////////////////////// parlot_traitement ////////////////////////////////////

$("body #parlot_traiter").on("click", async function () {
  $(".loader2").show();
  var hd = $("#hd").val();
  var hf = $("#hf").val();
  var date = $("#datetime").val();
  let result;
      var val = [];
      $(':checkbox:checked').each(function(i){
        val[i] = $(this).val();
      });
      for(let value of val){
    try {
      // const request = await axios.post('/administration/epreuve/import', {
      //   seance: value,
      //   date: $("#datetime").val(),
      //   type : 'traite',
      // });

      result = await $.ajax({
        type: "POST",
        url: "/api/traitement_assiduite",
        data: {
          seance: value,
          date: $("#datetime").val(),
          type : 'traite',
        },
//         success: function (html) {
// alert(html);
//     // window.open('/assiduite/assiduites/pdf/'+html, '_blank');
//   },

      });
} catch (error) {
      console.error(error);
  }
      }
      $.ajax({
        type: "POST",
        url: "/api/parlot",
        data: {
          hd: hd,
          hf: hf,
          date: date,
         
        },
        success: function (html) {
          $(".loader2").hide();
          if ($.fn.DataTable.isDataTable("#parlot_datatable")) {
              $("#parlot_datatable").DataTable().clear().destroy();
          }
          $("#parlot_datatable")
            .html(html)
            .DataTable({
              bLengthChange: false,
              lengthMenu: [
                [11, 25, 35, 50, 100, 20000000000000],
                [10, 15, 25, 50, 100, "All"],
              ],
              "font-size": "3rem",
            });
        },
        error:function(){
          $(".loader2").hide();
           Toast.fire({
             icon: 'error',
             title: 'Probleme  !',
              });
      },
      });
      for(let value of val){

 window.open('/assiduite/assiduites/pdf/'+value, '_blank');

      }
      $(".loader2").hide();
  ////////////////////////////////////////////////////////////////////:
});



// $("body #situation_search").on("click", function () {
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
    $(".loader2").show();
    var etablissement = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Formation_aff/" + etablissement,
      success: function (html) {
        $(".loader2").hide();
        $("#F_situation").html(html);
        $("#F_situation").prop("selectedIndex", 1);

        $.ajax({
          type: "POST",
          url: "/api/Promotion_aff/" + $("#F_situation").val(),
          success: function (html) {
            $(".loader2").hide();
            $("#P_situation").html(html);
            $("#P_situation").prop("selectedIndex", 1);
            etudiant_situation_affichage($("#P_situation").val());
          },
          error:function(){
            $(".loader2").hide();
             Toast.fire({
               icon: 'error',
               title: 'Probleme  !',
                });
        },
        });
      },
      error:function(){
        $(".loader2").hide();
         Toast.fire({
           icon: 'error',
           title: 'Probleme  !',
            });
    },
    });
  });
  ///////////////Fomation//////////

  $("#F_situation").on("change", function () {
    $(".loader2").show();
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function (html) {
        $(".loader2").hide();
        $("#P_situation").html(html);
        $("#P_situation").prop("selectedIndex", 1);
        etudiant_situation_affichage($("#P_situation").val());

      },
      error:function(){
        $(".loader2").hide();
         Toast.fire({
           icon: 'error',
           title: 'Probleme  !',
            });
    },
    });
  });
  ///////////////Promotion//////////

  $("#P_situation").on("change", function () {
    $(".loader2").show();
    var promotion = $(this).val();
    etudiant_situation_affichage(promotion);

  });


 
            
//  //////////////////extraction////////////////:
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
 $('#create_extraction_stage').click(function(){ 
  $(".loader2").show();
  var to = $('#datetimeFsituation').val();
  var from = $('#datetimeDsituation').val();
  var service = $('#E_situation').val();
  var formation = $('#F_situation').val();
  var promotion = $('#P_situation').val();


  var tou =  $('input[name="tous"]:checked').val();
  $(".loader2").hide();
          // window.location.href = "{{ path('extraction') }}?To="+to+"&From="+from;
         url = "/api/generate_extraction?To="+to+"&From="+from+"&formation="+formation+"&promotion="+promotion+"&Service="+service+"&Tou="+tou+"&type=stage";
         service;
         window.open(url);
           

            });        
  //////////////////////////etudiant details ////////////////////////////////////////////

  $("body #dtDynamicVerticalScrollExample2").on("dblclick", "tr", function () {
    $(".loader2").show();
    // alert(statut);
     list.forEach((obj) => {
    
       if (obj.statut == 1) {
        $("#etudiant_det_modal").modal("toggle");
        $("#etudiant_det_modal").modal("show");
        var row_etudiant = $(this).closest("tr");
        var id_etudiant = row_etudiant.find("td:eq(0)").html();
        $.ajax({
          type: "POST",
          url: "/api/Etud_details",
          data: {
            etudiant: id_etudiant,
            seance: obj.seance
            
          },
          success: function (html) {
            $(".loader2").hide();
            $('#modal_etud_det').html(html);
          },
          error:function(){
            $(".loader2").hide();
             Toast.fire({
               icon: 'error',
               title: 'Probleme  !',
                });
        },
        });
       }

     
     
    });
  });


  //////////////////////////valider etudiant details ////////////////////////////////////////////

  $("body #save_etud_det").on("click", function () {
    $(".loader2").show();
    let justif = 0;
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
        justif: justif,
        
      },
      success: function (html) {
        $(".loader2").hide();
        list.forEach((obj) => {
          $.ajax({
            type: "POST",
            url: "/api/Etud_aff",
            data: {
              promotion: obj.promotion,
              seance: obj.seance,
              groupe: obj.groupe,
              existe: obj.existe,
            },
            success: function (html) {
              $(".loader2").hide();
              if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample2")) {
                $("#dtDynamicVerticalScrollExample2").DataTable().clear().destroy();
              }
              $("#dtDynamicVerticalScrollExample2")
                .html(html)
                .DataTable({
                  bLengthChange: false,
                  lengthMenu: [
                    [15, 30, 45, 60, 75, 20000000000000],
                    [10, 15, 25, 50, 100, "All"],
                  ],
                });
            },
            error:function(){
              $(".loader2").hide();
               Toast.fire({
                 icon: 'error',
                 title: 'Probleme  !',
                  });
          },
          });
        });
        $("#etudiant_det_modal").modal("toggle");
        $("#etudiant_det_modal").modal("hide");
      
      },
    });
  });

  //////////////////////////Pointage ////////////////////////////////////////////

  $("body #pointage").on("click", function () {
    $(".loader2").show();
list.forEach((obj) => {
  if (obj.statut == 1) {

$.ajax({
  type: "POST",
  url: "/api/Etud_pointage",
  data: {
    promo: $('#promotion').val(),
    date: $('#datetime').val(),
    hd: obj.hd,
  },
  success: function (html) {
    $(".loader2").hide();
    if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample4")) {
      $("#dtDynamicVerticalScrollExample4").DataTable().clear().destroy();
    }
    $("#dtDynamicVerticalScrollExample4")
      .html(html)
      .DataTable({
        bLengthChange: false,
        lengthMenu: [
          [16, 32, 48, 64, 74, 20000000000000],
          [10, 15, 25, 50, 100, "All"],
        ],
      });
      $(".loader2").hide();
  },
  error:function(){
    $(".loader2").hide();
     Toast.fire({
       icon: 'error',
       title: 'Probleme  !',
        });
},

});
}
  });
  });

  ////////////////////////// PDF _ Synthese /////////////////////////////////////////////////////////////
  $("body #synthese_seance").on("click", function () {
    $(".loader2").show();
    setInterval(function () {
      loader_hide();
  },1000);

    var date = $("#datetime").val();
    window.open('/assiduite/assiduites/pdfsynthese/'+date, '_blank');
  });

  ///////////////////////////////////////////////////////////////////////////////////////

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


});
/////////////////////////////////////////////////soufiane ///////////////////////////////////////////////////////////////

