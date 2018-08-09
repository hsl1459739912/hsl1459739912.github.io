class Person {
    //构造器
    //创建对象使用，自动调用
    constructor(name, age) {
        this.age = age;
        this.name = name;
        console.log(`创建Person对象`);
    }
    //方法
    description() {
        console.log(`my name is ${this.name},I'm ${this.age} years old.`);
    }
    static play(str) {
        console.log(`玩${str}`);
    }
}