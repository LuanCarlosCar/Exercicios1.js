//par nome/valor
const saudação= 'Opa' // contexto léxico 1

function exec(){
    const saudação = 'falaa' // contexto lexico 2
    return saudação
}
// objetos são grupos alinhados de pares nome/valor
const Cliente={
    nome: 'Pedro',
    idade:20,
    peso: 72,
    endereço:{
        lagradouro: 'ruan sei la',
        numero: 123
    }
}
console.log(saudação)
console.log(exec())
console.log(Cliente)