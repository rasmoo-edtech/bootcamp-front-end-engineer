import { v4 as uuid } from "uuid";
import { IInvestment } from "../interfaces/investment.interface";

export class Investment implements IInvestment {
    id: string;
    name: string;
    minValue: number;
    tax: number;
    time: number;

    constructor(id: string, name: string, minValue: number, tax: number, time: number) {
        this.id = id ? id : uuid();
        this.name = name;
        this.minValue = minValue;
        this.tax = tax;
        this.time = time;
    }

    isValid(): boolean {
        return Boolean(this.name && this.minValue && this.tax && this.time);
    }
}
