import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class UserSevice {
  constructor(private prisma: PrismaService) {}

  // Получение всеx
  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  // Получение по ID
  async findOneUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException("Book not found");
    }

    return user;
  }

  async remove(id: string) {
    await this.findOneUser(id);

    return this.prisma.user.delete({
      where: { id },
    });
  }
}
