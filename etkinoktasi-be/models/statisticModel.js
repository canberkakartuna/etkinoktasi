import sequelize from "../database.js";
import Sequelize from "sequelize";

const Statistic = sequelize.define(
	"Statistic",
	{
		// Model attributes are defined here
		label: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		value: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

export default Statistic;
