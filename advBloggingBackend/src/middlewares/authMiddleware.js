const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized! No jwt token found! >(' });
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({ message: err.message });
    }
}

module.exports = authMiddleware;