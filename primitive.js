// primitive have different memory location
let a=10
let b=20
b=20
console.log(a,b);

// non primitive has same memory location
// spread operator and object .assin is used to resolve the array assign problems

let array=[1,3,5,6,7]
let array1=array
array1=Object.assign([],array1)
array1.push(10)
console.log(array,array1);


// syntax
// c.arr=object=assign(target,source)

// object
let object={
    x:1,
    Y:2,
    z:3
}
let object1=object
object1=Object.assign({},object1)
object1.z=5
console.log(object,object1);
 


 



