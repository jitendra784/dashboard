const express = require("express");
const router = express.Router()
const {registerUser, getAuser} = require("../controller/register-controller");

router.post("/add",registerUser);
router.get("/get",getAuser);

module.exports = router;