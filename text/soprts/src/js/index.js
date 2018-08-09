$(function(){
    var li=document.querySelector('.flash').getElementsByTagName("li");  
    var len = li.length;
    var num = 0;
    setInterval(function(){  
        li[num].style.display = 'none';
        num=++num==len?0:num;  
        li[num].style.display = 'block';
  
},3000);
})