import { AddUserInfoRepository } from "@/data/protocols/add-user-info-repository";
import { AddUserInfo } from "@/domain/useCases/add-user-info";
import { PrismaClient } from "@prisma/client";

export class UserPrismaRepository implements AddUserInfoRepository {
    async add(data: AddUserInfo.Params): Promise<AddUserInfo.Result> {
        const prisma = new PrismaClient();
        const result = await prisma.user_Info.create({
            data: data,
        })

        const parseId = result.id.toString();
        return {
            id: parseId,
            name: result.name,
            job: result.job,
        };
    }
}