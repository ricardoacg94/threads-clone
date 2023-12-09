import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/helpers/generateTokenSetCookie.js";
const singupUser = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password should have at least 6 characters" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
    });
    await newUser.save();

    if (newUser) {
      generateToken(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username,
        avatar: newUser.avatar,
        bio: newUser.bio,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("error at signingupUser", error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect)
      return res.status(400).json({ error: "Invalid Email or Password" });

    generateToken(user._id, res);
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      bio: user.bio,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
    console.log("error in LoginUser", error);
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "User Logged out successfully" });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
    console.log("error in LogoutUser", error);
  }
};

const followUnfollow = async (req, res) => {
  try {
    const { id } = req.params;
    const userToModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id);
    if (id === req.user._id.toString()) {
      res.status(500).json({
        message: error,
      });
      console.log("you cant follow-unfolow yourself", error);
    }
    if (!userToModify || !currentUser)
      return res.status(400).json({ error: "User Not Found" });
    const isFollowing = currentUser.following.includes(id);

    if (isFollowing) {
      //unfollow User

      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
      res.status(200).json({ error: "User unfollowed Successfully" });
    } else {
      //follow user
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      res.status(200).json({ error: "User followed Successfully" });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
    console.log("error in folloUnfollowUser", error);
  }
};

const updateUser = async (req, res) => {
  const { name, password, email, username, profilePic, bio } = req.body;
  const userId = req.user._id;

  try {
    let user = await User.findById(userId);
    if (!user) return res.status(400).json({ error: "User not Found" });
    if (userId.toString() !== req.params.id)
      return res
        .status(400)
        .json({ message: "You cannot update other users profile" });

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.bio = bio || user.bio;
    user.username = username || user.username;
    user.profilePic = profilePic || user.profilePic;

    user = await user.save();

    res.status(200).json({ error: "User Updated Succesfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in updateUser:", error.message);
  }
};

const getProfile = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username })
      .select("-password")
      .select("-updatedAt");
    if (!user) return res.status(400).json({ error: "User not found " });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in GetProfile", error.message);
  }
};
export {
  singupUser,
  userLogin,
  logout,
  followUnfollow,
  updateUser,
  getProfile,
};
