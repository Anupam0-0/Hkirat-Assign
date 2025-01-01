const express = require("express");
const mongoose = require("mongoose");
const Admin = require("../models/adminModel");
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");


// * create admin
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // * check if admin already exists
    const admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // * hash password
    const salt = await bcrpyt.genSalt(10);
    const hashedPassword = await bcrpyt.hash(password, salt);

    // * create admin
    const newAdmin = new Admin({ name, email, password: hashedPassword });
    await newAdmin.save();

    // * save admin
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // * check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Admin does not exist" });
    }

    // * compare password
    const validPassword = await bcrpyt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // * create token
    const token = jwt.sign(
      { id: admin._id, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // * send token
    res.status(200).json({ message: "Login successful", token, admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerAdmin, loginAdmin };
