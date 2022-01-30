import sequelize from "../database.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class Target extends Model {
	static associate(models) {}

	getByCoordinateId(coordinateId) {
		return this.findAll({
			where: {
				coordinateId,
			},
		});
	}
}

Target.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: Sequelize.STRING,
		description: Sequelize.STRING,
		image: Sequelize.STRING,
		link: Sequelize.STRING,
		coordinateId: Sequelize.INTEGER,
	},
	{
		sequelize,
		modelName: "Target",
		tableName: "target",
		freezeTableName: true,
		timestamps: true,
	}
);

export default Target;
