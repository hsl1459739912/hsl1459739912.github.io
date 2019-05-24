let box = $('.box')
let box1 = $('.box1')
let box2 = $('.box2')

let arr1 = ['类型1','类型2','类型3','类型4','类型5','类型6'];
let arr2 = ['状态1','状态2','状态3','状态4','状态5','状态6'];

function box1set(){
    var str = ''
    for(var i =0;i<arr1.length;i++){
        str+=`<p class='1box${i}'>${arr1[i]}</p>`;
    }
    box1.empty()
    box1.append(str);
}

function box2set(){
    var strs = ''
    for(var i =0;i<arr2.length;i++){
        strs+=`<p class='2box${i}'>${arr2[i]}</p>`;
    }
    box2.empty()
    box2.append(strs);
}

box1set();
box2set();

let down1 = false;
let down2 = false;
let box1dom;
let box2dom;
let x1;
let y1;
let x2;
let y2;


var box1p = $('.box1>p');
var box2p = $('.box2>p');


box1p.on('mousedown',(e)=>{
    down1 = true;
    box1dom = e.currentTarget.className;
    x1 = e.clientX;
    y1 = e.clientY;
    $(`.${box1dom}`).addClass('fix')
    $(`.${box1dom}`).css({"left":x1-100,"top":y1-30})
})

box2p.on('mousedown',(e)=>{
    down2 = true;
    x2 = e.clientX;
    y2 = e.clientY;
    box2dom = e.currentTarget.className;
    $(`.${box2dom}`).addClass('fix')
    $(`.${box2dom}`).css({"left":x2-100,"top":y2-30,})
})

box.on('mousemove',(e)=>{
    if(down1){
        $(`.${box1dom}`).css({"left":e.clientX-100,"top":e.clientY-30})
    }
    if(down2){
        $(`.${box2dom}`).css({"left":e.clientX-100,"top":e.clientY-30})
    }
})

box.on('mouseup',()=>{
    if(down2){
        box2dom = box2dom.slice(0, box2dom.search('fix') != -1?box2dom.search('fix'):10);
        $(`.${box2dom}`).removeClass('fix');
        box2dom = $(`.${box2dom}`)[0].className;
        var idx = box2dom.slice(4)
        var text = arr2[idx];
        arr2.splice(idx,1);
        arr2.push(text);
        down2 = false;
        box2dom = null;
        box1set();
        box2set();
        box2p = $('.box2>p');
        box1p = $('.box1>p');
    }
    if(down1){
        box1dom = box1dom.slice(0, box1dom.indexOf('fix')!=-1?box1dom.indexOf('fix'):10);
        $(`.${box1dom}`).removeClass('fix');
        box1dom = $(`.${box1dom}`)[0].className;
        var idx = box1dom.slice(4)
        var text = arr1[idx];
        arr1.splice(idx,1);
        arr1.push(text);
        down1 = false;
        box1dom = null;
        box1set();
        box2set();
        box2p = $('.box2>p');
        box1p = $('.box1>p');
    }
    box1p.on('mousedown',(e)=>{
        down1 = true;
        box1dom = e.currentTarget.className;
        x1 = e.clientX;
        y1 = e.clientY;
        $(`.${box1dom}`).addClass('fix')
        $(`.${box1dom}`).css({"left":x1-100,"top":y1-30})
    })
    box2p.on('mousedown',(e)=>{
        down2 = true;
        x2 = e.clientX;
        y2 = e.clientY;
        box2dom = e.currentTarget.className;
        $(`.${box2dom}`).addClass('fix')
        $(`.${box2dom}`).css({"left":x2-100,"top":y2-30,})
    })
    box.on('mousemove',(e)=>{
        if(down1){
            $(`.${box1dom.slice(0, box1dom.search('fix') != -1?box1dom.search('fix'):10)}`).css({"left":e.clientX-100,"top":e.clientY-30})
        }
        if(down2){
            $(`.${box2dom.slice(0, box2dom.search('fix') != -1?box2dom.search('fix'):10)}`).css({"left":e.clientX-100,"top":e.clientY-30})
        }
    })
})

