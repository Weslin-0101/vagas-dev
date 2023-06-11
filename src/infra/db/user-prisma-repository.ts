import { AddUserInfoRepository } from "@/data/protocols/add-user-info-repository";
import { PrismaClient } from "@prisma/client";

export class UserPrismaRepository implements AddUserInfoRepository {
    async add(data: AddUserInfoRepository.Params): Promise<AddUserInfoRepository.Result> {
        const prisma = new PrismaClient();
        const result = await prisma.dev.create({
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