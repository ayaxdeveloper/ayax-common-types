import { AxiosPromise } from "axios";
import { OperationResult } from "../../types/operation/operation";
import { SearchResponse } from "../../types/search-response/search-response";

export interface ISearchDataService {
    search<T>(request: any): AxiosPromise<OperationResult<SearchResponse<T>>>;
}