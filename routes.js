const express = require("express");
const { register, login, getUsers } = require("./controller");
const checkPermission = require("./middlewares");

const authRouter = express.Router();

authRouter.get("/", async (req, res) => {
  res.json(await getUsers());
});

authRouter.get("/protected", checkPermission, (req, res) => {
  res.json("you are allowed to read");
});

authRouter.post("/register", async (req, res) => {
  try {
    res.json(await register(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    res.json(await login(req.body));
  } catch (err) {
    throw err;
  }
});

module.exports = authRouter;
