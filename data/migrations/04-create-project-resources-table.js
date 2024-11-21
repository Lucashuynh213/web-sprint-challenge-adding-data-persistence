exports.up = function(knex) {
    return knex.schema.createTable('project_resources', table => {
      table.increments('id'); // Primary key
      table.integer('project_id').unsigned().notNullable()
        .references('project_id').inTable('projects')
        .onDelete('CASCADE'); // Foreign key
      table.integer('resource_id').unsigned().notNullable()
        .references('resource_id').inTable('resources')
        .onDelete('CASCADE'); // Foreign key
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources');
  };