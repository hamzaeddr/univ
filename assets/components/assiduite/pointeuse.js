//////////////////////////////////////////////pointeuse--Interface////////////////////////////////////
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
////////////////////////////////////////////////////////////////////:
$(document).ready(function () {
 
//////////////////////////////// select all / unselect ////////////////////////////////////
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

function pointeuse_af(var1) {
$.ajax({
  type: "POST",
  url: "/api/pointeuse_aff/" + var1,
  success: function (html) {
$(".loader2").hide();

    if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse")) {
      $("#dtDynamicVerticalScrollExample_pointeuse").DataTable().clear().destroy();
    }
    $("#dtDynamicVerticalScrollExample_pointeuse")
      .html(html)
      .DataTable({
        bLengthChange: false,
        lengthMenu: [
          [11, 25, 35, 50, 100, 20000000000000],
          [10, 15, 25, 50, 100, "All"],
        ],
        "font-size": "3rem",
      });

 
  }
});
return var1;
}

//////////////////////////////// pointeuse check /uncheck ////////////////////////////////////

$("body #p_check").on("click", function () {
selects();  // $("#parlot_modal").show();

});
$("body #p_uncheck").on("click", function () {
deSelect();  // $("#parlot_modal").show();

});
$("#salle_pointeuse").on("change", function () {
  var salle = $(this).val();
  $(".loader").show();

  pointeuse_af(salle);
});
  ////////////////////////////////////////////////////////////////////

  $("body #dtDynamicVerticalScrollExample_pointeuse").on("click", "tr", function () {
    var selected = $(this).hasClass("highlighty");
    $("body #dtDynamicVerticalScrollExample_pointeuse tr").removeClass("highlighty");
    $("body #dtDynamicVerticalScrollExample_pointeuse tr").removeClass("odd");
    $("body #dtDynamicVerticalScrollExample_pointeuse tr").removeClass("even");

    if (!selected) {
      $(this).addClass("highlighty");
      var currentRow = $(this).closest("tr");
      list_pointeuse = [];
      list_pointeuse.push({
        sn: currentRow.find("td:eq(2)").html(),
        ip: currentRow.find("td:eq(3)").html(),
      });
     
     
    
    }


  });

  $("body #connect_pointeuse").on("click", function () {
    var val = [];
    $(':checkbox:checked').each(function(i){
      val[i] = $(this).val();
    });
    // alert(val);
    if (val.length === 0) {
      list_pointeuse.forEach((obj) => {
        $.ajax({
          type: "POST",
          url: "/api/pointeuse_connect/" + obj.ip +"/ip",
          success: function (html) {
            
            if(html == 'true'){
              Toast.fire({
                icon: 'success',
                title: 'Pointeuse connected',
            })
        
            }
            else{
              Toast.fire({
                icon: 'error',
                title: 'pointeuse not connected',
            })
        
        
        
            }
        
          }
            });
         });
    }
    else{
    for(let value of val){
      $.ajax({
        type: "POST",
        url: "/api/pointeuse_connect/" + value +"/sn",
        
        success: function (html) {
          
          if(html == 'true'){
            $('.'+value).removeClass("desconnected").removeClass("connected").addClass("connected");

            Toast.fire({
              icon: 'success',
              title: 'Pointeuse connected',
          })
      
          }
          else{
      $('.'+value).removeClass("desconnected").removeClass("connected").addClass("desconnected");

            Toast.fire({
              icon: 'error',
              title: 'pointeuse not connected',
          })
      
      
      
          }
      
        },
        error:function(){
          
        },
        // timeout: 15000
          });
    }
    }
   

});
///////////////att_pointeuse//////////

$("#att_pointeuse").on("click", function () {
  var date = $("#datetime_pointeuse").val();
  list_pointeuse.forEach((obj) => {
    $.ajax({
      type: "POST",
      url: "/api/pointeuse_att/" + obj.ip + "/" + date ,
      success: function (html) {
        if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse2")) {
          $("#dtDynamicVerticalScrollExample_pointeuse2").DataTable().clear().destroy();
        }
        $("#dtDynamicVerticalScrollExample_pointeuse2")
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
           title: 'Probleme technique  !',
            });
    }
    });
  });

});

///////////////user_pointeuse//////////

$("#user_pointeuse").on("click", function () {
  list_pointeuse.forEach((obj) => {
    $.ajax({
      type: "POST",
      url: "/api/pointeuse_user/" + obj.ip,
      success: function (html) {
        
        if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse2")) {
          $("#dtDynamicVerticalScrollExample_pointeuse2").DataTable().clear().destroy();
        }
        $("#dtDynamicVerticalScrollExample_pointeuse2")
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
    });
  });

});
///////////////download_pointeuse//////////

$("#download_pointeuse").on("click", function () {
  var date = $("#datetime_pointeuse").val();
  list_pointeuse.forEach((obj) => {
    $.ajax({
      type: "POST",
      url: "/api/pointeuse_download/" + obj.ip + "/" + date,
      success: function (html) {
        $(".loader2").hide();
        Toast.fire({
          icon: 'success',
          title: 'la pointeuse bien importée.',
      })
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
});