require('../less/common.less');
require('../less/index.less');
require('../less/normalized.less');

$(function(){
    $.ajax({
        url:"../static/json/common.json",
        type:"GET",
        dataType:"json",
        success:(response)=>{
            $('header').html(response.top)
            $('footer').html(response.fot)
            $('.nav_menu').html(response.index_nav);
            $('.logAndShop').prepend(response.ginlo);
            $('.look').html(response.indexgo);
        
            var i =0;

            clearInterval(timer); 
            var timer = setInterval(function(){
                autoPlay(); 
            },4000);   
         
           $(".circle").on("click",function(){
                i =$(this).index();
                imgShow(i); 
                cirShow(i); 
            });
            
            function autoPlay(){
                imgShow(i);
                cirShow(i);
                i++;
                i> 3 ? i = 0: i = i;
            }
    
                var x = 0;
            $(".shopping").on("click",function(){
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
                console.log(1);
                $(this).css("box-shadow","0px 0px 14px 0px green");
            });
            $("#nav_search").blur(function(){
                console.log(2);
                $(this).css("box-shadow","0px 0px 0px 0px white");
            });
            function imgShow(a){
                $.each($(".img_rotation_box").children(),function(index){
                    $(this).css("opacity","0");
                    $(this).css("transform","scale(1)"); 
                    if(a == index){
                        $(this).css("opacity","1");
                        $(this).css("transform","scale(1.2)");  
                    }
                });
           }
    
        function cirShow(b){
            $.each($(".rotation_circle").children(),function(index){
                $(this).css("background","transparent");
                if(b == index){
                    $(this).css("background","white"); 
                }
            });
          }
        }

    }) 
})