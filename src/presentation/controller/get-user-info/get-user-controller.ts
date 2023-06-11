import { LoadUserByName } from "@/domain/useCases/load-user-by-name";
import { ok, serverError } from "@/presentation/helpers/http-helper";
import { Controller } from "@/presentation/protocols/controller";
import { HttpResponse } from "@/presentation/protocols/http";

export class GetUserController implements Controller {
    constructor(
        private readonly _loadUserByName: LoadUserByName,
    ) {}

    async handle(request: GetUserController.Request): Promise<HttpResponse> {
        try {
            const { name } = request;
            const user = await this._loadUserByName.load(name);

            if (user === null) {
                return {
                    statusCode: 404,
                    body: {
                        message: 'User not found',
                    }
                }
            }

            return ok(user);
        } catch (error) {
            return serverError(error);
        }
    }
}

export namespace GetUserController {
    export type Request = {
        name: string;
    }
}