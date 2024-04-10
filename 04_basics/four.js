
/***************Map() ****************** */
const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumber
        .map( (num) => num * 10)
        .map( (num) => num + 1 )
        .filter( (num) => num >= 40)
//console.log(newNums)

/************************Reduce()************************** */

const myNum = [1,2,3]

const total = myNum.reduce( (acc, curr_val) => (acc + curr_val), 0)

//console.log(total);

/*****Real time example */

const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName: "Java course",
        price: 1999
    },
    {
        itemName: "Python course",
        price: 3999
    },
    {
        itemName : "C course",
        price: 999
    },
    {
        itemName : "Mobile course",
        price: 5999
    }
]

const FinalBill = shoppingCart.reduce( (acc,curr_val) => (acc + curr_val.price), 0)
console.log(FinalBill);