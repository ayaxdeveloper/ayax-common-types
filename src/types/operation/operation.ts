export enum OperationStatus {
    Success = 0,
    Failure = 1
}

export class Operation {
    message: string;
    status: OperationStatus;
    constructor(init?: Partial<Operation>) {
        if(init) {
            Object.assign(this, init);
        }
    }
}

export class OperationResult<T> implements IOperationResult<T> {
    result: T;
    message: string;
    status: OperationStatus;
    constructor(init?: Partial<OperationResult<T>>) {
        if(init) {
            Object.assign(this, init);
        }
    }
}

export interface IOperationResult<T> extends Operation {
    result: T;
}