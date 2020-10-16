const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { users, roles } = require("./models");

const register = async (user) => {
  const savedUser = users.filter ((u)=> u.email === user.email)
    if (savedUser.length === 0) {
        // new user
        const newUser = user
        newUser.id = 2
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
    return 'user NOT found in DB'
  } else {
    if (await bcrypt.compare(user.password,savedUser[0].password)){
      return 'login succsessful'
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
