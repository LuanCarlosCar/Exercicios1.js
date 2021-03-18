const carrinho =[
    '{"nome" : "Borracha", "preco":3,60 }',
    '{"nome" : "Borracha", "preco":5,60 }',
    '{"nome" : "Borracha", "preco":6,60 }',
    '{"nome" : "Borracha", "preco":5,60 }',
    '{"nome" : "Borracha", "preco":6,60 }',

]


const paraObjeto = json => JSON.parse(json) // ira converte meus json em string
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)