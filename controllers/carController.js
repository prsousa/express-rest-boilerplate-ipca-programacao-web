const Car = require("../models/car");

const list = async (req, res, next) => {
  const { search = "" } = req.query;
  const cars = await Car.find({ name: { $regex: search, $options: "i" } });
  res.json(cars);
};

const detail = async (req, res, next) => {
  const { id } = req.params;
  let car = null;
  try {
    car = await Car.findById(id);
  } catch (err) {}

  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: "Car not found" });
  }
};

const create = async (req, res, next) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { list, detail, create };
