import { Request, Response } from "express";

class HealthController {
    healthy(request: Request, response: Response) {
        response.send({
            message: 'Server is up and running.'
        });
    }
}

export default new HealthController();
