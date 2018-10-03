export interface ISearchableService<TRequest, TResult> {
    Search(request?: TRequest): Promise<TResult[]>;
}