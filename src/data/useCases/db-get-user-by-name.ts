import { LoadUserByName } from "@/domain/useCases/load-user-by-name";
import { LoadUserByNameRepository } from "../protocols/load-user-by-name-repository";

export class DbGetUserByName implements LoadUserByName {
    constructor(
        private readonly _loadUserByNameRepository: LoadUserByNameRepository,
    ) {}
    
    async load(name: string): Promise<LoadUserByName.Result> {
        const loadUser = await this._loadUserByNameRepository.loadByName(name);
        return loadUser;
    }
}