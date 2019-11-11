# LOGIN SYSTEM BY redjanvier

## PREREQUISITES
- NodeJs installed. (find it)[https://nodejs.org/en/]
- PostgreSQL installed. (find it)[https://www.enterprisedb.com/downloads/postgres-postgresql-downloads]
- Text Editor of your choice. (find it)[https://code.visualstudio.com/]

# FAST METHOD (doesn't involve changing the normal settings) * RECOMMENDED
Open the folder in command prompt or terminal and run the commands below
> npm install

> createdb "book-store"

> psql book-store

Enter your password if requested. 

> CREATE TABLE borrowers (
id SERIAL PRIMARY KEY, 
name VARCHAR(100) NOT NULL,
email VARCHAR(100) unique NOT NULL, 
password VARCHAR(255) NOT NULL, 
age SMALLINT, 
gender text NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

> INSERT INTO borrowers(name, email, password, age, gender) VALUES ("Alain NIYONEMA", "alainyern@gmail.com", "electrotech", 21, "male"),
("John DOE", "johndoe@gmail.com", "electrotech", 27, "male"),
("Maliza CONSTANTINE", "malizacoco@gmail.com", "electrotech", 19, "female");

> Press the shortcut keys "ctrl" + "c" three times. 

> run the command "npm start"
#### In case you have an error or want some help, contact me at +250789775922. 

# DETAILED METHOD (involves changing the normal settings)
## SETTINGS CHANGE
- Open the folder "controllers" and the file "dbConfig.js".
- Change the "dbname", "user", "pass" and "borrowers" to your settings in the postgreSQL.

### if you dont already have the settings open command prompt or terminal and run:
>createdb "dbname"

>psql dbname
Enter your password if required.
>\d
To check if Database was created.
>CREATE TABLE borrowers (
>id serial PRIMARY KEY,
>name VARCHAR(100),
>gender text,
>age INT NOT NULL,
>email VARCHAR(100) UNIQUE NOT NULL,
>password VARCHAR(255) NOT NULL,
>createdAt TIMESTAMP NOT NULL
>);
check if the table was created with the command:
>\d

#### For more informations (visit here)[https://www.guru99.com/postgresql-tutorial.html]

- After setting your database you need to open the folder downloaded from github and run the command:
>npm install

## FINISH UPs
- If all went well you can now run the command 
>npm start
- Open the browser and go to (http://localhost:9000/)[http://localhost:9000/].
- Register an account and then use it to sign into the account.
- Some functionalities have been blocked because they are not yet implemented.

#### In case you have an error or want some help, contact me at +250789775922. 

