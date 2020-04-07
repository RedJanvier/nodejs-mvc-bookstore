import { db, usersTable, booksTable } from '../config/database';

const dashboard = (req, res) => {
  // const { userId } = req.session;
  // if (userId) {
  db(usersTable)
    .select('email', 'age', 'gender', 'name', 'id')
    .then((users) => res.render('dashboard', { users }))
    .catch(console.log);
  // }
};

const index = (req, res) => {
  // const { userId } = req.session;
  // if (userId) {
  db(booksTable)
    .select('title', 'summary', 'img')
    .then((books) => res.render('welcome', { books }))
    .catch(console.log);
  // }
  res.render('welcome', {
    books: [
      {
        title: 'John Doe in the jungle',
        summary:
          'Lorem ipsum dolor ipudh smen unaieaaamldn uanepaneb dna,d  naje an anaiajne ajnejnajna a;wmef',
        img:
          'https://m.media-amazon.com/images/M/MV5BMjRjNDk2NTItZGQ1OS00OGU0LWJhMzUtNmZkNDE4NDg0MDMyXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
      },
      {
        title: 'John Doe in the jungle',
        summary:
          'Lorem ipsum dolor ipudh smen unaieaaamldn uanepaneb dna,d  naje an anaiajne ajnejnajna a;wmef',
        img:
          'https://m.media-amazon.com/images/M/MV5BMjRjNDk2NTItZGQ1OS00OGU0LWJhMzUtNmZkNDE4NDg0MDMyXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
      },
      {
        title: 'John Doe in the jungle',
        summary:
          'Lorem ipsum dolor ipudh smen unaieaaamldn uanepaneb dna,d  naje an anaiajne ajnejnajna a;wmef',
        img:
          'https://m.media-amazon.com/images/M/MV5BMjRjNDk2NTItZGQ1OS00OGU0LWJhMzUtNmZkNDE4NDg0MDMyXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
      },
      {
        title: 'John Doe in the jungle',
        summary:
          'Lorem ipsum dolor ipudh smen unaieaaamldn uanepaneb dna,d  naje an anaiajne ajnejnajna a;wmef',
        img:
          'https://m.media-amazon.com/images/M/MV5BMjRjNDk2NTItZGQ1OS00OGU0LWJhMzUtNmZkNDE4NDg0MDMyXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
      },
      {
        title: 'John Doe in the jungle',
        summary:
          'Lorem ipsum dolor ipudh smen unaieaaamldn uanepaneb dna,d  naje an anaiajne ajnejnajna a;wmef',
        img:
          'https://m.media-amazon.com/images/M/MV5BMjRjNDk2NTItZGQ1OS00OGU0LWJhMzUtNmZkNDE4NDg0MDMyXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
      },
      {
        title: 'John Doe in the jungle',
        summary:
          'Lorem ipsum dolor ipudh smen unaieaaamldn uanepaneb dna,d  naje an anaiajne ajnejnajna a;wmef',
        img:
          'https://m.media-amazon.com/images/M/MV5BMjRjNDk2NTItZGQ1OS00OGU0LWJhMzUtNmZkNDE4NDg0MDMyXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
      },
      {
        title: 'John Doe in the jungle',
        summary:
          'Lorem ipsum dolor ipudh smen unaieaaamldn uanepaneb dna,d  naje an anaiajne ajnejnajna a;wmef',
        img:
          'https://m.media-amazon.com/images/M/MV5BMjRjNDk2NTItZGQ1OS00OGU0LWJhMzUtNmZkNDE4NDg0MDMyXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
      },
      {
        title: 'John Doe in the jungle',
        summary:
          'Lorem ipsum dolor ipudh smen unaieaaamldn uanepaneb dna,d  naje an anaiajne ajnejnajna a;wmef',
        img:
          'https://m.media-amazon.com/images/M/MV5BMjRjNDk2NTItZGQ1OS00OGU0LWJhMzUtNmZkNDE4NDg0MDMyXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
      },
    ],
  });
};

export default {
  dashboard,
  index,
};
