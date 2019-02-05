const escola = "Cod3r";
//retorna o 5 elemento da String
console.log(escola.charAt(4));
//não gera um erro, mas não retorna nada
console.log(escola.charAt(5));
//retorna o valor do elemento referente a tabela ASC
console.log(escola.charCodeAt(3));
//retorna o indice que o caracter se encontra na String
console.log(escola.indexOf('3'));
//retorna a String a partir do indice passado, pode ser definido onde parar também com um segundo numero(não inclue o ultimo numero).
console.log(escola.substring(1));
console.log(escola.substring(0, 3));
//concatena Strings
console.log('Escola '.concat(escola).concat(" !"));
//retorna a String com o caracter passado substituindo o outro caracter no indice passado.
console.log(escola.replace(3, 'E'));
//expressão regular, Regex
console.log(escola.replace(/\d/, 'E'));
//cria um array baseado no item separador dos elementos, no caso a , neste exemplo
console.log("Ana,Maria,Pedro".split(','));

