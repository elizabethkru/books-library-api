import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  HttpStatus,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { BooksService } from "./book.service";
import { Roles } from "src/common/decorators/roles.decorator";
import { CreateBookDto } from "./dto/create-book.dto";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @Roles(["admin"])
  create(
    @Body()
    data: CreateBookDto,
  ) {
    console.log("fjhfjkfh");
    return this.booksService.create(data);
  }

  @Get()
  findAll() {
    console.log("хуятина");
    return this.booksService.findAll();
  }
}
