export interface LoadUserByNameAndDeleteRepository {
    loadByNameAndDelete (name: string): Promise<void>;
}