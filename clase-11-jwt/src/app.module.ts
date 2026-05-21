import { Module } from '@nestjs/common';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AutenticacionModule,
    MongooseModule.forRoot(process.env.MONGO_URI!),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
