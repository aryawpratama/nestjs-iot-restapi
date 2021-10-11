import { Injectable } from '@nestjs/common';
import { CreateIotdataDto } from './dto/create-iotdata.dto';

@Injectable()
export class IotdatasService {
  create(body: CreateIotdataDto) {
    // const parseData = JSON.parse(body.data);
    console.log(body);

    return `Uploaded`;
  }

  findAll() {
    console.log('returning all data');

    return `This action returns all iotdatas`;
  }
  findOne(data: CreateIotdataDto) {
    console.log('retruning last data');
    return `Returning the last data`;
  }
}
