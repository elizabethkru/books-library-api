import { IsString, IsInt, IsNotEmpty, Min } from "class-validator";

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;

  @IsInt()
  @Min(1)
  readonly pages: number;
}
