import { Module } from '@nestjs/common';
import { DatabaseModule } from "./core/database/database.module";
import { ApiModule } from "./api/api.module";
import { APP_INTERCEPTOR, RouterModule } from "@nestjs/core";
import { routes } from "./api/api.routes";
import { HttpInterceptor } from "./core/interceptor/http.interceptor";
import { Logging } from "./api/logging/model/logging.entity";
import { Constant } from "./commons/contants.class";

@Module({
  imports: [
      DatabaseModule,
      RouterModule.register(routes),
      ApiModule
  ],
  providers: [
      {
        provide: Constant.LOGGING,
        useValue: Logging
      },
      {
          provide: APP_INTERCEPTOR,
          useClass: HttpInterceptor,
      },
  ],
})
export class AppModule {}
