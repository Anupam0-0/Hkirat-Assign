const express = require("express");
const router = express.Router();
const {registerUser, loginUser, getUser} = require("../controllers/userController");
const { authcat } = require("../middleware/auth");

router.get("/", (req, res) => res.send("This is User Route Page"));
router.post("/register", registerUser); 
router.post("/login", loginUser);
router.get("/:id", authcat , getUser);

module.exports = router;