'use strict';

const Sequelize = require('sequelize');
const models = require('./models');

let sequelize;

sequelize = new Sequelize("sqlite::memory:", {
  logging: false //console.log
});

const db = {
	Sequelize,
	sequelize,
};

for (const modelInit of models) {
	const model = modelInit(db.sequelize, db.Sequelize.DataTypes);
	db[model.name] = model;
}

Object.keys(db).forEach(modelName => {
   if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/**
 * Method that synchronizes the models with the database and creates or recreates the table if it already exists.
 * @return {Promise<void>}
 */
const initDB = async () => {
  await db.swPeople.sync({ force: true });
  await db.swPlanet.sync({ force: true });
  await db.logging.sync({ force: true });
}

/**
 * Method to add multiple records to the database.
 * @return {Promise<void>}
 */
const populateDB = async () => {
  await db.swPlanet.bulkCreate([
    {
      name: "Tatooine",
      gravity: 1.0
    }
  ]);
  await db.swPeople.bulkCreate([
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      homeworld_name: "Tatooine",
      homeworld_id: "/planets/1"
    }
  ]);
}

/**
 * Method to delete the tables swPeople, swPlanet, logging.
 * @return {Promise<void>}
 */
const deleteDB = async () => {
  await db.swPeople.drop();
  await db.swPlanet.drop();
  await db.logging.drop();
}

/**
 * Method to make a general query to swPlanet, swPeople and receive a simple response,
 * with { raw: true } as an option in the method.
 * @return {Promise<void>}
 */
const watchDB = async () => {
  const planets = await db.swPlanet.findAll({
    raw: true,
  });

  const people = await db.swPeople.findAll({
    raw: true,
  });

  console.log("============= swPlanet =============");
  console.table(planets);
  console.log("\n");
  console.log("============= swPeople =============");
  console.table(people);
}

db.initDB = initDB;
db.populateDB = populateDB;
db.watchDB = watchDB;
db.deleteDB = deleteDB;

module.exports = db;
