import rateLimit from 'express-rate-limit';
import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
    private limiter = rateLimit({
        windowMs: 60 * 1000, // 1 minuto
        max: 10, // máximo de 10 requisições por IP por minuto
        message: 'Você excedeu o limite de requisições por minuto.',
        standardHeaders: true,
        legacyHeaders: false,
    });

    use(req: Request, res: Response, next: NextFunction) {
        this.limiter(req, res, next);
    }
}