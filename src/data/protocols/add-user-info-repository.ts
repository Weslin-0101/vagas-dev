import { AddUserInfo } from "@/domain/useCases/add-user-info"

export interface AddUserInfoRepository {
    add(data: AddUserInfoRepository.Params): Promise<AddUserInfoRepository.Result>
}

export namespace AddUserInfoRepository {
    export type Params = AddUserInfo.Params
    export type Result = AddUserInfo.Result
}