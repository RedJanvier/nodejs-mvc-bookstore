`INSERT INTO borrowers(name, email, password, age, gender) VALUES ("Alain NIYONEMA", "alainyern@gmail.com", "electrotech", 21, "male"),
("John DOE", "johndoe@gmail.com", "electrotech", 27, "male"),
("Maliza CONSTANTINE", "malizacoco@gmail.com", "electrotech", 19, "female");`
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('borrowers').del()
    .then(function () {
      // Inserts seed entries
      return knex('borrowers').insert([
        {name: "Alain NIYONEMA", email: "alainyern@gmail.com", password: "electrotech", age: 21, gender: "male"},
        {name: "John DOE", email: "johndoe@gmail.com", password: "electrotech", age: 27, gender: "male"},
        {name: "Maliza CONSTANTINE", email: "malizacoco@gmail.com", password: "electrotech", age: 19, gender: "female"}
      ]);
    });
};
