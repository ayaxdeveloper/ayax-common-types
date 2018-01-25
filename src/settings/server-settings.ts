export interface IServerSettings {
    baseUrl: string;
    apiPrefix: string;
    tokenCheckMethod: string;
    tokenLocalstorageName: string;
    accessRulesLocalstorageName: string;
    authenticateUrl: string;
}

export class ServerSettings implements IServerSettings {
    accessRulesLocalstorageName: string = "accessrules";
    baseUrl: string;
    apiPrefix: string  = "/api";
    tokenCheckMethod: string;
    tokenLocalstorageName: string = "token";
    authenticateUrl: string;
    constructor(init?: Partial<ServerSettings>) {
        if(init) {
            Object.assign(this, init)
        }
    }
}