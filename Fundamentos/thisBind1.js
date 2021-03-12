const pessoa={
    saudação: 'Bom dia',
    idade:15,
    falar(){
     console.log(this.saudação)
    }

}
pessoa.falar()

const falar= pessoa.falar
falar()// conflito entre paradigmas: funcinal e orintada a objetos

const falarDePessoa = pessoa.falar.bind(pessoa) // estou amarrando meu objeto 'pessoa' no 'falarDePessoa', assim n precisarei usar o this(ele estaria de uma forma oculta)
falarDePessoa()