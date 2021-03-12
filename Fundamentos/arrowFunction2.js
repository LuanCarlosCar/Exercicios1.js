function pessoa(){
    this.idade= 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
        
    }, 100);       //com setInterval utilizando o arrow, nao vou ter problema com a questao de como vai ser chamado meu 'this'
}

new pessoa