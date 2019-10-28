export class UrlsSettings {
    authReaderBaseUrl: string;
    authIdentityBaseUrl: string;
    primaryMarketBaseUrl: string;
    constructor(init?: Partial<UrlsSettings>) {
        if (init) {
            Object.assign(this, init);
        }
    }
}