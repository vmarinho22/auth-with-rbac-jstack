import jwt, { JwtPayload } from "jsonwebtoken";
import {
  IData,
  IMiddleware,
  IResponse,
} from "../interfaces/Middleware";
import { env } from "../config/env";
import { IRequest } from "../interfaces/Request";

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

      const { sub, role } = jwt.verify(token, env.jwtSecret) as JwtPayload;

      return {
        data: {
          account: {
            id: sub,
            role: role,
          },
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
