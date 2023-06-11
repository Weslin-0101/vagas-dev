import { LoadUserByNameAndDelete } from "@/domain/useCases/load-user-by-name-and-delete";
import { ok, serverError } from "@/presentation/helpers/http-helper";
import { Controller } from "@/presentation/protocols/controller";
import { HttpResponse } from "@/presentation/protocols/http";

export class DeleteUserByName implements Controller {
    constructor(
        private readonly _loadUserByNameAndDelete: LoadUserByNameAndDelete

    ) {}
    async handle(request: DeleteUserById.Result): Promise<HttpResponse> {
        try {
            const { name } = request;

            await this._loadUserByNameAndDelete.delete(name);

            return ok({ message: "Usuário deletado com sucesso!"})
        } catch (error) {
            return serverError(error);
        }
    }
}

export namespace DeleteUserById {
    export type Result = {
        name: string
    }
}