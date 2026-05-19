import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FutbolistasModule } from './futbolistas/futbolistas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FutbolistasModule,
    MongooseModule.forRoot(process.env.MONGO_URI!), // Conexión de mongo!
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
