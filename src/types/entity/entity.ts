import { guid } from "../Guid/Guid";
import { IEntity } from "./IEntity";

export abstract class Entity implements IEntity {
    id: string | number | guid;    
}