"use client"
 
import {FcGoogle} from "react-icons/fc"
import { Button } from "../ui/button"


export const Social=()=>{
    return(
        <div className="flex item w-full gap-x-2">
        <Button className="w-full" size="lg" variant="outline" onClick={()=>{}}>
            <FcGoogle/>
        </Button>
        </div>
    )

}