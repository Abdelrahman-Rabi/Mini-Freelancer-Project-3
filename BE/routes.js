const express = require("express");
const { register, login, getUsers, getPosts, createPost, createUser, deletePost, updatePost, deleteUser} = require("./controller");
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

authRouter.post("/register", createUser)

authRouter.post('/create_post', async (req,res)=>{
  try {
    res.json(await createPost(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.delete('/post/:postId', async (req,res)=>{
  try {
    res.json(await deletePost(req.params.postId));
  } catch (err) {
    throw err;
  }
});

authRouter.post('/test', async (req,res)=>{
  try {
    const result = req.body.username
    res.json(result);
  } catch (err) {
    throw err;
  }
});

authRouter.delete('/user/:userId', async (req,res)=>{
  try {
    res.json(await deleteUser(req.params.userId));
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
