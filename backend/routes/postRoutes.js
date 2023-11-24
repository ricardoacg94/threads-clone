import express from "express";
import {
  createPost,
  deletePost,
  getPost,
} from "../controllers/postControllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/create", protectRoute, createPost);
router.get("/getpost/:id", getPost);
router.post("/deletepost/:id", protectRoute, deletePost);
export default router;
