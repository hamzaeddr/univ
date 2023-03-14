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
//////////////////////////////////////change salle /////////////////////////////////////////////////////////////
// $("#salle_pointeuse").on("change", function () {
//     $(".loader2").show();
//     var salle = $(this).val();
  
//     pointeuse_afResidanat(salle);
//   });
// ///////////////////////////////////////////afficher les pointeuse du salle///////////////////////////////////////////////////////////////////////////
// function pointeuse_afResidanat(var1) {
//     $.ajax({
//       type: "POST",
//       url: "/api/pointeuse_aff/" + var1,
//       success: function (html) {
//     $(".loader2").hide();
    
//         if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse")) {
//           $("#dtDynamicVerticalScrollExample_pointeuse").DataTable().clear().destroy();
//         }
//         $("#dtDynamicVerticalScrollExample_pointeuse")
//           .html(html)
//           .DataTable({
//             bLengthChange: false,
//             lengthMenu: [
//               [11, 25, 35, 50, 100, 20000000000000],
//               [10, 15, 25, 50, 100, "All"],
//             ],
//             "font-size": "3rem",
//           });
    
     
//       }
//     });
//     return var1;
//     };
// //////////////////////////////////////////check////uncheck////////////////////////////////////////////////
        function selects(){  
            var ele=document.getElementsByName('chk');  
            for(var i=0; i<ele.length; i++){  
                if(ele[i].type=='checkbox')  
                    ele[i].checked=true;  
                }  
        }; 
        function deSelect(){  
            var ele=document.getElementsByName('chk');  
            for(var i=0; i<ele.length; i++){  
                if(ele[i].type=='checkbox')  
                    ele[i].checked=false;  
                }  
        }; 

            $("body #p_check").on("click", function () {
                selects();  // $("#parlot_modal").show();
                
            });
            $("body #p_uncheck").on("click", function () {
                deSelect();  // $("#parlot_modal").show();
                
            });

/////////////////////////////////////////////////select pointeuse//////////////////////////////////////////////////////////////////////
$("body #dtDynamicVerticalScrollresidanat_pointeuse").on("click", "tr", function () {
    var selected = $(this).hasClass("highlighty");
    $("body #dtDynamicVerticalScrollresidanat_pointeuse tr").removeClass("highlighty");
    $("body #dtDynamicVerticalScrollresidanat_pointeuse tr").removeClass("odd");
    $("body #dtDynamicVerticalScrollresidanat_pointeuse tr").removeClass("even");

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


////////////////////////////////////connect pointeuse///////////////////////////////////////////////////////////////
// $("body #connect_pointeuse_residanat").on("click",  function () 
$(document).ready(function(){    
    $("#connect_pointeuse_residanat").click(function(){
        $(".loader2").show();
        // alert('ok');
        var val = [];
        $(':checkbox:checked').each(function(i){
        val[i] = $(this).val();
        });
        // alert(val);
        if (val.length === 0) {
            list_pointeuse.forEach((obj) => 
            {
                try {
                     $.ajax({
                    type: "POST",
                    url: "/api/pointeuse_connect/" + obj.ip +"/ip",
                            success: function (html) {
                                $(".loader2").show();
                                if(html == 'true'){
                                Toast.fire({
                                        icon: 'success',
                                        title: 'Pointeuse connected',
                                        
                                    })
                                $(".loader2").hide();
                                }
                                else{
                                    Toast.fire({
                                        icon: 'error',
                                        title: 'pointeuse not connected',
                                    })
                                    $(".loader2").hide();
                                }
                            }
                            
                    });
                } 
                catch (error) {
                    console.error(error);
                  }
            });
        }
        else{
            for(let value of val){
                $.ajax({
                        type: "POST",
                        url: "/api/pointeuse_connect/" + value +"/sn",
                
                    success: function (html) {
                        $(".loader2").hide();
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
});


////////////////////////////////////download_pointeuse/////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// $("#download_pointeuse").on("click", function () {   
// $.ajax({
//         url: '/api/ResidanatImporte',
//         type: 'GET',
//         dataType: 'json',
//         success: function(html) {
//             console.log(html)
//         },
//         error: function() {
//             $(".loader2").hide();
//            Toast.fire({
//              icon: 'error',
//              title: 'Probleme technique  !',
//               });
//         }
//     });
// });

});
