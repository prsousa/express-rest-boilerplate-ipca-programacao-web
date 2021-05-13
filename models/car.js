const cars_db = {
  1: { id: 1, name: "Audi", seats: 3, color: "red" },
  2: { id: 2, name: "Toyota", seats: 5, color: "blue" },
};

let autoIncrement = Object.keys(cars_db).length + 1;

const insert = (car) => {
  const id = autoIncrement++;
  return (cars_db[id] = { ...car, id });
};

const get = (id) => cars_db[id];

const remove = (id) => delete cars_db[id];

const search = (query = "") =>
  Object.values(cars_db).filter((car) =>
    car.name.toLowerCase().includes(query.toLowerCase())
  );

module.exports = { insert, get, remove, search };
