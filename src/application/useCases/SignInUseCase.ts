import { env } from "../config/env";
import { InvalidCredentials } from "../errors/InvalidCredentials";
import { prismaClient } from "../libs/prismaClient";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

type Input = {
  email: string;
  password: string;
};

type Output = {
  accessToken: string;
};

export class SignInUseCase {
  async execute({ email, password }: Input): Promise<Output> {
    const account = await prismaClient.account.findUnique({
      where: { email },
    });

    if (!account) {
      throw new InvalidCredentials();
    }

    const isPasswordCorrect = await bcrypt.compare(password, account.password);

    if (!isPasswordCorrect) {
      throw new InvalidCredentials();
    }

    const accessToken = jwt.sign(
      { sub: account.id, role: account.role },
      env.jwtSecret,
      {
        expiresIn: "1d",
      }
    );

    return { accessToken };
  }
}
