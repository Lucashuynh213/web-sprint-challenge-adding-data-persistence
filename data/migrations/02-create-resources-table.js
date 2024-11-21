exports.up = function(knex) {
    return knex.schema.createTable('resources', table => {
      table.increments('resource_id'); // Primary key
      table.string('resource_name').unique().notNullable();
      table.string('resource_description');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
  };
  