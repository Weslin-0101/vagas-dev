import { UpdateUserInfoController } from "@/presentation/controller/update-user-info/update-user-info-controller"
import { makeUpdateUserInfo } from "../../useCases/update-user/update-user-factory"
import { Controller } from "@/presentation/protocols/controller";

export const makeUpdateUserInfoController = (): Controller => {
    const controller = new UpdateUserInfoController(makeUpdateUserInfo());
    return controller;
}