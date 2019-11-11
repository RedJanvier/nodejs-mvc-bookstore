const db = require('../config/dbConfig').db;
const usersTable = require('../config/dbConfig').tableName.users;

exports.handle_dashboard_get = (req, res, next) => {
    setTimeout(() => {
        res.render('dashboard', { users: res.locals.users }) 
    }, 1200);
};

exports.addUsers = (req, res, next) => {
    const { userId } = req.session;
    if (userId) {
        db(usersTable).select('email', 'age', 'gender', 'name', 'id').returning('*')
            .then(users => {
                res.locals.users = users;
            })
            .catch(console.log);
        }
    next();
};