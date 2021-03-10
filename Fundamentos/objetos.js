console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())








function lulu(a,b){
    var soma = a + b ;
    return soma;
}

var c= lulu(5,5);
console.log(c);