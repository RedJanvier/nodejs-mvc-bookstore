const { db, usersTable } = require('../config/database');

const get = (req, res, next) => { 
    setTimeout(() => {
        res.render('dashboard', { users: res.locals.users });
    } , 100);
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