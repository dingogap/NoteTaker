const router = require("express")();
const path = require("path")

const pagesRouter = require("./pages");
const apiRouter = require("./apis");

router.use("/", pagesRouter);
router.use("/api", apiRouter);

// Get Route to default to homepage - index.html
router.get("*", (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "../public/index.html"));

});

module.exports = router;