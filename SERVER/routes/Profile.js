const express = require("express");
const { deletAccount, updateProfile, getAllUserDetails, getEnrolledCourses, updateDisplayPicture, instructorDashboard } = require("../controllers/Profile");
const { auth, isInstructor } = require("../middlewares/auth");
const router = express.Router();


router.delete("/deleteProfile", auth, deletAccount);
router.put("/updateProfile", auth, updateProfile);
router.get("/getUserDetails", auth, getAllUserDetails);
router.get("/getEnrolledCourses", auth, getEnrolledCourses);
router.put("/updateDisplayPicture", auth, updateDisplayPicture);
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)

module.exports = router;