box1.on('mouseup',()=>{
    if(down2){
        box2dom = box2dom.slice(0, box2dom.indexOf('fix') != -1?box2dom.indexOf('fix'):10);
        $(`.${box2dom}`).removeClass('fix');
        box2dom = $(`.${box2dom}`)[0].className;
        var idx = box2dom.slice(4)
        var text = arr2[idx];
        arr1.push(text);
        arr2.splice(idx,1);
        down2 = false;
        box2dom = null;
        box1set();
        box2set();
        box1p = $('.box1>p');
        box2p = $('.box2>p');
    }
    if(down1){
        box1dom = box1dom.slice(0, box1dom.indexOf('fix')!=-1?box1dom.indexOf('fix'):10);
        $(`.${box1dom}`).removeClass('fix');
        box1dom = $(`.${box1dom}`)[0].className;
        var idx = box1dom.slice(4)
        var text = arr1[idx];
        arr1.splice(idx,1);
        arr1.push(text);
        down1 = false;
        box1dom = null;
        box1set();
        box2set();
        box2p = $('.box2>p');
        box1p = $('.box1>p');
    }
    box1p.on('mousedown',(e)=>{
        down1 = true;
        box1dom = e.currentTarget.className;
        x1 = e.clientX;
        y1 = e.clientY;
        $(`.${box1dom}`).addClass('fix')
        $(`.${box1dom}`).css({"left":x1-100,"top":y1-30})
    })
    box2p.on('mousedown',(e)=>{
        down2 = true;
        x2 = e.clientX;
        y2 = e.clientY;
        box2dom = e.currentTarget.className;
        $(`.${box2dom}`).addClass('fix')
        $(`.${box2dom}`).css({"left":x2-100,"top":y2-30,})
    })
    box.on('mousemove',(e)=>{
        if(down1){
            $(`.${box1dom.slice(0, box1dom.search('fix') != -1?box1dom.search('fix'):10)}`).css({"left":e.clientX-100,"top":e.clientY-30})
        }
        if(down2){
            $(`.${box2dom.slice(0, box2dom.search('fix') != -1?box2dom.search('fix'):10)}`).css({"left":e.clientX-100,"top":e.clientY-30})
        }
    })
})

box2.on('mouseup',()=>{
    if(down1){
        box1dom = box1dom.slice(0, box1dom.indexOf('fix')!=-1?box1dom.indexOf('fix'):10);
        $(`.${box1dom}`).removeClass('fix');
        box1dom = $(`.${box1dom}`)[0].className;
        var idx = box1dom.slice(4)
        var text = arr1[idx];
        arr2.push(text);
        arr1.splice(idx,1);
        down1 = false;
        box1dom = null;
        box1set();
        box2set();
        box1p = $('.box1>p');
        box2p = $('.box2>p');
    }
    if(down2){
        box2dom = box2dom.slice(0, box2dom.search('fix') != -1?box2dom.search('fix'):10);
        $(`.${box2dom}`).removeClass('fix');
        box2dom = $(`.${box2dom}`)[0].className;
        var idx = box2dom.slice(4)
        var text = arr2[idx];
        arr2.splice(idx,1);
        arr2.push(text);
        down2 = false;
        box2dom = null;
        box1set();
        box2set();
        box2p = $('.box2>p');
        box1p = $('.box1>p');
    }
    box1p.on('mousedown',(e)=>{
        down1 = true;
        box1dom = e.currentTarget.className;
        x1 = e.clientX;
        y1 = e.clientY;
        $(`.${box1dom}`).addClass('fix')
        $(`.${box1dom}`).css({"left":x1-100,"top":y1-30})
    })
    box2p.on('mousedown',(e)=>{
        down2 = true;
        x2 = e.clientX;
        y2 = e.clientY;
        box2dom = e.currentTarget.className;
        $(`.${box2dom}`).addClass('fix')
        $(`.${box2dom}`).css({"left":x2-100,"top":y2-30,})
    })
    box.on('mousemove',(e)=>{
        if(down1){
            $(`.${box1dom.slice(0, box1dom.search('fix') != -1?box1dom.search('fix'):10)}`).css({"left":e.clientX-100,"top":e.clientY-30})
        }
        if(down2){
            $(`.${box2dom.slice(0, box2dom.search('fix') != -1?box2dom.search('fix'):10)}`).css({"left":e.clientX-100,"top":e.clientY-30})
        }
    })
})


