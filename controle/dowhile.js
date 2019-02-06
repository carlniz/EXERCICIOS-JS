function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1;
//while trabalha encima de condição verdadeira, quando for falsa, ele sai do while 
//com o incremento do do{} o while fica no final do bloco, não sendo necessario a abertura de um novo,
//pois ele ira repetir o bloco do enquanto a condição for verdadeira. 
do{
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`);
} while(opcao != -1)