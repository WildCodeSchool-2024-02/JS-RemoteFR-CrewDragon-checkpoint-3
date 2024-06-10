const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all tile from the database
    const tile = await tables.tile.readAll();

    // Respond with the tile in JSON format
    res.json(tile);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
};
