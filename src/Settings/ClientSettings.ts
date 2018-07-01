import { IClientSettings } from "./IClientSettings";


export class ClientSettings implements IClientSettings {
    systemCode: string;
    clientCacheExpiresAfter = 20;
    listRowsPerpage = 15;
    accessRulesLocalstorageName = "accessrules";
    tokenLocalstorageName = "token";
    constructor(init?: Partial<ClientSettings>) {
        if(init) {
            Object.assign(this, init);
        }
    }
}