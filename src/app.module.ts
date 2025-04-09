import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { BookModule } from "./books/books.module";
import { ReviewsModule } from "./Reviews/reviews.module";
import { PrismaService } from "prisma/prisma.service";
@Module({
  imports: [BookModule, ReviewsModule],
  controllers: [AppController],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
