//foreach

const coding = ["c", "c++", "js", "rb"]

coding.forEach(function (val){
    //console.log(val)
})

coding.forEach( (val) => {
    //console.log(val);
})

// we can use function in foreach loop

function printCode(val)
{
    //console.log(val);
}

coding.forEach(printCode) // need to give reference not ()

//******** for each loop having 3 parameter: arr-values, index and whole arr */

coding.forEach( (val, index, arr) =>{
    //console.log(val, index, arr);
})

// objects under array

const myCoding = [
    {
        langName : "Javascript",
        langFileName : "js"
    },
    {
        langName : "Java",
        langFileName : "java"
    },
    {
        langName : "C++",
        langFileName : "cpp"
    },
    {
        langName : "Python",
        langFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})