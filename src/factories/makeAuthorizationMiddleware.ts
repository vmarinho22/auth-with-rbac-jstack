import { IMiddleware } from "../application/interfaces/Middleware";
import { AuthorizationMiddleware } from "../application/middlewares/AuthorizationMiddleware";

export function makeAuthorizationMiddleware(allowedRoles: string[]): IMiddleware {
  return new AuthorizationMiddleware(allowedRoles);
}
