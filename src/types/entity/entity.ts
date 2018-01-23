import { guid } from "../guid/guid";

export abstract class Entity implements IEntity {
    id: string | number | guid;    
}

export interface IEntity {
    id: number | guid | string;
}