import { HtmlElementType } from "./HtmlElementType";

export class HtmlElementTypeArray {
    public static Create() {
        const array: {[name: string]: HtmlElementType} = {};
        Object.keys(HtmlElementType).forEach((key)=>{
            array[key] = parseInt(HtmlElementType[<any>key]) as HtmlElementType;
        });
    }
}