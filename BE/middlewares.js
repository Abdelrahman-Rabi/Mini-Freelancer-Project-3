const { request } = require("express");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    if (!req.headers.authorization){
        res.json("please insert jwt")
    }
const userToken = req.headers.authorization.split(' ')[1]
jwt.verify(userToken,process.env.SECRET,(err,result)=>{
    if (err) res.json('You have problem with your TOKEN, Mostly you do not have permession to access here' )
    console.log ('RESULT: ', result)
    req.result = result
    next()
})
};
