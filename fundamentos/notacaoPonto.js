//Math.ceil() arredonda o numero para cima
//Math.floor() arrendonda para baixo
console.log(Math.ceil(6.1));

const obj1 = {};
//cria o atributo no objeto dinamicamente
obj1.nome = "Bola";
//essa forma também é valida
//obj1.['nome'] = "Bola";

console.log(obj1.nome);

//Isso seria uma especie de Classe do Java, a partir do this você consegue criar atributos e outras funções(metodos).
function Obj(nome){
    this.nome = nome; 
    this.exec = function () {
        console.log('Exec ....');
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();
