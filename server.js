const express = require('express'); //importando o express
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o app
const app = express();
app.use(express.json()); //permite que envio dados da minha aplicacao em formato de json
app.use(cors()); //dominio de acesso, conf de seguranca

//Iniciando o DB --> nodeapi e o nome do banco de dados
mongoose.connect("mongodb://localhost:27017/nodeapi",
	{  useUnifiedTopology: true }
);

requireDir('./src/models');

//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001); //ouvir a porta 3001.

