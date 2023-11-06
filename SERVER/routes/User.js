const express = require("express");
const { login, signup, sendOTP, changePassword } = require("../controllers/Auth");
const { auth } = require("../middlewares/auth");
const { resetPasswordToken, resetPassword } = require("../controllers/ResetPassword");
const router = express.Router();


//Authentication routes
router.post("/login", login);
router.post("/signup", signup);
router.post("/sendotp", sendOTP);
router.post("/changepassword", auth, changePassword);

//Reset Password
//Route for generating a reset password token 
router.post("/reset-password-token", resetPasswordToken);
router.post("/reset-password", resetPassword);

module.exports = router;