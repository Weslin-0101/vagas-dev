export interface LoadUserByNameRepository {
    loadByName(name: string): Promise<LoadUserByNameRepository.Result>;
}

export namespace LoadUserByNameRepository {
    export type Result = {
        id: string;
        name: string;
        job: string;
    }
}