const myNums = [1,2,3,4,5,6,6,7,8]

const newNums = myNums.filter( (item) => item > 5)
//console.log(newNums);

//*** using function scope - then always use returen keyword */

const nums =  myNums.filter( (item) => {
    return item > 4
})

//console.log(nums);


/****Using for each ****/

const newNum = []

myNums.forEach( (num) => {
    if (num > 4)
    {
        newNum.push(num)
    }
})
//console.log(newNum);

// real time example for filter

const books = [
    {title:'Book1', genre : 'Fiction', publish : 1998}, 
    {title:'Book2', genre : 'Non-Fiction', publish : 2000},
    {title:'Book3', genre : 'History', publish : 2021},
    {title:'Book4', genre : 'Fiction', publish : 1995},
    {title:'Book5', genre : 'Fiction', publish : 2013},
    {title:'Book6', genre : 'History', publish : 1998},
    {title:'Book7', genre : 'Non-Fiction', publish : 2011},
    {title:'Book8', genre : 'Fiction', publish : 1998},
    {title:'Book9', genre : 'History', publish : 1993},
    {title:'Book10', genre : 'Non-Fiction', publish : 1999}
]

/* I want books having genre history*/

const userbook = books.filter( (bk) => bk.genre === 'History')
console.log(userbook);