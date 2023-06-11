import { UpdateUser } from "@/domain/useCases/update-user-info";
import { ok, serverError } from "@/presentation/helpers/http-helper";
import { Controller } from "@/presentation/protocols/controller";
import { HttpResponse } from "@/presentation/protocols/http";

export class UpdateUserInfoController implements Controller {
    constructor(
        private readonly _updateUserInfo: UpdateUser
    ) {}

    async handle(request: UpdateUserInfoController.Request): Promise<HttpResponse> {
        try {
            const { id, name, job } = request

            await this._updateUserInfo.update(id, { name, job });

            return ok({ message: "User update succesfully!" })
        } catch (error) {
            return serverError(error);
        }
    }
}

export namespace UpdateUserInfoController {
    export type Request = {
        id: string;
        name?: string;
        job?: string;
    }
}