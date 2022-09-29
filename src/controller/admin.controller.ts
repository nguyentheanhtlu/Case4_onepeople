import {Request,Response,NextFunction} from "express";
import User from "../models/schemas/user.models";

export class AdminController {
    constructor() {
    }
    async showAdminPage(req: Request, res: Response, next: NextFunction) {
        let data = req.sessionStore
        console.log(data);
        let user = await User.find()
        // console.log(user)
        res.render('admin/table', {User: user});
    }
    async find(req,res,keyword: any) {
        console.log(keyword);
        let keywords = String(keyword)
        const data = await User.find({ username: { $regex: keywords, $options: "i" } });
        // console.log(data);
         res.status(200).json(data);
    }

}
