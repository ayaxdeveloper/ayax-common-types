import { AxiosPromise } from "axios";
import { OperationResult, SearchResponse } from "../../index";

export interface ISearchDataService {
    search<T>(request: any): AxiosPromise<OperationResult<SearchResponse<T>>>;
}