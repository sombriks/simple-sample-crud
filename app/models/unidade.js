// unidade.js
const { bookshelf } = require("../config/db");
const Profissional = require("./profissional");

const Unidade = bookshelf.model("Unidade", {
  tableName: "unidade",
  profissionais() {
    return this.hasMany(Profissional);
  },
});

module.exports = Unidade;
