const knex = require('knex');
const { Model } = require('objection');
const knexFile = require('../knexfile');

const DB = knex(knexFile['development']);

module.exports = Model.knex(DB);