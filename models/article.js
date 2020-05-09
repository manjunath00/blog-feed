const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const articleSchema = new mongoose.Schema(
  {
    articleName: {
      type: String,
      unique: true,
      required: true,
      maxlength: 150,
      trim: true,
    },
    articleBody: {
      type: String,
      required: true,
      trim: true,
    },
    authorId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    categoryId: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    likedBy: {
      type: Array,
      default: [],
    },
    dislikedBy: {
      type: Array,
      default: [],
    },
    blockedBy: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
