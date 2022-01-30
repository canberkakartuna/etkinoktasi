import sequelize from "../database.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class Statistic extends Model {
	static associate(models) {}
}

Statistic.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		label: Sequelize.STRING,
		value: Sequelize.INTEGER,
	},
	{
		sequelize,
		modelName: "Statistic",
		tableName: "statistic",
		freezeTableName: true,
		timestamps: true,
	}
);

export default Statistic;
