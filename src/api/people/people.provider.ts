import { People } from "./model/people.entity";
import { PeopleRepository } from "./repository/people.repository";
import { Constant } from "../../commons/contants.class";
import { PeopleService } from "./service/people.service";

export const peopleProviders = [
    {
        provide: Constant.PEOPLE_MODEL,
        useValue: People,
    },
    {
        provide: Constant.PEOPLE_REPOSITORY,
        useClass: PeopleRepository
    },
    {
        provide: Constant.PEOPLE_SERVICE,
        useClass: PeopleService
    }
];