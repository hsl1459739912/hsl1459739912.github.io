/**
* 功能：用户注册数据有效性验证
**/

// 验证邮箱
validate(
    'email',
    '^\\w+@[a-z0-9]+\\.[a-z]{2,}$',
    '请输入正确的邮箱格式'
);

// 验证昵称
validate(
    'nicename',
    '^[\\w\\u3000-\\u9FFF]{1,10}$',
    '昵称只能输入1~10位的中文、英文和数字和下划线'
);

// 验证密码
validate(
    'pwd',
    '^.{6,16}$',
    '请输入6~16位的密码'
);

// 确认密码
var repwd = document.getElementById('repwd');
repwd.onblur = function() {
    // 获取当前用户所输入的值
    var thisVal = this.value;
    // 获取密码输入的值
    var pwdVal = document.getElementById('pwd').value;
    // 找到错误信息的显示容器
    var errMesg = this.previousElementSibling.previousElementSibling;
    // 验证通过
    if(thisVal === pwdVal) {
        errMesg.textContent = '';
    } 
    // 验证不通过
    else {
        errMesg.textContent = '两次输入的密码必须一致';
    }
}

// 验证手机号
validate(
    'tel',
    '^1\\d{2}\\-?\\d{4}\\-?\\d{4}$',
    '请输入11位手机号'
);

// 验证身份证号
validate(
    'idCard',
    '^\\d{17}[\\dXx]$',
    '请输入18位身份证号'
);

// 个人主页验证
validate(
    'homepage',
    // '^https?://',
    '^(http|https)://',
    '请输入正确的个人主页地址'
);


/**
 * 验证函数
 * @param ident { String } 输入框的ID
 * @param regexp { RegExp } 正则表达式
 * @param errInfo { String } 错误信息
 */
function validate(ident,regexp,errInfo) {
    var input = document.getElementById(ident);
    input.onblur = function() {
        // 编写正则规则
        // var regx = /^\w+@[a-z0-9]+\.[a-z]{2,}$/i;
        var regx = new RegExp(regexp);
        // 获取当前用户所输入的值
        var thisVal = this.value;
        // 用正则去验证用户输入的值
        var pass = regx.test(thisVal);
        // 找到错误信息的显示容器
        var errMesg = this.previousElementSibling.previousElementSibling;
        // 验证通过
        if(pass) {
            errMesg.textContent = '';
        } 
        // 验证不通过
        else {
            errMesg.textContent = errInfo;
        }
    }
}





