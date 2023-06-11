import { LoadUserByNameAndDelete } from "@/domain/useCases/load-user-by-name-and-delete";
import { LoadUserByNameAndDeleteRepository } from "../protocols/load-user-by-name-and-delete-repository";

export class DbLoadUserByNameAndDelete implements LoadUserByNameAndDelete {
    constructor(
        private readonly _loadUserByNameAndDeleteRepository: LoadUserByNameAndDeleteRepository,
    ) {}
    
    async delete(name: string): Promise<void> {
        await this._loadUserByNameAndDeleteRepository.loadByNameAndDelete(name);
    }
}