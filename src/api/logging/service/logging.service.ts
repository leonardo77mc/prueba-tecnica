import { Inject, Injectable } from "@nestjs/common";
import { Constant } from "../../../commons/contants.class";
import { LogginRepository } from "../repository/loggin-repository.service";
import { Logging } from "../model/logging.entity";

/**
 * Service class for logging data
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Injectable()
export class LoggingService {

    @Inject(Constant.LOGGING_REPOSITORY) private readonly loggingRepository: LogginRepository;

    /**
     * Method to get the logging log
     * @return {Promise<Logging[]>}
     */
    getLogging(): Promise<Logging[]> {
        return this.loggingRepository.getLogging();
    }
}