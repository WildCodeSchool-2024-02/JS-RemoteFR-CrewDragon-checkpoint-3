const tileExistsMiddleware = (req, res, next) => {
  const { coordX, coordY } = req.body;

  if (coordX >= 0 && coordX <= 11 && coordY >= 0 && coordY <= 5) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExistsMiddleware;
