import React, { ReactNode } from 'react'

const AuthLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='h-full flex items-center justify-center bg-blue-700'>
     
{children}

    </div>
  
  )
}

export default AuthLayout