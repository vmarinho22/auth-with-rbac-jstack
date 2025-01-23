import { AccountAlreadyExists } from "../errors/AccountAlreadyExists";
import { prismaClient } from "../libs/prismaClient";
import { hash } from "bcryptjs";

type Input = {
  name: string;
  email: string;
  password: string;
}

type Output = void;

const SALTS = 10;

export class SignUpUserCase {
  async execute({name, password, email}: Input): Promise<Output> {

    const accountAlreadyExists = await prismaClient.account.findUnique({
      where: {email}
    });

    if(accountAlreadyExists) {
      throw new AccountAlreadyExists();
    }

    const hashedPassword = await hash(password, SALTS);

    await prismaClient.account.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });
  }
}
