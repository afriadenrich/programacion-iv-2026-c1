/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { verify } from 'jsonwebtoken';
import { Observable } from 'rxjs';

// GUARDIA QUE VERIFICA UN TÓKEN, SI EL TÓKEN ES VÁLIDO, { TRUE } else { FALSE }

@Injectable()
export class TokenGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFndXN0aW5AZ21haWwuY29tIiwiaWF0IjoxNzc5NDA5NDY2LCJleHAiOjE3Nzk0MTAzNjYsImF1ZCI6ImluZ3Jlc28ifQ.wT_shQOosAaGGi9Qv4Nu9nOoRBAtsomKFkKur5IVnNc';

    // ¿ Cómo recibo el tóken?
    const http = context.switchToHttp();

    const req: Request = http.getRequest();

    const authorization = req.headers.authorization; // "Bearer eyj...token..."

    const token = authorization?.replace('Bearer ', '') || '';

    try {
      const verificado = verify(token, process.env.CLAVE_SUPERSECRETA!); // Toma el encabezado, toma el payload, toma la CLAVESUPERSECRETA. Sigue todo el paso a paso para generar la firma. Si coincide con la del tóken enviado, es válido.

      const { email } = verificado as { email: string };

      // ¿Cómo le paso el email al controller?

      if (!req.body) {
        req.body = { email };
      } else {
        req.body.emailDelToken = email;
      }

      return true;
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException();
    }
  }
}
