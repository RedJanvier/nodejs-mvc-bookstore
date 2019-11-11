
const db = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
})

module.exports = {
    usersTable: 'borrowers',
    booksTable: 'books',
    db
}