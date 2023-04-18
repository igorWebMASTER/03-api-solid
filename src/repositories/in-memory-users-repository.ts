import { Prisma } from '@prisma/client'

export class InMemoryUsersRepository {
  public users: any = []

  // SOLID
  // S - Single Responsibility Principle
  // O - Open/Closed Principle
  // L - Liskov Substitution Principle
  // I - Interface Segregation Principle
  // D - Dependency Inversion Principle

  async create(data: Prisma.UserCreateInput) {
    this.users.push(data)
  }
}
