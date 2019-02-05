var a = 3;
//let é a recomendado para declarar variavel
let  b = 4;
//estranhesa do JavaScript, você consegue redeclarar uma variavel com var
var a = 30;
b = 40;
console.log(a + b);
a = 300;
b = 400;
console.log(a, b);

//Sempre usar a declaração const quando possivel
const c = 5;
//c = 50;
console.log(c);