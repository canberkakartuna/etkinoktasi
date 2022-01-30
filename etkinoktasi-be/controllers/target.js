import Coordinate from "../models/coordinate.js";
import Target from "../models/target.js";

const TargetController = {
	getAll: async (req, res) => {
		try {
			const targets = await Target.findAll({
				attributes: ["name", "description", "image", "link", "coordinateId"],
			});
			res.status(200).json(targets);
		} catch (error) {
			res.status(500).json({
				message: "An error occurred while retrieving targets",
				error: error.message,
			});
		}
	},
	getTargetById: async (req, res) => {
		const { id } = req.params;
		try {
			const target = await Target.findByPk(id);
			const { coordinateId, ...restTargetParams } = target.dataValues;
			const coordinate = await Coordinate.findByPk(coordinateId);
			const { id: _coordinateId, latitude, longitude } = coordinate;

			const targetByIdResult = {
				...restTargetParams,
				coordinate: {
					id: _coordinateId,
					latitude,
					longitude,
				},
			};

			if (!target) {
				return res.status(404).json({
					message: "Target not found",
				});
			}
			res.status(200).json(targetByIdResult);
		} catch (error) {
			res.status(500).json({
				message: "An error occurred while retrieving target",
				error: error.message,
			});
		}
	},
	create: async (req, res) => {
		const { name, description, image, link, coordinateId } = req.body;
		console.log(req.body);
		try {
			const target = await Target.create({
				name,
				description,
				image,
				link,
				coordinateId,
			});
			res.status(201).json(target);
		} catch (error) {
			res.status(500).json({
				message: "An error occurred while creating target",
				error: error.message,
			});
		}
	},
	update: async (req, res) => {
		const { id } = req.params;
		const { name, description, image, link, coordinateId } = req.body;
		try {
			const target = await Target.findByPk(id);
			if (!target) {
				return res.status(404).json({
					message: "Target not found",
				});
			}
			await target.update({
				name,
				description,
				image,
				link,
				coordinateId,
			});
			res.status(200).json(target);
		} catch (error) {
			res.status(500).json({
				message: "An error occurred while updating target",
				error: error.message,
			});
		}
	},
	delete: async (req, res) => {
		const { id } = req.params;
		try {
			const target = await Target.findByPk(id);
			if (!target) {
				return res.status(404).json({
					message: "Target not found",
				});
			}
			await target.destroy();
			res.status(200).json({
				message: "Target deleted",
			});
		} catch (error) {
			res.status(500).json({
				message: "An error occurred while deleting target",
				error: error.message,
			});
		}
	},
};

export default TargetController;
