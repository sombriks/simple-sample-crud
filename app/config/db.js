// db.js
const env = process.env.NODE_ENV || "development";
const cfg = require("../../knexfile")[env];

const knex = require("knex")(cfg);
const bookshelf = require("bookshelf")(knex);

module.exports = { knex, bookshelf };
