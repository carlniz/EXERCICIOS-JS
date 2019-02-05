const nome = "Rebeca";
const concatenacao = "Olá " + nome + " !";
//mais estetico e considera as quebras de linhas dentro da String
const template = `
Olá
${nome}!`;
console.log(concatenacao, template);

//expressões ...

//dentro das chaves ele realiza operações
console.log(`1 + 1 = ${1 + 1}`);

//função (???)
const up = texto =>texto.toUpperCase();
//também chama funções
console.log(`Ei ... ${up("cuidado")}!`);