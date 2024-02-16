const uuid = require('uuid');
const bcrypt = require('bcrypt');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      uuid: uuid.v4(), 
      firstname: 'dev',
      lastname: 'dev',
      email: 'dev@noreplay.com',
      phone: '123456789',
      password: bcrypt.hashSync('password', 12)
    },
  ]);
};
