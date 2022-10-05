function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;
//while trabalha encima de condição verdadeira, quando for falsa, ele sai do while  
while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi essa ${opcao}.`);
}

