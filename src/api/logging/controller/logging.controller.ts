import { Controller, Get, HttpException, HttpStatus, Inject } from "@nestjs/common";
import { Constant } from "../../../commons/contants.class";
import { Logging } from "../model/logging.entity";
import { LoggingService } from "../service/logging.service";

/**
 * Controller class for logging data
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Controller()
export class LoggingController {

    @Inject(Constant.LOGGING_SERVICE) private readonly loggingService: LoggingService;

    /**
     * Method to get the logging log
     * @return {Promise<Logging[]>}
     */
    @Get()
    async getLogging(): Promise<Logging[]> {
        try {
            return await this.loggingService.getLogging();
        } catch (e) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'There is an error in the swapi api request:' + e.message
            }, HttpStatus.FORBIDDEN, { cause: e });
        }
    }
}