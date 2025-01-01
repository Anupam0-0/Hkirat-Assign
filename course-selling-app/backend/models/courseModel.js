const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      min: 6,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: "https://placehold.co/400x250",
    },
    content: {
      type: String,
      default: "https://youtube.com/",
    },
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin" 
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
