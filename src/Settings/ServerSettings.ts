import { IServerSettings } from "./IServerSettings";

export class ServerSettings implements IServerSettings {
    baseUrl: string;
    apiPrefix  = "/api";
    tokenCheckMethod: string;
    authenticateUrl: string;
    constructor(init?: Partial<ServerSettings>) {
        if(init) {
            Object.assign(this, init)
        }
    }
}