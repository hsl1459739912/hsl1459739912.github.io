$(function(){
    Bmob.initialize("0319b91e2178a41cbd7c7683126ed4cd", "3afd32e8095f62c049de343910a9473f");
    $('.sa01').on('click',()=>{
        $('.shop').css({
            'display':'none'
        });
        $('.minu').css({
            'display':'block'
        });
        $('.show').html(`
            <img src='./images/1.jpg'>
        `);
        $('.num').on('blur',()=>{
            $('.sell').text($('.num').val()*3399);
        })
        $('.add').on('click',()=>{
            var GameScore = Bmob.Object.extend("ShopCar");
            var gameScore = new GameScore();
            gameScore.set("shopname", 'Gree/格力，KFR-35GW/NhBaB3');
            gameScore.set("shopnum", $('.num').val());
            gameScore.set('sell',$('.num').val()*3399);
            //添加数据，第一个入口参数是null
            gameScore.save(null, {
            success: function(gameScore) {
                $('.minu').css({
                    'display':'none',
                });
                $('.shopcar').css({
                    'display':'block'
                })
            }
            });
        })
    })
    $('.sa02').on('click',()=>{
        $('.shop').css({
            'display':'none'
        });
        $('.minu').css({
            'display':'block'
        });
        $('.show').html(`
            <img src='./images/11.jpg'>
        `);
        $('.num').on('blur',()=>{
            $('.sell').text($('.num').val()*3399);
        })
        $('.add').on('click',()=>{
            var GameScore = Bmob.Object.extend("ShopCar");
            var gameScore = new GameScore();
            gameScore.set("shopname", 'Gree/格力 KFR-26GW/NhBaD3');
            gameScore.set("shopnum", $('.num').val());
            gameScore.set('sell',$('.num').val()*2549);
            //添加数据，第一个入口参数是null
            gameScore.save(null, {
            success: function(gameScore) {
                $('.minu').css({
                    'display':'none',
                });
                $('.shopcar').css({
                    'display':'block'
                })
            }
            });
        })
    })
    $('.sa03').on('click',()=>{
        $('.shop').css({
            'display':'none'
        });
        $('.minu').css({
            'display':'block'
        });
        $('.show').html(`
            <img src='./images/111.jpg'>
        `);
        $('.num').on('blur',()=>{
            $('.sell').text($('.num').val()*3399);
        })
        $('.add').on('click',()=>{
            var GameScore = Bmob.Object.extend("ShopCar");
            var gameScore = new GameScore();
            gameScore.set("shopname", 'sGree/格力 KFR-35GW/NhBaD3');
            gameScore.set("shopnum", $('.num').val());
            gameScore.set('sell',$('.num').val()*2799);
            //添加数据，第一个入口参数是null
            gameScore.save(null, {
            success: function(gameScore) {
                $('.minu').css({
                    'display':'none',
                });
                $('.shopcar').css({
                    'display':'block'
                })
            }
            });
        })
    })
    var GameScore = Bmob.Object.extend("ShopCar");
    var query = new Bmob.Query(GameScore);
    // 查询所有数据
    query.find({
    success: function(results) {
        var htmlStr = ' ';
        var sells = 0;
        for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var sell = object.get('sell');
        sells += sell;
        htmlStr += `
        <div>
            商品名称:<span>${object.get('shopname')}</span>
            购买数量:<span>${object.get('shopnum')}</span>
            当前价格:<span>${object.get('sell')}</span>
        </div>
        `
        } 
        $('.sells').text(sells);
        $('.shopshow').html(htmlStr);
    },
    });
    $('.buy').on('click',()=>{
        alert('买个锤子你买，钱都莫求得!!!!');
    });
    $('.clear').on('click',()=>{
        var GameScore = Bmob.Object.extend("ShopCar");      
        var query = new Bmob.Query(GameScore);
        query.find({
            success:function(obj){
                for(var i = 0;i<obj.length;i++){
                    var object = obj[i];
                    query.get(object.id,{
                        success:function(res){
                            res.destory({
                                success:function(){
                                    alert("删除成功");
                                }
                            })
                        }
                    })
                }
            
            }
        })
    })
})