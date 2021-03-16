const escola =[{nome:'turma 01', alunos:[{nome:'Gustavo', nota:2},{ nome:'ana', nota:7}]},{nome:'Turma2',alunos:[{nome:'vanessa', nota:4},{nome:'pedro', nota:4}]} ]
const getnotadoaluno = escola => escola.nota
const getnotadaturma = turma => turma.alunos.map(getnotadoaluno)
const notas1 = escola.map(getnotadaturma)
console.log(notas1)