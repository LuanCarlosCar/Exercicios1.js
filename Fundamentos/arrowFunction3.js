let comparamComThis = function(param){
    console.log(this === param)
}
comparamComThis(global)

const obj={}

comparamComThis = comparamComThis.bind(obj)
comparamComThis(global)
comparamComThis(obj)


// exemplo com arrow
let comparamComThisArrow = param => console.log(this === param) // com arrow ele aponta para o modulo onde a função foi definidada
comparamComThisArrow(global)
comparamComThisArrow(module.exports)

comparamComThisArrow = comparamComThisArrow.bind(obj) // o arrow nao permite a mudança desses atributos, mesmo pedindo para apontar para objeto, arrow ira bloquear, e continuara apontando para o modulo
comparamComThisArrow(obj)
comparamComThisArrow(module.exports)