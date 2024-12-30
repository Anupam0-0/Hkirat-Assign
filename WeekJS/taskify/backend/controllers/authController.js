
const Auth = require("../models/authModels");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

//user sign up
const userSignup = async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Auth({ name, username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//user login
const Userlogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Auth.findOne({ username });
    if (!user) return res.status(404).json({ error: "user not found" });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({ error: "Auth denied" });

    const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { Userlogin, userSignup };
