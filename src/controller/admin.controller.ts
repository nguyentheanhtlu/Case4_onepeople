import {Request,Response,NextFunction} from "express";

export class AdminController {

    constructor() {
    }

    showAdminPage(req: Request, res: Response, next: NextFunction) {
        
        res.render('admin/table');
    }

}