let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
//as exclamações são acumulativas sendo ! = negação e !! = negação da negação
console.log(!!isAtivo);

console.log("Os verdadeiros ...");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
//Se o valor da atribuição for verdadeiro, dará verdadeiro
console.log(!!(isAtivo = true));

console.log("Os falsos ...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para finalizar ...");
//ele sempre vai retornar o primeiro valor verdadeiro.
console.log(!!('' || null || 0 || 'epa' || "123"));
console.log(!!('' || null || 0 || ' ' )); 
//usando o ||, ele sempre ira retornar o valor verdadeiro.
let nome = "";
console.log(nome || 'Desconhecido');