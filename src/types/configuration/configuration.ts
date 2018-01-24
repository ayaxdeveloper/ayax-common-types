import { Dictionary } from "../../index";

export interface IConfiguration {
    sections: {[name: string] : IConfigurationSection};
}

export interface IConfigurationSection {
    data: {[name: string] : string};
    getByName(section: string, name: string): any;
}