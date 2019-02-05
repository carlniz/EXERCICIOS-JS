 function compras(trabalho1, trabalho2){
 	const comprarSorvete = trabalho1 || trabalho2;
 	const comprarTv50 = trabalho1 && trabalho2;
 	//const comprarTv32 = !!(trabalho1 ^ trabalho2);// bitwise xor
 	const comprarTv32 = trabalho1 != trabalho2;
 	manterSaudavel = !comprarSorvete;

 //da para criar um objeto com o atributo do mesmo nome do valor dessa maneira abaixo.
 	return {comprarSorvete, comprarTv32, comprarTv50, manterSaudavel};

 }

 console.log(compras(true, true));
 console.log(compras(true, false));
 console.log(compras(false, false));
 console.log(compras(false, true));