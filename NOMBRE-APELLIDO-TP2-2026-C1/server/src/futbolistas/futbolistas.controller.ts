import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FutbolistasService } from './futbolistas.service';
import { CreateFutbolistaDto } from './dto/create-futbolista.dto';
import { UpdateFutbolistaDto } from './dto/update-futbolista.dto';

@Controller('futbolistas')
export class FutbolistasController {
  constructor(private readonly futbolistasService: FutbolistasService) {}

  @Post('/')
  create(@Body() createFutbolistaDto: CreateFutbolistaDto) {
    return this.futbolistasService.create(createFutbolistaDto);
  }

  @Get()
  findAll() {
    return this.futbolistasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.futbolistasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFutbolistaDto: UpdateFutbolistaDto,
  ) {
    console.log(updateFutbolistaDto);
    return this.futbolistasService.update(id, updateFutbolistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.futbolistasService.remove(id);
  }
}
