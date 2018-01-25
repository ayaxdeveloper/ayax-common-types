import { AxiosPromise } from "axios";
import { OperationResult } from "../../types/operation/operation";

export interface IListDataService {
    list<T>(): AxiosPromise<OperationResult<T[]>>;
}