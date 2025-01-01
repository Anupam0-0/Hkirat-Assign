const { message } = require("prompt");
const Course = require("../models/courseModel");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCourse = async (req, res) => {
  try {
    const { title, description, price, image, content, createdBy } = req.body;
    const course = new Course({
      title,
      description,
      price,
      image,
      content,
      createdBy: req.user.id,
    });

    
    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, price, image, content, createdBy } = req.body;

    const course = await Course.findByIdandUpdate(id, {
      title,
      description,
      price,
      image,
      content,
      createdBy,
    });
    if (!course) {
      res.status(404).json({ message: "Course not found" });
    }

    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      res.status(404).json({ message: "Course not found" });
    }
    res.status(204).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
