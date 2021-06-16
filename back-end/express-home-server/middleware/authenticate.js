const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
    let token = req.header('authorization');

    if(!token) {
        return res.status(403).send({message: 'authorization denied', isAutheticated: false})
    }
  
    token = token.split(" ")[1];

    try {
        const verify = jwt.verify(token, process.env.jwtSecret)
        // console.log(verify)

        req.user = verify.user;

        next();
    } catch (error) {
        res.status(401).send({message: 'token is not valid', isAutheticated: false});
    }
};

module.exports = authenticate;