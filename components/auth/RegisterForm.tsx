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
import {RegisterSchema } from '@/Schemas'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-sucess'

import { register } from '@/actions/registerAction'



const RegisterForm = () => {
    const [error, setError] = useState<string |undefined>("");
    const [success, setSuccess] = useState<string |undefined>("");
    const [isPending, startTransition] = useTransition()
    const form=useForm<z.infer<typeof RegisterSchema>>({
        resolver:zodResolver(RegisterSchema),
        defaultValues:{
            email:"",
            password:"",
            name:"",
        }
    })

    const onSubmit=(values:z.infer<typeof RegisterSchema>)=>{
        setError("");
        setSuccess("");
        startTransition(()=>{
register(values)
.then((data)=>{
    setError(data.error)
    setSuccess(data.success)
})
        })
        
        
    }
  return (
    <CardWrapper
    headerLabel='Create an account'
    backButtonLabel="Already have an account?"
    blackButtonHref='/login'
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
            name='name'
            render={({field})=>(
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input type='name' placeholder='Enter your Name' {...field}
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
>Create an Account</Button>
    </form>

 </Form>

    </CardWrapper>
  )
}

export default RegisterForm;