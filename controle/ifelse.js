const imprimirResultado = function(nota) {

    if(nota >= 7) {
        console.log("Aprovado!");
    } else {
        console.log("Reprovado!");
    }

    

}

imprimirResultado(10);
imprimirResultado(2);


//Isso funcionaria normalmente pela linguagem ser fracamente tipada, 
//sempre verificar os tipos de dados que estão sendo manipulados.
imprimirResultado("Epa!");