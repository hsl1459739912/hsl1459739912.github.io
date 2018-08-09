/**
* 功能：用户注册数据有效性验证
**/
// 邮箱验证
var email = document.getElementById('email');
var nicename = document.getElementById('nicename');
var pwd = document.getElementById('pwd');
var repwd = document.getElementById('repwd');
var tel = document.getElementById('tel');
var idCard = document.getElementById('idCard');
var homepage = document.getElementById('homepage');
email.onblur = function() {
    var regx = /^\w+@[a-z0-9]+\.[a-z]{2,}$/i;
    var thisVal = this.value;
    var pass = regx.test(thisVal);
    if(pass) {
        this.previousElementSibling.previousElementSibling.textContent = '';
    } else {
        this.previousElementSibling.previousElementSibling.textContent = '请输入正确的邮箱格式';
    }
}
//2、昵称。满足输入长度为1~10位的中文、英文、数字、下划线的要求。正则参考：“^[\w]{1,10}$”。
nicename.onblur = function () {
    var regx = /^[\w\u3000-\u9FFF]{1,10}$/;
    var thisVal = this.value;
    var pass = regx.test(thisVal);
    if(pass) {
        this.previousElementSibling.previousElementSibling.textContent = '';
    } else {
        this.previousElementSibling.previousElementSibling.textContent = '请输入正确的昵称';
    }
}
//3、密码。满足输入6~16位即可，没有字符限制。
pwd.onblur = function () {
    var regx = /^[\d\D]{6,16}$/;
    var thisVal = this.value;
    var pass = regx.test(thisVal);
    if(pass) {
        this.previousElementSibling.previousElementSibling.textContent = '';
    } else {
        this.previousElementSibling.previousElementSibling.textContent = '请输入正确的密码';
    }
}

//4、确认密码。满足两次密码输入一致即可。
repwd.onblur = function () {
    var thisval = this.value;
    if (thisval != pwd.value){
        this.previousElementSibling.previousElementSibling.textContent = '两次密码输入不一致';
    }
}

//5、性别。默认选中“保密”，无需数据验证。

//6、手机号。满足是11位数字，并且第一位为“1”的条件。
tel.onblur = function () {
    var regx = /^1\d{10}$/;
    var thisVal = this.value;
    var pass = regx.test(thisVal);
    if(pass) {
        this.previousElementSibling.previousElementSibling.textContent = '';
    } else {
        this.previousElementSibling.previousElementSibling.textContent = '请输入正确的手机号码';
    }
}

//7、身份证。前17位为数值，最后一位可以是数值或“X”字符（不区分大小写）。
idCard.onblur = function () {
    var regx = /^\d{17}(\d|x)$/;
    var thisVal = this.value;
    var pass = regx.test(thisVal);
    if(pass) {
        this.previousElementSibling.previousElementSibling.textContent = '';
    } else {
        this.previousElementSibling.previousElementSibling.textContent = '请输入正确的身份证号';
    }
}

//8、职业。无需判断，默认选中“请选择...”即可，该项的值为“未知”。

//9、个人主页。满足是以“http://”或者“https://”开头的地址即可
homepage.onblur = function () {
    var regx = /^[http:\/\/|https:\\/\\/]&/;
    var thisVal = this.value;
    var pass = regx.test(thisVal);
    if(pass) {
        this.previousElementSibling.previousElementSibling.textContent = '';
    } else {
        this.previousElementSibling.previousElementSibling.textContent = '请输入正确的地址';
    }
}


//10、自我介绍。无需验证，但需要用HTML标签上的属性来限制最大输入长度为140个字符。







