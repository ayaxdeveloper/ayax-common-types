import {AxiosPromise} from 'axios';
import { OperationResult, Operation } from '../../types/operation/operation';

export interface ICrudDataService {
    get<T>(id: any): AxiosPromise<OperationResult<T>>;
    delete<T>(id: any): AxiosPromise<Operation>;
    update<T>(id: any, data: any): AxiosPromise<Operation>;
    add<T>(data: any): AxiosPromise<OperationResult<T>>;
}