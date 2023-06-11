import { DbUpdateUserInfo } from "@/data/useCases/db-update-user-info";
import { UpdateUser } from "@/domain/useCases/update-user-info";
import { UserPrismaRepository } from "@/infra/db/user-prisma-repository";

export const makeUpdateUserInfo = (): UpdateUser => {
    const updateUserInfoRepository = new UserPrismaRepository();
    return new DbUpdateUserInfo(updateUserInfoRepository);
}