const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Statistic = sequelize.define("Statistic", {
	// Model attributes are defined here
	label: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	value: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});
