var ipt = $('.ipt');

var out;

ipt.on('input propertychange',()=>{
    clearTimeout(out);
    out = setTimeout(() => {
        art();
    }, 1000);
})

function art(){
    alert(ipt[0].value);
}