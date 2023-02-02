import { Module } from "@nestjs/common";
import { PeopleModule } from "./people/people.module";
import { PlanetModule } from "./planet/planet.module";
import { LoggingModule } from "./logging/logging.module";


@Module({
    imports: [
        PeopleModule,
        PlanetModule,
        LoggingModule
    ]
})
export class ApiModule {}