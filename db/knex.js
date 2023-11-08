const knex = require("knex");

const connectedKenx = knex({
    client: "sqlite3",
    connection: {
        filename: "dua_main.sqlite"
    }
});

module.exports = connectedKenx;