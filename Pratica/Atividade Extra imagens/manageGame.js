const itens = document.getElementsByClassName("item")
function verificaSeFazParte(itemClicado){
    const elementoClicado = document.getElementById(itemClicado)
    const paiItemClicado = elementoClicado.parentNode
    const resultado = document.getElementById(`resultado${paiItemClicado.classList[1]}`)
    if(itemClicado == paiItemClicado.classList[1]){
        resultado.value= "Acertou :)"
        elementoClicado.classList.add("acerto")
    }else{
        resultado.value= "Errou :)"

        elementoClicado.classList.add("errado")
    }
    const vetoresItens = [... itens]
    vetoresItens.forEach(e=>{
        e.onclick = null
        console.log("entrou")
    })
}