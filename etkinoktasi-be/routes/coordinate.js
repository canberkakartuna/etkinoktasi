import express from "express";

import CoordinateController from "../controllers/coordinate.js";

const coordinateRouter = express.Router();

const { getAll, getCoordinateById, create, update } = CoordinateController;

coordinateRouter.get("/", getAll);
coordinateRouter.get("/:id", getCoordinateById);
coordinateRouter.post("/", create);
coordinateRouter.put("/:id", update);

export default coordinateRouter;
