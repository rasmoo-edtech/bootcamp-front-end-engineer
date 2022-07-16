import { Investment } from "../models/investment.model";
import { IInvestment } from "../interfaces/investment.interface";

export function copyProperties(source: IInvestment, target: IInvestment) {
    target.name = source.name;
    target.minValue = source.minValue;
    target.tax = source.tax;
    target.time = source.time;
}

export function clone(investment: IInvestment) {
    const { id, name, minValue, tax, time } = investment;
    return new Investment(id, name, minValue, tax, time);
}
