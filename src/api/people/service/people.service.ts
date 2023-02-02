import { Inject, Injectable } from "@nestjs/common";
import { Constant } from "../../../commons/contants.class";
import { PeopleRepository } from "../repository/people.repository";
import { PlanetRepository } from "../../planet/repository/planet.repository";
import { CommonPeopleModel } from "../model/commonPeople.model";
import { People } from "../model/people.entity";

@Injectable()
export class PeopleService {

    @Inject(Constant.PEOPLE_REPOSITORY) private readonly peopleRepository: PeopleRepository;
    @Inject(Constant.PLANET_REPOSITORY) private readonly planetRepository: PlanetRepository;

    async testSwapi(url: string, method: string, body: Object, logging: boolean): Promise<Object> {
        return this.peopleRepository.testSwapi(url, method, body, logging);
    }

    /**
     * Method to obtain the record of people
     * @param {string} id
     * @return {Promise<People>}
     */
    getPeopleById(id, url): Promise<People> {
        return this.peopleRepository.getPeopleById(id, url,
            'name', 'mass', 'height', ['homeworld_name', 'homeworldName'], ['homeworld_id', 'homeworldId']);
    }

    /**
     * Method to obtain the weight of the person
     * @param {string} id
     * @return {Promise<{peopleWeight: number}>}
     */
    async getWeightOnPlanetRandom():  Promise<{peopleWeight: number}> {

        /** Example with 10 records */
        // const randomPeopleId = Math.random() * (10 - 1) + 1;
        const randomPeopleId = 1;
        /** Example with 10 records */
        // const randomPlanetId = Math.random() * (10 - 1) + 1;
        const randomPlanetId = 1;

        // Example with swapi, but with the id in the queries
        // const people = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/people/${randomPeopleId}`, 'GET', null, true);

        // Example with swapi, but with the id in the queries
        // const planet = await app.swapiFunctions.genericRequest(`https://swapi.dev/api/planet/${randomPlanetId}`, 'GET', null, true);

        const people = await this.peopleRepository.getPeopleById(randomPeopleId, 'url',
            'id', 'name', 'mass', 'height', ['homeworld_name', 'homeworldName'], ['homeworld_id', 'homeworldId']);

        const planet = await this.planetRepository.getPlanetById(randomPlanetId, 'url',
            'id', 'name', 'gravity');

        if (people && planet) {

            const commonPeople = new CommonPeopleModel([
                { property: 'id', value: people['id'] },
                { property: 'name', value: people['name'] },
                { property: 'mass', value: people['mass'] },
                { property: 'height', value: people['height'] },
                { property: 'homeworldName', value: people['homeworldName'] },
                { property: 'homeworldId', value: people['homeworldId'] }]);

            commonPeople.init();

            commonPeople.getWeightOnPlanet(planet['id']);

            if (/[a-zA-Z]/.test(planet['gravity'])) {
                planet['gravity'] = planet['gravity'].replace(planet['gravity'].match(/\W[a-zA-Z]+/)[0], '');
            } else {
                planet['gravity'] = planet['gravity'];
            }

            return {
                peopleWeight: this.peopleRepository.getWeightOnPlanet(people['mass'], Number(planet['gravity']))
            }
        }
    }
}