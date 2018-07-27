import { IAccessProxyCollection } from "./IAccessProxyCollection";
export interface IAccessProxy {
    writeable: IAccessProxyCollection;
    hidden: IAccessProxyCollection;
}