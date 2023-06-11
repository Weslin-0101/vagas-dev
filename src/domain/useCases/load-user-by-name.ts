import { UserModel } from "@/domain/models/user-model"

export interface LoadUserByName {
    load(name: string): Promise<LoadUserByName.Result>
}

export namespace LoadUserByName {
    export type Result = UserModel | null
}