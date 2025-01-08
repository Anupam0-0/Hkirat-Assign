const jwt = require('jsonwebtoken');

// * payload = user
const generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

module.exports = generateToken;