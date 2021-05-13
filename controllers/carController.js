const Car = require("../models/car");

const list = (req, res, next) => {
  const { search } = req.query;
  const cars = Car.search(search);
  res.json(cars);
};

const detail = (req, res, next) => {
  const { id } = req.params;
  const car = Car.get(id);

  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: "Car not found" });
  }
};

const create = (req, res, next) => {
  const { name, seats, color } = req.body;
  const data = { name, seats, color };
  const car = Car.insert(data);

  res.status(201).json(car);
};

module.exports = { list, detail, create };
