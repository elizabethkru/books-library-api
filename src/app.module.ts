import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { BookModule } from "./books/books.module";
import { ReviewsModule } from "./Reviews/reviews.module";
import { PrismaModule } from "prisma/prisma.module";
@Module({
  imports: [PrismaModule, BookModule, ReviewsModule],
})
export class AppModule {}
