function converterCtoF(tempC) {
    const tempF = (tempC * 9/5) + 32;
    console.log(`Temperatura = ${tempF} F`);
    /* o return retorna o que é desejado, neste caso a temp convertida que está na variável tempF */
    return tempF;
}

function converter() {
    console.log('Ei Clicou!'); 
    let tempC = document.getElementById('tempC').value;
    console.log(`Temp °C: ${tempC}`);   

    /* Chamando a função que converte de C para F */
    const resultado = converterCtoF(tempC);
    /* Exibe o reultado na tag que possui um id chamado resultado no HTML */
    document.getElementById('resultado').innerHTML = resultado;
}























/* converterCtoF(18)
converterCtoF(30) */


/* function convertCtoK(tempC) {
    
} */