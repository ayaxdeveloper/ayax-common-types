export interface IUpdatableService<TRequest, TResult> {
    Update(data: TRequest) : Promise<TResult>;
}