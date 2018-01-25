import { Dictionary } from "../../types/dictionary/dictionary";
import { SelectItem } from "../../types/select/select-item";


export interface IDictionaryService {
    GetDictionary(name: string): Promise<Dictionary[]>;
    GetSelectItems(name: string): Promise<SelectItem[]>;
}