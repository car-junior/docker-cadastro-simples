const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose

const bodyParser = require('body-parser');
const cors = require('cors');

//CONFIGURAÇÕES DO BD

/* VINCULANDO A PROMISE AO MONGOOSE */
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb');

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

// CREATE
const Client = restful.model('Client', {
    name: { type: String, required: true }
})

// Ends points da API
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true})

// Rotas
Client.register(server, '/clients')

/* STARTANDO SERVIDOR NA PORTA 3000 */
server.listen(3000);

