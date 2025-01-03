const express = require("express");
const router = express.Router();
const { authcat } = require("../middleware/auth");
const { buyCourse, getCourse } = require("../controllers/purchaseController");

router.post("/buy", authcat, buyCourse);
router.get("/buy", (req, res) => res.send("Get of 'purchases/buy' is working... :) "));
router.get("/get", authcat, getCourse);

module.exports = router;