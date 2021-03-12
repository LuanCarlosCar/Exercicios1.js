const soma = function(x,y){
    return x +y
}
const imprimirResultado = function (a,b, operacao = soma) {
    console.log(operacao(a,b))

}
imprimirResultado (3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function(x,y){
    return x-y
}) //mudando a forma de operação remodelando a funçao anonima
imprimirResultado(3,4, (x,y)=> x*y) //exemplo com arrow function



const pessoa = {
    falar: function(){
        console.log('opa')
    }
}
pessoa.falar()