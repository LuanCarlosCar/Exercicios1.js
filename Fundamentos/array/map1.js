const numero= [1,2,3,4,5]

// for com propósito 
let resultado = numero.map(function (e) {
    return e *2
    
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //estou convertendo o valor para real, com duas casas decimais e subistituindo ponto por virgula

resultado2 = numero.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado2)

const ttt =numero.map(e=> e +10) 
console.log(ttt)
