function validar(campo) {

    let n = campo.value;

    if (n.length == 0 || isNaN(parseFloat(n))) {
        window.alert("Informe o valor corretamente!");

        campo.value = "";
        campo.focus();
        return false;

    }

    // Correto
    return true;


}


function calcular() {

    let peso = document.dados.valor1;
    let altura = document.dados.valor2;

    if (validar(peso) && validar(altura)) {
        const alturaEmCm =parseFloat(altura.value)/100
        let res = parseFloat(peso.value)/((alturaEmCm)*(alturaEmCm))
        document.dados.resultado.value = res;
        mudaCorTabela(res)
        apresentaPesoIdeal(altura)
    }
}
function apresentaPesoIdeal(altura){
    const contentPesoIdeal = document.getElementById("pesoIdeal")
    const alturaEmCm =parseFloat(altura.value)/100
    const min = (alturaEmCm*alturaEmCm)*18.5
    const max = (alturaEmCm*alturaEmCm)*24.9
    const pesoIdeal = `O seu peso ideal está entre ${min} e ${max}`
    contentPesoIdeal.innerHTML=pesoIdeal
}

function mudaCorTabela(imc){
    const rowsTable = document.getElementById("tbodyTabela").children
    for(let i=0; i<rowsTable.length; i++){
        rowsTable[i].style.backgroundColor  = "white"
        rowsTable[i].style.color  = "black"
    }
    if(imc<18.5){
        
        rowsTable[0].style.backgroundColor  = "red"
        rowsTable[0].style.color = "white"

    }
    else if(imc> 18.5 && imc < 24.99){
        rowsTable[1].style.backgroundColor  = "green"
        rowsTable[1].style.color = "white"

    }
    else if(imc>25 && imc <29.99){
        rowsTable[2].style.backgroundColor = "blue"
        rowsTable[2].style.color = "white"

    }
    else if(imc>30 && imc <34.9){
        rowsTable[3].style.backgroundColor = "yellow"
        rowsTable[3].style.color = "white"

    }
    else if(imc>35 && imc < 39.99){
        rowsTable[4].style.backgroundColor = "orange"
        rowsTable[4].style.color = "white"

    }else{
        rowsTable[5].style.backgroundColor = "red"
        rowsTable[5].style.color = "white"
    }
}