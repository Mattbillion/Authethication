import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import Users from "./model/Users.js";
import cors from "cors";
import userAPIrouter from "./Routes/userAPI.js";
const PORT = 6060;
const MONGO_CONNECTION = "mongodb+srv://database:1234@cluster0.pxig3vm.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_CONNECTION)
  .then(() => console.log("Database:DATABASE SUCCESSFULLY CONNECTED!"))
  .catch((error) => console.error("Database: Error"));

const app = express();
app.use(cors())
app.use(express.json());
app.use(userAPIrouter);
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}.`);
});
