import { IClientSettings } from "./IClientSettings";
import { INotificationSettings } from "./INotificationSettings";
import { IServerSettings } from "./IServerSettings";

export interface IAppSettings {
    Server(): IServerSettings;
    Client(): IClientSettings;
    Notification(): INotificationSettings;
    Custom(): {[name: string] : any};
}