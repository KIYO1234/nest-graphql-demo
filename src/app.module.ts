import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { CatsMiddleware } from "./common/middleware/cats.middleware";

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CatsMiddleware) // Middleware の適用
      .forRoutes("cats"); // 適用対象の Route を指定
  }
}
