//  CORE SETTINGS
exports.tableName = {
    users: 'borrowers',
    books: 'books'
}

exports.db = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
})