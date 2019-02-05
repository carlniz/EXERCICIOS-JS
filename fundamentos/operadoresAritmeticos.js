const [a, b, c, d] = [3, 5, 1, 15];

//infix = soma binária, sempre será a soma de apenas dois componentes.
//também é quando o operador fica entre os operandos.
//operador aritmetico são binarios
const soma = a + b + c + d;

//postfix = quando o operador vem depois do operando
//d++;

//prefix = quando o operador vem antes do operando.
//++d;

//operador unario: operador que opera encima de um unico operando.
//-a;

const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;

//você consegue atribuir negativo e positivo add o respectivo sinal antes da variavel.
console.log(soma, subtracao, multiplicacao, -divisao, modulo);
