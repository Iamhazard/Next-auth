"use server"

import { LoginSchema } from "@/Schemas";
import * as z  from "zod";




export const login = async(values:z.infer<typeof LoginSchema>) => {

    const validatedFiled=LoginSchema.safeParse(values);

    if(!validatedFiled.success){
        return {error:"Invalid fields"}
    }
    return {success:"Email Sent"}
  
  
}
