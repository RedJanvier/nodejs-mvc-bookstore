import { config } from 'dotenv';
import session from 'express-session';
import express, { json, urlencoded } from 'express';

config();
const app = express();
const PORT = process.env.PORT || 4000;

// SESSION & FLASH_MSG
app.use(
  session({
    name: 'sid',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 720000,
      sameSite: true,
      secure: false,
    },
  })
);

// EJS
app.use(require('express-ejs-layouts'));

app.set('view engine', 'ejs');

// BODY PARSER
app.use(json());
app.use(urlencoded({ extended: false }));

// ROUTES
app.use(express.static('./public'));
app.use('/', require('./routes/index').default);

app.listen(PORT, console.log(`Server started at http://localhost:${PORT}/`));

export default app;
