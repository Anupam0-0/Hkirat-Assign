const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());
app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;