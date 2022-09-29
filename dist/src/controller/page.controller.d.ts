import { Request, Response, NextFunction } from "express";
import { LocalStorage } from 'node-localstorage';
export declare const localStorage: LocalStorage;
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
    showProductDetail(req: Request, res: Response, next: NextFunction): Promise<void>;
}
