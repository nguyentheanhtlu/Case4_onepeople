import {Request,Response,NextFunction} from "express";
import User from "../models/schemas/user.models";

export class AdminController {
    constructor() {
    }
    async showAdminPage(req: Request, res: Response, next: NextFunction) {
        let data = req.sessionStore
        console.log(data);
        let user = await User.find()
        res.render('admin/table', {User: user});
    }
    async find(req,res,keyword: any) {
        let keywords = String(keyword)
        const data = await User.find({ username: { $regex: keywords, $options: "i" } });

         res.status(200).json(data);
    }

    async showFormEditUser(req: Request, res: Response, next: NextFunction) {
        let user = await User.findById({_id: req.params.id})
        res.render('admin/edit-user', {user: user});
    }

    async updateUser(req: Request,res : Response , next: NextFunction) {
        let data = req.body;
        let role = data.role
        await User.findOneAndUpdate({_id:req.params.id},{role:role});
        res.redirect('/admin/list')
    }

}
