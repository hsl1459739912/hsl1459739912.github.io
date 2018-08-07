
// 自调用函数
//保护私有变量
(function () {
    //获取菜单项
    var lis = document.querySelectorAll(".menu_list>li");
    //获取内容模块
    var cts = document.querySelectorAll(".ct-item");
    //获取回到顶部的按钮
    var　go_top_btn = document.querySelector(".go-top");
    //把位置存储在数组中
    var offsets=[0];
    //打印输出
    // console.log(lis);
    //添加滚动事件 监听页面的滚动
    window.onscroll=function () {
    //    打印页面滚动的距离  El兼容ie浏览器
        var  offset = document.body.scrollTop||document.documentElement.scrollTop;
        console.log(offset);
    };
    //遍历内容模块  获取模块在内容中的位置
    for( var i = 0; i<cts.length;i++){
        //将模块在页面中的位置加入到push中
        offsets.push(cts[i].offsetTop);
    };
    console.log(offsets);
    //遍历li元素
    for(var i = 0; i<lis.length;i++){
        //为菜单项添加下标属性
        lis[i].dataset.index=i;
        //为菜单项添加点击事件
        lis[i].onclick=function () {
        //    this：当前用户点击的按钮 当前菜单项的文本内容
            console.log("用户点击了:"+this.textContent+",下标是:"+this.dataset.index);
        //    获取点击菜单项内容在页面中的位置
            var offset = offsets[this.dataset.index];
        //    设置页面显示的位置
            document.body.scrollTop =document.documentElement.scrollTop=offset-40;
        };
    };
    //添加点击事件到按钮
    go_top_btn.onclick = function () {
        goTop();
    };
    //调用函数 展示地图
    showmap();
})();
