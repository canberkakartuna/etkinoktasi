import express from "express";

import { getAll, create } from "../controllers/statisticController.js";

var statisticRouter = express.Router();

/* GET home page. */
statisticRouter.get("/", getAll);

statisticRouter.post("/", create);

export default statisticRouter;
