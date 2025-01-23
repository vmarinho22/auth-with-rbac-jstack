import { z, ZodError } from "zod";
import { IController, IRequest, IResponse } from "../interfaces/Controller";
import { SignUpUseCase } from "../useCases/SignUpUseCase";

const schema = z.object({
  name: z.string(),
  email: z.string().email().min(2),
  password: z.string().min(8),
});

export class SignUpController implements IController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { name, email, password } = schema.parse(body);
      await this.signUpUseCase.execute({ name, email, password });

      return {
        statusCode: 201,
        body: null,
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: {
            message: error.issues,
          },
        };

      }
      throw error;
    }
  }
}
