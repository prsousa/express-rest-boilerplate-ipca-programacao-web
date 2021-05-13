const car = require("../models/car");

const list = (req, res, next) => {
  const { search } = req.query;

  const cars = car.search(search);

  res.json(cars);
};

module.exports = { list };
