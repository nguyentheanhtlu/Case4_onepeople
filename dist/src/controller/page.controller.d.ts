import { Request, Response, NextFunction } from "express";
export declare class PageController {
    constructor();
    showHomePage(req: Request, res: Response, next: NextFunction): void;
    showBlog(req: Request, res: Response, next: NextFunction): void;
    showContact(req: Request, res: Response, next: NextFunction): void;
    showBlogDetail(req: Request, res: Response, next: NextFunction): void;
    showShop(req: Request, res: Response, next: NextFunction): Promise<void>;
    showMenShop(req: Request, res: Response, next: NextFunction): void;
    showWomenShop(req: Request, res: Response, next: NextFunction): void;
    showKidsShop(req: Request, res: Response, next: NextFunction): void;
    shoppingCart(req: Request, res: Response, next: NextFunction): void;
    checkOut(req: Request, res: Response, next: NextFunction): void;
    showProductDetail(req: Request, res: Response, next: NextFunction): Promise<void>;
    find(req: any, res: any, keyword: any): Promise<void>;
}
