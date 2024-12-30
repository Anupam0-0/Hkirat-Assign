const express = require("express");
const {
  getAllTasks,
  getATask,
  postTask,
  deleteTask,
  handleIsComplete,
} = require("../controllers/taskController");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");

router.get("/", verifyToken, getAllTasks);
router.get("/:id", verifyToken, getATask);
router.post("/", verifyToken, postTask);
router.patch("/:id", verifyToken, handleIsComplete);
router.delete("/:id", verifyToken, deleteTask);

module.exports = router;
