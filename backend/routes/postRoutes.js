import express from "express";
import {
  createPost,
  deletePost,
  getFeed,
  getPost,
  likePost,
  replyPost,
} from "../controllers/postControllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();
router.get("/feed", protectRoute, getFeed);
router.get("/getpost/:id", getPost);
router.post("/create", protectRoute, createPost);
router.post("/deletepost/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likePost);
router.post("/reply/:id", protectRoute, replyPost);
export default router;
