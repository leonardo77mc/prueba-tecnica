import { forwardRef, Module } from "@nestjs/common";
import { peopleProviders } from "./people.provider";
import { PeopleController } from "./controller/people.controller";
import { PlanetModule } from "../planet/planet.module";

@Module({
  imports: [forwardRef(() => PlanetModule)],
  controllers: [PeopleController],
  providers: [...peopleProviders]
})
export class PeopleModule {}