import { Request, Response } from "express";
import { LocalStorage } from 'node-localstorage';
export declare const localStorage: LocalStorage;
export declare class authController {
    showFormLogin: (req: Request, res: Response) => void;
    showFormRegister: (req: Request, res: Response) => void;
    register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    verify: (req: any, res: any) => void;
    checkLogin: (req: Request, res: Response) => void;
}
