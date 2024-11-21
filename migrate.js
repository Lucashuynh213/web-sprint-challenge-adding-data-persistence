const knex = require('knex');
const configurations = require('./knexfile.js');
const environment = process.env.NODE_ENV || 'development';
const db = knex(configurations[environment]);

db.migrate.latest()
  .then(() => {
    console.log('Migrations completed!');
  })
  .catch((err) => {
    console.error('Error running migrations:', err);
  })
  .finally(() => {
    db.destroy(); // Always close the connection after running the migrations
  });