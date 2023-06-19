import { compare } from 'bcryptjs'
import { describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'

describe('Register Use Case', () => {
  it('should hash user password upon registration', async () => {
    const registerUseCase = new RegisterUseCase({
      async create(data){
        return {
          id: 'user-1',
          name: data.name, 
          email: data.email,
          password_hash: data.password_hash,
          created_at: new Date()
        }
      },
      async findByEmail(email) {
        return null
      }
    })

    const { user } = await registerUseCase.execute({
      name: 'Jhon Doe',
      email: 'igor_1917@hotmail.com',
      password: '1234567',
    })

    const isPasswordCorrectlyHashed = await compare(
      '1234567',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})
