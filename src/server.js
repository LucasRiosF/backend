import express from 'express'; //serve para escutar as requisicoes
import {config} from 'dotenv'; //serve para ler

config(); //le o arquivo .env

const port = process.env.PORT || 5000; //define a porta q sera usada

const app = express(); //cria o servidor
app.use(express.json()); //permite que o servidor entenda aquisiçoes em JSON

app.get("/", (req, res) => {
    //Rota inicial
    res.status(200).json({ message: "Hello, World!"})
});

app.listen(port, () => {
    //inicia o servidor
    console.log(`server started on http://localhost:${port}`);
});