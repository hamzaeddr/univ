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
  // $(".loader2").hide();
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
              [10, 20, 30, 40, 50, 20000000000000],
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
    return var1;
  }

///////////:datatable///////////////:

function highlight() {}
$("#dtDynamicVerticalScrollExample").DataTable({
 bLengthChange: false,
 lengthMenu: [
   [13, 25, 35, 50, 100, 20000000000000],
   [10, 15, 25, 50, 100, "All"],
 ],
});
//////dropdown select first //////////////////////////////   
  $("#etablissement").prop("selectedIndex", 1);
  $("#formation").prop("selectedIndex", 1);
  $("#promotion").prop("selectedIndex", 1);

//////Affich Seance first //////////////////////////////   

  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear() + "-" + month + "-" + day;

  $("#datetime").val(today);
  var promotion = $("#promotion").val();
  let list = [];
  seanceaffichage(promotion, today,'stage');



 
  $("#parlot").on("click", function () {
    $(".loader2").hide();
    
    });
///////////////etablissement//////////

$("#etablissement").on("change", function () {
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
          $(".loader2").hide();
          $("#promotion").html(html);
          $("#promotion").prop("selectedIndex", 1);
          seanceaffichage($("#promotion").val(), $("#datetime").val(),'stage');
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

$("#formation").on("change", function () {
  var formation = $(this).val();
  $.ajax({
    type: "POST",
    url: "/api/Promotion_aff/" + formation,
    success: function (html) {
      $(".loader2").hide();
      $("#promotion").html(html);
      $("#promotion").prop("selectedIndex", 1);
      seanceaffichage($("#promotion").val(), $("#datetime").val(),'stage');
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

$("#promotion").on("change", function () {
  var promotion = $(this).val();
  seanceaffichage(promotion, $("#datetime").val(),'stage');
});
///////////////Date//////////

$("#datetime").on("change", function () {
  var date = $(this).val();
  seanceaffichage($("#promotion").val(), date,'stage');
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
      $(".loader2").hide();
      $(".grid").html(html);

    },error:function(){
      $(".loader2").hide();
       Toast.fire({
         icon: 'error',
         title: 'Probleme  !',
          });
  },
    
});
});
}
// console.log(list);

});


////////////////////////////////:: pop up etudiant ////////////////////////////////////:
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
  $("#etudiant-modal").modal("show");
  // console.log(obj);
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


////////////////////////////////:: traitement ////////////////////////////////////:
$("body #traite_epreuve").on("click", function () {
  $(".loader2").show();
  list.forEach((obj) => {
    if (obj.groupe === "") {
      obj.groupe = "empty";
    }
    if ( obj.statut != '1'){
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
        type : 'traite',
      },
      success: function (html) {
        $(".loader2").hide();
        seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
        Toast.fire({
          icon: 'success',
          title: 'seance traité avec succes',
        })
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
        $(".loader2").hide();
         Toast.fire({
           icon: 'error',
           title: 'Probleme  !',
            });
    },
    });
  }
  else{
    $(".loader2").hide();
    Toast.fire({
      icon: 'error',
      title: 'seance deja traité',
  })
  }

  });
});

////////////////////////////////:: retraiter  ////////////////////////////////////:

$("body #retraiter_seance").on("click", function () {
  $(".loader2").show();
  // $(".loader2").hide();
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
});

////////////////////////////////:: feuile pdf  ////////////////////////////////////:
$("body #assiduite_print").on("click", function () {
  list.forEach((obj) => {

  window.open('/assiduite/assiduites/pdf/'+obj.seance, '_blank');

});
});

////////////////////////////////::  ////////////////////////////////////:
////////////////////////////////:: remove seance   ////////////////////////////////////:
$("body #remove").on("click", function () {
  $(".loader2").show();
  list.forEach((obj) => {

    $.ajax({
      type: "POST",
      url: "/api/remove_seance/"+obj.seance,
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
    },
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
        $(".loader2").hide();
        seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
      
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
        $(".loader2").hide();
        Toast.fire({
          icon: 'success',
          title: 'seance signé',
      })
        seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
      
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
    },
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
    },
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
        seanceaffichage($("#promotion").val(), $("#datetime").val(),'CR');
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

});
 
});
 
// $("button").on("click", function () {
// $('.loader2').fadeIn();
// });

// $(".close").on("click", function () {
// $('.loader2').fadeOut();
// });
$("button").on("click", function () {
  $('.loader2').show();
  });
  
  $(".close").on("click", function () {
  $('.loader2').hide();
  });
  




/////////////////////////////// parlot_hd-f ////////////////////////////////////

$("body #parlot_search").on("click", function () {
  $(".loader2").show();
var hd = $("#hd").val();
var hf = $("#hf").val();
var date = $("#datetime").val();
var type = "stage";
$.ajax({
  type: "POST",
  url: "/api/parlot",
  data: {
    hd: hd,
    hf: hf,
    date: date,
    type: type,
   
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
////////////////////////////////////////////////////////////////////:
});

/////////////////////////////// parlot ////////////////////////////////////
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
});
