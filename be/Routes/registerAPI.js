import express, { application, request } from "express";
import bcrypt from "bcrypt";
import Users from "../model/Users";
app.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  if (hashedPassword) {
    const user = new Users({
      email: request.body.email,
      password: hashedPassword,
    });
    const result = user.save();
  } else {
    res.status(500).send({
      message: "Password is not hashed successfully!",
    });
  }
});


