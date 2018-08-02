//生成验证码
function getVerification(targer) {
    var str = '';
    str += 'qwertyuioplkjhgfdsazxcvbnm';
    str += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    str += '123456789';
    var resStr = ''
    for (var i = 0;i<targer;i++){
        var index =  Math.floor(Math.random()*str.length);
        resStr += str.slice(index,index+1);
    }
    return resStr;
}

//验证验证码
function verify(e,t) {
    var reg = new RegExp(e.textContent,'i');
    if(reg.test(t)){
        return true;
    }else {
        return false
    }
}

//登录注册切换
function excLR(a,b) {
    a.style.display = "none";
    b.style.display = 'block';
}

//元素获取
function getEl(e) {
    return document.querySelector(e);
}

//正则验证
class Validate {
    constructor() {}
    static test(type, str) {
        let res = null;
        switch (type) {
            case "username": {
                res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
            } break;
            case "password": {
               res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
                "password" == "password";
            } break;
            case "email": {
                res = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str);
            } break;
        }
        return res;
    }
}






//获取系统时间
function formatterDateTime() {
    var date=new Date();
    var month=date.getMonth() + 1;
    var datetime = date.getFullYear()
        + ""
        + (month >= 10 ? month : "0"+ month)
        + ""
        + (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate())
        + ""
        + (date.getHours() < 10 ? "0" + date.getHours() : date
            .getHours())
        + ""
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            .getMinutes())
        + ""
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            .getSeconds());
    return datetime;
}

//连接Bmob
Bmob.initialize("eff91ea95d0f15c5a9857556a88e7a8c", "3cab380f8f39cf193110967111e39a6f");

//api
$.ajax({
    type: 'post',
    url: 'http://route.showapi.com/856-1',
    dataType: 'json',
    data: {
        "showapi_timestamp": formatterDateTime(),
        "showapi_appid": '66390',
        "showapi_sign": '6b0dbfff76bf4ca49d9176551f144e67',
        "date":formatterDateTime().slice(0,8),

    },
    success: function(result) {
        var htmlStr = '';
        htmlStr += `
                <p>${result.showapi_res_body
            .gongli}</p>
                <p>${"吉:"+result.showapi_res_body
            .ji}</p>
                <p>${result.showapi_res_body
            .jieri}</p>
                <p>${"星座:"+result.showapi_res_body
            .xingzuo}</p>
            
            `
        $("#time").html(htmlStr);
    }
});

//获得用户名
var touserid  = localStorage.getItem('Bmob/eff91ea95d0f15c5a9857556a88e7a8c/currentUser').split(',')[0].slice(13,-1);

//xxxx年xx月xx日 xx时：xx分
var toTime = formatterDateTime().slice(0,4)+"年"+formatterDateTime().slice(4,6)+'月'+formatterDateTime().slice(6,8)+'日'+formatterDateTime().slice(8,10)+':'+formatterDateTime().slice(10,12);

//添加说说
function talk() {
        if (!$('.user_talks').val()){
            new LHYAlertView({
                type: "default",
                autoClose: 2000,
                title: "温馨提示",
                message:"请输入你要发表的内容"
            })
        }else {
            var WordList = Bmob.Object.extend('user_talk');
            var wordList = new WordList();
            wordList.set('text', $('.user_talks').val());
            wordList.set('time', toTime);
            wordList.set('user', touserid);
            wordList.set('name',getEl('.user_name').textContent);
            wordList.save(null, {
                success: function (obj) {
                    new LHYAlertView({
                            type: "default",
                            autoClose: 1000,
                            message: "发表成功"
                        })
                    location.reload();
                },
                error: function (obj, error) {
                    alert("添加数据失败" + error.description);
                }
            });
        }
}

