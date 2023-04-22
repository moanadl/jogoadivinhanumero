const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio() 

function gerarNumeroAleatorio () {
    return parseInt((Math.random() * (maiorValor - menorValor + 1) + menorValor));
}

console.log(numeroSecreto);

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;