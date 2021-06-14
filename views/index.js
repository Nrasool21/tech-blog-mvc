const { Router } = require("express");

const renderHomePage = require("../src/controllers/view/renderHomePage");
const renderSignUp = require("../src/controllers/view/renderSignupPage")

const router = Router();

router.get("/sign-up", renderSignUp);
router.get("/", renderHomePage);

module.exports = router;
