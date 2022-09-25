import jwt from 'jsonwebtoken';
export const authLogin = (req, res, next) => {
    let authorization = req.headers.authorization
    if (authorization) {
        let accessToken = req.headers.authorization.split('')[1];

        if (!accessToken) { 
            res.redirect('/auth/login');
        } else {
            jwt.verify(accessToken, process.env.SECRET_KEY, (err, data) => { 
                if (err) { 
                    res.redirect('/auth/login');
                } else {
                    req.decoded = data;
                    next();
                }
            })
        }
    }
    else {
        res.redirect('/auth/login');
    }
 
}