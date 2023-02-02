import { Inject, Injectable } from "@nestjs/common";
import { Constant } from "../../../commons/contants.class";
import { Logging } from "../model/logging.entity";

/**
 * Repository class for logging data
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Injectable()
export class LogginRepository {

    @Inject(Constant.LOGGING) private readonly logging: typeof Logging;

    /**
     * Method to get the logging log
     * @return {Promise<Logging[]>}
     */
    getLogging(): Promise<Logging[]> {
        return this.logging.findAll({raw: true});
    }

}