import { Injectable, NotFoundException } from "@nestjs/common";
import { Book } from "./interfaces/book.interface";
import { CreateBookDto } from "./dto/create-book.dto";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  private readonly books: Book[] = [];

  create(createBookDto: CreateBookDto & { id: string }): Book {
    const book: Book = {
      id: createBookDto.id,
      name: createBookDto.name,
      description: createBookDto.description,
      author: createBookDto.author,
      pages: createBookDto.pages,
    };
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }

  getBook(id: string) {
    return this.books.find((b) => b.id === id);
  }

  getBookBool(id: string): boolean {
    return this.books.some((b) => b.id === id);
  }

  delete(id: string): void {
    const index = this.books.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new NotFoundException("Book not found");
    }
    this.books.splice(index, 1);
  }

  update(id: string, updateData: Partial<Book>): Book {
    const index = this.books.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new NotFoundException("Book not found");
    }

    const updatedBook = {
      ...this.books[index],
      ...updateData,
      id,
    };

    this.books[index] = updatedBook;
    return updatedBook;
  }
}
