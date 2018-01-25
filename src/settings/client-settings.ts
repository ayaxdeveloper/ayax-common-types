export interface IClientSettings {
    systemCode: string;
    clientCacheExpiresAfter: number;
    listRowsPerpage: number;
}

export abstract class BaseClientSettings {
    static systemCode: string;
    static clientCacheExpiresAfter: number = 20;
    static listRowsPerpage: number = 15;
    constructor(init?: Partial<BaseClientSettings>) {
        if(init) {
            Object.assign(this, init)
        }
    }
}