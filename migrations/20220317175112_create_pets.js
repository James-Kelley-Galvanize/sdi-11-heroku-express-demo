/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable(`pets`, (table) => {
    table.increments(`id`);
    table.string(`name`);
    table.string(`species`);
    table.string(`breed`);
    table.string(`coat_color`);
    table.string(`favorite_treat`);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(`pets`);
};
