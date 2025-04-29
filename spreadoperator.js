// spread opertor
// symbol .... its purpose is to copy


let  array=[7,9,5,3,8]
let array1=[...array]
array.push(10)
console.log(array,array1);


//many inbuildfunctions
let max_val=Math.max(...array)
console.log(max_val);

let min_val=Math.min(...array)
console.log(min_val);



// spread operator is used to input arguments from the user
function sum(...args)
{
    return args

}
console.log(sum(5,9,6,8,34));


// shallow copy
// its create address for only first level elements

let student={
    name:"a",
    address:{
        place:"chennai",pincode:"775564",city:{street:{landmark:"adoor"}},
            },
    marks:{
        Englih:67, Grade:{top:"s" }
          }
}
// let stu1={...student}
// stu1.name="cathy"
// stu1.address.place="kerala"
// console.log("copy",stu1);
// console.log("origial",student);


// deep copy
console.log("------------------------");

let stu1={...student}
stu1.name="cathy"
// stu1.address.place="kerala"
let stu2={...student,address:{...student.address}}
stu2.address.place="kerala"
console.log("copy",stu1);
console.log("copy",stu2);
console.log("origial",student);
console.log("------------------------");


let  stu3={...student,address:{...student.address,city:{...student.address.city}}}
stu3.address.city.street="SNIT"
console.log("copy",stu3);
console.log("original",student)



let  stu4={...student,address:{...student.address,city:{...student.address.city.street,landmark:{...student.address.city.landmark}}}}
stu3.address.city.street.lanmark="SNIT"
console.log("copy",stu3);
console.log("original",student)
























// main level----student
// first level elements  name,address,marks
// second level elements place,pincode,city,grade
// third level  street, top

// we have to convert  the first and second level into first level elements

















