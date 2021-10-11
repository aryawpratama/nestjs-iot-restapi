import { IsNotEmpty } from 'class-validator';

export class CreateIotdataDto {
  @IsNotEmpty()
  data: string;
}
