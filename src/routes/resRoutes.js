import express from "express";
import { getListRes } from "../controllers/resController.js";

const resRoutes = express.Router();

resRoutes.use("/res-list", getListRes);

export default resRoutes;
