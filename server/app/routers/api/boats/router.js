const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, read } = require("../../../controllers/boatActions");

router.get("/", browse);

router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
