import { SearchResponse } from "../Types/SearchResponse/SearchResponse";

export interface ISearchableService<TRequest, TResult> {
    Search(request?: TRequest): Promise<SearchResponse<TResult[]>>;
}