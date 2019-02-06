const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let x in nums){
    if(x == 5) {
        break;
    }

    console.log(`${x} = ${nums[x]}`);
}

//continue faz o loop parar a proxima linha de codigo (dependendo da condição) e pula para a proxima.
for(let y in nums){
    if(y == 5) continue
    console.log(`${y} = ${nums[y]}`);
}

//rotulo do for externo.
//o rotulo serve para casos de cascatas de looping, quando é necessario dar break no laço mais externo.
//não usar
externo:for(a in nums){
    for(b in nums){

        if(a == 2 && b == 3) break externo;
        console.log(`Par = ${a}, ${b}`);
    }
}