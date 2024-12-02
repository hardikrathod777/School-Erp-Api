import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import db from "./config/db.js";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`server is running on port http://localhost:${PORT}`);
    }
})