import express from "express";
import bcrypt from "bcrypt";
import "../model/Users.js";
import Users from "../model/Users.js";
const register = express.Router();

register.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  if (hashedPassword) {
    const user = new Users({
      email: req.body.email,
      password: hashedPassword,
    });

    const result = await user.save();

    if (result) {
      res.status(200).send({
        message: "User created Successfully",
        result,
      });
    } else {
      res.status(500).send({
        message: "Password was not hashed successfully",
      });
    }
  } else if (req.body.email === user.email) {
    res.status(500).send({
      message: "Use different email",
    });
  }
});

export default register;
