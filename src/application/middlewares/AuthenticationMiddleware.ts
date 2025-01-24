import jwt from "jsonwebtoken";
import {
  IData,
  IMiddleware,
  IRequest,
  IResponse,
} from "../interfaces/Middleware";
import { env } from "../config/env";

export class AuthenticationMiddleware implements IMiddleware {
  async handle({ headers }: IRequest): Promise<IResponse | IData> {
    const { authorization } = headers;

    if (!authorization) {
      return {
        statusCode: 401,
        body: {
          error: "Invalid Access Token",
        },
      };
    }

    try {
      const [bearer, token] = authorization.split(" ");

      if (bearer !== "Bearer") {
        throw new Error();
      }

      const { sub } = jwt.verify(token, env.jwtSecret);

      return {
        data: {
          accountId: sub,
        },
      };
    } catch {
      return {
        statusCode: 401,
        body: {
          error: "Invalid Access Token",
        },
      };
    }
  }
}
