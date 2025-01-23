import { SignUpController } from "../application/controllers/SignUpController";
import { makeSignUpUseCase } from "./makeSignUpUseCase";

export function makeSignUpController(): SignUpController {
  const signUpUseCase = makeSignUpUseCase();

  return new SignUpController(signUpUseCase);
}
