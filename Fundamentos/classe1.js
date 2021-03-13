class Lançamento{
    constructor(name= 'generico', valor=0){
        this.name=name
        this.valor=valor
    }
} 

class CicloFinaceiro{

    constructor(mes, ano){
        this.mes=mes
        this.ano=ano
        this.lancamentos =[] 
    }
    addLancamentos(...lancamentos){ 
        lancamentos.forEach(l=> this.lancamentos.push(l))
        
    }
    sumario(){
        let valorConsolidado= 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor

        })
        return valorConsolidado
    }
}
const salario = new Lançamento ('salario', 45000)
const contadeluz = new Lançamento('luz', -220)

const contas = new CicloFinaceiro(6,2018)
contas.addLancamentos(salario, contadeluz)
console.log(contas.sumario())

