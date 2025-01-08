const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllPosts = async (req, res) => {
    const posts = await prisma.post.findMany({ include: { user: true } });
    res.status(200).json(posts);
};

const createPost = async (req, res) => {
    const { title, body } = req.body;
    const userId = req.user.id;

    const post = await prisma.post.create({
        data: { title, body, userId },
    });
    res.status(201).json(post);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await prisma.post.findUnique({ where: { id: Number(id) } });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;
    const userId = req.user.id;

    const post = await prisma.post.findUnique({ where: { id: Number(id) } });
    if (!post || post.userId !== userId) return res.status(403).json({ message: "Forbidden" });

    const updatedPost = await prisma.post.update({
        where: { id: Number(id) },
        data: { title, body },
    });
    res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    const post = await prisma.post.findUnique({ where: { id: Number(id) } });
    if (!post || post.userId !== userId) return res.status(403).json({ message: "Forbidden" });

    await prisma.post.delete({ where: { id: Number(id) } });
    res.status(204).send();
};

module.exports = { getAllPosts, createPost, getPostById, updatePost, deletePost };
