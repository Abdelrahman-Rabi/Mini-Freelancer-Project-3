const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    if (!req.headers.authorization){
        res.json("please insert jwt")
    }
const userToken = req.headers.authorization.split(' ')[1]
jwt.verify(userToken,process.env.SECRET,(err,result)=>{
    if (err) res.json(err)
    console.log ('RESULT: ', result)
    // res.json('res from middleware')
    next()
})
};
