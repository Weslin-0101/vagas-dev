import { AddUserInfo } from "@/domain/useCases/add-user-info";
import { AddUserInfoRepository } from "../protocols/add-user-info-repository";

export class DbAddUserInfo implements AddUserInfo {
    constructor(
        private readonly _addUserInfoRepository: AddUserInfoRepository,
    ) {}

    async add(data: AddUserInfo.Params): Promise<AddUserInfo.Result> {
        const user = await this._addUserInfoRepository.add(data);
        return user;
    }
}