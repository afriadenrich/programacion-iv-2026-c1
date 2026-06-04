import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ConfigModule.forRoot(), HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
