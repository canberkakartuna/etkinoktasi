import express from "express";

import { getAll, create } from "../controllers/statistic.js";

var statisticRouter = express.Router();

statisticRouter.get("/", getAll);

statisticRouter.post("/", create);

export default statisticRouter;
