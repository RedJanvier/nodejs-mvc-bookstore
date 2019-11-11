const bcrypt = require('bcrypt');
const validate = require('../utils/validate');
const { db, usersTable } = require('../config/dbConfig');
// REGISTER HANDLERS
exports.render_register = (req, res, next) => res.render('register');
exports.register = (req, res, next) => {
    const { firstname, lastname, age, gender, email, password } = req.body;
    const fullname = `${firstname} ${lastname}`;
    const errors = validate.register(req.body);

    if (errors.length){
        res.render('register', { errors, ...req.body });
    } else {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt).then( (hash) => {
                db(usersTable).insert({
                    name: fullname,
                    password: hash, 
                    email, 
                    age, 
                    gender
                })
                .then(() => {
                    res.render('login', { success: [{ msg: 'You are now registered and can log in' }] });
                })
                .catch(err => {
                    console.log(err);
                    res.render('register', { errors: [{ msg: "Unable to create user!" }], ...req.body })
                });
            });
        });
    }
};

// LOGIN HANDLERS
exports.render_login = (req, res, next) => res.render('Login');
exports.login = (req, res, next) => {
    const errors = validate.login(req.body);
    if(errors.length){
        res.render('login', { errors, ...req.body });
    } else {
        const { email, password } = req.body;
        db(usersTable).select('*')
            .where({ email })
            .then(user => {
                if(user.length < 1) {
                    errors.push({ msg: 'Wrong Email or Password!' });
                    return res.render('login', { errors, ...req.body });
                }
                if (bcrypt.compareSync(password, user[0].password)){
                    res.locals.user = user[0];
                    req.session.userId = user[0].id;
                    return res.redirect('/dashboard');
                } else {
                    errors.push({ msg: 'Wrong Email or Password!' });
                    res.render('login', { errors, ...req.body });
                }
            })
            .catch(err => {
                console.log(err);
                res.render('login', { errors: [{ msg: 'Wrong Email or Password!'}], ...req.body });
            });
    }
};
// LOGOUT
exports.logout= (req, res, next) => {
    req.session.destroy(err => {
        if(err){
            return res.redirect('/dashboard');
        }
        res.clearCookie('sid');
        return res.redirect('/');
    });
};
