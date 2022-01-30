import express from "express";

import targetController from "../controllers/target.js";

const { getAll, getTargetById, create, update } = targetController;

let targetRouter = express.Router();

targetRouter.get("/", getAll);
targetRouter.get("/:id", getTargetById);
targetRouter.post("/", create);

export default targetRouter;
