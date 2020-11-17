// profissionais.js
const { Router } = require("express");
const Profissional = require("../models/profissional");
const profissionais = new Router();

profissionais.get("/", (req, res) => {
  Profissional.where(req.query)
    .fetchAll()
    .then((ret) => res.send(ret))
    .catch((err) => res.status(500).send(err));
});

profissionais.get("/:id", (req, res) => {
  Profissional.where("id", req.params.id)
    .fetch()
    .then((ret) => res.send(ret))
    .catch((err) => res.status(500).send(err));
});

profissionais.post("/", (req, res) => {
  new Profissional(req.body)
    .save()
    .then((m) => {
      res.send(m);
    })
    .catch((err) => res.status(500).send(err));
});

profissionais.put("/", (req, res) => {
  new Profissional(req.body)
    .save()
    .then((m) => {
      res.send(m);
    })
    .catch((err) => res.status(500).send(err));
});

profissionais.delete("/:id", (req, res) => {
  new Profissional({ id: req.params.id })
    .destroy()
    .then((ret) => res.send("ok"))
    .catch((err) => res.status(500).send(err));
});

module.exports = profissionais;
