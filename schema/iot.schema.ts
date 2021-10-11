import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IOTDocument = IOT & Document;

@Schema()
export class IOT {
  @Prop()
  VACIn: number;

  @Prop()
  VDCIn: number;

  @Prop()
  DCCurrentIn: number;

  @Prop()
  serverStatus: number;
}
export const iotSchemaFactory = SchemaFactory.createForClass(IOT);
