 import express from "express";
// //import { loginUser } from '../controllers/auth.controller.js';
//import { signIn, signOut } from '../controllers/auth.controller.js';
// const router = express.Router();
// router.post('/auth/signIn', signIn);
// router.post('/auth/signOut', signOut);
// export default router;

  import authCtrl from "../controllers/auth.controller.js";
 const router = express.Router();
 router.route("/auth/signIn").post(authCtrl.signIn);
router.route("/auth/signOut").get(authCtrl.signOut);
router.route("/auth/signUp").post(authCtrl.signUp);
 export default router;

// import { signIn, signOut } from '../controllers/auth.controller.js';

// const router = express.Router();
// router.route("/auth/signin").post(signIn);
// router.route("/auth/signout").get(signOut);
// export default router;