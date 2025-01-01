const jwt = require("jsonwebtoken");

exports.authcat = (req, res, next) => {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer")) {
        token = token.split(" ")[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized, token invalid" });
        }
    } else {
        return res.status(401).json({ message: "Unauthorized, no token" });
    }
};

exports.adminProtect = (req, res, next) => {
    this.authcat(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({ message: "Forbidden: Admins only" });
        }
    });
};
