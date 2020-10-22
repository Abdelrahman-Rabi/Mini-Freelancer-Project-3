const express = require("express");
const { register, login, getUsers, getPosts, createPost, createUser} = require("./controller");
const checkPermission = require("./middlewares");

const authRouter = express.Router();

authRouter.get("/users", async (req, res) => {
  res.json(await getUsers());
});

authRouter.get("/posts", async (req, res) => {
  res.json(await getPosts());
});

authRouter.get("/protected", checkPermission, (req, res) => {
  console.log(req.result)
  res.json("you are allowed to read");
});

// authRouter.post("/register", done by mongoose

authRouter.post("/login", async (req, res) => {
  try {
    res.json(await login(req.body));
  } catch (err) {
    throw err;
  }
});

// authRouter.post('/create_post', checkPermission, async (req,res) => {
//   const {email, permissions} = req.result
//   if (permissions == 1 || permissions == 2 ) {
//     try {
//       res.json(await createPost(req.body, email))
//     } catch (err) {
//       throw err
//     }
//   } else {
//     res.json('you are NOT allowed to create Post')
//   }
// })

authRouter.post("/register", async (req, res) => {
  try {
    res.json(await createUser(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.post('/create_post', async (req,res)=>{
  try {
    res.json(await createPost(req.body));
  } catch (err) {
    throw err;
  }
});

module.exports = authRouter;
