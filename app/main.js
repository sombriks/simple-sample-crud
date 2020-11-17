// main.js
const { knex } = require("./config/db");
const app = require("./config/app");

knex.migrate.latest().then((_) => {
  app.listen(process.env.PORT);
  console.log("running at port " + process.env.PORT);
});
