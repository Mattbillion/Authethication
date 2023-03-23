import express, { application } from "express";
const userAPIrouter = express.Router();

userAPIrouter.post("/login", async (req, res) => {
  const result = await req.body;
  console.log(result);

  if (req.body) {
    res.status(200).send({
      success: true,
      message: "Success login",
    });
  } else {
    res.status(400).send({
      success: false,
      message: "unexpected err",
    });
  }
});

userAPIrouter.post("/register", () => {
  console.log("Register");
});

export default userAPIrouter;
