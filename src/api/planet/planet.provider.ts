import { Constant } from "../../commons/contants.class";
import { Planet } from "./model/planet.entity";
import { PlanetRepository } from "./repository/planet.repository";
import { PlanetService } from "./service/planet.service";

export const planetProviders = [
    {
        provide: Constant.PLANET_MODEL,
        useValue: Planet
    },
    {
        provide: Constant.PLANET_REPOSITORY,
        useClass: PlanetRepository
    },
    {
        provide: Constant.PLANET_SERVICE,
        useClass: PlanetService
    }
];