const tileExist = (req, res, next) => {
    const { coordX, coordY } = req.body;

  if (coordX !==null && coordY !== null) {
    next();
  } else {
    res.sendStatus(422);
  }  
};

module.exports = tileExist;
