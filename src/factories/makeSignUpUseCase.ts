import { SignUpUseCase } from '../application/useCases/SignUpUseCase';

export function makeSignUpUseCase(): SignUpUseCase {
  return new SignUpUseCase();
}
