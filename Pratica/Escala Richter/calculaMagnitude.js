function calculaEscala(){
    const campoAmplit = document.getElementById("amplitudeInput")
    const campoDeltaT = document.getElementById("deltaTInput")
    const resultMag = document.getElementById("resultMag")

    if(validar(campoAmplit) && validar(campoDeltaT)){
        const amplitudeRichter = (Math.log(campoAmplit.value)/Math.log(10)) + 
        3*(Math.log(8*campoDeltaT.value)/Math.log(10)) - 2.82
        resultMag.value = amplitudeRichter
        verificaEfeitos(amplitudeRichter)
    }
}

function verificaEfeitos(amplitudeRichter){
    const campoEfeito = document.getElementById("efeitoMagnitude")
    if(amplitudeRichter < 3.5){
        campoEfeito.innerHTML = "Geralmente não sentido, mas gravado."
    }else if(amplitudeRichter>3.5 && amplitudeRichter<5.4){
        campoEfeito.innerHTML = "Às vezes sentido, mas raramente causa danos."
    }else if(amplitudeRichter>5.5 && amplitudeRichter<6.0){
        campoEfeito.innerHTML = "No máximo causa pequenos danos a prédios bem constuidos, mas pode danificar "+
        "seriamente casas mal construídas em regiões próximas."
    }else if(amplitudeRichter>7.0 && amplitudeRichter<7.9){
        campoEfeito.innerHTML = "Grande terremoto. Pode causar sérios danos numa grande faixa."
    }else{
        campoEfeito.innerHTML = "Enorme terremoto. Pode causar graves danos em muitas áreas mesmo que "+
        "estejam a centenas de quilômetros"
    }
}
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