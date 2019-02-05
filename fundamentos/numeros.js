const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
//Number.isInteger verifica se o numero é inteiro
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

//ToFixed limita a quantidade de casas decimais que apareceram no numero
console.log(media.toFixed(2));
//toString retorna a variavel para uma String, caso coloque 2 ele transforma em binario
console.log(media.toString(2));
console.log(typeof media); 
console.log(typeof Number);