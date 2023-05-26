"use strict"

 /*  Sessão personagens breaking bad */

const sessao1 = window.document.getElementById("sessao-personagens-1")
const personagens = [...window.document.getElementsByClassName("personagens")]


for (let i = 0; i < personagens.length; i++){

    personagens[i].addEventListener("click", function alterarPersonagens(){

        if(personagens[i] == personagens[0]){
            sessao1.style.display = "block"
        } else if (personagens[i] == personagens[1]){
            sessao1.style.display  ="none"
        }


    })

    
}
