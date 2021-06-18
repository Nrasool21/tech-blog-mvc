const { Router } = require("express");

const renderHomePage = require("../../controllers/view/renderHomePage");
const renderLoginPage = require("../../controllers/view/renderLoginPage");
const renderSignUpPage = require("../../controllers/view/renderSignupPage");
const renderDashboardPage = require("../../controllers/view/renderDashboardPage");

const router = Router();

router.get("/sign-up", renderSignUpPage);
router.get("/login", renderLoginPage);
//add auth middleware, in order to get this view you should pass the authentication.
router.get("/dashboard", renderDashboardPage);
router.get("/", renderHomePage);

module.exports = router;
