{
    {
        {
            { 
                //o var é visivel em qualquer bloco(escopo global), independente de onde ele foi criado, 
                //desde que não seja dentro de uma função ou classe/objeto.
                var sera = 'Será???';
            }
        }
    }
}

console.log(sera);

function teste(){
    var local = 123;
    console.log(local);
}

teste()

//console.log(local);

/* Exemplo para browser

//quando você cria uma variavel dentro do browser que não seja dentro de uma função,
// ela vira um atributo do objeto window, podendo ser chamado pelo comando window.'nome da variavel'. 
//dentro da IDE, global seria o window.
//não é aconselhado utilizar variaveis globais, pois caso ela seja sobrescrita, 
//acarretaria um problema sério no seu sistema.
//
*/