const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");
const { authcat, adminProtect } = require("../middleware/auth");


router.get("/", (req, res) => res.send("This is the Course route"));
router.get("/checkauth",authcat, (req, res) => res.send("This is the Auth Working route"));
router.get("/checkadminauth",authcat, adminProtect, (req, res) => res.send("This is the Admin Auth Working route"));

//  public access
router.get("/all", getAllCourses);
router.get("/course/:id", getCourse);

//  admin access only
router.post("/course/create", authcat, adminProtect, createCourse);
router.put("/course/update/:id", authcat, adminProtect, updateCourse);
router.delete("/course/delete/:id", authcat, adminProtect, deleteCourse);

module.exports = router;
