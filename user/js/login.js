(function () {
    var tes = getEl('.tes');
    var validate = getEl('.validata');
    var lg = getEl('.login');
    var rg = getEl('.register');
    var bt_rg =  getEl('#bt-rg');
    var bt_lg = getEl("#bt-lg")
    var regist = getEl('#regist');
    var rg_un = getEl("#rg-un");
    var rg_pw = getEl("#rg-pw");
    var rg_id = getEl("#rg-id");
    var login = getEl("#login");
    let isLogin   = false;


    validate.textContent = getVerification(6);
    validate.onclick = function () {
        validate.textContent = getVerification(6);
        isLogin = false;
    }

    tes.onblur = function() {
        if (verify(validate, tes.value,isLogin)){
            isLogin = true;
        }else {
            isLogin = false;
            new LHYAlertView({
                type: "default",
                autoClose: 500,
                title: "温馨提示",
                message:"验证码输入错误"
            })
        }
    };

    bt_rg.onclick = function(){
        isLogin = false;
        excLR(lg,rg);
    };

    bt_lg.onclick = function () {
        isLogin = true;
        excLR(rg,lg)
    }

    location.hash = "login";

    Bmob.initialize("eff91ea95d0f15c5a9857556a88e7a8c", "3cab380f8f39cf193110967111e39a6f");
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
    
    regist.onclick = function () {
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
            new LHYAlertView({
                type:"alert",
                message:"输入不能为空",
            });
        }else if(!isThough) {

        }else {
        var user = new Bmob.User;
        user.set("username", rg_un.value);
        user.set("password", rg_pw.value);
        user.set("email", rg_id.value);
        user.signUp(null,{
            success:() =>{
                new LHYAlertView({
                    type:"alert",
                    message:"注册成功",
                    sureCallBack:()=>{
                        sessionStorage.loginState = true;
                        location.href = "index.html";
                    }
                });
            },
            error:(user,error) =>{
                let alertMsg = '';
                switch (error.code){
                    case 202:{
                        alertMsg = '用户名存在';
                    }break;
                    case 203:{
                        alertMsg = "邮箱名存在";
                    }break;
                };
                new LHYAlertView({
                    type: "default",
                    autoClose: 1000,
                    title: "温馨提示",
                    message: alertMsg
                });
            }
        })
    }}
    login.onclick = function () {
        if (isLogin) {
            if (!$("#lg-un").val() || !$("#lg-pw").val())  {
                new LHYAlertView({
                    type:"alert",
                    message:"请完善信息",
                });
            }else {
                Bmob.User.logIn($(".un").val(), $(".pw").val(), {
                    success: () => {
                        new LHYAlertView({
                            type: "alert",
                            message: "登陆成功",
                            sureCallBack: () => {
                                sessionStorage.loginState = true;
                                location.href = "index.html"
                            }
                        })
                    },
                    error: (user, error) => {
                        let alertMsg = '';
                        switch (error.code){
                            case 205:{
                                alertMsg = '用户名不存在';
                            }break;
                        };
                        new LHYAlertView({
                            type: "default",
                            autoClose: 1000,
                            title: "温馨提示",
                            message:alertMsg
                        })
                    }
                });
            }
        }
    }

})();