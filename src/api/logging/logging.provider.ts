import { Constant } from "../../commons/contants.class";
import { LogginRepository } from "./repository/loggin-repository.service";
import { LoggingService } from "./service/logging.service";
import { Logging } from "./model/logging.entity";

export const loggingproviders = [
    {
        provide: Constant.LOGGING,
        useValue: Logging
    },
    {
        provide: Constant.LOGGING_REPOSITORY,
        useClass: LogginRepository
    },
    {
        provide: Constant.LOGGING_SERVICE,
        useClass: LoggingService
    }
];