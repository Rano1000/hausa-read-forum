import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const username = 'admin'
    const password = 'HausaAdmin2026!'
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.admin.upsert({
        where: { username },
        update: {},
        create: {
            username,
            password: hashedPassword,
        },
    })

    console.log({ user })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
