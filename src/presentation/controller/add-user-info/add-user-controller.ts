import { AddUserInfo } from "@/domain/useCases/add-user-info";
import { badRequest, ok, serverError } from "@/presentation/helpers/http-helper";
import { Controller } from "@/presentation/protocols/controller";
import { HttpResponse } from "@/presentation/protocols/http";
import { Validation } from "@/presentation/protocols/validation";

export class AddUserInfoController implements Controller {
    constructor(
        private readonly _AddUserInfo: AddUserInfo,
        private readonly _validation: Validation
    ) {}
    
    async handle(request: AddUserInfoController.Request): Promise<HttpResponse> {
        try {
            const error = this._validation.validate(request)
            if (error) {
                return badRequest(error);
            }

            const { name, job } = request;
            const user = await this._AddUserInfo.add({
                name,
                job
            })

            return ok(user);
        } catch (error) {
            return serverError(error)
        }
    }
}

export namespace AddUserInfoController {
    export type Request = {
        name: string,
        job: string
    }
}