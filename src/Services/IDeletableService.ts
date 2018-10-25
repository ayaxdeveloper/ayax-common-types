export interface IDeletableService<TRequest, TResult> {
    Delete(request: TRequest): Promise<TResult>;
}