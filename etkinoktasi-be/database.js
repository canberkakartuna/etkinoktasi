import dbConfig from "./config/db.js";
import Sequelize from "sequelize";

const { user, host, database, password, port } = dbConfig;

var sequelize = new Sequelize(database, user, password, {
	host: host,
	dialect: "postgres",
});

console.log("db, ", dbConfig);

export default sequelize;
