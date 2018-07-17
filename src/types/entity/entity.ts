import { guid } from "../guid/guid";
import { IEntity } from "./IEntity";

export abstract class Entity implements IEntity {
    id: string | number | guid;    
}