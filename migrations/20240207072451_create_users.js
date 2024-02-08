/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.dropTableIfExists('users');
    await knex.schema.createTable('users', table => {
        table.increments('id')
        table.uuid('uuid').index()
        table.string('firstname').notNullable()
        table.string('lastname').notNullable()
        table.string('email').notNullable().unique()
        table.string('password').notNullable()
        table.enum('status', ['active','deactivate']).defaultTo('active')
        table.dateTime('created_at').defaultTo(knex.fn.now())
        table.dateTime('updated_at')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('users');
};
