import { IController, IRequest, IResponse } from "../interfaces/Controller";

export class ListLeadsController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    return {
      statusCode: 200,
      body: {
        accountId: request.accountId,
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
