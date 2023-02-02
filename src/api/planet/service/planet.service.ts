import { Inject, Injectable } from "@nestjs/common";
import { Constant } from "../../../commons/contants.class";
import { PlanetRepository } from "../repository/planet.repository";
import { Planet } from "../model/planet.entity";

@Injectable()
export class PlanetService {

    @Inject(Constant.PLANET_REPOSITORY) private readonly planetRepository: PlanetRepository;

    getPlanetById(id, url): Promise<Planet> {
        return this.planetRepository.getPlanetById(id, url);
    }

}