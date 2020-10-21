const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users, posts, roles } = require("./models");
const User = require("./users")
const Post = require("./posts")

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

const getUsers = () => {
  return User;
};

const getPosts = () => {
  return posts;
};

const createPost = async (post, email) => {
  post.email = email
  posts.push(post)
  return 'you created post successfully'
}

const createuser = async (user) => {
  const NewUser = new User({
    firstName : user.firstName,
    secondName : user.secondName,
    email : user.email,
    password : user.password,
    phoneNumber: user.phoneNumber
  })
  .save()
  .then((result) => {
    console.log('RESULT: ', result);
    return result
  })
  .catch((err) => {
    console.log('ERR: ', err);
  });

}



module.exports = {
  register,
  login,
  getUsers,
  getPosts,
  createPost,
  createuser
};
