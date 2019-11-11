const db = require('../config/dbConfig').db;
const usersTable = require('../config/dbConfig').tableName.users;

const get = (req, res, next) => { 
    res.render('dashboard', { users: res.locals.users });
};

const addUsers = (req, res, next) => {
    const { userId } = req.session;
    if (userId) {
        db(usersTable)
            .select('email', 'age', 'gender', 'name', 'id')
            .then(users => res.locals.users = users)
            .catch(console.log);
        }
    next();
};

module.exports = {
    get,
    addUsers
};