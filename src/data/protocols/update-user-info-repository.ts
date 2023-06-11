import { UpdateUser } from "@/domain/useCases/update-user-info"

export interface UpdateUserInfoRepository {
    update (id: string, data: UpdateUserInfoRepository.Params): Promise<void>
}

export namespace UpdateUserInfoRepository {
    export type Params = UpdateUser.Params
}