// ---------3 types of functions-------
// 1  normal function
let a=10
let b=20
function sum(){
    return(a+b);
}
console.log(sum())
// function declared by expression
let sum1=function(){
    console.log(a+b);  
}
sum1()
// arrow functiions
let sum2=()=>a+b
console.log(sum2());

// function hoisting
// variable hoisting

// NaN - not a number

// function parameters nd arguments

// default parameter

// es5
function defaultparameter(){
    console.log(a,b)
    a=(a===undefined)?10:a
    b=(b===undefined)?10:b
    
}
console.log(defaultparameter());

// es6
function add(a=0,b=0){
    console.log(a+b);
    
}
add(2)


