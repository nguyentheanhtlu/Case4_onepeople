import { Request, Response } from 'express';
export declare class authController {
    showFormLogin: (req: Request, res: Response) => void;
    showFormRegister: (req: Request, res: Response) => void;
    register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
