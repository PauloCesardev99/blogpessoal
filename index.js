const menu1= window.document.getElementById("menu")
const menu2 = window.document.getElementById("menu2")
const nav  = window.document.getElementById("nav")


menu1.addEventListener ('click' , function menu(){
    nav.style.display = "inline-block"
    menu1.style.display = "none"
    menu2.style.display = "inline-block"

    
})
menu2.addEventListener ('click' , function menu(){
    nav.style.display = "none"
    menu1.style.display = "inline-block"
    menu2.style.display = "none"


})
