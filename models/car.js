const cars_db = {
  1: { name: "Audi", seats: 3, color: "red" },
  2: { name: "Toyota", seats: 5, color: "blue" },
};

const search = (query = "") =>
  Object.values(cars_db).filter((car) =>
    car.name.toLowerCase().includes(query.toLowerCase())
  );

module.exports = { search };
