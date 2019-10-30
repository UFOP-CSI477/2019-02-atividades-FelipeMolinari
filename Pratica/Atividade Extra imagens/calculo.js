function calcular(){

    const seletor1 = document.getElementById("seletor1")
    const seletor2 = document.getElementById("seletor2")
    const seletor3 = document.getElementById("seletor3")
    const seletor4 = document.getElementById("seletor4")
}

function verificaResposta(resposta){
    let certo = true

    const quadrado = resposta.previousElementSibling
    if(quadrado.classList[0] == resposta.value.toLowerCase()){
        quadrado.classList.remove("errado")
        quadrado.classList.remove("naoselecionado")

        quadrado.classList.add("certo")


        const imagens = document.getElementsByClassName("img")
        const vetImag = [... imagens]
        for(let i=0; i<vetImag.length; i++){
            if(vetImag[i].classList.contains("errado") || vetImag[i].classList.contains("naoselecionado")){
                certo = false
            } 
        }
        if(certo){
            window.alert("Parabens, você acertou")
        }
        
    }else{
        quadrado.classList.remove("certo")
        quadrado.classList.add("errado")
        quadrado.classList.remove("naoselecionado")

    }
    
}
function valida(seletor){
    if(seletor!="Selecione") return true
    return false;
}

function changeSelect(idSeletor) {
    const seletor = document.getElementById(idSeletor);
    if(valida(seletor.value)){
        verificaResposta(seletor)
        
    }
  }