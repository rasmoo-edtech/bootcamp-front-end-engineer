import { Request, Response } from "express";
import { FilterInvestment } from "../interfaces/filterInvestment.interface";
import investmentService from "../services/investment.service";

class InvestmentController {
    findAll(request: Request, response: Response) {
        const { name, minValue, maxValue, minTax, minTime } = request.query as FilterInvestment;
        const investments = investmentService.findAll({ name, minValue, maxValue, minTax, minTime });

        response.json(investments);
    }

    findById(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const investment = investmentService.findById(id);
            response.status(200).json(investment);
        } catch (error: any) {
            response.status(error.statusCode).json({ message: error.message });
        }
    }

    deleteById(request: Request, response: Response) {
        const { id } = request.params;

        try {
            investmentService.deleteById(id);
            response.status(204).json();
        } catch (error: any) {
            response.status(error.statusCode).json({ message: error.message });
        }
    }

    save(request: Request, response: Response) {
        try {
            const newInvestment = investmentService.save(request.body);
            response.status(201).json(newInvestment);
        } catch (error: any) {
            console.log('ERROR: ', error);
            response.status(error.statusCode).json({ message: error.message });
        }
    }

    updateById(request: Request, response: Response) {
        const { id } = request.params;

        try {
            investmentService.updateById(id, request.body);
            response.json({ message: 'Investment updated successfully.' });
        } catch (error: any) {
            response.status(error.statusCode).json({ message: error.message });
        }
    }
}

export default new InvestmentController();
