import sequelize from "../database.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class Coordinate extends Model {
	static associate(models) {
		Coordinate.hasOne(models.Target, {
			foreignKey: "coordinateId",
			onDelete: "CASCADE",
		});
	}
}

Coordinate.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		latitude: Sequelize.STRING,
		longitude: Sequelize.STRING,
	},
	{
		sequelize,
		modelName: "Coordinate",
		tableName: "coordinate",
		freezeTableName: true,
		timestamps: true,
	}
);

export default Coordinate;
