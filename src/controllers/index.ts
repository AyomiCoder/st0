import { Request, Response } from 'express';
import getCurrentDateTime from '../services/datetimeService';

export class IndexController {
    public getInfo(req: Request, res: Response) {
        const response = {
            email: "alukoayomide623@gmail.com",
            current_datetime: getCurrentDateTime(),
            github_url: "https://github.com/AyomiCoder/st0.git"
        };
        res.status(200).json(response);
    }
}