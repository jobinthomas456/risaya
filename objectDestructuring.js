// object destructuring 
// it is the process of extracting the properties from object to bind then to variables


// array symnol is used for objectdestructuring in aray

let array=[2,5,7,2,8]
// let first=array[0]
// console.log(first);

let [first,second,third,fourth,fifth]=array
console.log(first,second,third,fourth,fifth);

let[x,y,...z]=array
console.log(x,y,z);
//  in  array no issues to destructurin  but in the case of object destructuring you   must mention the properties

let object={
    name:"a",
    age:26,
    address:"trichy"
}
let{name:fullname,
    age:old,
    address:place}=object
    console.log(fullname,old,place);
    






