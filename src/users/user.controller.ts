import {
  Controller,
  Get,
  Param,
  HttpCode,
  HttpStatus,
  Delete,
} from "@nestjs/common";
import { UserSevice } from "./user.service";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserSevice) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.userService.findAllUsers();
  }

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  findOne(@Param("id") id: string) {
    return this.userService.findOneUser(id);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param("id") id: string) {
    await this.userService.remove(id);
  }
}
