$(function(){
    // 记录登陆/注册
    let isLogin   = true;
    location.hash = "login";
    //注册bmob服务
    Bmob.initialize("eff91ea95d0f15c5a9857556a88e7a8c", "3cab380f8f39cf193110967111e39a6f");
    // 点击前往注册
    $(".go-register").on("click", () => {
        isLogin = false;
        $(".register").removeClass("hidden");
        $(".login").addClass("hidden");
        $(".title").text("REGISTER");
        $(".login-register-btn").text("注册");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "register";
        document.title = "BMOB - REGISTER";
    });
    // 点击登陆
    $(".go-login").on("click", () => {
        isLogin = true;
        $(".register").addClass("hidden");
        $(".login").removeClass("hidden");
        $(".title").text("LOGIN");
        $(".login-register-btn").text("登陆");
        $(".input-box").removeClass("error");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "login";
        document.title = "BMOB - LOGIN";
    });

    // 注册
    $(".input-box input").on("blur", (e) => {
        let $target = $(e.target);
        if(!isLogin) {
            if(!Validate.test($target.prop("className"), $target.val())) {
                $target.parent().addClass("error");
            }else {
                $target.parent().removeClass("error");
            }
        }
    });

    $(".login-register-btn").on("click", () => {
        if(isLogin) {
            if(!$(".username").val() || !$(".password").val()) {
                console.log("请完善信息！");
            }else {
                Bmob.User.logIn($(".username").val(), $(".password").val(), {
                    success: () => {
                        new LHYAlertView({
                            type:"alert",
                            message:"登陆成功",
                            sureCallBack:() => {
                                sessionStorage.loginState = true;
                                location.href = "../index.html"
                            }
                        })
                    },
                    error: (user,error) => {

                        new LHYAlertView({
                            type:"alert",
                            message:"用户名不存在或密码不对",

                        })
                    }
                });

            }
        }else {
            let isThough = true, isEmpty = false;
            // 判断是否验证通过
            $(".input-box").each((index, el) => {
                if($(el).hasClass("error")) {
                    isThough = false;
                    return false;
                }
            });
            // 判断是否完善信息
            $(".input-box input").each((index, el) => {
                if(!$(el).val()) {
                    isEmpty = true;
                    return false;
                }
            });
            if(isEmpty) {
                console.log("请完善信息！");
            }else if(!isThough) {
                console.log("信息不合法！");
            }else {
                console.log("请注册！");
                let user = new Bmob.User();
                user.set("username",$(".username").val());
                user.set("password",$(".password").val());
                user.set("email",$(".email").val());
                user.set("phone",$(".tel").val());
                //执行注册
                user.signUp(null,{
                    success : (user) => {
                        new LHYAlertView({
                            type:"alert",
                            message:"注册成功",
                            sureCallBack:() => {
                                sessionStorage.loginState = true;
                                location.href = "../index.html"
                            }
                        })
                    },
                    error: (user,error) => {
                        // alert(`Error:${error.code} ${error.message}`);
                        let alertMsg = "";
                        switch (error.code){
                            case 202 :{
                                alertMsg = "用户已存在";
                            }break;
                            case 203 :{
                                alertMsg = "邮箱已被注册";
                            }break;
                            case 209 :{
                                alertMsg = "手机已被注册";
                            }break;
                        }
                        new LHYAlertView({
                            type : "default",
                            autoClose:1000,
                            title:"温馨提醒",
                            message:alertMsg
                        })
                    }
                })
            }

        }
    });
});



