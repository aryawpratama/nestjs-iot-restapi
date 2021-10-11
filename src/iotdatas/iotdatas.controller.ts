import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { IotdatasService } from './iotdatas.service';
import { CreateIotdataDto } from './dto/create-iotdata.dto';

@Controller('iotdata')
export class IotdatasController {
  constructor(private readonly iotdatasService: IotdatasService) {}

  @Post()
  create(@Body() createIotdataDto: CreateIotdataDto) {
    return this.iotdatasService.create(createIotdataDto);
  }
  @Get()
  findAll() {
    return this.iotdatasService.findAll();
  }

  @Put()
  findOne(@Param('id') id: CreateIotdataDto) {
    return this.iotdatasService.findOne(id);
  }
}
