export interface IClientSettings {
    systemCode: string;
    clientCacheExpiresAfter: number;
    listRowsPerpage: number;
}

export class ClientSettings implements IClientSettings {
    systemCode: string;
    clientCacheExpiresAfter: number = 20;
    listRowsPerpage: number = 15;
    constructor(init?: Partial<ClientSettings>) {
        if(init) {
            Object.assign(this, init)
        }
    }
}