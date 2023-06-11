import { DbLoadUserByNameAndDelete } from "@/data/useCases/db-delete-user-by-name";
import { LoadUserByNameAndDelete } from "@/domain/useCases/load-user-by-name-and-delete";
import { UserPrismaRepository } from "@/infra/db/user-prisma-repository";

export const makeDeleteUserByName = (): LoadUserByNameAndDelete => {
    const loadUserByNameAndDeleteRepository = new UserPrismaRepository();
    return new DbLoadUserByNameAndDelete(loadUserByNameAndDeleteRepository);
}