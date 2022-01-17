const { dbConfig } = require("./config/db");
const { Pool, Client } = require("pg");

const pool = new Pool(dbConfig);

pool.query("SELECT NOW()", (err, res) => {
	console.log(err, res);
	pool.end();
});
