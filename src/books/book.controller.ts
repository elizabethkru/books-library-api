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
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { Book } from "./interfaces/book.interface";
import { Roles } from "../common/decorators/roles.decorator";
import { v4 } from "uuid";
import { validate } from "class-validator";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @Roles(["admin"])
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    const errors = await validate(createBookDto);
    if (errors.length > 0) {
      throw new BadRequestException("Validation failed");
    }

    const bookWithId = {
      id: v4(),
      ...createBookDto,
    };
    return this.booksService.create(bookWithId);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  findOne(@Param("id") id: string): Book {
    const book = this.booksService.getBook(id);
    if (!book) {
      throw new NotFoundException("Book not found");
    }
    return book;
  }

  @Delete(":id")
  @Roles(["admin"])
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param("id") id: string): void {
    this.booksService.delete(id);
  }

  @Put(":id")
  @Roles(["admin"])
  @HttpCode(HttpStatus.OK)
  update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto): Book {
    return this.booksService.update(id, updateBookDto);
  }
}
