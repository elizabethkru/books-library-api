import { Module } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { BookModule } from 'src/books/books.module';
@Module({
  imports: [BookModule],
  controllers: [ReviewsController],
  providers: [ReviewService],
})
export class ReviewsModule {}
