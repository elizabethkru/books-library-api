import { IsString, IsInt, IsNotEmpty, Min, IsOptional } from "class-validator";

export class UpdateBookDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly description?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly author?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  readonly pages?: number;
}
