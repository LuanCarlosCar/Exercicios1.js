class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome //criei a class avo, que tera o atributo 'sobrenome'
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissão= 'Developer'){ // crei a classe pai que extende a classe avo, ou seja ele recebera sobrenome,e tera como novo atributo profissão
        super(sobrenome) //'super' ira acessar a super classe(avo), nesse momento estou apentando para o meu atributo sobrenome
        this.profissão=profissão

    }
}


class filho extends Pai{
    constructor(){ //criei a classe filho que extende pai
        super('Rodrigues') // estou acessando a super classe(avo) e nomenado o atributo sobrenome para ('rodrigues')
    }

}
const t = new filho //estou criando um novo filho, e colocando ele no eslote de memoria nomeado como 't'
console.log(t) //estou printando 't' que esta apontando para meu novo filho