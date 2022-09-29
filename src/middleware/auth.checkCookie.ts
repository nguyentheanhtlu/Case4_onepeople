export const checkLogin = (req: any, res: any, next: any) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        next();
    } else {
        return res.status(200).json({ messages: "chualogin" });
    }
}