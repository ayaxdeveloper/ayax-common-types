import { ICreatableService } from "./ICreatableService";
import { IReadableService } from "./IReadableService";
import { IUpdatableService } from "./IUpdatableService";
import { IDeletableService } from "./IDeletableService";

/** Сервис для Create, Read, Update, Delete операций  */
export interface ISimpleCrudService<TCreateAndUpdateRequest, TReadResult> extends 
    ICreatableService<TCreateAndUpdateRequest, number>, 
    IReadableService<number, TReadResult>, 
    IUpdatableService<TCreateAndUpdateRequest, any>,
    IDeletableService<number, any> {

}