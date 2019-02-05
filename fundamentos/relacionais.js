// == igualdade, compara apenas os valores dos operandos, sendo possivel comparar string com numbers
console.log("01", '1' == 1);
// === igualdade estrita, compara se os operamos são estritamente equivalentes, tanto em valor quanto em tipo de variavel. Melhor utilizar ele para evitar possiveis erros.
console.log("02", "1" === 1);
//!= apenas verifica a diferença de valores
console.log("03", "3" != 3);
// !== verifica a diferença entre tipos e valor.
console.log("04", "3" !== 3);
console.log("05", 3 < 2);
console.log("06", 3 > 2);
console.log("07", 3 <= 2);
console.log("08", 3 >= 2);

//ao passar o valor 0 no campo Date, ele interpretará como se fosse 1 janeiro de 1970.
const d1 = new Date(0);
const d2 = new Date(0);
//nesse caso ele esta comparando endereços de memoria não fazendo diferença se for == ou ===
console.log("09", d1 === d2);
console.log("10", d1 == d2);

//o getTime() pega a data de referencia até o dia de hoje(system) e retorna em milissegundos, dando true na comparação por ser dois numbers de retorno.
// nesse caso da true tanto == quanto ===
console.log("11", d1.getTime() === d2.getTime()); 
//nesse caso, com o == ele retorna verdadeiro mas com o === retorna falso
console.log("12", undefined == null);
console.log("13", undefined === null);