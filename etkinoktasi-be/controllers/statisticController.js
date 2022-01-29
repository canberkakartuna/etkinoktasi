import Statistic from "../models/statisticModel.js";

export const getAll = async (req, res) => {
	console.log("sadasd");
	try {
		//TODO: createAt & updatedAt should be added
		const statistic = await Statistic.findAll({
			attributes: ["label", "value"],
		});
		res.status(200).json(statistic);
	} catch (error) {
		res.status(500).json({
			message: "An error occurred while retrieving statistics",
			error: error.message,
		});
	}
};

export const getStatisticById = async (req, res) => {
	const { id } = req.params;
	try {
		const statistic = await Statistic.findByPk(id);
		if (!statistic) {
			return res.status(404).json({
				message: "Statistic not found",
			});
		}
		res.status(200).json(statistic);
	} catch (error) {
		res.status(500).json({
			message: "An error occurred while retrieving statistic",
			error: error.message,
		});
	}
};

export const create = async (req, res) => {
	const { label, value } = req.body;
	console.log(req);
	try {
		const statistic = await Statistic.create({
			label,
			value,
		});
		res.status(201).json(statistic);
	} catch (error) {
		res.status(500).json({
			message: "An error occurred while creating statistic",
			error: error.message,
		});
	}
};

export const update = async (req, res) => {
	const { id } = req.params;
	const { label, value } = req.body;
	try {
		const statistic = await Statistic.findByPk(id);
		if (!statistic) {
			return res.status(404).json({
				message: "Statistic not found",
			});
		}
		await statistic.update({
			label,
			value,
		});
		res.status(200).json(statistic);
	} catch (error) {
		res.status(500).json({
			message: "An error occurred while updating statistic",
			error: error.message,
		});
	}
};
