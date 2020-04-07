// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migration',
    },
    seeds: {
      directory: './seeds',
    },
  },
};
