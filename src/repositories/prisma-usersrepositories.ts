import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaUsersRepositories {
  async create(data) {
    await prisma.user.create({
      data: {
        name,
        email,
        password_hash: password,
      },
    })
  }
}
