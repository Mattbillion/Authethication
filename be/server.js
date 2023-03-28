import express from "express";
import registerAPI from "./Routes/registerAPI.js"
import cors from "cors"
import "./config/mongooseConfig.js";
const PORT = 2000;


const app = express();
app.use(cors());
app.use(express.json());
app.use(registerAPI);
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}.`);
});
