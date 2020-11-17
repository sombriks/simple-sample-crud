exports.up = (knex) =>
  knex.schema
    .createTable("unidade", (tb) => {
      tb.increments();
      tb.string("nome").notNullable();
    })
    .createTable("profissional", (tb) => {
      tb.increments();
      tb.string("nome").notNullable();
      tb.integer("unidade_id").references("unidade.id").onDelete("cascade");
    });

exports.down = (knex) =>
  knex.schema.dropTable("profissional").dropTable("unidade");
