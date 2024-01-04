'use client'

import { useRouter } from "next/navigation";

interface LoginButtonProps{
    children:React.ReactNode;
    mode?:"modal" |"redirect";
    asChild?:boolean;

}

const LoginButton = ({
    children,
    mode="redirect",
    asChild
}:LoginButtonProps) => {
    const router=useRouter()
    const Onclick=()=>{
        console.log("Button clicked")
        router.push('/login')
    }
if(mode ==="modal"){
    return(
        <span>TODO:Implement modal</span>
    )
}

  return (
    <span onClick={Onclick} className="cursor-pointer">{children}</span>
  )
}

export default LoginButton