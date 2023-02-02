import { Module } from "@nestjs/common";
import { loggingproviders } from "./logging.provider";
import { LoggingController } from "./controller/logging.controller";


@Module({
    controllers: [LoggingController],
    providers: [...loggingproviders]
})
export class LoggingModule {}