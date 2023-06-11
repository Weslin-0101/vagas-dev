import { UserModel } from "../models/user-model";

export interface AddUserInfo {
    add(data: AddUserInfo.Params): Promise<AddUserInfo.Result>
}

export namespace AddUserInfo {
    export type Params = {
        name: string;
        job: string;
    }

    export type Result = UserModel
}