import { AddUserInfoController } from "@/presentation/controller/add-user-info/add-user-controller";
import { Controller } from "@/presentation/protocols/controller";
import { makeAddUserInfo } from "../../useCases/addUserInfo/add-user-info-factory";
import { makeUserValidation } from "./add-user-info-validation-factory";

export const makeAddUserInfoController = (): Controller => {
    const controller = new AddUserInfoController(makeAddUserInfo(), makeUserValidation());
    return controller;
}