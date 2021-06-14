const { Router } = require("express");

const view = require("../../views")

const router = Router();

//router.use("/api", apiRoutes)
//router.use("/auth", authRoutes);
router.use("/", view);


module.exports = router;
