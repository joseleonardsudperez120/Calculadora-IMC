
const calcular = document.getElementById("calcular");




function inc() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

 if (nome !== '' && altura !== '' && peso !=='') {
    
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacão= '';

    if (valorIMC <18.5){
        classificacão = 'Abaixo do peso.';
    } else if (valorIMC <25) {
        classificacão = 'com peso ideal. Parabens';
    }  else if (valorIMC <30){
        classificacão ='levemente acima do peso.';    
    } else if (valorIMC <35) {
        classificacão='com obesidade grau I';
    } else if (valorIMC <40) {
        classificacão = 'com obedesidade grau II';
    } else {
        classificacão = 'com obesidade grau III, Cuidado';
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacão}`;
 } else {
    resultado.textContent = 'Preencha todos os campos!!';
 }

}

calcular.addEventListener("click", inc);