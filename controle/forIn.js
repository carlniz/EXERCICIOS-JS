const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

//ele considera o valor de I os indices do array notas
for(let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}

//também recupera atributos de objetos
//sempre add o let na hora de declaração da variavel dentro do for
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

console.log(atributo);