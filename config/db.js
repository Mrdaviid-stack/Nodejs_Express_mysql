const knex = require('knex');
const knexFile = require('../knexfile');

const DB = knex(knexFile['development']);

module.exports = DB;