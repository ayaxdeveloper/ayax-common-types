import { IAccessProxyCollection } from "./../../../dist/Types/AccessProxy/IAccessProxyCollection.d";
import { IAccessProxy } from "./IAccessProxy";
export abstract class AccessProxyBase implements IAccessProxy {
    writeable: IAccessProxyCollection = {};    
    hidden: IAccessProxyCollection = {};
}