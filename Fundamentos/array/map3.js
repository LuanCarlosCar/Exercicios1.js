Array.prototype.map2= function(callback){
    const newArray=[]
    for ( let i = 0; i < this.length; i++){
        newArray.push(callback(this[i],i,this))

    }
    return newArray 

}


const carrinho = [
    `{"nome": "Borracha", "preco": 8.45}`,
    `{"nome": "credo", "preco": 10.45}`,
    `{"nome": "vapo", "preco": 3.45}`,
    `{"nome": "tinta", "preco": 3.45}`,
    `{"nome": "Borracheea", "preco": 3.45}`
]



const paraObjeto= json => JSON.parse(json)
const apenasPreco= produto => produto.preco


const resulte =carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resulte)