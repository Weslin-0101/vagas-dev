import { AddUserInfoRepository } from "@/data/protocols/add-user-info-repository";
import { LoadUserByNameAndDeleteRepository } from "@/data/protocols/load-user-by-name-and-delete-repository";
import { LoadUserByNameRepository } from "@/data/protocols/load-user-by-name-repository";
import { PrismaClient } from "@prisma/client";

export class UserPrismaRepository implements 
    AddUserInfoRepository, 
    LoadUserByNameRepository,
    LoadUserByNameAndDeleteRepository
{
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

    async loadByName(name: string): Promise<LoadUserByNameRepository.Result> {
        const prisma = new PrismaClient();
        const result = await prisma.dev.findFirst({
            where: {
                name: name,
            }
        })

        if (result === null) {
            return null;
        }

        const parseId = result.id.toString();
        return {
            id: parseId,
            name: result.name,
            job: result.job,
        }
    }

    async loadByNameAndDelete(name: string): Promise<void> {
        const prisma = new PrismaClient();
        const userFound = await this.loadByName(name);

        const result = await prisma.dev.delete({
            where: {
                id: parseInt(userFound.id),
            }
        })

        if (result === null) {
            return null;
        }
    }
}