const express = require('express');
const app = express();
const PORT = 8080;

// Rota simples que o frontend tentará acessar
app.get('/api/mensagem', (req, res) => {
    // A API nunca chega aqui se o CORS bloquear a requisição antes.
    res.json({ data: "Mensagem secreta da API em 8080!" });
});

// Sem middleware CORS configurado!

app.listen(PORT, () => {
    console.log(`API Backend rodando em: http://localhost:${PORT}`);
});


/*
const express = require('express');
const cors = require('cors'); // Importa corretamente o CORS
const app = express();
const PORT = 8080;

// Configuração do CORS: Permite APENAS a origem do frontend (3000)
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET',
    optionsSuccessStatus: 200 // Compatibilidade com navegadores antigos
};

// Aplica o middleware CORS
app.use(cors(corsOptions));

// Rota simples que o frontend tentará acessar
app.get('/api/mensagem', (req, res) => {
    res.json({ data: "Mensagem secreta da API em 8080 - COM PERMISSÃO CORS!" });
});

// Inicializando o servidor
app.listen(PORT, () => {
    console.log(`API Backend rodando em: http://localhost:${PORT}`);
    console.log('AGORA PERMITINDO acesso de: http://localhost:3000');
});
*/