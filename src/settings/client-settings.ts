export interface IClientSettings {
    systemCode: string;
    clientCacheExpiresAfter: number;
    listRowsPerpage: number;
    tokenLocalstorageName: string;
    accessRulesLocalstorageName: string;
}

export class ClientSettings implements IClientSettings {
    systemCode: string;
    clientCacheExpiresAfter: number = 20;
    listRowsPerpage: number = 15;
    accessRulesLocalstorageName: string = "accessrules";
    tokenLocalstorageName: string = "token";
    constructor(init?: Partial<ClientSettings>) {
        if(init) {
            Object.assign(this, init)
        }
    }
}