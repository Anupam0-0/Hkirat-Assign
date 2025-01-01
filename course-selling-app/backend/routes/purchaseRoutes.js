const express = require("express");
const router = express.Router();
const { authcat } = require("../middleware/auth");
const { buyCourse, getCourse } = require("../controllers/purchaseController");

router.post("/buy", authcat, buyCourse);
router.get("/get", authcat, getCourse);

module.exports = router;