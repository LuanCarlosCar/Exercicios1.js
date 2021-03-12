
              //vou passar um objeto para a função
function rand({ min= 0, max=1000}){
    const valor= Math.random() * (max - min) + min  // vai multiplicar random pelo o resuldado de (max - min) mais 'min'
    return Math.floor(valor) //floor ira tirar as casas decimais

}
console.log(rand({min:10, max:20}))



const obj = {max:50, min:40}
console.log(rand(obj))
console.log(rand({min:10}))