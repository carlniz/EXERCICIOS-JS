var numero = 1;


{
    //quando é criado uma variavel let com o mesmo nome de uma variavel var, só que em blocos diferentes
    // funciona normalmente por estarem em escopos diferentes 
    //caso for usado o mesmo nome em duas variaveis let, o comando do bloco menor sempre dará preferencia
    //para a variavel menos abrangente
    let numero = 2;
    console.log("dentro =", numero);
}

console.log("fora =", numero);