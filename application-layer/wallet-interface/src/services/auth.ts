import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export class AuthService {
    private readonly SECRET_KEY = process.env.JWT_SECRET || 'default-secret';

    authenticate(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        try {
            const decoded = jwt.verify(token, this.SECRET_KEY);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Invalid token' });
        }
    }

    generateToken(userId: string): string {
        return jwt.sign({ userId }, this.SECRET_KEY, { expiresIn: '24h' });
    }
}