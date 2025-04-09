import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/books.module';
import { ReviewsModule } from './Reviews/reviews.module';
@Module({
  imports: [BookModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
