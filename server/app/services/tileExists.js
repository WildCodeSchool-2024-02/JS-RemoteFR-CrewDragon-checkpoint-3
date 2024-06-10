const tileExists = (req, res, next) => {
  const { coordX, coordY } = req.body;

  const errors = [];

  // put your validation rules here
 if (coordX === null) {
   errors.push({ field: "coord_x", message: "Should be between 0 and 11" });
 } 
 if (coordY === null) {
   errors.push({
     field: "coord_y",
     message: "Should be between 0 and 5",
   });
 }

  if (errors.length === 0) {
    next();
  } else {
    res.status(422).json({ validationErrors: errors });
  }
};

module.exports = tileExists;