export interface IServerSettings {
    baseUrl: string;
    apiPrefix: string;
    tokenCheckMethod: string;
    authenticateUrl: string;
}

export class ServerSettings implements IServerSettings {
    baseUrl: string;
    apiPrefix: string  = "/api";
    tokenCheckMethod: string;
    authenticateUrl: string;
    constructor(init?: Partial<ServerSettings>) {
        if(init) {
            Object.assign(this, init)
        }
    }
}