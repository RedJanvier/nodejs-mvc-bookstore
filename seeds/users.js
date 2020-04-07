exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Alain NIYONEMA',
          email: 'alainyern@gmail.com',
          password:
            '$2y$12$JK7rjOV2fyOc.gGr2TBwK.m2Tyht9N8Z.fgdI5gIdYZBv68rI8/e6',
          age: 21,
          gender: 'male',
        },
        {
          name: 'John DOE',
          email: 'johndoe@gmail.com',
          password:
            '$2y$12$sqgFhGPzDVDMtX5rstt8fuZGyLgjzaPklBI4iaRNlgec5LDYGb0yK',
          age: 27,
          gender: 'male',
        },
        {
          name: 'Maliza CONSTANTINE',
          email: 'malizacoco@gmail.com',
          password:
            '$2y$12$M7FPCBIcst387vP7TGzKUeWJ27kXFrBlGvcyDmt6CUE7wXiDZyh.6',
          age: 19,
          gender: 'female',
        },
      ]);
    });
};
