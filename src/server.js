import express from 'express'; //serve para escutar as requisicoes
import {config} from 'dotenv'; //serve para ler

config(); //le o arquivo .env

const port = process.env.PORT || 5000; //define a porta q sera usada

const app = express(); //cria o servidor
app.use(express.json()); //permite que o servidor entenda aquisiçoes em JSON

app.get("/", (req, res) => {
    const nome = req.query.nome;
    const qualquerNome = req.query.anime;
    const page = req.query.page;
    const limt = req.query.limt
    //Rota inicial
    res.status(200).json({ nome: nome, anime: qualquerNome, pagina: page, limite: limt})
});

app.get("/:nome/:sobrenome/:idade", (req, res) => {
    const nome = req.params.nome;
    const sobrenome = req.params.sobrenome
    const idade = req.params.idade
    //Rota inicial
    res.status(200).json({ mensagem: `Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos `})
});

app.post("/", (req, res) => {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome
    const idade = req.body.idade
    res.status(200).json({ 
        nomeUsuario: nome,
        sobrenoUsuario: sobrenome,
        idadeUsuario: idade  })
});


app.delete("/", (req, res) => {
    res.status(200).json({ message: "Hello, Delete!"})
});

app.put("/", (req, res) => {
    res.status(200).json({ message: "Hello, Put!"})
});

app.listen(port, () => {
    //inicia o servidor
    console.log(`server started on http://localhost:${port}`);
});