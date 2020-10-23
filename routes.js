const express = require("express");
const { register, login, getUsers, getPosts, createPost, createUser, deletePost, updatePost} = require("./controller");
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

authRouter.delete('/:postId', async (req,res)=>{
  try {
    res.json(await deletePost(req.params.postId));
  } catch (err) {
    throw err;
  }
});

authRouter.put('/:postId', async (req,res) => {
  try {
    res.json(await updatePost(req.params.postId, req.body));
  } catch (err) {
    throw err;
  }
})

module.exports = authRouter;
