const brcypt = require('bcryptjs');
const {generateToken} = require('../utils/tokenUtils');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const register = async (req, res) => {
    const {name, username, password} = req.body;

    try {
        // first check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                username
            }
        });
        if (existingUser) {
            return res.status(400).json({message: 'User already exists'});
        }

        // hash the password
        const salt = await brcypt.genSalt(10);
        const hashedPassword = await brcypt.hash(password, salt);

        // create the user
        const user = await prisma.user.create({
            data: {
                name,
                username,
                password: hashedPassword
            }
        });

        res.status(201).json({user, token: generateToken(user)});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const login = async (req, res) => {
    const {username, password} = req.body;

    try {
        // check if the user exists
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        });
        if (!user) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        // check if the password is correct
        const isMatch = await brcypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        const token =  generateToken(user);

        res.status(200).json({user, token});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}