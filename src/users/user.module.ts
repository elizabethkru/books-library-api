import { Module } from "@nestjs/common";
import { UserSevice } from "./user.service";
import { UsersController } from "./user.controller";
import { PrismaModule } from "prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UserSevice],
  exports: [UserSevice],
})
export class UsersModule {}
