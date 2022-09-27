import {Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
export const authLogin = (req: Request, res: Response, next: NextFunction) => {
    let authorization = req.headers['authorization']
    console.log(authorization);
    if (authorization) {
        let accessToken = authorization.split('')[1];

        if (!accessToken) {
            res.status(401).json({ message: "Access token is required1." });
        } else {
            jwt.verify(accessToken, process.env.SECRET_KEY, (err, data) => {
                if (err) {
                    res.status(401).json({ message: "Access token is required2." });
                } else {
                    // req.decoded = data;
                    next();
                }
            })
        }
    }
    else {
        res.status(401).json({ message: "Access token is required3." });
    }
 
};