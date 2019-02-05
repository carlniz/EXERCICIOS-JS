// Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b);
}

//posso passar quantos argumentos quiser dentro da função, seja menos ou mais. 
//Com menos ele somaria um numero com um undefined resultando um NaN, com mais ele somaria os dois primeiros.
imprimirSoma(2);
imprimirSoma(2, 3);

//Função com retorno

//posso setar o valor da variavel no momento de declaração dos argumentos
function soma(a, b = 0){
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));