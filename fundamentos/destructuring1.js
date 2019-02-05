// novo recurso do ES2015

//notação literal de objeto
const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco:{
        logradouro: "Rua ABC",
        numero: 1000
    }

}

//tira os atributos do objeto, podendo ser utilizado pelo mesmo nome do atributo
const { nome, idade} = pessoa;
console.log(nome. idade);
//da para modificar o nome do atributo desta forma:
const {nome : n, idade: i} = pessoa; 
console.log(n, i);
//da para fazer com atributos que não foram previamente setados e setar valores padrões nele ja que retornará undefined
const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);
//da para retirar atributos(criar) de um objeto dentro de outro, mas apenas os atributos, não o objeto em si
const {endereco: { logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);
//não da para buscar os atributos de um objeto que não foi setado previamente dentro do objeto 
const {conta: {ag, num} } = pessoa;

