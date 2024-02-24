const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const cookieParser = require("cookie-parser");

const protect = async (req, res, next) => {
    cookieParser()(req, res, () => { });
    const token = req.cookies.Authorization;

    if (token) {
        try {
            jwt.verify(token, process.env.SECRETKEY);
            next();
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized" });
        }
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = { protect };