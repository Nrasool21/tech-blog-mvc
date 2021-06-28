const { Router } = require("express");


const auth = require("../../middleware/auth");
const privateRouter = require("./privateRouter");
const renderHomePage = require("../../controllers/view/renderHomePage");
const renderLoginPage = require("../../controllers/view/renderLoginPage");
const renderSignUpPage = require("../../controllers/view/renderSignupPage");
//const renderDashboardPage = require("../../controllers/view/renderDashboardPage");
//const renderPostPage = require("../../controllers/view/renderPostPage");
//const renderCreatePostPage = require("../../controllers/view/renderCreatePostPage");

const router = Router();

router.get("/sign-up", renderSignUpPage);
router.get("/login", renderLoginPage);
//add auth middleware, in order to get this view you should pass the authentication.
//router.get("/dashboard", renderDashboardPage);
//add auth middleware
//router.get("/posts/:id", renderPostPage);
//add auth middleware
//router.get("/create-post", renderCreatePostPage);

router.get("/", renderHomePage);

router.use(auth, privateRouter);

module.exports = router;
