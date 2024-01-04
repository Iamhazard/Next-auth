"use server"

import { RegisterSchema } from "@/Schemas";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import * as z  from "zod";


export const register = async(values:z.infer<typeof RegisterSchema>) => {

    const validatedFiled=RegisterSchema.safeParse(values);

    if(!validatedFiled.success){
        return {error:"Invalid fields"}
    }
const {email,password,name}=validatedFiled.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser=await getUserByEmail(email)

  if(existingUser){
    return{error:'Email already in use'}
  }

  await db.user.create({
    data:{
        name,
        email,
        password:hashedPassword,
    }
  })

  //for verification




    return {success:"user  created"}
  
  
}
