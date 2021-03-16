const aluno= [
    {aluno:'luan', nota: 7.8, bolsista: false},
    {aluno:'raun', nota: 9.0, bolsista: true},
    {aluno:'vitor', nota: 8.0, bolsista: false},
    {aluno:'pedro', nota: 5.5, bolsista: true}
]

console.log(aluno.map( a=> a.nota))
const resultado= aluno.map( a=>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)