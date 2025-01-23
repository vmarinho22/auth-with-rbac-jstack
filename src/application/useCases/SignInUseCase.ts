import { env } from "../config/env";
import { InvalidCredentials } from "../errors/InvalidCredentials";
import { prismaClient } from "../libs/prismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

type Input = {
  email: string;
  password: string;
};

type Output = {
  accessToken: string;
};

export class SignInUserCase {
  async execute({ email, password }: Input): Promise<Output> {
    const account = await prismaClient.account.findUnique({
      where: { email },
    });

    if (!account) {
      throw new InvalidCredentials();
    }

    const isPasswordCorrect = await compare(password, account.password);

    if (!isPasswordCorrect) {
      throw new InvalidCredentials();
    }

    const accessToken = sign({ sub: account.id }, env.jwtSecret, {
      expiresIn: "1d",
    });

    return { accessToken };
  }
}
