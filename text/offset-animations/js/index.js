
(function () {

    var kHeight     = window.innerHeight,//获取屏幕高度
        offset      = 0,//计算页面滚动距离
        items       = $.get(".list-item"),//滚动元素
        offsetTops  = [];//获取元素在页面中的位置
    for(var i = 0, len = items.length; i < len; i++) {
        offsetTops[i] = items[i].offsetTop;
    }

    $.addEvent(window, "scroll", function () {
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        for(var i = 0, len = items.length; i < len; i++) {
            if(kHeight + offset > offsetTops[i]) {
                items[i].classList.add("running");
            }
        }
    });
})();