//A variavel é içada para cima do console.log, mesmo ela tendo sido criada após a declaração do console.log
//isso apenas ocorre com o var

console.log(a);
var a = 2;
console.log(a);


//isso ocorre em funções também
function teste(){
    console.log(c);
    var c = 2;
    console.log(c);
}

console.log(b);
let b = 2;
console.log(b); 