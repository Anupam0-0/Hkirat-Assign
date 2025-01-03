const User = require('../models/userModel');
const Course = require('../models/courseModel');
const { message } = require('prompt');


// Buy a Course
const buyCourse = async (req, res) => {
    try {

        const userId = req.body.userId;
        const courseId = req.body.courseId;

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.purchasedCourses.includes(courseId)) {
            return res.status(400).json({ message: "Course already purchased" });
        }

        user.purchasedCourses.push(courseId);
        await user.save();
        res.status(200).json({ message: "Course purchased successfully", course });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

// Get a Course
const getCourse = async (req, res) => {
    try {
        const userId = req.user.id; //extract logged in user ID from token
        const user = await User.findById(userId).populate("purchasedCourses");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ 
            message: "User's purchased courses fetched successfully",
            user: user.name,
            purchasedCourses: user.purchasedCourses 
        });
        

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}





module.exports = { buyCourse, getCourse };