const aluno= [
    {aluno:'luan', nota: 7.8, bolsista: false},
    {aluno:'raun', nota: 9.0, bolsista: true},
    {aluno:'vitor', nota: 8.0, bolsista: false},
    {aluno:'pedro', nota: 5.5, bolsista: true}
]
// todos os alunos sao bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(aluno.map(a=> a.bolsista).reduce(todosBolsistas))

// alguem deles sao bolsitas?
const alguem= ( resultado, bolsista) => resultado || bolsista
console.log(aluno.map(a=> a.bolsista).reduce(alguem))