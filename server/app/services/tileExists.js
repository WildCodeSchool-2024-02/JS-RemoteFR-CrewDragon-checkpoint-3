const tileExist = (req, res, next) => {
    const { coordX, coordY } = req.body;
    const error = [];
  if (coordX !== null && coordY !== null) {
    next();
  }
  if(coordX === null){
    error.push({field: coordX, message: "coordX is wrong"})
  }
  if(coordY === null){
    error.push({field: coordY, message: "coordY is wrong"})
  }
  if(error.length !== 0){
    res.sendStatus(422);
  }
};

module.exports = tileExist;
