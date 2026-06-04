import {
  Controller,
  Logger,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.config({
  cloud_name: 'djcrlygdv',
  api_key: '328234276456568',
  api_secret: 'V2fAMdDkrjKwmFSbtOSIAQxa6dk',
});

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  logger = new Logger('PETICIONES', { timestamp: true });

  // npm i -D @types/multer
  @Post('')
  @UseInterceptors(
    FileInterceptor('archivo', {
      storage: new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
          public_id: (req, file) => `IMG_${Date.now()}_archivos`,
        },
      }),
    }),
  )
  async subidaDeArchivos(@UploadedFile() file: Express.Multer.File) {
    this.logger.log('SUBIDA DE ARCHIVO');
    return file.path;
  }

  @Post('/paso')
  @UseInterceptors(FileInterceptor('archivo', {}))
  async paso(@UploadedFile() file: Express.Multer.File) {
    if (file.size > 2 * 1024 * 1024) {
      return { mensaje: 'archivo muy grande' };
    }

    const tiposPermitidos = ['image/png', 'image/jpg', 'image/jpeg'];

    if (!tiposPermitidos.includes(file.mimetype)) {
      return { mensaje: 'tipo no permitido' };
    }

    cloudinary.config({
      cloud_name: 'djcrlygdv',
      api_key: '328234276456568',
      api_secret: 'V2fAMdDkrjKwmFSbtOSIAQxa6dk',
    });

    const public_id = `IMG_${Date.now()}_archivos`;
    const uploader = cloudinary.uploader.upload_stream({
      folder: 'imagenes',
      public_id: public_id,
    }); // permite mandar un buffer

    const resultado = uploader.end(file.buffer);

    resultado.once('finish', () => {
      const url = cloudinary.url('imagenes/' + public_id);
      return url;
    });
  }
}
