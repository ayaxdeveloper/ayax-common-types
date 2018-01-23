export enum HtmlElementType {
    input, select, btn, checkbox, date, datetime, password, textarea
}

export class HtmlElementTypeArray {
    public static Create() {
        let array: {[name: string]: HtmlElementType} = {};
        Object.keys(HtmlElementType).forEach((key)=>{
            array[key] = <HtmlElementType>parseInt(HtmlElementType[<any>key]);
        })
    }
}