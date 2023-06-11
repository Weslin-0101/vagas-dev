import { DeleteUserByName } from "@/presentation/controller/delete-user/delete-user-controller";
import { Controller } from "@/presentation/protocols/controller";
import { makeDeleteUserByName } from "../../useCases/delete-user-by-name/delete-user-by-name-factory";

export const makeDeleteUserByNameController = (): Controller => {
    const controller = new DeleteUserByName(makeDeleteUserByName());
    return controller;
}