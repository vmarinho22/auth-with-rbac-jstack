import { SignInController } from "../application/controllers/SingInController";
import { makeSignInUseCase } from "./makeSignInUseCase";

export function makeSignInController() {
  return new SignInController(makeSignInUseCase());
}
