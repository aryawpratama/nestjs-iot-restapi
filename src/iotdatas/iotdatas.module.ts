import { Module } from '@nestjs/common';
import { IotdatasService } from './iotdatas.service';
import { IotdatasController } from './iotdatas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IOT, iotSchemaFactory } from 'schema/iot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: IOT.name, schema: iotSchemaFactory }]),
  ],
  controllers: [IotdatasController],
  providers: [IotdatasService],
})
export class IotdatasModule {}
