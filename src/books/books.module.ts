import { Module } from "@nestjs/common";
import { BooksController } from "./book.controller";
import { BooksService } from "./book.service";
import { PrismaModule } from "prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BookModule {}
