// map 
// map is used to create a new arry drom a existing array

let array=[1,3,5,36 ,78]
let emptyarray=[]
for(i=0;i<array.length;i++){
    emptyarray.push(array[i]*8)
}
console.log(emptyarray);
let map_Arr=array.map((item,index)=>item*8)
console.log(map_Arr);



// ifyou want to use curly braces make  sure it uses return statement



// array of objects
let student=[
    {name:"vicky",age:19},{name:"jobin",age:26}, {name:"vicky",age:56} ,{name:"alan",age:56}

]
let map_array=student.map((item)=>{
    return console.log(item.name);
    
})


// filter
// put condition purpose
let filter_array=array.filter((item)=>item%2==0).map((i)=>i*8)
console.log(filter_array);
// here after using filter function map function is used to array the iterations values to new array 
// array of objects
let filter_arr=student.filter((item)=>item.age>25).map((i)=>i.name)
console.log(filter_arr);



// reduce-return a single value or object
// accumulator ---start value
// current value --next value
// intial value--- it is fixed by user


let reduce_arr=array.reduce((a,c)=>{
    return a+c
},[])
console.log(reduce_arr);



// example task
let sports=[
    {name:"a",sport:"football"},
    {name:"a",sport:"Kabadi"},
    {name:"a",sport:"Cricket"},
    {name:"a",sport:"Cricket"},
    {name:"a",sport:"Hockey"},
    {name:"a",sport:"Hockey"},
]






let result = {};

sports.forEach(item => {
  if (result[item.sport]) {
    result[item.sport]++;
  } else {
    result[item.sport] = 1;
  }
});

console.log(result);




// let sports_array = sports.reduce((a, c) => {
//     let key = c.sport.toLowerCase(); // Optional: normalize case
//     a[key] = (a[key] || 0) + 1;
//     return a;
// }, {});

let sports_arr=sports.reduce((acc,current)=>{
    acc[current.sport]?acc[current.sport]++:acc[current.sport]=1
    return acc

},{})
console.log(sports_arr);




//  {football:1,kabadi:1,cricket:2,Hockey:2}    




   



