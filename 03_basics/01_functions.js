function addTwoNum (num1, num2){
    let result = num1 + num2
    return result
}

result = addTwoNum(5,3)
//console.log("Result: ", result);

function loggedImsg(username = "sam"){ // we can give the default value as well directly in function definition
    if (username === undefined)  // u can use as (!username) same meaning
    {
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

console.log(loggedImsg("Pooja"));
console.log(loggedImsg());  // it gives output as undefined . so, we need to check passed valued is undefined or not

//shopping cart items .. use rest operator(...)

function calculateCartPrice(...item)
{
    return item
}
console.log(calculateCartPrice(100,300,500));

//object use in function

const user = {
    name : "abc",
    age: 28
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}

handleObject(user)

//array use in function

const myarray = [100,200,400,500]

function returnSecondValue(anyarray)
{
    return anyarray[1]
}

console.log(returnSecondValue(myarray));





