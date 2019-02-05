const funcs = [];

//por var não respeitar o escopo da função, ele sempre ira imprimir 10 no console,
// independente do valor passado na hora da atribuição do valor i
for(var i = 0; i < 10; i++){
   funcs.push(function(){
     console.log(i);
      
   })
 

}

funcs[2]();
funcs[8]();