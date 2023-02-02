import { Inject, Injectable } from "@nestjs/common";
import { Constant } from "../../../commons/contants.class";
import { Planet } from "../model/planet.entity";
import { SwapiBase } from "../../../core/class/swapi.class";


@Injectable()
export class PlanetRepository extends SwapiBase{

    @Inject(Constant.PLANET_MODEL) private readonly planet: typeof Planet;

    getPlanetById(id: number, url: string, ...values: any[]): Promise<Planet> {
        return this.genericRequestById(1,
            this.planet,
            'swPlanet',
            'PeopleRepository > getPlanetById',
            url,
            values);
    }
}