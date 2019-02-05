// par nome/valor

//contexto léxico é o local onde sua variavel foi definida fisicamente no código

const saudacao = "Eae"; // contexto léxico 1 (nível arquivo)

function exec(){
    const saudacao ="Opa"; // contexto léxico 2 (nível function)
    return saudacao;
}

//Erro
//const saudacao = "Olá!!" // No mesmo contexto léxico 1
// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome:"Oloco",
    idade:"85",
    peso:"888",
    endereco: {
        logradouro:"Rua RS",
        numero: 555
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);