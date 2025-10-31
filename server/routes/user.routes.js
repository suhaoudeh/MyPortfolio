// import express from "express";
// import userCtrl from "../controllers/user.controller.js";
// import authCtrl from "../controllers/auth.controller.js";
// import  authMiddleware  from "../Middleware/auth.js";
// import User from "../models/User.js";

// const router = express.Router(); // Declare router first

// router.get('/profile', authMiddleware, async (req, res) => {
//   const user = await User.findById(req.user._id).select('-password');
//   res.json(user);
// });

// //const router = express.Router();
// router.route("/api/users").post(userCtrl.create);
// router.route("/api/users/:userId")
//   .get(authCtrl.requireSignin, userCtrl.read)
//   .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
//   .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);
// router.route("/api/users").get(userCtrl.list);
// router.param("userId", userCtrl.userByID);
// router.route("/api/users/:userId").get(userCtrl.read);
// router.route("/api/users/:userId").put(userCtrl.update);
// router.route("/api/users/:userId").delete(userCtrl.remove);
// export default router;

////////////////////////////////////////////////////////////////////
import express from "express";
import User from "../models/User.js";
import userCtrl from "../controllers/user.controller.js";
import authMiddleware from "../Middleware/auth.js";

const router = express.Router();

// Authenticated profile route
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create and list users
router.route("/api/users")
  .post(userCtrl.create)
  .get(authMiddleware, userCtrl.list);

// CRUD with auth
router.route("/api/users/:userId")
  .get(authMiddleware, userCtrl.read)
  .put(authMiddleware, userCtrl.update)
  .delete(authMiddleware, userCtrl.remove);

// Param middleware
router.param("userId", userCtrl.userByID);

export default router;