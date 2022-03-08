import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

const API_KEY = "secret";

const validateRequest = (request: any): boolean => {
  console.log(
    "request.headers.authorization💥: ",
    request.headers.authorization,
  );
  return request.headers.authorization === API_KEY;
};

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    return validateRequest(request);
  }
}
