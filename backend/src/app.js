const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/* Rotas / Recurso */

/*Métodos HTTP
    GET : Buscar/Listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end

*/

/* Tipo de parâmetros
    Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
    const params = request.query

    Route Params: Parâmetros utilizados para identificar recursos
    const params = request.params;

    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
    const body = request.body

*/

/*
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc
*/

/*
    Driver : Select * From users
    Query Builder: table('users').select('*').where()
*/

module.exports = app;