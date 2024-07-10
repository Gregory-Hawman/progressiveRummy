/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    
    .createTable('games', (table) => {
        table.increments('id');
        table.string('game_name', 128).notNullable();
        table.integer('player_count').notNullable();
        table.integer('winner');
    })

    .createTable('players', (table) => {
        table.increments('id');
        table.string('player_name', 128).notNullable();

    })

    .createTable('game_players', (table) => {
        table.increments('id');
        table.integer('game_id').unsigned().notNullable().references('id').inTable('games').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('player_id').unsigned().notNullable().references('id').inTable('players').onUpdate('CASCADE').onDelete('CASCADE');
    })

    .createTable('cards', (table) => {
        table.increments('id');
        table.string('card_name', 128).notNullable();
        table.string('card_suit', 128).notNullable();
        table.integer('card_value').notNullable();
        table.string('location', 128).notNullable(); // draw_pile, discard_pile, player_hand
    })

    .createTable('player_cards', (table) => {
        table.increments('id');
        table.integer('game_id').unsigned().notNullable().references('id').inTable('games').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('player_id').unsigned().notNullable().references('id').inTable('players').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('hand', 128).notNullable();
    })

    .createTable('rounds', (table) => {
        table.increments('id');
        table.integer('game_id').unsigned().notNullable().references('id').inTable('games').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('round_number').notNullable();
        table.integer('turn_number').notNullable();
        table.integer('first_out')
        table.integer('winner');
    })

    .createTable('moves', (table) => {
        table.increments('id');
        table.integer('game_id').unsigned().notNullable().references('id').inTable('games').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('round_id').unsigned().notNullable().references('id').inTable('rounds').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('player_id').unsigned().notNullable().references('id').inTable('players').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('move_details', 128).notNullable();
        table.timestamp('move_time').defaultTo(knex.fn.now());
    })

    .createTable('scores', (table) => {
        table.increments('id');
        table.integer('game_id').unsigned().notNullable().references('id').inTable('games').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('player_id').unsigned().notNullable().references('id').inTable('players').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('round_id').unsigned().notNullable().references('id').inTable('rounds').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('score').defaultTo(0);
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('scores')
    .dropTableIfExists('moves')
    .dropTableIfExists('rounds')
    .dropTableIfExists('player_cards')
    .dropTableIfExists('cards')
    .dropTableIfExists('game_players')
    .dropTableIfExists('players')
    .dropTableIfExists('games')
};
