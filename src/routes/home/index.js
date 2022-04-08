"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/first", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/signup", ctrl.output.signup);

router.post("/login", ctrl.process.login);
router.post("/signup", ctrl.process.signup);

module.exports = router;