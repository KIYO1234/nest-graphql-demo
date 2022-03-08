import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class CatsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.method === "GET") {
      console.log("cats middleware (GET) ⭐️");
    } else {
      console.log("cats middleware (not GET) ⭐️");
    }
    next();
  }
}
