import e from "express";
import Post from "../models/postModel.js";
import User from "../models/userModel.js";
const createPost = async (req, res) => {
  try {
    const { postedBy, img, text } = req.body;
    if (!postedBy || !text) {
      return res
        .status(400)
        .json({ message: "PostedBy and Text are required" });
    }
    const user = await User.findById(postedBy);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "unauthorized to create post" });
    }

    const maxLength = 500;
    if (text.length > maxLength) {
      return res
        .status(400)
        .json({ message: `text must be less than ${maxLength}` });
    }

    const newPost = new Post({ postedBy, text, img });

    await newPost.save();
    res.status(201).json({ message: "post created succesfully", newPost });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: " Post Not Found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: " Post Not Found" });
    }

    if (post.postedBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Unauthorized to delete" });
    }

    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "post deleted succesfully", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export { createPost, getPost, deletePost };
