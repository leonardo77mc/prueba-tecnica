import { Inject, Injectable } from "@nestjs/common";
import { Constant } from "../../../commons/contants.class";
import { People } from "../model/people.entity";
import { SwapiBase } from "../../../core/class/swapi.class";

/**
 * Repository class for people data
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Injectable()
export class PeopleRepository extends SwapiBase {

    @Inject(Constant.PEOPLE_MODEL) private readonly people: typeof People;

    async testSwapi(url: string, method: string, body: Object, logging: boolean): Promise<Object> {
        return await this.genericRequest(url, method, body, logging);
    }

    /**
     * Method to obtain the record of people
     * @param {string} id
     * @return {Promise<People>}
     */
    getPeopleById(id: number, url: string, ...values: any[]): Promise<People> {
        return this.genericRequestById(1,
            this.people,
            'swPeople',
            'PeopleRepository > getPeopleById',
            url,
            values);
    }
}