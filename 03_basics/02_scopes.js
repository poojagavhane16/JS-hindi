/*let a =300
if (true){
    let a =10
    const b = 20
    var c = 30

    console.log("Inner A : ", a)


}
console.log(a);
//console.log(b);
console.log(c); */

function one(){
    const username = "pooja"

    function two(){
        const website = "youtube"
        //console.log(username);

    }

    two()
    //console.log(username);
}
one()

//+++++++++++++++++++++++ Hoisting  ++++++++++++++++++++++++++++++

addOne(5)
console.log(addOne(5));

function addOne(num){
    return num +1 
}

addTwo(5) // we cannot access hoisting function before initialization
const addTwo = function(num){
    return num + 2
}


console.log(addTwo(5));