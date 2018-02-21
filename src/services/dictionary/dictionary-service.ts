import { Dictionary } from "../../types/dictionary/dictionary";
import { SelectItem } from "../../types/select/select-item";


export interface IDictionaryService {
    GetDictionary<T>(name: string, postfix?: string, useSearch?: boolean): Promise<T[]>;
}