# LOGIN SYSTEM BY redjanvier

[![DeepScan grade](https://deepscan.io/api/teams/6051/projects/7919/branches/88156/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=6051&pid=7919&bid=88156)
[![Maintainability](https://api.codeclimate.com/v1/badges/337605d4ffd06ad9890b/maintainability)](https://codeclimate.com/github/RedJanvier/nodejs-mvc-bookstore/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/RedJanvier/nodejs-mvc-bookstore/badge.svg?branch=develop)](https://coveralls.io/github/RedJanvier/nodejs-mvc-bookstore?branch=develop)

## PREREQUISITES

- NodeJs installed. (find it)[https://nodejs.org/en/]
- Text Editor of your choice. (find it)[https://code.visualstudio.com/]
- PostgreSQL installed. (find it)[https://www.enterprisedb.com/downloads/postgres-postgresql-downloads]

## Features to implement

- ✔ Anyone should be able to register
- ✔ Anyone should be able to see all books on the page
- ✔ Anyone should be able to get all details of any User
- ✔ User(any) should be able to login into his/her account
- ✔ User(logged in) should be able to see all users on the app
- ✔ User(logged in) should be able to logout of his/her account
- ❌ User(logged in) should be able to create/publish a book in the store
- ❌ User(logged in) should be able to edit/re-publish a book to the store
- ❌ User(logged in) should be able to delete/unpublish a book from the store

## Routes

#### Welcome screen

```
[GET] /

:body: none

:result: Welcome screen with login and register links
```

#### User login

```
[GET] /users/login

:body: none

:result: Login screen with a register link

----------------------------------------------

[POST] /users/login

:body: {
  email "STRING",
  password "STRING"
}

:result: Dashboard screen with a logout link & users list
```

#### User register

```
[GET] /users/register

:body: none

:result: Register screen with a login link

[POST] /users/register

:body: {
    name "STRING",
    password "STRING",
    email "STRING",
    age "INTEGER",
    gender "STRING",
}

:result: Login screen with register success message
```

## Tech stack

- bcrypt
- Node JS
- Express JS
- mocha & chai
- jsonwebtokens
- PostgreSQL with knex
- express ejs (template engine)

## Author

### **RedJanvier**

## Contacts

[Github](https://github.com/RedJanvier)
[Twitter](https://twitter.com/red_janvier)
[YouTube](https://www.youtube.com/channel/UCrQBNajZa-ibHBerJQ0kAiQ)
[Facebook](https://facebook.com/jan.h.red)
