const express = require("express");
const { 
    getAllPosts, 
    createPost, 
    getPostById, 
    updatePost, 
    deletePost 
} = require("../controllers/post");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllPosts);
router.post("/", authMiddleware, createPost);
router.get("/:id", getPostById);
router.put("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;
