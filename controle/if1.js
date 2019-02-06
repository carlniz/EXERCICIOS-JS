function soBoaNoticia(nota){

    if(nota >= 7){
        return "Você passou!";
    } else{
        return "Falhou";
    }
}

console.log(soBoaNoticia());

function seForVerdadeEuFalo(valor){
    //como dito na aula de bolean, um if converterá qualquer parametro passado na condição para bolean
    if(valor) {
        console.log("É verdade ..." +  valor);

    } else {
        console.log("Mentira");
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});