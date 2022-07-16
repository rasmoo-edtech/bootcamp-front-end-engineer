import { RequestInvestment } from "../interfaces/requestInvestiment.interface";
import { ResponseError } from "../errors/response.error";
import { Investment } from "../models/investment.model";
import { FilterInvestment } from "../interfaces/filterInvestment.interface";
import { clone, copyProperties } from "../utils/investment.utils";

class InvestmentService {
    investments: Array<Investment>;

    constructor() {
        this.investments = [
            new Investment(null, 'CDB - Pós-Fixado', 1000, 103.75, 30),
            new Investment(null, 'CDB - Pós-Fixado', 1000, 104.25, 60),
            new Investment(null, 'CDB - Pós-Fixado', 5000, 112, 180),
            new Investment(null, 'Tesouro Prefixado 2025', 783.33, 13.10, 1080),
            new Investment(null, 'Tesouro Selic 2025', 11868, 0.1, 1080)
        ];
    }

    findAll({ name, minValue, maxValue, minTax, minTime }: FilterInvestment): Investment[] {
        return this.investments.filter((investment) => {
            let condition = true;

            if (name) condition &&= investment.name.startsWith(name);
            if (minValue) condition &&= investment.minValue >= minValue;
            if (maxValue) condition &&= investment.minValue < maxValue;
            if (minTax) condition &&= investment.tax >= minTax;
            if (minTime) condition &&= investment.time >= minTime;

            return condition;
        });
    }

    findById(id: string): Investment {
        const investment = this.investments.find((investment) => investment.id === id);

        if (!investment) {
            throw new ResponseError(404, 'Investment not found.');
        }

        return investment;
    }

    deleteById(id: string): void {
        const index = this.investments.findIndex((investment) => investment.id === id);

        if (index < 0) {
            throw new ResponseError(404, 'Investment not found.');
        }

        this.investments.splice(index, 1);
    }

    save({ name, minValue, tax, time }: RequestInvestment): Investment {
        const newInvestment = new Investment(null, name, minValue, tax, time);

        if (!newInvestment.isValid()) {
            throw new ResponseError(400, 'All attributes must be defined.');
        }

        this.investments.push(newInvestment);

        return newInvestment;
    }

    updateById(id: string, { name, minValue, tax, time }: RequestInvestment): Investment {
        const investment = this.investments.find((investment) => investment.id === id);

        if (!investment) {
            throw new ResponseError(404, 'Investment not found.');
        }

        const copiedInvestment = clone(investment);
        copyProperties({ name, minValue, tax, time }, copiedInvestment);

        if (!copiedInvestment.isValid()) {
            throw new ResponseError(400, 'All attributes must be defined.');
        }

        copyProperties(copiedInvestment, investment);

        return investment;
    }
}

export default new InvestmentService();
