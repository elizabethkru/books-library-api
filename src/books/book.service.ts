import { All, Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    name: string;
    description: string;
    author: string;
    pages: number;
  }) {
    return this.prisma.book.create({ data });
  }

  async findAll() {
    return this.prisma.book.findMany();
  }

  async exists(bookId: string): Promise<boolean> {
    const book = await this.prisma.book.findUnique({
      where: { id: bookId },
    });
    return !!book;
  }
}
