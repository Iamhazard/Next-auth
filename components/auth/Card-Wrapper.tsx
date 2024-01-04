"use client"

import { 
    Card,
    CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from "../ui/card";
import { Social } from "./Social";
import { BackButton } from "./back-button";
import { Header } from "./header";

interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel:string;
    backButtonLabel:string,
    blackButtonHref:string,
    showSocial?:boolean
    
}

const CardWrapper= ({
    children,
    headerLabel,
    backButtonLabel,
    blackButtonHref,
    showSocial = true

}:CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>

            {children}
        </CardContent>
        {showSocial && (
            <CardFooter>
                <Social/>
            </CardFooter>
        )}
        <CardFooter>
            <BackButton  label={backButtonLabel} href={blackButtonHref} />
        </CardFooter>
        


    </Card>
  )
}

export default CardWrapper