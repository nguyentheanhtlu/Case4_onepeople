import { Request, Response, NextFunction } from "express";
export declare class AdminController {
    constructor();
    showAdminPage(req: Request, res: Response, next: NextFunction): Promise<void>;
    find(req: any, res: any, keyword: any): Promise<void>;
}
