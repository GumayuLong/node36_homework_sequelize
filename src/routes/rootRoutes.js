import express from 'express';
import userRoutes from './userRoutes.js';
import resRoutes from './resRoutes.js';

const rootRoutes = express.Router();
rootRoutes.use("/restaurant", resRoutes);
rootRoutes.use("/user", userRoutes);

export default rootRoutes;