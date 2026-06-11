import { Controller, UseGuards } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthGuard } from './auth.guard';

@UseGuards(AuthGuard)
@Controller()
export class AppController {
  @GrpcMethod('MathService', 'Sumar')
  Sumar(data: { numeros: number[] }): { resultado: number } {
    const resultado = (data.numeros || []).reduce((a, b) => a + b);
    return { resultado };
  }

  @GrpcMethod('MathService', 'Mostrar')
  Mostrar() {
    console.log('Funciona');
    return;
  }
}
