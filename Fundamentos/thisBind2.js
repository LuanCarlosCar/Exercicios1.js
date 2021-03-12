function pessoa(){
    this.idade=10

    const self=this
    setInterval(function(){//setInterval e responsavel por chamar a funçao sozinha no tempo que eu tiver determinado apos ","
        self.idade++
        console.log(self.idade)
    }/*.bing(this)*/,100)
}
new pessoa