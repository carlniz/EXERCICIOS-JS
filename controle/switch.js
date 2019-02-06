const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
       // como não há nenhum comando abaixo do case 10, ele considerá que para o 10 e as demais linhas sem comandos,
       // é a proxima linha com um comando definido
       // não é necessário definir bloco no switch
       // é necessário usar o break caso queira que só execute um caso apenas.
       case 10:
       case 9:
           console.log("Quadro de Honra");
           break;
       // os cases podem ser colocado tanto em linhas diferentes quanto na mesma linha    
       case 8: case 7:
           console.log("Aprovado");
           break; 
       case 6: case 5: case 4:
           console.log("Recuperação");
           break;
       case 3: case 2: case 1: case 0:
           console.log("Reprovado");
           break;
           //o default pode ser colocado em outra posição, apenas deve ser colocado um break para sair do comando.
       default:
           console.log("Nota Inválida");           
    }  
}

imprimirResultado(10);
//imprimirResultado(8.9);
//imprimirResultado(5.9);
//imprimirResultado(1.12);
// imprimirResultado(-5);