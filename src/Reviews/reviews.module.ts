import { Module } from "@nestjs/common";
import { ReviewService } from "./reviews.service";
import { ReviewsController } from "./reviews.controller";
import { BookModule } from "src/books/books.module";
import { PrismaModule } from "prisma/prisma.module";
@Module({
  imports: [PrismaModule, BookModule],
  controllers: [ReviewsController],
  providers: [ReviewService],
})
export class ReviewsModule {}