//添加树洞
function word() {
        if (!$('.user-word').val()){
            new LHYAlertView({
                type: "default",
                autoClose: 2000,
                title: "温馨提示",
                message:"请输入你要发表的内容"
            })
        }else {
            var WordList = Bmob.Object.extend('user_word');
            var wordList = new WordList();
            wordList.set('text',$('.user-word').val());
            wordList.set('time',toTime);
            wordList.set('user',touserid);
            wordList.set('name',getEl('.user_name').textContent);
            wordList.save(null,{
                success:function () {
                    new LHYAlertView({
                            type: "default",
                            autoClose: 1000,
                            message: "发表成功"
                        })
                    location.reload();
                },
                error:function (obj,error) {
                    alert("添加数据失败"+error.description);
                }
            });
        }
}

//添加照片
function photo() {
        if (!($('#file_up').val())) {
            new LHYAlertView({
                type: "default",
                autoClose: 2000,
                title: "温馨提示",
                message: "请上传照片"
            })
        } else if (!(/\.(jpg|JPG|png)$/.test($('#file_up').val()))) {
            new LHYAlertView({
                type: "default",
                autoClose: 2000,
                title: "温馨提示",
                message: "只能上传jpg/JPG/png格式的图片"
            })
        } else {
            var file_up = getEl('#file_up');
            if (file_up.files.length > 0) {
                var oFile = file_up.files[0];
                var file = new Bmob.File(oFile.name, oFile);
                file.save().then(function (obj) {
                    var PhotoList = Bmob.Object.extend('user_photo');
                    var photoList = new PhotoList();
                    photoList.set('name',getEl('.user_name').textContent);
                    photoList.set('user',touserid);
                    photoList.set('url', obj.url());
                    photoList.set('time', toTime);
                    photoList.set('text',$(".photo_name").val());
                    photoList.save(null, {
                        success: function (obj) {
                            new LHYAlertView({
                                    type: "default",
                                    autoClose: 1000,
                                    message: "发表成功"
                                })
                            location.reload();
                        },
                        error: function (obj, error) {
                            alert("添加数据失败" + error.description);
                        }
                    });
                })
            }
        }
}

//添加文章
function section() {
        if (!($('.section_name').val())){
            new LHYAlertView({
                type: "default",
                autoClose: 2000,
                title: "温馨提示",
                message:"请输入标题"
            })
        }else if (!($('.section_text').val())){
            new LHYAlertView({
                type: "default",
                autoClose: 2000,
                title: "温馨提示",
                message:"请输入你要发表的内容"
            })
        }else {
            var WordList = Bmob.Object.extend('user_section');
            var wordList = new WordList();
            wordList.set('title',$('.section_name').val());
            wordList.set('text',$('.section_text').val());
            wordList.set('time',toTime);
            wordList.set('user',touserid);
            wordList.set('name',getEl('.user_name').textContent);
            wordList.save(null,{
                success:function () {
                    new LHYAlertView({
                            type: "default",
                            autoClose: 1000,
                            message: "发表成功"
                        })
                    location.reload();
                },
                error:function (obj,error) {
                    alert("添加数据失败"+error.description);
                }
            });
        }
}

//设置
function set() {
        if (!($('.head_set').val())) {
            new LHYAlertView({
                type: "default",
                autoClose: 2000,
                title: "温馨提示",
                message: "请上传头像"
            })
        } else if (!(/\.(jpg|JPG|png)$/.test($('.head_set').val()))) {
            new LHYAlertView({
                type: "default",
                autoClose: 2000,
                title: "温馨提示",
                message: "只能上传jpg/JPG/png格式的图片"
            })
        } else if (!($('.name_set').val())){
            new LHYAlertView({
                type: "default",
                autoClose: 2000,
                title: "温馨提示",
                message: "请输入昵称"
            })
        }else  if (!($('.style_set').val())){
            new LHYAlertView({
                type: "default",
                autoClose: 2000,
                title: "温馨提示",
                message: "请输入个性签名"
            })
        } else {
            var Sfile_up = getEl('.head_set');
            if (Sfile_up.files.length > 0) {
                var SFile = Sfile_up.files[0];
                var sfile = new Bmob.File(SFile.name, SFile);
                sfile.save().then(function (obj) {
                    var SetList = Bmob.Object.extend('user_set'+touserid);
                    var setList = new SetList();
                    setList.set('name',$('.name_set').val());
                    setList.set('style',$('.style_set').val());
                    setList.set('head',obj.url());
                    setList.save(null,{
                        success:function () {
                            new LHYAlertView({
                                    type: "default",
                                    autoClose: 1000,
                                    message: "设置成功"
                                })
                            location.reload();
                        },
                        error:function (obj,error) {
                            alert("添加数据失败"+error.description);
                        }
                    });
                })
            }
        }
}

