import { Injectable, NotFoundException } from '@nestjs/common';
import { Review } from './interfaces/review.interface';

@Injectable()
export class ReviewService {
  private readonly reviews: Review[] = [];

  create(review: Review): Review {
    this.reviews.push(review);
    return review;
  }

  getBookReviews(bookId: string): Review[] {
    return this.reviews.filter((r) => r.bookId === bookId);
  }

  getReviewById(reviewId: string): Review[] {
    return this.reviews.filter((r) => r.id === reviewId);
  }

  getBookRating(bookId: string) {
    const bookReviews = this.getBookReviews(bookId);
    if (bookReviews.length === 0) return 0;

    const sum = bookReviews.reduce((acc, r) => acc + r.rating, 0);
    return sum / bookReviews.length;
  }

  deleteReview(id: string): void {
    const index = this.reviews.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new NotFoundException('Review not fount');
    }

    this.reviews.splice(index, 1);
  }
}
