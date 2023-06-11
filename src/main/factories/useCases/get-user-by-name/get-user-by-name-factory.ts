import { DbGetUserByName } from "@/data/useCases/db-get-user-by-name";
import { LoadUserByName } from "@/domain/useCases/load-user-by-name";
import { UserPrismaRepository } from "@/infra/db/user-prisma-repository";

export const makeGetUserByName = (): LoadUserByName => {
    const loadUserByNameRepository = new UserPrismaRepository();
    return new DbGetUserByName(loadUserByNameRepository);
}