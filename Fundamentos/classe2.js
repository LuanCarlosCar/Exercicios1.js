class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissão= 'Developer'){
        super(sobrenome)
        this.profissão=profissão

    }
}


class filho extends Pai{
    constructor(){
        super('Rodrigues')
    }

}
const t = new filho
console.log(t)