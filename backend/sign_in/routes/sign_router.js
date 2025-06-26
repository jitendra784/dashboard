const express = require("express");
const router = express.Router();
const {signIn,getuser}= require("../controller/sign_controller");

router.post("/sign",signIn);
router.get("/user",getuser);

module.exports = router;