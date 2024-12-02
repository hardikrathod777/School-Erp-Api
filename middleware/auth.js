import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET || "defaultSecret";

const auth = (roles) => {
    return async (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'no token' });
        }

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
        req.user = decoded;

        if (roles && !roles.includes(decoded.role)) {
            return res.status(403).json({ message: 'invalid role' });   
        }

        next();
        });
    };
};

export default auth;
