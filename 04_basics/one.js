const arr = [1,2,3,4,5,6]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    if (greet != " "){
    //console.log(`Each char is ${greet}`);
    }
   
};
//output is Each char is H  Each char is e, so on.... value will be not priny for space

//Map

const map = new Map()

map.set('IN', "India")
map.set('Fr',"France")
map.set('Can',"Canada")
map.set('IN', "India")

for (const [key,value] of map) {
  //console.log(key);  
  //console.log(key, ':-', value) 
}

//object - we can't use forof loop for objects
const myObject = {
    js : "Javascript",
    cpp: "C++",
    rb: "Ruby"
}
for (const key in myObject) {
    //console.log(`${key} is the shotcut of ${myObject[key]}`); // for value/object use myObject[key]
}


// array use in forin loop

const myArr = [
    "C", "c++", "JS", "RB"
]

for (const arr in myArr) {
    console.log(myArr[arr]);
        
    }
