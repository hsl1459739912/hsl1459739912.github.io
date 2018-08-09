'use strict';

var a = 10;
//let a = 20;
{
    var π = 3.14;
}
console.log(π);
{
    //块级作用域
    var x = 3.14;
}
//console.log(x);

//const 常量
var nums = 10;
//nums = 20;

//结构与赋值
var name = '张三',
    age = 28,
    gender = '男';

console.log('\n    \u59D3\u540D:' + name + '\n    \u5E74\u9F84:' + age + '\n    \u6027\u522B:' + gender + '\n');

var _person$loca = { person: 'admin', loca: 'China' },
    person = _person$loca.person,
    aderss = _person$loca.loca;


console.log('\n\u59D3\u540D:' + person + '\n\u5730\u5740:' + aderss + '\n');

var minandmax = function minandmax(nums) {
    var _ref = [nums[0], nums[0]],
        min = _ref[0],
        max = _ref[1];


    nums.forEach(function (num) {
        min = num < min ? num : min;
        max = num > max ? num : max;
    });
    return { min: min, max: max };
};

console.log(minandmax([1, 2, 4, 6, 7, 8]));

var showinfo = function showinfo(_ref2) {
    var name = _ref2.name,
        age = _ref2.age;

    console.log('\n    name:' + name + '\n    age:' + age + '\n    ');
};

showinfo({ name: name, age: age });
showinfo({
    name: '张三',
    age: 23
});

var x1 = 10,
    x2 = 20;

var _ref3 = [x2, x1];
x1 = _ref3[0];
x2 = _ref3[1];

console.log(x1 + '.' + x2);

var xyz = 10000;