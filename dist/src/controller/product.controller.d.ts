import { Request, Response, NextFunction } from "express";
export declare class ProductController {
    formCreateProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    store(req: any, res: Response, next: NextFunction): Promise<void>;
    productList(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    editProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    edit(req: Request, res: Response, next: NextFunction): Promise<void>;
}
