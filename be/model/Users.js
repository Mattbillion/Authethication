import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: {
    type: "String",
    require: [true, "please provide your email!"],
    unique: [true, "Email exist"],
  },

  password: {
    type: "string",
    require: [true, "Incorrect password!"],
    unique: false,
  },
});

export default mongoose.model.Users || mongoose.model("Users", userSchema);
