Number.prototype.entre = function(minimo, maximo){
    return this >= minimo && this <= maximo
}
const imprimeResultado = function (nota){
    if (nota.entre(9, 10)){
        console.log("quadro de honra")
    }else if(nota.entre(7, 8)){
        console.log("excelente")
    }else if(nota.entre(6, 7)){
        console.log("aprovado")
    }else if(nota.entre(4, 5)){
        console.log("recuperaçao")
    }else if(nota.entre(0, 4)){
        console.log("reprovado")
    }else {
        console.log('nota inválida')
    }
 
}
 
imprimeResultado(2)
imprimeResultado(9.55)
//imprimeResultado("teste")