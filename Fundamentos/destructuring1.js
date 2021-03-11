// novo recurso ES2015
//A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.
// exemplos de destruring em objetos
var pessoa = {
    nome: 'ana',
    idade:15,
    endereço:{
        logradouro: 'rua abc',
        numero:1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const{nome:n, idade:i} = pessoa
console.log(n,i)

const {endereço:{ logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)