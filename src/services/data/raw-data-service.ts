import { AxiosPromise } from "axios";
import { OperationResult, Operation } from "../../types/operation/operation";

export interface IRawDataService {
    rawGet<T>(url: string): AxiosPromise<OperationResult<T>>;
    rawPost<T>(url: string, data: any): AxiosPromise<OperationResult<T>>
    rawPut<T>(url: string, data: any): AxiosPromise<Operation>
    rawDelete<T>(url: string): AxiosPromise<Operation>
}