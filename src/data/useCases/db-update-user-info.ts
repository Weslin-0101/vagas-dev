import { UpdateUser } from "@/domain/useCases/update-user-info";
import { UpdateUserInfoRepository } from "../protocols/update-user-info-repository";

export class DbUpdateUserInfo implements UpdateUser {
    constructor(
        private readonly _updateUserInfoRepository: UpdateUserInfoRepository
    ) {}
    async update(id: string, data: UpdateUser.Params): Promise<void> {
        await this._updateUserInfoRepository.update(id, data);
    }
}