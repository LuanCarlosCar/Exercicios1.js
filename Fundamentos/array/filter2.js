Array.prototype.filter2=function(callback){
    const newArray = []
    for( i=0; i<this.length;i++){
    if (callback(this[i],i,this)){
        newArray.push(this[i])
    }
} 
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


const resulte =carrinho.filter2(paraObjeto).filter2(apenasPreco)
console.log(resulte)