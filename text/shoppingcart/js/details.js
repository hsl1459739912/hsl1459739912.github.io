

$(function() {
    $.ajax({
        url: "../json/data.json",
        type: "GET",
        dataType: "json",
        success: (response) => {
            // 获取商品详情下标
            let index = location.search.slice(-1);  
            let data = response.infolist[index];
            // 加载数据
            loadingHtml("goods-detail", data);
            // 处理左侧图片
            $(".thumbnail img").on("mouseenter", (e) => {
                let $target = $(e.target);
                $target.addClass("selected").siblings().removeClass("selected");
                $(".small-img").attr({
                    "src": $target.attr("src")
                })
            });
            let order = {
                title : data.title,
                des : data.des,
                price : data.price,
                nums : $('.nums').val(),
                size : '',
                color : '',
                barginprice : '',
                city : '成都'
            }
            $('.nums').on('change',(e)=>{
                let $target = $(e.target);
                order.nums = $target.val();
                order.price = (parseFloat(response.barginprice)*order.nums).toFixed(2);
            })
            $('.size span').on('click',(e)=>{
                let $target = $(e.target);
                order.size = $target.text();
                $target.addClass('selected').siblings().removeClass('selected');
            })
            $('.color span').on('click',(e)=>{
                let $target = $(e.$target);
                order.color = $target.text();
                $target.addClass('selected').siblings().removeClass('selected');
            })
            $('.sel-city').on('change',(e)=>{
                let $target = $(e.target);
                order.city  = $target.val();
            })
            $('.shoppingcar').on('click',()=>{
                if(!order.size || !order.color){
                    alert('请完善数据');
                }else{
                    alert('添加购物车成功');
                    sessionStorage.order = JSON.stringify(order);
                    location.href = '../pages/shopping.html';
                }
            })
        }
    })
});