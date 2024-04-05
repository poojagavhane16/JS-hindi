const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "pooja"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
/*
//declare objects under objects

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userName : {
            firstName : "Hitesh",
            lastName : "Chaudhary"
        }
    }
}

//display first name
console.log(regularUser.fullName.userName.firstName);

//merge 2 or more objects

const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}

//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);*/

const user1 =
[
    {
        id : "123",
        email : "abc1@gmail.com"
    },
    {
        id : "456",
        email : "abc2@gmail.com"
    },
    {
        id : "789",
        email : "abc3@gmail.com"
    }
]

//console.log(user1[1].email)

// i want keys, values of tinderUser object seperately

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));

// Detructring of objects

const course = {
    courseName : "JS",
    price : 999,
    instructor: "hitesh"
}

const {instructor} = course
console.log(instructor);