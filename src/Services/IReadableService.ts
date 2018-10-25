export interface IReadableService<TRequest, TResult> {
    Read(request: TRequest): Promise<TResult>;
}