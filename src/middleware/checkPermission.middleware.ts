import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { LocalStorage } from 'node-localstorage';
export const localStorage = new LocalStorage('./scratch')

export const authLoginUser = (req: any, res: Response, next: NextFunction) => {
    let authorization = localStorage.getItem('token');
    if (authorization) {
        let accessToken = authorization
        if (!accessToken) {
            res.status(200).json({ message: "Access token is required3." });
        } else {
            let newdata = JSON.parse(accessToken);
            console.log(newdata);
            jwt.verify(newdata.token, process.env.SECRET_KEY, (err, data) => {
                    if (err) {
                        res.status(200).json({ message: "Access token is required3." });
                    } else {
                        next();
                    }
              
            })
        }
    }
    else {
        res.status(200).json({ message: "Access token is required3." });
    }
 
};