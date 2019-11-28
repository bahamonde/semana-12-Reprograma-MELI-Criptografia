const jwt = require ('jsonwebtoken');
const authConfig = require ('../config/auth');
const { promisify } = require('util');


module.exports = async (req, res, next) => {
    const authHaeder = req.headers.authorization;
    if (!authHaeder) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    const [, token] = authHaeder.split(' ');
    
    try{
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decoded.id;
        return next();
    } catch (err){
        return res.status(401).json({error: 'Token Invalid'})
    }

}