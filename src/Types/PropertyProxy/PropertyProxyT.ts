import { IPropertyProxy } from "./IPropertyProxyT";
import { PropertyBehavior } from "./PropertyBehavior";

export class PropertyProxy<T> implements IPropertyProxy<T> {
    public behavior: PropertyBehavior;
    public hasValue: boolean;
    public value: T;
}