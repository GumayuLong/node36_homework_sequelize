/** @format */

import express from "express"; // npm install express
import mysql from "mysql2"; // npm install mysql2
import rootRoutes from "./src/routes/rootRoutes.js";

const app = express();
app.use(express.json());
app.listen(8080);

app.use("/api", rootRoutes);

// connect to database
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "longvip5",
	database: "node36homeworksql",
	port: 3307,
});
