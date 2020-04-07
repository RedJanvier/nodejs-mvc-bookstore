import { genSalt, hash as _hash, compareSync } from 'bcrypt';
import validate from '../utils/validate';
import { db, usersTable } from '../config/database';
// REGISTER HANDLERS
export const renderRegister = (req, res) => res.render('register');
export const register = (req, res) => {
  const { firstname, lastname, age, gender, email, password } = req.body;
  const fullname = `${firstname} ${lastname}`;
  const errors = validate.register(req.body);

  if (errors.length) {
    res.render('register', { errors, ...req.body });
  } else {
    genSalt(10, (err, salt) => {
      _hash(password, salt).then((hash) => {
        db(usersTable)
          .insert({
            name: fullname,
            password: hash,
            email,
            age,
            gender,
          })
          .then(() => {
            res.render('login', {
              success: [{ msg: 'You are now registered and can log in' }],
            });
          })
          .catch((error) => {
            console.log(error);
            res.render('register', {
              errors: [{ msg: 'Unable to create user!' }],
              ...req.body,
            });
          });
      });
    });
  }
};

// LOGIN HANDLERS
export const renderLogin = (req, res) => res.render('Login');
export const login = (req, res) => {
  const errors = validate.login(req.body);
  if (errors.length) {
    res.render('login', { errors, ...req.body });
  } else {
    const { email, password } = req.body;
    db(usersTable)
      .select('*')
      .where({ email })
      .then((user) => {
        if (user.length < 1) {
          errors.push({ msg: 'Wrong Email or Password!' });
          return res.render('login', { errors, ...req.body });
        }
        if (compareSync(password, user[0].password)) {
          const [usr] = user;
          res.locals.user = usr;
          // req.session.userId = user[0].id;
          return res.redirect('/dashboard');
        }
        errors.push({ msg: 'Wrong Email or Password!' });
        return res.render('login', { errors, ...req.body });
      })
      .catch((err) => {
        console.log(err);
        res.render('login', {
          errors: [{ msg: 'Wrong Email or Password!' }],
          ...req.body,
        });
      });
  }
};
// LOGOUT
export const logout = (req, res) => res.redirect('/');
// req.session.destroy((err) => {
//   if (err) {
//     return res.redirect('/dashboard');
//   }
//   res.clearCookie('sid');
//   return res.redirect('/');
// });
