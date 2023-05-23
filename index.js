const menu1 = window.document.getElementById("menu")
const menu2 = window.document.getElementById("menu2")
const nav  = window.document.getElementById("nav")

/*  Sessão personagens breaking bad */

const sessao1 = window.document.getElementById("sessao-personagens-1")
const personagens1 = window.document.getElementById ("personagens-1")
const personagens2 = window.document.getElementById ("personagens-2")
const personagens3 = window.document.getElementById ("personagens-3")
const personagens4 = window.document.getElementById ("personagens-4")
const personagens5 = window.document.getElementById ("personagens-5")


 /* Menu do site */

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


   personagens1.addEventListener("click", function SessaoPersonagens(sessao01){

   sessao1.style.display = "block"

})

personagens2.addEventListener("click", function SessaoPersonagens(sessao02){
    sessao1.style.display = "none"
})

personagens3.addEventListener("click", function SessaoPersonagens(sessao3){
    
})

personagens4.addEventListener("click", function SessaoPersonagens(sessao4){
    
})

personagens5.addEventListener("click", function SessaoPersonagens(sessao1){
    
})


