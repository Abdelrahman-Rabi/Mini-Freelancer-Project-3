const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users, posts, roles } = require("./models");
const User = require("./users")
const Post = require("./posts");
const { remove } = require("./users");

const register = async (user) => {
  const savedUser = users.filter ((u)=> u.email === user.email)
    if (savedUser.length === 0) {
        // new user
        const newUser = user
        newUser.password = await bcrypt.hash(user.password,Number(process.env.SALT))
        if (newUser.role_id == 1) { 
          users.push(newUser)
          return 'You creat an Admin account, you have full C-R-U-D permission'
        } else if (newUser.role_id == 2) {
          users.push(newUser)
          return 'You creat Freelancer account, you have C-R-U permission'
        } else if (newUser.role_id == 3) {
          users.push(newUser)
          return 'You created Guest account, you can R only'
        } else {
          return 'please insert correct id'
        }
    } else {
        // old user
        return 'user already exists'
    }
};

const login = async (user) => {
  const savedUser = users.filter ((u)=> u.email === user.email)
  if (savedUser.length === 0) {
    return 'user NOT found in DB, Register please'
  } else {
    if (await bcrypt.compare(user.password,savedUser[0].password)){
      const savedPermission = roles.filter((p) => 
        p.id == savedUser[0].role_id)
        console.log('Saved Permission: ',savedPermission)
      const payload = {
        email : user.email,
        permissions : savedPermission[0].id
      }
      const options = {
        expiresIn : process.env.TOKEN_EXPIRATION
      }
      return jwt.sign(payload,process.env.SECRET,options)
    } else {
      return 'Password is incorrect'
    }
  }

};

const getUsers = async () => {
  try {
    const allUsers = await User.find()
    return allUsers
  } catch (err) {
    return err
  }
};

const getPosts = async () => {
  try {
    const allPosts = await Post.find()
    return allPosts
  } catch (err) {
    return err
  }
};

const createPost = async (post) => {
  const newPost = await new Post ({
    fName : post.fName,
    languages : post.languages,
    skills : post.skills,
    payments : post.payments
  })
  .save()
  .then((result)=>{
    console.log('RESULT: ', result)
    return result
  })
  .catch((err)=>{
    console.log('ERR', err)
  })
}

const createUser =  (req, res) => {
  const newUser =  new User(req.body)
  .save()
  .then((result) => {
    console.log('RESULT: ', result);
    res.json(result)
  })
  .catch((err) => {
    console.log('ERR: ', err);
    res.json(err)
  });
}

const deletePost = async (postId) => {
  try {
    const removedPost = await Post.remove({_id : postId})
    return removedPost
  } catch (err) {
    return err
  }
}

const deleteUser = async (userId) => {
  try {
    const removedUser = await User.remove({_id : userId})
    return removedUser
  } catch (err) {
    return err
  }
}

const updatePost = async (postId, post) => {
  try {
    console.log(postId)
    console.log(post.skills)
    const updatePost = await Post.updateOne({_id : postId}, {$set: {skills : post.skills}})
  return updatePost
  } catch (err) {
    return err
  }
}

module.exports = {
  register,
  login,
  getUsers,
  getPosts,
  createPost,
  createUser,
  deletePost,
  updatePost,
  deleteUser
};
