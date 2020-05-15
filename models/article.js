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
    likedBy: [{ type: ObjectId, ref: "User" }],
    dislikedBy: [{ type: ObjectId, ref: "User" }],
    blockedBy: [{ type: ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
