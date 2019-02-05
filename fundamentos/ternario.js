//operação ternario 
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(6.7));

//você pode armazenar o resultado do if ternario dentro de uma variavel
const status = nota >= 7 ? "Aprovado" : "Reprovado";