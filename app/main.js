// main.js
const { knex } = require("./config/db");
const app = require("./config/app");

knex.migrate.latest().then((_) => {
  app.listen(process.env.PORT || 3000);
  console.log("running at port " + process.env.PORT);
});
