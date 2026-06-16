import { Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Cron, Interval, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private schedulerRegistry: SchedulerRegistry,
  ) {
    // setInterval(() => {
    //   console.timeEnd();
    //   console.log('interval');
    //   console.time();
    // }, 1000);
  }

  @Interval(1000)
  handleInterval() {
    this.logger.debug('Called every 10 seconds');
  }

  private readonly logger = new Logger('CRON JOB');

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  comenzarCron() {
    const job = new CronJob(`20 * * * * *`, () => {
      this.logger.warn(`time (20) for job to run!`);
    });
    job.start();
  }

  @Cron('45 * * * * *') // Cada segundo 45 de cada minuto
  metodoQueSeEjecutaCadaTanto() {
    this.logger.log('Todo funcionando');
  }

  @Cron('1-3 * * * * *') // Cada segundo 1 a 3 de cada minuto
  // @Cron('* * * 1 * *') // Cada  1ro del mes
  metodoQueSeEjecutaCadaTanto2() {
    this.logger.warn('Todo funcionando');
  }
}
