import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const grcp = context.switchToRpc();
    const cntx = grcp.getContext<{ internalRepr: Map<string, string[]> }>();
    return (
      cntx.internalRepr.get('api_key')![0] ===
      'SOLO YO PUEDO USAR ESTO MUAJAJAJAJAAJAJ'
    );
  }
}
