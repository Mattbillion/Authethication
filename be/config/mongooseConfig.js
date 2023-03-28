import mongoose from "mongoose"
const MONGO_CONNECTION = "mongodb+srv://database:1234@cluster0.pxig3vm.mongodb.net/test2"

const DATA_BASE = mongoose
  .connect(MONGO_CONNECTION)
  .then(() => console.log("Database:DATABASE SUCCESSFULLY CONNECTED!"))
  .catch((error) => console.error("Database: Error"));

  export default DATA_BASE;