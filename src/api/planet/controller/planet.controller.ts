import { Controller, Get, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { Constant } from "../../../commons/contants.class";
import { PlanetService } from "../service/planet.service";
import { Planet } from "../model/planet.entity";

/**
 * Controller for the data flow of the planets.
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Controller()
export class PlanetController {

    @Inject(Constant.PLANET_SERVICE) private readonly planetService: PlanetService;

    @Get(':id')
    async getPlanetById(@Param('id') id: string): Promise<Planet> {
        try {
            return await this.planetService.getPlanetById(Number(id), `api/getPlanet/${id}`)
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'There is an error in the swapi api request:' + e.message
            }, HttpStatus.FORBIDDEN, { cause: e });
        }
    }

}