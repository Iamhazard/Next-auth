'use client'
import React, { useState, useTransition } from 'react'
import CardWrapper from './Card-Wrapper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { LoginSchema } from '@/Schemas'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-sucess'
import { login } from '@/actions/action'



const LoginForm = () => {
    const [error, setError] = useState<string |undefined>("");
    const [success, setSuccess] = useState<string |undefined>("");
    const [isPending, startTransition] = useTransition()
    const form=useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })

    const onSubmit=(values:z.infer<typeof LoginSchema>)=>{
        setError("");
        setSuccess("");
        startTransition(()=>{
login(values)
.then((data)=>{
    setError(data.error)
    setSuccess(data.success)
})
        })
        
        
    }
  return (
    <CardWrapper
    headerLabel='Welcome Back'
    backButtonLabel="Don't have an a account?"
    blackButtonHref='/register'
    showSocial
    >
 <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}
    className='space-y-6'
    >
        <div className='space-y-4'>
            <FormField
            control={form.control}
            name='email'
            render={({field})=>(
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input type='email' placeholder='Enter your email address' {...field}
                        disabled={isPending}
                        />
                    </FormControl>
                    <FormMessage/>

                </FormItem>
            )}
            ></FormField>
             <FormField
            control={form.control}
            name='password'
            render={({field})=>(
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input type='password' placeholder='Enter your Password' {...field}
                        disabled={isPending}
                        />
                    </FormControl>
                    <FormMessage/>

                </FormItem>
            )}
            ></FormField>
        </div>
        <FormError message={error}/>
        <FormSuccess message={success}/>
<Button
disabled={isPending}
type='submit'
className='w-full'
>Login</Button>
    </form>

 </Form>

    </CardWrapper>
  )
}

export default LoginForm