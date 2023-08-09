//importando um módulo do express:
const express = require('express');

//cria uma instancia executável do express:
const app = express();
//rota de get(RAIZ)
app.get('/',(req, res)=>{
    res.send('EXEMPLO DE ROTA DE GET');
});
//rota de get clientes(RAIZ)
app.get('/clientes',(req, res)=>{
    res.send('ROTA GET DE CLIENTES!!!');
});

//rota de cadastro (POST)
app.post('/cadastrar', (req, res)=>{
    res.send('ROTA POST DE CADASTRO');
});

//rota de alteração (PUT)
app.put('/alterar', (req, res)=>{
    res.send('ROTA PUT DE ALTERAÇÃO');
});

//rota de excluir (DELETE)
app.delete('/excluir', (req, res)=>{
    res.send('ROTA DE EXCLUSÃO');
});

//servidor requisição/resposta
app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO!')
});