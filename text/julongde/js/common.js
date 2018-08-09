//显示地图
function showmap() {
    //    1.创建地图
    var map = new BMap.Map("container");
    //    2.创建坐标
    var point = new BMap.Point(104.0607569093,30.5622079951);
    // 3.设置地图中心点左边
    map.centerAndZoom(point,15);
    //开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true);
    //导航控件
    map.addControl(new BMap.NavigationControl());
    //比例尺控件
    map.addControl(new BMap.ScaleControl());
    //缩略图
    map.addControl(new BMap.OverviewMapControl());
    //地图类型控件
    map.addControl(new BMap.MapTypeControl());
    var marker = new BMap.Marker(point);        // 创建标注
    map.addOverlay(marker);                     // 将标注添加到地图中
}
function goTop() {
    //    位移的距离
    var  offset = document.body.scrollTop|| document.documentElement.scrollTop;
//    监听页面当前显示位置
    window.onscroll= function () {
        //获取位移距离
        offset = document.body.scrollTop|| document.documentElement.scrollTop;
    };
        //计算每一帧位移的距离
        //Math.ceil向上取整
    //    动画持续时间
    var duration = 1000;
    //    没一帧持续时间
//    影响动画的流畅性
    var interval = 15;
//    动画执行的帧数
    var   frames=duration/interval;
    var speed = Math.ceil(offset/frames);
    //    定时器  每隔一段时间触发或调用一次内部函数
    var SI = setInterval(function () {
            //判断是否回到顶点
            if(offset>0) {
                document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
            }else {
            //    清除定时器
                clearInterval(SI);
                //矫正位置
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            };
        },interval);
};