document.getElementById("open").addEventListener('click',()=>{
    img.style.display="block";
})
document.getElementById("close").addEventListener('click',()=>{

    img.style.display="none";
})

// prevendefault used to check the values  of the form 
function AnchorClicked(e){
    e.prevenDefault()
}





