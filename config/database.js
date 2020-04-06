
const db = require('knex')(require('../knexfile')[process.env.NODE_ENV]);

module.exports = {
    usersTable: 'users',
    booksTable: 'books',
    db
}