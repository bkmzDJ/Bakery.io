let bool = false
let nav = document.getElementById('nav')
document.getElementById('header').addEventListener('click', ()=>{
    if(!bool){
        nav.style.top = "9vh"
        bool = true
    } else if (bool){
        nav.style.top = "-30vh"
        bool = false
    }
     
})