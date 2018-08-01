
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students',(table)=>{
    table.increments('studentid'),
    table.string('firstname'),
    table.string('lastname'),
    table.string('prevoccupation'),
    table.string('hometown')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students');
};
