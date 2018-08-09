let a = 10;
//let a = 20;
{
    var π = 3.14;
}
console.log(π);
{
    //块级作用域
    let x = 3.14; 
}
//console.log(x);

//const 常量
const nums = 10;
//nums = 20;

//结构与赋值
let[name,age,gender] = ['张三',28,'男'];
console.log(`
    姓名:${name}
    年龄:${age}
    性别:${gender}
`)

let{person,loca:aderss} = {person:'admin',loca:'China'};


console.log(`
姓名:${person}
地址:${aderss}
`)

let  minandmax = (nums) =>{
    let[min,max] = [nums[0],nums[0]];
    
    nums.forEach(num => {
        min = num < min ? num : min;
        max = num > max ? num : max;
    });
    return{min , max};
}

console.log(minandmax([1,2,4,6,7,8]))

let showinfo = ({name,age})=>{
    console.log(`
    name:${name}
    age:${age}
    `)
}

showinfo({name,age});
showinfo({
    name:'张三',
    age:23
})

let x1 = 10,
    x2 = 20;

[x1,x2] = [x2,x1];
console.log(x1+'.'+x2);

let xyz = 10000;