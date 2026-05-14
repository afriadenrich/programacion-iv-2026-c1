import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @HttpCode(250)
  saludar(): string {
    return this.appService.getHello();
  }
}
