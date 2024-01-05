"use server"

import { LoginSchema } from "@/Schemas";
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";
import * as z  from "zod";




export const login = async(values:z.infer<typeof LoginSchema>) => {

    const validatedFiled=LoginSchema.safeParse(values);

    if(!validatedFiled.success){
        return {error:"Invalid fields"}
    }

    const {email,password}=validatedFiled.data;
  
    try {
        await signIn("credentials",{
            email,
            password,
            redirectTo:DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if(error instanceof AuthError){
            switch (error.type) {
                case "CredentialsSigning":
                    return { error : "Wrong email or password."}
                    default:
                        return {error:"Something went Wrong"}
        }
        
    }
  throw error
}
}
