let a:number|string = 1;

let b = <string>"Ekku";

console.log(a);
console.log(b);

const func = (a:number,b:number):number=>{
    return (a*b);
}

let ret = func(1,2);

console.log(ret);

type userName = string|number;

let usrnam:userName = "Aklamaash";

type funct = (n:number,m:number)=>number;

const functi:funct = (a,b)=>{
    return (a*b);
}

const arr:number[] = [1,2,4];
const arr2:Array<string | number> = new Array(20);
const arr3:[number,number,number] = [1,2,3];
arr.forEach((i)=>{
    i;
})
console.log(arr);
console.log(arr2);

interface obj  {
    name?:string,
    gender?:string,
    readonly age:number//can be defined only once
}

interface newObj extends obj{
    color:string,
    func?:(n:number,m:number)=>number|void
}

const obj1:obj = {
    name:"Aklamaash",
    age:19,
    gender:"male"
}

const obj2:newObj = {
    color:"white",
    age:100
}

console.log(obj1);
console.log(obj2);

type func2 = (...m:number[])=>number[];

const funcer:func2 = (...m)=>{
    return m
};

funcer(1,2,3);

class player{
    public readonly id:string;
    constructor(private age:number,protected gender:string,public name:string,id:string){
        this.id = String(Math.ceil(Math.random()*100));
        this.age = age;
        this.gender = gender;
        this.name = name;
    }
    get getAge():number{
        return this.age;
    }

    set setName(name:string){
        this.name = name;
    }
}

interface productType{
    productName:string,
    price:number,
    available:boolean
}

class Product implements productType{
    public price:number;
    public available:boolean;
    constructor(public productName:string,price:number,available:boolean){
        this.productName = productName;
        this.price = price;
        this.available = available;
    }

}