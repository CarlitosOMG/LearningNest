import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class UpdateTaskDto {
  @ValidateIf((_, value) => value !== undefined)
  @IsString()
  @IsNotEmpty()
  title?: string;
}
