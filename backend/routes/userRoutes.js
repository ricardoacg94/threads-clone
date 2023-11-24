import express from "express";
import {
  followUnfollow,
  getProfile,
  logout,
  singupUser,
  updateUser,
  userLogin,
} from "../controllers/userControllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();
router.get("/getprofile/:username", getProfile);
router.post("/signup", singupUser);
router.post("/userlogin", userLogin);
router.post("/userlogout", logout);
router.post("/follow/:id", protectRoute, followUnfollow);
router.post("/userupdate/:id", protectRoute, updateUser);

export default router;
