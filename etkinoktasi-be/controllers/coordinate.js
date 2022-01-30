import Coordinate from "../models/coordinate.js";

const CoordinateController = {
	getAll: async (req, res) => {
		try {
			const coordinates = await Coordinate.findAll();
			res.status(200).json(coordinates);
		} catch (error) {
			res.status(500).json({
				message: "An error occurred while retrieving coordinates",
				error: error.message,
			});
		}
	},
	getCoordinateById: async (req, res) => {
		const { id } = req.params;
		try {
			const coordinate = await Coordinate.findByPk(id);
			if (!coordinate) {
				return res.status(404).json({
					message: "Coordinate not found",
				});
			}
			res.status(200).json(coordinate);
		} catch (error) {
			res.status(500).json({
				message: "An error occurred while retrieving coordinate",
				error: error.message,
			});
		}
	},
	create: async (req, res) => {
		const { latitude, longitude } = req.body;
		try {
			console.log(req.body);
			const coordinate = await Coordinate.create({
				latitude,
				longitude,
			});
			res.status(201).json(coordinate);
		} catch (error) {
			res.status(500).json({
				message: "An error occurred while creating coordinate",
				error: error.message,
			});
		}
	},
	update: async (req, res) => {
		const { id } = req.params;
		const { latitude, longitude } = req.body;
		try {
			const coordinate = await Coordinate.findByPk(id);
			if (!coordinate) {
				return res.status(404).json({
					message: "Coordinate not found",
				});
			}
			await coordinate.update({
				latitude,
				longitude,
			});
			res.status(200).json(coordinate);
		} catch (error) {
			res.status(500).json({
				message: "An error occurred while updating coordinate",
				error: error.message,
			});
		}
	},
};

export default CoordinateController;
