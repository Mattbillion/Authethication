import express from "express";
import bcrypt from "bcrypt";
import Users from "../model/Users.js"

const registerAPI = express.Router();

registerAPI.post("/register", async (req, res) => {
  res.send(req.body)
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  if (hashedPassword) {
    const user = new Users({
      username: request.body.username,
      email: request.body.email,
      password: hashedPassword
    });
    const result = user.save();
    res.status(200).send(result);
  } 
});

export default registerAPI;


