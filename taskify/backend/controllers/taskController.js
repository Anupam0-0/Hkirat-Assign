// const express = require('express');
const Task = require("../models/taskModels");


const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getATask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ error: "Couldn't find the task" });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const postTask = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Request body is missing" });
    }
    const { title, isCompleted } = req.body;
    const task = new Task({ title, isCompleted });
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (!deletedTask) return res.status(404).json("Error: Couldn't find the task");
    res.status(200).json(deletedTask);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const handleIsComplete = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json("Error: Couldn't find the task");
    task.isCompleted = !task.isCompleted;
    const updatedTask = await task.save();
    res.status(200).json(updatedTask);
  }
  catch (err) {
    res.status(500).json(err.message);
  }
}

module.exports = { getAllTasks, getATask, postTask, deleteTask, handleIsComplete };
