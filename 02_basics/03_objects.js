//create symbol

const symbol1 = Symbol("key1")
const obj1 = {
    name : "abc",
    age : 30,
    email : "abc@gmail.com",
    [symbol1] : "mysymbol",
    days : ["mon","tue", "wed"]
}

/*console.log(obj1.name);
console.log(obj1["age"]);
console.log(obj1["email"]);
console.log(obj1[symbol1]);
console.log( typeof symbol1)*/

//to lock an object use freeze and after freeze valuse will be not changed

/*Object.freeze(obj1)

obj1.email = "abc@yahoo.com"
console.log(obj1);*/

//add greeting to this object

obj1.greeting = function() {
    console.log("Hello User");

}

console.log(obj1.greeting);
console.log(obj1.greeting());

//add name in greeting

obj1.greeting1 = function() {
    console.log(`Hello User ${this.name}`);

}

console.log(obj1.greeting1);
console.log(obj1.greeting1());


