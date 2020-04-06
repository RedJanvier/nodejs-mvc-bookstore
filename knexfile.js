// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migration'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
