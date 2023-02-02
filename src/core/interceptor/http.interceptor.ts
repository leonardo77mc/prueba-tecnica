import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Logging } from "../../api/logging/model/logging.entity";
import { Constant } from "../../commons/contants.class";

@Injectable()
export class HttpInterceptor implements NestInterceptor {

    constructor(@Inject(Constant.LOGGING) private readonly logging: typeof Logging) {
    }

    /**
     * Middleware and data record ip, headers, url of origin.
     * @param {ExecutionContext} context
     * @param {CallHandler} next
     */
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                tap(async () => {
                    const req = context.getArgs()[1].req;
                    const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();
                    const headers = JSON.stringify(req.headers);
                    const originalUrl = req.originalUrl;
                    await this.logging.create({action: originalUrl, header: headers, ip});
                }),
            );
    }
}