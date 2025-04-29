console.log(document);
// Dom---document object model-->to access the html 

// access methods

// acess the element
// document.getElementById
console.log(document.getElementById("java"));

// document.getElementsByClassName
//  to select values in a class

// document.getElementsByTagName

console.log(document.getElementsByTagName("h1")
);

// Query selector
         console.log(document.querySelector("#java"));
//  must mention the class or id by symbol
//  query selector all
//  to select multiple values from the user


// to acess the values
// 1 innerhtml
console.log(document.getElementById("dom").innerHTML);
// 2.innertext
console.log(document.getElementById("dom").innerText);


// how to change the value

// document.getElementById("java").innerText="javascript class has changed"

// document.getElementById("dom").innerText="Dom  has chanfed"


document.getElementsByClassName("cls").innerText="content has changed"

// index
// this is a static  way to change ths text
document.getElementsByClassName("cls")[0].innerText="content has changed"
document.getElementsByClassName("cls")[1].innerText="content has changed"

// dynamic way
//  forloop is used to acess the array elements
for(let i=0;i<document.getElementsByClassName("class").length;i++){
    document.getElementsByClassName("class")[i].innerText="content changed"
}




// ----------------------------------------------
//   how to create the element in javascript


// createElemet=====how to create a element
// setAttribute ==how to set attribute
// classlist.add/remove

let contact=document.createElement("div")
contact.classList.add("class","contactDetails")
contact.setAttribute("id","contact")

let name=document.createElement("h1")
name.setAttribute("id","name")
name.innerText="risaya Academy"
contact.appendChild(name)

let address=document.createElement("h4")
address.innerText="address:Banglore"
contact.appendChild(address)

let link=document.createElement("a")
link.setAttribute("href","###")
link.setAttribute("target","_blank")
link.innerText="click here"
contact.appendChild(link)

document.body.appendChild(contact)


let table=document.createElement("table")
table.setAttribute("id","table")
let tr1=document.createElement("tr")
table.setAttribute("id","td1")
let td1=document.createElement("td")
td1.innertext="row1";
table.appendChild(td1)
table.appendChild(tr1)
document.body.appendChild(table)































         







