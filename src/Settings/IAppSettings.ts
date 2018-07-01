import { IServerSettings } from "./IServerSettings";
import { IClientSettings } from "./IClientSettings";
import { INotificationSettings } from "./INotificationSettings";

export interface IAppSettings {
    Server(): IServerSettings;
    Client(): IClientSettings;
    Notification(): INotificationSettings;
    Custom(): {[name: string] : any};
}