"use strict";
let a = 1;
let b = "Ekku";
console.log(a);
console.log(b);
const func = (a, b) => {
    return (a * b);
};
let ret = func(1, 2);
console.log(ret);
let usrnam = "Aklamaash";
const functi = (a, b) => {
    return (a * b);
};
const arr = [1, 2, 4];
const arr2 = new Array(20);
const arr3 = [1, 2, 3];
arr.forEach((i) => {
    i;
});
console.log(arr);
console.log(arr2);
const obj1 = {
    name: "Aklamaash",
    age: 19,
    gender: "male"
};
const obj2 = {
    color: "white",
    age: 100
};
console.log(obj1);
console.log(obj2);
const funcer = (...m) => {
    return m;
};
funcer(1, 2, 3);
class player {
    constructor(age, gender, name, id) {
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.id = String(Math.ceil(Math.random() * 100));
        this.age = age;
        this.gender = gender;
        this.name = name;
    }
    get getAge() {
        return this.age;
    }
    set setName(name) {
        this.name = name;
    }
}
class Product {
    constructor(productName, price, available) {
        this.productName = productName;
        this.productName = productName;
        this.price = price;
        this.available = available;
    }
}
const users = {
    akla: { ageVal: 19 },
    ekku: { ageVal: 16 },
    farheena: { ageVal: 41 },
    reyas: { ageVal: 43 }
};
console.log(users);
//Using Generics
const func1 = (n) => {
    return n;
};
const ans1 = func1("20");
const ans2 = func1(100);
;
const func3 = (arg) => {
    if (Array.isArray(arg)) {
        return { value: arg, isbool: false };
    }
    if (typeof arg === "object") {
        return { value: arg, isbool: false };
    }
    return { value: arg, isbool: true };
};
func3("akla");
func3(10);
const func4 = (arg) => {
    return arg;
};
func4({ name: "akla", id: 10 });
