const { Router } = require("express");
const handleSignUp = require("../../controllers/auth/handleSignUp");
const handleLogin = require("../../controllers/auth/handleLogin");

const router = Router();

router.post("/login", handleLogin);
router.post("/sign-up", handleSignUp);

module.exports = router;
