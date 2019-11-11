// DATABASE 
const db = require('../config/dbConfig').db;
const usersTable = require('../config/dbConfig').tableName.users;

const bcrypt = require('bcrypt');
  
// EXTRAS
const capitalize = (str) => str.trim().charAt(0).toUpperCase() + str.trim().slice(1); 
const validateRegister = ({ firstname, lastname, age, gender, email, password }) => {
    let errors = [];
    // const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;

    if (!firstname || !lastname || !age || !gender || !email || !password){
        errors.push({ msg: "Fill in all the fields please!" });
    }

    if (password.length < 8){
        errors.push({ msg: "Password is too short." });
    }

    if (age < 6){
        errors.push({ msg: "Enter a valid age." });
    }

    // if (emailRegex.test(email) !== true){
    //     errors.push({ msg: "Enter a valid Email please!" });
    // }

    return errors;
}
const validateLogin = ({ email, password }) => {
    let errors = [];

    if (!email || !password){
        errors.push({ msg: "Fill in all the fields please!" });
    }

    if (password.length < 8){
        errors.push({ msg: "Password is too short." });
    }
    
    return errors;
}

// REGISTER HANDLERS
exports.handle_register_get = (req, res, next) => res.render('register');
exports.handle_register_post = (req, res, next) => {
    const { firstname, lastname, age, gender, email, password } = req.body;
    const fullname = `${capitalize(firstname)} ${capitalize(lastname)}`;
    const errors = validateRegister(req.body);

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
                .returning('*')
                .then(user => {
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
exports.handle_login_get = (req, res, next) => res.render('Login');
exports.handle_login_post = (req, res, next) => {
    const { email, password } = req.body;
    const errors = validateLogin(req.body);
    if(errors.length){
        res.render('login', { errors, ...req.body });
    } else {
        db(usersTable).select('*')
            .where('email', '=', email)
            .returning('*')
            .then(user => {
                if(user.length < 1) {
                    res.render('login', { errors: [{ msg: 'Wrong Email or Password!'}], ...req.body });
                }
                if(bcrypt.compareSync(password, user[0].password)){
                    res.locals.user = user[0];
                    req.session.userId = user[0].id;
                    res.redirect('/dashboard');
                } else {
                    res.render('login', { errors: [{ msg: 'Wrong Email or Password!'}], ...req.body });
                }
            })
            .catch(err => {
                console.log(err);
                res.render('login', { errors: [{ msg: 'Wrong Email or Password!'}], ...req.body });
            });
    }
};
// LOGOUT
exports.handle_logout_post = (req, res, next) => {
    req.session.destroy(err => {
        if(err){
            return res.redirect('/dashboard');
        }
        res.clearCookie('sid');
        return res.redirect('/');
    });
};
