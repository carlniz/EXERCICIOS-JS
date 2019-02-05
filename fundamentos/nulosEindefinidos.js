//quando você atribui um objeto a uma variavel, ela não armazena o objeto e sim o endereço daonde o objeto
//se encontra, servindo como um ponteiro. Também funciona com funções.

const a = {name: 'Teste'};
const b = a;

//se mudar o atributo através do a ou do b, o outro sentirá a diferença e mudará também. 
//Isso se chama atribuição por referencia. 
b.name = 'opa';
console.log(b);

//nesse caso foi feita uma atribuição por valor. O c continua sendo o 3 e o d mudou para 4, pois é 
//uma variavel primitiva, no momento da atribuição de c para d, ambos tem seu valor separados.
let c = 3;
let d = c;
d++;

console.log(d);

let valor; //não inicializada, sendo ela uma undefined.
//undefined = variavel declarada mas não inicializada.
console.log(valor);
//null é um valor que não possui nem uma atribuição de referencia e nem uma atribuição de valor.
//null = ausencia de valor
valor = null;
console.log(valor);
//TypeError
//console.log(valor.toString());

const produto = {};
//retorna um undefined, sempre dará undefined em um elemento não criado quando o elemento anterior foi inicializado.
console.log(produto.preco);
console.log(produto);
produto.preco = 3.50;
console.log(produto.preco);
produto.preco = undefined; //evitar atribuir undefined

console.log(!!produto.preco);
//mesmo setando o valor de preco com undefined, o atributo ainda existe dentro da classe produto.
//delete produto.preco; deletar um atributo na classe
console.log(produto);
produto.preco = null; //sem preço

console.log(!!produto.preco);
console.log(produto);