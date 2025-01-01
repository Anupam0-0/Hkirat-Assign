const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

//middlewares
const app = express();
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Task Manager Working A-Okay");
});
//api routes
app.use("/auth", authRoutes);
app.use("/task", taskRoutes);

// connecting with db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
