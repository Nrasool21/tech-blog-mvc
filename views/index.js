const { Router } = require("express");

const renderHomePage = require("../src/controllers/view/renderHomePage");
const renderLoginPage = require("../src/controllers/view/renderLoginPage");
const renderSignUpPage = require("../src/controllers/view/renderSignupPage");

const router = Router();

router.get("/sign-up", renderSignUpPage);
router.get("/login", renderLoginPage);
router.get("/", renderHomePage);

module.exports = router;
