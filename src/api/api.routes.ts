import { Routes } from "@nestjs/core";
import { ApiModule } from "./api.module";
import { PeopleModule } from "./people/people.module";
import { PlanetModule } from "./planet/planet.module";
import { LoggingModule } from "./logging/logging.module";

/**
 * Dynamic routes
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
export const routes: Routes = [
    {
        path: 'api',
        module: ApiModule,
        children: [
            {
                path: 'getPeople',
                module: PeopleModule
            },
            {
                path: 'getPlanet',
                module: PlanetModule
            },
            {
                path: 'getLogs',
                module: LoggingModule
            }
        ],
    },
];