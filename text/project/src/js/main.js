const tools = require('./tools');
import '../style/less/index.less';

tools.setTitle();

let [a,b,c] = [1,2,3];

console.log(a);
console.log(b);
console.log(c);

let sayHello = ()=>{
    console.log(11111111);
}
document.querySelector('.title').onclick = (e)=>{
    e.target.textContent  =  '6666';
}
