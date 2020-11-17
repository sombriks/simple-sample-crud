// unidades.js
const { Router } = require("express");
const Unidade = require("../models/unidade");
const unidades = new Router();

unidades.get("/", (req, res) => {
  Unidade.where(req.query)
    .fetchAll({ withRelated: ["profissionais"] })
    .then((ret) => res.send(ret))
    .catch((err) => res.status(500).send(err));
});

unidades.get("/:id", (req, res) => {
  Unidade.where("id", req.params.id)
    .fetch({ withRelated: ["profissionais"] })
    .then((ret) => res.send(ret))
    .catch((err) => res.status(500).send(err));
});

unidades.post("/", (req, res) => {
  new Unidade(req.body)
    .save()
    .then((m) => {
      res.send(m);
    })
    .catch((err) => res.status(500).send(err));
});

unidades.put("/", (req, res) => {
  new Unidade(req.body)
    .save(null, { method: "update" })
    .then((m) => {
      res.send(m);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
});

unidades.delete("/:id", (req, res) => {
  new Unidade({ id: req.params.id })
    .destroy()
    .then((ret) => res.send("ok"))
    .catch((err) => res.status(500).send(err));
});

module.exports = unidades;
