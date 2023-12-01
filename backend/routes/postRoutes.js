import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  likePost,
} from "../controllers/postControllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/create", protectRoute, createPost);
router.get("/getpost/:id", getPost);
router.post("/deletepost/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likePost);
export default router;
