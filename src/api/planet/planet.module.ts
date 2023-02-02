import { Module } from "@nestjs/common";
import { planetProviders } from "./planet.provider";
import { PlanetController } from "./controller/planet.controller";

@Module({
    controllers: [PlanetController],
    providers: [...planetProviders],
    exports: [...planetProviders]
})
export class PlanetModule {
}