import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Delete,
} from "@nestjs/common";
import { ReviewService } from "./reviews.service";
import { Roles } from "src/common/decorators/roles.decorator";
import { BooksService } from "src/books/book.service";
import { Review } from "./interfaces/review.interface";
import { CreateReviewDto } from "./dto/create-rewiew.dto";
import { v4 } from "uuid";

@Controller("reviews")
export class ReviewsController {
  constructor(
    private readonly reviewServise: ReviewService,
    private readonly booksService: BooksService,
  ) {}

  @Get(":bookId")
  @HttpCode(HttpStatus.OK)
  getReviewsByBookId(@Param("bookId") bookId: string): Review[] {
    const reviews = this.reviewServise.getBookReviews(bookId);

    if (reviews.length === 0) {
      throw new NotFoundException("No reviews found for this book");
    }

    return reviews;
  }

  @Get(":reviewId")
  @HttpCode(HttpStatus.OK)
  getReviewsById(@Param("reviewId") reviewId: string): Review[] {
    const reviews = this.reviewServise.getReviewById(reviewId);

    if (reviews.length === 0) {
      throw new NotFoundException("No reviews found for this book");
    }

    return reviews;
  }

  @Delete(":id")
  @Roles(["admin"])
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param("id") id: string): void {
    this.reviewServise.deleteReview(id);
  }
}
