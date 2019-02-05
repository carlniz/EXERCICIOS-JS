const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
//gera um valor undefined
console.log(valores[4]);

valores[4] = 10;
//gera um valor no indice 10 e outros indices vazios até o penultimo com valor atribuido.
//valores[10] = 5;
console.log(valores);
console.log(valores.length);
//push add novos valores ao array, pode se misturar tipos de dados dentro de um array (não é boa pratica)
valores.push({id: 3}, false, null, 'teste');
console.log(valores);
//retira o ultimo valor do array
console.log(valores.pop());
//retira o valor escolhido pelo indice
delete valores[0]
console.log(valores);

console.log(typeof valores);
