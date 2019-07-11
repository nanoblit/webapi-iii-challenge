const db = require('../data/dbConfig.js');

function get() {
  return db('posts');
}

function getById(id) {
  return db('posts')
    .where({ id })
    .first();
}

function insert(post) {
  return db('posts')
    .insert(post)
    .then(ids => getById(ids[0]));
}

function update(id, changes) {
  return db('posts')
    .where({ id })
    .update(changes)
    .catch(error => console.log(error));
}

function remove(id) {
  return db('posts')
    .where('id', id)
    .del();
}

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};
