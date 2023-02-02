import { Controller, Get, HttpException, HttpStatus, Inject, Param, Req } from "@nestjs/common";
import { Constant } from "../../../commons/contants.class";
import { PeopleService } from "../service/people.service";
import { People } from "../model/people.entity";

/**
 * Controller for data flow for people.
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Controller()
export class PeopleController {

    @Inject(Constant.PEOPLE_SERVICE) private readonly peopleService: PeopleService;

    @Get('test')
    async testSwapi(): Promise<Object> {
        try {
            return {
                test: await this.peopleService.testSwapi('https://swapi.dev/api/', 'GET', null, true)
            };
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'There is an error in the swapi api request:' + e.message
            }, HttpStatus.FORBIDDEN, { cause: e });
        }
    }

    /**
     * Method to obtain the record of people
     * @param {string} id
     * @return Promise<{ swPeople: People}>
     */
    @Get(':id')
    async getPeopleById(@Param('id') id: string): Promise<{ swPeople: People}> {
        try {
            return {
                swPeople: await this.peopleService.getPeopleById(Number(id), `api/getPeople/${id}`)
            };
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: e.message
            }, HttpStatus.FORBIDDEN, { cause: e });
        }
    }

    /**
     * Method to obtain the weight of the person
     * @return {Promise<{ peopleWeight: number }>}
     */
    @Get('random/getWeightOnPlanetRandom')
    getWeightOnPlanetRandom(): Promise<{ peopleWeight: number }> {
        try {
            return this.peopleService.getWeightOnPlanetRandom();
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: e.message
            }, HttpStatus.FORBIDDEN, { cause: e.message });
        }
    }

}