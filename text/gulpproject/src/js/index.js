(function(){
    let name = '张三';
    let age = 28;
    let adress = 'china';
    console.log(name+age+adress+'1');
    let tool = new tool();
    tool.sayHello();

    let menuItens = document.querySelectorAll('.menu-list a');
    for(let i = 0; i<menuItens.length;i++){
        menuItens[i].onclick=function(){
            console.log(this.textContent);
        }
    }
})()