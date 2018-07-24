export interface IPropertyProxy<T> {
    behavior: number;
    hasValue: boolean;
    value: T;
}