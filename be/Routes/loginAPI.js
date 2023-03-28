import express from "express";

const login = express.Router();

login.post("./login", (req, res) => {
  res.send({
    result: req.body,
  });
});

export default login