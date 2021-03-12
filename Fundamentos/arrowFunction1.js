let dobro = function(a){
    return 2*a
}

dobro = (a) => {
    return 2*a
}
dobro = a => 2*a // return esta implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'olá'
}
const t= ola()
console.log(ola())


ola = () => 'olá'
ola = _ => 'olá' // possui um parametro, mas pode ser ignorado caso nao aja um parametro definido 
console.log(ola())
