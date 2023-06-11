import { GetUserController } from "@/presentation/controller/get-user-info/get-user-controller";
import { Controller } from "@/presentation/protocols/controller";
import { makeGetUserByName } from "../../useCases/get-user-by-name/get-user-by-name-factory";

export const makeGetUserInfoController = (): Controller => {
    const controller = new GetUserController(makeGetUserByName());
    return controller;
}