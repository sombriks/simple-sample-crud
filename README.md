# simple-sample-crud

create, update, delete

## from scratch

```bash
mkdir simple-sample-crud
cd simple-sample-crud
mkdir app
touch app/main.js
npm init -y
npm i express body-parser morgan knex bookshelf sqlite3
npm i -D nodemon dotenv-flow
touch .env.local
npx knex init
npx knex migrate:make esquema_inicial
```

## docs

- [dotenv-flow](https://www.npmjs.com/package/dotenv-flow)
- [express](https://expressjs.com/en/guide/writing-middleware.html)
- [knex](http://knexjs.org/)
- [bookshelf](https://bookshelfjs.org/#examples)