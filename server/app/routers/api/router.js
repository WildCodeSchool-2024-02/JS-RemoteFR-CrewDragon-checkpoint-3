const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const boatsRouter = require("./boats/router");
const gamesRouter = require("./games/router");
const tilesRouter = require("./tiles/router");

router.use("/boats", boatsRouter);
router.use("/games", gamesRouter);
router.use("/tiles", tilesRouter);

/* ************************************************************************* */

module.exports = router;
