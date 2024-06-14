const express = require('express');
const router = express.Router();

const controller = require('../../controllers/admin/auth.controller');

router.post('/login', controller.loginPost);

router.get("/logout", controller.logout);

router.post("/register", controller.register);

module.exports = router;