//获取数据库展示
function show() {
    var setQuery = new Bmob.Query('user_set'+touserid);
    setQuery.find({
        success:function (obj) {
            var htmlStr = '';
            if (obj.length == 0){
                var users = getEl('.users');
                users.style.display = 'block';
            }else {
                for (var i = obj.length-1 ;i >= 0;i--){
                    var object = obj[obj.length-1];
                    htmlStr = `
                                       <p class="user_name">${object.get('name')}</p>
                <p class="user_style">${object.get('style')}</p>
                <img src=${object.get('head')} alt="" class="user_img">
                                `
                }
            }
            var user_ps = getEl('.user_ps');
            user_ps.innerHTML = htmlStr;
        }
    })


    //展示
    var sectionQuery = new Bmob.Query('user_section');
    sectionQuery.find({
        success:function (obj) {
            var indexs_section = '';
            var htmlStr = '';
            var daindex = -1;
            var sec_talk = ''
            if (obj.length == 0){
                var no_word = getEl('.no_word');
                no_word.style.display = 'block';
            }else {
                for (var i = obj.length-1 ;i >= 0;i--){
                    daindex ++;
                    var object = obj[i];
                    var view = object.get('view');
                    var talk = object.get('talk_user');
                    for (var idx in view){
                        var id = object.id;
                        sec_talk += `
                            <p>${talk[idx]}回复:&nbsp${view[idx]}</p>
                        `
                    }
                    if (object.get('user') == touserid){
                        htmlStr += `
<div>
                    <h1>${object.get('name')}</h1>
                    <button type="button"                                    class="sec_btn del-sec" data-del=${object.id}>删除</button>
                    <h3>${object.get('title')}</h3>
                    <p>${object.get('text')}</p>
                    <span>${object.get('time')}</span>
               </div>
                `
                    }
                    if(sec_talk != '' && id == object.id){
                    indexs_section += `
<div>
                    <h1>${object.get('name')+"发布文章:"}</h1>
                    <form action="">
                    <button type="button"                                    class="button view-sec" data-add=${object.id} data-index="${daindex}">评论</button>
                    <input type="text" class="sec-view">
                    </form>
                    <h3>${object.get('title')}</h3>
                    <p>${object.get('text')}</p>
                    <span>${object.get('time')}</span>
                    <div class="secs_talk">${sec_talk}</div>
               </div>
                `
                        sec_talk = '';
                    }else {
                        indexs_section += `
<div>
                    <h1>${object.get('name')}发布文章:</h1>
                    <form action="">
                    <button type="button"                                    class="button view-sec" data-add=${object.id} data-index="${daindex}">评论</button>
                    <input type="text" class="sec-view">
                    </form>
                    <h3>${object.get('title')}</h3>
                    <p>${object.get('text')}</p>
                    <span>${object.get('time')}</span>
               </div>
                `
                    }
                }
                var section_trend = getEl('#section_trend');
                section_trend.innerHTML = htmlStr;
                var index = getEl('#index_section')
                index.innerHTML = indexs_section;
                var Del = document.getElementsByClassName('del-sec');
                var Add = document.getElementsByClassName('view-sec');
                var e = 'user_section';
                del(Del,e);
                add(Add,e,$(".sec-view"));
            }
        }
    })

    var textQuery = new Bmob.Query('user_talk');
    textQuery.find({
        success:function (obj) {
            var htmlStr = '';
            var index_text = ''
            var daindex = -1;
            var text_talk = '';
            if (obj.length == 0){
                var no_sub = getEl('.no_sub');
                no_sub.style.display = 'block';
            }else {
                for (var i = obj.length-1 ;i >= 0;i--){
                    daindex ++;
                    var object = obj[i];
                    var view = object.get('view');
                    var talk = object.get('talk_user');
                    for (var idx in  view){
                        var id = object.id;
                        text_talk += `
                            <p>${talk[idx]}回复：&nbsp${view[idx]}</p>
                        `
                    }
                    if (object.get('user') == touserid){
                        htmlStr += `
                <div>
                    <h1>${object.get('name')}</h1>
                    <button type="button" class="button del-text" data-del=${object.id}>删除</button>
                    <span>${object.get('text')}</span>
                    <span>${object.get('time')}</span>
                </div>               
                `
                    }
                    if(text_talk != '' && id == object.id){
                        index_text += `
                <div>
                    <h1>${object.get('name')+"发布说说:"}</h1>
                    <form action="">
                    <button type="button" class="button view-text" data-add=${object.id} data-index="${daindex}">评论</button>
                    <input type="text" class="text-view">
                    </form>
                    <span>${object.get('text')}</span>
                    <span>${object.get('time')}</span>
                    <div class="texs_talk">${text_talk}</div>
                </div>
                `
                        text_talk = '';
                    }else {
                        index_text += `
                <div>
                    <h1>${object.get('name')+"发布说说:"}</h1>
                    <form action="">
                    <button type="button" class="button view-text" data-add=${object.id} data-index="${daindex}">评论</button>
                    <input type="text" class="text-view">
                    </form>
                    <span>${object.get('text')}</span>
                    <span>${object.get('time')}</span>
                </div>
               
                `
                    }
                }
                var user_trend = getEl('#user_trend');
                user_trend.innerHTML = htmlStr;
                var index = getEl('#index_text')
                index.innerHTML = index_text;
                var Del = document.getElementsByClassName('del-text');
                var Add = document.getElementsByClassName('view-text');
                var e = 'user_talk';
                del(Del,e);
                add(Add,e,$(".text-view"));
            }
        }
    })

    var photoQuery = new Bmob.Query('user_photo');
    photoQuery.find({
        success:function (obj) {
            var htmlStr = '';
            var index_photo = '';
            var daindex = -1;
            var talk_user = '';
                for (var i = obj.length - 1; i >= 0; i--) {
                    daindex++;
                    var object = obj[i];
                    var view = object.get('view');
                    var talk = object.get('talk_user');
                    for (var idx in view) {
                        var id = object.id;
                        talk_user += `
                            <p>${talk[idx]} 回复:&nbsp
                            ${view[idx]}</p>
                    `
                    }
                    if (object.get('user') == touserid) {
                        htmlStr += `  
                <div>           
                    <h1>${object.get('name') + '发布照片:'}</h1>
                    <button type="button" class="button del-pot" data-del=${object.id}>删除</button>
                    <p>${object.get('text')}</p>
                    <img src=${object.get('url')} alt="">
                    <span>${object.get('time')}</span>
                </div>   
                `
                    }
                    if (talk_user != '' && id == object.id) {
                        index_photo += `  
                <div class="index_pho">           
                    <h1>${object.get('name') + '发布照片:'}</h1>
                    <form action="">
                    <button type="button" class="button view-pho" data-add=${object.id} data-index="${daindex}">评论</button>
                    <input type="text" class="pho-view">
                    </form>
                    <p>${object.get('text')}</p>
                    <img src=${object.get('url')} alt="">
                    <span>${object.get('time')}</span>  
                    <div class="phos_talk">${talk_user}</div> 
                </div>
                `
                        talk_user = '';
                    } else {
                        index_photo += `  
                <div class="index_pho">           
                    <h1>${object.get('name') + '发布照片:'}</h1>
                    <form action="">
                    <button type="button" class="button view-pho" data-add=${object.id} data-index="${daindex}">评论</button>
                    <input type="text" class="pho-view">
                    </form>
                    <p>${object.get('text')}</p>
                    <img src=${object.get('url')} alt="">
                    <span>${object.get('time')}</span>  
                </div>
                `
                    }
                }
            var photo_trend = getEl('#photo_trend');
            photo_trend.innerHTML = htmlStr;
            var index = getEl('#index_photo')
            index.innerHTML = index_photo;
            var Del = document.getElementsByClassName('del-pot');
            var Add = document.getElementsByClassName('view-pho');
            var e = 'user_photo';
            del(Del,e);
            add(Add,e,$(".pho-view"));
        }
    })

    var wordQuery = new Bmob.Query('user_word');
    wordQuery.find({
        success:function (obj) {
            var htmlStr = '';
            if (obj.length == 0){
                var no_word = getEl('.no_word');
                no_word.style.display = 'block';
            }else {
                for (var i = obj.length-1 ;i >= 0;i--){
                    var object = obj[i];
                    if (touserid == 'hsl5201314'){
                        htmlStr += `
                <div>
                    <h1>管理员</h1>
                    <button type="button"                                    class="button del-word" data-del=${object.id}>删除
                    </button>
                    <p>${object.get('text')}</p>
                    <span>${object.get('time')}</span>
                </div>
                `
                    }else{
                        htmlStr += `
                <div>
                    <h1>吐槽者</h1>
                    <p>${object.get('text')}</p>
                    <span>${object.get('time')}</span>
                </div>
                `
                    }
                }
                }
                var word_trend = getEl('#word_trend');
                word_trend.innerHTML = htmlStr;
                var Del = document.getElementsByClassName('del-word');
                var e = 'user_word';
               del(Del,e);
            }
    })

}

