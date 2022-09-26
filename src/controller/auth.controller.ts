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
        let Email = user.email;
        let userByEmail = await User.findOne({ email: Email });
        let userByUsername = await User.findOne({ username: user.username });
        // console.log(userByEmail)
        // console.log(userByUsername);
        if (userByUsername) {
            return res.json({ usernamemessages: 'Username đã tồn tại !' }) 
        }
         else if (userByEmail) {
            return res.json({ emailmessages: 'Email đã tồn tại !' })
        } else {
            user.password = await bcrypt.hash(user.password, 10);
            let data = {
                username: user.username,
                email: user.email,
                password: user.password,
                facebook_id: '',
                google_id: '',
                role: 'user'
    
            }
            let newUser = await User.create(data);
            return res.status(200).json({ user: newUser });
        }
    };

    login = async (req: Request, res: Response) => { 
        let data = req.body;
        let user = await User.findOne({ email: data.email });
        console.log(user);
        if (!user) {
            console.log("User not found");
            return res.status(200).json({ messages:'notfound'}) 
        } else {
            let comparePassword = await bcrypt.compare(data.password, user.password);
                console.log(comparePassword);
            if (!comparePassword) {
                console.log("Password mismatch");
                return res.status(200).json({ messages:'wrongpassword'})     
            } else {
                let payload= {
                    username: user.username,
                    password: user.password,
                    role: user.role
                }
                let secretKey = process.env.SECRET_KEY
                let token = await jwt.sign(payload, secretKey, {
                    expiresIn: 36000
                });
                const response = {
                    "token": token
                  };
                //   console.log(response);
                  return res.status(200).json(response);
            }
        }
            
    }

   
}



