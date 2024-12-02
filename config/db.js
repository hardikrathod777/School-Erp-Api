import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = process.env.MONGODB_URL;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("DB connected...");
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});

export default mongoose;
