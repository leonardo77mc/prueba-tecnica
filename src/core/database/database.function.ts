import { Sequelize } from "sequelize-typescript";
import { Planet } from "../../api/planet/model/planet.entity";
import { People } from "../../api/people/model/people.entity";

/**
 * Method to add multiple records to the database.
 * @return {Promise<void>}
 */
export const populateDB = async (db: Sequelize) => {
    await db.model(Planet).bulkCreate([
        {
            name: "Tatooine",
            gravity: 1.0
        }
    ]);
    await db.model(People).bulkCreate([
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
export const deleteDB = async (db: Sequelize) => {
    await db.model(People).drop();
    await db.model(Planet).drop();
    // await db.logging.drop(); todo
}

/**
 * Method to make a general query to swPlanet, swPeople and receive a simple response,
 * with { raw: true } as an option in the method.
 * @return {Promise<void>}
 */
export const watchDB = async (db: Sequelize) => {
    const planets = await db.model(Planet).findAll({
        raw: true,
    });

    const people = await db.model(People).findAll({
        raw: true,
    });

    console.log("============= swPlanet =============");
    console.table(planets);
    console.log("\n");
    console.log("============= swPeople =============");
    console.table(people);
}