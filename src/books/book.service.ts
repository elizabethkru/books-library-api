import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  // Создание книги
  async create(data: {
    name: string;
    description?: string;
    author: string;
    pages: number;
  }) {
    return this.prisma.book.create({
      data: {
        name: data.name,
        description: data.description,
        author: data.author,
        pages: data.pages,
      },
    });
  }

  // Получение всеx
  async findAll() {
    return this.prisma.book.findMany();
  }

  // Получение по ID
  async findOne(id: string) {
    const book = await this.prisma.book.findUnique({
      where: { id },
    });

    if (!book) {
      throw new NotFoundException("Book not found");
    }

    return book;
  }

  // Обновление
  async update(
    id: string,
    data: {
      name?: string;
      description?: string;
      author?: string;
      pages?: number;
    },
  ) {
    await this.findOne(id);

    return this.prisma.book.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        author: data.author,
        pages: data.pages,
      },
    });
  }

  // Удаление книги
  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.book.delete({
      where: { id },
    });
  }

  // Проверка существования книги
  async exists(bookId: string): Promise<boolean> {
    const book = await this.prisma.book.findUnique({
      where: { id: bookId },
    });
    return !!book;
  }
}
