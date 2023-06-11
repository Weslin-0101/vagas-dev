import { DbAddUserInfo } from "@/data/useCases/db-add-user-info";
import { AddUserInfo } from "@/domain/useCases/add-user-info";
import { UserPrismaRepository } from "@/infra/db/user-prisma-repository";

export const makeAddUserInfo = (): AddUserInfo => {
    const addPrismaRepository = new UserPrismaRepository();
    return new DbAddUserInfo(addPrismaRepository);
}