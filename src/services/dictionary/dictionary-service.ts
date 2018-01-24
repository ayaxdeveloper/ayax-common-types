import { Dictionary, SelectItem } from "../../index";

export interface IDictionaryService {
    GetDictionary(name: string): Promise<Dictionary[]>;
    GetSelectItems(name: string): Promise<SelectItem[]>;
}