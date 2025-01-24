import { IData, IMiddleware, IResponse } from "../interfaces/Middleware";
import { IRequest } from "../interfaces/Request";

export class AuthorizationMiddleware implements IMiddleware {
  constructor(private readonly allowedRoles: string[]) {}

  async handle({ account }: IRequest): Promise<IResponse | IData> {
    const accessDenied = {
      statusCode: 403,
      body: {
        error: "Access denied."
      }
    }

    if (!account) {
      return accessDenied;
    }

    if(!this.allowedRoles.includes(account.role)) {
      return accessDenied;
    }

    return {
      data: {}
    }
  }

}
