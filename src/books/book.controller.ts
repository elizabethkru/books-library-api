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
} from "@nestjs/common";
import { BooksService } from "./book.service";
import { Roles } from "src/common/decorators/roles.decorator";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // Создание книги
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  // Получение всех книг
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.booksService.findAll();
  }

  // Получение одной книги
  @Get(":id")
  @HttpCode(HttpStatus.OK)
  findOne(@Param("id") id: string) {
    return this.booksService.findOne(id);
  }

  // Обновление книги
  @Put(":id")
  @HttpCode(HttpStatus.OK)
  update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  // Удаление книги
  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param("id") id: string) {
    await this.booksService.remove(id);
  }
}
