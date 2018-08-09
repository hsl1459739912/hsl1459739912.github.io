require('../less/shopcar.less');
require('../less/normalized.less');
require('../less/common.less');


$(function(){
    $.ajax({
        url:"../json/common.json",
        type:"GET",
        dataType:"json",
        success:(response)=>{
            $('header').html(response.top)
            $('.sofamn').html(response.comn)
            $('.sofam').html(response.comm)
            $('footer').html(response.fot);
            $('.nav_menu').html(response.nav_menu);
            $('.logAndShop').prepend(response.login);
            $('.header_log').html(response.goindex);
            $('.look').html(response.look);
        
    
    var x = 0;
    $(".header_bg").on("click",function(){
        console.log(1);
        if(x%2 ==0){
            $(".shopBrief").css("border","1px solid #ccc").css("display","block");
            $(".shopping").css("border","1px solid #ccc").css("border-bottom","2px solid white");
        }else{
            $(".shopBrief").css("display","none");
            $(".shopping").css("border","1px solid transparent");
        }
        x = x + 1;
    })


    $("#nav_search").on("focus",function(){
        $(this).css("box-shadow","0px 0px 14px 0px green");
    });
    $("#nav_search").blur(function(){
        $(this).css("box-shadow","0px 0px 0px 0px white");
    });
    var x = 0;
    $(".header_bg").on("click",function(){
        console.log(1);
        if(x%2 ==0){
            $(".shopBrief").css("border","1px solid #ccc").css("display","block");
            $(".shopping").css("border","1px solid #ccc").css("border-bottom","2px solid white");
        }else{
            $(".shopBrief").css("display","none");
            $(".shopping").css("border","1px solid transparent");
        }
        x = x + 1;
    })


    $("#nav_search").on("focus",function(){
        $(this).css("box-shadow","0px 0px 14px 0px green");
    });
    $("#nav_search").blur(function(){
        $(this).css("box-shadow","0px 0px 0px 0px white");
    });
   }
    })

     $(".reduce").on("click",function(){
         var num =$(this).next().val()
          if(num > 0){
              num--;
          }
          $(this).next().val(num); 
          var price =  $(this).parent().prev().html().substring(1);
          var number = $(this).next().val();
          var str ="￥" + price * number;
          $(this).parent().next().html(str);
          calc();
     });
     $(".add").on("click",function(){
        var num =$(this).prev().val()    
             num++;   
         $(this).prev().val(num); 
         var price =  $(this).parent().prev().html().substring(1);
         var number = $(this).prev().val();
         var str ="￥" + price * number;
         $(this).parent().next().html(str);
         calc(); 
    });





})


function calc(){
    var total = 0;
     
   $.each($(".trea_total"),function(index,value){
      total = total +  Number($(this).html().substring(1));     
   })
    $(".money").html(total);

}