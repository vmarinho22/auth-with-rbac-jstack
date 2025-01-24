import { IController, IResponse } from "../interfaces/Controller";
import { IRequest } from "../interfaces/Request";

export class ListLeadsController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    return {
      statusCode: 200,
      body: {
        accountId: request.account?.id,
        leads: [
          { id: 1, name: "Lead 1" },
          {
            id: 2,
            name: "Lead 2",
          },
        ],
      },
    };
  }
}
