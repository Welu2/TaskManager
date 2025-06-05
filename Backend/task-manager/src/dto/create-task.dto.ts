import { IsNotEmpty, IsString } from 'class-validator';
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty({ message: 'Title must not be empty' })
  title: string;
}
