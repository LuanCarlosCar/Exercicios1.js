const quaseArray = {0: 'lulu', 1:'zangao', 3:'zangado'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'tosString',{
    value: function () { return Object.value(this)
        
    },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['rafael', 'lulu', 'ana']
console.log(quaseArray.tosString(), meuArray)