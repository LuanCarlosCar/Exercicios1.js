// array e indexada apartir do 0
// array e um objeto
console.log(typeof Array, typeof new Array, typeof [])

let lulu = new Array('lulu','ruan', 'vitexas')
console.log(lulu)

lulu2 = ['vapo', 'salve', 'hello']
console.log(lulu2[0])
console.log(lulu2[1])
console.log(lulu2[2])

lulu2[3] = 'opa' // adicionando um novo idex ou remodelando o valor
lulu2.push('rose')
console.log(lulu2.length)

lulu2[9]= 'sucumba'
console.log(lulu2.length)
console.log(lulu[9] === undefined)
console.log(lulu2)

lulu2.sort() // essa tang reordena o array, agora os itens vazinhos vao para o final do array
console.log(lulu2)

delete lulu2[1]
console.log(lulu2[1])
console.log(lulu2[0])

aprovados = ['Bia', 'Carlos', 'joao', 'albert']
aprovados.splice(1,2 , 'vagalume', 'carro') // ele ira começar a excluir um atributo apartir (1) e vai excluir dos eslotes em seguida(ele mesmo e mais um a sua direita), e ira adicionar esses dois valores nas colunas
console.log(aprovados)