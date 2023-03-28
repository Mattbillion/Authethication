import { Schema, model } from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Incorrect password!"],
      unique: false,
    },
  },
  { timestamps: true }
);

const Users = model("Users", userSchema);
export default Users;
