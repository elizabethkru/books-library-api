import { IsString, IsInt, Min, Max, Length } from "class-validator";

export class CreateReviewDto {
  @IsString()
  @Length(10, 1000)
  text: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
