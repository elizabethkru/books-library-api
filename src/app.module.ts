import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { BookModule } from "./books/books.module";
import { ReviewsModule } from "./Reviews/reviews.module";
import { PrismaModule } from "prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/user.module";
@Module({
  imports: [PrismaModule, BookModule, ReviewsModule, AuthModule, UsersModule],
})
export class AppModule {}
