const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// * middleware
app.use(express.json());
app.use(cors());

// * routes
app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/purchases", require("./routes/purchaseRoutes"));

//  * connect with mongoDB - database

try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.error(error);
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