//点击事件
var toclick = function (dom, fun) {
    dom.addEventListener("click", fun, false);
}

var offset = 0;
window.onscroll = function() {
    offset = document.body.scrollTop || document.documentElement.scrollTop;
}

//回到顶部
function gotop() {
            var duration = 1000,
                interval = 15,
                frames = duration / interval,
                speed = Math.ceil(offset / frames);
            var t = setInterval(function () {
                console.log(offset);
                if (offset > 0) {
                    document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
                } else {
                    clearInterval(t);
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }
            }, interval);
}

//删除
function del(Del,e) {
    //删除
    var E = Bmob.Object.extend(e);
    var el = new Bmob.Query(E);
    var del = Array.prototype.slice.call(Del);
    del.forEach((e,i) =>{
        e.addEventListener('click',function () {
            var thisdel = e.getAttribute('data-del');
            el.get(thisdel,{
                success:function (res) {
                    res.destroy({
                        success:function () {
                            new LHYAlertView({
                                type: "default",
                                autoClose: 1000,
                                title: "温馨提示",
                                message:"删除成功"
                            })
                            location.reload();
                        }
                    })
                }
            })
        })
    })
}

//评论
function add(add,tab,doms) {
    var add = Array.prototype.slice.call(add);
    var Tab = Bmob.Object.extend(tab);
    var query = new Bmob.Query(Tab);
    add.forEach((e,i) =>{
        e.addEventListener('click',function () {
            var thisdel = e.getAttribute('data-add');
            var text = tothisdel(doms,$(this));

            query.get(thisdel,{
                success:function (obj) {
                    if (!text){
                        new LHYAlertView({
                                type: "default",
                                autoClose: 1000,
                                message: "请输入评论内容"
                            },
                        )
                    }else {
                    obj.add('talk_user',getEl('.user_name').textContent);
                    obj.add('view',text);
                    obj.save(null,{
                        success:function () {
                            new LHYAlertView({
                                    type: "default",
                                    autoClose: 1000,
                                    message: "评论成功"
                                })
                            location.reload();
                        },
                        error:function (result,error) {
                            console.log('添加失败'+error.code);
                        }
                    });
                    }
                }
            })
        })
    })
}

//同类名点击按钮封装
function tothisdel(doma, domb) {
    return doma.eq(domb.attr("data-index")).val();
}