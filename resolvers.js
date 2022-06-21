import  { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const prisma = new PrismaClient()

const resolvers = {
    Query:{
        users: async ()=>{
           const users =  await prisma.user.findMany()
            return users
        }
    },
    Mutation:{
        signupUser: async (_,{userNew}) =>{
            const user = await prisma.user.findUnique({where:{email:userNew.email}})
            if(user) throw new Error("User already exists with this email. Please Change it")
            const hashedPassword = await bcrypt.hash(userNew.password, 10)
            const newUser = await prisma.user.create({
                    data:{
                        ...userNew,
                        password:hashedPassword
                    }
            })
            return newUser
        },
        signinUser: async (_,{userSignin})=>{
            const user = await prisma.user.findUnique({where:{email:userSignin.email}})
            if(!user) throw new Error("Check your email again")
            const doMatch = await bcrypt.compare(userSignin.pass, user.password)
            if(!doMatch) throw new Error("email or  password is not correct")
            const token = jwt.sign({userId:user.id},process.env.JWT_SECRET)
            return {token}
        }
    },

}

export default resolvers

