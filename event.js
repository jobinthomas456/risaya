function clicking(){

}
function load(){
    alert("please ait the page is loading")

}

// we can write event in two ways 
//  by using html files inside 
// by using add event listener
// element.addEventListener('event',(function),usecCapture)

document.getElementById("btn").addEventListener('click',(e)=>{
    console.log(e,e.target)
    sum(10,20)
    
})
function sum(a,b){
    console.log(a+b);
    
}


