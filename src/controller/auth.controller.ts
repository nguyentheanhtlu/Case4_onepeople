import jwt from 'jsonwebtoken';
import  bcrypt  from 'bcrypt';
import { Request, Response } from 'express'
import User from '../models/schemas/user.models';
import auth from "../middleware/auth.middleware";


export class authController { 

    showFormLogin = (req: Request, res: Response) => { 
        res.render('product/login/login')
    };

    showFormRegister = (req: Request, res: Response) => { 
        res.render('product/login/register')
    };

    register = async (req: Request, res: Response) => { 
        let user = req.body;
        console.log(user);
        user.password = await bcrypt.hash(user.password, 10);
        user = await User.create(user);
        return res.status(200).json({ user: user });
    }
    login = async (req: Request, res: Response) => { 
        let data = req.body;
        let user = await User.findOne({ email: data.email });
        if (!user) {
            console.log("User not found");
            return res.status(404).send({ message: "User not found" });
        } else {
            let comparePassword = await bcrypt.compare(data.password, user.password);
                console.log(comparePassword);
            if (!comparePassword) {
                console.log("Password mismatch");
                return res.status(200).json({ messages:'mk khong dung'})     
            } else {
                let payload= {
                    username: user.username,
                    password: user.password
                }
                let secretKey = process.env.SECRET_KEY
                let token = await jwt.sign(payload, secretKey, {
                    expiresIn: 36000
                });
                const response = {
                    "token": token
                  };
                  console.log(response);
                  return res.status(200).json(response);

            }
        }
            
    }

   
}



