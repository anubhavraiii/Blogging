import express from 'express';
import { home, register }  from '../controllers/auth-controller.js'
import * as authController from '../controllers/auth-controller.js'; // import as a whole
  

const router = express.Router();

//router.route("/").get(home)
router.route("/").get(authController.home);
router.route("/register").post(register);         

export default router;