// profissional.js
const { bookshelf } = require("../config/db");

const Profissional = bookshelf.model("Profissional", {
  tableName: "profissional",
});

module.exports = Profissional;
