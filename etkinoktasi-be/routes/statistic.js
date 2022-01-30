import express from "express";

import { getAll, create, remove } from "../controllers/statistic.js";

var statisticRouter = express.Router();

statisticRouter.get("/", getAll);
statisticRouter.post("/", create);
statisticRouter.delete("/:id", remove);

export default statisticRouter;
