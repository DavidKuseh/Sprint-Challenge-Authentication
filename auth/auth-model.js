
const db = require("../database/dbConfig");

async function add(user) {
  let ids = await db("users").insert(user, "id");
  const [id] = ids;
  return findById(id);
}

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

module.exports = {
  add,
  find,
  findBy,
  findById
};