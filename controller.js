const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users, posts, roles } = require("./models");

const register = async (user) => {
  const savedUser = users.filter ((u)=> u.email === user.email)
    if (savedUser.length === 0) {
        // new user
        const newUser = user
        newUser.password = await bcrypt.hash(user.password,Number(process.env.SALT))
        users.push(newUser)
        return newUser
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
      console.log(savedUser[0].id)
      console.log(roles[0].id)
      const savedPermission = roles.filter((p) => 
        p.id == savedUser[0].id)
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
  return users;
};

module.exports = {
  register,
  login,
  getUsers,
};
