const router = require("express")();
const path = require("path")


const pagesRouter = require("./pages");
const apiRouter = require("./apis");

router.use("/", pagesRouter);
router.use("/api", apiRouter);



module.exports = router;