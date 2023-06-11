export interface LoadUserByNameAndDelete {
    delete(name: string): Promise<void>
}