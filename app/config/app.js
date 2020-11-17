// app.js
const express = require("express");
const { json } = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(json());
app.use(morgan("dev"));

app.use("/profissionais", require("../routes/profissionais"));
app.use("/unidades", require("../routes/unidades"));

// pasta estática no final pra tentar as rotas primeiro
app.use(express.static("public"));

module.exports = app;
