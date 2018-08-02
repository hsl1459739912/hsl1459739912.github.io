(function () {
    //记住登录状态
    if(!sessionStorage.loginState){
        location.href = "login.html";
    };

    //说说
    var user_sub = getEl('#user_sub');
    toclick(user_sub,talk);

    //留言板
    var word_sub = getEl('#word_sub');
    toclick(word_sub,word);

    //照片
    var new_photos = getEl('.new_photos');
    toclick(new_photos,photo);

    //文章
    var section_sub = getEl('#section_sub');
    toclick(section_sub,section);

    //设置
    var set_style = getEl('.set_style');
    toclick(set_style,set);

    //展示
    show();

    //回到顶部
    var go = getEl('.gotop');
    toclick(go,gotop);

    //跳转
    var inde = 0;
    var mn = document.getElementsByClassName('mn');
    var box = document.getElementsByClassName('box')[0];
    box.addEventListener('click',(ev) =>{
        if(ev.target.className.match('nav')){
            var num = ev.target.getAttribute('data-index')*1;
            mn[inde].style.display = 'none';
            mn[num].style.display = 'block';
            inde = num;
        }
    })

    var indes = 0;
    var mns = document.getElementsByClassName('bbbb');
    var boxs = document.getElementsByClassName('indexs')[0];
    boxs.addEventListener('click',(ev) =>{
        if(ev.target.className == 'aaaa'){
            var num = ev.target.getAttribute('data-index')*1;
            mns[indes].style.display = 'none';
            mns[num].style.display = 'block';
            indes = num;
        }
    })

})();
