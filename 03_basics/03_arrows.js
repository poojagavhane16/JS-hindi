const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function() {
        //console.log(`${this.username}, Welcome to website`);
        //console.log(this);
    }
    

}


user.username= "sam"
user.welcomeMessage()

//console.log(this)

const chai  = () => {
    let username = "hitesh"
    console.log(this);
}
//chai()

//***************** Basic Arrow function */

const addNum = (num1,num2) =>{
    return num1 + num2
}
//console.log(addNum(3,4));

//***********IMPLICIT RETURN (one line statement), no need to add return */

const addNumber = (num1,num2) => num1 + num2

//console.log(addNumber(5,7))

//***************To return object in arrow function */

const getName = () => ({username : "hitesh",
price : 999})

console.log(getName());



