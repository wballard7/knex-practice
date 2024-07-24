/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Danny', pet_type_id: 3},
    {id: 2, name: 'Copper', pet_type_id: 3},
    {id: 3, name: 'Tobias', pet_type_id: 1}
  ]);
};
