let num1 = 1;
let num2 = 2;
num1++;

console.log(num1);
//a forma prefix tem prioridade sobre a postfix
--num1;
console.log(num1);
//resulta em true, pois o -- acontece após a subtração

console.log(++num1 === num2--);
//simplificar o codigo o maximo possivel, nunca incrementar dentro de ua comparação
console.log(num1 === num2);