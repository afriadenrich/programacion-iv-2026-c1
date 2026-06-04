import { Controller, Get } from '@nestjs/common';
import {
  DiskHealthIndicator,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private readonly disk: DiskHealthIndicator,
    private memory: MemoryHealthIndicator,
  ) {}

  @Get()
  check() {
    return this.health.check([
      () =>
        this.http.pingCheck(
          'cloudinary',
          'https://res.cloudinary.com/djcrlygdv/image/upload/v1780444641/imagenes/zbvrg0gnctmg9nwxfufo.png',
        ),
      () => this.http.pingCheck('google', 'https://google.com'),
      () =>
        this.disk.checkStorage('storage', {
          path: 'G:/',
          thresholdPercent: 0.95, // No supere el 95% de almacenamiento
        }),
      () => this.memory.checkHeap('memory_heap', 1 * 1024), // +1kb
    ]);
  }
}
