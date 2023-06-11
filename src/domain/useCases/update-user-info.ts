export interface UpdateUser {
    update (id: string, data: UpdateUser.Params): Promise<void>
}

export namespace UpdateUser {
    export type Params = {
        name?: string;
        job?: string;
    }
}