export interface ICreatableService<TRequest, TResult> {
    Create(data: TRequest): Promise<TResult>;
}