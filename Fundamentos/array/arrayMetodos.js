const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()// retira o ultimo elemento do array
console.log(pilotos)

pilotos.push('lulu') //ele adiciona um novo elemento no array
console.log(pilotos)

pilotos.shift() //ele remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('hamilton') //adiciona um novo elemento no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos 

//adicionar
pilotos.splice(2,0, 'Bottas', 'salve')

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)