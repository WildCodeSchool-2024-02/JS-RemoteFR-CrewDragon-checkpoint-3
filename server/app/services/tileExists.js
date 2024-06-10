const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  try {
    const tile = await tables.tile.readByCoordinates(
      req.body.coord_x,
      req.body.coord_y
    );
    if (tile.length !== 0) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = tileExists;
