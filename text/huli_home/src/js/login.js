require('../less/login.less');
require('../less/normalized.less');
require('../less/common.less');

$(function(){
    $.ajax({
        url:"../json/common.json",
        type:"GET",
        dataType:"json",
        success:(response)=>{
            $('header').html(response.top)
            $('footer').html(response.fot);
            $('.nav_menu').html(response.nav_menu);
            $('.logAndShop').prepend(response.login);
            $('.header_log').html(response.goindex);
            $('.look').html(response.look);
       

    $('.regist').on('click',()=>{
        $('.register').css(
            "display","block"
        )
        $('.login').css(
            'display',"none"
        )
    })
    $('.logi').on('click',()=>{
        $('.register').css(
            "display","none"
        )
        $('.login').css(
            'display',"block"
        )
    })
    $('.len').on('change',()=>{
        if(($('.lens').val().length&&$('.lenss').val().length)>6){
            $('.lg_btn').css('background','green');
            $('.lg_btn').on('click',()=>{
                if($('.lens').val()==localStorage.getItem($('.lenss').val())){
                    alert('登陆成功');
                    window.location.href='../../../index.html'
                }else{
                    alert('失败')
                }
            })
        }else{
            $('.lg_btn').css('background','#6d6969');
        }
    })

    $('input').on('focus',(e)=>{
        $(e.currentTarget).addClass('sha');
    });
    $('input').on('blur',(e)=>{
        $(e.currentTarget).removeClass('sha');
    });

    $('.le').on('change',()=>{
        if(($('.les').val().length>6&&$('.less').val().length>6)&&$('.lesss').val().length>6){
            if($('.lesss').val()==($('.less').val())){
                $('.re_btn').css('background','green');
                $('.re_btn').on('click',()=>{
                    localStorage.setItem($('.les').val(),$('.less').val());
                    alert('注册成功！！！');
                    $(".register").css('display',"none");
                    $(".login").css("display",'block');
                })
            }
        }else{
            $('.re_btn').css('background','#6d6969');
        }
    })
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
})